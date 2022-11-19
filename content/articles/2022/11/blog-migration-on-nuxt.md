---
id: "7"
title: "Migration du Blog sur Nuxt"
description: "On va parler de ce qui se passe sous le capot aujourd'hui et quelle sont les technos qui font tourner eventuallycoding.com. "
date: "2022-11-20"
tags:
  - "nuxt"
cover: "nuxt.png"
---

Aujourd'hui je vous propose de voir comment ça se passe sous le capot aujourd'hui et quelle sont les technos qui font tourner eventuallycoding.com. 

Bref, on va parler de Nuxt, de Nuxt-Content, de Tailwind, de GithubActions et de Netlify

Mais avant, un peu de mise en contexte. Mais si l'origine de ce blog ne vous intéresse pas, vous pouvez tout de suite sauter ce chapitre pour aller au suivant.   

## Instant nostalgie, eventuallycoding fête sa 22ᵉ année d'existence

En realité, ce blog avait un autre nom auparavant : hakanai.free.fr. 

Hakanai.free.fr est apparu en 2000, c'était un site de [Fansub](https://fr.wikipedia.org/wiki/Fansub) affilié à Mangapartout, un gros groupe de fansub de l'époque aujourd'hui disparu. Pour l'anecdote, même s'il s'agissait d'une activité assez différente, je versionnais mes sous-titres sous SVN :)

