---
id: "515"
title: "Devoxx France 2012 jour 1/3"
description: "[![](/images/logo-devoxx-france-seul.png \"Logo-Devoxx-France-seul\")](http://eventuallycoding.com/wp-content/uploads/2012/04/logo-devoxx-france-seul.pn..."
date: "2012-04-22"
categories: 
  - "waza"
tags: 
  - "devoxx"
img: "logo-devoxx-france-seul.png"
cover: "cover2.jpg"
---

[![](/images/logo-devoxx-france-seul.png "Logo-Devoxx-France-seul")](http://eventuallycoding.com/wp-content/uploads/2012/04/logo-devoxx-france-seul.png)Eh bien ça y est, on est dimanche, j'ai fini de récupérer de ces 3 jours de conférences et je vais faire un petit résumé de ce que j'ai pu y voir. Tout d'abord, ayant eu la chance de voir l'évènement grandir en coulisses, ce fut une super bonne surprise de voir autant de monde. Ok on avait l'info depuis quelques semaines déjà, la conférence était pleine alors que l'on attendait la moitié de gens en décembre. Ca remet les choses en perspective de voir arriver cette foule de geeks sur trois jours. Enfin je vous laisse imaginer cette perspective vu des vestiaires ^^ Au moins je pourrais dire que j'ai du vous voir tous passer si jamais vous avez déposé quelque chose ;) Donc 1200 personnes en dehors de l'aspect comptable, ça veut dire quoi ? Eh bien ca souligne l'importance de la communauté de développeurs en France et c'est une bonne nouvelle. Jusqu'ici nous nous savions déjà via les user groups que cette communauté était bien vivante mais restait malgré tout assez confidentielle. La conférence What's Next l'année dernière avait été un bel évènement (je n'ai malheureusement pas les chiffres sur le nombre d'inscrit) mais cette fois on est passé à l'étape au dessus et surtout, avec 75% de talks francophones, elle met en évidence une très belle communauté de speakers, du novice prometteur à la rock star confirmé qui parle la langue de Molière.

Première université à laquelle j'ai pu assister mercredi : Les 5 mercenaires du Devops. Devops c'est un thème qui me tient à coeur. Pour résumer en quelques mots :

- c'est la responsabilisation des développeurs sur ce qui tourne en prod, le fameux "you build it, you run it" qui se transforme bien souvent en "you build it, you ruin it"...
- c'est une façon de construire son infrastructure comme on écrit du code et d'appliquer les mêmes recettes d'ingénierie : automatisation, répétabilité, fiabilité, testabilité

Popularisé par quelques grands du web qui réalisent de multiples mises en prod par semaine, voire par jours, ces pratiques commencent à faire parler d'elles dans la plupart des boites même si on sent que la route est encore longue. Même si ce n'était pas une track majeur de Devoxx France, ce fut l'un des thèmes récurrents de plusieurs présentations. Bon sinon sur la forme on a eu l'occasion de voir 5 cowboys en stetson marron nous faire une belle présentation et nous parler de déploiement automatisé à partir de [Jenkins](http://jenkins-ci.org/ "Jenkins"), d'utilisation des RPM (rappelez vous la [prez d'Henri Gomez au Paris Jug](http://www.slideshare.net/mobile/henri.gomez/20120110-paris-jugpackagingnatif "Packaging natif") d'il y a quelques mois), d'utilisation de profiles Spring pour la configurabilité, de [Puppet](http://puppetlabs.com/ "Puppet") et [Chef](http://wiki.opscode.com/display/chef/Home "Chef") pour la configuration des environnements et plein d'autres choses.

 

L'après midi j'ai été voir Neal Ford et son labs "[The Productive Programmer](http://www.nealford.com/mypastconferences.html)". Pour être honnête, en fait il ne s'agissait pas d'un labs mais plutot d'une réflexion sur le thème de la productivité du progammeur moderne. Pour pas mal de choses il s'agissait d'enfoncer des portes ouvertes. Le même sujet traité par une autre personne ne m'aurait sans doute pas intéressé mais il faut rendre à Neal ce qui appartient à Neal, il présente sacrément bien.

Il a présenté des principes généraux sur les mécaniques permettant d'être productif et a illustré via différents outils très puissants glané à droite à gauche. Je vous liste ceux qui m'ont le plus intéressé :

- le clipboard avec mémoire sous windows : [clcl](http://www.nakka.com/soft/clcl/index_eng.html)
- [jedi concentrate](http://anappaday.com/downloads/2006/09/day-10-jedi-concentrate.html) sous windows pour améliorer sa focalisation sur son développement en grisant le reste des applis
- google desktop pour s'éviter la navigation souris pour retrouver ces documents (plus maintenu par Google malheureusement)
- [virtua win](http://virtuawin.sourceforge.net/) pour avoir plusieurs bureaux sous windows
- [cygwin](http://www.cygwin.com/) pour se créer des bash permettant d'automatiser des actions sous windows

Il rappelait aussi quelques principes, couper les notifications emails ou messagerie instantanée, utiliser un casque, apprendre les raccourcis claviers de son IDE, cou. Bon ok, il précise qu'il faut éviter d'en arriver là :

[![](/images/focus.png "focus")](http://eventuallycoding.com/wp-content/uploads/2012/04/focus.png)

Il a ensuite listé quelques bons principes de programmation. Des principes plein de bon sens c'est vrai, mais comme une personne avait dit (je ne retrouve plus l'auteur) :

> "le bon sens fait parti des choses les mieux partagés au monde, c'est sans doute pour cela que tout le monde en a si peu".

Intéressant, il a réinsisté sur :

- le TDD
- les outils d'analyse statique (pmd, cpd, findbugs)
- la reflexivité

Sur cette présentation, si je devais en ressortir 3 choses en particulier ce serait les suivantes :

- le principe [yagni](http://fr.wikipedia.org/wiki/YAGNI "YAGNI"). Punaise celui là il faudrait vraiment l'enseigner partout et à tout le monde tellement j'en ai marre de coder des trucs qui serviront jamais à rien. J'ai adoré l'image suivante :

[![](/images/yagni-300x255.png "yagni")](http://hakanai.free.fr/wp-content/uploads/2012/04/yagni.png)

 

- la remise en cause de l'autorité établie quand c'est nécessaire. Il a rappelé le [théorème du singe](http://fr.wikipedia.org/wiki/Th%C3%A9or%C3%A8me_du_singe) que j'avais d'ailleurs [déjà abordé sur ce blog](http://hakanai.free.fr/index.php/attention-aux-habitudes/). Combien de fois vous a t-on dit _"ce n'est pas possible"_ et lorsque vous avez demandé pourquoi, on vous a juste dit _"Parce que"_...

et enfin le dernier qui rejoint le thème principal de la conférence tel que l'ai interprété : "fier d'être développeur"

Vous voyez l'image suivante ? Eh bien dites vous que vous évoluez dans le même environnement et qu'une autre personne sans vos compétences ne pourrait rien faire sans déclencher de catastrophes. Dites vous aussi que ce qui fait votre valeur c'est votre capacité à diagnostiquer et agir rapidement dans un environnement complexe.

[![](/images/plomberie.png "plomberie")](http://eventuallycoding.com/wp-content/uploads/2012/04/plomberie.png)

 

J'ai poursuivi avec deux format tools in action de 30 minutes :

- le déploiement continu avec [Rackspace](http://www.rackspace.com/), [Chef](http://wiki.opscode.com/display/chef/Home) et [Capistrano](https://github.com/capistrano/capistrano/wiki/Documentation-v2.x)

Super présentation de Bertrand Paquet qui a bluffé l'auditoire en déployant en production pendant la présentation et en rajoutant des noeuds à la volée sur une infrastructure entièrement automatisé. La stack technique était très impressionnante. Rien à dire, quand je vois que je passe 4 mois à obtenir un serveur et 3 mois pour qu'il soit configuré j'ai ressenti une grosse jalousie ^^ Bon en même temps je me console en me disant que si toutes les boites étaient parfaites on aurait plus de boulot... Ou pas, il serait juste plus intéressant...

- l'audit de code avec [Sonar](http://www.sonarsource.org/)

Il s'agissait d'une présentation des nouveautés de la version 3.0 de Sonar qui venait juste de sortir pour l'occasion (!!). La notation de qualimétrie différentiel sur le code, la capacité à ne mesurer l'évolution que sur le code nouvellement produit, est très intéressante sur la plupart des produits legacy. A mettre en place une fois testé.

La journée s'est finalement terminé par le dîner des speakers auquel j'avais la chance d'assister. Bonne bouffe, bonne ambiance, des discussions sympa, bref, ce fut sympa.

Fin du premier jour, fier d'être développeur mais un peu crevé quand même.
