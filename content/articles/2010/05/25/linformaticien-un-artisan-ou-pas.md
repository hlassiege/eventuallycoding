---
id: "164"
title: "L'informaticien, artisan des temps modernes ?"
description: "Je viens de lire à l'instant un [billet sur l'informatique et un parrallèle avec l'artisanat](http://blog.loof.fr/2009/11/travailler-plus-pour-des-pru..."
date: "2010-05-25"
categories: 
  - "waza"
tags: 
  - "agile"
  - "lean"
img: ""
cover: "cover3.jpg"
---

Je viens de lire à l'instant un [billet sur l'informatique et un parrallèle avec l'artisanat](http://blog.loof.fr/2009/11/travailler-plus-pour-des-prunes.html). C'est un sujet qui revient souvent. Mais peut-on comparer notre métier avec la pratique de l'artisanat ?

Personnellement je ne le pense pas, notre métier peut couvrir un large spectre, du technicien spécialisé à l'expert dans son domaine mais en aucun cas je ne le comparerai à de l'artisanat.

Allez, je vais tenter un petit billet sur le sujet.

En fait je compare l'évolution des pratiques de création logicielles à celle de l'automobile du début du siècle (le 20ème évidemment ^^). En prenant les grandes phases de l'industrie automobile on retrouve (très) schématiquement les suivantes :

- les premiers prototypes issues de l'esprit de précurseurs. On est alors dans une phase où la construction automobile est proche de l'artisanat au sens où le travail est manuel et sans aide automatisée et repose sur quelques individus.
- l'arrivée du taylorisme et fordisme qui font que "[les artisans d'une industrie de luxe réservée à des privilégiés deviennent progressivement des ouvriers spécialisés d'un produit banalisé pour le grand public.](http://fr.wikipedia.org/wiki/Histoire_de_l%27automobile#Taylorisme "Taylorisme sur wikipedia")"
- la mise en avant du toyotisme qui "[se base à nouveau sur les compétences et la qualification des ressources humaines](http://fr.wikipedia.org/wiki/Toyotisme "Toyotisme sur wikipedia")"

Le système actuel est encore un mix entre fordisme et toyotisme.

Pour les logiciels informatique on retrouve une évolution quasi similaire :

