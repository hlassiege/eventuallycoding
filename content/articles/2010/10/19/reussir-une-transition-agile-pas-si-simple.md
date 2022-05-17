---
id: "168"
title: "Réussir une transition agile, pas si simple"
description: "Les méthodes agiles gagnent en popularité ces dernières années. Elles ont su séduire les entreprises par leur capacité à s'adapter à un marché mouvant..."
date: "2010-10-19"
categories: 
  - "waza"
tags: 
  - "agile"
img: ""
cover: "cover3.jpg"
---

Les méthodes agiles gagnent en popularité ces dernières années. Elles ont su séduire les entreprises par leur capacité à s'adapter à un marché mouvant, leur force reposant sur l'acceptation des changements. Elles ont aussi su séduire les équipes de développement qui y voient une valorisation de leurs compétences et une mise en avant des bonnes pratiques d'ingénierie.  
Cependant adopter ses méthodes est bien souvent un exercice périlleux. Une transition mal abordé peut entrainer un rejet pur et simple des valeurs agiles.

Je vous propose un petit tour d'horizon des différentes façons d'aborder les transitions agiles avec l'aide de retours d'expériences glané à droite à gauche et j'aborderais mes propres retours d'expérience au dernier chapitre.

## Rêgle numéro un, ne pas sous-estimer les impacts de la transition

La première chose dont il faut se rendre compte avant de commencer, c'est que les méthodes agiles entrainent bien souvent une mutation profonde de l'organisation. Le mot "_transition_" ici est important, on passe d'un état à l'autre et il est courant que cette phase soit sous-estimé.  
Pour Pyxis sous-estimer les impacts de cette transition fait d'ailleurs partie [des 8 façons de rater la mise en place des méthodes agiles](http://www.slideshare.net/pyxistech/8-faons-de-rater-votre-implantation-des-mthodes-agiles) :

Pyxis range ces raisons dans deux catégories, les impacts organisationnels :

