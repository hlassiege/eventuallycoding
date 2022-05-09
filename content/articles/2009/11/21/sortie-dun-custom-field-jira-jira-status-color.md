---
title: "Sortie d'un custom field Jira : jira-status-color"
date: "2009-11-21"
categories: 
  - "waza"
tags: 
  - "atlassian"
  - "jira"
img: "issuenavig.png"
---

## Mais c'est quoi Jira ?

Pour ceux qui ne connaissent pas encore [Jira](http://www.atlassian.com/software/jira/ "Jira"), il s'agit d'un excellent BugTracker édité par la société Atlassian. Très bon en entreprise via ses différents plugins, sa gestion du temps, son plugin Scrum (Greenhopper) il est aussi accessible pour des structures plus petites avec une license à 10$. En fait si vous faites du Java, vous l'avez surement déjà vu puisqu'il s'agit du BugTracker utilisé par une grande partie des projets open sources.

Bref, je vais éviter de m'étendre dessus après on va croire que je touche des dividendes ^^ Revenons à l'aspect technique donc. Jira fait partie de ces logiciels qui proposent d'écrire ses propres extensions et c'est d'ailleurs une de ces grandes forces quand on voit la quantité de plugins disponibles sur leur [site](http://confluence.atlassian.com/display/JIRAEXT/JIRA+Plugins "Jira plugins"). Ayant quelques plugins dans les cartons qui devraient sortir d'ici peu, je me permets d'en faire une petite pub ici.

## Et c'est quoi un custom field ?

Un custom field c'est un champ personnalisé (non sans blague) qui peut être rempli automatiquement ou par l'utilisateur et qui peut aussi apporter du comportement, dans notre exemple une coloration. Les champs personnalisés peuvent aller du plus basique : liste de choix, bouton radio etc... jusqu'au plus complexe : champs qui stocke le temps moyen passé sur une fiche dans ses différents status par exemple.

## Jira Status color

kesako ?

Tout le but de ce custom field c'est d'ajouter un indice visuel permettant d'identifier rapidement le statut de la fiche. La demande est venu d'anciens collègues qui avaient bossé sur un autre bugtracker qui différenciait les status des fiches par couleur. Et c'est vrai qu'au final c'est intéressant d'avoir en un coup d'oeil ce type d'indications.

(Evidemment on ne parlera pas ici d'[accessibilité](http://fr.wikipedia.org/wiki/Accessibilit%C3%A9_du_Web "accessibilité du web") puisqu'un daltonien n'aura aucun intérêt à l'utiliser)

On pourrait dire "rien de transcendant finalement ton truc", mais comme on dit , "c'est inutile donc indispensable".

Un exemple dans le navigateur de fiche :

![issuenavig](/images/issuenavig.png)

Et sur la fiche elle-même :

![view](/images/view.png)

Si ça vous intéresse, vous pourrez le trouver dans le centre d'échange des plugins : [Plugins exchange](https://plugins.atlassian.com/plugin/details/15237?versionId=15238 "Plugins exchange")

Ou bien sur sa page de wiki directement [pour en savoir plus sur son installation, ses bugs connus etc...](http://confluence.atlassian.com/display/JIRAEXT/Jira+status+color "Jira status color")
