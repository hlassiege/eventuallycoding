---
id: "1316"
title: "Feature branching vs Feature Flipping"
description: "![](/images/qXMqcos.png)

Je ne sais pas vous mais de mon côté, dans chaque job que j'ai pu faire j'ai toujours retrouvé certains éternels débats. Vou..."
date: "2017-09-29"
categories: 
  - "waza"
tags: 
  - "backend"
  - "feature-flipping"
  - "ff4j"
img: "qXMqcos.png"
cover: "cover4.jpg"
---

![](/images/qXMqcos.png)

Je ne sais pas vous mais de mon côté, dans chaque job que j'ai pu faire j'ai toujours retrouvé certains éternels débats. Vous avez des sujets qui semblent donner des sueurs froides à quasiment tout le monde dans toutes les sociétés. Je pourrais citer : la documentation (interne ou externe), la stratégie de branches, la façon d'estimer des tâches, les conventions de codages etc... etc... etc...

En tout début de carrière ces sujets sont passionnants (ou pas), en tout cas vous vous y intéressez puisque la majorité relèvent de l'organisation, la méthode de travail et bon, ça parait plutôt une bonne chose d'être bien organisé.

Je vous dévoile un peu la fin du film, au fil du temps, refaire les mêmes débats dans chaque nouvelle équipe vous lasse(ra) un peu. C'est pour cela que bosser sur un produit, qui plus est le sien, pendant plusieurs années est vraiment agréable. Ces sujets ont été taclés et désormais que la tuyauterie est faite on s'occupe de construire des fonctionnalités, chose finalement bien plus agréable. Cela ne veut pas dire qu'on y retouche plus mais le degré de maturité est assez fort pour que chaque changement ne soit pas une révolution mais une amélioration. Toutes les personnes qui enchaînent des projets de durée variant entre 6 mois et 2 ans avec des équipes dont le turnover implique un renouvellement complet tous les 18 mois savent de quoi je parle.

