---
id: "553"
title: "Etes-vous pompier pyromane ?"
description: "[![](/images/backdraft-150x150.jpg \"backdraft\")](http://hakanai.free.fr/wp-content/uploads/2012/05/backdraft.jpg)Vous connaissez la [pyromanie](http:/..."
date: "2012-05-21"
categories: 
  - "waza"
img: "backdraft-150x150.jpg"
cover: "cover6.jpg"
---

[![](/images/backdraft-150x150.jpg "backdraft")](http://hakanai.free.fr/wp-content/uploads/2012/05/backdraft.jpg)Vous connaissez la [pyromanie](http://fr.wikipedia.org/wiki/Pyromanie) ? Il s’agit d’une fascination pour le feu qui peut amener certains invidivus à déclencher eux-mêmes les incendies. Et vous avez peut-être entendu dire que parfois paradoxalement ce sont des pompiers qui allume ces feux, ce qui leur permet par la suite de se conduire en héros en allant les combattre.

Bon mais ça vous rappelle rien ? Bon sang mais c’est bien sûr, en informatique aussi les pompiers pyromanes existent !

[![](/images/girlepaule.png "girlepaule")](http://eventuallycoding.com/wp-content/uploads/2012/05/girlepaule.png)Peut être avez-vous déjà rencontré un de ces collègues qui aime travailler sous pression avec le service client derrière son épaule ?

Serait-ce un délire religieux qui pousserait certains d’entre nous à se faire passer pour le messie en récitant ce mantra ?

> _Un bug pour les stresser tous. Un bug pour les motiver. Un bug pour les rassembler tous et dans les bureaux les enchainer._

Quoi qu’il en soit vous commencez à mieux cerner le personnage dont je vous parle, ces fameux collègues qui font tout pour provoquer des situations dont eux seuls seront capable de sortir, et encore malheureusement pas toujours et en fait, pas tout seul non plus. Mais au moins ca aura mis en valeur à quel point c’était dur.

Bon mais c’est bien beau de les pointer du doigt. Et vous même, sauriez-vous détecter les symptômes de cette monomanie ? Je vous propose une petite liste d'indice permettant de déceler cette petite obsession :

- La javadoc de votre code est truffé de @author votreNom

Ok la je vais pas me faire des amis mais j’aime pas cette pratique. Inutile de vous répéter, l’info existe déjà dans le gestionnaire de source. On croirait voir des entêtes de fichiers COBOL quand les outils de gestion de source étaient pas foutus de faire des annotate sur le code. Franchement, sur la javadoc suivante, en dehors de tenter de se créer un emploi à vie en indiquant haut et fort partout dans le code que vous êtes le seul à pouvoir vous en occuper, quelle est la valeur ? _/\*\*_ _\* DOCUMENT ME_ _\* @ author bidule_ _\*/_

- Vous envoyez parfois des mails à minuit ou le week end

C’est une caractéristique forte du pyromane, l’absence de discrétion. En faisant cela vous revendiquez votre statut de héros, celui qui bosse plus que les autres. Vous êtes un alcoolique du travail et le mettez en avant. Sur le sujet je vous invite à lire [Rework](http://37signals.com/rework) des créateurs de 37 signals (oui les petits gars qui font basecamp et bossent sur ruby and rails, juste des inconnus quoi) sur [le chapitre des alcooliques du travail](http://www.scribd.com/doc/27521195/Rework-by-Jason-Fried-David-Heinemeier-Hansson-Excerpt-Fire-the-Workaholics). Je vous en restitue une partie mais le chapitre entier vaut le coup :

> _Le vrai héros ce n’est pas celui qui a gaspillé des heures de ses weekends pour résoudre une situation, non le vrai héros il est chez lui tous les soirs pour voir sa famille ou pour faire du sport car il sait faire les choses vite et bien._

- Vous êtes le seul qui puisse faire les astreintes dans l’équipe

La raison est simple, vous avez créé le système, vous êtes Néo et vous savez lire la matrice. En fait ça c’est ce que vous aimeriez que l’on croit. En réalité vous êtes le seul à vous y retrouver dans ce gros blob de code qu’on appelle poliment une application et vous connaissez chaque bug qui fait que ça marche. Vous n’avez peut être pas cherché cette situation mais si vous ne voulez pas finir pieds et poings liés toute votre vie à ce projet, il va falloir songer à diffuser la connaissance au plus vite.

- Vous êtes seul à décider du design, d’une architecture ou d’un ajout de frameworks

Ca rejoint le point précédent. En fait ces deux items peuvent même s’auto alimenter. Vous êtes le seul à faire les astreintes car vous êtes le seul à connaitre le système. Vous imposez tous les choix de design car vous allez les supporter en prod. Il est temps de briser ce cercle. Et ne venez pas dire que vous êtes le seul qui puisse comprendre ce que vous faites. Même dans la plus petite des équipes il doit bien y avoir un DBA, une personne du support client ou de la QA qui traine dans un couloir pour vous challenger.

- On vous a filé un téléphone portable d’astreinte

Officiellement c’est un avantage société. Officieusement c’est une menotte attaché à votre poignet pour que vous puissiez éteindre le feu à n’importe quelle heure de la nuit. Le concept de téléphone société peut se comprendre dans deux cas, soit c’est un téléphone de travail car vous êtes souvent en déplacement. Donc il doit être éteint en dehors des heures de bureaux, soit c’est un avantage en nature et vous n’y mélangez pas vos personnel et professionnel. Ou alors vous êtes urgentiste. Mais dans ce cas ce billet ne s'adresse pas à vous, retournez bosser je suis peut-être dans la salle d'attente à patienter que vous reveniez de pause !?#@

- On vous félicite à chaque mise en production pour votre capacité à rester éveillé 12 heures d’affilée

Mais pourquoi avoir eu besoin de rester éveillé pendant 12 heures ? D’ailleurs tiens à ce propos, vous n’avez jamais vécu cette situation irréelle : vous êtes à un pot de fin de projet, seul développeur dans la salle et on vous demande : “Mais vous êtes qui vous ?” Personnellement je me console en me disant que si on ne m’a pas remarqué, c’est peut être aussi parce que j’ai bien fait mon job et que je n’ai pas eu besoin d’envoyer de mail à minuit à une mailing list de 50 personnes tous plus ravis les uns que les autres d’être encore debout à cette heure là.

- Vous n’avez pas pris de vacances depuis... depuis quand déjà ?

C’est sûr qu’allumer et éteindre des incendies sans arrêt ça prend du temps. Vous passez plus de temps à les éteindre qu’à en allumer ? Vous avez passé le seuil de non-retour. Il est temps de se faire épauler et de faire un peu de refactoring à grande échelle. Des vacances vous permettront de sortir la tête du guidon et de repartir avec des idées neuves. A ce sujet j’avais bien aimé l’analogie avec le sport de haut niveau faite à l’agile tour 2010 par [Philippe Houssin et Ralph Hyppolyte](http://hakanai.free.fr/index.php/agile-tour-2010-2/):

> _Un bon sportif comme un bon développeur est celui qui sait alterner les phases d’effort avec les phases de récupération._

- Vous connaissez tout le monde dans la boite pour l’avoir au moins dépanné/renseigné une fois

C’est pas une mauvaise chose en soi. Mais c’est un symptôme si la seule chose que vous avez en commun avec tous vos interlocuteurs téléphoniques ce sont des numéros de fiches JIRA/mantis/bugzilla.

[![](/images/temporarily.png "temporarily")](http://eventuallycoding.com/wp-content/uploads/2012/05/temporarily.png)

- Votre seul critère d’embauche pour les nouveaux arrivants c’est leur résistance au stress

Soit vous recherchez des clones qui seront capable de s’autoalimenter par la qualité de leur travail, soit vous recherchez des équivalents de David Seagall, froid, impassible et super efficace. Et si vous essayiez de réduire le stress dans l’équipe plutôt que d’en faire un critère de sélection ?

Bon, il est minuit passé (;)), il est temps de conclure. Ok je vous l’accorde, plusieurs de ces points ne permettent pas de dire à coup sur que vous êtes pompier pyromane. Mettre des @author dans son code ou avoir un téléphone d’astreinte ne fait pas de vous un obsessionnel du feu. Mais si vous cumulez plusieurs des points ci-dessus il est quand même temps de sérieusement se remettre en cause.

Et vous, vous avez des anecdotes de codeurs pyromanes à raconter ?

_\* les images humoristiques proviennent de [geek and poke](http://geekandpoke.typepad.com/) dont je vous recommande chaudement la lecture._
