---
id: "1526"
title: "Le modèle Spotify, un échec complet ?"
description: "J'ai lu récemment un billet sur le modèle Spotify intitulé \"[l'échec du modèle Spotify](https://oyomy.fr/2020/04/l-echec-du-modele-spotify/)\".  
Une d..."
date: "2020-05-23"
categories: 
  - "waza"
tags: 
  - "agile"
  - "startup"
img: ""
cover: "cover1.jpg"
---

J'ai lu récemment un billet sur le modèle Spotify intitulé "[l'échec du modèle Spotify](https://oyomy.fr/2020/04/l-echec-du-modele-spotify/)".  
Une des phrases de l'article étant la suivante :

> "Spotify n’utilise pas le “modèle Spotify” et vous ne devriez pas non plus."

Le billet n'est pas inintéressant. On peut y trouver des analyses et des alternatives. Mais le ton me semble très à charge et manquant de recul. Et surtout, il est dogmatique :  
**"vous ne devriez pas non plus"**

Par la suite j'ai lu [celui du CTO du Bon coin](https://medium.com/leboncoin-engineering-blog/the-spotify-model-leboncoins-experience-feedback-9f43bf734d05) qui était lui-même une réponse au premier billet. Plus pragmatique, ce dernier explique comment ils ont fait fonctionner ce modèle dans leur organisation. Il insiste sur l'adaptation du modèle au contexte du Bon Coin et sur le fait que rien n'est figé car il faut constamment s'adapter.  
Ce qui me paraît au final une approche plus saine.

Cet article beaucoup plus mesuré met le doigt sur ce qui me dérangeait dans le premier : l'adaptation

## Reprenons depuis le début.

Parlons de l'auteur en premier.  
Il faut comprendre le contexte pour comprendre son billet ensuite.

L'article est originellement écrit par [Jérémiah Lee](https://www.linkedin.com/in/jeremiahlee415/), développeur qui a travaillé chez Spotify, et qui raconte donc de l'intérieur sa vision du modèle qu'il juge peu compréhensible (chaotique) et peu efficace. Il dira également que le modèle Spotify, au-delà du modèle universel qui sert de base pour de très nombreuses boîtes dans le monde n'a jamais été qu'un idéal jamais atteint même chez Spotify.

Jérémiah a rejoint Spotify en 2017 (selon Linkedin). Je ne connais pas la date de création du modèle Spotify tel qu'il est connu du grand public mais je situe cela entre 2012 et 2015. La personne est arrivée un peu après la bataille dans une société qui avait déjà bien évolué.  
On peut supposer qu'en 2017, comme toute société, Spotify essayait d'améliorer ses méthodes de travail et pour cela, il faut garder un œil critique sur ce qu'on fait déjà afin de l'améliorer. Jérémiah en a sans doute uniquement gardé les critiques.  
Notons également que, selon Linkedin, il s'agit de la première expérience de Jérémiah en Suède et le choc culturel a peut-être été rude.  
Enfin, son passage dans cette société n'a duré que 7 mois, ce qui laisse présager que ça ne s'est pas très bien passé.

Accordons lui malgré tout le fait d'avoir cherché à rester objectif, il m'apparait cependant que pour comprendre une culture d'entreprise créée 11 ans avant son arrivée, il faut un peu plus que 7 mois.

Sur le fond, est ce qu'on peut vraiment reprocher à une entreprise d'avoir fixé un modèle à atteindre et de l'avoir fait évoluer constamment ?

## Un "modèle" d'organisation

Je ne vais pas prendre un chapitre pour re-décrire le modèle Spotify, il existe de nombreux articles en ligne sur le sujet si ça vous intéresse.  
Spotify, sans avoir les chiffres exacts, c'est plus de 1000 développeurs et j'imagine qu'en incluant les personnes travaillant en tant que product manager, designer, data, ops etc… on doit facilement arriver aux 2000 (?). A cette taille il faut fixer une structure de gouvernance et de communication.

Mais sans aller à ce chiffre, c'est en réalité le sujet toute les sociétés. J'aimerais résumer avec ce que nous avons fait chez Malt.

Chez Malt nous ne sommes "que" 50 dans l'équipe produit. C'est donc bien peu par rapport à Spotify. Mais nous sommes 200 dans la société au complet. Et quand on parle de modèle d'organisation cela touche en réalité tout le monde et toutes les interactions sont à prendre en compte.  
Et cette question de trouver un modèle d'organisation est fondamental pour rester efficace.

Trouver son modèle c'est "simplement" décrire des méthodes de communication entre les gens, expliquer les process qui permettent d'arriver à des décisions.  
Ces méthodes ne peuvent pas être décorrellé de votre contexte (taille d'équipe, taille d'entreprise, objectifs business) ainsi que de votre culture d'entreprise.

## L'adaptation/itération du modèle d'organisation

Nous sommes passés par de nombreuses phases (liste non exhaustive et sans doute inexacte) :

- une équipe de 2 dev en mode "arrache" qui faisaient juste ce qu'il fallait pour construire un proto
- une équipe de 3 dev avec un petit peu de silos entre compétences métiers et techniques
- une équipe de 4 dev avec une notion de prio de fiches par ROI attendue / points de complexité
- une équipe de 4 dev, 1 ops et un PM avec des notions de sprint sur quelques projets
- des squads avec des scopes métier
- un passage en feature team (à partir de 15 personnes (?))
- une structuration entre équipes delivery avec une mission, équipe discovery avec un scope (marketing) et équipe efficacité opérationnelle (métiers + techniques)
- on a utilisé des sprints, du kanban, des OKR, de nombreux outils (Jira, productboard, trello etc…)

etc…  
J'ai été rapidement sans être trop précis sur les dates, les nombres de personnes etc…  
Mais globalement on a changé environ **tout les 6/10 mois**.

Il n'y avait pas forcément un modèle supérieur à un autre. Il y avait une nécessité à un moment de travailler différemment pour réaliser un objectif. Parfois nous avons privilégié la vitesse, parfois le sens du détail, parfois l'innovation, parfois l'efficacité opérationnelle.  
Ces changements sont normaux et constants dans une entreprise (surtout une entreprise en croissance).  
Les OKR nous ont servi (servent encore) à un moment ou il était nécessaire d'avoir un alignement société. Le fait d'avoir des guildes sur le modèle Spotify nous a servi pour mieux structurer les sujets transverses, les sprints nous ont donné un rythme à un moment ou c'était nécessaire mais le mode kanban a eu d'autres avantages ensuite.

Peut être que vous même connaissez cela dans vos boites et que vous vous en plaignez. Mais, de mon avis personnel, le fait qu'un entreprise change régulièrement de méthode de travail n'est pas une mauvaise chose. Ce n'est pas un signe de "_ils ne trouvent pas la bonne méthode_", "_c'est chaotique_", "_ils ne savent pas ce qu'ils veulent_"  
C'est au contraire de ne plus bouger, de ne plus s'adapter, qui est mauvais signe.

Bref, comme toute société, nous avons fait évoluer nos méthodes de travail.  
Et pour Spotify qui a désormais 14 ans, ca a sans doute été le cas aussi.

Dans l'article quand la recruteuse dit à Jérémiah ne pas attendre de Spotify une utopie agile, c'est, à mon sens, très honnête de sa part.  
Spotify ne correspondait pas en 2017 à l'iconographie publique créée en 201x. Et c'est sans doute pour le mieux.  
Spotify a communiqué sur une organisation qu'elle a eu (ou tenté d'avoir) à une époque différente avec un nombre de personnes différents, avec des objectifs différents.  
Et à une taille de boite comme Spotify ils ont massivement investi dans la conduite de changement ce qui s'est traduit par des coachs agiles en grand nombre, un livre blanc, des billets de blog, des conférences etc…

