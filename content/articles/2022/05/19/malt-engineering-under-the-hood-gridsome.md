---
id: "1"
title: "Malt engineering sous le capot avec Gridsome"
description: "Je ne sais pas si vous avez suivi l'actualité mais le marché de la tech dévisse pas mal depuis le début d'année."
date: "2022-05-19"
categories: 
  - "Malt"
tags: 
  - "malt"
  - "gridsome"
  - "jamstack"
img: "jamstack.png"
cover: "jamstack.png"
---


Récemment chez Malt nous avons ouvert [malt.engineering](https://malt.engineering/) afin de rassembler et structurer des informations sur notre fonctionnement.
Sur ce billet je vous propose de découvrir comment cela fonctionne sous le capot.
Je vais aborder les raisons de la création de ce site, en quoi il est différent du blog et surtout, comment il a été construit avec **Gridsome**.


## Pourquoi Malt.engineering ?

Tout d'abord il faut remonter aux raisons qui nous poussent à partager publiquement notre travail.
Il se trouve que depuis le début de ma carrière je fais ma veille technologique à travers des blogs, forums, vidéos sur internet.
Depuis mes premières années professionnelles ces ressources en ligne m'ont rendu service et inspiré plusieurs fois, techniquement et humainement.

Assez naturellement j'ai commencé moi-même à contribuer en essayant également de partager mon expérience au bénéfice de cette communauté.
Tout d'abord en tant que rédacteur sur le site developpez.com de 2002 a 2007 (environ ?), puis via le blog [eventuallycoding.com](https://eventuallycoding.com) à partir de 2007.

Lorsque j'ai cofondé Malt, les premières personnes qui nous ont rejointes ce sont soit des ex-collègues avec qui j'avais déjà travaillé, soit des personnes que j'avais rencontré dans des meetups et conférences. 
Chaque personne partageait cet état d'esprit et nous avons publié dès les premières années des projets open source (critical css, mongo streamer) et des articles pour décrire ce que nous apprenions avec la croissance de l'entreprise.

Au delà de cette volonté de partage, laissez-moi vous donner un second avantage du blog dans une société comme Malt.
Un billet de blog, c'est une affirmation, un positionnement. 
Les billets laissent une trace, c'est une documentation. Ils ne documentent pas uniquement le comment, mais aussi le pourquoi. 
Bref, aussi un formidable outil à l'intérieur de Malt. Si on donne publiquement une vision de Malt en externe, cela donne du sens et du concret en interne. 
C'est comme un phare qui montre l'intention.

Bref, c'est donc une longue histoire d'implication dans la communauté qui nous a mené ici.
Mais le [blog Malt](https://blog.malt.engineering) a un défaut. Malgré sa richesse, il est difficile de structurer l'information, difficile de juger de ce qui est obsolète ou non.
Nous sentions qu'il était nécessaire de regrouper l'information pour faire un **handbook**, un petit guide auquel on se réfère ensuite constamment, notamment à l'arrivée dans l'équipe.
Et quitte à le faire, autant poursuivre dans le même esprit, en le mettant à disposition publiquement.

En somme, [malt.engineering](https://malt.engineering/) permet de mieux nous connaitre mais aussi de découvrir notre fonctionnement interne via un handbook que nous allons enrichir régulièrement.
Cela peut être d'une certaine aide pour d'autres entreprises qui passeront par les mêmes étapes que nous dans le futur.
Et bien sûr, c'est aussi une facon de vous convaincre de nous rejoindre si vous pensez que cet environnement peut vous convenir.

## Gridsome, un framework SSG

Dans de nombreux cas, les sites d'équipes produit se fondent dans un Wordpress un peu plus corporate. Parfois ces équipes ont la main dessus mais c'est très souvent une autre équipe qui gère la structure du contenu.
Nous avons souhaité au contraire que l'ensemble de l'équipe produit puisse s'impliquer dessus, autant sur la forme que sur le fond.
Le choix s'est donc porté vers un site statique avec **Javascript, API et markup**, la fameuse ["Jamstack"](https://jamstack.org/).

![Jamstack description](/images/jamstack.jpg)


Ce choix a l'avantage d'être très simple à déployer, à modifier et possède une empreinte carbone très faible (tout est statique, pas de bases de données).

Jamstack c'est un terme générique et nous avions le choix entre de [nombreuses alternatives](https://jamstack.org/generators/).

Nous avons regardé rapidement :
- [Hugo](https://gohugo.io/)
  son templating en go ne nous a pas séduits
- [Next.js](https://nextjs.org/)
  templating en react, nous n'étions pas à l'aise. Et c'est avant tout orienté pour faire des apps donc peut-être trop généraliste dans notre cas
- [Gatsby](https://www.gatsbyjs.com/)
  le favori au départ. Le templating est aussi en react mais il est spécialisé sur la construction de site statique et est très populaire.

Mais en cherchant davantage, on est tombé sur [Nuxt](https://nuxtjs.org/), une alternative à Next.js mais utilisant vue.js à la place de React.
Il avait cependant les mêmes défauts que Next, trop généraliste, trop d'efforts à faire à première vue pour l'usage en tant que blog.
(j'y reviendrais dans un futur billet cependant).

Et puis enfin, le chainon manquant, une alternative à Gatsby et utilisant Vue.js comme moteur de template : [Gridsome](https://gridsome.org/)

<img alt="Gridsome logo" src="/images/gridsome.png" width="400" class="mx-auto">

Gridsome a l'énorme avantage d'être spécialisé dans la construction de site statiques (**SSG : server side generation**), est préconfiguré pour optimiser la performance, et peut se reposer sur des sources de données externes (comme Gatsby).

## Gridsome sous le capot  

Gridsome reprend les concepts de Gatsby et notamment l'aggrégation de sources externes au moment du build via des "sources". Ces sources peuvent utiliser des CMS headless, des flux RSS, des fichiers json, markdown etc...
L'ensemble de ces informations sont mises dans une base de données Graphql qui peut être interrogé lors de la création de la page. Et tout le templating est fait via Vue.js.

[![Gridsome](/images/gridsome-concept.png)](/images/gridsome-concept.png)

Tout les sujets de performance sont configurés par défaut, automatic code splitting, prefetch, progressive images etc...

En terme de plugin, on utilise :
- sitemap
- feed (pour aller charger des infos en RSS de notre blog et chaine youtube)
- robots.txt
- remark (pour l'enrichissement du markdown et l'embarquement de liens, vidéos youtube, gist  etc... )
- tailwind

Mais le plus simple pour comprendre comment ça marche, c'est peut être tout simplement de **regarder le code directement** !

Et celui-ci est disponible ici :
[https://gitlab.com/maltcommunity/public/malt.engineering](https://gitlab.com/maltcommunity/public/malt.engineering)

Eh oui, en effet nous avons souhaité rendre ce dépot open source avec deux objectifs :
- cela devient plus simple pour n'importe qui dans la boite de contribuer, donc ce n'est pas réservé aux développeurs et il s'agit d'éditer des fichiers markdown
- plus généralement cela donne une source d'inspiration pour la communauté qui utilise Gridsome.
On est bien content quand on tombe sur ce type de ressources nous-mêmes, alors pourquoi ne pas le faire. D'autant que le site étant public, ne contenant rien de sensible, pourquoi cacher le code source ?


## Résultat

Et est-ce que ça marche ?

L'un des principaux critères de succès était l'adoption par l'équipe. Il y a eu plus de 115 commits par une douzaine de contributeurs sur le repository. 
D'autres équipes ont déjà proposé des merge request.
La simplicité d'usage fait que le site a été mis à jour régulièrement et il continuera à l'être.  

Le Handbook va continuer à se structurer dans les prochains jours pour faire apparaître le career path et l'organisation par tribes et guildes.

Restez à l'écoute :)

