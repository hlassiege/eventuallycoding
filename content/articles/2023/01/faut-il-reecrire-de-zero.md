---
id: "9"
title: "Et s'il était temps de tout réécrire ?"
description: "Une réécriture, c'est souvent l'aboutissement d'une dette technique trop lourde à rembourser, un aveu d'échec par rapport à une application qu'on ne parvient plus à faire évoluer, le cout et les risques étant trop importants. Mais si les évènements qui amènent à tout réécrire sont déjà en soit un problème, la réécriture elle-même est un piège qui peut tuer un produit."
date: "2022-12-20"
tags:
  - "rewrite"
  - "refactoring"
  - "malt"
cover: "itsatrap.jpg"
---

Ce titre sonne comme un message d'avertissement n'est-ce pas ? Je suis plutôt très frileux quand il s'agit de tout réécrire en partant de zéro et je rejoins l'avis de Joel Spolsky qui en parlait comme [l'une des plus grosses erreurs à faire](https://www.joelonsoftware.com/2000/04/06/things-you-should-never-do-part-i/).

Une réécriture, c'est souvent l'aboutissement d'une dette technique trop lourde à rembourser, un aveu d'échec par rapport à une application qu'on ne parvient plus à faire évoluer, le coût et les risques étant trop importants. Mais si les évènements qui amènent à tout réécrire sont déjà en soit un problème, la réécriture elle-même est un piège qui peut tuer un produit.  
Les exemples sont légions. De nombreuse entreprise ont perdu des années à réécrire un produit puis mis la clé sous la porte quand le marché ne les a pas attendus.

Mais pourquoi je vous parle de tout ça ? Est-ce que Malt est dans une situation aussi catastrophique qu'il est nécessaire de tout refaire ?
Eh bien, c'est ce que je vous propose de voir dans ce billet. On va parler de l'évolution de la stack technique de Malt depuis 2012, de gestion de la dette et de comment nous envisageons de rembourser notre dette de façon itérative par composants.


## Un petit peu d'histoire

La première version de Malt date de 2012. C'était à ce moment-là une application monolithique Java/Spring boot, qui tournait sur un PAAS (Heroku) avec une base de données mongo et un moteur de recherche Elasticsearch.
Le frontend était majoritairement en vanilla JS avec quelques touches de AngularJS.
On utilisait des JSP comme moteur de templating, choix plutôt bon à ce moment précis. 


::image
![Stack 2012](/images/stack-2012.jpg)
::



En 2014 l'application s'est étoffé. J'ai pu passer à temps plein suite à une levée de fonds. Nous sommes 2 cofondateurs sur 3 à avoir une casquette technique et travailler sur le site.
Entre temps on a introduit Redis pour la gestion des sessions et du cache et RabbitMQ pour introduire du découplage entre certaines parties fonctionnelles via un pattern observer.

On se marche un tout petit peu dessus de temps en temps et on conclut que ce serait intéressant de pouvoir sortir des parties du site indépendamment. Cela permettait par exemple de sortir le moteur de recherche tandis qu'on continuerait à avoir le moteur de paiement en brouillon.
En plus de cela, le cout du service Heroku et de ces addons (mongo et Redis), la robustesse de certains services en SAAS (Elastic notamment) font que l'alternative SAAS/PAAS commence à être moins pertinente.

On décide donc de séparer l'application en plusieurs petites applications, de rajouter un reverse proxy Nginx devant et de tout faire tourner sur des serveurs dédiés OVH.

Même rétrospectivement, il est difficile de juger l'ensemble de ces décisions.
La séparation en plusieurs applications était discutable à ce stade. D'autant que nous utilisions déjà une stratégie de feature flipping pour désactiver des parties de code.
Mais la migration sur OVH, notamment pour des raisons de coût des addons était plutôt pragmatique et nous a apporté beaucoup de souplesse pour la suite.

Si cette partie vous intéresse, [un billet de blog sur la migration vers OVH avait été écrit à l'époque](https://eventuallycoding.com/2014/05/09/paas-or-not-paas-that-is-the-question/).

Pour l'anecdote, l'ensemble de l'application et des bases de données tournait sur une seule machine !

::image
![Stack 2014](/images/stack-2014.jpg)
::

Entre 2014 et 2018, l'équipe Produit s'est étoffée jusqu'à 30 personnes. L'architecture s'est complexifiée pour répondre à des besoins plus forts en termes de résilience, sécurité, scalabilité.
Nous sommes notamment passés en partie sur OVH Cloud. Ça a été l'occasion d'introduire Terraform. Consul a été introduit pour la découvrabilité des services.
Vault a été ajouté pour la gestion des clés privée. Postgresql a été introduit en 2019 suite à de nombreuses déconvenues avec Mongo. 

Côté frontend on a introduit Vue.js et supprimé AngularJs (EDIT : en fait, apparemment pas partout). Nos modules en Vanilla JS se sont structurés pour donner lieu à un petit framework maison assez léger. Handlebars nous a permis de partager des templates de pages entre client et serveurs et donc résoudre quelques soucis de SEO.

::image
![Stack 2019](/images/stack-2018.jpg)
::


Suite à 2018, nous avons rencontré de nombreuses limitations sur le cloud OVH. A l'époque leur implémentation de l'api OpenStack n'était pas stable et nous rencontrions de nombreuses erreurs 500. Le manque de services inclus nous imposait de reconstruire des solutions, sans que ce soit notre cœur de métier (la gestion des clés privée, la gestion des logs, la réplication mongo vers PG ou la création d'un datawarehouse par exemple).
Nous avons donc décidé d'aller sur GCP en 2019 pour bénéficier de services plus packagés. Plus exactement nous tournons désormais sur GKE (Kubernetes managé). Traefik a définitivement remplacé Nginx en tant que reverse proxy grâce à son intégration native avec Docker/Kube.


::image
![Stack 2019](/images/stack-2019.jpg)
::


## Qu'est ce que la dette technique ?

Mis bout à bout, chaque décision décrite précédemment s'explique. Elles ont toutes permis de construire la plateforme Malt que l'on connaît aujourd'hui et je les valide donc à posteriori. Refaire l'histoire ne préjuge pas que nous serions arrivés au même résultat.  
Mais si ces décisions sont bonnes, pourquoi parler de dette technique ?

Eh bien parce que la dette, ce n'est pas uniquement lié au code de mauvaise qualité.

Déjà posons une définition simple, la dette technique, c'est la somme des choix visant à gagner du temps mais qui vont induire des couts futurs à rembourser.
Pour simplifier, la dette permet d'acheter du temps qu'il faudra rembourser par la suite.

J'aime beaucoup l'analogie avec la dette financière car :

- la dette n'est pas toujours négative, elle peut servir à aller vite à un instant T, c'est de l'investissement. Dans le cas idéal, on peut le rembourser quand on a obtenu les moyens pour le faire.
- une dette se rembourse avec des intérêts, ces intérêts se cumulent dans le temps, c'est le principe des intérêts composés
- lorsqu'on ne peut plus rembourser, on fait défaut sur une dette. Ce défaut se traduit par une réécriture complète de l'application avec le cout associé. Dans le pire des cas, c'est la fin du produit et de l'entreprise.
- la dette technique est soumise à l'inflation et la déflation. Des évènements extérieurs peuvent la faire exploser (ou annuler). Elle n'est donc pas totalement prédictible

Concernant le dernier point, la dette peut évoluer pour des raisons externes or c'est justement un point important pour répondre à la question initiale.
Les choix effectués sur Malt ont tous été fait en fonction d'un contexte donné.

Mais :
- les contraintes ayant mené à certains choix ont évolué. Par exemple des technologies inexistantes en 2012 sont désormais standard (la gestion du SSR par exemple)
- la taille de l'équipe entraine des contraintes supplémentaires sur les standards de développement
- la taille de l'entreprise et de la base utilisateur entraine des contraintes supplémentaires sur les technologies à mettre en œuvre (Exemple, un batch qui prend 10minutes sur une faible volumétrie et qui prend 2h aujourd'hui)

