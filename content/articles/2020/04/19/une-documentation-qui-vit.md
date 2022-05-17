---
id: "1511"
title: "Une documentation qui vit"
description: "Et si on parlait documentation ?  
La documentation c'est un peu le sujet maudit et polémique dans les équipes tech. Entre ceux qui en font trop, ceux..."
date: "2020-04-19"
categories: 
  - "waza"
tags: 
  - "antora"
  - "doc"
img: "image-2.png"
cover: "cover2.jpg"
---

Et si on parlait documentation ?  
La documentation c'est un peu le sujet maudit et polémique dans les équipes tech. Entre ceux qui en font trop, ceux qui n'en font pas assez ou pas du tout. Est-ce que même parler de "faire de la doc" sur un blog technique c'est pas un peu... un troll ? :)

[![Troll face](/images/image-2.png)](https://eventuallycoding.com/wp-content/uploads/2020/04/image-2.png)

J'ai connu des périodes assez variées d'un point de vue personnel concernant les pratiques documentaires que je vous propose de passer en revue.

## Une indigestion de doc

J'ai commencé dans une ESN/Société de Service/Marchand... C'était il y a maintenant presque 20 ans, la documentation était très carré. Je faisais partie d'une société qui pouvait se vanter d'être certifié avec des labels à n'en plus finir et de bosser elle même pour des clients certifiés également.

Je ne vais pas dire que c'était 100% efficace mais ça avait le mérite d'être très méthodique. On passait de l'expression du besoin, aux spécifications fonctionnelles, puis aux specs techniques, aux cahier de recettes etc… Tout était précis, carré, pénible. Pour chaque nouvelle version du logiciel on livrait également un bordereau de livraison listant l'ensemble des documentations ayant changé. Et chaque doc était relivrée en mode relecture. La doc était un livrable, testé, comme le reste. Chaque doc avait un acronyme particulier. Par exemple STBL, EB etc… et possédait un versionning très précis (que j'ai oublié). On pouvait avoir des anomalies documentaires, pour lesquelles on recherchait les causes racines qui parfois se retrouvait dans l'expression de besoin cliente. Ce qui donnait lieu à des discussions pleines de joie et de bonheur.

Je suis ironique et ça peut sembler lourd (ça l'était). Mais pour être fair-play, avec le recul, ça avait le mérite d'être mature et au moins la documentation était à jour. A un coût démesuré mais elle était à jour.  
Forcément cela demande beaucoup d'énergie (et d'argent) qui ampute grandement la rapidité de dev, la capacité à répondre vite à vos utilisateurs avec le bon produit. Mais une doc exhaustive et à jour pour des plateaux de centaines de personnes sur 20 ans, c'est quand même important.

## Ou pas de doc du tout ?

C'était en 2002. Un an plus tôt des personnes formalisaient ce qu'on appelle le manifeste agile et deux de ces piliers étaient :

- un logiciel fonctionnel plutôt qu’une documentation complète
- s'adapter aux changements plutôt que suivre le plan

En gros si je caricature, faites moins de plan et de doc, voyez-vous plus souvent avec vos utilisateurs, montrez leur votre avancement et avancez pas à pas avec lui.

Rapidement, c'est devenu pour beaucoup : ne faites pas de doc. Même si ce n'était pas la définition de départ.  
Pour ceux ayant connu comme moi la période précédente, c'était peut être aussi une grosse indigestion mal vécu qui conduisait à un gros rejet de tout ce qui ressemble de près ou de loin à un référentiel documentaire.

L'agilité pronait un retour à l'écoute du client avec plus de co-conception, et aux bonnes pratiques d'ingénierie (XP), les fondamentaux en somme.

Pour beaucoup, le code pouvait remplacer toute documentation. Il est constamment à jour et pour caricaturer, un README et une javadoc suffisait.  
En sus, il y avait de nombreux professionnels qui insistaient (insistent toujours) sur l'expressivité du code. Cette expressivité doit remplacer des commentaires souvent inutile ou présents pour expliquer une complexité qui n'a pas lieu d'être et qui ont en plus la facheuse tendance à devenir obsolète. Donc la javadoc (ou équivalent dans le language de votre choix) devenait uniquement un index des classes et méthodes, avec l'espoir d'un bon nommage.

Mon opinion personnelle : de trop de doc, on est passé à pas assez de doc.  
Oui le code doit être expressif mais il est nécessaire aussi de parler de ce qui n'est pas dans le code : les choix, les non-choix, les compromis, la vision d'ensemble etc…  
Une règle métier ne peut pas juste se résumer à une méthode bien nommée.

Après je comprends aussi que ce ne soit pas le sujet le plus sexy en apparence. La documentation ne semble pas aussi motivante intellectuellement que de développer un algo, de débugger un problème velu, de faire fonctionner un système.

Maintenant que j'ai fait cette intro, je vous propose de vous décrire ce que nous avons mis en place pour essayer de trouver un juste milieu entre une documentation utile, à jour et éviter une lourdeur à la société ITIL-CMMI-ISO dont la vélocité n'est plus à démontrer…

## Une documentation générée

Nous sommes partis du principe qu'une grande partie de l'information, la plus précise, se devait d'être :

- toujours à jour
- la plus proche possible de son utilisation

Pour cela, il fallait donc la générer à partir du code quand c'était possible ou la placer très proche de celui-ci quand ce n'était pas possible (le fameux README).

Mais nous voulions aller au délà d'une simple Javadoc.  
Nous avons donc codé des utilitaires pour extraire certaines informations du code et en faire de la documentation.  
Quelques exemples :

- un outil qui extrait du code toute les classes et méthodes annoté par _PreAuthorize_ pour lister l'ensemble des rôles (permissions) possible et comment c'est utilisé
- un outil qui extrait toutes les classes dérivant de "Event", la classe générique des événements mis dans RabbitMq, pour lister tous les events possibles avec leurs consommateurs et producteurs
- des annotations adhoc destiné à mettre en valeur certains bouts de code de référence : _@HowTo_ afin de faire une section de FAQ avec tout les HowTo : _comment faire un job Quartz, comment faire un tests unitaire avec Junit5 et Mockito_ etc… Le code étant donc toujours à jour dans la documentation puisque utilisé en prod et testé.
- des annotations d'illustration des concepts métiers _@CoreConcept, @GuidedTour_ permettant de générer des tours guidés sur des sujets métiers bien spécifiques.  
    et j'en passe.

Pour cela nous avons utilisé [qdox](https://github.com/paul-hammant/qdox) et quelques outils de parsing maison pour du json, js etc…

[![](/images/doc-emails.png)](https://eventuallycoding.com/wp-content/uploads/2022/05/doc-emails.png)

Nous avons cependant une limitation actuellement : nous avons une base de code Kotlin qui est de plus en plus importante et ce code n'est pas couvert par qdox. Il faut que nous trouvions un remplaçant pour Kotlin. Si vous avez, je suis preneur.

Une fois cela fait, il fallait y rajouter une information plus méta et aggréger le tout au même endroit

## Portail de développement

Auparavant nous avions un site statique très simple constituée des fichiers générés plus haut mais ce n'était pas satisfaisant pour ajouter de la doc méta facilement.  
J'ai donc cherché un outil qui puisse servir à réaliser un portail de documentation développeur avec les contraintes suivantes :

- peut acceuillir de la doc généré
- facile d'accès en rédaction avec une syntaxe de type markdown ou asciidoc

Comme je ne savais pas bien quoi utiliser je suis passé par [Twitter](https://twitter.com/hugolassiege/status/1228390348499693568) et j'ai eu de très nombreuses réponses :)  
mkdocs, readme.io, documize, gitbook, wiki.js, docusaurus, asciidoctor, antora, getgrav, bookstack, vuepress

J'ai écarte les SAAS car j'avais peur de la difficulté d'y intégrer nos docs générés et il s'agissait d'une solution sur laquelle je n'étais pas encore sûr de l'adoption donc c'était un peu tôt pour investir.  
J'ai écarté les solutions qui sont surtout des boites à outils pour construire de la doc. Je voulais réussir à avoir un résultat dans la journée pour un portail complet.

A la fin j'ai donc sélectionné Antora : [https://antora.org/](https://antora.org/)

Pour résumer les points qui m'ont convaincu :

- support de [asciidoctor](https://asciidoctor.org/)
- support de [plantuml](https://plantuml.com/fr/)
- aggrégation possible de module de doc entre plusieurs repos
- un layout de base suffisant (table des matières, menu etc…), rien à construire quasiment

En terme de construction de la doc, nous lancons un build sur la CI :

- lancement des utilitaires pour construire la doc généré et la placer dans l'arborescence de antora
- copie des fichiers statiques de type README qui sont disséminés dans les apps dans antora (je préférerais pouvoir les inclure depuis antora mais pour l'instant ce n'est pas possible)
- lancement de antora pour transformer tout cela en fichiers html
- copie sur un serveur

Et voila ce que ca donne grosso modo :

[![](/images/doc-result.jpg)](https://eventuallycoding.com/wp-content/uploads/2022/05/doc-result.jpg)

En terme de résultat nous avons donc des pages de documentation qui sont générés depuis le code et des pages rédigées.  
Les pages rédigées doivent rester méta (principe de fonctionnement, explication de choix, vision prospective etc…) pour avoir le moins de chance possible de ne pas être à jour avec un code qu'elles décriraient.

Voici par exemple, à l'heure où j'écris, notre arborescence :

- **Getting started** : ensemble de doc permettant de démarrer son environnement de dev et contribuer à la documentation
- **Architecture** : une liste de docs qui explique les grands principes de l'architecture chez Malt, les choix techniques effectuées et comment ils ont été pris (avec les compromis acceptés)
- **Domains** : une doc généré qui liste les entités de domaines et reprend la javadoc de chaque champ, complété avec de la doc rédigée
- **Applications** : l'ensemble des README de chaque application qui doit comprendre en théorie les choses nécessaires à savoir pour développer sur cette application et son but général
- **Guides** : des tutoriaux, des explications détaillées, des principes de devs (guidelines) dont une partie provient du code
- **Resources** : des resources externes, des référentiels de connaissance (liste des events RabbitMQ, liste des SMS/Mails) etc…
- **Platform** : un focus plus détaillée sur l'infrastructure

Si cette approche à base de documentation automatique vous intéresse, je vous invite à rechercher "**living documentation**" sur internet. Vous avez notamment plusieurs conférences de **Cyrille Martraire** sur le sujet ainsi qu'un livre :

- [Et si la doc devenait aussi sexy que le code](https://www.youtube.com/watch?v=Tw-wcps7WqU)
- [Le livre](https://www.amazon.fr/Living-Documentation-Cyrille-Martraire/dp/0134689321)

A bientôt
