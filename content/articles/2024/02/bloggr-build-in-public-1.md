---
id: "37"
title: "Comment j'ai atteint 100 vues par jour en une semaine - Build in public #1"
description: "Comment j'ai atteint 100 vues par jour en une semaine au lancement de Bloggr"
tags: []
date: "2024-02-28"
cover: "/bloggr-build-in-public-1/thumbnail.jpg"

language: "fr"
alternates:
    - en: "/en/2024/02/bloggr-build-in-public-1"

---


Hey, il y a tout juste 9 jours, j'ai publié [Bloggr](https://github.com/hlassiege/bloggr) en open source. Et j'ai envie de vous parler de ça.

https://twitter.com/hugolassiege/status/1759634242890240311

J'ai déjà parlé de [son lancement sur ce blog](https://eventuallycoding.com/2024/02/launch-bloggr), et je vous disais à quel point avoir un blog statique avait plein d'avantages.

Par définition c'est :

* **sécurisé** parce que je vois pas comment on peut attaquer des fichiers statiques...
* **rapide** parce que les pages ne nécessitent aucun processing, pas d'appel à une base de données rien du tout
* **simple** Il n'y a aucune interface wordpress compliqué à maitriser. Il suffit d'un éditeur, on créé un fichier markdown, on écrit, c'est terminé
* **bon marché** car il peut être hébergé chez un hébergeur statique donc il y a des tas de solutions à 0 euros.

Je pourrais en rajouter une couche sur **l'impact carbone**, c'est sur que, sans serveurs, sans base de données, sans compute à chaque requête, la consommation électrique globale est très faible.


En 9 jours, le traffic sur Bloggr a dépassé le traffic de mon propre blog en page views.

::nuxt-image{src="/images/bloggr-build-in-public-1/pirsch-details.jpg" alt="Performance for Bloggr in the last 15 days"}
::

On parle de 100 vues par jour, ça reste modeste, mais faire 100 vues par jour en 9 jours est tout de même très honorable.

Et comment s'est construit ce traffic pour l'instant me direz-vous ?

Il vient de plusieurs sources :

- le tweet initial, pour 1% (?) du traffic des premiers jours

Un tweet c'est cool mais à moins d'avoir des dizaines de miliers de followers hyper engagé, ça a très peu d'impact.

- le listing sur https://nuxt.com/templates. Je soupconne que ce soit plus de 90% de traffic.
- le listing sur https://www.builtatlightspeed.com/. Ca semble être une source très récente et ce n'est pas moi qui l'ai inscrit ici. Mais manifestement Bloggr y est listé désormais.

Il existe beaucoup de listing sur internet qui ont plus ou moins de traffic et qui permette de mettre en avant des produits open sources ou commerciaux.
Quand on lance un produit, c'est important de savoir les trouver pour se faire référencer dessus.

Prochain billet, je vous parlerai sans doute du système de templating que je suis en train de mettre en place avec notamment "epoxia" qui sera le premier template proposé en plus de celui par défaut.
