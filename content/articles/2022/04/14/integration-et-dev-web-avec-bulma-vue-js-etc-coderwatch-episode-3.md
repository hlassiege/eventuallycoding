---
id: "2035"
title: "Intégration et dev web avec Bulma, Vue.js etc... - Coderwatch episode 3"
description: "[english version here](https://eventuallycoding.com/2022/04/14/integration-and-web-development-with-bulma-vue-js-etc-coderwatch-episode-3/)

Parlons u..."
date: "2022-04-14"
categories: 
  - "waza"
tags: 
  - "bulma"
  - "coderwatch"
  - "frontend"
  - "product"
  - "vuejs"
img: "pasted-image-0.png"
cover: "cover4.jpg"
---

[english version here](https://eventuallycoding.com/2022/04/14/integration-and-web-development-with-bulma-vue-js-etc-coderwatch-episode-3/)

Parlons un peu intégration Web, HTML, CSS et dev Frontend. 

Dans ce billet je vais vous détailler les choix d’implémentation de Coderwatch et je me concentrerais uniquement sur le Frontend. 

Je vais donc parler choix technologique et frameworks. 

Pour situer le contexte, ce billet s’inscrit dans une mini-série autour de la création d’un side project. 

Si vous n’avez pas lu les premier, mon objectif est de décrire l’ensemble des étapes pour la création d’une application relativement simple :

_[www.coderwatch.io](http://www.coderwatch.io/) **: vous permettant d’apprendre des langages et frameworks informatiques en jouant**. Je vous propose de passer des quizz, de gagner des points, et progressivement de monter dans le classement face aux autres joueurs tout en améliorant vos connaissances._

Sur chaque billet à partir de maintenant je donnerais aussi un bilan intermédiaire pour dire où en est Coderwatch, le nombre d’utilisateurs et les métriques importantes. 

Les billets de cette série :

- [C’est l’histoire d’un side project : cultiver une idée, créer un MVP](https://eventuallycoding.com/2022/04/04/cest-lhistoire-dun-side-project/)
- [Coderwatch : épisode 2 : Design avec Figma et Procreate](https://eventuallycoding.com/2022/04/08/coderwatch-episode-2-design-avec-figma-et-procreate/)
- [Intégration et dev web avec Bulma, Vue.js etc... - Coderwatch episode 3](https://eventuallycoding.com/2022/04/14/integration-et-dev-web-avec-bulma-vue-js-etc-coderwatch-episode-3/)
- [Spring Boot et Vue.js - Coderwatch episode 4](https://eventuallycoding.com/2022/05/04/spring-boot-et-vue-js-coderwatch-episode-4/)

Dans le billet précédent j’ai créé une maquette avec Figma et désormais il faut se retrousser les manches pour l’intégrer en HTML/CSS. 

[![](/images/pasted-image-0.png)](https://eventuallycoding.com/wp-content/uploads/2022/04/pasted-image-0.png)

## Intégration HTML/CSS, avec ou sans framework ?

Déjà un peu de contexte, je suis plutôt développeur Backend et j’ai peu développé mes talents d'intégrateur dans le passé. Alors ce que je vais décrire ici, c’est vraiment la démarche d’un dev Back qui souhaite développer un side project et qui doit faire des compromis entre l’état de l'art et la courbe d’apprentissage.

Car justement, tout l’objectif de ce challenge c’est de toucher à tous les métiers, tout en maîtrisant les coûts et le temps. 

Pour la petite histoire, je suis [la chaîne Youtube de Benjamin Code](https://www.youtube.com/c/BenjaminCode?app=desktop) et il est plutôt partisan de se passer des Frameworks CSS qui ont la fâcheuse tendance à être assez lourds pour parfois peu de plus value, voire même sont contre productifs car ils n’utilisent pas les dernières nouveautés. 

Vous pouvez retrouver son argumentaire complet ici : 

https://www.youtube.com/watch?v=77hwpuVHGps

J’ai donc tenté d’appliquer son conseil en utilisant [tailwindCSS](https://tailwindcss.com/) dans un premier temps. C’est un framework qui se distingue des autres car il ne propose que des classes utilitaires, aucun composant. 

C’est d’ailleurs pas tout à fait exact car il existe [tailwindui.com](https://tailwindui.com/) qui propose des galeries de composants payants. 

Mais l’idée de base, c’est qu’on peut tout faire avec juste la librairie d’utilitaires.

Pour être franc, c’était assez douloureux. C’est assez désagréable de polluer autant son HTML et ça nécessite quelques fondamentaux que je n’avais pas à ce moment-là. Coder le responsive du menu, utiliser les flexbox, tout cela c’était trop pour un démarrage. 

J’ai donc bifurqué assez rapidement.

Cependant, j’ai gardé l’idée de trouver un framework orienté composant assez léger, dont je pourrais importer uniquement ce qui m’intéresse, sans Javascript avec une prise en compte du responsive simple.

Et vous savez quoi ? Il en existe beaucoup et les tester tous, ça peut rapidement devenir un gouffre temporel !

Cependant, j’ai abouti sur [Bulma](https://bulma.io/) :

- aucun Javascript inclus
- modulaire
- possède des composants
- fait pour être customisé par un système intelligent [de variables](https://bulma.io/documentation/customize/variables/)
- possède un grand nombre de classes utilitaires

## Une single page application avec Vue.js

Dans l’idéal, pour un SAAS, le meilleur setup de dev selon moi c’est un front fait avec un framework JS et un back qui ne sert que des APIs. C’est pas toujours possible pour des raisons de SEO et j’y reviendrai dans un futur billet dédié au SEO. Mais pour Coderwatch, ça me semblait totalement adapté.

Le choix de Vue.js était assez naturel pour moi. J’aurais pu certes aller regarder du côté de React, Solid ou Svelte, mais on utilise déjà Vue.js chez Malt et vraiment sans aucun regret. Le framework est très puissant, très facile à prendre en main et avec une forte communauté en ligne pour trouver de l’aide.

J’ai cependant hésité avec Nuxt.js qui est une surcouche de Vue3 avec un support du développement côté Backend et des fonctionnalités avancées comme le server side rendering. Cependant, envisager le dev backend en Javascript ne me plaisait pas trop. J’y reviendrai dans le futur billet sur le dev Backend.

Avec Vue.js j’utilise

\- [vue-router](https://router.vuejs.org/) pour le routage des pages

\- [Pinia](https://pinia.vuejs.org/) pour la gestion d’un state management, j’avais cependant démarré avec vuex au départ

## Le build, point noir d’une stack javascript

 Je vais peut-être faire bondir des experts JS sur ce point, mais pour un non spécialiste, le build est une douleur sans nom à prendre en main.

Déjà il existe une multitude d’outils dans chaque catégorie :

- package manager : npm, pnpm, yarn
- tooling (?) : webpack, gulp, vite, parcel etc…

Beaucoup d’outils ont des overlaps, certains sont parfois utilisés ensemble. 

Et quand on cherche de la doc en ligne, c’est un enfer car on trouve toujours de la doc soit sur la mauvaise version et qui ne fonctionne pas, soit de la doc avec la mauvaise combinaison d’outil, soit avec un autre outil. 

Pour illustrer, j’ai démarré a un moment ou vuejs a changé de version majeure officielle. J’ai démarré avec une config qui a changé officiellement la semaine suivante. Mettre à niveau et trouver la bonne documentation a été une purge.

Autre exemple, je n’ai pas configuré le support de Typescript au début. Je me suis dit que ce serait simple à rajouter par la suite. J’ai finalement mis 2 semaines à batailler dans une branche de travail pour réussir à faire fonctionner Typescript.

Et je ne parle pas du nombre de fois où il faut lutter pour comprendre pourquoi un _npm install_ ne marche pas, lié à une librairie en conflit. C’est un travail manuel d’aller comprendre la version attendue par l’une et l’autre des librairies en question.

Personnellement je viens du monde Java avec un outil qui, selon moi, a changé radicalement les choses en 2004 : Maven.

Maven est venu en remplacement de Ant et il propose un standard de build. Ant permet de tout faire avec énormément de souplesse (comme Gradle aujourd’hui ?) mais au détriment d’une standardisation.

Quand un dev passe d’un projet maven à un autre, même avec plusieurs versions d’écart, il retrouve toujours ses billes. 

De loin, avec un oeil novice, Javascript souffre d’avoir des outils très puissants, mais trop nombreux, avec des versions montantes qui très souvent ne sont pas compatibles, avec tellement de souplesse que ça en devient très complexe de trouver la bonne configuration au début mais surtout c’est un enfer à faire évoluer.

## Bilan personnel positif en intégration Web

J’aurais sans doute pas dit ça il y a quelques années mais en fin de compte j’ai vraiment apprécié cette phase d’intégration HTML/CSS.

J’ai appris beaucoup de choses sur le système de flexbox, sur les clippath, sur la modularisation de mes composants, les animations CSS, le positionnement etc… 

Cette phase a duré environ **une semaine** (toujours en mode soir et week-end) pour une vingtaine de pages. À la fin de cette semaine je me sentais beaucoup plus à l’aise et j'avais envie de progresser davantage. 

Si on oublie les outils de build, c’était vraiment plaisant de bosser sur cette partie, de construire des pages et des parcours et de voir progressivement le résultat apparaître.

## Les chiffres de la semaine sur Coderwatch

Le lancement officiel remonte à 2 semaines. Le nombre de joueurs est de 33 et a connu une augmentation ce jour-là avec le premier article de cette série. Cependant le rythme de nouveaux utilisateurs est assez faible.

[![](/images/pasted-image-0-8-1024x508.png)](https://eventuallycoding.com/wp-content/uploads/2022/04/pasted-image-0-8.png)

Le nombre de quizz joués est de 39, ce qui implique que plusieurs joueurs n’ont joué qu’une seule fois sans revenir. 

Aucun utilisateur n’est venu via un parrainage et seule 3 questions ont été créées par des joueurs.

Bref, pour l’instant le jeu n’a attiré quasiment que des followers curieux et on ne peut pas dire qu’il ait trouvé son product market fit. 

Mais ce n’est certainement pas à cette étape qu’il faut laisser tomber, l’inverse aurait été une trop bonne surprise. 

Trois utilisateurs m’ont fait des retours précis et intéressants de leurs parcours et je note quelques éléments limitants pour faire correctement découvrir le jeu dans les premiers moments de l’inscription. 

La question sur laquelle je vais devoir trancher dorénavant c’est : est ce que je dois me concentrer sur l’amélioration du jeu pour transformer les utilisateurs actuels en joueurs réguliers et faire en sorte qu’ils en fassent la promotion, ou bien est ce que je dois me concentrer sur l’acquisition de trafic. 

Wait and see.

Merci de m’avoir lu jusque là. La semaine prochaine je serais à Devoxx pour donner [un talk sur l’impact, le leadership et les carrières techs](https://cfp.devoxx.fr/2022/talk/TBG-5289/Developp(eur%7Ceuse)_Senior_avec_6_ans_d%E2%80%99experience,_et_apres_%3F) donc je n’écrirais sans doute aucun billet. Mais le billet suivant de cette série portera sur le dev Backend.

A bientôt
