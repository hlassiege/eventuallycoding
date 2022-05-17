---
id: "156"
title: "Atlassian User Group Paris 2010"
description: "Plus de détails ici sur l'annonce de l'évènement : [Atlassian User Group](http://confluence.atlassian.com/display/AUG/France+-+Paris+Atlassian+User+Gr..."
date: "2010-11-10"
categories: 
  - "waza"
tags: 
  - "atlassian"
  - "jira"
img: ""
cover: "cover2.jpg"
---

Plus de détails ici sur l'annonce de l'évènement : [Atlassian User Group](http://confluence.atlassian.com/display/AUG/France+-+Paris+Atlassian+User+Group)

Voilà, de retour du Atlassian User Group de Paris. La conférence était organisé par [Valiantys](http://www.valiantys.com/display/IN/Accueil), partenaire français d'Atlassian. Cette conférence regroupait une vingtaine de personnes et avait pour but de promouvoir l'utilisation de la suite Atlassian en tant que plateforme ALM. Comme le portefeuille Atlassian est assez important et que la conférence ne durait qu'une demi journée, c'est surtout JIRA qui a été abordé.

Vous voulez en savoir plus, c'est par ici.

L'agenda de cette demi-journée était organisé comme suit :

13:30     Accueil/Café 14:00     Introduction (Valiantys) 14:15 JIRA & GreenHopper New releases (Atlassian) 14:45     Retour d'expérience JIRA     Agrostar (STEF-TFE) 15:30     Balsamiq Mockups for JIRA     Balsamiq 16:00 Pause 16:30 Retour d'expérience JIRA     ADP GSI 17:15     Tables rondes en simultanées

- Performances JIRA (Atlassian)
- Les plugins de références (Valiantys)
- GreenHopper (Valiantys)

18:00     Discussion ouverte et Apéritif

Premier point positif, en arrivant dès le début j'ai pu échanger un peu avec les organisateurs et les personnes d'Atlassian présentes. Très intéressant car la suite de produit Atlassian est vendu en ligne et aucun "vendeurs" Atlassian n'a l'habitude de venir discuter avec les petits froggies. De plus c'était pour moi l'occasion de découvrir l'activité des [partenaires Atlassian](http://confluence.atlassian.com/display/APW/Partner+Directory+Home).

Allez, on entre dans le vif du sujet, voici un petit résumé des différentes présentations :

### JIRA & GreenHopper New releases

_Tony Atkins Atlassian_

Cette présentation a permis de voir les nouveautés principales de JIRA 4.2 et Greenhopper 5.3. Je connaissais déjà ces deux versions mais Tony Atkins a pas mal insisté sur les nouveautés autour des raccourcis clavier, fonctionnalités que je n'utilise pas. Ca m'a donné des idées pour des personnes que je connais qui utilisent justement peu JIRA car ils sont très attachés au manipulation rapide sur Excel. Peut-être un truc qui pourrait leur plaire, je leur en parlerais. Autre point que j'avais loupé en testant la version, les nouveaux mots clés du JQL qui permettent de récupérer les fiches par "component lead" ou "project lead". Assez pratique pour les chefs de projet, surtout combiné avec le gadget agile qui permet de visualiser un burndown chart à partir d'un filtre custom.

 

### Retour d'expérience JIRA

_Agrostar (STEF-TFE)_

Voilà, premier retour d'expérience de la journée avec Agrostar qui fait partie des gros utilisateurs avec 120 000 fiches. Ce qui m'a surtout plu c'est leur méthode pour intégrer leurs différents outils :

- PSNEXT
- Quality Center
- CAST
- Cognos

Au milieu de tout ces outils ils utilisent un ESB (Mule pour ne pas le citer) qui capte les éléments d'un système à l'autre pour ensuite attaquer les autres systèmes par leurs web services. Le plugin JIRA RPC Plugin est donc utilisé pour attaquer JIRA et y ajouter des données venant de PSNext et Quality Center. L'intégration avec Cognos se fait via une portlet HTML qui intégre des rapports HTML distants. L'intégration avec CAST est réalisé via un plugin maison capable d'afficher les données CAST relatives au contexte d'une fiche. Pour CAST ou QC, cela implique de mettre le nom de la fiche dans les commentaires svn ou sur les titres des fiches QC.

Pendant cette présentation Agrostar et Valiantys ont beaucoup insisté sur la nécessité d'uniformiser les paramétrages projets : workflow, permissions etc... condition sine qua non apparemment pour une bonne tenue en charge. Je n'ai malheureusement pas assisté à la table ronde sur les performances pour comprendre mieux ce point.

### Balsamiq Mockups for JIRA

_Balsamiq_

La société Balsamiq édite un logiciel pour faire du maquettage d'interfaces utilisateur low fidelity. Il ont donc présenté leur plugin et son intégration avec JIRA et Confluence. Je ne connaissais ce plugin que de loin et j'ai donc pu en voir un peu plus. Plus qu'un plugin en réalité, il s'agit d'une appli Flash pouvant aussi être utilisé en standalone. A essayer donc, les possibilités sont sympa pour une ébauche de design et il semble y avoir pas mal de plugins autour de Balsamiq. A creuser donc.

### Retour d'expérience JIRA

_ADP GSI_

Second retour d'expérience de la journée, et cette fois la volumétrie est encore plus conséquente. L'instance JIRA utilisé par ADP compte aujourd'hui plus de 300 000 fiches avec une augmentation de 1000 fiches par jour. Cette fois les performances sont vraiment critiques et l'instance subit parfois des freeze nécessitant des reboot. La discussion a un peu dévié sur les performances car ADP attend toujours une vraie solution native pour supporter le clustering. Même s'il semble exister des instances JIRA avec 1 million de fiches (chez MOTOROLA), Atlassian ne garantit plus au dessus de 200 000. D'autres personnes du user group ont apparemment tenté du clustering maison mais qui n'apporte pas entière satisfaction. ADP s'oriente plutot vers une solution d'archivage réalisé en collaboration avec Valiantys.

Mais revenons au thème de la présentation. ADP utilise JIRA dans plusieurs contextes, dont un de service Desk. Plusieurs plugins ont été implementées pour correspondre aux normes ITIL :

- VertySLA pour la tenue des SLA
- un plugin Valiantys pour l'assignation à des groupes
- une association à un référentiel applicatif pour déterminer rapidement l'impact d'un bug sur le parc client

### Tables ronde Plugins de référence

_François Dussurget Valiantys_

J'ai choisi de participer à la table ronde sur les plugins pour avoir un peu de retour d'expérience sur certains addons de JIRA. François Dussurget a débuté en listant les plugins les plus utilisés :

- Greenhopper
- Balsamiq
- Jira Suite utilities
- Jira Toolkit
- Jira issue plugin (je n'ai pas bien noté le nom)
- Tempo
- Minyaa
- Jira Label plugin (désormais en standard sur la 4.2)
- Copy project plugin
- Jira Risk Management

D'autres participants ont évoqué d'autres plugins :

- JIRA RMI (qui propose apparemment bien plus d'API que JIRA RPC plugin)
- JAM utilisé notamment chez SOPRA pour la synchro entre QC et Jira
- Script Runner qui permet de programmer directement en Groovy, Python, Ruby avec les API Atlassian. Idéal pour des scripts d'admin
- Jira Behaviour qui permet de créer des relations entre champ
- Power Report pour du reporting très évolué sur JIRA (édité par Valiantys)

Si on récapitule sur les bonnes pratiques entendus pendant la journée :

- trop de plugin tue le plugin. L'installation des plugins doit suivre un processus de validation et le nombre doit être limité
- les plugins exotiques complexifient les montées de versions
- les plugins maisons doivent être maintenus comme des projets à part entière
- une administration trop complexe (un workflow par projet, un notification scheme par projet etc...) peut avoir un impact négatif sur les performances et les montées en charge
- ne pas sous estimer la formation pour les montées de versions majeures

Bon au final, ce qui m'a bien plu sur cette demi-journée :

- Rencontrer d'autres utilisateurs
- Rencontrer Atlassian et découvrir l'activité des partenaires Atlassian
- Les bonnes pratiques autour des plugins
- Les retours d'expérience
- Les échanges autour des performance

Ce qui m'a moins plu :

- Seul JIRA a été abordé
- Je n'ai pas pu participer à la table ronde sur les performances
- L'absence de certains items dans la roadmap Atlassian (gestion des utilisateurs "enterprise ready", clustering par exemple)
- La disposition de la pièce qui obligeait le présentateur a être devant le tableau (pas pratique quand on était placé à gauche)
- Ah oui, j'oubliais, le noir absolu dans la pièce pour les premières présentations, on se serait cru au ciné ^^
