---
title: "Sortie d'un plugin Jira : jira-order-plugin"
date: "2009-12-14"
categories: 
  - "waza"
tags: 
  - "atlassian"
  - "java"
  - "jira"
  - "jquery"
img: "issueorder.jpg"
---

J'avais déjà parlé de Jira et des possibilités de personnalisation dans un précédent article. [Ici plus exactement](http://localhost/localweb/wordpress/?p=154 "Sortie d’un custom field Jira : jira-status-color").

Cette fois-ci c'est un nouveau plugin que je sors des cartons, [Jira order plugin](http://confluence.atlassian.com/display/JIRAEXT/Jira+order+plugin "Jira order plugin"), une fille d'attente pour gérer des fiches par ordre de priorité.

 

## Principe de fonctionnement

Pour résumer, le principe de ce plugin est assez simple, il permet de créer une file d'attente des fiches à traiter.

Mais pourquoi une file d'attente alors qu'on a déjà une priorité sur les fiches me direz-vous ? Ne vous est-il jamais arrivé d'avoir 200 fiches ouvertes dans votre projet avec 20 fiches à traiter d'urgence sans parler du reste ? Ok et dans ce cas là quelle est votre stratégie ? Traiter toutes les demandes urgentes d'un coup ? Les traiter dans un ordre aléatoire ?

Parfois on voit des managers qui vont de nouveau reprioriser leur fiches urgentes avec des priorités "urgentes ++" en créant donc un nouveau stade d'urgence. Bon super, et après, on créé un _"urgente +++"_, _"plus urgente tu meurs"_ etc... L'autre idée c'est de définir leur ordre de traitement de façon linéaire à travers une file d'attente.

Mais bon, pas envie de gérer sans arrêt les ajouts dans la file d'attente, dans ce cas le plugin va calculer automatiquement la position d'une nouvelle fiche entrée dans le système à partir de sa priorité et de sa date de création. Et voilà, vous avez les grandes lignes directrices de ce plugin :

- file d'attente des fiches à traiter
- calcul de la position initiale des fiches dans la file à partir de leur priorité et de la date de création
- recalcul de la position des fiches dans la file après un déplacement ou un changement d'état

Concrètement la visualisation de cette file d'attente utilise le navigateur de fiches :

![issueorder](/images/issueorder.jpg)

On remarquera sur l'image la colonne "Issue ordering" qui représente notre Custom field configuré pour apparaître dans le navigateur de fiches.

## Et sous le capot, ça marche comment ?

Plus complexe que le précédent plugin, cette fois-ci il s'agit :

- d'un custom field
- d'un listener qui écoute les changements d'états des fiches
- d'un service qui réordonne les fiches régulièrement
- d'une action webwork combiné avec [Jquery](http://jquery.com/ "Jquery") pour un réarrangement manuel de l'ordre des fiches

### Jquery

Parmi les éléments techniques intéressants ici je citerais notamment l'utilisation de [Jquery](http://jquery.com/ "JQuery") pour la partie Drag and drop qui permet de repositionner les fiches manuellement.

Dans le template Velocity j'utilise un bout de code [Jquery](http://jquery.com/ "JQuery") pour chaque valeur de champ

$('#rankHkn${index}').draggable({ axis: 'y', cursor: 'crosshair', opacity: 0.35, revert: true });
$('.droppable').droppable({drop: function ( event, ui) {displayMessageOrderField(ui.draggable.attr("id"),this); }});

Et voilà, en deux lignes à peine j'obtiens la possibilité de faire du Drag and Drop sans être vraiment expert JavaScript moi-même ^^

On notera que ${index} est interprété par Velocity lors de la création de la page, alors que $('.droppable') n'ayant pas été interprété par [Velocity](http://velocity.apache.org/ "Velocity"), il apparaît tel quel dans la page HTML et sera donc utilisé comme [sélecteur CSS](http://docs.jquery.com/Selectors "Sélecteurs CSS") par JQuery. L'utilisation du $ dans les templates Velocity pour deux choses distinctes peut amener bien des surprises si on n'y fait pas gaffe.

### Un petit brin d'ergonomie, évitez l'attente

Vous vous souvenez, plus haut j'ai écrit que les fiches étaient automatiquement placés dans la file d'attente lors de leur création en fonction de certains critères. Ok mais du coup ca implique un calcul. Rapide sur une petite instance, ce calcul peut facilement prendre du temps sur une instance Jira avec un grand nombre de fiches. Et ce temps on veut éviter de l'infliger à l'utilisateur qui voulait juste créer une fiche, lui.

Toute l'astuce a donc été ici d'utiliser un design pattern assez simple, le producteur consommateur :

- le producteur c'est l'utilisateur, à la création d'une fiche (ou sa modif) il empile l'action dans une file d'évènement
- le consommateur c'est un service Jira qui dépile cette file pour traiter les évènements

Du coup, pas d'attente pour l'utilisateur car l'ajout dans la pile est rapide. Le défaut c'est par contre d'avoir une actualisation de la position dans la file d'attente plus lente, après le passage du service uniquement.

Et côté implémentation en Java, rien de mieux que l'utilisation d'une [BlockingQueue](http://java.sun.com/javase/6/docs/api/java/util/concurrent/BlockingQueue.html "BlockingQueue") qui permet de gérer correctement la concurrence d'accès à l'ajout et la lecture dans la pile.

## Où trouver tout ça

Bon, si le plugin vous intéresse, vous pouvez le trouver sur le [plugins exchange](https://plugins.atlassian.com/manage/plugin/16314 "Jira order plugin") ou sur [sa page Confluence](http://confluence.atlassian.com/display/JIRAEXT/Jira+order+plugin "Jira order plugin").

Et si le code vous intéresse, celui-ci est accessible via svn [ici](https://svn.atlassian.com/svn/public/contrib/jira/jira-order-plugin/trunk "Code de jira order plugin").
