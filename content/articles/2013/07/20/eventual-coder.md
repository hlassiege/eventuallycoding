---
id: "866"
title: "Eventual Coder"
description: "Ca y est, je crois que je suis enfin devenu un Eventual Coder. Vous connaissez les eventual coders ? Non ce ne sont pas des gens qui éventuellement po..."
date: "2013-07-20"
categories: 
  - "waza"
img: ""
cover: "cover1.jpg"
---

Ca y est, je crois que je suis enfin devenu un Eventual Coder. Vous connaissez les eventual coders ? Non ce ne sont pas des gens qui éventuellement pourraient coder, gare aux faux amis. Il s’agit de ceux qui finissent par coder, à un moment ou un autre, ce sont les gens qui vont mettre en oeuvre les idées.

Ca fait depuis quelques temps déjà qu’on vous bassine avec l’[eventual consistency](https://en.wikipedia.org/wiki/Eventual_consistency) de certaines bases NoSql. Pour rappel, les bases relationnelles classiques vous garantissent la cohérence de vos données, via les propriétés [ACID](http://fr.wikipedia.org/wiki/Propri%C3%A9t%C3%A9s_ACID), c’est à dire qu’une donnée est vue à l’identique par tous les observateurs de votre système à un instant t.

A l’inverse, certaines bases NoSql ne vous garantissent qu’une eventual consistency. Vos données finiront par être cohérentes mais ne le sont pas obligatoirement à un instant t. C’est a dire qu’une donnée entrée dans le système peut être lu avec son ancienne valeur juste après par un autre observateur.

Mais stop, même si c’est très intéressant, c’est pas le sujet de ce billet.

 

Eventually coding c’est donc le fait de finir par coder un jour :) Ca semble idiot comme idée hein ? Attendez je développe.

 

Regardez autour de vous, des gens qui ont des idées il y en a partout, des bonnes, des mauvaises, des brillantes parfois. Mais avoir une idée ne suffit pas. Ce qui compte ce n’est pas l’idée, c’est la réalisation.

C’est d’ailleurs amusant de constater que ceux qui vénèrent à ce point les idées tentent à tout prix de les protéger. Si vous suivez un peu le monde de l’entreprenariat, l’un des conseils qui revient souvent c’est :

Ne cherchez pas à surprotéger votre idée, évitez la culture du secret, les NDA etc... Une idée n’est qu’une idée, au contraire elle s’améliorera avec les échanges que vous pourriez avoir avec d’autres. Cachez là trop longtemps, elle deviendra obsolète. Ne partagez pas votre vision à vos partenaires et vous accoucherez d’un bébé mutant tout moche.

 

Je vous garantis que des gens qui ont eu l’idée du boncoin sont légions, mais il n’y a qu’un seul site leboncoin.fr Il y a ceux qui ont eu l’idée et ceux qui l’ont amené au bout.

 

L’eventual coder c’est donc déjà une personne qui va réaliser des idées, premier point. A un moment ou un autre, il se mettra à coder.

 

Mais à l’inverse de l’immediate coder, il a pris son temps. Pourquoi ?

Combien de développeurs ont une TODO liste longue comme le bras dont aucune tâche ne se termine jamais ?

Etre capable de s’organiser, de prioriser et de pouvoir dire fièrement : **“done”**, c’est l’un des privilèges de l’eventual coder.

Mais plus important que de voir ce qu’il y a à faire, l’eventual coder est capable de voir **ce qu’il n’y a pas à faire**.

Pouvoir dire _“Ce code est inutile, cette fonctionnalité est inutile, ce projet est inutile”_, croyez-moi, ça n’a pas de prix. Pour le coup on peut jouer avec le faux ami de “eventually”, l’eventual coder va “éventuellement coder” si c’est nécessaire.

Enfin dernier point l’eventual coder est un pragmatique, il sait évaluer différentes options et peser le pour et le contre. Sa réflexion le pousse à accepter parfois des compromis. Évidemment il sait aussi qu’il emprunte sur le futur et garde à l’esprit les options qui lui permettront de rembourser cette dette plus tard

 

Justement, à quoi s’oppose l’Eventual Coder ?

 

