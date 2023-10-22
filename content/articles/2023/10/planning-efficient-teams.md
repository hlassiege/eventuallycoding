---
id: "26"
title: "Planning in efficient teams"
description: "Comment gère-t-on la planification dans les équipes efficaces. Comment notre manière de planifier modifie notre capacité à créer de l'impact."
date: "2023-10-22"
tags:
- "planning"
- "impact"
- "product"
- "engineering"
cover: "equilibre.jpg"

book: "impactfulSoftwareEngineering"

language: "fr"
alternates:
  - en: "https://eventuallycoding.com/en/2023/10/planning-efficient-teams"
---

Quand on parle de créer de l’impact, une équipe Engineering a deux responsabilités, participer à la **discovery**, l’identification des opportunités qui vont permettre de contribuer positivement aux revenus de l’entreprise et le **delivery**, la faculté à produire des solutions pour répondre à ces opportunités.

Les deux sont indissociables, une excellente équipe en delivery ou en discovery mais moyenne sur l’autre partie aura un impact plus limité qu’une équipe qui fait correctement les deux.

Une équipe qui serait médiocre sur son delivery ou sa discovery risque même d’avoir un impact négatif.

J’aimerais m’attarder sur un point important du delivery, la planification.

## Le delivery : un enjeu de prédictibilité

L’Engineering est responsable du delivery. Cela regroupe l’ensemble de l’activité consistant à mettre à disposition un nouveau produit ou l’amélioration d’un produit existant.

Évidemment par l’ensemble de l’activité, j’entends le développement, mais pas seulement, ce sont les tests, la documentation, l’industrialisation (les fameux reliability, security, scalability, performance).

