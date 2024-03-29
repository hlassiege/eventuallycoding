---
id: "25"
title: "Combattre la complexité"
description: "S’il est un facteur qui influe fortement et négativement l’impact à l’échelle, c’est la complexité, et en tant que product leaders, nous avons une responsabilité sur cette complexité, que ce soit sur le produit construit ou l’organisation en place."
date: "2023-07-24"
tags:
- "complexity"
- "impact"
- "product"
- "engineering"
cover: "equilibre.jpg"

book: "impactfulSoftwareEngineering"

language: "fr"
alternates:
  - en: "https://eventuallycoding.com/en/2023/07/fighting-complexity"
---

Si vous tombez ici par hasard, ce chapitre fait partie de l’ebook [“Impactful software engineering”](/2023/02/impactful-software-engineering) et son sujet principal est “comment apporter de l’impact en tant que développeurs et développeuses”.

S’il est un facteur qui influe fortement et négativement l’impact à l’échelle, c’est la complexité. La complexité ralentit les prises de décision, augmente les coûts et rend inutilisable les produits.

En tant que product leaders, nous avons une responsabilité sur cette complexité, que ce soit sur le produit construit ou l’organisation en place.

> **complexity is the silent killer of growth**  
> Ron Kermisch et Jed Fallis

La complexité, notamment la dette technique, la surcharge featurale, la bureaucratie sont des menaces perpétuelles pour la vélocité d’une entreprise.  
L’organisation dans son ensemble doit constamment être à la recherche de la simplicité, le fameux [KISS (Keep It Simple Stupid)](https://en.wikipedia.org/wiki/KISS_principle).

::image
![balancing on a ball](/images/artist-complexity-seems-easy.jpg)
::


## Simple ne veut pas dire simpliste. Compliqué ne veut pas dire complexe

La simplicité, c'est celle que l’on fait apparaître à l’utilisateur. Être simpliste, c'est proposer une solution qui ne répondrait pas à ces besoins.  
Il faut proposer des solutions simples à des problèmes complexes sans que ce soit ni compliqué, ni simpliste :)

Et ici je parle tout autant du produit que l’on crée que de l’organisation et de ces process.  
À noter que ces sujets dépendent de la taille de votre équipe ou de votre base utilisateur.  

Si on parle d'organisation, durant mes années chez Malt, j’ai progressivement construit une équipe produit de 0 à 100. Mais toute la structure qui existe aujourd'hui n’aurait eu aucun sens et nous aurait même certainement ralenti au début. À l'inverse, ce qui existe aujourd'hui ne serait sûrement pas suffisant si nous étions 1000.

Si on raisonne en termes de complexité Produit, nous avions ce que tout le monde appelle “des cas aux limites”. Mais avec peu d’utilisateurs, vous pouvez vous permettre de traiter ces exceptions manuellement, c’est une réponse simple et efficace. Le coût d’automatisation ne se justifie pas toujours.  
Aujourd'hui ces cas aux limites n’ont plus rien d’exceptionnel et peuvent se produire des dizaines/centaines de fois par jour. C’est le coût de ne pas automatiser qui devient excessif. Et c'est là qu'on peut confondre simplicité et simplisme si on ne traite pas ces cas.

Quand on parle de coût ou de retour sur investissement, simple ou simpliste, c’est aussi une question de taille.


## Dette technique et fonctionnelle
Cet article n’est pas “que” autour de la dette technique. Mais ce serait maladroit de ne pas l’évoquer puisque je m’adresse en priorité aux Product et Tech leaders.

La construction d’un produit est la somme de toutes les décisions passées. Tout comme la dette technique.

Chaque choix est fait dans un contexte donné : taille d’équipe, taille d’entreprise, état des connaissances et des technologies, adéquation avec la stratégie produit du moment etc…  
Le corollaire de cela, c’est que si le contexte change, les anciens choix peuvent devenir des freins.

La dette technique est en partie liée à la complexité qui se construit dans le temps, sans être remise en cause.  
Lorsque le contexte change, il faut revoir ces choix.


::image
![Do not refactor code that is useless](/images/context-changed.jpg)
::

> Le pire choix à faire est d'ajouter des surcouches technologiques pour résoudre un problème qui n’existerait pas ou plus si on reprenait du recul.