[![](/images/65220-60709_backdrop_scale_1280xauto1.jpg)](http://eventuallycoding.com/wp-content/uploads/2017/09/65220-60709_backdrop_scale_1280xauto1.jpg) Bref, je tenais donc à partager l'expérience Hopwork sur notre stratégie de branches et où nous en sommes aujourd'hui.

Je vais spoiler dès le début cependant avant de rentrer dans le vif du sujet. Pour notre stratégie de branches, on a choisi la méthode la plus simple : le nobranching.

Remarquez c'est un peu une ligne de conduite personnelle depuis quelques années, on fait du nosql, avec Lateral-thoughts on avait créé une nossii, et pour les estimations on a suivi le même chemin, on fait du noestimate...

Bon mais en pratique cela veut dire quoi ? Non parce qu'à ce stade de ce billet, il y a peut être des gens qui ne savent même pas de quelle branche je parle.

[![](/images/9cd1d-branch.png)](http://eventuallycoding.com/wp-content/uploads/2017/09/9cd1d-branch.png)

Déjà revenons aux fondamentaux, qu'est ce qu'une branche et pourquoi en faisons nous ? Quand je parle de branche, je parle de branche de code, c'est à dire une version de votre application construire à partir d'un instant T et qui diverge du code principal. Mettons que le code soit versionné sur git, on dit du code de votre application qui est mis en production et mis à jour tous les jours par l'équipe de développement qu'il est sur une branche de développement appelé master. Cette branche on peut la voir comme une succession de modifications, appelées commits pour les néophytes même si je doute que des néophytes lisent cet article, qui nous amène d'une version A à une version B.[![](/images/1dcb8-history-abc-11.png)](https://eventuallycoding.com/wp-content/uploads/2019/10/1dcb8-history-abc-11.png)

Et parfois ce développement n'est pas si linéaire que cela, on va créer des ramifications (d'ou le nom de branche) à partir d'un instant T. Ces branches vont donc diverger du code principal puis être refusionné plus tard.

[![](/images/b8992-sans-titre.jpg)](http://eventuallycoding.com/wp-content/uploads/2017/09/b8992-sans-titre.jpg)

Pourquoi fait-on cela ? Eh bien il arrive que l'on souhaite isoler le développement d'une fonctionnalité un peu longue dans une branche le temps qu'elle soit prête. On peut aussi souhaiter travailler en isolation des autres développeurs le temps de finir un travail sur plusieurs jours (hyper mauvaise idée en général).

Dans certaines sociétés j'ai vu des stratégies de branches plutôt complexe avec des branches dédiées à chaque environnement : dev, intégration, preproduction, prod, des coupes circuits pour des hotfix qui avaient la particularité de partir de la branche de production pour revenir vers la branche de développement et des branches par fonctionnalités (on appellera cela le feature branching).

Dès qu'on va commencer à mettre en place des politiques de gestion de branches, on va entrer dans des considérations parfois assez compliqué, par exemple comment mettre en place de l'intégration continue sur chaque branche, y compris les branches temporaires créées au fil d'une seule journée pour des devs spécifiques.

Comment s'assurer que ce qui part en production correspond à ce qui été testé ? Ou même comment relire un historique git...

Lorsque cela prend des proportions vraiment importantes il arrive qu'une ou plusieurs personnes devienne(nt) un "intégrateur" dont le rôle sera de faire les fusions de branches. J'ai vu des boîtes dont cette corvée était tournante chaque lundi et je vais vous dire, c'était pas une partie de plaisir. Il faut dire que l'outil de gestion de source utilisé n'était pas non plus super adapté pour cela.

Je vais pas m'étaler plus sur le sujet, j'ai évidemment un avis subjectif et en réalité il existe sans doute des contextes où c'est nécessaire et des équipes pour lesquelles cela marche très bien. Il existe même des outils qui se sont crées par dessus les outils de gestion de sources pour résoudre certains problèmes évoqués plus haut : [gitflow](https://danielkummer.github.io/git-flow-cheatsheet/), [githubflow](https://guides.github.com/introduction/flow), [hgflow](https://bitbucket.org/yujiewu/hgflow/overview) etc...

Pour ma part, je suis assez rapidement arrivé a une conclusion qu'il fallait essayer d'éviter de tomber dans ces problématiques. J'appelle cela de la complexité inutile et si on peut s'en passer c'est bien.

> La perfection est atteinte, non pas lorsqu'il n'y a plus rien à ajouter, mais lorsqu'il n'y a plus rien à retirer."
> 
> Antoine de Saint Exupéry

Dès 2011 j'ai souhaité essayer une nouvelle approche, le feature flipping. Le feature flipping consistant à activer ou désactiver une fonctionnalité avec une interrupteur logiciel plutôt que de la développer dans une branche séparée. C'est l'interrupteur logiciel qui aura la charge d'isoler ce code le temps qu'il soit prêt.

En 2011 donc, il s'agissait d'une mission dans une boite que j'ai bien apprécié. La société venait de réaliser une très grosse refonte d'une partie de leur application sur une très longue période (plus d'1 an il me semble) et tout s'est passé sur une branche avec une double maintenance sur la branche principale et des fusions régulières entre les deux. Cela ne s'est pas passé sans difficultés dirons nous et l'atterrissage fut long et douloureux ^^

J'avais la chance de rejoindre au tout début un autre projet de refonte tout aussi importante sur une autre partie du site. Et nous sommes cette fois partis du principe que tout se ferait sur la branche principale avec des systèmes de conditions dans le code pour activer ou non le nouveau ou l'ancien code. La refonte était très importante d'une point de vue architecturale, on introduisait de nouvelles briques techniques (moteur de rêgles par exemple), découpage d'un monolithe en plusieurs applis et beaucoup de refactoring.

Le nouveau code et l'ancien code était régulièrement mis en production. Des conditions dans le code (de simple if then else) permettait de passer dans l'ancienne application ou la nouvelle. En fonctionnant de la sorte, il est apparu rapidement qu'il était malgré tout possible de mettre en commun certains refactoring ou même d'éprouver du code, qui bien que dormant pouvait avoir des effets de bord en terme de déploiement ou d'opérations. Et cela a eu de nombreux avantages, notamment d'éviter les fameux effets tunnels.

Bien sûr que parfois le nouveau code apportait des complications mais, en étant fusionné avec le code de production, la détection de ces problèmes survenait très vite et donc le temps de correction/adaptation était également très rapide. Enfin, les refactoring ont pu aller bien plus loin puisque nous avions moins peur des fusions de code. Bref, je ne vais pas plus loin, c'était une première approche et elle fut très concluante avec de nombreux résultats positifs. Malgré tout il y avait quand même des systèmes de branches complexes entre environnements (intégration, prod, autres parties de l'application etc...) et la pratique restait relativement répandue dans certains cas. De plus le système de conditions avec de simples if pouvait sembler artisanal.

Parlons d'Hopwork maintenant. Sur Hopwork nous appliquons cette stratégie "no branching" sur l'application complète. Concrètement, personne ne travaille sur une branche et tout le code est fait sur la branche principale avec la consigne stricte : "**on doit pouvoir livrer en production à n'importe quel moment**".

Et c'est le cas :

![](/images/DEiapjfWAAAUEey.jpg)

L'un des outils qui nous aide à faire cela est [ff4j](http://ff4j.org/). Cette librairie permet de passer d'un système artisanal avec de simples if à un système un peu plus complet :

- paramétrage à chaud des interrupteurs logiciels à activer ou désactiver
- stockage de l'état en base de données
- stockage en cache dans Redis pour les performances
- une console d'administration web
- des stratégies d'activation avancées qui permettent d'activer pour une population d'utilisateur, par tranche d'ip, par localisation géographique etc...

Au moment de la rédaction de ce billet nous avons 94 fonctionnalités régie par ff4j et de toute nature : redirection de bots, changement d'interface utilisateur, test AB, nouvel algo de recherche, fonctionnalités admin etc... En dev cela signifie que, en principe, toute fonctionnalité que nous présumons être un peu longue, avoir des impacts ou juste être sortie plus tard se verra associer à un identifiant dans un fichier de features ff4j. Exemple avec la fonctionnalité de détection de visage sur les envois de photos de profil :

    <feature uid="profile-picture-face-check"  description="Ensure the uploaded profile picture contains at least a face"             enable="false"/>

Le code ensuite fera référence à cette fonctionnalité pour activer ou non une fonctionnalité :

if (ff4j.isEnabled("profile-picture-resolution-check")) 

... // fais la détection de visage

Sur une page jsp de la même facon nous avons une taglib nous permettant d'inclure ou non une portion de jsp :

<ff4j:enable featureid="my-feature">... </ff4j:enable>

Evidemment il y a tout de même des contraintes.

Il faut penser à supprimer le code mort régulièrement lorsqu'on finit par adopter définitivement une nouvelle fonctionnalité et que le ff4j ne sera plus mis en OFF. En bref, il faut faire du ménage. Logique.

Il faut constamment penser à créer un code qui cohabite avec l'ancien. Parfois, c'est loin d'être trivial quand on change le modèle de données mais quel confort en cas de retour arrière... Dans les tests, surtout les tests d'interface, il faut penser aux fonctionnalités actives ou non et penser à tester les différents cas. Mais cela reste simple, il suffit d'appeler l'API de FF4J pour activer ou non une fonctionnalité.

En comparaison lorsque l'on travaille par branche, il faut établir des stratégies de CI pour lancer les tests sur chaque branche. Et par expérience, les tests d'intégration et de performance sont les principales victimes de cette stratégie car il est assez coûteux de les maintenir par branche. Dès que l'on repose sur des outils externes comme des bases de données, des files de message, ou si ces tests sont lancés la nuit a cause de leur lenteur, on ne s'amuse pas à les dupliquer pour chaque branche. Avec le feature flipping, rien de tout cela.

Outre le confort de dev, un retour arrière suite à une mise en prod où une fonctionnalité s'avérerait défectueuse consiste juste à désactiver la fonctionnalité dans l'écran ff4j. Et croyez moi, c'est appréciable. Il est aussi possible de diffuser une nouvelle fonctionnalité en avant première sur une population. Je pense avoir fait un petit tour des avantages que nous y trouvons.

Pour l'anecdote en trainant sur un slack tech une fois j'avais assisté à une conversation où je n'ai pas souhaité participer et qui démontait cette pratique. Alors évidemment je ne doute pas que cette stratégie ne fera pas l'unanimité et ce billet n'a pas vocation à vous convaincre. Cette stratégie marche pour nous, c'est tout ce que je peux en dire. Et il y a sans doute des équipes pour qui le Feature Branching marche très bien.

[![](/images/f5805-featurebranch.jpg)](http://eventuallycoding.com/wp-content/uploads/2017/09/f5805-featurebranch.jpg)

 

(Au fait, on met en prod tout les jours, parfois toutes les heures ;))

Et si je devais trouver une référence un peu "sérieuse" sur le Feature flipping vs le Feature branching je vous renverrais à cet article de Martin Fowler qui partage la même vision et privilégie cette approche : [https://martinfowler.com/bliki/FeatureBranch.html](https://martinfowler.com/bliki/FeatureBranch.html)

Alors ca ne donne pas un sceau de crédibilité absolue mais ça a l'avantage de se dire que à la limite, si on se plante, on n'est pas tout seul. Et finalement c'est rassurant. Ou pas :)

Autre référence intéressante : [https://devops.com/feature-branching-vs-feature-flags-whats-right-tool-job/](https://devops.com/feature-branching-vs-feature-flags-whats-right-tool-job/)

Vous pouvez retourner à une activité normale.
