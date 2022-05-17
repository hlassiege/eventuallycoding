---
id: "140"
title: "Jouons !"
description: "[![](/images/play.png \"play\")](http://eventuallycoding.com/wp-content/uploads/2011/04/play.png) Récemment, entre le [livre blanc d'Aurélien Maury sur ..."
date: "2009-12-29"
categories: 
  - "waza"
tags: 
  - "play"
img: "play.png"
cover: "cover5.jpg"
---

[![](/images/play.png "play")](http://eventuallycoding.com/wp-content/uploads/2011/04/play.png) Récemment, entre le [livre blanc d'Aurélien Maury sur les Frameworks web haute productivité](http://xebia.developpez.com/articles/java/web/ "livre blanc") ou [les critiques de Rod Johnson à propos de J2EE](http://www.infoq.com/presentations/Lessons-Learned-from-Java-EE), la mode revient aux Frameworks lights. Je dis bien "_revient_", car ça fait déjà quelque temps que le développement web rapide existe et fait recette.

Quand à moi je suis attardé un petit peu sur Play!, le petit nouveau qui change tout.

## Mais c'est quoi Play! ?

Play! c'est un Framework français créé par [Guillaume Bort](http://guillaume.bort.fr/ "Guillaume Bort") et supporté par la société qu'il a créé [Zenecity](http://www.zenexity.fr/ "Zenecity"). En reprenant l'expression sur le site de Play! plus qu'un Framework, c'est une stack complète. Entendez par là que Play! c'est :

- un serveur web avec son routeur de requêtes HTTP,
- un Framework MVC2,
- des utilitaires (envoi de mails etc...),
- des modules (CRUD, secure, intégration GWT, intégration Scala etc...).

## C'est bien ou pas ?

Eh bien pour faire simple, j'adore. J'avais fait pas mal de **PHP** à une époque et j'ai enfin retrouvé la souplesse et la rapidité de développement que j'avais alors. En effet il ne s'agit pas simplement d'un nième Framework web mais d'une stack complète (voir plus haut) qui vient avec sa propre vision de développement. Comme le dit le site : "_un Framework de développement fait par des développeurs_"

### Pourquoi cette comparaison avec PHP ?

Un petit retour en arrière s'impose pour faire comprendre le parallèle. A une équipe j'ai fait pas mal de PHP comme beaucoup de développeurs débutants, séduits par sa simplicité, sa syntaxe proche du C (donc facilement abordable en sortie d'école). Je débutais, j'étais "mal habillé", entendez par là que je n'utilisais pas de Framework, pas de debugger, pas d'IDE. Et pourtant c'était très rapide à faire, parce que c'était simple.

Simple déjà par son débogage, l'erreur était immédiatement affiché sur la page web

Warning: mysql\_fetch\_array(): supplied argument is not a valid MySQL result resource in /servers/apache/sites/ddb/kb/fct\_kb.php on line 260

avec le numéro de ligne etc...

Simple ensuite parce que relancer un serveur apache :

- c'était très rarement nécessaire
- ca prenait 10 secondes

Simple parce qu'on était très proche du web, si vous aviez compris l'utilisation des variables réservées $\_GET, $\_POST, $\_REQUEST, $\_SESSION et $\_COOKIE vous aviez presque tout compris aux grands principes de l'HTTP (ok je simplifie ^^).

**_En gros, on passait de l'éditeur au navigateur, un F5 et on testait._**

Bon d'accord, mais il y avait quand même des points noirs faut pas le cacher :

- pas de stack cohérente, à l'époque PEAR était encore trop inégal suivant les paquetages (je ne sais pas si ça a changé aujourd'hui)
- pas de Framework ORM, donc pas mal de SQL à faire soi-même
- l'absence de typage c'est pas toujours très pratique, surtout pour l'auto complétion dans un IDE ^^ (je sais, chacun son point de vue sur ce sujet...)
- ok, ne pas compiler c'est un gain de temps, mais c'est un peu frustrant de se rendre compte à l'exécution qu'on a oublié un ";"

### Et Play dans tout ça ?

Eh bien Play! c'est un ensemble de ces avantages, sans les inconvénients ;)

- Le débogage est là encore rapide, des erreurs très détaillées sont affichées sur le navigateur.

Que ce soit pour la compilation :

![guide1-3](/images/guide1-3.png)

(image issue de la doc Play!)

L'insertion de données :

![guide6-1](/images/guide6-1.png)

(image issue de la doc Play!)

 

- Relancer le serveur Play! c'est très rare, puisque Play! compile vos sources et lit vos fichiers de conf à la volée. Et au pire c'est pas très long, beaucoup moins qu'un serveur Weblogic ;)

 

- On reste proche du Web, la surcouche J2EE a disparu et il ne reste que les concepts HTTP pour ce Framework qui se veut totalement [REST](http://java.sun.com/developer/technicalArticles/WebServices/restful/ "REST"). On a accès directement à params, session, request etc... Et le binding automatique sur les paramètres HTTP c'est du bohneur ^^

**Le cycle de développement consiste toujours à coder puis switcher vers le navigateur.**

### Et quand aux points noirs que j'évoquais pour le PHP ?

Eh bien ils ont disparu :

- la stack est très cohérente, on a une très bonne intégration des paquetages entre eux (JPA intégré dans le model, model enrichi dans les templates, utilitaires fourni de base pour les mails où la manipulation des cookies etc...)
- le Framework ORM c'est tout simplement JPA. En fait dans un premier temps en développant avec Play je n'ai pas touché du tout ni à du SQL, ni à une base de données.
- Évidemment Java est typé (je sais, chacun son point de vue sur ce sujet...)
- Comme on reste dans un univers Java, j'utilise Eclipse allégrement et je profite de la détection des erreurs en amont via mon éditeur. Play! compile ses classes à la volée mais ça n'empêche pas Eclipse de faire de même. D'après la doc Play! utilise d'ailleurs le compilateur d'Eclipse dans son noyau.

### Bon mais il y a quelque chose qui cloche ?

D'un point de vue technique, je suis pour l'instant débutant en Play! A première vue c'est concis, rapide à développer etc...

Mais, je n'ai pas encore testé des choses très importantes :

- les performances du serveur Play! En effet Play! n’utilisant pas de serveur d'appli, on se repose sur la stack Play! qui reste jeune. Pour avoir connu des ennuis en pagaille sur Tomcat ou Apache, je resterais prudent sur l'utilisation de Play! sous forte charge tant que je ne l'aurais pas testé moi même
- la souplesse de configuration. Ca rejoint le point précédent, ok pour l'instant j'ai utilisé Play! avec la configuration de base mais est-ce que je pourrais facilement le tuner en fonction du nombre d'utilisateurs ?

Enfin ce sont des interrogations donc « _Wait and see_ ».

Ensuite Play! peut être perturbant sur certains principes :

- des variables publiques sans accesseurs. Même si, je l'accorde, les accesseurs sont souvent inutiles, parfois ils servent à effectuer un traitement/une transformation avant affectation ou envoi de la valeur. Ils peuvent aussi servir à protéger en écriture des collections de données. Ca reste pour moi un point polémique mais je suis peut être passé à côté.
- des méthodes statiques destiné à des controlleurs procéduraux. Déstabilisant mais pourquoi pas. Du coup la surcharge des méthodes statiques n'est pas possible mais pour l'instant je n'ai pas rencontré de problème majeur avec cette philosophie.
- des méthodes statiques sur les principaux outils de Play! Etant assez friand de programmation par contrat, j'ai tendance à être assez opposé aux méthodes statiques. Ca se justifie parfois (sur java.math par exemple), et d'autre fois c'est délicat (Cache ou Notifier par exemple ?). J'aime bien injecter l'implémentation dont j'ai besoin en fonction du contexte, surtout quand je teste ^^

Et puis sinon, dans les inconvénients : ce n'est pas du J2EE Bon ok je viens de dire que c'était super bien que ce ne soit pas du J2EE, c'est simple, concis, efficace etc... Oui mais du coup on perd quelques outils qui étaient présents uniquement sur J2EE (les filtres Spring Security par exemple). On se coupe d'une partie des outils déjà créé, donc il faudra les recréer ou attendre qu'il le soit.

Et là ça me permet d'aborder le principal point noir de Play!, sa communauté. Play! étant très jeune, la communauté est très limité, les outils et modules sont essentiellement issus de l'équipe de Play! La richesse d'un Framework c'est son écosystème, et celui-ci est encore assez limité ce qui rend son choix un peu culotté pour l'instant. Et puis même si le technical lead Guillaume Bort est très actif aujourd'hui, qu'en sera-t-il demain s'il abandonne sa société Zenecity ? Quelle est la pérennité de ce Framework franco-francais et de la société Zenecity qui se trouve derrière ?

## Conclusion

J'adhère aux principes de simplicité mis en avant par ces Frameworks "haute productivité". Après avoir bossé (et bosser encore) sur des logiciels usines à gaz, après avoir vu des fichiers de 75 000 lignes de code (véridique !!), des couches d'abstraction à n'en plus finir pour envoyer un simple entier d'une fonction à l'autre etc... je tente de coller le plus possible au principe : [Keep it simple](http://fr.wikipedia.org/wiki/Keep_it_Simple,_Stupid "Keep it simple"). Donc oui, Play! j'adhère et je compte jouer encore un peu avec, au moins en extra professionnel. En espérant qu'il gagne un écosystème suffisamment pérenne pour le proposer en milieu professionnel.
