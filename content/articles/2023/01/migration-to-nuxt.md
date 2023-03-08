---
id: "10"
title: "Le projet Singapore : Migration vers Nuxt"
description: "Dans ce billet, je souhaite vous présenter le projet Singapore, qui vise à simplifier et moderniser toute notre stack frontend en utilisant Nuxt.  "
date: "2023-01-10"
tags:
  - "rewrite"
  - "refactoring"
  - "malt"
  - "nuxt"
cover: "singapore.jpg"
---

[Dans un précédent billet](https://eventuallycoding.com/2023/01/faut-il-reecrire-de-zero), j'évoquais des chantiers de simplification engagés en 2022.

J'espère que nous aurons l'occasion d'aborder plusieurs de ces chantiers sur ce blog [et celui de Malt](https://blog.malt.engineering/).
Entre temps, dans ce billet, je souhaite vous présenter l'un de ces projets dont l'objectif est de moderniser toute notre technologie frontend en utilisant [Nuxt](https://nuxt.com/).  

J'espère vous donner un aperçu de notre méthodologie, comment nous en sommes arrivés à prendre cette décision et comment nous l'avons mis en œuvre. 

## Contexte

Pour bien comprendre d'abord de quoi on parle, voici quelques chiffres importants début 2022 : 

- l'équipe d'ingénierie est proche de 100 développeurs
- la taille de la base de code des applications front avoisine 1M de ligne(j'exclus toutes les libs communes, apis, services et applis qui ne font que du back)
- la taille totale de la base de code approche les 2.4M de lignes de code ([et voici une infographie pour vous donner une base de comparaison](https://www.informationisbeautiful.net/visualizations/million-lines-of-code/))

Le risque à cette taille, c'est la complexification et l'intrication. 

Il y a quelque temps déjà nous avons construit une équipe plateforme dont l'objectif est de créer un produit à l'intérieur du produit, à destination des autres équipes.
Dans la littérature, vous entendrez souvent parler de ["platform as a product"](https://tomgeraghty.co.uk/index.php/platform-as-a-product/) car le travail d'une telle équipe est de concevoir la plateforme comme on construirait un produit externe. On utilisera des phases d'exploration (discovery) incluant des interviews utilisateurs et un usage intensif des données.   
Bref, du quantitatif et du qualitatif. L'idée étant d'être très concret et pragmatique pour éviter l'effet "architectes en tour d'ivoire" qui peut encore exister ici et là. 

Leur travail englobe des sujets divers :
- l'expérience développeur (DX ou developer experience si vous avez l'habitude des articles de blogs anglais sur le sujet)
- les services partagés, techniques comme les logs, le monitoring, mais aussi fonctionnels comme certaines apis, SSO, api gateway etc...

Pour cette équipe, la simplification doit être l'un de ces enjeux principaux. Ce qui est simple s'explique bien et s'utilise bien.
Elle doit prendre en compte la conduite de changement, il ne suffit pas d'améliorer la plateforme, il faut accompagner les utilisateurs. Ca peut être via de la formation, de la documentation, l'usage de standards et j'en passe. 

Je parlais de quantitatif plus haut, c'est important pour rationaliser le travail. Nous souhaitons avoir systématiquement des critères chiffrés pour entamer un projet. Faire de la technique pour de la technique n'a aucun sens. Il faut mettre en évidence pourquoi on le fait et fixer un objectif d'amélioration.
Sans chiffres, il n'y a pas d'objectifs.
Sans objectifs, on ne peut rien prioriser et il n'y a pas d'alignement.

Voici pour la mise en contexte, maintenant abordons les origines du projet "**Singapore**", justement démarré dans le cadre de cette équipe.

## L'origine du projet

Avec le temps, la charge cognitive de chaque développeur est devenue importante au vu de la taille de la base de code. Les choix technologiques de ces 10 dernières années sont pour certains encore très pertinents, mais pour d'autres, c'est moins évident, pour rester poli :)   
Et c'est justement le cas pour les technologies front-end que nous utilisons.

Sur le début d'année 2022 nous faisons le constat suivant.

6 technologies différentes sont utilisés côté front-end :
  - JSP, le moteur de templating Java par défaut 
  - AngularJS pour une page du site (je l'ai redécouvert au moment de l'écriture de ce billet)
  - Vue.js (2 avec une migration en cours vers la 3), essentiellement pour des parties où l'utilisateur est connecté ou bien pour des applications internes
  - des modules Javascript maison, appelé hopmodule, utilisé principalement dans les JSP
  - Des templates Handlebars sont partagés entre backend et frontend pour certaines pages qui nécessitent d'être rendu côté serveur puis ensuite rendu dynamique côté client
  - Nuxt 2 pour une application (parmi une vingtaine)

Pour comprendre, en 2012 nous avions fait le choix des JSP pour faire du rendu côté serveur (SSR pour server side rendering) afin d'être compris par les moteurs d'indexation (Google, Bing) et donc avoir un bon SEO.
Plus tard nous avons introduit des frameworks comme AngularJS, remplacé par la suite par Vue.js afin de rendre dynamique des portions de la page après chargement.
Enfin nous avons totalement utilisé Vue.js pour des applications complètes (SPA pour Single page application). 

Tout ceci implique qu'il y a beaucoup à savoir quand on développe côté front, notamment parce qu'il a fallu répondre plusieurs fois aux mêmes enjeux, pour chaque technologie.

Si je prends un exemple, sur notre portail de documentation développeur :
- pour l'échappement de caractères, nous détaillons plus d'une demi-douzaine de façons de faire (avec JSP, avec la taglib spring-message, avec les attributs data-js utilisé par nos micro modules, etc...)
- pour l'internationalisation, rebelote, nous détaillons là encore plus d'une demi-douzaine de façons d'internationaliser les pages

Autre chose à savoir, la plupart du code source des applications front est inclus dans le code source des applications backs dans des répertoires src/main/front et c'est le rôle de l'usine logicielle de séparer les artefacts au moment du build. 
Mais les développeurs eux doivent tout charger dans leur IDE (intellij pour beaucoup d'entre nous). 
Or avec le volume de code et l'ensemble des plugins nécessaires pour comprendre toutes les technologies, intellij souffre beaucoup. Et quand je dis beaucoup....

Au quotidien, lorsque l'on travaille sur le front-end des applications, il y a également de l'outillage qui tourne en permanence, par exemple pour faire des copies de fichiers ayant été modifiés (des JSP présentes dans une librairie commune) vers le répertoire où tourne l'application en cours de travail.

Je passe sur de nombreux autres détails, mais ce qu'il faut retenir :
- les outils pour travailler sont nombreux, ce qui rend parfois compliqué les fois où cela ne se passe pas bien. Il faut souvent plusieurs personnes pour débloquer une personne rencontrant un problème
- la charge sur la machine est importante, ce qui rend nécessaire d'avoir des machines de courses pour travailler. Et même comme cela, l'expérience n'est pas toujours fluide. 

## La question à 1M de dollars

A ce moment-là, j'aime bien me poser une question simple :

"Quels seraient mes choix si nous devions créer Malt en partant d'une feuille blanche en 2022 ? Est-ce que nous pourrions faire beaucoup mieux ?"

En parallèle de cette question, j'ai eu plusieurs expériences positives avec des stack [jamstack](https://jamstack.org/).

::tip
Jamstack is an architectural approach that decouples the web experience layer from data and business logic, improving flexibility, scalability, performance, and maintainability.
::

J'ai pu tester avec succès :
- gridsome pour le site https://www.malt.engineering/
- Nuxt et nuxt-content pour mon blog personnel.

La réponse à la question ci-dessus semble évidente, en 2022 l'approche standard la plus efficace serait sans doute d'utiliser une approche Jamstack. 

D'autant que, ici on parle de front, mais cela change aussi le développement côté back. On passe sur un paradigme orienté API. On ne construit plus des vues métiers car la logique de présentation est désormais déporté. On pense en termes de contrats d'API et cela peut faciliter le travail de notre équipe mobile qui n'aura plus autant besoin de développement adhoc.  
Cela ouvre aussi d'autres horizons comme le fait d'ouvrir nos APIs en externes. 

Pour rendre à César ce qui appartient à César, cette piste avait déjà été envisagée en 2018 par Mickael J. On imaginait à ce moment-là une solution utilisant Nuxt afin de faire du Server side rendering et donc de répondre aux contraintes SEO.
Nous n'étions pas encore prêt à investir autant dans ce changement. Nous n'avions peut-être pas non plus la maturité nécessaire. Toujours est-il que nous n'avons pas entamé ce chantier.

En 2022 notre complexité front a cependant augmenté et nous devons simplifier "l'expérience développeur" au risque d'avoir de grosses déconvenues très prochainement autrement.
A cette étape, il ne s'agissait encore que d'une intuition. Il était devenu nécessaire d'étudier la faisabilité de ce chantier et de se fixer des objectifs chiffrés sur le résultat.

Nous déciderons d'appeler le projet "Singapore" qui représente symboliquement le départ de l'île de Java (les JSP) vers le pays le plus proche du continent Asiatique.

## Présentation de nuxt

En quelques mots, qu'est-ce que Nuxt ? 
C'est un meta framework, c'est-à-dire que c'est un framework au-dessus d'un autre framework : vue.js

Il apporte notamment la possibilité d'utiliser plusieurs modes de rendus : 
- Client side rendering (pas vraiment besoin de Nuxt dans ce cas là, vous pourriez faire pareil avec Vue.js tout seul)
- Server side rendering (pour envoyer le contenu complet déjà rempli au navigateur, remplissant ainsi les contraintes SEO)
- Universal rendering (le premier appel fait du SSR, ensuite l'application est chargée et tout se fait en client side rendering)
- de la génération statique 

Et pourquoi Nuxt ?
La question aurait pu se poser avec Next.js qui a le même objectif dans l'écosystème React. Next est plus ancien, semble plus mature et bénéficie d'une communauté très large.

Mais nous sommes très à l'aise avec Vue.js, framework que nous utilisons depuis maintenant plusieurs années. 
Et dans l'écosystème vue.js, c'est Nuxt qui nous a semblé le plus mature. 

## Etude préalable

Après avoir initié la réflexion, je me suis lancé sur l'étude préalable en juillet/août 2022. 

L'objectif de l'étude était de vérifier que nous pouvions reproduire l'ensemble de nos applications front actuelles. Il fallait par exemple valider toutes nos spécificités sur l'internationalisation (la gestion des formes plurielles avec ICU), la sécurité (les taglibs spring security), le feature flipping (avec ff4j) etc...

Le second objectif de l'étude, c'était de définir les critères de succès. 

Enfin, cette phase était aussi la première étape d'une opération de conduite de changement. L'aspect humain était crucial dans cette phase d'étude dans le sens où elle devait impliquer et embarquer les futurs sponsors du projet. 

Lors de cette étape, un meeting hebdomadaire a été mis en place afin de partager l'avancement, discuter des points techniques en cours d'étude ou faire des démonstrations. 
Un support écrit et collaboratif (un google docs) a été tenu à jour pendant toute la durée de l'étude avec toutes les discussions liés aux prototypes, les comptes rendus de réunions etc...
Ce document n'est pas une ADR à proprement parler (architecture decision record) mais peut servir à en rédiger. Il a notamment servi à la rédaction de la documentation développeur par la suite. 

Tous les prototypes non sensibles ont été publiés en open source afin de communiquer avec l'équipe Nuxt : 

https://gitlab.com/maltcommunity/public/singapore-prototypes

Parmi les points que nous avons abordés lors de l'étude : 
- la problématique de déploiement pour les apps avec et sans SSR 
- l'authentification
- le partage de code entre client et serveurs
- i18n
- les modules Nuxt
- le SEO
- les taglibs spring security et spring message
- les micro frontends

::tip
Je ne rentrerais pas en détail ici sur chaque sujet sinon ce billet serait gigantesque. Mais s'il y a un intérêt particulier pour l'un de ces items, il pourrait être abordé dans un futur billet.
::

Fin août, l'étude a permis de valider la faisabilité technique. En sus, les objectifs listés étaient les suivants :

- diminution du temps de cycle
- diminution du temps de build
- découplage front et back
- diminution du temps de démarrage des applications

Ces métriques vont cependant évoluer par la suite.  
Les temps de cycle sont à ce jour mal mesurés chez nous. C'est surprenant, car c'est sans doute la métrique plus importante de toutes mais effectivement nous ne sommes pas encore assez bons pour la suivre correctement.  
La diminution du temps de build devait beaucoup être liée au fait de supprimer les dépendances entre build front et back. Ce sujet a été adressé en parallèle dans un autre chantier lié à la CI (migration de maven vers gradle).  
Le temps de démarrage est intéressant, mais nous ne collectons pas la mesure sur les postes de travail.  
Pour ma part j'ai certaines applis qui pouvaient mettre entre 100 et 200 secondes à démarrer. Mais je n'ai aucun moyen de démontrer que ce phénomène est le même chez tout le monde, et il n'est pas vrai sur toutes les applis.  
Le temps en intégration et production est, de plus, totalement différent du poste de dev (en grande partie lié à l'instrumentation datadog et le dimensionnement des pods).

Sur le découplage, à l'origine, on se demande comment le mesurer. Et puis nous noterons plusieurs axes possibles :
- le passage de 6 technologies front à une seule est déjà une métrique en soi.
- la suppression du volume de JSP. Cette mesure n'est cependant pas très satisfaisante puisqu'elle mesure juste un changement de techno. Elle n'apporte pas plus que la précédente.
- la diminution de la base de code. En effet, le passage de 6 technos à une seule va supprimer beaucoup de code en doublon. Chaque techno ayant implémenté les mêmes briques de bases pour la sécu, l'internationalisation etc...

Un premier prototype grandeur nature va nous permettre d'y voir plus clair.

## Un premier prototype

Sur septembre, une première application a été migrée. Les critères de choix de ce premier projet étaient :
- de taille modeste, car une seule personne allait travailler dessus à temps plein, tout du moins au début
- pas visible pour l'utilisateur final, pour limiter les risques
- faiblement couplée avec les autres composants (pas central) pour éviter de marcher sur les plates bandes de plusieurs équipes

Ce premier projet a été une SPA (sans utilisation de SSR). Il s'agit d'un back office interne, une appli relativement simple (12k lignes de code).
Cependant, cette application est intéressante, car elle utilise des JSP, des petites applications en vue2, et du javascript custom.
Elle permettait donc de démontrer la faisabilité sur de nombreux points en suspens et de valider l'architecture générale cible pour une SPA en CSR (client side rendering).

La migration s'est faite en "double run" : Les deux applis ont coexisté avec un mécanisme de routage effectué par Traefik (notre reverse proxy).
La démarche de migration devait aussi valider la facon dont on pouvait basculer et revenir en arrière en cas de soucis. 

En cours de route, l'équipe s'est étoffée; ce qui permettra ensuite d'avancer plus rapidement pour la fin d'année. 

## Un effet de bord, une documentation totalement remaniée

Comme je l'indiquais plus haut, l'un des enjeux dans un projet de ce type est avant tout humain. Pour améliorer la developer experience, il ne faut pas lésiner sur l'accompagnement. 

Dans ce cadre, j'ai décidé de totalement revoir notre portail de documentation interne à destination des développeurs. Cela pourrait faire l'objet d'un billet à part entière, mais dans les grandes lignes voici quelques éléments importants :
- On suit globalement les principes listés sur [ce très bon article de référence sur la gestion de la documentation](https://documentation.divio.com/) (même si on ne le connaissait pas encore à ce moment là, je vous recommande sa lecture)
- nous avons abandonné antora pour passer sur [vuepress](https://v2.vuepress.vuejs.org/), toujours dans l'optique de capitaliser sur vue.js

## Les résultats

Mi-octobre, une démo a pu être faite avec l'application porté sur Nuxt. 

Voici quelques résultats :
* 7,7k lignes de code. C'est une diminution de **53%** de l'application d'origine

Nuxt et Vue3 permettent effectivement d'être beaucoup plus concis que l'équivalent en JSP. Les applications vue ont été simplifiées également. 
Mais un autre bénéfice, et c'est l'un des intérêts des réécritures comme celle-ci, a été l'occasion de détecter les fonctionnalités obsolètes et de les supprimer.

* les performances sont globalement meilleures. Tests effectués avec [K6](https://k6.io/) : Un P95 a 489ms avant pour 271ms après, soit **44%** d'amélioration
* un score lighthouse en hausse également, 86 vers 94 en performance, 72 vers 84 en accessibilité et 67 vers 83 en best practices..

Concernant les progrès sur l'accessibilité, tout n'est pas lié au fait d'utiliser nuxt mais aussi à une utilisation massive du design system Malt alors que l'ancienne app l'utilisait peu. 

Une seconde application a été migrée entre mi-octobre et décembre, cette fois très centrale puisqu'il s'agit de la page d'accueil et de quelques pages de contenu.
Cette fois, le SSR était obligatoire.  
Sans rentrer dans le détail, on utilise Prismic et nuxt prismic pour créer ce contenu. 

Les résultats sur cette application sont les suivants :

* 43% de code en moins 
* le score lighthouse est passé de 90 a 96 en perf, 89 a 95 en accessibilité et 67 a 83 en best practices.


On constate donc que pour l'instant, en moyenne, on allège la base de code des applications front de plus de 40% ce qui est au-dessus de nos attentes initiales.  
Le temps de démarrage s'améliore lui de 22% sur staging et prod. 

La surprise vient de l'amélioration des performances qui n'était pas un objectif initial. Les gains sont très forts sur la première app.
Ils existent aussi sur la seconde application mais malgré tout, le "server response time" reste très grand et nous devons travailler pour l'améliorer. 
Cependant, pour un premier jet, c'est très satisfaisant.

Pour rajouter quelques éléments, 5 personnes étaient impliquées en décembre à temps plein sur le projet.  
En janvier, 10,53% des applications a été migrées.   
Le projet, reconnu comme étant stratégique, est désormais une priorité de l'ensemble de l'équipe Produit et sera mis en œuvre progressivement durant toute l'année. 

Et voilà qui conclura cette première étape. Ce billet pourrait faire l'objet de suite plus tard, soit pour donner un état d'avancement, soit pour aller plus en profondeur sur certains sujets techniques bien spécifiques.