- l'ordinateur personnel voit l'arrivée d'OS créé par des amateurs (Steve Wozniak, Bill Gates, Paul Allen). De cette période c'est bien souvent des petits logiciels très simples et conçu par des amateurs toujours qui marqueront l'histoire (pong par exemple).
- transposition des méthodes industrielles et/ou venant du batiment dans l'informatique avec l'arrivée d'un vocabulaire nouveau : architecture, cycle en cascade (équivalent du fordisme), MOA/MOE pour la France.
- arrivée du développement lean (transposition du toyotisme dans l'informatique) et des méthodes agiles qui, comme pour le toyotisme, "se base à nouveau sur les compétences et la qualification des ressources humaines"

En suivant cette petite comparaison rapide, vous comprendrez que je n'adhère pas à cette vision de _"l'artisan informatique"_. Tout simplement parce que le processus de développement informatique s'inscrit depuis longtemps maintenant dans un contexte qui dépasse le simple fait de réaliser le logiciel : la vente, la production, la distribution, la maintenance sont désormais des phases à part entières et qui ne sont pas dans les mains des mêmes équipes (ou tout du moins très rarement).

## Le Fordisme dans l'informatique

Peut-on cependant comparer le [fordisme](http://fr.wikipedia.org/wiki/Fordisme "Fordisme") avec ce qui se fait actuellement dans le développement logiciel ? Oui dans les grandes lignes, on retrouve :

- la division du travail entre conception et réalisation ainsi que la parcellisation des tâches et la chaine de montage (conception, réalisation, tests, assemblage etc...)
- la standardisation (les standards informatiques, les protocoles de communication etc...)

De plus dans le fordisme on a deux choses :

- la parcellisation du travail qui entraine une spécialisation des individus et qui nécessite des profils moins élévé (et donc moins chers)
- l'évolution du pouvoir d'achat, car le fordisme insiste sur le fait de motiver par une meilleure paye les salariés afin de lutter contre le turnover

En informatique la parcellisation des tâches a entrainé une spécialisation par activité : le test, le développement dans un langage spécifique etc... Les profils peuvent être moins qualifiés. A l'extrême on peut même voir de l'offshore focalisé sur un type de tâche très spécifique : création de pages web, test sur outil spécifique etc... Quand au pouvoir d'achat, si les profils qualifiés sont désormais mis de côté parce que plus nécessaire, les profils moins qualifiés sont eux par contre payés au dessus des standards. Le parallèle est simple avec l'offshore où on cherche des profils moins qualifiés à l'étranger que l'on paiera correctement selon les standards locaux. (1)

Alors oui, on pourra argumenter que les chaines de montage informatique sont bien moins caricaturale que celles aperçu dans "Les temps modernes" de Chaplin. Effectivement, mais il ne faut pas minimiser l'industrialisation croissante des méthodes de production (MDA, ORM etc...), l'amélioration constante des outils et la spécialisation toujours plus extrême demandé à ceux qui réalisent.

Cette approche "rationnelle" de la chaine de production logicielle est cependant mise en défaut :

- il est très difficile de décorreller la conception et la réalisation (2)
- la division du travail dans sa forme cascade ne permet pas d'avoir une vue d'ensemble sur le processus

C'est d'ailleurs [l'analyse du faible taux de succès de cette approche](http://www.projectsmart.co.uk/docs/chaos-report.pdf) qui a mené vers les méthodes agiles.

## Le toyotisme en informatique

Le parallèle est bien plus simple puisque le développement Lean est la transposition pure et simple du toyotisme dans la gestion de logicielle. Et l'agile partage plusieurs valeurs en communs avec le Lean.

On retrouve parmi les principes qui motivent ces deux mouvements :

- en Lean : [le cercle de qualité](http://fr.wikipedia.org/wiki/Cercle_de_qualit%C3%A9 "Le cercle de qualité")
- _"Bâtissez le projet autour de personnes motivées"_ et _"Une attention continue à l'excellence technique et à la qualité de la conception"_ (Cf. [http://fr.wikipedia.org/wiki/M%C3%A9thode\_agile#Principes](http://fr.wikipedia.org/wiki/M%C3%A9thode_agile#Principes))

Ces principes sous-tendent donc que l'on se base à nouveau sur les compétences individuelles et on met en avant le principe d'[autonomisation](http://fr.wiktionary.org/wiki/autonomisation "autonomisation "). On redonne les moyens aux équipes d'être autonomes.

 

## Mais ce n'est toujours pas de l'artisanat !

Cependant, même dans un projet en mode Lean/agile je ne partage pas l'avis d'un développement artisanal pour les raisons suivantes

### 1) Artisanal présuppose un travail manuel sans aide automatisée

Artisanal dans l'esprit de certain c'est l'excuse pour ne pas utiliser d'outils pour les tests, la qualimétrie, voire pour ne pas faire tests du tout. En fait pour ces personnes l'utilisation même du mot "usine logicielle" les choque. On est un artisan talentueux et on travaille sans filet ici monsieur !

_La réflexion type :_

> _"ça fait x années que je compile moi-même mes packages et que je fais mes zips à la main pour livrer, je ne vois pas le souci."_

### 2) Artisanal présuppose un travail personnel sur lequel on gardera la paternité ad vitam eternam

Pour d'autres encore, la vision artisanale c'est une vision proche du compagnonnage. C'est le maitre d'art qui cajole son bébé pendant des années avec éventuellement des compagnons pour l'aider mais c'est le maitre qui régule tout. Sa méthode est originale, unique et sera reconnu comme tel plus tard par la postérité (3).

Ce comportement conduit à deux choses :

- l'enfermement vis à vis des solutions prônées par d'autres et le fait de privilégier uniquement le travail de son propre atelier. Exit donc les patrons de conception, l'open source etc...

_La réflexion type :_

> _"écoutes, les design patterns, le découplage des couches etc... c'est surement bien beau dans les livres mais tu sais ici on a besoin de perf et on sait ce qu'on fait de toute façon."_

- des solutions non maintenables par les autres. On accumule la dette technique et on oublie deux points fondamentaux "80% du temps de vie d'une application est passé en maintenance" et "Rarement une application est maintenue toute sa vie par son auteur"

_La réflexion type :_

> _"Oui mon fichier fait 10000 lignes mais il super génial, ça fait 4 ans que je suis dessus, je sais exactement ce qui est fait où et quand. Bon c'est un peu complexe mais c'est super perf !"_

Bon et puis tout simplement, l'art présuppose une création qui s'adresse aux sens, aux émotions et à l'intellect. Faire un mapping objet relationnel n'éveille pas d'émotions en moi, même s'il est bien fait ^^ En fait, je n'imagine pas encore dans un musée voir le listing d'un programme Cobol, C ou Java ;) (4)

 

* * *

(1) Encore que la logique actuelle tend à déléguer la gestion des ressources humaines localement et donc à tirer sur les prix ce qui créé un turnover important... (2) On y a longtemps cru avec MDA http://fr.wikipedia.org/wiki/Model\_driven\_architecture mais au final, la formalisation UML n'a pas tant percé que cela. (3) Évidemment je caricature, dans l'artisanat aussi on respecte un [état de l'art](http://fr.wikipedia.org/wiki/%C3%89tat_de_l%27art "Etat de l'art") (4) Par contre j'avoue que certaines créations d'interface utilisateurs peuvent éventuellement se ranger dans cette catégorie. Il y a quelques ergonomes/designers que je pourrais éventuellement ranger dans la catégorie artistes.
