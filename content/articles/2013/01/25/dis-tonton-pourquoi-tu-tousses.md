---
id: "708"
title: "Dis tonton, pourquoi tu tousses ?"
description: "Entendu il y a peu de temps dans une discussion entre deux collègues :

> “Comment ca se fait que ca plante comme ça du jour au lendemain sans raison ..."
date: "2013-01-25"
categories: 
  - "waza"
tags: 
  - "pragmatic-programmer"
img: "equilibre.jpg"
cover: "cover2.jpg"
---

Entendu il y a peu de temps dans une discussion entre deux collègues :

> “Comment ca se fait que ca plante comme ça du jour au lendemain sans raison ?”

Et vous, ça vous évoque quelque chose ? On vous l’a déjà sorti ? Je suis prêt à parier que oui, c’est une réflexion assez fréquente.

Avant de poursuivre ce billet, répondez honnêtement à cette question dans votre tête : Pensez-vous que le développement informatique est magique et aléatoire ?

Avant de répondre, voici l’image que ça m’inspire :

[![](/images/equilibre.jpg "equilibre")](http://hakanai.free.fr/index.php/dis-tonton-pourquoi-tu-tousses/equilibre/)

Regardez bien l’image ci-dessus. Le type a empilé à droite une chaise sur une autre chaise, puis il a recommencé l’expérience à gauche. Ensuite il est monté en équilibre sur les deux dernières pour quelques minutes.

Si jamais ce type était tombé au cours de son numéro, vous auriez pensé vous aussi que “c’est incroyable, ce truc a marché jusque là et tout d’un coup ca plante sans raison !” ?

Vous pourriez me dire, “oui mais l’informatique c’est pas ça, c’est du solide” :

Mais avez-vous mis toutes les chances de votre côté pour que ça ressemble à ça ?

[![](/images/maison2.jpg "maison")](http://hakanai.free.fr/index.php/dis-tonton-pourquoi-tu-tousses/maison-3/)

Soyons clairs, si vraiment vous voulez que ça ressemble à ça, il y a des règles et je vous en propose juste une dans ce billet :

## Il vous faut une équipe de choc

Gros scoop pour beaucoup de boîtes il semblerait, il vous faut des gens qui connaissent les technos que vous comptez utiliser. Je parle des technos de fond, celles qui vont compter dans votre architecture. Quand je parle d’équipe de choc, je parle pas d’une équipe constituée uniquement d’experts mais aussi de personnes pluridisciplinaires avec au moins quelques-uns qui ont une expertise sur l’un des domaines qui vous intéresse. Les fameux profils [T-shaped](http://en.wikipedia.org/wiki/T-shaped_skills).

Et il vous faut aussi des jeunes pousses prometteuses car c’est eux qui assureront la relève par la suite et qui apporteront un regard nouveau dès le début.

Vous trouveriez ça incroyable d’envisager la construction d’un immeuble avec seulement des plombiers ? Eh pourtant ça arrive tous les jours en informatique.

Quand je parle d’expertise, laissez-moi repréciser ma pensée. Expert c’est un bien grand mot, bien souvent galvaudé. En informatique, on est senior à 5 ans d’expérience, expert à 6, toutes technos confondues.

[![](/images/omg_wtf_cat.jpg "omg_wtf_cat")](http://hakanai.free.fr/index.php/dis-tonton-pourquoi-tu-tousses/omg_wtf_cat/)

L’expertise ne s’acquiert pas automatiquement sur tous les domaines en même temps.

Un exemple. Il y a peu de temps j’ai démarré une mission en tant que front developer pour du site grand public. J’ai longtemps développé côté serveur, j’ai fait du swing et même travaillé sur un plugin eclipse. J’ai fait du web mais de l’intranet essentiellement. Je suis expérimenté, j’ai des compétences transverses, je sais transposer mes méthodes de dev sur de nouvelles technos ce qui me permet de monter plus vite en compétences. Mais je ne suis pas un expert en développement front. Je n’ai pas assez de recul sur les technos que j’utilise. Pas encore. (Promis, ça commence à rentrer).

Si vous démarrez un projet sans personne qui connaisse les technos choisies, vous y arriverez peut-être. Si malgré tout, vous avez pris des bons développeurs ils vont sans doute pouvoir empiler des chaises les unes sur les autres. Vous pouvez obtenir un bon équilibre grâce à leur maîtrise technique. Mais il manquera quelqu’un capable de choisir les chaises qui s’empilent bien et qui enlèvera la nécessité de faire le poirier à la fin.

Alors oui, il faut mettre le prix :

- prenez des freelances experts sur le(s) domaine(s) qui vous intéresse(nt)
- prenez des sociétés de service reconnues sur votre problématique et évitez les grossistes en chair à canon qui vous vendent de la ressource soi-disant interchangeable à la douzaine
- prenez des [formations](http://www.lateral-thoughts.com/training)

Sinon, vous finirez par faire le poirier en démo devant vos clients et un jour vous viendrez dire :

> “Comment ça se fait que ca plante comme ca du jour au lendemain sans raison ?”

Et je ne parle même pas des boîtes qui pensent prendre 10 stagiaires en Inde en pensant que ça fera l’affaire parce que coder des if et des else c’est facile.

[![](/images/g0znu1.gif "G0zNU[1]")](http://hakanai.free.fr/index.php/dis-tonton-pourquoi-tu-tousses/g0znu1/)

**Mais pourquoi plusieurs ? Pourquoi pas un expert complété par des stagiaires ?** Parce qu’une personne toute seule, sans émulation, sans quelqu’un pour la challenger, ça finit souvent (toujours ?) par prendre de mauvaises décisions.

Prendre un seul gars “expert” c’est aussi prendre le risque de créer [un pompier pyromane](http://hakanai.free.fr/index.php/etes-vous-pompier-pyromane/), un type qui va se créer des challenges pour continuer à se motiver, un type qui va créer des problèmes pour se poser en sauveur lorsqu’il faudra les résoudre. Pas forcément un mauvais gars au départ, mais un gars qui va vite chercher à vous empiler des chaises dans tous les sens pour démontrer son savoir faire.

[![](/images/cirque_national_chine_2.jpg "cirque_national_chine_2")](http://hakanai.free.fr/index.php/dis-tonton-pourquoi-tu-tousses/cirque_national_chine_2/)

Il est compliqué de rester simple quand on vous a embauché pour être l’expert du groupe.

## Mais concrètement, ça sert à quoi d’avoir des bons ?

C’est un peu provoc’ mais la question est légitime. Tous les directeurs de projet avec un peu de bouteille sont capables d’aller sur 01informatique (ou sur hackernews pour quelques uns) et piocher dans le magazine la liste des composants entreprises qui semblent fonctionner. Ensuite il suffit de lancer un appel d’offres pour prendre un grossiste une SSII capable d’assembler les pièces de légo.

En théorie, ça marche.

> « La théorie, c'est quand on sait tout et que rien ne fonctionne. La pratique, c'est quand tout fonctionne et que personne ne sait pourquoi. Ici, nous avons réuni théorie et pratique : Rien ne fonctionne... et personne ne sait pourquoi !  »
> 
> Albert Einstein

Sauf que... BPM, ESB, REST, HATEOAS, SAAS, si ce sont autant de buzz words facile à caler sur un schéma d’architecture, voici ce qu’on risque :

[![](/images/velo-moto.jpg "velo-moto")](http://hakanai.free.fr/index.php/dis-tonton-pourquoi-tu-tousses/velo-moto/)

Un vélo qu’on a tenté de maquiller en Kawasaki.

Prendre des bons développeurs c’est prendre des gens qui sont capables d’évaluer des technos et de les choisir en fonction d’un contexte donné.

Rappel : contexte = vision exprimé, budget, équipe déjà présente etc...

Le bon dev c’est comme le bon équilibriste vu plus haut. Il sait qu’on n’assemble pas une appli en claquant des doigts. Il sait que l’équilibre des chaises repose sur plusieurs facteurs. Il est d’ailleurs sans doute déjà tombé pour l’apprendre. Ce développeur, c’est aussi quelqu’un qui sait se remettre à jour, tout en sachant garder du recul. Il sait qu’il faut construire les applis de demain avec les technos de demain et pas celles d’hier. Mais il sait aussi qu’il ne faut pour autant pas construire toute son application sur des paris.

Ce développeur, il a quelques principes en tête :

- on ne prend pas une techno parce que le nom est joli, on la prend parce qu’elle répond à un besoin
- Une techno jeune est toujours un pari. Mais il existe des critères de choix : taille de communauté, qualité de la doc, références, facilité de sortie etc...

Quand il utilise une nouvelle techno, il cherche d’abord à la maîtriser avant de l’imposer. Il l’isole, il se prévoit des portes de sorties. Il sait être early adopter parfois mais il sait aussi que ça ne se tente pas sur tous les projets.

Être très en avance sur ces choix technologiques, c’est possible mais il faut une équipe qui suive derrière. La prise de risque technique est nécessaire en fonction de la boite, de l’ambition du projet. Non, on ne conçoit pas une application de la même façon que l’on soit une (ex)startup comme Twitter ou une société plus “établie”.

Pour reprendre mon parallèle du cirque, ce n’est pas donné à tout le monde d’innover comme peut l’avoir fait le cirque du soleil (LE cirque qui a réinventé le cirque). Mais si vous avez des ambitions, alors donnez-vous les moyens de les réaliser et réunissez l’équipe qui va bien.

[![](/images/cirque-du-soleil-10.jpg "cirque-du-soleil-10")](http://hakanai.free.fr/index.php/dis-tonton-pourquoi-tu-tousses/cirque-du-soleil-10/)

Un bon développeur peut aussi parfois se retrouver sur une application qui a besoin de plus de certitude, de choix éprouvés, quitte à être déjà obsolète quand elle sera terminée. Il doit parfois composer avec des budgets très serrés, des dates rapprochées, une absence d’ambitions. En parallèle du point précédent, autant on ne construit pas une appli sur des modes, autant quand on choisit des technos plus établies on s’assure aussi qu’on a un besoin.

Prendre un outil qui cumule les acronymes marketing sur son site web (BPM, BPEL, BAM, JMS, JBI, WS\*) vous est-il vraiment nécessaire ?

C’est juste pour la prez du vendredi sur powerpoint ?

[![](/images/mobetpastaga.png "mobetpastaga")](http://hakanai.free.fr/index.php/dis-tonton-pourquoi-tu-tousses/mobetpastaga/)

Produire de la valeur doit être la préoccupation principale de l’équipe de développement. Pas produire de la complexité, du code ou de la documentation. On ne produit pas de valeur parce qu’on a choisi une technologie. On produit de la valeur quand on répond à un besoin d’un utilisateur. Et qui plus est au moment où il en a besoin, pas 6 mois plus tard. L’utilisateur final se fout royalement que vous respectiez la norme JBI ou que vous prévoyiez de répondre à un autre de ces besoins qu’il aura forcément dans 6 mois “parce que c’est évident que ça va arriver”.

Vous imaginez votre artiste de cirque en coulisse qui décide de pas entrer sur scène parce que ces chaises ont pas encore été peintes (perfectionnisme inutile) ? Ou une personne au guichet d’une banque qui refuse de vous donner un chéquier car ceux qui vont arriver dans 6 mois avec un talon plus grand seront plus pratiques pour vous donc vous devriez attendre (anticipation néfaste de vos besoins) ?

On commence à dériver sur une autre règle fondamentale, la production de valeur. Ce sera peut-être l’occasion d’un autre article (ou pas). Concluons déjà celui-là.

Faisons le désormais traditionnel tldr; de ce billet. Roulement de tambour...

**tldr;** Réaliser une application est une activité complexe, longue, dans laquelle de multiples facteurs viennent influencer le résultat. Ce n'est pas magique. Quand vous tombez, il y a une raison, ou plusieurs. Pour mettre toutes les chances de votre côté, mettez-y les moyens, assemblez la meilleure équipe pour votre besoin. Ce ne sera peut-être pas suffisant, mais ça aidera grandement.
