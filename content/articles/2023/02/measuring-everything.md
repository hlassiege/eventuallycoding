---
id: "13"
title: "Tout mesurer"
description: "Sans mesure, tout se fait à l'intuition. Et pourtant, la maturité de votre équipe Engineering repose sur sa capacité à prendre des décisions étayées par les données."
date: "2023-02-19"
tags:
- "impact"
- "senior"
- "measures"
cover: "opticien.jpg"

book: "impactfulSoftwareEngineering"

language: "fr"
alternates:
  - en: "https://eventuallycoding.com/en/2023/02/measuring-everything"
---
> You can't improve what you don't measure  
[Peter Drucker](https://en.wikipedia.org/wiki/Peter_Drucker)

Imaginez cette scène, un individu entre chez un opticien :

> * Bonjour, je pense être myope, je souhaite des lunettes pour traiter ma myopie 
> * Bien sûr, asseyez-vous, je pense vous proposer des lunettes avec une correction de 3 à gauche et 2 à droite

C'est absurde et vous n'avez sans doute jamais assisté à cela.

Et pourtant, en développement logiciel, combien de fois avez-vous vu les situations suivantes :

* un refactoring majeur sans aucune mesure d'impact
* un travail massif sur l'élasticité d'une infra sans capacity planning
* des micro optimisations de performance sans avoir mesuré ladite performance au préalable


D'ailleurs, si vous avez des exemples à partager, n'hésitez pas à répondre sur ce fil Twitter :

https://twitter.com/hugolassiege/status/1626880872363204609

## Intuition et expérience versus mesures

Ce sujet nécessite beaucoup de pincettes alors je vais essayer d'apporter le maximum de nuances.

Loin de moi l'idée de dire qu'il ne faut pas améliorer constamment le code. Vous ne devez pas avoir à remplir des dossiers de plusieurs pages pour les justifier. Et vous ne voulez pas tomber dans l'[analysis paralysis](https://en.wikipedia.org/wiki/Analysis_paralysis).
Pour tous les petits refactorings autour de la testabilité ou la lisibilité, la validation en Peer review est un mécanisme suffisant de validation dans bien des cas.

Je vais aussi exclure le cas des startups en amorçage. Je suis passé par cette étape. L'intuition joue énormément. La base de code est petite, le produit est encore assez simple pour l'appréhender dans son ensemble. A ce stade, ça passe où ça casse et de toute façon la vitesse d'exécution est primordiale et, comme nous le verrons plus loin, pour avoir une maturité sur la donnée suffisante il y a de l'investissement à faire.

Mais, à partir du moment où :
- les impacts sur la base de code commencent à être significatif, souvent quand l'équipe produit dépasse une certaine taille (>20?)
- qu'ils nécessitent plus d'une personne pour être traité
- qu'ils vont décaler largement le reste du travail en cours

Mesurer les choses va permettre de lever toute ambiguïté.

Mon point, c'est de dire que vous devez composer avec des ressources finies, notamment une : **le temps** (et l'argent qui est un résultat de vos choix d'investissement).
Quand vous le consommez, vous devez le faire en connaissance de cause et de préférence avec un objectif en tête. Vous devez savoir ce que vous sacrifiez, et pour faire ces choix, soit la somme de temps dépensé est négligeable, soit je vous conseille de rationaliser votre démarche. Et non, travailler le soir ou le week-end n'est pas une option viable. Vous devez avant tout chercher à être efficace.

Tiens, d'ailleurs, j'excluais plus haut les petits refactorings. Eh bien malgré tout, c'est un sujet intéressant. Livrons-nous à un petit exercice théorique.  
Quelle que soit la taille d'une entreprise, imaginez que vous avez un nombre fini de frappes sur le clavier disponible par semaine. Fixons ce chiffre arbitrairement à 10 000.
Si un refactoring mineur vous fait consommer 10 frappes, on peut se dire que c'est ok.
Mais si votre base de code est très large, il faut peut-être répliquer ce changement et cela peut coûter 1000 frappes, vous venez de consommer 10% de votre capital de frappe sur la semaine. Ce sera peut-être au détriment d'un autre refactoring qui avait plus d'impacts négatifs, ou d'un décalage sur un développement en cours.
Donc à un moment, vous devez faire un choix. J'ai un nombre de frappes limité, à quel endroit dois-je utiliser cette énergie ?
On parle de gain en lisibilité. Est-ce avéré ? Est-ce mesurable ? Par une mesure sur votre CI peut être ? Est-ce un bout de code régulièrement modifié ou autre contraire très stable. Il y a un gain en consommations de ressources ? C'est mesurable ?

## Sans mesures, pas d'alignement

Mais surtout, si vous n'avez pas de mesures, même le succès est non démontrable.
Sans mesures avant/après, rien ne dit qu'une action a été bénéfique, et si elle l'a été, de quel ordre de grandeur.

Or, votre métier comporte une part importante de discussion avec de nombreuses personnes qui ont toutes pour objectif que l'entreprise utilise au mieux ces ressources pour le bénéfice de ces clients, et in fine son propre bénéfice.

Votre rôle en tant que Senior Software engineer c'est d'être présent dans ces discussions, car l'Engineering a un rôle majeur à jouer dans la réussite de l'entreprise. Une partie de votre métier, c'est de savoir vulgariser, défendre des investissements (en temps, en argent etc…). Oui, même quand on n'est pas manager…

Sans mesures, vous ne pouvez pas fixer d'objectifs.  
Sans objectifs, vous ne pouvez pas fixer de critères de succès.  
Sans objectifs, vous ne pouvez pas créer d'alignement.  
Sans alignement il n'y a pas d'impact.

Une équipe produit qui ne produit pas d'impact est moins écoutée, et finit par être en danger de sous-investissement. Et en vrai, tout le monde finit perdant dans l'histoire.

## Notre métier est un métier scientifique
Notre métier est un métier scientifique et l'un des principaux piliers de la culture scientifique, c'est la mesure.

Cette mesure s'inscrit dans une démarche scientifique.

On entend souvent parler de 10x developer et j'ai personnellement travaillé avec des personnes qui effectivement sont terriblement plus productives que d'autres.
Ce n'est pas leur vitesse de frappe sur le clavier qui les rends si productives, **c'est leur capacité à appliquer une démarche systématique pour résoudre un problème**.  
Et ça s'apprend.

L'approche peut se résumer comme suit :
* écouter, observer, mesurer
* formuler des hypothèses
* fixer des objectifs et aligner l'équipe autour de ces objectifs
* tester
* recommencer depuis la première étape


Exemple :

* Ecouter : Des utilisateurs se plaignent de la lenteur d'une page de paiement qui mettrait du temps à s'afficher
* Mesurer : Les outils de mesures montrent qu'effectivement
    * une part importante des utilisateurs dépassent les 10 secondes d'affichages, tandis que d'autres affichent la page en moins d'une seconde
    * ces utilisateurs finissent par abandonner leur achat ce qui se traduit par une perte de xk€ potentiels
* Hypothèse : une ressource est sous-dimensionnée. La performance serait ok sous une certaine charge mais s'écroulerait à partir d'un certain seuil
* Objectif : Viser un P95 (95% des utilisateurs) en dessous de la seconde d'affichage et regagner yk€ de CA
* Action :
    * Mesurer l'ensemble de la chaîne via des flame graphs avec des bots pour simuler un trafic croissant pour identifier les différents blocages
    * réaliser les actions correctrices nécessaires à corriger les plus gros points de blocages qui causent 95% des ralentissements
* tester, valider en situation réelle


A chaque fois qu'on aborde un sujet, même quand c'est un cas inconnu, une section de l'application qu'on ne connaît pas, une techno qu'on ne connait pas etc.. Si on applique une démarche méthodique, on finit par y arriver.

Bien sûr, la vitesse de résolution va dépendre de votre connaissance initiale et de votre savoir faire. Le fait de maîtriser certains outils de diagnostique ou de devoir vous faire assister va vous ralentir ou vous accélérer, mais c'est la méthode qui doit vous guider et cette méthode s'appuie sur ces trois piliers :
* observations/mesures
* hypothèses
* validation/invalidation

## La donnée, un critère de maturité d'équipe engineering

Je vous invite à lire ce thread twitter de Mary, SRE chez Microsoft :

https://twitter.com/PykPyky/status/1605205574957907968

La Data est clairement ici utilisée de façon **systématique** pour travailler. Ce n'est pas juste anecdotique, c'est un critère de maturité de l'équipe engineering, et de l'entreprise sans doute.

Et ça ne s'improvise pas. Avoir la bonne donnée sous la main au bon moment nécessite de la préparation. Pouvoir la croiser avec d'autres données pour établir des corrélations nécessite une infrastructure de collectes et de visualisation données.

Chez Malt nous avons fait beaucoup d'efforts pour que la Data soit disponible, corrélable et accessible simplement.

Par exemple :
* notre documentation interne utilise un outil d'analytique pour comprendre quelles sont les pages les plus lues, les moins lues
* nous utilisons datadog pour agréger toutes les données de monitoring, performance, alerting
* nous stockons tous les évènements métiers dans BigQuery pour reconstruire ensuite des vues analytiques et juger du succès de notre produit

Et si je vous parle de tout ça, c'est parce que c'est votre rôle de tech lead de faire grandir la maturité de votre entreprise sur le sujet.  
C'est votre responsabilité d'avoir une vision fine du coût de votre produit et de son ROI. C'est votre capacité à comprendre les enjeux financiers qui va vous permettre aussi de faire des recommandations et de faire des choix d'investissements sur du Buy or Build.

## Data maturity model

Une fois qu'on a dit qu'il fallait systématiser l'accès à la donnée et son usage, c'est bien, mais je vous propose de découvrir un modèle d'évaluation de maturité pour mieux comprendre où vous en êtes, et où vous pourriez aller.

Des modèles il en existe plusieurs, IBM, Gartner ou Snowplow par exemple. Ici je vous propose de voir celui de [Gartner](https://www.ovaledge.com/blog/data-governance-maturity-model), mais que nous allons adapter ici pour l'engineering et le produit.

### Niveau 0 : Unaware.

C'est la pire situation. Aucune donnée n'est utilisée. Côté engineering il n'existe pas de mécanisme de collectes (monitoring, APM), et forcément pas de mécanisme d'agrégation et consolidation (observabilité). Aucun outillage spécifique n'est utilisé pour les tests de performances. Aucune métrique de mesure de la performance de l'engineering n'est suivie, DORA/accelerate etc…


Côté produit idem, le produit n'est pas instrumenté (tracking analytics). Les objectifs sont tous qualitatifs, on vise à sortir des fonctionnalités mais sans avoir d'éléments de mesures sur leur usage. Aucune KPI clé n'est suivie (funnel de conversion, churn, activation etc…)

Les actions ici sont assez évidentes, il faut former toute l'équipe à l'importance de la donnée et mettre en place les outils de collectes de mesures.

### Niveau 1: Aware.

A cette étape, certains outils de collecte existent mais sans avoir de personnes dont c'est la responsabilité pour les surveiller. La qualité de la donnée est donc discutable.
On peut par exemple collecter des logs mais sans avoir d'agrégation dans un système distribué, ou ne pas avoir de politique claire de niveau de logs et donc avoir beaucoup de données non exploitables.
Il peut y avoir plusieurs sources de données, parfois contradictoires.

Sporadiquement certaines données sont utilisées malgré tout.
Côté produit c'est identique, le tracking peut être en place mais non suivi, aucun plan de tracking, aucun funnel réellement monitoré.

L'action ici c'est de commencer à nommer des responsables (ça peut être des équipes) pour améliorer la qualité des données. Une stratégie globale doit commencer à être réfléchie.
Exemple :
* c'est quoi les niveaux de logs applicatifs, pour quel type d'actions, quel détails
* comment traiter les logs dans un système distribuée, comment mettre en place une corrélation entre une requête web, les logs applicatifs et logs DB ou systèmes
* comment suivre un funnel avec un parcours utilisateur, comment corréler le web analytique et les données métiers


### Niveau 2 : Reactive

La donnée est ici utilisée de façon plus régulière mais surtout en réaction.
Des stratégies ont été mises en place mais l'adoption reste légère.
L'alerting n'est toujours pas en place ou efficace.
* il remonte des faux positifs (exemple sonar mal configuré)
* ou trop d'alertes, qui finissent par être masqué pour ne plus déranger

Côté produit, on monitore les principales KPI et on sait où aller chercher l'info. Malgré tout, on ne suit pas l'information régulièrement, on change souvent de définition. La qualité reste perfectible.
Il y a malgré tout quelques équipes qui commencent à avoir un usage plus important et qui partagent cette donnée.


### Niveau 3 : Proactive

A cette étape, il y a des responsables clairs et actifs sur les outils de collectes et les sources de données.
Les stratégies sont en place (niveaux de logs, niveaux d'alertes, SLA/SLO/SLI)
Si on entame des chantiers de refactoring, d'amélioration de performance, de scalabilité, la donnée est centrale dans la prise de décision.

Côté produit, chaque nouveau projet pense à la mise en place de métriques de succès dès le démarrage, cela fait partie des conditions de démarrage.
Par contre cela reste interne aux équipes engineering et product, ces données ne sont pas encore utilisées à grande échelle dans l'entreprise. Voire même d'autres métriques sont utilisées dans d'autres départements pour représenter la même chose. Ce sera la prochaine étape.

### Niveau 4: Managed

Cette fois, l'importance de la donnée et sa qualité est reconnue dans toute l'entreprise mais surtout elle est considérée comme critique.

Les métriques engineering sont communiquées et connues au niveau le plus haut (comité exécutifs). Les post mortems sont partagés en dehors de l'équipe engineering lors d'incidents.
On sait relier les coûts d'opérations du produit avec le business (coût nominal d'un user en termes de ressources machines par exemple, coût nominal d'un user sur sa durée de vie etc…) et c'est utilisé dans les exercices budgétaires pour calculer des projections de croissance.
On utilise des métriques reconnues comme best practices sur le marché : DORA, temps de cycle etc…

Au niveau produit de la même façon, les données sont communiquées à toute l'entreprise. Les objectifs de l'équipe produit sont matérialisés par des objectifs chiffrés (augmentation de la conversion, diminution du churn etc…).

### Niveau 5 : Effective


La Data est utilisée de façon globale, dans l'entreprise, la qualité est contrôlée, la gouvernance est formalisée.
La donnée est utilisée à l'extérieur. Elle peut donner un avantage compétitif dans certains cas.

Au niveau engineering, on publie des engagements de service (SLA publics), on peut mettre à disposition des pages de status détaillées avec le niveau de stabilité du produit par brique logicielle, par exemple : défaillance en cours sur le paiement par CB, statut ok sur le moteur de recherche etc… On peut préciser des temps de rétablissements ou publier des posts mortems.

D'un point de vue produit, c'est lié au métier de l'entreprise. Par exemple, la publication de données en open Data peut procurer un avantage à la marque.

## Un refactoring à grande échelle sur Malt

Prenons un exemple concret pour illustrer comment utiliser la mesure et une démarche scientifique sur un sujet classique : l'architecture fonctionnelle.

**Contexte** : Malt en 2022
Scale-up, 600 personnes, 100 à l'engineering

Acteur principal : Nicolas Grisey Demengel.

**Observation** :

Nicolas travaillait sur un sujet qui lui avait été remonté, la lenteur de la CI (continuous integration).
L'opportunité est importante, il s'agit de toute la chaîne de construction de nos applications. Cela ralentit les temps de feedback et plus globalement tout le cycle de dev.
De plus, nous payons la CI par les ressources consommées. Bref le sujet est critique.

Pour donner une petite description de contexte, chez Malt il y a plusieurs équipes (squads) qui sont responsables en théorie d'une ou plusieurs applications. L'équipe A s'occupe de l'application A, l'équipe B de l'application B etc…

Nicolas observe plusieurs choses :
* si la CI est longue, ce n'est pas une question de lenteur de build, c'est une question de nombre de builds en parallèle
* Lorsqu'une équipe A livre son application, elle livre aussi très souvent d'autres applications, B, C, D etc…
* Si l'équipe A relivre d'autres applications c'est parce que les applications partagent souvent des librairies communes qu'il faut modifier et qui sont utilisées dans d'autres applications. Ces modifications entraînent le rebuild des autres applications, et parfois il faut aussi les modifier en fonction des changements sur la librairie commune.
* Les équipes ne sont pas sereines, car elles relivrent des applications dont elles ne sont pas responsables et craignent des régressions

**Hypothèse** :
Il y a des problèmes de couplage. Les librairies communes devraient être limitées. L'architecture fonctionnelle pose souci.

Sauf que, ce n'est pas suffisant pour attaquer le sujet. Il y a 2.3M de lignes de code, commencer par n'importe où serait sans doute inefficace. Et comment considérer que le sujet est résolu ? Résoudre totalement les sujets d'architecture, ce serait un chantier de plusieurs années.

**Mesures** :

Pour déterminer la meilleure façon de démarrer, et pour prouver l'hypothèse, Nicolas a mis en place un ensemble de mesures. Si je résume, il a observé :
* le nombre d'applications déployé par un changement sur une librairie donnée
* la fréquence de modification d'une librairie donnée

A partir de là, il a pu déterminer les “hots spots”, les librairies entraînant le plus de rebuilds, et avec les plus grandes fréquences de modification.

Ces hots spots, ce sont les endroits par lesquels commencer.

Le détail exact du travail réalisé, les graphes etc… [sont disponibles sur le blog de Malt Engineering](https://blog.malt.engineering/your-version-control-system-contains-invaluable-insights-for-your-engineering-teams-part-i-c90b237fe7b4)


**Conclusion**

Le fait d'avoir réalisé ces mesures a permis :
* de prioriser le travail à accomplir
* de fixer des objectifs
* d'aligner plusieurs équipes sur la démarche

Cette démarche s'appuie sur une méthodologie simple : observation, mesures, hypothèses, re-mesures, objectifs, suivi.


La fixation d'objectifs dans le cas présent est déterminante. Sans objectif chiffré, à quel moment on s'arrête dans un projet de “découplage” ? Ici Nicolas a pu fixer des seuils (nombre de builds maximum, taux d'ownership par application etc…) auxquels il fallait agir, mais en dessous desquels, il n'y avait plus d'urgences.

Et ça, c'est c'est une démarche d'équipe Engineering mature.

## Questions pour vous ?

Et vous, sur vos projets, utilisez-vous des objectifs quantitatifs ? Sinon, vous pourriez en rajouter ?

Quel serait votre niveau de maturité sur le modèle ci-dessus ?

Connaissez-vous le coût d'un utilisateur et l'évolution de ce coût sur les 2 dernières années ?

Est-ce que vos métriques Engineering sont connus en dehors de votre équipe ?


## Resources

https://www.softkraft.co/what-is-data-maturity-and-how-to-climb-the-data-maturity-scale/#the-gartner-data-maturity-model

https://www.ovaledge.com/blog/data-governance-maturity-model


https://blog.malt.engineering/your-version-control-system-contains-invaluable-insights-for-your-engineering-teams-part-iii-238a7296aa36

https://blog.malt.engineering/your-version-control-system-contains-invaluable-insights-for-your-engineering-teams-part-ii-258a72b6eb65

https://blog.malt.engineering/your-version-control-system-contains-invaluable-insights-for-your-engineering-teams-part-i-c90b237fe7b4 
