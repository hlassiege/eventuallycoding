---
id: "1546"
title: "Rewrite from scratch ?"
description: "![](/images/rewrite-goodness-matrix1.png)

Je souhaite partager aujourd'hui un retour d'expérience issu de multiples entretiens d'embauche que j'ai pu..."
date: "2020-07-20"
categories: 
  - "waza"
tags: 
  - "architecture"
  - "recrutement"
  - "rewrite"
img: "rewrite-goodness-matrix1.png"
cover: "cover6.jpg"
---

![](/images/rewrite-goodness-matrix1.png)

Je souhaite partager aujourd'hui un retour d'expérience issu de multiples entretiens d'embauche que j'ai pu faire passer.  
J'ai utilisé pendant plusieurs années un scénario qui servait lors d'une des phases de l'entretien. C'était entre 2011 et 2018. 
Ce scénario avait de multiples avantages et j'aimerais le partager aujourd'hui, mais surtout partager la grille de lecture que j'en tirais.

## Un peu de contexte

Pour remettre un peu de contexte, je ne suis pas recruteur, cependant, j'ai calculé récemment que j'avais lu plus de 550 CV, réalisé environ 150 appels (téléphone ou vidéo) de préentretien et fait passer entre 80 et 100 premiers entretiens. Je ne compte pas les tours suivants.  
Et bien sûr j'ai moi-même passé de nombreux entretiens également dans ma carrière.

Bref, sans être expert, j'ai appris à écouter, lire, et poser des questions.  
J'ai itéré sur le format, la durée, le contenu…  
Pendant un moment j'ai utilisé un scénario qui demandait à la personne candidate de se glisser dans un rôle. Ce petit jeu durait environ 15 minutes.  
Les consignes étaient simples :

- Les 5 premières minutes je décris la situation et la personne peut poser des questions.
- 5 minutes sont ensuite utilisables pour réfléchir de son côté, je sors de la pièce en laissant le candidat mettre ses idées sur papier
- 10 minutes sont ensuites utilisées pour la restitution. Je me place dans la peau d'une personne fictive pour challenger les idées et voir les réactions.

Comme je réalise majoritairement mes entretiens à plusieurs, nous pouvions nous répartir des rôles.

Dans cet exercice, il n'y avait pas de bonne réponse académique. Il s'agissait d'une situation inspirée d'un cas réel et ce n'est pas en 5 minutes que l'on peut trouver la bonne réponse, si tant qu'il y en ait une.  
Une caractéristique de cet exercice était qu'il était volontairement très ouvert. Si la personne faisait bien attention, elle pouvait partir dans de nombreuses directions. Et justement, c'était la direction prise et l'approche empruntée qui était riche d'enseignement, sans même parler de la capacité de compréhension.

## Le fameux scénario

Voici en simplifié le scénario :

