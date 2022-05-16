__NUXT_JSONP__("/2014/12/03/spring-boot-et-ansible-sont-sur-un-bateau", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D){return {data:[{article:{slug:"spring-boot-et-ansible-sont-sur-un-bateau",description:"Il y a quelques jours je faisais un retweet [d'un article](http:\u002F\u002Fblog.adaofeliz.com\u002F2014\u002F11\u002F21\u002Ffirst-look-spring-boot-and-docker\u002F \"first-look-spring-...",title:"Spring-boot et Ansible sont sur un bateau",date:"2014-12-03",categories:["waza"],tags:["ansible","devops","ops",l],img:"61698-deploy.jpg",cover:"cover8.jpg",toc:[{id:m,depth:n,text:o},{id:p,depth:n,text:q}],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:a,value:"Il y a quelques jours je faisais un retweet "},{type:b,tag:e,props:{href:"http:\u002F\u002Fblog.adaofeliz.com\u002F2014\u002F11\u002F21\u002Ffirst-look-spring-boot-and-docker\u002F",rel:[f,g,h],target:i,title:"first-look-spring-boot-and-docker"},children:[{type:a,value:"d'un article"}]},{type:a,value:" sur lequel j'étais tombé d'une personne ayant automatisé son déploiement d'une application "},{type:b,tag:e,props:{href:"http:\u002F\u002Fprojects.spring.io\u002Fspring-boot\u002F",rel:[f,g,h],target:i,title:"Spring Boot"},children:[{type:a,value:l}]},{type:a,value:" sur un conteneur "},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.docker.com\u002F",rel:[f,g,h],target:i,title:r},children:[{type:a,value:r}]},{type:a,value:"."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Sur "},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.hopwork.com\u002F",rel:[f,g,h],target:i,title:"Hopwork"},children:[{type:a,value:"HopWork"}]},{type:a,value:" nous avons une approche qui peut ressembler sauf que nous n'utilisons pas Docker et que nous provisionnons avec Ansible. Oui, donc ça ressemble de loin, dans le noir et par temps brumeux me direz-vous ? Voyons en détail."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Lorsque nous sommes passés "},{type:b,tag:e,props:{href:"http:\u002F\u002Fwww.eventuallycoding.com\u002Findex.php\u002Fpaas-or-not-paas-that-is-the-question\u002F",rel:[f,g,h],target:i,title:"PAAS or not PAAS, that is the question"},children:[{type:a,value:"d'un PAAS (Heroku) à nos propres serveurs"}]},{type:a,value:", nous avions un point important, il était hors de question de complexifier le déploiement."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Pour rappel, sur "},{type:b,tag:e,props:{href:"http:\u002F\u002Fwww.heroku.com",rel:[f,g,h],target:i,title:s},children:[{type:a,value:s}]},{type:a,value:", un simple \""},{type:b,tag:t,props:{},children:[{type:a,value:"git push heroku master"}]},{type:a,value:"\" suffit. \"Hors de Git, point de salut\" comme dirait l'autre. J'avais jeté un oeil sur deux solutions semblables à l'époque :"}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"Git-deliver : "},{type:b,tag:e,props:{href:u,rel:[f,g,h],target:i},children:[{type:a,value:u}]}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"Git-deploy : "},{type:b,tag:e,props:{href:v,rel:[f,g,h],target:i},children:[{type:a,value:v}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"git-deliver est très intéressant sur le principe. C'est un projet jeune et celui qui le maintient semble impliqué et très pro. Il nécessite l'installation d'un script deliver.sh (qui marchera sous windows avec git bash) et l'apprentissage de ces nouvelles commandes. En soi c'est un petit défaut car il faut apprendre à chaque nouvel arrivant ces commandes. Mais ça reste simple. Là ou j'étais plus mitigé, c'était sur le fait d'utiliser des scripts shells en tant que hook et d'utiliser rsync pour du déploiement multi hôte ("},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Farnoo\u002Fgit-deliver\u002Fissues\u002F62",rel:[f,g,h],target:i},children:[{type:a,value:"comme suggéré ici"}]},{type:a,value:"). Finalement je trouvais qu'il y avait trop de plomberie à faire moi-même. Et je suis feignant. Enfin disons que j'essaie d'éviter de faire ce que d'autres ont déjà fait."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"git-deploy se veut plus simple mais nous allons voir que c'est aussi parce qu'il fait moins de choses. #Troll Déjà il part avec un gros point négatif, il faut installer une gem Ruby #\u002FTroll. Par contre à la différence du premier, nul besoin de l'installer sur tous les postes. Il se déclenche par des hooks git sur un simple git push."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Et puis vient le drame quand tu comprends que l'ensemble des scripts exécutes par les hooks sont fait pour une appli RoR (Ruby on Rails pour ceux qui se la jouent un peu c'est RoR, vous pouvez me remercier, vous brillerez en société ce soir). Je suppose qu'il doit être envisageable de modifier l'outil pour mettre ces propres scripts de hooks mais je n'ai pas été plus loin. Cependant plusieurs points m'ont intéressé :"}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"le fait d'avoir les scripts de déploiement dans le même repo git que les sources applicatives"}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"l'utilisation de git push (sans passer par une nouvelle commande)"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"NPTL (Note pour toi lecteur) : si je n'ai pas utilisé ces solutions, ce n'est pas qu'elles n'étaient pas bonnes. N'hésites pas à les essayer car il est possible que pour ton cas d'usage elles conviennent très bien. Dans le même temps, nous avions déjà utilisé "},{type:b,tag:e,props:{href:"http:\u002F\u002Fwww.ansible.com\u002Fhome",rel:[f,g,h],target:i,title:w},children:[{type:a,value:w}]},{type:a,value:" pour l'installation de nos composants sur les serveurs (rabbitmq, elasticsearch, mongo, monit etc...). Alors pourquoi pas l'utiliser pour le déploiement des applicatifs. Et comme l'auteur du blog que je cite en haut de cet article, je trouve qu'il est très simple de déployer une application Spring-Boot. J'en avais déjà parlé dans "},{type:b,tag:e,props:{href:"http:\u002F\u002Fwww.eventuallycoding.com\u002Findex.php\u002Fspring-boot-dans-le-doute-reboote\u002F",rel:[f,g,h],target:i,title:"Spring Boot : dans le doute reboote"},children:[{type:a,value:"ce billet"}]},{type:a,value:"  . Pour résumer, Spring-boot permet de créer un simple jar exécutable, exploitable, monitorable etc... Ansible\u002FSpring-Boot, ça se précise."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Comment nous procédons en quelques étapes :"}]},{type:a,value:c},{type:b,tag:x,props:{id:m},children:[{type:b,tag:e,props:{href:"#ajout-dun-r%C3%A9pertoire-deploy-%C3%A0-la-racine-du-projet",ariaHidden:y,tabIndex:z},children:[{type:b,tag:A,props:{className:[B,C]},children:[]}]},{type:a,value:o}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2014\u002F12\u002F61698-deploy.jpg",rel:[f,g,h],target:i},children:[{type:b,tag:"img",props:{alt:"deploy",src:"\u002Fimages\u002F61698-deploy.jpg"},children:[]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Ce répertoire contient un script ansible et les fichiers dont il a besoin :"}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"deploy.yml : le script ansible"}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"starter.sh\u002Fstopper.sh : les scripts d'arrêt\u002Frelance qui seront appelés par monit"}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"analytics.monit : la conf monit qui indique comment surveiller cette application"}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"integration\u002Fproduction : les fichiers permettant de décrire l'inventaire des machines"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"J'aime bien cette approche car cela me permet d'utiliser tout ce que sait bien faire ansible sans avoir à le code moi-même. Voici ce que ca peut donner pour une de nos applications :"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"[gist id=\"ac20ada7400c1d7dda31\" file=\"analytics.yml\" width=\"100%\"]"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Ansible est très souple : Si jamais je dois ajouter des règles iptables, il me suffit d'ajouter ces étapes :"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"[gist id=\"ac20ada7400c1d7dda31\" file=\"iptables.yml\" width=\"100%\"]"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Si jamais cette application doit être servi par un frontal nginx :"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"[gist id=\"ac20ada7400c1d7dda31\" file=\"nginx.yml\" width=\"100%\"]"}]},{type:a,value:c},{type:b,tag:x,props:{id:p},children:[{type:b,tag:e,props:{href:"#configuration-de-jenkins-pour-jouer-ces-%C3%A9tapes-sur-un-push-git",ariaHidden:y,tabIndex:z},children:[{type:b,tag:A,props:{className:[B,C]},children:[]}]},{type:a,value:q}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Pour que Jenkins déclenche le déploiement, nous le faisons surveiller le repo git mais uniquement sur une branche. Ici par exemple integ. Il execute un build standard avec maven pour vérifier que tout se passe bien mais il exécute une étape de plus en post steps en exécutant une commande shell :"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"echo \"Deploiement en cours\"\nansible-playbook -vvvv -i .deploy\u002F${ENV_NAME} .deploy\u002Fdeploy.yml"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Inutile de dire que ansible est installé sur la machine où se trouve jenkins et que la configuration ssh nécessaire a été faite pour la communication entre cette machine est la\u002Fles machine(s) à déployer."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Comme il se peut que votre application nécessite des prérequis (comme par exemple un nginx, monit etc...) j'ai un Trigger jenkins qui déclenche l'exécution d'un playbook Ansible et bloque le build s'il ne passe pas correctement. Pour nous, cela déploie notamment la conf applicative. And that's all. En développement il suffit donc de faire : "},{type:b,tag:"strong",props:{},children:[{type:b,tag:t,props:{},children:[{type:a,value:"git push origin master:integ"}]}]},{type:a,value:" pour envoyer nos devs en cours de master vers la branche integ et déclencher le build. Evidemment tout est tracé sur git et jenkins. Au final, nous sommes content de cette solution et elle fonctionne bien désormais. Mais elle pourrait être amélioré :"}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"Ajouter une application (micro services pour faire hype) nécessite de faire pas mal de conf jenkins pour le déploiement sur les machines d'intégration et de production, configuration faite aujourd'hui à la main."}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"Nous avons une sorte de petit hack pour alimenter un fichier version.yml par l'utilisation de filtre maven qui permet de passer le numéro de version à ansible afin de trouver le nom du jar à déployer. Ca pollue le script de build maven et on peut facilement l'oublier."}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"Dans nos étapes de déploiement, on coupe complètement monit alors que je souhaiterais juste désactiver le monitoring de l'appli en question. On doit pouvoir faire mieux."}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"Je serais plus à l'aise d'avoir l'inventaire des machines regroupé en un seul endroit plutot que le dupliquer et le mettre dans les sources (les fichiers integration\u002Fproduction)"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Vous pouvez retourner à une activité normale."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Mais je vous laisse un petit jeu. Pouvez-vous retrouver le jeu de mot très pourri qui s'est glissé dans ce billet ?"}]}]},dir:"\u002Farticles\u002F2014\u002F12\u002F03",path:"\u002Farticles\u002F2014\u002F12\u002F03\u002Fspring-boot-et-ansible-sont-sur-un-bateau",extension:".md",createdAt:D,updatedAt:D,bodyPlainText:"\nIl y a quelques jours je faisais un retweet d'un article sur lequel j'étais tombé d'une personne ayant automatisé son déploiement d'une application spring-boot sur un conteneur Docker.\n\nSur HopWork nous avons une approche qui peut ressembler sauf que nous n'utilisons pas Docker et que nous provisionnons avec Ansible. Oui, donc ça ressemble de loin, dans le noir et par temps brumeux me direz-vous ? Voyons en détail.\n\nLorsque nous sommes passés d'un PAAS (Heroku) à nos propres serveurs, nous avions un point important, il était hors de question de complexifier le déploiement.\n\nPour rappel, sur Heroku, un simple \"git push heroku master\" suffit. \"Hors de Git, point de salut\" comme dirait l'autre. J'avais jeté un oeil sur deux solutions semblables à l'époque :\n\nGit-deliver : https:\u002F\u002Fgithub.com\u002Farnoo\u002Fgit-deliver\u002F\nGit-deploy : https:\u002F\u002Fgithub.com\u002Fmislav\u002Fgit-deploy\n\ngit-deliver est très intéressant sur le principe. C'est un projet jeune et celui qui le maintient semble impliqué et très pro. Il nécessite l'installation d'un script deliver.sh (qui marchera sous windows avec git bash) et l'apprentissage de ces nouvelles commandes. En soi c'est un petit défaut car il faut apprendre à chaque nouvel arrivant ces commandes. Mais ça reste simple. Là ou j'étais plus mitigé, c'était sur le fait d'utiliser des scripts shells en tant que hook et d'utiliser rsync pour du déploiement multi hôte (comme suggéré ici). Finalement je trouvais qu'il y avait trop de plomberie à faire moi-même. Et je suis feignant. Enfin disons que j'essaie d'éviter de faire ce que d'autres ont déjà fait.\n\ngit-deploy se veut plus simple mais nous allons voir que c'est aussi parce qu'il fait moins de choses. #Troll Déjà il part avec un gros point négatif, il faut installer une gem Ruby #\u002FTroll. Par contre à la différence du premier, nul besoin de l'installer sur tous les postes. Il se déclenche par des hooks git sur un simple git push.\n\nEt puis vient le drame quand tu comprends que l'ensemble des scripts exécutes par les hooks sont fait pour une appli RoR (Ruby on Rails pour ceux qui se la jouent un peu c'est RoR, vous pouvez me remercier, vous brillerez en société ce soir). Je suppose qu'il doit être envisageable de modifier l'outil pour mettre ces propres scripts de hooks mais je n'ai pas été plus loin. Cependant plusieurs points m'ont intéressé :\n\nle fait d'avoir les scripts de déploiement dans le même repo git que les sources applicatives\nl'utilisation de git push (sans passer par une nouvelle commande)\n\nNPTL (Note pour toi lecteur) : si je n'ai pas utilisé ces solutions, ce n'est pas qu'elles n'étaient pas bonnes. N'hésites pas à les essayer car il est possible que pour ton cas d'usage elles conviennent très bien. Dans le même temps, nous avions déjà utilisé Ansible pour l'installation de nos composants sur les serveurs (rabbitmq, elasticsearch, mongo, monit etc...). Alors pourquoi pas l'utiliser pour le déploiement des applicatifs. Et comme l'auteur du blog que je cite en haut de cet article, je trouve qu'il est très simple de déployer une application Spring-Boot. J'en avais déjà parlé dans ce billet  . Pour résumer, Spring-boot permet de créer un simple jar exécutable, exploitable, monitorable etc... Ansible\u002FSpring-Boot, ça se précise.\n\nComment nous procédons en quelques étapes :\n\nAjout d'un répertoire .deploy à la racine du projet\n\ndeploy\n\nCe répertoire contient un script ansible et les fichiers dont il a besoin :\n\ndeploy.yml : le script ansible\nstarter.sh\u002Fstopper.sh : les scripts d'arrêt\u002Frelance qui seront appelés par monit\nanalytics.monit : la conf monit qui indique comment surveiller cette application\nintegration\u002Fproduction : les fichiers permettant de décrire l'inventaire des machines\n\nJ'aime bien cette approche car cela me permet d'utiliser tout ce que sait bien faire ansible sans avoir à le code moi-même. Voici ce que ca peut donner pour une de nos applications :\n\n\\[gist id=\"ac20ada7400c1d7dda31\" file=\"analytics.yml\" width=\"100%\"\\]\n\nAnsible est très souple : Si jamais je dois ajouter des règles iptables, il me suffit d'ajouter ces étapes :\n\n\\[gist id=\"ac20ada7400c1d7dda31\" file=\"iptables.yml\" width=\"100%\"\\]\n\nSi jamais cette application doit être servi par un frontal nginx :\n\n\\[gist id=\"ac20ada7400c1d7dda31\" file=\"nginx.yml\" width=\"100%\"\\]\n\nConfiguration de jenkins pour jouer ces étapes sur un push git\n\nPour que Jenkins déclenche le déploiement, nous le faisons surveiller le repo git mais uniquement sur une branche. Ici par exemple integ. Il execute un build standard avec maven pour vérifier que tout se passe bien mais il exécute une étape de plus en post steps en exécutant une commande shell :\n\necho \"Deploiement en cours\"\nansible-playbook -vvvv -i .deploy\u002F${ENV\\_NAME} .deploy\u002Fdeploy.yml\n\nInutile de dire que ansible est installé sur la machine où se trouve jenkins et que la configuration ssh nécessaire a été faite pour la communication entre cette machine est la\u002Fles machine(s) à déployer.\n\nComme il se peut que votre application nécessite des prérequis (comme par exemple un nginx, monit etc...) j'ai un Trigger jenkins qui déclenche l'exécution d'un playbook Ansible et bloque le build s'il ne passe pas correctement. Pour nous, cela déploie notamment la conf applicative. And that's all. En développement il suffit donc de faire : git push origin master:integ pour envoyer nos devs en cours de master vers la branche integ et déclencher le build. Evidemment tout est tracé sur git et jenkins. Au final, nous sommes content de cette solution et elle fonctionne bien désormais. Mais elle pourrait être amélioré :\n\nAjouter une application (micro services pour faire hype) nécessite de faire pas mal de conf jenkins pour le déploiement sur les machines d'intégration et de production, configuration faite aujourd'hui à la main.\nNous avons une sorte de petit hack pour alimenter un fichier version.yml par l'utilisation de filtre maven qui permet de passer le numéro de version à ansible afin de trouver le nom du jar à déployer. Ca pollue le script de build maven et on peut facilement l'oublier.\nDans nos étapes de déploiement, on coupe complètement monit alors que je souhaiterais juste désactiver le monitoring de l'appli en question. On doit pouvoir faire mieux.\nJe serais plus à l'aise d'avoir l'inventaire des machines regroupé en un seul endroit plutot que le dupliquer et le mettre dans les sources (les fichiers integration\u002Fproduction)\n\n \n\nVous pouvez retourner à une activité normale.\n\nMais je vous laisse un petit jeu. Pouvez-vous retrouver le jeu de mot très pourri qui s'est glissé dans ce billet ?\n",readTime:{text:"6 min read",minutes:5.375,time:322500,words:1075}},_img:{"/_ipx/_/hugo-nb.jpg":"\u002F_nuxt\u002Fimage\u002Fc3e54c.jpg"}}],fetch:{},mutations:void 0}}("text","element","\n","p","a","nofollow","noopener","noreferrer","_blank","li","ul","spring-boot","ajout-dun-répertoire-deploy-à-la-racine-du-projet",3,"Ajout d'un répertoire .deploy à la racine du projet","configuration-de-jenkins-pour-jouer-ces-étapes-sur-un-push-git","Configuration de jenkins pour jouer ces étapes sur un push git","Docker","Heroku","em","https:\u002F\u002Fgithub.com\u002Farnoo\u002Fgit-deliver\u002F","https:\u002F\u002Fgithub.com\u002Fmislav\u002Fgit-deploy","Ansible","h3","true",-1,"span","icon","icon-link","2022-05-16T18:42:45.615Z")));