---
id: "23"
title: "Alignement, Autonomie et Contexte"
description: "Quel est le rôle des techs leaders pour assurer autonomie et alignement et créer de l'impact ?"
date: "2023-05-31"
tags:
- "empowered"
- "impact"
- "product"
- "engineering"
cover: "bridge.jpg"

book: "impactfulSoftwareEngineering"

language: "fr"
alternates:
- en: "https://eventuallycoding.com/en/2023/05/alignment-autonomy-context"
---

Au fil des années, j’ai rencontré et observé des équipes compétentes et malgré cela, en situation d’échec : travaillant sur les mauvaises priorités, travaillant parfois sur les bons objectifs, mais avec des solutions inadaptées, travaillant parfois sans aucune priorités.

La cause première de ces problèmes peut s’articuler autour de ces 3 mots : **autonomie, alignement, et contexte**.

Si ces mots sont d’apparence relativement simple à comprendre, en pratique, leur mise en place n’est pas triviale.

Comment s’assurer dans une équipe que tout le monde cherche à résoudre les mêmes problèmes ? Ça veut dire quoi l'autonomie au sein d'un groupe et quelles sont ces limites ? 

## Empowered teams

Vous avez peut-être entendu le mot “empowered teams” ? Et vous vous êtes dit que c’était encore un nouveau concept de consultant ?