Quand on est la tête dans le guidon, en train de courir vers un nouvel objectif, on peut oublier facilement de prendre ce recul. Il faut créer cet espace et je vous renvoie à un autre chapitre : [Accepter l’ennui](https://eventuallycoding.com/2023/03/accept-boredom).

::image
![People too busy to use the wheel](/images/reinvent-wheel.png)
::

* **Solution 1** : en dédiant une partie du temps des itérations à la résolution de la dette technique. Cette solution est souvent peu optimale. Tout le monde comprend cela comme du temps en “best effort”.
  _Le “best effort” est à réserver uniquement à ce qu’on accepte de faire mal_. Et résoudre la dette technique n’est pas quelque chose qu’on devrait accepter de faire mal. C’est la première chose qui saute en cas de stress, et on n'y dédie jamais le temps nécessaire.


* **Solution 2** : en intercalant des périodes de repos (cooldown) entre les itérations. Ce sont des périodes distinctes des itérations. De nombreuses équipes profitent de ces périodes de repos pour continuer à travailler sur de nouvelles features qui n’étaient pas terminées dans la dernière itération. _Ces périodes de repos ne fonctionnent qu’à condition qu’elles ne servent qu’à simplifier l’existant, pas à l’ajout de features_.


* **Solution 3** : en créant des équipes dédiées à la gouvernance technologique. Cela peut prendre la forme de communautés de pratique, d’une équipe plateforme etc. Ici le premier défi, c’est de ne pas créer des équipes déconnectées du terrain. Le second défi, c’est la conduite du changement au sein des équipes Produits qui peuvent se montrer réticentes lorsque cela se met en travers de leur planning. Cette configuration fonctionne si les équipes “centrales” se reconnectent régulièrement avec les équipes Produits (interviews utilisateurs, immersion etc.) et si les leaders techniques de ces équipes participent aussi à la définition des chantiers (phases de discovery technique réalisées en équipe par exemple).


Enfin dernier point de cette section, **attention à ne pas chercher à être trop malins**.

Vous connaissez sans doute l’un des sujets les plus fréquents d’un(e) tech leader : **buy or build**.  
Eh bien exactement au même niveau je citerais un autre sujet : “**standard or customized**”

Bien souvent on utilise des solutions ayant des usages recommandés et puis à un moment, on a la sensation d’être limité dans ces choix. Et dans ces situations, on ressort souvent la carte “j'ai trouvé un moyen intelligent de m’écarter des usages recommandés pour y faire rentrer mon cas particulier”.

::example

**Mongodb et les transactions**  
Quelques années plus tôt j’ai beaucoup utilisé Mongodb. Avant la version 4, la notion de transaction n’existait pas. Car le produit repose sur le fait que vous pensiez vos documents comme auto-suffisant. Vous ne devriez pas avoir besoin de transactions sur plusieurs collections si vos documents sont bien conçus. En théorie…

En pratique, les cas d’usage changent, et on finit toujours par se demander comment éviter les incohérences entre deux collections.

A cette étape, j’ai rencontré plusieurs personnes qui ont cherché à implémenter des mécanismes de transaction programmatiquement. Je vous évite le détail de l’implémentation, mais c’est possible.  
C’est possible, mais c’est complexe. Évidemment dans le temps ce type de code devient une zone où personne ne souhaite intervenir.
::

Bien souvent, s’écarter du standard se révèle une mauvaise idée. Sur le coup et pendant quelques mois, voire années, cela peut fonctionner. Mais encore plus fréquemment, ces petites déviations finissent par coûter en **charge cognitive**. Une partie de code ou une fonctionnalité peut devenir une zone de non-droit où plus personne n’ose mettre les pieds.

Il faut toujours garder en tête que le code est plus souvent lu qu’écrit. Et le turnover moyen d’une équipe oscille entre 10 et 30%. S’écarter du standard, c'est fermer la porte aux futurs nouveaux arrivant(e)s.

L’idéal, c'est qu’une personne qui débarque sur votre projet se sente familier un maximum avec les bonnes pratiques qu’il ou elle a pu observer ailleurs.   
L’idéal, c'est que lorsque vous recherchez une solution sur internet, vous tombiez sur des dizaines ou centaines de solutions, car votre cas n’est pas un cas particulier.

Sortir du standard ne se comprend que si vous vous appelez Google et que votre contexte ne peut absolument pas s'accommoder des solutions classiques. 

Mais vous savez quoi, finalement le meilleur code, c'est encore celui qui n’existe pas. Ce qui me donne la parfaite transition pour parler de surcharge featurale.

## Surcharge featurale

> La perfection est atteinte, non pas lorsqu'il n'y a plus rien à ajouter, mais lorsqu'il n'y a plus rien à retirer.  
> Antoine de Saint Exupéry

J’ai repris l’expression surcharge featurale d’une [conférence de Estelle Landry](https://www.youtube.com/watch?v=6SczOv0TSkI). Je la trouve assez parlante pour que vous ayez bien l’image en tête.

La surcharge featurale est une responsabilité partagée entre Tech, PM et UX. En principe, le PM s’occupe de viabilité et valeur, le lead UX de l'utilisabilité, le lead tech de la faisabilité, **mais tout le monde doit contribuer à la simplification**.  
* Le Lead UX, car l’utilisabilité va de pair avec l’absence de complexité pour un utilisateur.  
* Le Lead tech, car la faisabilité et le coût dépendent fortement des contraintes apportées par les fonctionnalités existantes et ces fameux effets de bords.  
* Le PM, car la viabilité d’un produit baisse avec le coût des fonctionnalités non utilisées et la valeur perçue décroit également lorsque le produit devient incompréhensible.

Comment éviter cette surcharge featurale ?
Il y a 2 éléments importants à avoir en tête :

* **L’importance de la** [**mesure**](https://eventuallycoding.com/2023/02/measuring-everything) pour décider ce qu’il faut tuer ou non.
  Attention, il faut corréler l’usage avec la valeur. Une fonctionnalité peut être utilisée par seulement 10% des clients, mais cela peut correspondre aux 10% qui ramènent 80% des revenus.
* **Savoir faire des choix** (aka, avoir une vision Produit). Créer un produit ou organiser une équipe, c’est savoir trancher, prendre des décisions. L’absence de décisions mène à la surcharge.

Lorsqu’on designe une solution, il faut fermer les contours, faire en sorte que l’utilisateur aille dans le sens que l’on souhaite et accepter de ne pas travailler avec les clients qui voudraient que votre produit soit un autre produit.

::example

**L’Ipod**  
L’Ipod a été lancé en 2001 avec le succès que l’on sait aujourd’hui.
Et pourtant à l’époque l’ipod arrivait sur un marché déjà bien pourvu en termes de baladeur MP3. Apple a su se démarquer avec une vision produit très marqué. Ils ont fait le choix de proposer une seule fonctionnalité, mais de la faire parfaitement : la roulette permettant de sélectionner et lancer une musique. Ils ont parié sur le design et l’intégration avec iTunes.  
Et cette simplicité a payé et a su séduire sa génération. C’est bien cette capacité à faire des choix forts et miser sur la simplicité qui fait d’Apple le géant d’aujourd'hui.

::

L’exemple ci-dessus permet d’insister sur l’importance de la vision produit. **Une vision produit n’est pas un backlog de features trié par les derniers clients qui ont parlé**.  
(ou pire, des proxy internes des clients)

Dès lors qu’on empile des fonctionnalités sans stratégies, on finit par créer un monstre de Frankenstein tellement complexe que le moindre ajout devient excessivement coûteux.

::image
![Why it takes so much time to add a new window](/images/adding-widow.jpg)
::

C’est d’ailleurs une très bonne unité de mesure. Si les temps d’implémentation deviennent trop longs, c’est peut-être le signe d’une trop grande complexité.  
Pour l’anecdote, il n’a pas fallu plus de 10 mois à Apple pour construire le premier Ipod. Là encore c’est le fruit de la simplicité.


## Organisation versus process
La troisième responsabilité des Product leaders, et celle-ci est peut-être moins naturelle que les deux premières, c’est de prendre garde à ce que les process ne prennent pas le pas sur le reste.

Alors, entendons-nous bien, ce qui fait la différence entre un(e) junior et une personne expérimentée, ce n’est pas la maîtrise technique, mais la maîtrise méthodologique.
Une méthode, c’est une recette de cuisine qui s’applique en face d’une typologie de problème. Ce que j’appelle process, c’est la formalisation de cette méthode à l’échelle d’un groupe de personnes. 

Quand on y réfléchit bien, c'est une sorte de béquille qui permet de s'assurer qu'on applique correctement cette recette même quand on ne la maitrise pas bien. C'est d'ailleurs ce que dit en substance Marty Cagan : [nous pourrions nous en passer en faisant grandir les individus plutot que les process](https://www.svpg.com/scaling-with-process-vs-people/).  

Sans minimiser leur importance, les process ont tendance à devenir rigides, à s’accumuler et se complexifier dans le temps, devenant l’antithèse de ce qu’ils sont censés être : un frein plutôt qu'un accélérateur.

Puisque je citais Marty Cagan plus haut, je vais partager les citations qui apparaissent sur le billet de blog mentionné plus haut :

> Good process serves you so you can serve customers. But if you’re not watchful, the process can become the thing.  This can happen very easily in large organizations.  
> Jeff Bezos

> That’s what makes great products.  It’s not process; it’s content…The system is that there is no system. That doesn’t mean we don’t have process…But that’s not what it’s about.  
> Steve Jobs

> The problem is that at a lot of big companies, process becomes a substitute for thinking. You’re encouraged to behave like a little gear in a complex machine.  
> Elon Musk

> As companies and agencies get larger, they start to value the importance of process over the product. [...] People who manage processes are not the same people as those who create product. […] Over time as organizations grow, they become risk averse. The process people dominate management, and the product people end up reporting to them  
> Steve Blank


> Process is great when you live in a world where both the problem and solution are known. Process helps ensure that you can deliver solutions that scale without breaking other parts of the organization…These processes reduce risk to an overall organization, but each layer of process reduces the ability to be agile and lean and — most importantly — responsive to new opportunities and threats.  
> Steve Blank

Encore une fois, les process sont nécessaires pour la scalabilité. Ils apportent de la clarté sur qui fait quoi, quand et pourquoi. Malheureusement un process va souvent bien plus loin que ça. Et c’est aux leaders d’une organisation de savoir les garder à la place qu’ils doivent conserver, un accélérateur, une aide méthodologique, mais pas une entrave à l’autonomie, la créativité et l’innovation.

Venant avec les process, il y a aussi ce que Marty Cagan appelle les “[Process people](https://www.svpg.com/process-people/)”. Je vous invite aussi à lire son article, il est bien plus tranché que le mien sur le sujet.

Les process people font partie de ces personnes qui répondent très souvent cette fameuse phrase pour justifier la complexité **“oui mais chez nous c’est différent”**.

Tous les métiers et tous les secteurs ont leur lot de difficultés : la finance, la banque, l’assurance, les places de marché, l’automobile, le marketing, la communication, le développement etc.

Et pourtant vous avez tous en tête des exemples d’entreprises qui ont su simplifier la complexité sous-jacente de leur métier.

Je vais essayer d’apporter toute la nuance possible. Les process people sont très souvent des personnes très intelligentes, très carré, avec un grand sens de l’organisation, très analytique. Ils ou elles cherchent à améliorer la vie des équipes. Mais leur job principal c’est de s’occuper des process ou de faire respecter des contraintes (légales, réglementaires etc…), pas de construire le produit, ou de le vendre.  
Et c’est la nature humaine qui veut que si une organisation crée un job, ce job va tout faire pour grandir et prendre de la place. C’est l’entropie naturelle.  
Vous avez tous connu cette situation, créez demain une équipe A avec une seule personne. En fin d’année cette personne vous dira qu’il faut tripler le budget et embaucher car le travail est devenu trop lourd. Sauf que quand les process people augmentent, avec eux arrive la complexité.  
Paradoxalement, une personne, qui est là pour mettre en place un process, devrait avoir pour objectif que son rôle devienne inutile, c’est rarement le cas.

::example
**Exemple** :
La banque dans laquelle j’ai contracté mon prêt immobilier fait partie des banques “à l’ancienne”.
A chaque rendez-vous, je dois signer une montagne de papier. Les contraintes de sécurité du site web sont tellement importantes qu’une connexion me prend 1 minute. Certaines fonctionnalités sur le site renvoient vers le numéro de l’agence, car elles sont impossibles en ligne.  
Je suis inscrit sur une autre banque pour ma gestion quotidienne, la plupart des démarches se font en ligne. J’ai pu ouvrir un compte pour mon enfant en ligne avec signature électronique. Bref, ce sont deux mondes totalement différents.  
Et pourtant ces deux banques ont exactement les mêmes contraintes.  
Elles illustrent parfaitement bien le poids de la complexité sur le produit d’une part, et je suis prêt à parier que l’organisation de la première a son lot de bureaucratie, qui paralyse l’innovation.
::


Les Product Leaders doivent surveiller très attentivement que la création et l’application des process ne prenne pas le dessus sur le reste.

Quelques signaux d'alarmes :
* lorsque les réunions Produits passent plus de 50% du temps à parler des process
* la mise en place de PMO ou Steering Comitee
* SAFe (!)
* des coach agiles permanent
* les équipes support (coach, product ops etc…) qui grandissent plus vite que le reste de l’équipe
* les décisions produit qui sont conditionnés au go/no go de Process People

Je vais citer [Mike Fisher](https://mikefisher.substack.com/p/principles-over-process) qui rappelle l’importance des principes, les fameux Product pillars, devant les process.

Ce qui est important dans les process, c’est le cadre méthodologique qu’il apporte, les piliers et principes qu’ils sont censés appuyer.
Selon Mike Fisher, l’échec de l’agilité vient de la formalisation rigide des méthodes agiles. Mais les meilleures équipes continuent de s’appuyer sur les principes Agiles malgré tout.

Construire un produit repose beaucoup sur l’humain. Non seulement il n’y a pas de méthode magique mais les activités qu’on suit vont très souvent dépendre du contexte.

Toute personne dans l’organisation produit doit comprendre pourquoi il applique tel ou tel process, et avoir la possibilité de ne pas les suivre, si tant est que cette personne se soit appuyé sur les principes Produit et la stratégie en place.


## Don’t break silos

Enfin, dernier point, on entend souvent qu’il faut casser les silos. Je crois que cette phrase est mal comprise.
Avec la croissance d’une entreprise, vouloir être impliqué dans toutes les décisions revient à augmenter de façon drastique le nombre de personnes avec qui discuter.

::image
![La complexité de la communication augmente drastiquement avec le nombre de personnes](/images/dunbars-number.jpg)
::

Ce nombre d’échanges peut rapidement dépasser les capacités cognitives humaines (Cf [le nombre de Dunbar](https://en.wikipedia.org/wiki/Dunbar%27s_number) qui établit à 150 le nombre max d’individus avec lequel on peut conserver des relations proches) et nécessiter de nombreux process pour pallier à cela.
A cela s’ajoute le [bikeshedding](https://en.wikipedia.org/wiki/Law_of_triviality) inhérent à tout mécanismes de prises de décisions de groupe.
Plusieurs articles semblent indiquer que le nombre optimal de personnes pour prendre une décision se situe entre 3 et 7

* [Forbes](https://www.forbes.com/sites/eriklarson/2017/03/23/3-best-practices-for-high-performance-decision-making-teams/)
* [Harvard Business Review](https://hbr.org/2020/09/7-strategies-for-better-group-decision-making)

Mais pour que cela fonctionne, il faut effectivement casser les silos et avoir les bonnes personnes dans ce groupe. C’est de cela dont il s’agit quand on parle de casser les silos, c’est de construire des équipes pluridisciplinaires.

A l’inverse ça n’a pas de sens de construire des équipes back, des équipes front, des équipes ops qui se refilent la balle entre chaque étape. Ce pattern est un bad smell.

La responsabilité des Product leaders, c’est de contribuer à créer des équipes [autonomes et alignées](https://eventuallycoding.com/2023/05/alignment-autonomy-context). Cette autonomie vient avec la pluridisciplinarité.

Donc au contraire, il ne faut pas chercher à casser les silos, mais plutôt à bien les construire : avoir les bonnes personnes dedans, leur donner le contexte nécessaire, et leur laisser ensuite de l'autonomie.

## Questions

Mesurez-vous votre temps de cycle ? 

Est-ce que vous le mesurez également pour toutes les actions du quotidien (temps pour créer une nouvelle application, temps pour onboarder un nouvel arrivant dans l'équipe, temps pour définir et écrire une ADR, etc.) ?

Mesurez-vous l’usage des fonctionnalités de votre produit ?

Quelle est la dernière fois que vous avez tué une fonctionnalité sur votre produit ?

Diriez-vous que la résolution de la dette technique se fait en best effort ou bien avez-vous des programmes qui traitent ces points qui sont en cours ?

Avez-vous déjà entendu les mots steering committee, SAFe ou PMO chez vous ? ;)

## Ressources

* [Killing complexity before complexity kills growth](https://www.bain.com/insights/killing-complexity-before-complexity-kills-growth/)
* [Comment perdre la surcharge featurale](https://www.youtube.com/watch?v=6SczOv0TSkI)
* [Principles over process](https://mikefisher.substack.com/p/principles-over-process)
* [Process People](https://www.svpg.com/process-people/)
* [Scaling with process vs people](https://www.svpg.com/scaling-with-process-vs-people/)



::tip
Ce billet de blog fait partie du livre [Impactful Software Engineering](/2023/02/impactful-software-engineering).  
N'hésitez pas à lire les autres chapitres.
::