## Le mythe et sa déconstruction

En externe cela a été cristallisé comme le Saint Graal à atteindre. Mais ça, c'est la faute des consultants qui ont surfé sur la machine à communiquer de Spotify.  
Tout comme l'agilité avec le manifeste Agile en 2001, la formalisation du mythe Spotify entre 2012 et 2015 a sans doute signé la fin dudit modèle. (Au moins il ne semble pas exister de certification Spotify…)  
A partir du moment où on coule dans le marbre une méthode d'organisation qui doit par définition évoluer constamment pour s'améliorer, on emprunte déjà le mauvais chemin. Mais en plus quand on applique une méthode, tout le temps de la même façon sans s'adapter au contexte, là on quitte carrément la route.  
Méfiez vous des personnes qui veulent vous faire appliquer une méthode "by the book" alors même que ces méthodes par essence vous disent de ne pas suivre un plan voire même qu'elles ne sont qu'un cadre de principes et valeurs et pas des méthodes.

L'auteur cite des coachs agile de chez Spotify pour étayer son propos. Il faut aussi comprendre le rôle de ces personnes pour comprendre leurs citations.  
A l'inverse de Jérémiah qui était développeur lors de son passage éclair chez Spotify, ces personnes ont passé des années sur le modèle organisationnel. Ils ont eu plusieurs challenges parmi lesquels :

- détecter ce qui pouvait/devait être amélioré (la fameuse amélioration continue)
- permettre à une entreprise de 4000 personnes de se corriger

C'est leur rôle d'être critique sur l'organisation en place et c'est leur rôle de la faire évoluer.  
Est ce qu'il existe une organisation parfaite qui réponde à tous les objectifs ? Sans doute pas. Ils ont, j'imagine, du régulièrement revoir leur copie face à des objectifs de boîte qui ont changé dans le temps, une taille de boîte qui a changé, des personnes qui ont changé.  
Imaginez en plus que ces personnes, non seulement ont du organiser des changements sur une organisation de cette taille, mais avec en plus l'attente presque "mythologique" sur ce que devrait être la société pour ces employés.  
Dans ce contexte, il faut peut-être être encore plus radical sur la critique de ce qu'on veut déconstruire pour le faire changer ?

Bref, pour conclure je reviendrais juste sur la phrase qui commence l'article initial

> Spotify n’utilise pas le “modèle Spotify” et vous ne devriez pas non plus.

Non effectivement. Déjà ça n'a peut être été qu'un idéal. Et en soit ce n'est pas négatif de se fixer des objectifs ambitieux.  
Et par la suite Spotify a sans doute fait évoluer son modèle d'origine. En plusieurs années ils ont changé, adapté et vous devriez le faire aussi.

Disclaimer : a l'inverse de l'auteur je n'ai pas bossé chez Spotify. Il s'agit d'un billet d'opinion. A prendre ou à laisser ;)
