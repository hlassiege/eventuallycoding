---
id: "1169"
title: "Micro-services : la composition de page avec Zuul et Sitemesh"
description: "[![03BC](/images/07933-03bc.gif)](http://eventuallycoding.com/wp-content/uploads/2015/04/07933-03bc.gif) Le dernier billet de ce blog entamait une min..."
date: "2015-04-13"
categories: 
  - "waza"
tags: 
  - "backend"
  - "microservices"
  - "sitemesh"
  - "spring-boot"
  - "zuul"
img: "07933-03bc.gif"
cover: "cover2.jpg"
---

[![03BC](/images/07933-03bc.gif)](http://eventuallycoding.com/wp-content/uploads/2015/04/07933-03bc.gif) Le dernier billet de ce blog entamait une mini-série sur les microservices et j'espère bien susciter des commentaires afin d'améliorer le travail réalisé jusqu'ici. Voici une liste non exhaustive des différents sujets que j'aimerais traiter :

- comment gérer une fédération d’identité (one login to rule them all)
- gérer une configuration distribuée
- [le routage](http://www.eventuallycoding.com/index.php/zuul/ "Micro-services : routing avec Zuul")
- le load balancing
- dispatcher des évènements sur plusieurs services
- les jobs
- la découverte de services
- simplifier l’écriture des appels de services
- la composition de page
- la résistance aux pannes
- le monitoring
- le déploiement

Le [dernier billet](http://www.eventuallycoding.com/index.php/zuul/ "Micro-services : routing avec Zuul") s'attardait sur le routage. Dans ce billet j'aimerais aborder une problématique récurrente : la composition de pages

TLDR; le code avec l'utilisation de sitemesh est disponible sur [github](https://github.com/hlassiege/microservice-sandbox/tree/master/compose)

Tout d'abord, resituons le problème. Imaginons une application, au hasard Hopwork, que nous avons décomposé en microservices comme suit :

- le moteur de recherche
- le back office freelance/clients
- les pages "statiques" (accueil, comment ca marche etc...)

[![services](/images/df8a2-services.jpg)](http://eventuallycoding.com/wp-content/uploads/2015/04/df8a2-services.jpg)

Vous remarquerez sur les captures d'écran qu'il y a tout de même un élément commun : le menu Et si nous allions en bas de la page, nous aurions également le footer. Chaque page est donc composée comme suit :

[![composition](/images/c7c59-composition.png)](http://eventuallycoding.com/wp-content/uploads/2015/04/c7c59-composition.png)

Le footer ne bouge pas. Par contre le menu est dynamique. Il affiche votre nom quand vous êtes loggés ainsi que des items de menus différents par exemple.

Traditionnellement sur une application monolithique vous utiliseriez des inclusions de jsp, des custom tags, [tiles](https://tiles.apache.org/), [thymeleaf](http://www.thymeleaf.org/) etc...

Et pour une application décomposé en plusieurs services ? Quelles seraient les solutions à envisager ?

## Dupliquer vos éléments communs dans chaque application.

Sans doute la pire solution mais il ne faut rien écarter. Ici il s'agit simplement d'avoir votre menu et votre footer dupliqué dans chaque micro services.

[![duplication](/images/3f257-duplication.jpg)](http://eventuallycoding.com/wp-content/uploads/2015/04/3f257-duplication.jpg)

Bon, vous imaginez sans mal les inconvénients :

- effort de maintenance démultipliée
- aucun mécanisme pour qu'une application ait le même menu que les autres, vous pourriez avoir des liens dans le footer différent par exemple

Par contre à sa décharge, cette méthode a quand même des avantages :

- vous pouvez utiliser des technologies de templating différentes dans chaque application (jinja en python, jsp en java etc...)
- vous pouvez utiliser des versions différentes de css pour un rendu équivalent
- vos applications sont vraiment autonomes et peuvent être utilisées toute seules

Ce dernier point est très important. Mais l'effort de maintenance reste beaucoup trop important pour envisager sérieusement cette solution.

## Reconstruire le code du footer et du menu dynamiquement via des méta données dans une base de données

C'est une petite amélioration du cas précédent. Le code css/js/html reste dupliqué, permettant à chaque microservices d'évoluer indépendamment. Mais le contenu du menu et du footer est dynamique. Ce qui reste une petite amélioration intéressante.

[![duplication-with-db](/images/43bd1-duplication-with-db1.jpg)](http://eventuallycoding.com/wp-content/uploads/2015/04/43bd1-duplication-with-db1.jpg)

L'effort de maintenance reste très important.

Une variante de cette solution serait d'avoir le code html complet du header/footer en base de données.

Cette fois on élimine l'effort de maintenance. Le versionning peut se faire facilement.

Le défaut majeur repose sur le fait que votre menu peut avoir des composantes dynamiques et afficher certains items :

- si l'utilisateur est loggé ou non
- si certaines fonctionnalités sont affichées pour lui (feature flipping)
- si certaines fonctionnalités lui sont accessibles (hopwork analytiques ou widgets non disponible pour les clients par exemple)

Voyons autre chose.

## Partager une jsp commune dans un jar pour pouvoir l'inclure dans chaque application web

Ca parait simple comme idée, il suffit ensuite d'utiliser cette jsp ensuite avec une directive d'inclusion :

<%@ include file="include/menu.jsp"/>

[![webresources](/images/65476-webresources.jpg)](http://eventuallycoding.com/wp-content/uploads/2015/04/65476-webresources.jpg)

Plusieurs défauts à celà :

- ce n'est pas si simple de partager une jsp dans un jar. D'ailleurs je n'ai pas réussi. La seule solution technique que j'ai trouvé a été d'utiliser une dépendance sous forme de war avec le plugin maven war qui fait ensuite une fusion des deux wars
- cela implique que toutes vos applications web partagent la même technologie. Si a un moment vous choisisissez d'utiliser Thymeleaf ou velocity dans un autre service, votre jsp devient inutile.
- Pire, même pour du contenu statique, vous êtes obligé d'en faire une jsp. Dommage.
- cela impose de relivrer pour avoir la dernière version du menu ou du footer

Quelques avantages :

- vos applications sont vraiment autonomes et peuvent être utilisées toute seules
- vous dépendez d'une version stable et pouvez évoluer quand vous le souhaitez (pensez aux gros refactoring js et css qui pourrait impacter chaque application)

Evidemment on peut partir du principe que ces éléments bougent peu donc le jeu ne vaut pas la chandelle d'aller plus loin et on peut accepter des désynchro de temps en temps. Pour être honnête, c'était ma première pensée de prime abord.

Et puis je suis tombé sur un vieux billet de Matt Raible de 2005 : [Use SiteMesh to decorate multiple webapps](http://raibledesigns.com/rd/entry/use_sitemesh_to_decorate_multiple) 

## Utilisons sitemesh alors

Je ne connaissais pas bien [sitemesh](http://wiki.sitemesh.org/wiki/). Je l'avais croisé sur un projet pour un voyagiste d'affaire il y a quelques années mais a l'époque, tout le monde se demandait surtout ce que ca foutait dans le projet :) Les joies du legacy. Mais ce billet très court de M. Raible m'a convaincu de tester.

Sitemesh en soi est finalement très simple à comprendre. Il agit en tant que filtre de servlet pour décorer votre page. C'est très différent d'un [tiles](https://tiles.apache.org/) dans le sens ou votre page d'origine est complète. Nous sommes ici dans le cas d'un parfait exemple du [pattern decorator](http://fr.wikipedia.org/wiki/D%C3%A9corateur_%28patron_de_conception%29).

Vous pourriez par exemple avoir le code suivant :

A title

hello world

Cette décoration se fait à l'aide d'un fichier decorators.html qui décrit la décoration à réaliser. Par exemple :

Site name : A title

added by sitemesh

hello world

added by sitemesh

Chose intéressante, le billet de M. Raible semblait suggérer que ce décorateur pouvait se trouver dans une autre application web.

Bon, ce ne fut pas si simple au final. En effet sitemesh est un projet peu actif (5 commits en un an). La version 3 a apporté son lot de simplification, mais elle a aussi dégagé le support des décorateurs cross webapp (dans une autre application web).

Cependant ca s'est quand même avéré très simple à mettre en place.

Il a suffit de rajouter un filtre sitemesh :

@Configuration
@ConditionalOnProperty("sitemesh.filter.enabled")
public class SitemeshConfig {
 @Bean
 public FilterRegistrationBean siteMeshFilter() {
 FilterRegistrationBean filterRegistrationBean = new FilterRegistrationBean();
 filterRegistrationBean.setFilter(new MySiteMeshFilter());
 return filterRegistrationBean;
 }
}

Au passage vous remarquerez l'utilisation des beans conditionnels facilité avec spring-boot. Ce filtre est actif ou non en fonction d'une configuration "sitemesh.filter.enabled"

Et le filtre sitemesh en lui-même :

public class MySiteMeshFilter extends ConfigurableSiteMeshFilter {
 @Override
 protected void applyCustomConfiguration(SiteMeshFilterBuilder builder) {
 builder.addDecoratorPath("/\*", "/decorators/decorator");
 }
}

Ok, mais ce n'est pas cross webapp ça.

Effectivement, mais l'astuce très simple consiste à créer un controleur qui va servir le contenu d'une autre page distante

@Controller
public class SitemeshController {
 private final OkHttpClient client = new OkHttpClient();
 @Value("${sitemesh.decorator.url}")
 private String decoratorUrl;
 @RequestMapping(value = "/decorators/decorator", method = RequestMethod.GET)
 @ResponseBody
 public Object decorator() throws IOException {
 Request request = new Request.Builder()
 .url(decoratorUrl)
 .build();
  Response response = client.newCall(request).execute();
  return response.body().string();
 }
}

J'ai utilisé ici [okHttp](http://square.github.io/okhttp/) pour la récupération du contenu distant.

A partir de là, vous êtes capable de décorer votre page à partir d'un décorateur commun à tous vos services.

[![sitemesh](/images/3d5ad-sitemesh.jpg)](http://eventuallycoding.com/wp-content/uploads/2015/04/3d5ad-sitemesh.jpg)

Mais que vient faire Zuul dans tout cela ?

Si vous avez lu le premier billet de cette série, nous utilisons Zuul pour présenter une seule url au client et pour lui inviter de naviguer sans arrêt entre différents sous domaines correspondant à mes applications.

Et dans notre cas cela nous permet de partager aussi des ressources en commun :

[![zuul-sitemesh](/images/ad5b9-zuul-sitemesh.jpg)](http://eventuallycoding.com/wp-content/uploads/2015/04/ad5b9-zuul-sitemesh.jpg)

Au final cette solution est très intéressante :

- aucune duplication de code
- les pages dans vos applications sont complètes et peuvent donc être utilisées de facon autonome
- vous pouvez utiliser des technologies de templating différentes dans chaque application (jinja en python, jsp en java etc...)

mais elle comporte quand même des inconvénients :

- si vous souhaitez le rendu final, vous devez avoir au moins le proxy Zuul lancé en même temps pour travailler.
- si vous partagez des css/js sur le proxy Zuul, il y a des risques de casser votre microservice le jour ou le proxy Zuul fait évoluer ces ressources sans prévenir. Il faut sans doute penser à les versionner
- la petite astuce avec le controleur intermédiaire n'est pas des plus optimales en terme de chemin.

## Autre pistes non explorées encore : les filtres Zuul

Selon moi, spring-cloud qui se veut la réponse absolue pour construire des microservices en Java aurait vocation à répondre à ce point. Et je pense que cela pourrait passer par l'utilisation de filtres Zuul en post filtering. Par contre ceux-ci sont assez mal documentées et je n'ai pas encore bien compris comment en rajouter. On en entend parler sur [la doc officielle de Netflix](https://github.com/Netflix/zuul/wiki/Writing-Filters), mais rien ne permet de comprendre comment les associer à Zuul dans le cas de Spring-cloud.

Par rapport à la solution précédente, on déporterait la responsabilité de la décoration au proxy. Cela éviterait la petite astuce avec le controleur supplémentaire vu ci-dessus. Par contre on reste obligé d'avoir le proxy Zuul lancé pour travailler. Mais de toute facon ca semble assez inéluctable vu les responsabilités qu'on lui donne de plus en plus.

## Et un widget js ?

Piste intéressante, ca se versionne sans souci, ca permet de laisser chaque application vivre sa vie indépendamment. Ca oblige toujours à garder le proxy Zuul qui héberge la resource allumé cependant. Par contre je ne suis vraiment pas fan d'avoir un composant qui js qui induit une petite pause au chargement et un affichage qui se fait en deux temps.

## Et les webcomponents ?

Aucune idée pour être honnête, je ne connais pas assez pour savoir si c'est très différent d'une widget (en mieux). Mais si le défaut de l'affichage est le même, pas plus d'intérêt selon moi.

## Tableau récapitulatif

| Solution | Utilisation de contenu dynamique | Pas de duplication de code | Insensible au refactoring | Pas de relivraison pour mise à jour | Peut utiliser des technos différentes | Microservices autonomes | Confort utilisateur |
| --- | --- | --- | --- | --- | --- | --- | --- |
| widgets/webcomponent | non (1) | non | non | non | oui | non | non |
| zuul filter | oui | oui | non | oui | oui | non | oui |
| sitemesh | oui | oui | non | oui | oui | non | oui |
| Construction via base de données | non (1) | oui | non | partiel | oui | oui | oui |
| Duplication html/js/jsp | oui | oui | oui | non | non | oui | oui |
| Partage de jsp | oui | oui | oui | non | non | oui | oui |

(1) on pourrait imager un menu statique qui présenterait un aspect "basique" et qui serait ensuite modifié en js si l'utilisateur est connecté et si certains items devait être rajouté au menu. Cela laisserait cependant un désagréable effet de clignotement pour l'utilisateur final

Si cela vous intéresse, voici le code sous github : [microservices-sandbox](https://github.com/hlassiege/microservice-sandbox/tree/master/compose)