L’expression est apparue et a gagné en popularité via le livre [Empowered de Marty Cagan](https://www.svpg.com/books/empowered-ordinary-people-extraordinary-products/). Pour simplifier, une empowered teams travaille sur un problème à résoudre, à l’inverse d’une feature team qui travaille sur une liste de fonctionnalités (la fameuse roadmap).

Exemple :

- une “empowered team” a pour mission de travailler à l’acquisition de nouveaux utilisateurs
- une “feature team” doit sortir un programme de parrainage

ou

- une “empowered team” a pour mission d’améliorer la developer experience en faisant baisser les temps de cycle de dev
- une “feature team” doit implémenter une nouvelle solution de CI (continuous integration)

On parle aussi d’une équipe qui privilégie les outcome (les impacts) aux outputs (les livrables).

_(*) désolé pour tous ces anglicismes, mais vous retrouverez beaucoup ces mots dans la littérature._

La première chose que j’aimerais souligner, c’est qu’il ne s’agit pas d’un sujet réservé aux product managers. Toute personne senior en Engineering doit participer aux prises de décisions, par exemple :
- en évitant la construction de solutions inutilement complexes, démontrant une mauvaise compréhension des objectifs
- en vérifiant que ces priorités sont construites en prenant en compte les bonnes contraintes
- en s’assurant que ces priorités contribuent aux objectifs du groupe

J’écris ce chapitre pour tout(e) leader technique qui cherche à créer de l’impact.
Pour cela, nous allons voir que créer de l’autonomie, de l’alignement et savoir communiquer le contexte sont des leviers pour y parvenir.

Ici, en tant que Tech Leader vous pouvez être dans deux situations, et souvent dans les deux en même temps :
- la personne qui cherche à développer l’autonomie de son groupe
- la personne qui appartient à un groupe dont l’autonomie est limitée et qui cherche à gagner en indépendance.

## Alignement, autonomie et contexte

Pour aborder ce sujet, je vais repartir d’un dessin d'Henrik Kniberg autour de l’alignement et de l’autonomie. Les “empowered teams” étant les équipes dans le coin en haut à droite.

::image
![Alignement and autonomy](/images/alignement-autonomy.png)
::

Ce dessin fait partie d’une [keynote donnée en 2016](https://www.infoq.com/fr/presentations/lkfr-henrik-kniberg-keynote/) que je vous invite à regarder.

Dans cette keynote, il est question d’un groupe, dont l’objectif est de traverser une rivière pour s’installer de l’autre côté de la rive.

## Faible autonomie, faible alignement

Le coin en bas à gauche représente un groupe sans grande autonomie, et sans alignement, sans directions précises. Personne dans cette partie du cadran n’a pris pour lui le problème initial de traverser la rivière.

Les symptômes d’une telle organisation dans un contexte technologique :
- des équipes uniquement dans la réaction, c’est-à-dire dont le travail est dirigé par le support et les bugs, les upgrades de composants qui arrivent en fin de vie, etc.
- pas d'objectif hyper clair, mais un kanban (une grosse todo list) qui s’alimente organiquement
- du micro management, l’assignation des tâches par un(e) manager/chef de projet
- une équipe technique qui travaille décorrélé des utilisateurs, souvent en mode fournisseur pour une équipe qui définit le produit, mais elle-même éloigné du business.


Comment y remédier ?

La tâche est rude dans ce cadran. Avant même de parler d’autonomie, le premier sujet sera d’accorder les personnes autour d’un objectif commun.
Le rôle d’un(e) tech leader sera de se rapprocher du business ou de son représentant le plus proche et de comprendre les problèmes sur lesquels il faut travailler. Dans ce type d’organisation, le business est souvent très loin et/ou difficile d’accès. Casser la distance peut-être ardue et pas dans la culture de l’entreprise. La technique et les “best practices” risquent d’être le cadet de vos soucis dans ce contexte tant l’importance de raccrocher l’Engineering au business passe avant tout.

::image
![What should we do now ?](/images/what-should-we-do.jpg)
::

## Forte autonomie, faible alignement

Si on se déplace sur la droite, on tombe sur des organisations constituées d’individus ou groupes d’individus qui ont chacun défini des objectifs, mais tous différents.

Si l’objectif du groupe est de traverser une rivière, tout le monde travaille sur des sujets différents, certains cultivent des légumes, d’autres pratiquent la pêche et quelques leaders se demandent si une personne travaille bien sur le fait de traverser la rivière.

Ici, il y a une mauvaise compréhension de l’autonomie.
Autonomie ne veut pas dire indépendance. Une équipe qui décide dans son coin de ces priorités n’apporte pas d’impact, ou alors par accident et ce succès se reproduit difficilement plusieurs fois.

Et ça n’empêche pas que chaque groupe puisse être très performant. Malheureusement, l’impact se mesure au global.


Les symptômes d’une telle organisation dans un contexte technologique :
- plusieurs groupes travaillent sur des sujets définis, mais sans collaboration avec d’autres équipes.
- de nombreux projets sont en cours et s’étalent sur des mois. C’est lié au phénomène “one man army” : si une personne seule peut aller vite, elle finit par s’épuiser plus vite qu’un groupe plus large. Cette lenteur apporte de la lassitude aux équipes qui continuent à empiler de nouveaux sujets sur le haut de la liste.
- la multiplicité des sujets apporte du flou sur l’ensemble de l’organisation qui devient une boîte noire pour le reste de l’entreprise
- l’impact ressenti est faible


Comment y remédier ?   
Le constat est assez proche du précédent, mais le travail sera moins ardu par la nature très entrepreneuriale de l’entreprise. Ici le/la tech leader pourra se reposer sur des équipes investies. Il va falloir travailler sur l'alignement.

Mais justement, définissons un peu mieux cette notion.
## Fort alignement, faible autonomie

L’alignement définit la capacité d’un groupe à tous chercher des solutions au même problème.

Exemple :
Objectif : Une entreprise Européenne décide de s’implanter sur le marché US.

* Le département sales va investir pour ouvrir un bureau commercial aux USA
* Le département finance va ouvrir une filiale aux USA et modifier son modèle de facturation pour être conformes aux lois en vigueur
* Le département engineering va étudier comment diminuer la latence de son produit via une meilleure distribution géographique de son infrastructure

etc…

Chaque équipe va chercher à contribuer au même objectif.

Pour autant, sur le dessin en haut à gauche, on peut avoir une direction claire sans autonomie. Un ou plusieurs leaders peuvent décider exactement ce qu’il faut mettre en œuvre pour atteindre un objectif.

Le/la leader demande explicitement de construire un pont pour passer la rivière.

Ce mode de fonctionnement peut être très efficace, notamment à petite échelle avec un(e) leader visionnaire. Mais le passage à l’échelle peut poser des soucis, car le ou la leader visionnaire ne peut pas se démultiplier dans l’entreprise et suivre l’ensemble des décisions.

J’ai observé plusieurs fois des entreprises avec de très bons leaders mais en grande difficulté pour gérer une croissance rapide. Ils ou elles ont recruté des personnes plus juniors qu’eux, plus aptes à exécuter une tâche qu’à prendre des décisions. Ces personnes n’ont pas été en succès ensuite avec le passage à l’échelle, dans le temps imparti.

Les symptômes d’une telle organisation dans un contexte technologique :
- le/la leader est le plus expérimenté du groupe avec un écart significatif
- il y a un fort déséquilibre entre junior et senior au détriment des seniors
- l’équipe ne participe pas à la prise de décisions et le backlog est alimenté par une seule personne


Comment y remédier :

Si vous êtes tech leader, une de vos responsabilités c’est le recrutement. Vous devez recruter meilleurs que vous dans certains domaines. Vous devez apprendre à [partager vos légos](https://review.firstround.com/give-away-your-legos-and-other-commandments-for-scaling-startups).  
La seconde chose importante, Il est crucial de sortir du cercle vicieux :  
* les personnes avec qui je travaille ne prennent pas les bonnes décisions ou ne savent pas prendre de décisions, donc j’interviens pour les prendre à leur place    
* => par souci de vitesse je passe peu de temps sur l’explication  
* => les personnes en question finissent par se concentrer davantage sur leur expertise que sur la prise de décision

A l’étape 2, vous avez une responsabilité importante sur le coaching/mentoring afin d’éduquer, donner le contexte nécessaire à des prises de décisions plus efficaces.

Si vous êtes tech leader, mais que vous êtes plutôt dans la situation où le travail vous est délégué, il va être nécessaire de montrer que l’équipe peut être autonome. Pour cela, deux choses importantes :
- **Développer sa compréhension business**. Il faut sortir de l’équipe pour mieux comprendre les enjeux et contraintes de l’entreprise et/ou de vos clients.

Dans notre exemple plus haut, un groupe qui choisirait de construire une catapulte pour projeter les individus de l’autre côté montrerait une certaine méconnaissance de l’effet de la gravité sur les corps humains :) On peut espérer que l’initiative serait stoppée.  
**Ne soyez pas celui qui propose la catapulte**.

::image
![The guy who tried the catapult](/images/catapult.jpg)
::

- Développer sa capacité de prise de décisions. Pour rétablir la symétrie des échanges avec votre management, il faut avoir une chose en tête, **vous devez apporter plus de solutions que de problèmes**. On ne vous fera pas confiance si vous ne venez qu’avec des problèmes à résoudre et vos discussions se transformeront systématiquement en reporting basique et donc il va falloir faire des choix.

Exemple :  
Bad : on est trop peu dans l’équipe alors on ne peut pas finir le projet dans les temps.  
Good : vu la taille de notre équipe et notre vitesse actuelle, j’ai pris la décision de couper une partie des fonctionnalités pour tenir la date.

Bad : on est noyés sous le support. L’équipe n’arrive pas à délivrer le projet A dans les temps  
Good : Nous avons fait une analyse du support et nous avons noté une forte croissance des cas de support lié à un bug dans une fonctionnalité récente. Nous avons décidé d’affecter une personne sur une semaine pour corriger ce bug et pouvoir regagner en vélocité sur le projet A.


Avant de parler du dernier cadran, j’ai besoin de faire un rappel sur le “contexte”.
## Lead with context

“Lead with context, not control” est une citation que vous retrouverez notamment dans l’excellent livre [“No rules rules”](https://www.amazon.com/No-Rules/dp/0753553635) de Erin Meyer et Reed Hastings.
Pour qu’une personne ou un groupe puisse prendre une bonne décision, elle doit connaître tout le contexte.

Si on reprend notre groupe qui doit passer une rivière, il nous manque des éléments de contexte pour proposer des initiatives.

Peut-être qu’il faut passer la rivière pour trouver à manger. Auquel cas, pourquoi ne pas avoir décidé de s’installer de ce côté ?  
Le/la leader a omis de dire que nous sommes sur le territoire d’une autre tribu qui nous a demandé de partir avant l’automne.  
Ok, et si le leader nous avait dit que cette tribu n’était pas contre la mise en place d’échanges commerciaux malgré tout avec nous, avoir un pont serait sans doute plus intéressant dans le futur que juste construire un bateau.

Avoir le contexte permet de prendre les bonnes décisions.

Et en entreprise, les occasions sont légion de négliger de donner le contexte entier, parfois par souci de vitesse, parfois pour protéger son équipe, parfois par oubli. Mais sans contexte, vous ne pouvez pas attendre des personnes qu’elles prennent des décisions pertinentes. Le contexte donne les contraintes qui permettront de proposer la solution technologique la plus adaptée.

::image
![Context matters](/images/context-matters.jpg)
::


## Fort alignement, forte autonomie

Dans ce coin du cadran, l’objectif est clairement défini, par exemple traverser la rivière. Les contraintes sont connues et chaque groupe est invité à contribuer à l’objectif commun.

C’est, en théorie, le type d’organisation le plus efficace, surtout à l’échelle.

Je souhaite souligner deux pièges à cette étape :

> It doesn't make sense to hire smart people and tell them what to do; we hire smart people so they can tell us what to do.  
> Steve Jobs

Il faut accepter l’imprévu, accepter que les solutions prises ne soient pas celles que vous imaginiez à l’origine.
Si un groupe propose de franchir la rivière avec un bateau, un tunnel ou qu’elle a repéré un guet une centaine de mètres plus bas, c’est peut-être différent de ce que vous aviez en tête, mais peut-être plus efficace. Acceptez que tout ne soit pas comme dans votre tête.

MAIS, s’il existe plusieurs groupes qui travaillent, un sur la construction d’un tunnel, un autre sur la construction d’un pont, un autre sur la construction d’un bateau, vous avez un souci.
Si tout le monde travaille sur le même problème avec des solutions différentes, **c’est aussi une forme de désalignement**.

Encore une fois, autonomie ne veut pas dire indépendance, il doit y avoir régulièrement des discussions autour des initiatives lancées afin de s’assurer de la cohérence globale.

**Ne soyez pas celui qui travaille sur la création d’un tunnel alors que tout le monde cherche à construire un pont.**

Certaines méthodologies, comme celle des OKR par exemple, permettent de matérialiser cette discussion périodique.

Exemple :

Objectif : Le produit doit permettre l’acquisition de 10 000 prospects aux USA

Initiatives du trimestre 1 :
- L’équipe A travaille sur l’amélioration du SEO via une gestion du multi domaine et la régionalisation
- L’équipe B met en place plusieurs nouveaux noms de domaine pour gérer du multi domaine
- L’équipe C travaille sur la partie SEA pour affiner le ciblage géographique des campagnes

Initiatives du trimestre 2 :
- L’équipe A travaille sur un programme de parrainage
- L’équipe B travaille sur des mécanismes de partage sur les réseaux sociaux
- L’équipe C travaille sur des mécanismes d’affiliation

La cohérence des initiatives est liée à une discussion en début de trimestre de ce que chaque groupe a imaginé pour contribuer à l’objectif initial d’acquisition de prospects.

* L’objectif est défini en amont.
* Les équipes proposent des initiatives pour y contribuer
* Après discussion, un ensemble d’initiative est choisi

Cette étape visant à s’assurer de la cohérence des initiatives se retrouve dans de nombreuses méthodologies :
- dans les OKR via les OKR Quarterly review (revue trimestrielle)
- la fixation des appétits dans la méthode [ShapeUp](https://basecamp.com/shapeup)
- la construction des [“bet boards”](https://blog.crisp.se/2016/06/08/henrikkniberg/spotify-rhythm) chez Henrik Kniberg
- les [Program Increment Planning](https://scaledagileframework.com/pi-planning/) en SAFe

J’insiste à nouveau, autonomie ne veut pas dire indépendance. Si lors de ces discussions, une décision est prise de privilégier tel ou tel pari et que ce n’est pas la solution que vous aviez en tête, tant pis et il faut s’engager sur cette décision. C’est le fameux [“disagree and commit”](https://en.wikipedia.org/wiki/Disagree_and_commit). Et ça n’enlève rien à l’autonomie des équipes. Les équipes peuvent être moteurs sur la recherche des initiatives pour résoudre un problème donné, mais à la fin, on va rechercher l’alignement. Sinon, on retombe dans le cadran en bas à droite.

## Comment faciliter l’émergence d’équipes autonomes

Si votre objectif est de mettre en place plus d’autonomie dans les équipes produit, vous pourriez vous heurter aux difficultés suivantes :

- le recrutement. Pour démarrer il faut de très bons PM et des Techs leaders qui ont une fibre entrepreneuriale en plus d’une fibre technique. La transformation passe avant tout par les individus.

- l'adhésion et le changement d'état d'esprit du top management est primordiale. Ils et elles doivent accepter de déléguer le comment à des équipes produit pour se focaliser sur le quoi (les objectifs). Et c'est bien plus dur que ce qu'on croit. Beaucoup disent vouloir passer sur des équipes produits autonomes, mais sont très frustrés de ne pas pouvoir leur dire quoi faire

- accepter d’abandonner les roadmap traditionnelles au profit de stratégie sur la base d'objectifs (OKR ou autre, peu importe)

Ces 3 sujets créent des interblocages.
Un(e) bon PM et/ou un(e) bon Tech Leader sera réticent à venir dans une organisation où il/elle sentira un manque d'autonomie
Le management aura du mal à donner sa confiance à une équipe qu'il ne trouve pas assez orienté business
Le top management qui ne donne pas sa confiance continuera à exiger une très grande prédictibilité des développements via des roadmaps détaillées.


En tant que Tech Leader, vous avez la main sur plusieurs leviers que j’ai déjà abordé dans le premier grand chapitre :
- [Développer sa compréhension du business](/2023/02/not-only-about-technique)
- [Tout mesurer](/2023/02/measuring-everything)
- [Savoir prioriser](/2023/03/choisissez-vos-batailles)
- [Réserver du temps à l’idéation](/2023/03/accept-boredom)
- [Savoir communiquer](/2023/05/tech-marketing)

Toutes ces actions ont pour objectif de faire grandir la confiance placée dans les actions de l’Engineering. **Cette confiance se transformera en délégation d’autonomie**.

## Questions
Diriez-vous que vous avez bien toutes les contraintes en tête sur vos projets actuels ?

Et vous, combien de temps passez-vous à expliquer le contexte aux personnes qui travaillent avec vous ?

Quel est l’objectif de votre équipe/département pour l’année ?

Comment contribuez-vous à cet objectif pour ce trimestre ?

## Ressources


* [Give away your legos and other commandments for scaling startups](https://review.firstround.com/give-away-your-legos-and-other-commandments-for-scaling-startups)
* [No rules rules](https://www.amazon.com/No-Rules/dp/0753553635)
* [keynote de Henrik Kniberg en 2016](https://www.infoq.com/fr/presentations/lkfr-henrik-kniberg-keynote/)
* [Empowered de Marty Cagan](https://www.svpg.com/books/empowered-ordinary-people-extraordinary-products/)


::tip
Ce billet de blog fait partie du livre [Impactful Software Engineering](/2023/02/impactful-software-engineering).  
N'hésitez pas à lire les autres chapitres.
::
