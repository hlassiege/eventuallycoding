---
id: "138"
title: "Intégration GWT-maven-spring-hibernate-spring security-smartGWT"
description: "Ca y est, l'article que j'avais démarré sur GWT et son intégration avec Spring, maven, SmartGwt et Hibernate est enfin sorti dans sa version finale. I..."
date: "2009-12-02"
categories: 
  - "waza"
tags: 
  - "gwt"
  - "hibernate"
  - "java"
  - "maven"
  - "spring"
img: ""
cover: "cover7.jpg"
---

Ca y est, l'article que j'avais démarré sur GWT et son intégration avec Spring, maven, SmartGwt et Hibernate est enfin sorti dans sa version finale. Il s'en est fallu du temps mais désormais vous pouvez le lire dans son intégralité sur [developpez.com](http://www.developpez.com/ "developpez.com"), [sur cette page plus exactement.](http://hugo.developpez.com/tutoriels/java/gwt/utilisation-gwt-avec-spring-et-hibernate/ "Utilisation de GWT avec spring et hibernate")

Pour le résumer en quelques lignes, si vous vous êtes retrouvé dans ma situation et que vous avez tenté une première approche rapide de GWT, vous avez sans doute eu du mal à démarrer une vraie application. Attention je ne parle pas d'une application "à la Hello World !", je parle d'une application un peu plus complète, avec un build automatisé, avec une gestion de la sécurité, une couche de persistence etc...

Ayant été dans ce cas de figure, j'ai décidé de m'atteler à un article un peu plus complet qui regrouperait justement toutes les petites briques qui m'a manqué.

Donc en gros ça parle de quoi :

- de Spring, pour avoir une bonne glue
- de Hibernate, pour la couche persistance
- de SmartGWT, pour avoir une interface qui fouette un peu
- de Maven, pour être capable de lier tout ça ensemble

Et pour vous donner un avant goût, voici le plan :

I. Introduction
II. Création du projet
 II-A. Plugin eclipse
 II-B. Plugin maven
III. Séparation des projets
 III-A. Inclusion de source externe dans le module GWT
 III-B. Le mode noServer
 III-C. Le lancement de la partie serveur dans cargo
IV. Partie cliente
 IV-A. Wrapper or not wrapper
 IV-B. Comparatif
 IV-C. SmartGWT
V. Spring
 V-A. Installation des dépendances
 V-B. Chargement de l'application context
 V-C. Stratégies d'intégration
VI. GWT-SL
 VI-A. Présentation
 VI-B. Modification du pom
 VI-C. Ajout de la servlet de dispatch
 VI-D. Création d'un service RPC
 VI-E. Exportation du service
VII. Spring-security
 VII-A. Introduction
 VII-B. Mise en oeuvre
 VII-C. Le service d'authentification
 VII-D. Le contexte Spring
 VII-E. La partie cliente
 VII-F. Sécuriser vos appels RPC
VIII. Hibernate
 VIII-A. Problématique
 VIII-B. Modèle
 VIII-C. Configuration spring
 VIII-D. Résultat
IX. Conclusion
 IX-A. Remerciements
 IX-B. Références
