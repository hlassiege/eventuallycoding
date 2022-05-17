---
id: "1160"
title: "Micro-services : routing avec Zuul"
description: "[![spring-cloud](/images/3b14a-spring-cloud.png)](http://eventuallycoding.com/wp-content/uploads/2015/04/3b14a-spring-cloud.png)Long time no see, le d..."
date: "2015-04-09"
categories: 
  - "waza"
tags: 
  - "backend"
  - "microservices"
  - "spring-boot"
  - "spring-cloud"
  - "zuul"
img: "3b14a-spring-cloud.png"
cover: "cover8.jpg"
---

[![spring-cloud](/images/3b14a-spring-cloud.png)](http://eventuallycoding.com/wp-content/uploads/2015/04/3b14a-spring-cloud.png)Long time no see, le dernier billet de blog date de janvier, une éternité en temps de développement. Ce délai car nous avons beaucoup travaillé sur Hopwork à repenser notre architecture et du coup, et bien je n'avais pas le temps pour blogger ^^ Mais qu'avons nous fait justement ? Eh bien nous avions déjà entamé un premier virage vers les micro services l'année dernière mais il restait encore beaucoup de points à adresser. Le temps pour passer de "grosse appli monolithique" à "plein de trucs qui communiquent entre eux" est non négligeable et on découvre des tas de petits détails qu'on n'imagine pas au début :

- comment gérer une fédération d'identité (one login to rule them all)
- gérer une configuration distribuée
- le routage
- le load balancing
- dispatcher des évènements sur plusieurs services
- les jobs
- la découverte de services
- simplifier l'écriture des appels de services
- la composition de page
- la résistance aux pannes
- le monitoring
- le déploiement

etc...

Je vais essayer de parler de ces points à travers différents futurs articles. Et je vous propose de commencer par le routage.

Si on a beaucoup parlé de [Spring boot](http://www.eventuallycoding.com/index.php/spring-boot-dans-le-doute-reboote/ "Spring Boot : dans le doute reboote") ces derniers temps, un autre projet de Spring va sans doute devenir l'un des plus importants sujets de discussion dans les prochains mois, le dénommé [Spring cloud](http://projects.spring.io/spring-cloud/ "Spring cloud"). Si Spring-Cloud a désormais presque un an au compteur pour sa version 1.0.0, les composants qui vont tout changer pour ceux qui pratiquent les micro services en Java ont à peine 1 mois en version stable : [Spring-cloud-netflix](http://cloud.spring.io/spring-cloud-netflix/spring-cloud-netflix.html), première release en **mars 2015**

Basiquement, il s'agit de l'intégration des outils de [netflix](https://github.com/Netflix) dans la stack spring-boot. Cette fameuse stack netflix, c'est celle qui leur sert pour que leur site soit "hautement disponible" et oui, on peut dire que leur intégration dans la stack Spring est une sacré bonne nouvelle

- [http://fr.slideshare.net/stonse/microservices-at-netflix](http://fr.slideshare.net/stonse/microservices-at-netflix)
- [http://techblog.netflix.com/2012/11/hystrix.html](http://techblog.netflix.com/2012/11/hystrix.html)
- [http://techblog.netflix.com/2013/01/announcing-ribbon-tying-netflix-mid.html](http://techblog.netflix.com/2013/01/announcing-ribbon-tying-netflix-mid.html)

Prenons l'un des premiers pour l'instant, [Zuul](https://github.com/Netflix/zuul).

Non, pas le gardien du portail dans Ghostbusters...

[![ZuulTerrorDog1](/images/716c0-zuulterrordog1.png)](http://eventuallycoding.com/wp-content/uploads/2015/04/716c0-zuulterrordog1.png)

Zuul est l'un des composants de base de la stack, c'est en soi un simple reverse proxy Java. Un reverse proxy, c'est un routeur qui va dispatcher vos utilisateurs sur vos différents services en fonction des urls appelés.

Par exemple un appel sur /blog renverra vers le blog, un appel vers /forum vers le forum etc...

Pour tout les services "externes", on utilisera apache ou nginx qui sont de très bons outils pour cela. Par exemple avec nginx pour une redirection vers le blog de hopwork :

location /blog {
 rewrite ^/blog/(.\*) /$1 break;
 proxy\_pass https://rblog.hopwork.com;
 proxy\_read\_timeout 90;
 }

Mais Zuul va apporter quelques petites choses en plus lorsqu'il s'agit d'une architecture micro services :

- un routage dynamique et du load balancing (on verra plus tard avec eureka et ribbon)
- la gestion de coupe circuit (on verra plus tard avec hystrix)
- des filtres

et, point non négligeable, aucun nginx à configurer sur le poste du développeur pour bénéficier d'un reverse proxy pendant la phase de dev.

Et comment ça marche ?

Eh bien c'est vraiment très simple.

Voici une appli Spring boot qui utilise Zuul :

@SpringBootApplication
@EnableZuulProxy
public class FrontApplication {
   public static void main(String\[\] args) {
       SpringApplication.run(FrontApplication.class, args);
   }
}

Simple non ? Juste une annotation pour démarrer Zuul.

Ensuite vous avez une configuration vous permettant de définir votre routing dans votre fichier application.yml

zuul:
 routes:
  resource1:
   path: /resource1/\*\*
   url: http://localhost:9001/resource1/
  resource2:
   path: /resource2/\*\*
   url: http://localhost:9002/resource2/

Et c'est terminé. Désormais pour l'utilisateur, il verra http://localhost:8080/resource1 mais en réalité il sera sur http://localhost:9001/resource1/

Pour l'essayer vous même, le projet d'exemple est sur github

[https://github.com/hlassiege/zuul-sample](https://github.com/hlassiege/zuul-sample)

La suite dans les prochains billets.
