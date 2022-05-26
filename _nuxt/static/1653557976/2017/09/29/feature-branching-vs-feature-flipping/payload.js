__NUXT_JSONP__("/2017/09/29/feature-branching-vs-feature-flipping", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){return {data:[{article:{slug:"feature-branching-vs-feature-flipping",description:"![](\u002Fimages\u002FqXMqcos.png)\nJe ne sais pas vous mais de mon côté, dans chaque job que j'ai pu faire j'ai toujours retrouvé certains éternels débats. Vou...",id:"1316",title:"Feature branching vs Feature Flipping",date:"2017-09-29",categories:["waza"],tags:[m,"feature-flipping",o],img:"qXMqcos.png",cover:p,toc:[],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:b,tag:j,props:{alt:k,src:"\u002Fimages\u002FqXMqcos.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Je ne sais pas vous mais de mon côté, dans chaque job que j'ai pu faire j'ai toujours retrouvé certains éternels débats. Vous avez des sujets qui semblent donner des sueurs froides à quasiment tout le monde dans toutes les sociétés. Je pourrais citer : la documentation (interne ou externe), la stratégie de branches, la façon d'estimer des tâches, les conventions de codages etc... etc... etc..."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"En tout début de carrière ces sujets sont passionnants (ou pas), en tout cas vous vous y intéressez puisque la majorité relèvent de l'organisation, la méthode de travail et bon, ça parait plutôt une bonne chose d'être bien organisé."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Je vous dévoile un peu la fin du film, au fil du temps, refaire les mêmes débats dans chaque nouvelle équipe vous lasse(ra) un peu. C'est pour cela que bosser sur un produit, qui plus est le sien, pendant plusieurs années est vraiment agréable. Ces sujets ont été taclés et désormais que la tuyauterie est faite on s'occupe de construire des fonctionnalités, chose finalement bien plus agréable. Cela ne veut pas dire qu'on y retouche plus mais le degré de maturité est assez fort pour que chaque changement ne soit pas une révolution mais une amélioration. Toutes les personnes qui enchaînent des projets de durée variant entre 6 mois et 2 ans avec des équipes dont le turnover implique un renouvellement complet tous les 18 mois savent de quoi je parle."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2017\u002F09\u002F65220-60709_backdrop_scale_1280xauto1.jpg",rel:[f,g,h],target:i},children:[{type:b,tag:j,props:{alt:k,src:"\u002Fimages\u002F65220-60709_backdrop_scale_1280xauto1.jpg"},children:[]}]},{type:a,value:" Bref, je tenais donc à partager l'expérience Hopwork sur notre stratégie de branches et où nous en sommes aujourd'hui."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Je vais spoiler dès le début cependant avant de rentrer dans le vif du sujet. Pour notre stratégie de branches, on a choisi la méthode la plus simple : le nobranching."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Remarquez c'est un peu une ligne de conduite personnelle depuis quelques années, on fait du nosql, avec Lateral-thoughts on avait créé une nossii, et pour les estimations on a suivi le même chemin, on fait du noestimate..."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Bon mais en pratique cela veut dire quoi ? Non parce qu'à ce stade de ce billet, il y a peut être des gens qui ne savent même pas de quelle branche je parle."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2017\u002F09\u002F9cd1d-branch.png",rel:[f,g,h],target:i},children:[{type:b,tag:j,props:{alt:k,src:"\u002Fimages\u002F9cd1d-branch.png"},children:[]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Déjà revenons aux fondamentaux, qu'est ce qu'une branche et pourquoi en faisons nous ? Quand je parle de branche, je parle de branche de code, c'est à dire une version de votre application construire à partir d'un instant T et qui diverge du code principal. Mettons que le code soit versionné sur git, on dit du code de votre application qui est mis en production et mis à jour tous les jours par l'équipe de développement qu'il est sur une branche de développement appelé master. Cette branche on peut la voir comme une succession de modifications, appelées commits pour les néophytes même si je doute que des néophytes lisent cet article, qui nous amène d'une version A à une version B."},{type:b,tag:e,props:{href:"https:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2019\u002F10\u002F1dcb8-history-abc-11.png",rel:[f,g,h],target:i},children:[{type:b,tag:j,props:{alt:k,src:"\u002Fimages\u002F1dcb8-history-abc-11.png"},children:[]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Et parfois ce développement n'est pas si linéaire que cela, on va créer des ramifications (d'ou le nom de branche) à partir d'un instant T. Ces branches vont donc diverger du code principal puis être refusionné plus tard."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2017\u002F09\u002Fb8992-sans-titre.jpg",rel:[f,g,h],target:i},children:[{type:b,tag:j,props:{alt:k,src:"\u002Fimages\u002Fb8992-sans-titre.jpg"},children:[]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Pourquoi fait-on cela ? Eh bien il arrive que l'on souhaite isoler le développement d'une fonctionnalité un peu longue dans une branche le temps qu'elle soit prête. On peut aussi souhaiter travailler en isolation des autres développeurs le temps de finir un travail sur plusieurs jours (hyper mauvaise idée en général)."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Dans certaines sociétés j'ai vu des stratégies de branches plutôt complexe avec des branches dédiées à chaque environnement : dev, intégration, preproduction, prod, des coupes circuits pour des hotfix qui avaient la particularité de partir de la branche de production pour revenir vers la branche de développement et des branches par fonctionnalités (on appellera cela le feature branching)."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Dès qu'on va commencer à mettre en place des politiques de gestion de branches, on va entrer dans des considérations parfois assez compliqué, par exemple comment mettre en place de l'intégration continue sur chaque branche, y compris les branches temporaires créées au fil d'une seule journée pour des devs spécifiques."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Comment s'assurer que ce qui part en production correspond à ce qui été testé ? Ou même comment relire un historique git..."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Lorsque cela prend des proportions vraiment importantes il arrive qu'une ou plusieurs personnes devienne(nt) un \"intégrateur\" dont le rôle sera de faire les fusions de branches. J'ai vu des boîtes dont cette corvée était tournante chaque lundi et je vais vous dire, c'était pas une partie de plaisir. Il faut dire que l'outil de gestion de source utilisé n'était pas non plus super adapté pour cela."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Je vais pas m'étaler plus sur le sujet, j'ai évidemment un avis subjectif et en réalité il existe sans doute des contextes où c'est nécessaire et des équipes pour lesquelles cela marche très bien. Il existe même des outils qui se sont crées par dessus les outils de gestion de sources pour résoudre certains problèmes évoqués plus haut : "},{type:b,tag:e,props:{href:"https:\u002F\u002Fdanielkummer.github.io\u002Fgit-flow-cheatsheet\u002F",rel:[f,g,h],target:i},children:[{type:a,value:"gitflow"}]},{type:a,value:q},{type:b,tag:e,props:{href:"https:\u002F\u002Fguides.github.com\u002Fintroduction\u002Fflow",rel:[f,g,h],target:i},children:[{type:a,value:"githubflow"}]},{type:a,value:q},{type:b,tag:e,props:{href:"https:\u002F\u002Fbitbucket.org\u002Fyujiewu\u002Fhgflow\u002Foverview",rel:[f,g,h],target:i},children:[{type:a,value:"hgflow"}]},{type:a,value:" etc..."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Pour ma part, je suis assez rapidement arrivé a une conclusion qu'il fallait essayer d'éviter de tomber dans ces problématiques. J'appelle cela de la complexité inutile et si on peut s'en passer c'est bien."}]},{type:a,value:c},{type:b,tag:"blockquote",props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"La perfection est atteinte, non pas lorsqu'il n'y a plus rien à ajouter, mais lorsqu'il n'y a plus rien à retirer.\""}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Antoine de Saint Exupéry"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Dès 2011 j'ai souhaité essayer une nouvelle approche, le feature flipping. Le feature flipping consistant à activer ou désactiver une fonctionnalité avec une interrupteur logiciel plutôt que de la développer dans une branche séparée. C'est l'interrupteur logiciel qui aura la charge d'isoler ce code le temps qu'il soit prêt."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"En 2011 donc, il s'agissait d'une mission dans une boite que j'ai bien apprécié. La société venait de réaliser une très grosse refonte d'une partie de leur application sur une très longue période (plus d'1 an il me semble) et tout s'est passé sur une branche avec une double maintenance sur la branche principale et des fusions régulières entre les deux. Cela ne s'est pas passé sans difficultés dirons nous et l'atterrissage fut long et douloureux ^^"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"J'avais la chance de rejoindre au tout début un autre projet de refonte tout aussi importante sur une autre partie du site. Et nous sommes cette fois partis du principe que tout se ferait sur la branche principale avec des systèmes de conditions dans le code pour activer ou non le nouveau ou l'ancien code. La refonte était très importante d'une point de vue architecturale, on introduisait de nouvelles briques techniques (moteur de rêgles par exemple), découpage d'un monolithe en plusieurs applis et beaucoup de refactoring."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Le nouveau code et l'ancien code était régulièrement mis en production. Des conditions dans le code (de simple if then else) permettait de passer dans l'ancienne application ou la nouvelle. En fonctionnant de la sorte, il est apparu rapidement qu'il était malgré tout possible de mettre en commun certains refactoring ou même d'éprouver du code, qui bien que dormant pouvait avoir des effets de bord en terme de déploiement ou d'opérations. Et cela a eu de nombreux avantages, notamment d'éviter les fameux effets tunnels."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Bien sûr que parfois le nouveau code apportait des complications mais, en étant fusionné avec le code de production, la détection de ces problèmes survenait très vite et donc le temps de correction\u002Fadaptation était également très rapide. Enfin, les refactoring ont pu aller bien plus loin puisque nous avions moins peur des fusions de code. Bref, je ne vais pas plus loin, c'était une première approche et elle fut très concluante avec de nombreux résultats positifs. Malgré tout il y avait quand même des systèmes de branches complexes entre environnements (intégration, prod, autres parties de l'application etc...) et la pratique restait relativement répandue dans certains cas. De plus le système de conditions avec de simples if pouvait sembler artisanal."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Parlons d'Hopwork maintenant. Sur Hopwork nous appliquons cette stratégie \"no branching\" sur l'application complète. Concrètement, personne ne travaille sur une branche et tout le code est fait sur la branche principale avec la consigne stricte : \""},{type:b,tag:"strong",props:{},children:[{type:a,value:"on doit pouvoir livrer en production à n'importe quel moment"}]},{type:a,value:"\"."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Et c'est le cas :"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:j,props:{alt:k,src:"\u002Fimages\u002FDEiapjfWAAAUEey.jpg"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"L'un des outils qui nous aide à faire cela est "},{type:b,tag:e,props:{href:"http:\u002F\u002Fff4j.org\u002F",rel:[f,g,h],target:i},children:[{type:a,value:o}]},{type:a,value:". Cette librairie permet de passer d'un système artisanal avec de simples if à un système un peu plus complet :"}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"paramétrage à chaud des interrupteurs logiciels à activer ou désactiver"}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"stockage de l'état en base de données"}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"stockage en cache dans Redis pour les performances"}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"une console d'administration web"}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"des stratégies d'activation avancées qui permettent d'activer pour une population d'utilisateur, par tranche d'ip, par localisation géographique etc..."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Au moment de la rédaction de ce billet nous avons 94 fonctionnalités régie par ff4j et de toute nature : redirection de bots, changement d'interface utilisateur, test AB, nouvel algo de recherche, fonctionnalités admin etc... En dev cela signifie que, en principe, toute fonctionnalité que nous présumons être un peu longue, avoir des impacts ou juste être sortie plus tard se verra associer à un identifiant dans un fichier de features ff4j. Exemple avec la fonctionnalité de détection de visage sur les envois de photos de profil :"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"    \u003Cfeature uid=\"profile-picture-face-check\"  description=\"Ensure the uploaded profile picture contains at least a face\"             enable=\"false\"\u002F\u003E"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Le code ensuite fera référence à cette fonctionnalité pour activer ou non une fonctionnalité :"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"if (ff4j.isEnabled(\"profile-picture-resolution-check\"))"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"... \u002F\u002F fais la détection de visage"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Sur une page jsp de la même facon nous avons une taglib nous permettant d'inclure ou non une portion de jsp :"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"\u003Cff4j:enable featureid=\"my-feature\"\u003E... \u003C\u002Fff4j:enable\u003E"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Evidemment il y a tout de même des contraintes."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Il faut penser à supprimer le code mort régulièrement lorsqu'on finit par adopter définitivement une nouvelle fonctionnalité et que le ff4j ne sera plus mis en OFF. En bref, il faut faire du ménage. Logique."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Il faut constamment penser à créer un code qui cohabite avec l'ancien. Parfois, c'est loin d'être trivial quand on change le modèle de données mais quel confort en cas de retour arrière... Dans les tests, surtout les tests d'interface, il faut penser aux fonctionnalités actives ou non et penser à tester les différents cas. Mais cela reste simple, il suffit d'appeler l'API de FF4J pour activer ou non une fonctionnalité."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"En comparaison lorsque l'on travaille par branche, il faut établir des stratégies de CI pour lancer les tests sur chaque branche. Et par expérience, les tests d'intégration et de performance sont les principales victimes de cette stratégie car il est assez coûteux de les maintenir par branche. Dès que l'on repose sur des outils externes comme des bases de données, des files de message, ou si ces tests sont lancés la nuit a cause de leur lenteur, on ne s'amuse pas à les dupliquer pour chaque branche. Avec le feature flipping, rien de tout cela."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Outre le confort de dev, un retour arrière suite à une mise en prod où une fonctionnalité s'avérerait défectueuse consiste juste à désactiver la fonctionnalité dans l'écran ff4j. Et croyez moi, c'est appréciable. Il est aussi possible de diffuser une nouvelle fonctionnalité en avant première sur une population. Je pense avoir fait un petit tour des avantages que nous y trouvons."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Pour l'anecdote en trainant sur un slack tech une fois j'avais assisté à une conversation où je n'ai pas souhaité participer et qui démontait cette pratique. Alors évidemment je ne doute pas que cette stratégie ne fera pas l'unanimité et ce billet n'a pas vocation à vous convaincre. Cette stratégie marche pour nous, c'est tout ce que je peux en dire. Et il y a sans doute des équipes pour qui le Feature Branching marche très bien."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2017\u002F09\u002Ff5805-featurebranch.jpg",rel:[f,g,h],target:i},children:[{type:b,tag:j,props:{alt:k,src:"\u002Fimages\u002Ff5805-featurebranch.jpg"},children:[]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"(Au fait, on met en prod tout les jours, parfois toutes les heures ;))"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Et si je devais trouver une référence un peu \"sérieuse\" sur le Feature flipping vs le Feature branching je vous renverrais à cet article de Martin Fowler qui partage la même vision et privilégie cette approche : "},{type:b,tag:e,props:{href:r,rel:[f,g,h],target:i},children:[{type:a,value:r}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Alors ca ne donne pas un sceau de crédibilité absolue mais ça a l'avantage de se dire que à la limite, si on se plante, on n'est pas tout seul. Et finalement c'est rassurant. Ou pas :)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Autre référence intéressante : "},{type:b,tag:e,props:{href:s,rel:[f,g,h],target:i},children:[{type:a,value:s}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Vous pouvez retourner à une activité normale."}]}]},dir:"\u002Farticles\u002F2017\u002F09\u002F29",path:"\u002Farticles\u002F2017\u002F09\u002F29\u002Ffeature-branching-vs-feature-flipping",extension:".md",createdAt:t,updatedAt:t,bodyPlainText:"\n\n\nJe ne sais pas vous mais de mon côté, dans chaque job que j'ai pu faire j'ai toujours retrouvé certains éternels débats. Vous avez des sujets qui semblent donner des sueurs froides à quasiment tout le monde dans toutes les sociétés. Je pourrais citer : la documentation (interne ou externe), la stratégie de branches, la façon d'estimer des tâches, les conventions de codages etc... etc... etc...\n\nEn tout début de carrière ces sujets sont passionnants (ou pas), en tout cas vous vous y intéressez puisque la majorité relèvent de l'organisation, la méthode de travail et bon, ça parait plutôt une bonne chose d'être bien organisé.\n\nJe vous dévoile un peu la fin du film, au fil du temps, refaire les mêmes débats dans chaque nouvelle équipe vous lasse(ra) un peu. C'est pour cela que bosser sur un produit, qui plus est le sien, pendant plusieurs années est vraiment agréable. Ces sujets ont été taclés et désormais que la tuyauterie est faite on s'occupe de construire des fonctionnalités, chose finalement bien plus agréable. Cela ne veut pas dire qu'on y retouche plus mais le degré de maturité est assez fort pour que chaque changement ne soit pas une révolution mais une amélioration. Toutes les personnes qui enchaînent des projets de durée variant entre 6 mois et 2 ans avec des équipes dont le turnover implique un renouvellement complet tous les 18 mois savent de quoi je parle.\n\n Bref, je tenais donc à partager l'expérience Hopwork sur notre stratégie de branches et où nous en sommes aujourd'hui.\n\nJe vais spoiler dès le début cependant avant de rentrer dans le vif du sujet. Pour notre stratégie de branches, on a choisi la méthode la plus simple : le nobranching.\n\nRemarquez c'est un peu une ligne de conduite personnelle depuis quelques années, on fait du nosql, avec Lateral-thoughts on avait créé une nossii, et pour les estimations on a suivi le même chemin, on fait du noestimate...\n\nBon mais en pratique cela veut dire quoi ? Non parce qu'à ce stade de ce billet, il y a peut être des gens qui ne savent même pas de quelle branche je parle.\n\n\n\nDéjà revenons aux fondamentaux, qu'est ce qu'une branche et pourquoi en faisons nous ? Quand je parle de branche, je parle de branche de code, c'est à dire une version de votre application construire à partir d'un instant T et qui diverge du code principal. Mettons que le code soit versionné sur git, on dit du code de votre application qui est mis en production et mis à jour tous les jours par l'équipe de développement qu'il est sur une branche de développement appelé master. Cette branche on peut la voir comme une succession de modifications, appelées commits pour les néophytes même si je doute que des néophytes lisent cet article, qui nous amène d'une version A à une version B.\n\nEt parfois ce développement n'est pas si linéaire que cela, on va créer des ramifications (d'ou le nom de branche) à partir d'un instant T. Ces branches vont donc diverger du code principal puis être refusionné plus tard.\n\n\n\nPourquoi fait-on cela ? Eh bien il arrive que l'on souhaite isoler le développement d'une fonctionnalité un peu longue dans une branche le temps qu'elle soit prête. On peut aussi souhaiter travailler en isolation des autres développeurs le temps de finir un travail sur plusieurs jours (hyper mauvaise idée en général).\n\nDans certaines sociétés j'ai vu des stratégies de branches plutôt complexe avec des branches dédiées à chaque environnement : dev, intégration, preproduction, prod, des coupes circuits pour des hotfix qui avaient la particularité de partir de la branche de production pour revenir vers la branche de développement et des branches par fonctionnalités (on appellera cela le feature branching).\n\nDès qu'on va commencer à mettre en place des politiques de gestion de branches, on va entrer dans des considérations parfois assez compliqué, par exemple comment mettre en place de l'intégration continue sur chaque branche, y compris les branches temporaires créées au fil d'une seule journée pour des devs spécifiques.\n\nComment s'assurer que ce qui part en production correspond à ce qui été testé ? Ou même comment relire un historique git...\n\nLorsque cela prend des proportions vraiment importantes il arrive qu'une ou plusieurs personnes devienne(nt) un \"intégrateur\" dont le rôle sera de faire les fusions de branches. J'ai vu des boîtes dont cette corvée était tournante chaque lundi et je vais vous dire, c'était pas une partie de plaisir. Il faut dire que l'outil de gestion de source utilisé n'était pas non plus super adapté pour cela.\n\nJe vais pas m'étaler plus sur le sujet, j'ai évidemment un avis subjectif et en réalité il existe sans doute des contextes où c'est nécessaire et des équipes pour lesquelles cela marche très bien. Il existe même des outils qui se sont crées par dessus les outils de gestion de sources pour résoudre certains problèmes évoqués plus haut : gitflow, githubflow, hgflow etc...\n\nPour ma part, je suis assez rapidement arrivé a une conclusion qu'il fallait essayer d'éviter de tomber dans ces problématiques. J'appelle cela de la complexité inutile et si on peut s'en passer c'est bien.\nLa perfection est atteinte, non pas lorsqu'il n'y a plus rien à ajouter, mais lorsqu'il n'y a plus rien à retirer.\"\n\nAntoine de Saint Exupéry\n\nDès 2011 j'ai souhaité essayer une nouvelle approche, le feature flipping. Le feature flipping consistant à activer ou désactiver une fonctionnalité avec une interrupteur logiciel plutôt que de la développer dans une branche séparée. C'est l'interrupteur logiciel qui aura la charge d'isoler ce code le temps qu'il soit prêt.\n\nEn 2011 donc, il s'agissait d'une mission dans une boite que j'ai bien apprécié. La société venait de réaliser une très grosse refonte d'une partie de leur application sur une très longue période (plus d'1 an il me semble) et tout s'est passé sur une branche avec une double maintenance sur la branche principale et des fusions régulières entre les deux. Cela ne s'est pas passé sans difficultés dirons nous et l'atterrissage fut long et douloureux ^^\n\nJ'avais la chance de rejoindre au tout début un autre projet de refonte tout aussi importante sur une autre partie du site. Et nous sommes cette fois partis du principe que tout se ferait sur la branche principale avec des systèmes de conditions dans le code pour activer ou non le nouveau ou l'ancien code. La refonte était très importante d'une point de vue architecturale, on introduisait de nouvelles briques techniques (moteur de rêgles par exemple), découpage d'un monolithe en plusieurs applis et beaucoup de refactoring.\n\nLe nouveau code et l'ancien code était régulièrement mis en production. Des conditions dans le code (de simple if then else) permettait de passer dans l'ancienne application ou la nouvelle. En fonctionnant de la sorte, il est apparu rapidement qu'il était malgré tout possible de mettre en commun certains refactoring ou même d'éprouver du code, qui bien que dormant pouvait avoir des effets de bord en terme de déploiement ou d'opérations. Et cela a eu de nombreux avantages, notamment d'éviter les fameux effets tunnels.\n\nBien sûr que parfois le nouveau code apportait des complications mais, en étant fusionné avec le code de production, la détection de ces problèmes survenait très vite et donc le temps de correction\u002Fadaptation était également très rapide. Enfin, les refactoring ont pu aller bien plus loin puisque nous avions moins peur des fusions de code. Bref, je ne vais pas plus loin, c'était une première approche et elle fut très concluante avec de nombreux résultats positifs. Malgré tout il y avait quand même des systèmes de branches complexes entre environnements (intégration, prod, autres parties de l'application etc...) et la pratique restait relativement répandue dans certains cas. De plus le système de conditions avec de simples if pouvait sembler artisanal.\n\nParlons d'Hopwork maintenant. Sur Hopwork nous appliquons cette stratégie \"no branching\" sur l'application complète. Concrètement, personne ne travaille sur une branche et tout le code est fait sur la branche principale avec la consigne stricte : \"on doit pouvoir livrer en production à n'importe quel moment\".\n\nEt c'est le cas :\n\n\n\nL'un des outils qui nous aide à faire cela est ff4j. Cette librairie permet de passer d'un système artisanal avec de simples if à un système un peu plus complet :\n\nparamétrage à chaud des interrupteurs logiciels à activer ou désactiver\nstockage de l'état en base de données\nstockage en cache dans Redis pour les performances\nune console d'administration web\ndes stratégies d'activation avancées qui permettent d'activer pour une population d'utilisateur, par tranche d'ip, par localisation géographique etc...\n\nAu moment de la rédaction de ce billet nous avons 94 fonctionnalités régie par ff4j et de toute nature : redirection de bots, changement d'interface utilisateur, test AB, nouvel algo de recherche, fonctionnalités admin etc... En dev cela signifie que, en principe, toute fonctionnalité que nous présumons être un peu longue, avoir des impacts ou juste être sortie plus tard se verra associer à un identifiant dans un fichier de features ff4j. Exemple avec la fonctionnalité de détection de visage sur les envois de photos de profil :\n\n\nLe code ensuite fera référence à cette fonctionnalité pour activer ou non une fonctionnalité :\n\nif (ff4j.isEnabled(\"profile-picture-resolution-check\"))\n\n... \u002F\u002F fais la détection de visage\n\nSur une page jsp de la même facon nous avons une taglib nous permettant d'inclure ou non une portion de jsp :\n\n... \n\nEvidemment il y a tout de même des contraintes.\n\nIl faut penser à supprimer le code mort régulièrement lorsqu'on finit par adopter définitivement une nouvelle fonctionnalité et que le ff4j ne sera plus mis en OFF. En bref, il faut faire du ménage. Logique.\n\nIl faut constamment penser à créer un code qui cohabite avec l'ancien. Parfois, c'est loin d'être trivial quand on change le modèle de données mais quel confort en cas de retour arrière... Dans les tests, surtout les tests d'interface, il faut penser aux fonctionnalités actives ou non et penser à tester les différents cas. Mais cela reste simple, il suffit d'appeler l'API de FF4J pour activer ou non une fonctionnalité.\n\nEn comparaison lorsque l'on travaille par branche, il faut établir des stratégies de CI pour lancer les tests sur chaque branche. Et par expérience, les tests d'intégration et de performance sont les principales victimes de cette stratégie car il est assez coûteux de les maintenir par branche. Dès que l'on repose sur des outils externes comme des bases de données, des files de message, ou si ces tests sont lancés la nuit a cause de leur lenteur, on ne s'amuse pas à les dupliquer pour chaque branche. Avec le feature flipping, rien de tout cela.\n\nOutre le confort de dev, un retour arrière suite à une mise en prod où une fonctionnalité s'avérerait défectueuse consiste juste à désactiver la fonctionnalité dans l'écran ff4j. Et croyez moi, c'est appréciable. Il est aussi possible de diffuser une nouvelle fonctionnalité en avant première sur une population. Je pense avoir fait un petit tour des avantages que nous y trouvons.\n\nPour l'anecdote en trainant sur un slack tech une fois j'avais assisté à une conversation où je n'ai pas souhaité participer et qui démontait cette pratique. Alors évidemment je ne doute pas que cette stratégie ne fera pas l'unanimité et ce billet n'a pas vocation à vous convaincre. Cette stratégie marche pour nous, c'est tout ce que je peux en dire. Et il y a sans doute des équipes pour qui le Feature Branching marche très bien.\n\n\n\n \n\n(Au fait, on met en prod tout les jours, parfois toutes les heures ;))\n\nEt si je devais trouver une référence un peu \"sérieuse\" sur le Feature flipping vs le Feature branching je vous renverrais à cet article de Martin Fowler qui partage la même vision et privilégie cette approche : https:\u002F\u002Fmartinfowler.com\u002Fbliki\u002FFeatureBranch.html\n\nAlors ca ne donne pas un sceau de crédibilité absolue mais ça a l'avantage de se dire que à la limite, si on se plante, on n'est pas tout seul. Et finalement c'est rassurant. Ou pas :)\n\nAutre référence intéressante : https:\u002F\u002Fdevops.com\u002Ffeature-branching-vs-feature-flags-whats-right-tool-job\u002F\n\nVous pouvez retourner à une activité normale.\n",readTime:{text:"11 min read",minutes:10.205,time:612300,words:2041}},relatedArticles:[{slug:"micro-services-la-composition-de-page-avec-zuul-et-sitemesh",description:"[![03BC](\u002Fimages\u002F07933-03bc.gif)](http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2015\u002F04\u002F07933-03bc.gif) Le dernier billet de ce blog entamait une min...",id:"1169",title:"Micro-services : la composition de page avec Zuul et Sitemesh",date:"2015-04-13",tags:[m,u,"sitemesh",v,n],img:"07933-03bc.gif",cover:"cover2.jpg",path:"\u002Farticles\u002F2015\u002F04\u002F13\u002Fmicro-services-la-composition-de-page-avec-zuul-et-sitemesh"},{slug:n,description:"[![spring-cloud](\u002Fimages\u002F3b14a-spring-cloud.png)](http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2015\u002F04\u002F3b14a-spring-cloud.png)Long time no see, le d...",id:"1160",title:"Micro-services : routing avec Zuul",date:"2015-04-09",tags:[m,u,v,"spring-cloud",n],img:"3b14a-spring-cloud.png",cover:"cover8.jpg",path:"\u002Farticles\u002F2015\u002F04\u002F09\u002Fzuul"},{slug:"vers-linfini-et-au-dela",description:"[![tumblr_lw0g09a2hf1qaz5oho1_500[1]](\u002Fimages\u002F1ace7-tumblr_lw0g09a2hf1qaz5oho1_5001.png)](https:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2019\u002F10\u002F1ace...",id:"1222",title:"Vers l'infini et au-delà",date:"2015-12-22",tags:[m,"gatling","jmeter","loader-io","performance"],img:"1ace7-tumblr_lw0g09a2hf1qaz5oho1_5001.png",cover:p,path:"\u002Farticles\u002F2015\u002F12\u002F22\u002Fvers-linfini-et-au-dela"}],_img:{"/_ipx/_/hugo-nb.jpg":"\u002F_nuxt\u002Fimage\u002Fc3e54c.jpg"}}],fetch:{},mutations:void 0}}("text","element","\n","p","a","nofollow","noopener","noreferrer","_blank","img","","li","backend","zuul","ff4j","cover4.jpg",", ","https:\u002F\u002Fmartinfowler.com\u002Fbliki\u002FFeatureBranch.html","https:\u002F\u002Fdevops.com\u002Ffeature-branching-vs-feature-flags-whats-right-tool-job\u002F","2022-05-26T09:38:09.019Z","microservices","spring-boot")));