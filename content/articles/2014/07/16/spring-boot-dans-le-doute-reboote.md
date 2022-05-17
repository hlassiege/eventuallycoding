---
id: "1089"
title: "Spring Boot : dans le doute reboote"
description: "[![spring-boot-logo](/images/28307-spring-boot-logo.png)](http://eventuallycoding.com/wp-content/uploads/2014/07/28307-spring-boot-logo.png)Le dernier..."
date: "2014-07-16"
categories: 
  - "waza"
tags: 
  - "devops"
  - "monitoring"
  - "spring"
  - "spring-boot"
img: "28307-spring-boot-logo.png"
cover: "cover1.jpg"
---

[![spring-boot-logo](/images/28307-spring-boot-logo.png)](http://eventuallycoding.com/wp-content/uploads/2014/07/28307-spring-boot-logo.png)Le dernier billet date de plus d’un mois, ça commence à faire. Et pour cause, beaucoup de travail à été réalisé sur Hopwork ne laissant que peu de place pour écrire.

Mais je m’y remets, car écrire un billet de blog me permet de me reposer des questions sur les choix qui ont été pris et de me laisser une sorte de doc, un historique.

Et pour ce billet, je vais parler de [Spring boot](http://projects.spring.io/spring-boot/).

Pour ceux qui ne connaissent pas, [Spring Boot](http://projects.spring.io/spring-boot/) est construit au dessus de Spring 4 et propose des projets préconfigurés permettant de développer très rapidement car une grosse partie du boulot est déjà mâché.

Démarrer avec Spring Boot consiste simplement à rajouter des dépendances Maven et à écrire un “main”.

Exemple avec le service de recherche d'Hopwork :

\[gist id="27bd5a5e5bc8bb1da94c" file="pom.xml" width="100%"\]

Et le main :

\[gist id="27bd5a5e5bc8bb1da94c" file="HopSearchApplication.java" width="100%"\]

Ceci suffit pour avoir une appli avec monitoring, sécurité, gestion de configuration par profile et j’en passe !

## Pourquoi avoir choisi Spring Boot ?

Eh bien il y a quelques années (en 2009),  [je découvrais Play Framework](http://www.eventuallycoding.com/index.php/jouons/) et enfin, je redécouvrais que c’était agréable de faire du web en Java. Dès que je pouvais je ressortais Play Framework. Ce fut notamment la stack choisie sur localizeyourapps. Tout ceux qui ont subit Struts, JSF et consorts comprendront ce petit besoin de repartir sur des choses simples.

Malheureusement, la sortie de la version 2.x de Play Framework a définitivement tué la version simple de Play 1.x que j’utilisais pour en faire… autre chose. Inutile que je m’y attarde, sinon ca va troller sec.

En terme de “framework haute productivité” il y a eu pas mal d’alternatives intéressantes que je pourrais citer : [sparkframework](http://www.sparkjava.com/), [jhipster](http://jhipster.github.io/), [ninjaframework](http://www.ninjaframework.org/), [wisdom](http://wisdom-framework.org/), [fluenthttp](https://github.com/CodeStory/fluent-http), [vraptor](http://www.vraptor.org/).

Pour les différents services d’Hopwork qui composent l’application nous avons beaucoup hésité. Et puis finalement nous sommes partis sur Spring Boot. Et pour tout dire, nous en sommes très satisfaits. On reste dans l’univers Java/Spring donc une communauté très grande et des tas d’outils déjà existants qui supporte le framework.

Je ne vais pas aborder tous les points de Spring Boot qui en font un super framework, j’aimerais surtout évoquer l’aspect “exploitation/monitoring”.

## Un framework qu’on exploite

### Un monitoring simple via le pid du process

Premier point, Spring Boot créé un fichier jar contenant toute votre application et qui peut démarrer avec un simple java -jar application.jar.

En plus d’être démarrable facilement, ce jar à l’avantage de créer un fichier pid ([pour peu qu’on place un fichier de conf dans META-INF](http://www.kubrynski.com/2014/05/managing-spring-boot-application.html)) sur disque permettant ensuite d’être monitoré par un process externe comme [Monit](http://mmonit.com/monit/).

Tout bête comme feature, mais très pratique.

### Des profiles de configuration

Un profile de configuration ? Eh bien par défaut, Spring Boot démarre avec une configuration qui va charger un fichier de configuration nommé application.properties présent dans le classpath.

Mais il est aussi capable d’accepter une option pour aller le chercher sur le disque :

java -jar myproject.jar --spring.config.location=file:/override.properties

Sur Hopwork, on utilise plutot la notion de profile pour l’instant, c’est à dire que l’on spécifie le profil de lancement (dev, integ, prod) de la façon suivante au démarrage :

java -jar myproject.jar --spring.profiles.active=integ

Spring va automatiquement aller chercher les fichiers application.properties et application-integ.properties, ce dernier surchargeant les valeurs si elles sont présentes.

Nous utilisons la même notion de profile pour le fichier de configuration des logs qui diffère selon les environnements :

java  -Dlogging.config=classpath:logback-integ.xml -jar myproject.jar --spring.profiles.active=integ

### Du monitoring

Si vous ajoutez en dépendance spring-boot-actuator, vous obtenez des outils supplémentaires pour le monitoring de votre application. Spring Boot va automatiquement déployer des endpoints REST permettant de diagnostiquer votre appli : sa configuration, ses variables d’environnements, le profile utilisé, effectuer un threaddump, checker le statut des composants etc...

Je m’attarde juste sur l’url /health. Cette Url expose des infos sur la santé de votre application. Si vous ajoutez certaines dépendances, comme spring-boot-starter-amqp, ceux-ci vont enrichir ces infos de l’état de santé de l’outil auquel il est connecté.

Par exemple :

\[gist id="27bd5a5e5bc8bb1da94c" file="health.json" width="100%"\]

Vous pouvez facilement ajouter vos propres health. Sur l’exemple plus haut j’ai un jestHealth qui n’a couté que quelques lignes :

\[gist id="27bd5a5e5bc8bb1da94c" file="JestHealth.java" width="100%"\]

Encore une fois, une belle url à monitorer pour un outil comme [Monit](http://mmonit.com/monit/).

Dans la même veine, il existe un endpoint /metrics permettant de collecter des métriques sur votre applicatif. Nous ne l’avons pas encore exploité donc je ne détaillerais pas.

Afin d’être complet, je trouve qu’il est préférable de séparer le port des endpoints d’admin/monitoring du reste des endpoints applicatifs, ce qui se fait simplement par configuration :

management.port=8089
server.port=8087

Et pour peu que vous ayez une dépendance sur spring-boot-starter-security

vous pouvez également configurer une basic auth sur ces endpoints :

security.user.name=user
security.user.password=password
management.security.role=SUPERUSER

### Un cycle de développement court

Je ne sais pas s’il est encore besoin de convaincre des personnes d’avoir un temps de build/lancement court mais j’en remet une couche. Moins vous passez de temps à compiler/lancer votre application, moins vous avez de chances d’être distraits et enclins à regarder Twitter, Facebook ou que sais-je encore. Vous restez dans votre flot de développement plus aisèment. C’est ce qui explique le succès d’un langage comme PHP, un simple F5 sur la page (ou simplement le plugin livreload) et vous avez le résultat immédiate de votre dev.

Au sein de Hopwork, nous utilisons Spring Boot pour écrire de très petits services avec peu de dépendances et un seul “métier”. Ce qui fait que le démarrage d’une appli web de ce type prend entre 3 et 7 secondes sur mon poste. C’est déjà très bien comparé avec des applis qui mettent une minute ou plus à démarrer.

Mais pour accélérer encore le cycle de dev on peut aller plus loin. Spring propose un petit outil qui s’appelle [Spring Loaded](https://github.com/spring-projects/spring-loaded). Ce n’est pas propre à Spring Boot mais ca marche très bien avec. Il s’agit d’un simple agent java permettant un rechargement à chaud du code modifié.

Avec ça, vous êtes paré.

That’s all folks, vous pouvez retourner à vos claviers. J’espère que ce billet vous aura montré quelques fonctionnalités sympa de Spring Boot. Il me permettra également d’introduire de futurs billets sur Monit, Logentries, Ansible etc… A bientôt.

 

PS : j'utilise depuis cet article un plugin gist pour wordpress mais le rendu est pas top. Si vous utilisez un plugin qui marche bien, n'hésitez pas m'envoyer un petit message.