J'écrivais bien des articles tech à l'époque, mais ils étaient plutôt disponibles sur [developpez.com](https://hugo.developpez.com/) jusque 2007. 

En 2007, en parralèle de developpez.com, je recyclais hakanai.free.fr en blog tech, parlant à l'époque de PHP, de Java, de Java Swing et j'en passe. J'ai progressivement abandonné developpez.com il y a une dizaine d'années pour me concentrer sur le blog qui a fini par changer de nom en 2013 pour devenir eventuallycoding.com. 

## Joomla puis wordpress

Au tout début, ce blog a utilisé Joomla jusque 2011. Le changement vers Wordpress s'est fait de façon naturelle, car ce soft était la référence absolue en matière de blogging. Il a longtemps été hebergé sur un serveur dédié loué par [Lateral-thoughts](http://www.lateral-thoughts.com/) avant d'être transféré sur wordpress.com plus tard pour plus de facilité d'administration et de maintenance.

## Et maintenant Nuxt ?

Pourquoi partir de wordpress me direz-vous ? 

Pour trois raisons très simples.  
La première, c'est le cout du service. Mon blog ne rapporte pas d'argent et ne cherche pas à le faire. J'avoue que ça m'embête de mettre 300 euros par an (25€/mois) pour le maintenir. Ne me faites pas dire ce que je n'ai pas dit, c'est normal qu'un service d'hébergement coute de l'argent, c'est juste que pour mon cas je pensais pouvoir trouver une alternative plus économique. 

La seconde, c'est le cout énergétique. Ça peut paraître bête, sachant que je suis loin d'être exemplaire sur le sujet, mais j'ai souhaité réduire l'impact carbone de ce blog. Un blog de nos jours, c'est moins dans l'air du temps et l'audience reste faible. Alors faire tourner un serveur 24/24, c'est dommage pour ça.  

La troisième, c'était mon manque de connaissance de Wordpress pour l'adapter à mes envies. J'avais envie d'en faire un site bac à sable, me permettant de faire du dev web. Je souhaitais avoir plus de libertés en tant que développeur. 

Je me suis donc tourné vers des générateurs de sites statiques, donc de simples pages qui peuvent être hébergées très économiquement (et donc avec moins de conso électrique).

Si vous ne le connaissez pas, je vous conseille le site [jamstack](https://jamstack.org/generators/) qui liste tous ces fameux générateurs. 

Mes critères de choix étaient les suivants :
- un langage de templating simple, idéalement du **markdown** 
- facilement extensible pour moi, qui repose sur un framework non exotique et idéalement du vue.js que je connais bien. 
- un outillage tout fait pour la gestion d'un blog (sitemap, feed RSS etc...)

Les frameworks qui ont retenu mon attention :

- [Nuxt](https://nuxt.com/) avec [Nuxt-Content](https://content.nuxtjs.org/)
- [Gridsome](https://gridsome.org/) qui fait d'ailleurs tourner [le site de l'équipe Engineering de Malt](https://eventuallycoding.com/2022/05/19/malt-engineering-under-the-hood-gridsome)
- [Gatsby](https://www.gatsbyjs.com/) 
- [VuePress](https://vuepress.vuejs.org/) 

Et celui que j'ai choisi est donc Nuxt et son module Nuxt-Content. 

::tip
Avant d'aller plus loin, sachez que tout le contenu de ce blog [est disponible sur Github](https://github.com/hlassiege/eventuallycoding). Vous pouvez vous en inspirer si vous le souhaitez.
::


## Une grande liberté sur le frontend

Je me suis inspiré de nombreux sites de portfolio de dev web pour faire ce blog. 

Vous trouverez une page de [ressources](https://eventuallycoding.com/resources) que je trouve plutot utile comme référence, c'est comme un marque-page personnel.

J'ai souhaité revoir l'index des blogs pour en faire un "one pager" afin de faciliter la découverte des anciens articles et rendre plus pratique la recherche. 

Enfin sur chaque article, j'ai travaillé la lisibilité en reprenant une mise en page épurée, proche de celle que l'on peut trouver sur Medium. 

Pour tout ça, je me suis appuyé en grande partie sur [**Tailwind**](https://tailwindcss.com/) qui est désormais mon framework CSS favori, et de loin.
Ce n'est pas un framework orienté composant, mais il est assez simple d'en trouver construit dessus : 

* https://tailwindcomponents.com/
* https://tailwind-elements.com/
* https://tailwindui.com/

Mais même sans ces frameworks, il est très simple de l'utiliser, et de gérer le responsive, les animations CSS etc... 

::tip
Nuxt et Nuxt-Content c'est aussi une facilité en terme d'extension pour étendre le markdown et créer [ce genre de petit encart](https://github.com/hlassiege/eventuallycoding/blob/master/components/content/Disclaimer.vue).  
::

## Recettes de cuisine

Je vais montrer ici en vrac quelques éléments qui méritent un peu d'attention. 

### Le sitemap

Tout site qui veut faciliter le passage des bots d'indexation pour le SEO se doit d'en avoir un. 

[Le code pour le générer est ici](https://github.com/hlassiege/eventuallycoding/blob/master/server/routes/sitemap.xml.ts) 

### Le feed RSS

Très proche du code précédent, si on veut proposer un flux RSS, [voici un exemple simple](https://github.com/hlassiege/eventuallycoding/blob/master/server/routes/rss.xml.ts). 

### Le prérendu des liens youtube et twitter

Afin de proposer facilement un prérendu des liens, comme celui-ci par exemple 

https://twitter.com/hugolassiege/status/1591740114623172611

c'est du javascript côté client. [Le code démarre ici](https://github.com/hlassiege/eventuallycoding/blob/master/pages/%5Byear%5D/%5Bmonth%5D/%5B%5Bday%5D%5D/%5Bid%5D.vue#L214).

### Le système de commentaires

Cela ne vous a peut être pas échappé, mais ce blog utilise un système de commentaires. Sur un site statique, il faut avoir recours à un système externe (même ceux qui s'appuient sur des issues github). 
J'ai choisi [Hyvor](https://talk.hyvor.com/) pour cela. Ça me coute 5€/mois. C'est acceptable même si le volume de commentaire ici est vraiment très faible. (Mettez en un, histoire de rentabiliser le système...)


### L'analytique

C'est la perte la plus importante avec le départ de Wordpress qui possède un plugin imbattable sur le sujet : Jetpack.   
Même si ce blog n'a pas vocation à générer de l'argent, je souhaite suivre sa fréquentation. J'écris pour que ce soit lu un minimum, si un jour ça n'est plus utile à personne, j'arrêterais. Bref, c'est intéressant de savoir quels sont les articles les plus lus, ou de comprendre d'où vient le traffic. 

Donc, il me fallait un remplaçant mais hors de question de mettre un bandeau de cookies, c'est une plaie sur le web.  
J'ai donc choisi une solution sans cookies, sans tracking d'IP qui ne nécessite aucun consentement (puisque ca ne manipule pas de données personnelles) : [Digianalytics](https://digianalytics.fr)

C'est loin d'égaler le plugin Jetpack mais ça fait le taf on va dire. 
Dans cette migration, j'ai fait le choix d'accepter cette perte.

## Le déploiement

Ok, Nuxt permet de générer un site statique mais il faut quand même l'héberger. Les solutions ne manquent pas pour cela : Vercel, Netlify, Cloudflare pages, Github Pages.

J'ai eu pas mal de soucis avec Cloudflare pages et Github Pages sur la gestion des trailing slash

https://twitter.com/hugolassiege/status/1526274721079341062

Le choix s'est donc porté sur Netlify qui permet de configurer le comportement attendu.

Le build se passe malgré tout sur Github via les github actions. [Vous retrouvez la définition du job ici.](https://github.com/hlassiege/eventuallycoding/blob/master/.github/workflows/deploy.yml)

Ce build créé le site statique sur une branche **cloudflare** (ok, le nom est un peu bête puisque je déploie sur Netlify mais... yolo)

Enfin sur Netlify je lui demande de lire la branche cloudflare (sic...) pour ensuite déployer à chaque mise à jour.

## Le cout 

Le cout total pour faire tourner ce site est donc de 5€/mois car seul Hyvor est payant sur la liste ci-dessus. C'est à comparer aux 25€/mois de Wordpress.

Il faut rajouter à cela le nom de domaine qui doit couter environ 15€/ans.


Pour conclure ce billet, comme dit plus haut, n'hésitez pas à vous inspirer du code de ce site pour votre usage.  
Et pour conclure, un chat. Parce que, pourquoi pas

https://twitter.com/buitengebieden/status/1593514754504548353


