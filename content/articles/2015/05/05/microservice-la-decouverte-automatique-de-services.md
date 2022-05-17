---
id: "1196"
title: "Microservice : la découverte automatique de services"
description: "Le dernier billet de ce blog entamait une mini-série sur les microservices qui espère traiter des sujets suivants :

- comment gérer une fédération d’..."
date: "2015-05-05"
categories: 
  - "waza"
tags: 
  - "backend"
  - "eureka"
  - "microservices"
  - "spring-cloud"
  - "zuul"
img: "0f9d8-microservice.jpg"
cover: "cover6.jpg"
---

Le dernier billet de ce blog entamait une mini-série sur les microservices qui espère traiter des sujets suivants :

- comment gérer une fédération d’identité (one login to rule them all)
- gérer une configuration distribuée
- [le routage](http://www.eventuallycoding.com/index.php/zuul/ "Micro-services : routing avec Zuul")
- le load balancing
- dispatcher des évènements sur plusieurs services
- les jobs
- la découverte de services
- simplifier l’écriture des appels de services
- [la composition de page](http://www.eventuallycoding.com/index.php/micro-services-la-composition-de-page-avec-zuul-et-sitemesh/ "Micro-services : la composition de page avec Zuul et Sitemesh")
- la résistance aux pannes
- le monitoring
- le déploiement

Le dernier billet s’attardait sur la composition de page. Pour ce billet, nous allons parler de "service discovery", la découverte de service pour les francophones.

Comme je l'évoquais dans le billet précédent, une architecture en micro services implique l'utilisation de plusieurs services qui apparaissent comme un seul service pour l'utilisateur final. Par exemple le visiteur sur Hopwork voit un seul domaine avec de multiples pages, la recherche, les annonces d'emploi, la page d'accueil qui sont en réalité plusieurs applications web sur le serveur :

[![microservice](/images/0f9d8-microservice.jpg)](http://eventuallycoding.com/wp-content/uploads/2015/05/0f9d8-microservice.jpg)

 

Parmi les intérêts de ce type de solution, vous pouvez augmenter le nombre de services qui vont gérer la recherche et laisser les autres inchangé. Si tout avait été dans la même application, vous auriez du dupliquer l'ensemble de votre bloc applicatif alors qu'une grande partie ne le nécessite sans doute pas.

[![microservices](/images/cbbe8-microservices.jpg)](http://eventuallycoding.com/wp-content/uploads/2015/05/cbbe8-microservices.jpg)

 

La problématique qui se pose alors, c'est de pouvoir ajouter un nouveau service de type "search", qu'il soit automatiquement découvert par le reste de l'applicatif et que les requêtes lui parviennent.

Si vous utilisiez nginx, vous pourriez déjà avoir un système de load balancing sur vos différents services de search [préalablement configuré](http://nginx.org/en/docs/http/load_balancing.html). Ceci vous impose cependant de relancer nginx. Il existe malgré tout [une solution de reconfiguration à chaud pour nginx PLUS](http://nginx.com/products/on-the-fly-reconfiguration/).

Si vous avez aussi une configuration inter micro services, une solution à base de nginx vous pousserait également à placer un frontal nginx devant chaque grappe de service. Envisageable, mais sans doute un peu pénible. Et dans ce cas de figure, nginx devient un spof (single point of failure). Il vous faut alors envisager de mettre en place de [la haute disponibilité sur chaque frontal nginx](http://nginx.com/blog/high-availability-clustering-with-nginx-plus/) pour chaque grappe de microservice.

Ca serait envisageable mais nous allons voir une autre approche, toujours avec les outils de netflix qui ont été intégrés dans Spring Cloud.

### Eureka

[Eureka](https://github.com/Netflix/eureka) est un composant utilisé par Netflix en tant que, je cite, "AWS Service registry for resilient mid-tier load balancing and failover". Et en réalité ce n'est pas restreint à AWS.

C'est donc un outil qui va permettre de réaliser de la découverte de service et que vous allez interroger pour avoir des informations sur les applications qui rendent un service donné.

[![eureka](/images/ae328-eureka1.jpg)](http://eventuallycoding.com/wp-content/uploads/2015/05/ae328-eureka1.jpg)

La cinématique est donc la suivante :

- pour chaque service, inscription auprès d'Eureka en tant que fournisseur d'un service X
- pour chaque consommateur de service :
    - récupération au démarrage puis périodiquement de la liste des fournisseurs pour chaque service
    - appel direct vers un fournisseur

Pour bien clarifier, le consommateur de service n'appelle pas Eureka à chaque fois qu'il a besoin de réaliser un appel vers un fournisseur de service !

La liste des fournisseurs de service est mise à jour périodiquement à travers un "heartbeat" communiqué à l'ensemble des clients Eureka. Mais un client peut très bien tomber sur un fournisseur down à un instant T.

Mais c'est pas un SPOF tout ça ?

Eh bien Eureka est lui-même un fournisseur de service et [peut donc lui-même s'enregistrer auprès d'autres serveurs eureka](http://cloud.spring.io/spring-cloud-netflix/spring-cloud-netflix.html#_high_availability_zones_and_regions) pour former un cluster de serveur Eureka. C'est bien sûr la configuration recommandée pour tourner en production.

### Mise en oeuvre

Avant de démarrer, vous pouvez retrouver l'ensemble des sources disponible ici : [https://github.com/hlassiege/microservice-sandbox/tree/master/discovery](https://github.com/hlassiege/microservice-sandbox/tree/master/discovery)

Sur ce repo github, nous avons 3 applications :

- le serveur Eureka
- un fournisseur de service
- un client du service fourni

Pour le serveur Eureka, il ne s'agit que d'un main avec deux annotations spécifiques à Eureka :

@SpringBootApplication
@EnableEurekaServer
@EnableDiscoveryClient
public class EurekaServerApplication {
    public static void main(String\[\] args) {
        SpringApplication.run(EurekaServerApplication.class, args);
    }
}

Pour le fournisseur de service, l'annotation devient :

@EnableEurekaClient

Par contre il faut bien préciser l'url du serveur eureka et le nom du service proposé dans le fichier de configuration :

server.port: 8081

eureka:
  instance:
    leaseRenewalIntervalInSeconds: 10
  client:
    registryFetchIntervalSeconds: 5
    serviceUrl:
      defaultZone: http://localhost:8761/eureka/

spring.application.name: service1

Enfin le client du service qui est également un EurekaClient utilise la même annotation :

@EnableEurekaClient

Et pour nous assurer que tout fonctionne, nous allons créer un endpoint pour afficher l'adresse d'un fournisseur de service déclaré dans le registre Eureka :

@Autowired
private DiscoveryClient discoveryClient;

@RequestMapping("/")
public String serviceUrl() {
    InstanceInfo instance = discoveryClient.getNextServerFromEureka("service1", false);
    return instance.getHomePageUrl();
}

Une fois toutes les applications lancées, vous pouvez retrouver la page de Eureka sur http://localhost:8761

[![eurekaui](/images/8e85f-eurekaui.jpg)](http://eventuallycoding.com/wp-content/uploads/2015/05/8e85f-eurekaui.jpg)

Vous noterez donc que 3 services sont enregistrés car le serveur et le client sont aussi des fournisseurs de services.

Et vous avez un nouvel endpoint http://localhost:8761/eureka/apps/ qui vous donne la liste des services enregistrés ainsi que toutes les instances de fournisseur déclarés. Par exemple pour moi ici :

  
    SERVICE1
    
      hugo\_pro
      SERVICE1
      192.168.50.1
      UP
      UNKNOWN
      8081
      443
      1
      
        MyOwn
      
      
        10
        90
        1430824522750
        1430824522750
        0
        1430824492689
      
      
      http://hugo\_pro:8081/
      http://hugo\_pro:8081/info
      http://hugo\_pro:8081/health
      service1
      false
      1430824522750
      1430824522656
      ADDED
    
  

Voilà, nous avons fait une petite introduction à Eureka. Pour l'instant nous allons en rester là mais nous allons voir par la suite comment combiner Eureka et Zuul pour faire du loadbalancing. Puis nous verrons comment utiliser Eureka pour faire des appels Rest. C'est loin d'être fini :)