> "Vous arrivez aujourd'hui dans la société XXX qui est éditeur de logiciel dans un domaine financier. Vous êtes ici en tant que YY (ça dépendait du candidat) et vous rencontrez les personnes du comité de pilotage qui souhaitent que vous regardiez la situation avec un oeil neuf pour donner des préconisations d'entreprise. Oui la situation est un peu étrange mais passons.  
> Le coeur de métier de la société XXX est la finance comme indiqué plus haut. Le logiciel vendue aux clients a évolué depuis les années 80 et a été écrit dans un vieux langage. Ce langage n'est plus utilisée aujourd'hui dans le monde que par la société XXX et la société qui édite ce langage, son compilateur et son environnement d'execution.  
> Ce langage est un langage de haut niveau, destiné à des experts métiers qui sont capable de développer des programmes fonctionnels plutot complexes sur de la valorisation d'actifs financiers.  
> On pourrait le comparer à COBOL dans une certaine mesure.  
> D'ailleurs il faut travailler sur mainframe et il ne tourne que sur Mainframe.  
> La société éditrice du langage ferme ses portes. La société XXX peut encore utiliser le compilateur actuel et l'outillage associée mais il ne peut plus évoluer.
> 
> La société fait 200 personnes, dont 90 qui travaillent sur ce langage métier, 15 sur du socle technique et 10 sur l'expertise technique nécessaire aux déploiements clients (base de données, systèmes etc…).  
> Les 90 développeurs ont un background plutot métier. Ce sont avant tout des experts métiers.  
> Il y a également 5 personnes qui travaillent sur le test du logiciel.  
> La base de code actuelle est supérieur a 10M de lignes de code. Chaque programme est indépendant et inclut de très nombreuses librairies écrites sur les 40 dernières années. Certains programmes font donc plus de 10 000 lignes à eux tout seul.  
> D'ailleurs parfois le compilateur échoue car le nombre de lignes de code est devenu trop important. Il faut supprimer certaines parties pour faire passer la compilation (compilateur qui n'est plus maintenu).  
> Le logiciel est vendu on premise, déployé chez les clients. Les clients grognent un peu de devoir maintenir un parc Mainframe qui est couteux pour eux (le mainframe est couteux mais l'expertise pour le maintenir aussi). La nature même des clients, évoluant dans la banque, fait qu'il est nécessaire de maintenir de nombreuses versions car ils ne mettent pas à jour régulièrement leur parc. "

## De nombreux sujets de discussion possibles

Le scénario pouvait évoluer en fonction des candidats ou de notre imagination du moment.  
Si vous lisez entre les lignes il y a de nombreux thèmes abordables : RH, conduite du changement, problématiques technique, d'organisation etc…  
Une personne orientée process pourrait parler de la séparation actuelle des équipes et de la communication entre équipes socle, déploiement et métier.  
Certains vont parler des tests. D'autres vont parler du déploiement etc…  
Peu importe, il n'y a pas de bonnes réponses mais ce qui est intéressant c'est de voir l'angle choisie.

Peu importe le sujet et les différentes variations que nous y avons apporté au cours du temps, c'est ici que les choses intéressantes commencent.  
Certains candidats vont poser beaucoup de questions, d'autres aucune.  
Certains, rares, décideront de présenter leur proposition sans prendre aucun temps de réflexion préalable.  
Rien que ces étapes peut en apprendre beaucoup sur les personnes, leur mode de réflexion, leurs méthodologies.  
Je ne vais pas faire d'analyse basique du type : s'il pose trop de question alors… s'il n'en pose pas alors…  
Cet exercice faisait partie d'un entretien en 4 étapes. C'est sur la totalité de l'entretien que l'on se fait un avis.

Si on parle technique il est très intéressant de noter que les "juniors" proposent tous systématiquement de recoder la totalité de l'application dans un langage récents et de faire tourner cela sur le cloud.  
Les plus seniors adoptent souvent des approches plus modulaires pour essayer d'extraire des fonctionnalités (les fameux programmes) quitte à avoir deux applications différentes et une migration longue dans le temps.  
Quelque soit l'expérience, le mot legacy fait flipper 90% des gens.

Il y a de très nombreuses questions possibles ensuite pour le candidat. Elles ne sont pas là pour piéger mais pour voir comment il/elle réagit et réfléchit.  
Par exemple "_Selon toi, combien de temps cela prendra de migrer 10M de lignes de code ?_" peut entraîner de super discussions sur la faisabilité même de ce type d'approche.  
Certains vont parler des solutions de transpilage, d'autres de couches d'anti corruption, de tests boite noire pour mesurer les effets de bord etc…  
"_Mais que vont devenir les 90 développeurs métiers si vous changez leur langage en Java/Scala/C++ etc.. ?_" n'a rien à voir avec de la technique mais peut apprendre des choses sur la personne.

Bref, l'exercice peut être très riche. Ce n'était pas une condition sine qua non pour réussir. J'ai eu des candidats qui n'ont pas été brillants sur cette partie mais qui ont été pris car sur l'ensemble ils ont su tiré leur épingle du jeu.  
Mais pour certains ca a été le petit truc en plus ou en moins lors de la décision finale.

## Que s'est-il passé en vrai ?

Petit bonus pour ceux qui ont suivi jusque là, j'ai promis à ceux qui ont passé le test de leur dire un jour comment cette situation a été abordé dans la vie réelle par la société dont je me suis inspiré.  
C'est le moment.  
Je vais cependant rester assez flou pour ne trahir aucun secret industriel. Je ne vous dirais pas si j'ai directement bossé pour cette société ou seulement observé de l'extérieur. Je ne vous donnerais pas mon rôle sur ces sujets. Je ne vous donnerais pas sa localisation, ni de noms et si vous la reconnaissez, merci de ne pas l'indiquer.

Cette société XXX a donc bien existé. Son logiciel est effectivement très ancien et dans les grandes lignes, la description technique était relativement fidèle. En pratique la société XXX proposait aussi son logiciel en mode hébergé mais c'est sans importance pour la suite.  
Ce n'était pas du Mainframe mais quelque chose de relativement équivalent (gros serveur tout en un) et je continuerais à parler de Mainframe pour la suite.

Comme vous l'aurez deviné dans l'énoncé initial, l'un des gros sujets c'était l'utilisation de ce langage ancien. Il y avait de nombreux autres challenges mais l'énoncé insistait particulièrement sur celui-ci.

Le problème n'était cependant pas que ce soit un vieux langage, en soit, ce n'est pas un problème.  
Un langage ne devient pas inadapté parce qu'il est ancien. Il devient risqué par contre s'il n'est plus maintenu. Et le compilateur commençait à montrer des signes de faiblesse au regard de la taille du code. De même, le fait qu'il ne soit plus maintenu indiquait qu'il ne pouvait tourner que sur des machines obsolètes, elles aussi plus maintenues et là commence le cercle vicieux, quid des bases de données, des standards de chiffrement etc…

Pour situer le contexte, cette entreprise est très importante sur son marché. Et cette position dominante s'est, en partie, construite sur l'échec de certains concurrents à se moderniser.  
De nombreux concurrents dans des situations similaires ont tenté de tout refaire de zéro et ont échoué ce qui a permis a XXX de prendre le marché.  
Je caricature bien sûr. Je fais ce que je veux c'est mon billet de blog ;)  
Toujours est-il que cela a provoqué bien sûr une certaine réticence, fondée, sur l'approche "rewrite from scratch".  
Je vous invite [à lire Joel Spolsky](https://www.joelonsoftware.com/2000/04/06/things-you-should-never-do-part-i/) sur le même sujet : )  
Pour autant, il fallait trouver des solutions.

La première initiative de cette société a été de rétro ingéniéré l'environnement d'execution pour comprendre ce que faisait chaque instruction machine et les recoder dans un autre système. Une machine virtuelle a été reconstruite (un peu comme une JVM) en Python capable de faire fonctionner un executable produit par le compilateur.  
C'est déjà un tour de force en soit qui a permis de faire fonctionner ce vieux progiciel ailleurs que sur mainframe et même mieux, sur tout système supportant python : redhat, sunos, aix, osf1, hpux etc… Le code restant inchangé.  
C'est déjà une étape très importante, mais imaginez les autres possibilités. A partir de là, vous pouvez reprendre la main par exemple sur tout les appels à la base de données pour les faire passer par un pool de connexion, concept inexistant jusque là. Et c'est un exemple parmi d'autres.  
A cette étape, les développeurs continuaient par contre de travailler sur Mainframe car la compilation et la définition de l'interface se passait toujours là.

Seconde étape, l'idée était de sortir de la logique classique mainframe pour éviter que chaque utilisateur final n'ait à se connecter à des gros serveurs applicatifs. C'était en effet une époque ou chaque utilisateur se connectait sur un terminal qui n'était qu'une fenêtre sur un processus qui s’exécutait sur un serveur central.  
Si vous n'avez jamais vu des écrans type AS400 ou Mainframe, ca ressemble à ca :

![](/images/03ep051.png)

Il faut voir chaque programme comme étant un ensemble : écran noir et blanc, zone de saisie, logique applicative. Certains écrans ne servant à rien d'autre qu'à lancer un batch.  
Un écran => un programme.  
C'est donc totalement modulaire quand on regarde de plus près.  
Le challenge était de transposer ces écrans en autre chose. Il a été possible de traduire ces écrans (qui ressemblaient finalement beaucoup à des fichiers textes en ascii art) en fichier .class correspondant à des fichiers compilés pour Java et utilisant Swing.  
Ensuite la machine virtuelle Python discutait avec une appli Swing en Java déployé sur les postes clients en JNLP, et pilotait littéralement cette application de facon très simple :

- ouvre le programme MACHIN forcait le chargement distant d'une classe représentant l'interface via un class loader http
- chaque instruction : "met le focus sur un champ", "saisie un champ", "controle le champ", "valide un bouton" correspondait à des échanges de protocoles Java <-> Python <-> ancien langage dont il faut taire le nom sur http et tcp.

Bref, il devenait possible de faire travailler les utilisateurs sur une interface Java qui pouvait tourner sur n'importe quel OS. Et la on parle d'utilisateurs finaux donc en réalité, cela tournait majoritairement sur windows.

L'étape suivante était de reprendre la main sur le compilateur lui même. Et pour cela, il y a eu en premier lieu un parseur syntaxique qui a permis de monter les programmes dans un arbre AST.  
Ce tout premier bout a déjà permis une énorme évolution, il a été possible de construire un plugin Eclipse qui permettait de lire le code et de bénéficier de tout les outillages classiques :

- controle syntaxique et mise en couleur, suivi des appels de fonction etc…  
    Le plugin téléchargeait le code en local, effectuait des synchonisation régulière avec le serveur mainframe, lancait la compilation sur mainframe et rapatriait les rapports d'erreurs éventuels sur le poste client pour souligner les erreurs de compil.  
    Bref, plus besoin de passer par le mainframe (enfin presque mais je passe les détails).

Je ne connais pas la suite de l'histoire hormis que Java/Swing/JNLP a été abandonné pour faire du pur web. Le compilateur semble avoir été finalisé depuis. Et vu les personnes qui étaient dessus, je suis sûr que le boulot est super.

Ces solutions ont mis des années à se mettre en place. Elles ont nécessité de grandes discussions, ont eu des conséquences importantes de conduite de changement, autant en interne qu'en externe. Je passe des détails mais cela reste de très bonnes références à mes yeux en terme de savoir faire, de décisions technologiques etc… Et bien sûr l'entretien mentionné plus haut ne visait pas à résumer tout cela en 15 minutes.

Et sinon, oui le legacy ca peut faire peur, tout autant que le mot TMA. Sur le papier, pour beaucoup, c'est moins sexy que de créer une nouvelle appli TODO list avec le énième framework à la mode déployé sur GCP.  
Et pourtant, sur ce projet vous auriez vu un grand panel de sujets techniques et humains pointus. C'est justement dans un produit qui vit, qui a des utilisateurs que l'on peut rencontrer les meilleurs challenges.
