---
id: "171"
title: "Agile Tour 2010"
description: "Voilà, c'est fait, j'ai participé à l'Agile Tour 2010. Je suis arrivé vers 8h30 vers Denfert Rochereau pour assister à la présentation et au mot des s..."
date: "2010-11-04"
categories: 
  - "waza"
tags: 
  - "agile"
img: ""
cover: "cover6.jpg"
---

Voilà, c'est fait, j'ai participé à l'Agile Tour 2010. Je suis arrivé vers 8h30 vers Denfert Rochereau pour assister à la présentation et au mot des sponsors. La session était dirigé par Patrice Petit fondateur de l'Agile Tour. Bon ok, on apprend dans cette introduction que l'informatique est en cours de changer le monde actuel et que l'agile en y introduisant l'humain est en passe de révolutionner l'informatique. Un peu présomptueux peut-être, l'informatique n'a pas attendu l'agile pour parler de l'humain ^^ Enfin bref, début du marathon à 9h00.

## [La revue de code, c'est agile, c'est lean, c'est indispensable !](http://www.agiletour.org/fr/node/757)

[Lucian Precup](http://lucianprecup.com/)

Cette première session de la journée était très orienté pratique d'ingénierie et m'a bien plu. Lucian Precup nous a fait un retour d'expérience sur la revue de code, technique qu'il a utilisé de multiples façons et qu'il conseille de formaliser et d'outiller.

Il nous a d'abord rappelé les principaux objectifs de la revue :

- détection de bugs
- amélioration de la qualité (architecture, lisiblité etc...)
- passage de compétences

Il a ensuite balayé quelques idées reçues sur la revue de code :

- le temps de développement n'est pas plus long si l'on prend en compte la phase de correction après recette ou après retour des clients. Il a notamment rappelé, chiffre à l'appui, que le temps de correction d'un bug augmente avec le moment où il est détecté. Il faut donc prendre en compte le facteur temps et le facteur coût.

- mêmes les très bons développeurs peuvent bénéficier des revues de code car c'est finalement une forme de veille technologique (et puis personne n'est parfait)

- dans la même veine, la revue de code des seniors par des juniors a du sens selon lui, dans un souci de passage de compétences pour garantir que le code est une propriété commune

- la revue de code peut être faite par des non spécialistes de votre domaine. Un Javaiste peut en effet relire du code C# par exemple et proposer des solutions différentes.

Il nous a ensuite présenté les différentes formes de revues, par mail, par binome, avec des outils, avant ou après commit etc... Lucian a terminé en expliquant comment il utilise des outils pour le mettre en oeuvre en citant Eclipse, Mylyn, CVS et Bugzilla. Les patchs CVS sont attachés à Bugzilla directement depuis Eclipse par Mylyn puis récupérés par des personnes qui le relisent avant de commiter.

J'avais déjà utilisé la revue de code mais pas de façon aussi formel et sans poursuivre l'expérience. Cette présentation m'a donné envie de retenter à nouveau en formalisant et en outillant cette étape.

## [La maintenance m'a tuer,](http://www.agiletour.org/fr/node/767)

Nicolas Dasriaux

Changement complet par rapport à la précédente session, cette fois on ne discute plus pratiques d'ingénierie mais on revisite avec humour la notion de dette technique. Nicolas nous rappelle que 70% du cycle de vie d'une application se passe pendant la phase de maintenance, phase qui pourtant n'attire pas les foules.

Il revient sur les causes de ce désamour en trois étapes :

#### 1\. la maintenance c'est la mort

il revient sur les principales causes qui jouent sur la qualité d'une application

