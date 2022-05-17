---
id: "163"
title: "Calcul de la vélocité"
description: "Pour initier cette section, je souhaitais aborder la vélocité dont on entend souvent parler dans le vocabulaire Scrum.

Alors tout d'abord, quelques d..."
date: "2010-05-11"
categories: 
  - "waza"
tags: 
  - "agile"
  - "scrum"
img: ""
cover: "cover5.jpg"
---

Pour initier cette section, je souhaitais aborder la vélocité dont on entend souvent parler dans le vocabulaire Scrum.

Alors tout d'abord, quelques définitions :

## Vélocité

la vélocité c'est la capacité à produire, le nombre de points (ou de jours idéaux) que l'équipe peut réaliser en un sprint.

Source :

- [wikipedia](http://fr.wikipedia.org/wiki/Scrum#Calcul_de_v.C3.A9locit.C3.A9)
- [frenchsug](http://www.frenchsug.org/pages/viewpage.action?pageId=590060)

Attention, si la vélocité sert pour la planification, celle-ci [ne reflète pas la productivité](http://www.aubryconseil.com/post/2007/11/18/331-la-velocite-n-est-pas-une-mesure-de-productivite). En effet la vélocité peut être modifié artificiellement en gonflant les chiffrages initiaux.

## Coefficient de focalisation

Le coefficient de focalisation correspond au rapport vélocité / jours hommes idéaux.

L'objectif étant de mesurer la différence entre le jour homme idéal qui correspond à une journée passé à 100% sur le projet et la réalité.

Source :

- [Scrum et XP depuis les tranchées](http://www.infoq.com/resource/news/2007/06/scrum-xp-book/en/resources/ScrumAndXpFromTheTrenches_French.pdf)

## Bruit

Le bruit est simplement ce qui empêche le coefficient de focalisation d'être à 1. Une mesure du bruit est donc 1 - Coeff focalisation.

Attention à [ne pas confondre les variations dues aux congés, jour fériés etc... et le bruit](http://www.aubryconseil.com/post/La-capacit%C3%A9-corrig%C3%A9e-des-variations-saisonni%C3%A8res) ! Pour cela, ne pas compter les jours de congés dans vos jours ouvrés, c'est du bon sens.

# Mesures et calculs

## Vélocité

Pour la vélocité, le calcul est simple, il s'agit de la somme des estimations des tâches réalisés. Si vous utilisez un Burndown chart, cette info se trouve sur votre courbe de reste à faire.

Exemple sur le burndown chart suivant :

XXX

L'estimation originale est de 288 heures et le sprint s'est conclu avec un reste à faire de 49 heures.

La vélocité est de 239 heures, soit environ 30 jours de 8 heures.

## Coefficient de focalisation

Pour calculer le coefficient de focalisation, il faut utiliser la formule suivante :

vélocité en jours (Cf. chapitre précédent) / ( (Nb jours ouvrés \* Nb de personnes affectées au projet) - Nb de jours de congés pris)

Dans l'exemple précédent, avec une équipe de 5 personnes sur 14 jours ayant pris 10 jours de congés :

> 30 / (5 \* 14 -10) = 0.5

Le facteur de focalisation est de 50%

## Bruit

Le bruit se calcule à partir du facteur de focalisation :

1 - coeff focalisation

Dans l'exemple précédent :

1 - 0.5 = 0.5 => 50 %

## Commentaires divers

**Doit-on compter les jours du Scrum master ?**

Tout dépend de son rôles sur le projet. Selon les projets le scrum master [va agir dans l'équipe en plus de son rôle de Scrum Master](http://www.freddy-yimo.com/scrum-les-roles-de-scrum-master-et-product-owner/). Faisant partie de l'équipe, il agit bien sur la vélocité et doit être comptabilisé. D'ailleurs dans tout les cas il agit sur la vélocité en favorisant l'environnement de l'équipe.

Pour d'autres projets, il se peut que [le Scrum Master occupe ce rôle à temps plein](http://www.aubryconseil.com/post/2007/01/07/148-le-role-de-scrummaster) et n'ait pas de rôle dans l'équipe ou qu'il joue ce rôle sur plusieurs projets. Dans ce cas, il est possible de ne pas compter ses jours.

Pour faire simple, si le scrum master s'assigne des tâches sur le sprint backlog j'aurais tendance à le compter, sinon non. A vous d'adapter.

**Doit-on compter les jours du Product Owner ?**

Là encore, rien n'impose formellement que le Product Owner soit comptabilisé dans l'équipe ou non, il faut l'adapter au contexte. Il peut [participer à la vie de l'équipe à temps plein](http://www.aubryconseil.com/post/2008/02/18/378-implication-du-product-owner), notamment pour la définition des tests d'acceptation ou en support de l'analyste métier mais il peut aussi avoir une participation plus minimale uniquement aux réunions de début de sprint.

Même rêgle que pour le Scrum Master, est-ce que le Product Owner s'assigne des tâches dans le sprint Backlog ? Adaptez à votre contexte.

**Doit-on compter les jours des ressources VIP ?**

Il arrive effectivement sur les projets qu'une personne intervienne ponctuellement (administrateur de bases de données, urbaniste logiciel etc...). Si cette personne intervient sur 2 jours et n'a plus aucune action sur le sprint, alors non, il ne faut pas compter les jours de ce VIP sur l'ensemble du sprint.

Mais attention à ne pas confondre avec un membre de l'équipe à 50% pour des raisons projets !  (Voir question suivante)

**Doit-on compter les jours d'une personne affecté partiellement au projet ?**

La véritable question devrait être :

- cette personne est-elle affecté ponctuellement pour une tâche particulière ? (Cf. ressource VIP plus haut)
- cette personne est-elle affecté partiellement par contrainte extérieure (autre projet, support de production etc...) ?

Dans le second cas, alors oui il faut comptabiliser l'ensemble de ces jours.

Vous êtes peut-être Scrum Master ou Product Owner et vous vous dites _"cette personne est affecté à 50% sur mon projet et je ne souhaite pas faire baisser mon taux de focalisation en comptant les 50% perdus"_ mais rappelez-vous :

- la vélocité (qui influe sur ce coefficient) n'est pas un indicateur de productivité et peut être modifié artificiellement.
- le coefficient de focalisation est une vue objective de l'affectation des ressources au projet, si une ressource est disponible à 50%, votre focalisation baisse par rapport à ce qu'elle pourrait être dans l'idéal, vous vous devez de le montrer

Je le répète, ce coefficient est une donnée de votre projet et vous pouvez souhaitez l'améliorer mais ce n'est pas un indicateur de performance.

En agile, ce qu'on souhaite valoriser c'est le nombre de fonctionnalités livrés utiles pour le client et sa satisfaction par rapport à la qualité et au respect des délais.

**Doit-on prendre en compte dans les indicateurs le temps passé en démo, rétrospective et lancement de sprint ?**

J’aurais tendance à les ajouter pour les raisons suivantes :

- les démos font partie du temps passé, elles influent sur le coefficient de focalisation en négatif c’est vrai mais il faut le prendre en compte de toute façon.
- la rétro concoure à améliorer le process, elle consomme mais devrait rapporter dans le temps
- la réunion de lancement de sprint permet le découpage en tâches et la conceptualisation technique, du coup elle fait vraiment partie du sprint
- la démo est l’occasion d’enrichir le product backlog, ce qui est une tâche en soi

En fait si ca influe trop, c’est peut être qu’il faut agir dessus, par exemple une équipe qui ferait des sprints d’une semaine avec réunion de lancement de 4 heures, démo 4 h et rétro 2h, ca ferait beaucoup de bruit pour la durée. Autant le matérialiser quelque part.

A adapter là encore.
