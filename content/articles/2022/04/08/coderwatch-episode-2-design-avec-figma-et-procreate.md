---
id: "2017"
title: "Coderwatch : épisode 2 - Design avec Figma et Procreate"
description: "[English version here](https://eventuallycoding.com/2022/04/08/coderwatch-episode-2-design-with-figma-and-procreate/)

Voici le second billet de cette..."
date: "2022-04-08"
categories: 
  - "waza"
tags: 
  - "coderwatch"
  - "product"
img: "pasted-image-0-5.png"
cover: "cover6.jpg"
---

[English version here](https://eventuallycoding.com/2022/04/08/coderwatch-episode-2-design-with-figma-and-procreate/)

Voici le second billet de cette série autour de la création d’un side project. 

Si vous n’avez pas lu le premier, mon objectif est de faire une mini série retraçant l’ensemble des étapes pour la création d’une application relativement simple :

[www.coderwatch.io](http://www.coderwatch.io/)

dont le pitch principal est : **apprendre des langages et frameworks informatiques en jouant**. Je vous propose de passer des quizz, de gagner des points, et progressivement de monter dans le classement face aux autres joueurs tout en améliorant vos connaissances.

C’est l’occasion d’en apprendre plus sur différents métiers du web : designer, PM, dev back, dev front etc… Car oui, le challenge, c'est de toucher à tout les métiers.

Et justement sur ce billet, on va parler d’UI, d’UX et d’illustration, ce qui est très loin de ma zone de confort et c'est sans doute loin également de l'audience qui lit habituellement ce blog. Mais justement, ça vous ouvrira peut-être des horizons.

Les billets de cette série :

- [](https://eventuallycoding.com/2022/04/04/cest-lhistoire-dun-side-project/)[C’est l’histoire d’un side project : cultiver une idée, créer un MVP](https://eventuallycoding.com/2022/04/04/cest-lhistoire-dun-side-project/)
- [](https://eventuallycoding.com/2022/04/04/cest-lhistoire-dun-side-project/)[Coderwatch : épisode 2 : Design avec Figma et Procreate](https://eventuallycoding.com/2022/04/08/coderwatch-episode-2-design-avec-figma-et-procreate/)
- [](https://eventuallycoding.com/2022/04/04/cest-lhistoire-dun-side-project/)[Intégration et dev web avec Bulma, Vue.js etc... - Coderwatch episode 3](https://eventuallycoding.com/2022/04/14/integration-et-dev-web-avec-bulma-vue-js-etc-coderwatch-episode-3/)
- [](https://eventuallycoding.com/2022/04/04/cest-lhistoire-dun-side-project/)[Spring Boot et Vue.js - Coderwatch episode 4](https://eventuallycoding.com/2022/05/04/spring-boot-et-vue-js-coderwatch-episode-4/)

## Première étape, une maquette

Avant de coder, l’idéal c’est de faire plusieurs essais sur des maquettes. C’est sans doute quelque chose que je faisais moins il y a quelques années et j’avais une certaine tendance à me lancer d’abord sur du dev avec un frontend très simple. Mais j’avoue qu’avoir une bonne maquette, commencer à représenter un parcours utilisateur, illustrer les transitions, c’est une première étape qui a de nombreux avantages :

- c’est beaucoup plus rapide d’itérer sur une maquette que sur du code
- corollaire : on peut rapidement créer des parcours utilisateurs
- on peut très facilement montrer un produit “fini” et récolter des avis critiques
- c’est hyper satisfaisant d’avoir une maquette terminé à la fin d’une première itération plutôt que des pages moches avec ¼ des fonctionnalités qu’on a en tête (la maquette peut être beaucoup plus complète)

[![](/images/pasted-image-0-5.png)](https://eventuallycoding.com/wp-content/uploads/2022/04/pasted-image-0-5.png)

Exemple ici avec deux versions différentes de la Home.

## Trouver un thème sur themeforest

Mon challenge c’est de faire tout du sol au plafond. Mais ça n’empêche pas d’aller chercher de l’inspiration ailleurs. 

J’ai donc pour cela utilisé [themeforest](https://themeforest.net/) qui permet d’acquérir des thèmes graphiques sous différent format.

On connaît souvent ce site pour ces thèmes wordpress mais on peut y trouver également des design **Figma**. J’ai donc cherché des thèmes pour me servir de moodboard et j’en ai sélectionné deux pour un coût total de 49 euros. 

## Le coup de coeur : Figma

Je viens de parler de [Figma](https://www.figma.com/) sans expliquer ce que c’est. C’est pour moi l’un des meilleurs outils actuel pour réaliser des maquettes. Il se prend assez facilement en main, y compris pour un néophyte comme moi. 

Je ne suis pas Web designer ou Product Designer, je l’ai utilisé sans doute à moins de 10/20% de ces capacités mais c’est suffisant pour mes objectifs. 

Petit panel des fonctionnalités que j’ai réussi à utiliser :

- créer des styles réutilisables (notamment pour les polices et couleurs)
- création de composants (bouton, badges, éléments de liste)
- dessin vectoriel et export en SVG

Bref, j’ai pu repartir des thèmes achetés sur themeforest, créer des composants de référence, introduire une palette de couleur que j'ai choisi, ajouté des illustrations et à la fin, tout personnaliser pour mon propre usage.

Au final, cela représente une vingtaine de pages dont voici un petit aperçu : 

[![](/images/pasted-image-0-10-1024x572.png)](https://eventuallycoding.com/wp-content/uploads/2022/05/pasted-image-0-10.png)

## Les illustrations : Procreate

Pour un jeu, je voulais introduire des éléments graphiques et j’avais envie de me rapprocher d’un esprit rétro gaming. Pour ça, j’ai trouvé que le Flat design était bien adapté et j’ai souhaité faire mes propres illustrations. 

Ce que j’ai utilisé ici n’est clairement pas le bon outil. En théorie pour faire du vectoriel, j’aurais pu rester dans Figma ou utiliser des outils créés pour ça (adobe Illustrator, Inkscape etc…). 

Cependant je n’ai pas été très à l’aise avec le dessin vectoriel tandis que je me sentais plutôt en confiance avec Procreate que j’utilise déjà [pour dessiner](https://www.instagram.com/corwinhakanai/). 

Ainsi je me suis servi de Procreate pour toutes les illustrations du site, le logo, les badges que l’on retrouve dans Coderwatch. 

[![](/images/pasted-image-0-11-1024x583.png)](https://eventuallycoding.com/wp-content/uploads/2022/05/pasted-image-0-11.png)

Par contre, ce sont des images, pas des svg et on perd totalement l’avantage attendu sur un dessin vectoriel qui doit supporter plusieurs tailles d’image sans dégradation de qualité. La taille des images ci-dessus est beaucoup trop importante (environ 400ko par image). 

Ah oui, et sinon dans le futur j’aimerais beaucoup utiliser [Lottie](https://lottiefiles.com/) pour ajouter des animations aux moments clés d’une partie. Mais bon voilà, je me suis fixé un temps maximum dessus et j’ai préféré passer à la suite.

## Conclusion

En fin de compte, cette phase de maquettage a duré environ **une semaine** avec la recherche de thèmes, de palette de couleurs, de créations de composants dans Figma, d’assemblage, de recherche sur l’UX et d’illustrations.

Un professionnel aurait sans doute été plus rapide. Ou peut être qu’il aurait pris le même temps mais le résultat aurait été bien meilleur :

- Le Figma serait plus propre, il utiliserait des systèmes de grid, une meilleure gestion des composants ou des listes, des transitions
- l’UI serait certainement plus jolie, plus cohérente, mieux contrasté
- les images seraient plus optimisées

Mais pour une première version à 49 dollars, je m’en contenterais. 

Dans tous les cas, c’est une étape assez amusante à faire, et très satisfaisante car elle permet très vite de visualiser la direction où on veut aller. C’est également un très bon support d’échange pour avoir les premiers retours.

Et évidemment si on souhaite investir un peu plus de moyens, [on peut facilement contacter un freelance en Web Design, illustration, UI/UX sur **Malt** directement](https://www.malt.fr/s?q=webdesign&location=En+t%C3%A9l%C3%A9travail+%28France%29&remoteAllowed=true&as=t). Je m’avance un peu mais je dirais que pour mon cas avec une vingtaine de pages, un design system à créer, quelques illustrations il aurait fallu compter entre 3000 et 10000 environ ?

(j’ai pas fait vérifier ce chiffre par un freelance donc si je dis une grosse connerie, dites le moi en commentaire et je corrige)

Dans le prochain billet, on parlera de la phase d’intégration HTML/CSS/JS.

A très vite.