Vu que c’est une notion purement inventé, jouons le jeu jusqu’au bout. Je me suis dit que l’Eventual Coder pouvait s’opposer au Never Coder, celui qui bouillone d’idée mais ne les met jamais en oeuvre. Le Never Coder a une faculté d’abstraction supérieure puisqu’il passe moins de temps la tête dans le guidon à réaliser. Et puis vient l’Immediate coder, celui qui plonge sur le travail dès qu’il arrive. Un codeur efficace, bosseur mais qui manque parfois d’un peu de recul, d’où un côté un peu brouillon.

 

_(Si j’avais poursuivi mon parallèle sur les modèles de cohérence, l’[immediate consistency](https://en.wikipedia.org/wiki/Immediate_consistency) consiste à garantir qu’une donnée qui entre dans le système est tout de suite à jour dans tout ces référentiels pour tous les observateurs. Cela implique des mécanismes de synchronisation lourds (2 phase commit ca vous parle ?)._

_L’immediate coder aurait donc été celui qui code à partir du moment où toutes les conditions seront réunies, besoin à jour, technos matures, marché réceptif etc... Evidemment comme tout système qui repose sur l’immediate consistency, le prix à payer c’est la disponibilité. L’immediate coder est en perpétuelle attente (sans parler des risques d’interblocage) mais il est très cohérent dans ses méthodes de travail. Finalement j’ai préféré garder le No Coder et l’Immediate Coder dans une définition plus humaine comme vu dans le paragraphe précédent)_

Mais figurez-vous que ces 3 profils font tous partie des gens que vous devez avoir dans votre équipe.

Trop d’idée tue l’idée, trop de code tue le code, trop de pragmatisme tue... presque tout le reste.

> Le compromis c’est bien, en abusez c’est mal

Dans l’idéal une bonne équipe, c’est une équipe variée, pas une équipe de clone.

 

Pour illustrer cette complémentarité, je vais faire un parallèle sportif, désolé pour les anti-foot, essayez de faire abstraction et remplacez par votre sport et vos stars préférés. Disons que vous ne connaissiez pas le foot, dites vous qu’une équipe est constituée de plusieurs personnes organisé par lignes, le goal (une équipe de 1 personne !), les défenseurs, les milieux, les attaquants.

Dans cette ligne de milieux, vous avez des personnes à caractères plus offensives et, vous l’aurez deviné, des plus défensives.

Traditionnellement les personnes les plus créatives avec un ballon (oui je sais ça parait fou mais on parle de créativité...) se retrouvent vers l’avant, soit sur la ligne des attaquants, soit parmi la ligne de milieux.

Certains font donc ce raccourci bien rapide : “donc ce sont les meilleurs joueurs qui jouent devant !”

Non ! Un joueur n’est pas le meilleur parce qu’il sait faire tel ou tel geste technique, tout comme un développeur n’est pas le meilleur parce qu’il connaît tel ou tel language/API/design/whatever mieux que les autres.

Un joueur tout comme un développeur travaille en équipe et c’est la complémentarité de tout ces talents qui font la qualité d’une équipe. Si vous constituez une équipe uniforme avec que des clones, certes bon, vous finirez par obtenir une équipe tout juste moyenne.

 

Bref, moi aussi désormais je peux dire, “I’m eventually coding”. Certes, pas avec la vista d’un codeur de génie. Je ne suis pas Zidane si on continue la comparaison sportive et j’imagine que je serais très déçu de mon score si je participais à un challenge comme [codestory](http://code-story.net/). Je fais partie des joueurs de champ qui ratissent, qui vont chercher les ballons, ceux qui savent consolider un édifice, communiquer, structurer/organiser le jeu. Mais “à la fin de l’envoi, je code !”

(Cf. Cyrano de Bergerac mais je suis sûr que vous aviez reconnu)

Tout ça aussi pour introduire le changement de nom de ce blog qui après s’être appelé hakanai.free.fr pendant 13 ans entame une nouvelle période ! (oui oui, 13 ans, mais avant ce site était un site de fansub, d’ou son nom un peu japonisant. Ce n’est un blog informatique que depuis 2007.)
