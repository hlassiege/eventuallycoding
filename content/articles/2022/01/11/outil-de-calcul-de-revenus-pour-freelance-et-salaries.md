---
id: "1897"
title: "Outil de calcul de revenus pour freelance et salariés"
description: "**TLDR;**

Je vous mets à disposition une calculette permettant de déterminer vos revenus nets après IR en fonction de si vous êtes en SASU ou EURL. J..."
date: "2022-01-11"
categories: 
  - "waza"
tags:
  - "freelance"
  - "salaires"
img: ""
cover: "cover6.jpg"
---

**TLDR;**

Je vous mets à disposition une calculette permettant de déterminer vos revenus nets après IR en fonction de si vous êtes en SASU ou EURL. Je prévois de rajouter l'EI. J'ai également inclus un onglet salariat pour comparer les taux d'impositions.

Vous pouvez trouver tout cela ici :

[https://hlassiege.github.io/inmypocket/](https://hlassiege.github.io/inmypocket/)

Voilà, vous avez l'essentiel.

Cependant :

- si vous avez envie de contribuer pour améliorer ou corriger
- si vous trouvez intéressant de comprendre ma démarche
- si vous vous demandez la différence avec le simulateur de l'URSSAF

Je vous invite à lire la suite :)

## L'origine de cette calculette

Ce billet est une mise à jour d'un ancien billet paru en 2014 sur le même thème :

[Calculer ses revenus entre EURL, SASU et salariat](https://eventuallycoding.com/2014/01/24/calculer-ses-revenus-entre-eurl-sasu-et-salariat/)

Il s'est passé 8 ans depuis ce billet (paru également en janvier). J'y distribuais un fichier Google Sheets permettant de déterminer ses revenus nets en fonction du type de société choisi et de certaines options.

Quelques règles ont changé, par exemple la Flat Tax en 2018, et les valeurs prises ont évolué (les taux de cotisations sociales, les tranches d'impot sur le revenu etc...).

Cependant cela reste un de mes billets les plus lus, j'ai de nombreuses consultations tous les mois dessus et j'étais un peu frustré de laisser ce fichier sans mise à jour et avec quelques erreurs (relevés dans les commentaires).

Et puis sur Twitter, le coup de grâce

https://twitter.com/ChabertSylvain/status/1479749553339486213

Il n'était plus possible de laisser ce billet en l'état ! :)

## Le coin de la technique

Malgré tout :

- je reste dev, ce blog s'appelle "eventually coding", je pouvais pas garder un fichier Sheets
- en 8 ans, personne n'a pu contribuer au fichier Sheets parce que le format n'aide pas trop pour ça

J'ai donc décidé d'en faire une appli Javascript.  
Alors certes, je suis plutôt dev backend et loin d'être spécialiste Javascript mais je trouvais que sortir une application Java ou Kotlin pour ça, c'était un peu ridicule.  
J'ai choisi d'utiliser **Vue.js** 3 avec **Bootstrap**.  
Je souhaitais minimiser le nombre de dépendances en dehors de ça. Le code reste très simple, peu de dépendances, pas de typescript. D'ailleurs je n'ai même pas inclus bootstrap-vue qui est incompatible avec vue3 pour l'instant.

J'ai souhaité rester totalement indépendant de la RGPD donc il n'y a aucun cookie tiers. Même si j'aurais aimé inclure un compteur de visite basique ne nécessitant pas de consentement, je n'ai pas trouvé de solutions simples et gratuites pour ça.  
Si vous notez le temps entre les deux tweets qui m'ont fait réagir, l'application a été faite et déployé sur **github-pages** en 1 journée (ok je suis sorti de Google Sheets pour aller chez Microsoft Github...). Le plus long étant de rétro ingénieré le fichier Excel ainsi que de trouver les chiffres à jour sur les règles fiscales.  
Par contre oui, c'est pas très joli, l'ergonomie est discutable et le code est sans doute améliorable mais pour l'ambition qu'il a, cela me satisfait pour l'instant.

Je prévois quelques modifications dans le futur en fonction du temps et de la motivation pour par exemple aider à optimiser automatiquement la répartition en dividendes pour les SASU, ou aider à fixer son TJM en fonction d'un objectif de revenus.

## Comment contribuer

Comme dit plus haut, le code est [sous Github](https://github.com/hlassiege/inmypocket).

Les chiffres utilisés pour les taux d'impositions, les tranches etc... sont regroupés dans [le fichier main.js](https://github.com/hlassiege/inmypocket/blob/master/src/main.js). Tout est sourcé avec la date.

Les détails de calculs par status sont indiqués [dans les composants associés à chaque status](https://github.com/hlassiege/inmypocket/tree/master/src/components).

Le Readme indique comment lancer l'application en local.

## Quelle est la différence avec le simulateur de l'URSSAF ?

Je vous cache pas, au début une des réponses sur Twitter était :

https://twitter.com/florentpellet/status/1480248355380936708

Et honte à moi, je connaissais pas. Et j'ai été jouer avec, franchement c'est bien foutu. On peut faire des simulations de revenus nets en fonction des statuts choisis.

Je me suis demandé si mon application était utile dans ces conditions.  
Cependant j'ai également noté que le simulateur prenait le sujet à partir de la rémunération reçue par le dirigeant.

- Cela ne permet pas de jouer avec la répartition en dividendes.
- Cela ne permet pas de faire le lien avec le CA de l'entreprise ou de calculer son IS.

Je pense que ça cherche à répondre au sujet d'une autre façon qui est complémentaire et je trouve vraiment que le travail fait dessus est bien (et venant de l'URSSAF c'est vraiment rare pour le souligner).  
Mais j'ai la sensation que InMyPocket (le nom que j'ai choisi pour la calculette) permet de donner une autre vision du sujet.

a+