- le code spaguetti
- le syndrome du funambule (l'absence de harnais de test automatisés)
- le syndrome "temps moderne" qui pousse à la spécialisation des invidus et la mutualisation des compétences
- la paperasse

Il décrit ensuite comment ces syndromes s'alimentent entre eux :

- Le code spaguetti nécessite une documentation en béton pour le comprendre.
- L'absence de tests nécessite de patcher avec précaution, souvent de façon peu inélégante
- La spécialisation entraine la nécessité de documentations plétoriques par couches et ne favorise pas la vue d'ensemble

etc...

#### 2\. la maintenance c'est la vie

En rappelant que la phase de maintenance représente 70% du cycle de vie d'une application et que celle-ci évolue toujours, Nicolas nous fait envisager la maintenance sous un autre angle.

#### 3\. la maintenance est morte, vive la maintenance

Finalemement si la maintenance est ce qu'elle est, ne serait-ce pas à cause de la phase de développement initial ? Cette phase de développement souvent réalisé par une équipe différente et finalisé à l'arrache fait souvent l'impasse sur les tests automatisés. Organisés de façon traditionnelle elle entraine systématiquement une baisse de la qualité sitôt après avoir été produite. Une citation amusante "souvent on parle de réécriture/refonte sitôt la première version terminé".

En développant par cycle court, avec des mises en production plus fréquentes et un feedback régulier, la maintenance et la phase de développement initial ne pourrait-il pas être plus intégré ? C'est ce que propose Nicolas Dasriaux en proposant d'utiliser Scrum pour les phases actives de développement et Kanban pour les phases ne nécessitant que de la correction.

 

## [S'appuyer sur ses points forts et savoir s'entourer pour être agile](http://www.agiletour.org/fr/node/910)

Philippe Houssin et Ralph Hyppolyte

Cette troisième session fut sans doute la plus "à part" de la journée. Cette fois, pas de pratiques d'ingénierie, pas même d'informatique. Un petit mot sur les intervenants :

- Philippe Houssin, ex-formateur, skipper, pratiquants d'arts martiaux, praticien d'Action Types
- Ralph Hyppolite ex entraineur national de volley ball, formateur Insep, Coach sportif et l'un des fondateurs d'Action Types

Cette présentation orienté sciences humaines fait partie de ces présentations où vous n'êtes pas certain d'avoir tout saisi ou d'être capable de vous en resservir par la suite mais où vous avez passé un bon moment. Le discours m'a plu avec ces parralèles entre pratiques sportives et comportement en entreprise et l'on ressentait clairement l'expérience des présentateurs. Si au début la liaison avec l'agile n'était pas bien claire, on se rend vite compte que les valeurs pronées par Ralph et Philippe tournent autour de certains fondamentaux agile :

- un rythme soutenable à travers la nécessité d'alter périodes de récupération et périodes de forte activité
- l'acceptation du changement et du stress qui en résulte
- travailler avec des personnes motivés en valorisant leurs points forts et non en tentant de corriger leurs points faibles

 

## [Mon client n'est pas Agile, mon manager non plus, alors qu'est-ce que je fais là ?](http://www.agiletour.org/fr/node/627)

[Nicolas De Loof](http://blog.loof.fr/) Orange Business Services

Cette fois le sujet parle de transition aux méthodes agiles. Avec beaucoup d'humour Nicolas de Loof recense les bonnes et mauvaises pratiques et surtout les mauvaises à éviter pour tenter d'introduire des pratiques agiles dans un contexte vraiment pas adapté. Ici dans le cas d'une approche discrète Nicolas insiste sur une démarche pragmatique et centré sur les pratiques pouvant répondre à des problèmes concrets. Son conseil est simple, observez ce qui ne va pas et proposez des solutions issue des pratiques agiles mais sans tenter d'entrer en clash avec ce qui existe déjà et en étant discret sur l'agilité, il sera bien assez tôt lorsque l'entreprise sera assez mure pour cela.

J'ai beaucoup aimé les exemples de choses à ne pas faire et qui pour certains m'étaient assez familiers ^^

Tiens justement, j'avais justement discuté de ce sujet il y a pas longtemps [dans un précédent billet](index.php/fr/agile/72-transition-agile).

## [Transformation Agile à grande echelle](http://www.agiletour.org/fr/node/586)

[JC Grosjean](http://www.qualitystreet.fr/) et Gilles Mantel, Valtech

Toujours sur le sujet des transitions agiles, cette fois c'est du lourd, du très lourd. Un gros industriel du pneumatique (Dunlop ?) entame une transition agile avec l'aide de Valtech. La transition s'est effectué à travers 3 projets pilotes avec pour objectif de dégager un standard agile généralisable pour l'ensemble des projets. Les projets en place ont donc reçu des dérogations afin de pouvoir créer leur propre référentiel de pratiques. Valtech nous parle de quelques difficultés majeures qu'ils ont rencontré :

- les équipes non colocalisés pour lesquelles il a fallu casser la distance grâce notamment à la visio
- l'harmonisation des pratiques des différents coachs qui sont intervenus sur les projets
- une attention particulière pour que le discours soit bien clair sur les pratiques auprès des départements qualité qui supervisent les projets pilotes
- la difficulté de Valtech qui a du composer entre l'obligation de standardiser la pratique agile dans un grand groupe et l'esprit agile qui recommande d'adapter la pratique au contexte (et donc de ne pas la graver dans le marbre)

La présentation est malheureusement très courte (30 min) et très souvent interrompu par des questions du public. Dommage, avec un sujet pareil il y avait sans doute beaucoup à dire.

## [Travailler aux frontières](http://www.agiletour.org/fr/node/1004)

Bénédictes Taillebois, Astria - Frédéric Friess, Octo

Cette fois changement de contexte et de taille d'entreprise. Astria est un organisme de collecte du 1% logement qui se heurte aujourd'hui à des objectifs difficiles puisque le nombre de collecteurs 1% doit passer de 125 entreprises à 25 d'ici la fin de l'année. Si Astria a déjà une bonne culture agile avec notamment une très grosse partie de ces tests qui sont automatiques et un cycle de livraison assez court, c'est un autre challenge qui les occupe aujourd'hui dans un secteur loin des SI traditionnels. Les deux présentateurs évoquent la frontière qui sépare le monde réél auxquels ils ont été confrontés et la vision, leurs objectifs. C'est en stimulant le leadership, l'engagement et la collaboration qu'ils fondent leurs méthodes de travail. Un petit bémol sur la forme, même si le sujet était très intéressant j'avoue ne pas être fan des présentations à deux intervenants ou chacun a ses phrases sur chaque diapo, ça perd un peu de dynamisme.

 

## [L'Agile est-il insoutenable ?](http://www.agiletour.org/fr/node/765)

Jérôme Avoustin - Neoxia

Sur cette présentation je suis revenu sur l'un des thèmes que j'avais vu le matin : agilité et rythme soutenable (si si, rappelez vous la présentation avec nos deux compères ex-sportifs). Sauf que cette fois le sujet était abordé de façon plus conventionnelle. En fait ce thème est très intéressant et rarement abordée, ce qui est fort dommage. Les entreprises choisissent souvent de passer à l'agile en n'ayant retenu que certaines valeurs : les livraisons fréquentes, l'amélioration des performances, la tracabilité. Et puis elles aiment bien voir leurs équipes sprinter en continu. Les entreprises oublient donc bien souvent que le rythme doit être supportable et régulier et que ce principe fait partie des 12 principes agiles avec la même importance que les autres. Jérome revient ici sur les raisons qui selon lui expliquent pourquoi l'agilité peut être parfois mal vécue car source de stress :

- l’influence des leaders lors de la prise d’engagement,
- la surcharge de travail quotidienne,
- le manque de recul du product owner,
- et le mode de contractualisation de l’Agile, en cas d’externalisation.

Bon mais cette fois je ne vais pas trop en dévoiler car vous pouvez retrouver la présentation sur le blog de Neoxia :

- http://blog.neoxia.com/l-agile-est-il-insoutenable/

Et en complément je vous conseille de lire le billet de David Brocart sur le même thème :

- http://davidbrocard.org/node/92

 

## [Expérience Agile chez Sogeti : Cas concrets, problématiques et solutions mises en œuvre](http://www.agiletour.org/fr/node/921)

Nathalie Phung, Sogéti

Dernière présentation de la journée, j'avoue avoir commencé à ressentir la fatigue. Et j'ai du prendre moins de notes aussi, heureusement Nathalie m'a envoyé son support de présentation car le sujet m'intéressait beaucoup. Il s'agissait d'un retour d'expérience sur la collecte de besoins avec plusieurs contributeurs. Dans ce projet une équipe de POA (comprenez Product Owner Assistant) avait pour responsabilité de travailler sur la définition des user stories sous la direction d'un Product Owner. Nathalie nous a donc décrit comment cette équipe de PO s'est organisé en mode Scrum avec l'outil Mingle pour gérer un workflow autour du "murissement des user stories". Présentation très intéressante qui me servira peut-être à l'avenir.

# That's all folks !

Voilà, la dernière session s'est terminée avec 15 minutes de décalage sur l'horaire prévu du coup j'ai zappé le mot de la fin donné dans l'amphi Bruxelles. Tant pis, en tout cas ce fut très instructif. J'ai été satisfait de découvrir ces retours d'expériences et cela m'a conforté sur certains points. C'était aussi au passage la première conférence de ce type auquel j'assistais et cela fut très enrichissant. A refaire donc.