- structure organisationnelle (organisation par pôles de compétences vs. organisation par projet, structure hiérarchique en rateau etc...)
- système de rémunération (remise en cause du mode de rémunération basé sur la performance individuelle)
- pilotage des projets (pilotage par le risque et la valeur business, cycle des projets plus courts)
- relation entre les clients et les fournisseurs (comment contractualiser une méthode itérative ?)
- configuration des locaux (l'entreprise est-elle adaptée à la colocalisastion ?)

et les impacts humains :

- nouveaux rôles, nouvelles tâches (redistribution des tâches, focus sur la qualité)
- pertes de pouvoir (équipe auto géré)
- compétences (remise en cause des équipes par pôle de compétences, partage des responsabilités)
- mentalité, façons de penser, valeurs attitudes
- motivations et engagements

## Evaluer le contexte

Avant de démarrer une transition, il est important d'évaluer le contexte actuel pour pouvoir choisir la bonne façon de faire.  
Claude Aubry propose [une méthode visuelle très simple](http://www.aubryconseil.com/post/Transition-%C3%A0-l-agilit%C3%A9-et-contexte-des-projets). L'idée étant d'évaluer le contexte selon certains critères :

- la taille du projet
- la criticité de l'application
- le modèle économique
- la stabilité de l'architecture
- la dispersion géographique de l'équipe
- l'age de l'application
- le mode de gouvernance
- le taux de changement
- la capacité de l'équipe en ingénierie de développement

et de les noter pour créer un kiviat de transition :

Certaines contraintes imposeront d'aborder la transition de façon différentes par la suite. Par exemple une équipe ayant une faible capacité en ingénierie de développement devra peut être d'abord se focaliser sur les pratiques d'ingénierie.

# Les différentes approches

Un petit point de vocabulaire tout d'abord. Lorsque la volonté de transition vient de la hiérarchie, on parle d'approche top-down.  
A l'inverse si l'initiative vient d'une ou plusieurs équipes, on parle d'approche bottom-up.  
Bien évidemment les approches pour aborder une transition agile dépendent dans un premier temps du contexte (bottom-up ou top-down).  
Par exemple une approche Big-bang sera plus facile à envisager si la démarche est initiée par la hiérarchie.

Pour aborder le virage aux méthodes agiles, on entend souvent parler des deux approches différentes :

- la méthode big bang
- l'introduction par un projet pilote

(Vu par exemple au Sigma Tour : http://www.sigmat.fr/public/SigmAgileTour/AgiliteEnSituation.pdf)

## L'approche Big Bang

L'approche Big Bang comme son nom l'indique consiste à faire évoluer radicalement l'organisation dans un laps de temps très court.  
Cette approche repose sur un un engagement fort de la hiérarchie. Elle part du principe qu'en allant plus vite on fait émerger plus rapidement les bénéfices et que l'on évite de prendre de mauvaises habitudes de transition.  
On évite de plus une cohabitation des processus trop longue.  
Par contre une approche de ce type peut être risqué car la conduite du changement est concentré sur un petit laps de temps. Cette approche est couteuse (utilisation de coach externe, formations, disfonctionnements du à la transition amplifié par le timing etc...). Le stress induit par le changement sur les individus peut aussi être rédhibitoire et provoquer un rejet.

Exemples d'entreprises ayant choisi cette approche :

- [salesforce](http://www.slideshare.net/sgreene/salesforcecom-agile-transformation-agile-2007-conference):  (évoqué par Claude Aubry [ici](http://www.aubryconseil.com/post/2007/08/27/281-transition-aux-methodes-agiles-a-grande-echelle))
- Nouvelles Frontières

Le principal argument en faveur de cette approche repose sur le fait qu'une transition longue a plus de chance de s'essoufler en route et d'entrainer de mauvaises adaptations. Voir à ce sujet l'article de Claude Aubry : [Transition rapide et radicale](http://www.aubryconseil.com/post/Transition-rapide-et-radicale)

## Projet pilote

La méthode du projet pilote consiste à choisir un projet pour l'expérimentation et d'appliquer la méthodologie sur ce projet pour l'adapter au contexte avant la diffusion au reste de l'entreprise.

La transition est moins risqué, les erreurs portent uniquement sur le projet en question. Les membres du premier projet seront par la suite des ambassadeurs de la méthode.  
Cependant, un projet pilote peut ne pas être représentatif (on pourra toujours argumenter qu'il s'agissait d'un projet facile s'il réussit).  
Une transition de ce type est plus longue et demande plus d'adaptations et de compromis sur le processus au risque de la dénaturer et de diffuser par la suite de mauvaises pratiques.

[L'article suivant](http://agilepartnership.com/blogit/2010/09/24/agile-coaching-baby-steps-or-bad-precedence/) met le doigt sur le principal défaut de cette méthode.

En utilisant un projet pilote au sein d'une organisation non agile, on accepte des compromis car la structure autour du projet est resté inchangé :

- équipe non colocalisé et non focalisé sur le projet
- pas de tests automatisés
- pas de backlog produit priorisé

etc...

Le principal risque étant que ces compromis restent par la suite et seront catalogués "méthode agile" même s'ils en contredisent l'esprit.

## Autres dimensions relatives à une transition agile

Au dela de ces deux approches, Mike Cohn va plus loin dans l'article suivant : "[Patterns of Agile Adoption](http://www.agilejournal.com/articles/columns/column-articles/734-)" :  
Il parle de trois dimensions qui se recoupent :

- approche par petit pas ou en big bang
- adoption des pratiques techniques ou méthodologiques en premier
- avancer caché ou à la lumière

On peut en effet se focaliser des pratiques d'ingénierie logicielle à travers des concepts XP (TDD, tests unitaires) par exemple ou bien se concentrer uniquement sur l'aspect méthodologie (équipes projets, collocalisation etc...).

Il est intéressant de noter la troisième dimension. Dans une entreprise dont la culture d'entreprise est frileuse à accueillir le changement, une approche plus discrète sera en effet plus simple. A l'inverse, dans une entreprise où la communication est importante, une approche trop discrète pourrait passer comme un manque d'engagement et de clarté.

## Accompagné ou pas ?

Dans tout les cas, un accompagnement externe est bien souvent nécessaire (formations externes, accompagnement sur place pour la mise en place des pratiques etc...).  
L'accompagnement que peut proposer une société externe peut prendre différentes formes :

- formation des membres des projets et des intervenants extérieurs à la méthodologie choisie
- aide à la mise en place de pratiques d'ingénierie (mise en place d'intégration continue, d'automatisation de tests etc...)
- aide à la mise en place des pratiques projets (formalismes des réunions par exemple)
- etc...

Dans un accompagnement externe cependant, il est important de bien cibler l'objectif attendu et de valider fréquemment la direction choisie (par des rétrospectives régulières par exemple).  
Un mauvais accompagnement ou un accompagnement mal ciblé peut entrainer un rejet de la méthode par les équipes.

# Retours d'expérience

Pour ma part, j'ai pu connaitre deux transitions dans des contextes très différents.  
Pour le rendre visuel, j'ai utilisé les kiviats présenté par Claude Aubry en rajoutant un critère très important, notamment sur la seconde transition : la résistance au changement.

Cet élément n'apparait pas dans les critères proposés par Claude. Sans doute parce que ce n'est pas très politiquement correct de présenter ce type d'informations à sa hiérarchie lorsque l'on fait son évaluation. Difficile d'indiquer dans son graphique que certains éléments vous ont fait penser aux irréductibles gaulois dans Astérix et Obélix. Cependant il est inévitable d'en tenir compte, même s'il faut l'enrober différement quand on le présente.

## Une approche bottom-up

La première transition s'est effectué chez un éditeur de logiciel. Ici j'ai été impliqué en tant que membre de l'équipe et le changement a été initié par un responsable d'équipe (bottom-up).  
Les projets impliqués dans la transition reposaient sur des nouvelles technologies. Il s'agissait de projet interne avec une forte criticité. Le nombre de personne impliqués était faible (10 personnes) avec un peu d'offshore. La gouvernance était complexe.

On peut le symboliser sur le kiviat suivant :

La bonne capacité de l'équipe, la qualité de l'architecture et la faible taille de l'équipe a permis de rapidement mettre en place des pratiques d'ingénierie forte :

- tests unitaires et d'intégration
- intégration continue de build complexe

De plus, les projets étaient menés par des équipes pluridisciplinaire avec une vision claire des objectifs.

Cependant plusieurs éléments négatifs sont venus géner la mécanique :

- absence d'implication du management
- objectifs mouvants et non partagé
- réduction des effectifs et développement de l'offshore
- rythme non soutenable

La transition s'est donc cantonné à l'équipe en elle-même ce qui a tout de même permis de conserver des bonnes pratiques de développement et a eu de très bons impacts sur la qualité.

## Une approche top-down

La seconde transition qui est toujours en cours a été initié par la hiérarchie. Cette fois-ci j'officie en tant que coach agile.  
Les projets sont assez critique et le nombre de personnes impliqués dans la transition est assez important (> 25 personnes). La méthode de gouvernance utilisé auparavant était très directive, laissant peu de place à l'autonomie. La capacité des équipes sur les pratiques d'ingénierie est relativement basse (pas de tests unitaires, manque de séparation des couches par endroits etc...). Le système est de plus assez complexe avec une partie de nouvelles technologies, du mainframe, de l'éditique, du datawarehouse etc...

L'approche retenue a consisté à utiliser des projets pilotes qui ont servi de modèle par la suite pour démarrer sur des projets plus critiques. Les pratiques d'ingénierie n'ont pas été poussés dans un premier temps.

Avec le recul, il aurait sans doute été préférable d'avancer par petits pas pour améliorer le process progressivement. Le trop grand décalage entre la cible et la situation actuelle implique trop de stress pour les équipes. Même si, pris un par un, l'ensemble des participants sont unanimes pour décrire tout les disfonctionnements de la situation actuelle, accepter tout les changements d'un coup est trop douloureux.

A mon humble avis, plus la transition est lente, plus le risque de faire des compromis augmente et plus l'amalgame risque de durer dans l'esprit des gens entre ces fausses bonnes pratiques et la cible. Dans ce cas là, autant adopter une approche discrète, centré sur l'amélioration progressive du processus actuel et ne parler de méthode agile qu'une fois que les équipes ont suffisament avancé pour l'accepter volontairement. C'est d'ailleurs ce que propose Mark Levinson [ici](http://www.infoq.com/news/2010/10/selling-scrum) .

Cette approche plus pragmatique permet aussi d'éviter d'opposer sans arrêt un côté très puriste de la méthode (qui effraie par son côté secte parfois, il faut bien l'avouer) aux opérationnels qui ne jurent que par l'expérience du terrain.

Cf. la démonstration de [cet article](http://analytical-mind.com/2010/09/28/a-dead-coach-is-a-useless-coach/), à jongler entre le refus du compromis et le trop de compromis on s'épuise vite ^^
