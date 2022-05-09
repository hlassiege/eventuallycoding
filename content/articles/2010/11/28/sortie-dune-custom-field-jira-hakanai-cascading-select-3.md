---
title: "Sortie d'une custom field JIRA : hakanai-cascading-select"
date: "2010-11-28"
categories: 
  - "waza"
tags: 
  - "jira"
img: "32624.png"
---

Récemment j'ai eu besoin d'utiliser une liste en cascade avec sélection multiple dans JIRA. Malheureusement, s'il existe bien un système de sélection en cascade, celui-ci ne permet pas la sélection multiple.

Du coup j'ai du créer un custom field en repartant du Custom field original.

Un petit exemple en image ?

Ci-dessous en mode édition la valeur "Développement" a été sélectionné dans la première liste. Plusieurs valeurs sont sélectionnées dans la seconde :

![32624](/images/32624.png)

En voilà ce que ça donne en mode visualisation (la valeur principale en gras, les valeurs secondes en enfilade derrière) :

![32626](/images/32626.png)

Envie de tester par vous-même ? C'est [ici.](https://plugins.atlassian.com/plugin/details/32615 "hakanai-cascading-select")