Une équipe efficace, c’est donc une équipe capable de réaliser un développement, mais aussi de le mettre à disposition, et cela, avec des contraintes : une contrainte de temps ou une contrainte de budget, le fameux [triangle de gestion de projet](https://en.wikipedia.org/wiki/Project_management_triangle).

Mais, ce qui caractérise aussi une équipe efficace, c'est sa capacité à planifier ces incréments dans le temps.

Ces itérations ne vivent pas indépendamment les unes des autres, et surtout le produit ne vit pas en isolation d’autres équipes.

Par exemple, un plan de communication général peut être prévu pour accompagner la sortie d’une innovation.

Ou bien le département légal à une obligation à respecter à une date fixe etc…

Bref, on a des **dépendances** entre plusieurs équipes et donc des **contraintes supplémentaires**, ce qui augmente l’importance des dates.

À partir de là, on commence à toucher du doigt un sujet sensible dans l’informatique : la **prédictibilité** et donc la planification.

Mais avant d’aller plus loin sur le sujet de la prédictibilité, faisons déjà la différence entre un projet et un produit parce qu’on n'aborde pas la notion de prédictibilité de la même façon dans les deux cas.


## Équipes projets et produits cherchent à prédire des choses différentes

Un **projet** démarre lorsqu’on a une solution définie pour un problème donné. Cette solution est fixée par des contraintes fortes sur le “scope”, c'est-à-dire quel service il faut rendre.

La solution, le comment, est donc :

* soit fixé en amont par une contrainte externe, un besoin client, une contrainte légale
* soit fixé de façon top down par des décideurs internes

Exemples de projet :

* la mise en place de la conformité au RGPD en 2018
* une certification ISO 27001
* l’ouverture d’un nouveau marché
* le début d’un partenariat
* une mise à jour d’un composant technique de l’application
* l’intégration de votre produit avec un ERP
* etc…

Dans tous les cas précédents, la solution est définie. Tout l’enjeu, c’est la capacité à mener le projet à terme.

Ça ne veut pas dire que tout est gravé dans le marbre, on peut avoir des adaptations, mais globalement le chemin est balisé et il y a peu d’innovations à attendre.

À l’inverse, lorsqu’on travaille pour un **produit**, les solutions ne sont pas définies. **Mais** les **objectifs** sont définis.

Par exemple, une équipe Produit va chercher à améliorer l’acquisition de nouveaux utilisateurs, ou leur rétention, ou leur capacité à dépenser plus etc…

Il y a ici une différence fondamentale entre le fait d’être dans une entreprise qui fait du produit et une entreprise qui fonctionne par projets.

Les deux ne vont pas chercher le même type de prédictibilité et ne vont pas planifier de la même façon.

Dans un cas, on va chercher à prédire le temps de réalisation d’une liste de features. Dans l’autre, on va chercher à anticiper le résultat d’initiatives sur un objectif business.

La différence est parfois subtile. En effet, une équipe Produit peut donner l’apparence de mener des projets. Elle peut par exemple décider d’implémenter la feature X pour atteindre le résultat Y.

La subtilité réside dans le fait que l’équipe produit réalise la feature X pour obtenir un résultat Y et continuera de travailler en ce sens tant que le résultat attendu ne sera pas atteint.

Cette subtilité est importante :

* Un petit bout de la feature X peut être suffisant pour réaliser l’objectif et l’équipe peut décider de se contenter d’une solution partielle.
* Si le résultat n’est pas atteint, l’équipe peut décider de supprimer totalement ce qui a été testé.
* L’équipe peut découvrir en cours de chemin qu’une autre feature Z serait plus utile pour atteindre le résultat et implémenter une solution différente de celle envisagée initialement.

À noter que Marty Cagan [utilise un autre vocabulaire](https://www.svpg.com/product-vs-feature-teams/) et parle de “**Features teams/Delivery teams**” en opposition aux “**Impact Teams**” pour parler respectivement des équipes Projets et des équipes Produits.

::tip
Une équipe Produit a bien entendu aussi des projets à gérer. Les exemples donnés plus haut peuvent s'appliquer dans le cadre d'une équipe Produit.
::

## Agences versus entreprises Produit

Entendons-nous bien, c’est tout à fait possible de travailler majoritairement sur des projets définis à l’avance et guidés par des dates fixes.

C’est, par exemple, ce que font toutes les agences (agences de conseil, ESN, agences web) et c’est normal.

Le quotidien en agence, c’est de s’engager sur des besoins clients, négocier un scope à produire sur une date fixe.

C’est un exercice très difficile. Les meilleures agences vendent très cher leur méthodologie de conduite de projet.

Le pool de personnes disponible est constamment en mouvement, il faut anticiper pour les assigner aux différents projets qui arrivent.

Pour réussir à correctement planifier un projet et ses dépendances, il y a un travail phénoménal pour lister l’ensemble des tâches d’un projet, estimer le temps de réalisation de chacune d’entre elles, mobilisant des dizaines de personnes au passage, matérialiser les dépendances sous forme de diagramme de Gantt, bref, faire du capacity planning.

Une personne absente, un impondérable technologique, bref un seul grain de sable et tout peut déraper. Ainsi ces méthodologies vont lister les risques et les mitiger, en doublant les personnes nécessaires, en travaillant sur des plans de secours etc…

Et pour montrer à quel point c’est complexe, le [“Standish Group Chaos report” continue de mesurer année après année](https://brainhub.eu/library/reasons-for-it-project-failure) que seuls 30% des projets IT sont livrés en respectant le délai et le budget, tandis que 20% de ces projets sont des échecs complets. Ce à quoi je rajouterais que je serais curieux de savoir sur ces 30% de projets réussis lesquels ont eu l’impact business escompté au démarrage.

Parce que, si cette phase de préparation et le temps nécessaire pour coordonner l’ensemble coûte très cher, c’est surtout hautement casse-gueule. Prédire la valeur business d’une fonctionnalité à l’avance est illusoire, prédire que ce sera toujours le plus important à faire dans 6 mois est très optimiste et estimer le temps de réalisation est au mieux un mirage.

Dans une optique “projets”, le plus gros défaut, c'est que c’est orienté output (fonctionnalités), pas outcome (résultats). Donc même si l’objectif n’est pas atteint, on passe à la suite. Ce qu’on célèbre ici, c'est d’avoir sorti x ou y, mais sans que ce soit bénéfique à l’entreprise qui a acheté cette prestation.

Les intérêts de l’agence et de l’entreprise cible ne sont pas forcément les mêmes.

Pour ma part, j'écris cet e-book pour les équipes Produit et les meilleures équipes Produit fonctionnent différemment donc je ne m’attarderai pas sur les techniques nécessaires pour faire fonctionner une équipe qui travaille majoritairement en mode “agence” (ou en mode **delivery team** selon les termes utilisés par Marty Cagan).

Pour une entreprise Produit, célébrer la fin du projet X alors que l’objectif business sous-jacent n’est pas rempli n’a aucun sens.

Autant il est simple de “prévoir” que le projet de mise en conformité GDPR va nous mettre en conformité, autant prédire que le projet de feature Y va **effectivement**, augmenter les résultats financiers de Z% est une illusion.

A l’opposé, une entreprise Produit va constamment tester des hypothèses, appliquer, mesurer et itérer pour satisfaire un objectif donné.

Autrement dit, les entreprises Produit à succès se concentrent surtout sur la production de résultats versus la liste des fonctionnalités implémentées avec succès.

::tip
Attention, la différence entre une culture Produit et une culture projet est très forte. Pendant le recrutement, c’est une chose à garder en tête lorsque vous participez à l’embauche de personnes venant d’agences (conseil etc…). Vous pouvez bien sûr trouver d’excellentes personnes pour vous rejoindre, mais vous devez veiller à bien expliquer votre culture. Il y a un fort travail pédagogique à faire pour que ces personnes ne cherchent pas à tendre vers ce mode projet. La culture produit, qui mène à régulièrement tester et itérer, peut leur paraître trop chaotique et ils chercheront à apporter des méthodes “classiques” de gestion de projet pour apporter plus de prédictibilité.
::

Tout cela nous amène à parler de l’un des outils les plus clivants et qui focalise tous les conflits : la **Roadmap**.

## La roadmap, cristallisation des différences entre Produit et Projet

La feuille de route en bon français, est un outil de communication destiné à montrer la stratégie mise en place.

Beaucoup d’équipes utilisent pour cela une représentation sous forme de longue liste de fonctionnalités avec leurs dates de réalisation sur un axe horizontal.

::image
![Timeline traditionnelle avec une liste de dates associées à des fonctionnalités](/images/roadmap-timeline.jpg)
::

C’est l’outil parfait pour les équipes orientées projets, mais c’est très loin de ce qu’utilisent les meilleures équipes Produit.

Comme dit plus haut, c’est très présomptueux de penser prévoir les impacts sur les revenus à partir d’une liste de fonctionnalités annuelles et cela enlève toute possibilité à l’équipe produit de maximiser son impact.

C’est pourquoi il y a d’autres approches, notamment [celle décrite par Janna Bastow](https://twitter.com/simplybastow/status/1168531672335343616) qui propose de le remplacer par des listes d’objectifs (OKR ou autre), eux-mêmes compartimenté en trois horizons de temps : [next, now, later](https://www.prodpad.com/blog/invented-now-next-later-roadmap/)


::image
![Exemple de roadmap now next later, issu du blog de Janna Bastow](/images/nownextlater.jpg)
::
Exemple issu du blog de Janna Bastow

Janna Bastow, comme [Marty Cagan dans cette vidéo](https://www.youtube.com/watch?v=sgRYEVRD_4w), insiste sur le fait qu’une roadmap reste nécessaire et est un indispensable outil de communication qu’il faut construire. C’est la matérialisation de la stratégie produit. Cependant, cela ne doit pas être une liste de features avec des dates de releases, mais une liste d’objectifs, avec des horizons de temps.

Pour anticiper la question, oui il est possible d’avoir un objectif dans Later sur lequel on a déjà raccroché un ensemble d’initiatives. C’est un extrait de votre “[Arbre d’opportunité](https://www.producttalk.org/opportunity-solution-tree/)”.

Exemple :

* Objectif : Augmenter l’acquisition d’utilisateurs de 20% en s’appuyant sur la base existante par viralité
* initiatives :
    * développer un programme de referal
    * faire des partenariats avec des influenceurs sur les réseaux sociaux
    * développer des programmes d’affiliation

Mais à la différence d’une roadmap qui listerait ces features, ces initiatives “Later” peuvent être modifiées, supprimées, d’autres peuvent être ajoutées pour remplir le même objectif.

L’objectif lui-même sera peut-être dépriorisé dans 12 mois.

Si vous êtes en “[**continuous discovery**](https://www.amazon.com/Continuous-Discovery-Habits-Discover-Products/dp/1736633309?)”, vous allez tester des hypothèses pendant les prochains mois pour valider la pertinence de tel ou tel objectif, et telle ou telle initiative.

Un Product Leader aura ici deux défis très importants à gérer :

* Il faut être en mesure de savoir détailler sa stratégie now next later en donnant des horizons de temps tout en évitant de s’engager sur une liste de fonctionnalités. C’est bien plus difficile qu’on ne le croit. Au sein d’une équipe Engineering et également à l’échelle de l’entreprise, il est plus facile de parler du futur lancement de la feature F que de remplir l’objectif O
* Certaines personnes dans votre entreprise vont parfois pousser pour avoir un engagement ferme sur des initiatives listées dans votre plan Now Next Later

Avoir une roadmap complètement construite sur des engagements fermes pour différents décideurs internes, c’est ce qui caractérise une feature team (à l’inverse d’une impact team). C’est limitant en termes d’impact, ça ne garantit pas un quelconque succès pour le business.

## Les dates sont-elles néfastes ?

Les équipes Produit qui ont le plus d'impact travaillent en continuous discovery et n'utilisent pas de roadmap à base de listes de features associées à des dates.

Mais est-ce qu'il faut en conclure que toutes les dates sont néfastes ?

Ce serait très caricatural d'aboutir à cette conclusion.

Déjà une stratégie Produit s'appuie sur des horizons de temps. Ces horizons de temps ont une temporalité définie par les impératifs business de l'entreprise.

Par exemple, résoudre le sujet de l'acquisition de nouveaux utilisateurs dans les 3 prochains mois peut être vital pour l'entreprise. Ici il y a bien une contrainte temporelle forte.  
En tant que Product Leader vous devez constamment être conscient de ces contraintes externes. Vous devez aller chercher cette information si elle n'est pas donnée pour comprendre les enjeux business de l'entreprise. 

Ensuite une initiative produit spécifique peut être liée à une stratégie plus globale. Lorsqu'on définit des objectifs (par exemple des OKR) au niveau d'une entreprise, on fait en sorte de coordonner un effort commun (sales, marketing, produit, support client etc...) dans une direction donnée et un horizon de temps donné. L'absence de temporalité, c'est l'absence de coordination.

La temporalité est une contrainte, et comme je le disais dans un précédent chapitre, les contraintes [sont bénéfiques pour stimuler l'innovation](https://eventuallycoding.com/2022/09/travailler-avec-contraintes).

Pour reprendre un extrait du livre Rework que je citais déjà dans ce billet


> Send people home at 5
>
> When people have something to do at home, they get down to business. They get their work done at the office because they have somewhere else to be. They find ways to be more efficient because they have to. They need to pick up the kids or get to choir practice. So they use their time wisely


Un horizon de temps, c’est la garantie qu’on sait poser des objectifs et trouver des solutions pour y parvenir dans un temps compatible avec le business de l’entreprise et la santé de l’équipe.

Pour être plus concret, penser qu’utiliser un tableau kanban et prioriser au fil de l’eau est une méthode de gestion de produit efficace est sans doute l’une des erreurs les plus communes que je peux observer. C’est un très bon outil de gestion de projet, mais à aucun moment un outil de gestion de produit.


## Et les estimations ?

Comme vu plus haut, savoir précisément le temps à passer sur un futur développement coûte très cher. En caricaturant, ce n’est possible qu’en réalisant ce développement “à blanc” pour ensuite le refaire.

L’exercice est donc réalisable, mais à un coût élevé. **C’est ce coût que l’on va essayer de limiter** avec les points suivants.

::tip
Attention, il y a une relation directe entre les raccourcis pris pour faire cette prédiction et la qualité de celle-ci. La question étant, **quelle est la marge d’erreur que vous acceptez d’avoir** ?
::


### Now, Next, Later

Le framework “Now, Next, Later” que nous avons vu plus haut permet de regrouper les opportunités, à explorer selon 3 grands ensembles :

* now : ce qui est actuellement en cours
* next : ce que l’on prévoit de faire juste après
* later : ce qui <u>pourrait</u> être fait par la suite

Et ce que nous n’allons certainement pas faire c’est tenter de définir chaque item à moyen et long terme dans le détail pour estimer le temps à passer dessus.

L’objectif, c’est de ne détailler précisément que ce qui est proche dans le temps. La technologie peut changer, les objectifs peuvent être redéfinis. Définir exactement le temps passé dans 12 mois sur un objectif X n’a aucun sens et sera certainement du temps perdu.

Dans “Now”, à l’inverse, on aura travaillé sur les maquettes, les éventuels prototypes, la définition des flux.


::image
![Niveau de définition en fonction de court terme ou long terme](/images/timehorizons.jpg)
::
Issu du blog de Janna Bastow

### Trouver des proxy

Les estimations sont un sujet sensible qui ne fait pas l’unanimité. Là-dessus, je ne suis pas sûr de pouvoir affirmer que l'ensemble des équipes efficaces utilisent telle ou telle approche. Pour ma part je suis plutôt proche du mouvement noestimates dans le sens où je ne fais aucune séance de poker planning pour dimensionner le travail à faire à la tâche près. 

Pour autant, cette approche est souvent associée à Kanban. Et comme je l'indiquais plus haut, c'est une méthode de gestion de projet, pas de gestion de produit.
Prioriser, anticiper, planifier reste nécessaire, sans pour autant devoir passer 4h de sprint planning toutes les deux semaines !! _(Oui, j'ai vécu ça déjà)_ 

J’utilise donc trois méthodes :
* je reste à la maille la plus haute, user story par exemple. Il n'y a aucun intérêt à estimer plus finement que ça.
* je cherche un proxy me permettant de comparer un élément avec un autre
* je me constitue un référentiel de comparaison

Par exemple, je peux estimer que la complexité d’une tâche A est équivalente à celle d’une tâche B que j’ai réalisée dans le passé.

Ou alors, lorsque je modifie un composant pour une amélioration technologique, je peux regarder la taille de ce composant et le comparer avec un composant de même taille.

Cette méthode a bien sûr des limitations :

* Il faut avoir déjà réalisé des chantiers similaires pour pouvoir utiliser ces comparaisons. Mais on peut se reposer sur des comparaisons faites dans une autre entreprise
* le proxy sera toujours imparfait et on aura donc une marge d’erreur plus ou moins importante

Je parlais de découpage plus haut. Ce découpage va être influencé par ma méthode de travail.

Si la fonctionnalité A peut être découpée en user stories B, C et D. Je ferais en sorte de découper ces user stories de façon à ce qu’elles aient une complexité relativement proche et donc prendre à priori le même temps.

Dans Now, je vais donc avoir un découpage fin. Ce ne sera pas le cas dans Next et Later. 

Le temps total est la somme du nombre de User Stories multiplié par le temps moyen sur une user story. Et tant pis si à la maille d'une user story c'est faux. Ce qui m'intéresse, c'est d'avoir une estimation globale.

Dans Next et Later, je ne ferais pas ce découpage ou bien très grossier. Mais ce sera suffisant pour les comparer avec d’autres réalisations faites dans le passé, par exemple sur la complexité perçue.

### Estimer la complexité est surtout un moyen de clarifier

Si je ne préconise pas de perdre son temps sur des estimations précises, je considère qu’ouvrir le débat sur la complexité d’une initiative est nécessaire. Tout Product leaders a connu ces moments où deux personnes très seniors ont des estimations de temps radicalement différentes pour une initiative donnée.

En discutant, ces deux personnes finissent par comprendre qu’il s’agit d’une différence de compréhension du problème initial.

### Stabilité et dépendances

Lorsqu’une équipe reste stable dans le temps, elle bénéficie d’une meilleure cohésion, peut engager des chantiers d’amélioration continue et acquiert une meilleure connaissance du produit. Et pour toutes ces raisons, l’équipe sera aussi plus précise sur sa capacité à comparer et donc estimer le travail à faire.

Concernant les dépendances, plus elles sont nombreuses, plus le temps passé sur une tâche peut varier de façon importante. Une dépendance c’est par exemple le fait de s’appuyer sur une autre équipe pour travailler sur un objectif.

C’est pourquoi on essaiera au maximum de travailler avec une équipe pluridisciplinaire pour ne pas dépendre d’une autre équipe.

Exit les équipes front et les équipes back par exemple. Ou les équipes constituées par projet

Par contre, et c’est provocateur volontairement, n’ayez pas peur des silos.

Les silos permettent aux équipes d’être rapides. La plus grande difficulté, c’est de construire ces silos pour leur permettre d’être autonome, d'où la pluridisciplinarité mentionnée ci-dessus.

La seconde difficulté, c’est d’être en mesure de leur fournir le contexte nécessaire [à un bon alignement](https://eventuallycoding.com/2023/05/alignment-autonomy-context), mais ce n’est pas le sujet de ce chapitre.


## Questions

Avez-vous une roadmap qui reflète votre stratégie ?

Quelle forme a votre roadmap ? 

Est-ce que vous faites des séances d’estimations à la tâche pour chaque sprint ?

Si oui, quel est le temps passé sur l’exercice versus le temps du sprint et trouvez-vous que cela apporte de la valeur ?


## Ressources

* [Impact teams vs feature teams](https://www.svpg.com/product-vs-feature-teams/)
* [Le rapport du standish group sur les échecs de projet](https://brainhub.eu/library/reasons-for-it-project-failure)
* [Les roadmaps now next later](https://www.prodpad.com/blog/invented-now-next-later-roadmap/)
* Janna Bastow [on roadmap](https://twitter.com/simplybastow/status/1168531672335343616) and [the follow up blog post](https://www.mindtheproduct.com/free-your-product-roadmap-and-ditch-the-timeline/)
* [Marty Cagan on roadmap](https://www.youtube.com/watch?v=sgRYEVRD_4w)

::tip
Ce billet de blog fait partie du livre [Impactful Software Engineering](/2023/02/impactful-software-engineering).  
N'hésitez pas à lire les autres chapitres.
::