etc...

Bref, certains choix qui ne sont pas vus initialement comme de la dette peuvent en devenir par la suite.

Attention, je ne suis pas en train de dire qu'il faut anticiper les contraintes futures. Pour beaucoup d'entre elles je préconise d'attendre jusqu'au dernier moment car leur résolution induit souvent une complexité supplémentaire qui a aussi un cout et qui grève la vélocité d'équipe.


## Constat sur Malt

Sur Malt nous avons toujours eu un principe fort d'autonomie.
Chaque personne est encouragée à avoir un regard critique, pour proposer et améliorer la stack technologique. Ces choix sont discutés, adoptés ou rejetés collégialement.

Cette approche participative nous a été très utile. Les choix ont toujours été très efficaces, innovants tout en restant pragmatiques.  

Par exemple nous avons :
- [introduit PGSQL pour remplacer progressivement Mongo](https://eventuallycoding.com/2019/07/03/mongodb-vers-postgresql)
- basculé progressivement de Java à Kotlin
- basculé progressivement de Javascript à Typescript

Mais, dans notre approche, nous avons aussi souvent décidé de faire ces ajouts de façon progressive sur le nouveau code, sans effectuer de migration complète de l'ancien code.
C'était un choix logique à ce moment-là, mais qui a creusé notre dette technique.

Ce choix a une conséquence forte : l'explosion des dépendances.  
Et ces dépendances ont des impacts importants
- sur la charge cognitive de chaque développeur qui tombe régulièrement sur des façons différentes de travailler
- sur les temps de démarrage des applications qui chargent de nombreuses dépendances
- sur les stations de travail qui sont doivent faire tourner une stack de plus en plus complexe
- sur intellij qui galère de façon significative. Pas uniquement parce que la base de code est importante, mais aussi parce qu'il a de nombreuses librairies et langages à analyser. Et chaque plugin coute ![^1]


Nous avons de nombreuses métriques que l'on regarde constamment, sur nos temps de builds, taux de disponibilité et j'en passe. Mais pour certaines, l'évolution s'est faite progressivement dans le temps, ce qui n'attire pas l'attention.  
Par exemple
- le temps de démarrage d'une appli est désormais supérieur à 50secondes sur certains postes de travail
- les stations de dev nécessitent une configuration très lourde pour faire tourner l'ensemble de la stack (imaginez docker avec des containers ES, Redis, Mongo, PgSQL, Traefik etc...).
- les indexations intellij qui peuvent durer des heures avec une empreinte mémoire > 8Go dans les dernières versions

Et tout cela entraîne une augmentation importante des temps de cycle de développement.

Malgré tout, jusqu'ici tout va encore bien.

::image
![This is fine](/images/thisisfine.jpg)
::


Mais nous savons par expérience que nous sommes arrivés au moment où, si nous ne prenons pas d'actions fortes, dans un an nous devrons faire un défaut partiel de notre dette, qui se traduirait par un freeze code de plusieurs mois pour rembourser.

Et ça, c'est ce qu'il faut éviter à tout prix.


## KISS

En 2022, parmi nos 5 OKR d'entreprise, nous avions un OKR un peu particulier : KISS, Keep it simple stupid.

Cet enjeu de simplification rejoint totalement le sujet développé dans le chapitre précédent. Il faut simplifier pour diminuer la **charge cognitive par développeur** et **la charge induite sur nos outils**.

Pour faire le lien avec l'introduction de ce billet, nous n'allons pas réécrire tout Malt de zéro bien évidemment. Mais nous allons travailler à simplifier Malt à travers plusieurs projets.

Et c'est l'un de ces projets dont je souhaite parler prochainement, la modernisation complète de notre stack frontend, comment passer de 6 technos frontend à uniquement une seule, et comment se débarrasser totalement de Java côté frontend (les fameuses JSP).   
De façon un peu poétique, ce projet s'intitule Singapore car c'est l'histoire d'un voyage en dehors de l'île de Java.

Restez à l'écoute, ce sera le sujet du prochain billet.



[^1]: Un exemple simple pour comprendre. Nous avons aujourd'hui 3 façons différentes d'interagir avec PgSQL en Java : mybatis, Jooq, Spring Template. La grande majorité utilise Jooq mais Intellij doit mobiliser 3 plugins pour analyser, proposer de l'auto complétion etc... (Même si le plugin Spring est de toute façon actif par défaut)
