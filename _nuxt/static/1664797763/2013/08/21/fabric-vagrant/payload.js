__NUXT_JSONP__("/2013/08/21/fabric-vagrant", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S){return {data:[{article:{slug:"fabric-vagrant",description:"[![vagrant](\u002Fimages\u002Fc143b-vagrant.png)](http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2013\u002F08\u002Fc143b-vagrant.png)Petit jeu, est-ce que vous vous retro...",id:"924",title:"Vagrant et Fabric : prise en main",date:"2013-08-21",categories:["waza"],tags:[s,t,u],img:"c143b-vagrant.png",cover:"cover2.jpg",toc:[{id:v,depth:k,text:w},{id:x,depth:k,text:y},{id:z,depth:k,text:A},{id:B,depth:k,text:C},{id:D,depth:k,text:E},{id:F,depth:k,text:G},{id:H,depth:k,text:I}],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2013\u002F08\u002Fc143b-vagrant.png",rel:[f,g,h],target:i},children:[{type:b,tag:J,props:{alt:u,src:"\u002Fimages\u002Fc143b-vagrant.png"},children:[]}]},{type:a,value:"Petit jeu, est-ce que vous vous retrouvez dans les différentes situations ci-dessous :"}]},{type:a,value:c},{type:b,tag:K,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"Vous avez un environnement assez complexe à reproduire pour chaque poste de dev, un serveur de bases de données, une lib particulière, une configuration système etc…"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Vous avez tout tenté :"}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"un manuel d’accueil de 3 pages avec toutes les procédures d’install, mais dont l’une des étapes c’est d’aller chercher Gégé bureau 451 car “il y a que lui qui sait ce qu’il faut faire à cette étape” (Vous vous rappelez de notre fameux "},{type:b,tag:e,props:{href:"http:\u002F\u002Fwww.eventuallycoding.com\u002Findex.php\u002Fetes-vous-pompier-pyromane\u002F",rel:[f,g,h],target:i,title:"Etes-vous pompier pyromane ?"},children:[{type:a,value:"pompier pyromane"}]},{type:a,value:" ?)."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"des échanges de fichier via USB ou NFS. Mais au fil du temps il y a des tas de versions dans différents répertoire et plus personne sait ce que c’est. A part Gégé qui a la bonne version sur son PC."}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:K,props:{start:k},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"Vos équipes ont toutes des postes Windows car les outils bureautiques imposé par votre société tourne dessus : Outlook, Office etc… Sauf que pour le développement vous avez besoin d’utiliser une plateforme Unix. Au début vous avez même testé tous les plugins FTP pour Eclipse, SublimeText, Intellij..."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Tiens, voici Gégé d'ailleurs..."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2013\u002F08\u002Ff3985-gege.gif",rel:[f,g,h],target:i},children:[{type:b,tag:J,props:{alt:"gege",src:"\u002Fimages\u002Ff3985-gege.gif"},children:[]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Et puis un jour, vous avez découvert l’utilité des machines virtuelles. Vous avez passé du temps à configurer une VM, vous avez installé tout ce qu’il fallait et vous l’avez diffusé."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Sauf que le temps a passé, les versions de certains outils ont évolué et chacun a effectué ces mises à jour dans son coin. La version de votre distribution aussi a changé et un beau jour la VM d’origine a tellement divergé qu’il a fallu mettre en place des procédures de mise à jour de vos VMs...."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Et si on reprenait nos habitudes de dev, qu’on versionnait notre environnement, qu’on le scriptait, voire même qu’on le testait avant diffusion ? Peut-être avez vous déjà entendu parler de traiter votre "},{type:b,tag:e,props:{href:"http:\u002F\u002Farchitects.dzone.com\u002Farticles\u002Finfrastructure-code",rel:[f,g,h],target:i},children:[{type:a,value:"infrastructure comme du code"}]},{type:a,value:" ?"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Dans ce cas, ce billet vous intéressera puisque nous allons parler de création de VM et de provisionning, le tout de façon automatisé et reproductible avec Vagrant."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Si vous avez lu le "},{type:b,tag:e,props:{href:"http:\u002F\u002Fwww.eventuallycoding.com\u002Findex.php\u002Ffabric-moi-un-cluster\u002F",rel:[f,g,h],target:i,title:"Fabric moi un cluster"},children:[{type:a,value:"dernier billet sur Fabric"}]},{type:a,value:", celui-ci poursuit dans la lignée. Cette fois-ci je vous propose d’utiliser "},{type:b,tag:e,props:{href:"http:\u002F\u002Fwww.vagrantup.com\u002F",rel:[f,g,h],target:i},children:[{type:a,value:"Vagrant"}]},{type:a,value:" pour créer une VM, et Fabric pour la configurer et installer les softs qu’il vous faut."}]},{type:a,value:c},{type:b,tag:l,props:{id:v},children:[{type:b,tag:e,props:{href:"#principe",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:w}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Pour résumer, Vagrant est un outil vous permettant de créer des machines virtuelles prêtes à l’emploi pour vos besoins, le tout avec un simple fichier de configuration. Ce sera donc ce fichier que nous versionnerons pour le partager dans l’équipe."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Vagrant repose sur des “fournisseurs (providers)” : "},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.virtualbox.org\u002F",rel:[f,g,h],target:i},children:[{type:a,value:"Virtual Box"}]},{type:a,value:", VMWare, AWS par défaut. Et vous pouvez ajouter des plugins pour gérer d’autres providers, "},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Fadrahon\u002Fvagrant-kvm",rel:[f,g,h],target:i},children:[{type:a,value:"KVM par exemple"}]},{type:a,value:L}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Dans ce billet, nous utiliserons VirtualBox 4.2.16 (attention à bien prendre une version à jour !)."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Pour “l’alimentation (provisionning)”, Vagrant repose sur des briques connues : Chef, Puppet, Ansible et du simple Shell. Là encore, en passant par des plugins on peut en rajouter et nous utiliserons justement "},{type:b,tag:e,props:{href:"https:\u002F\u002Fgist.github.com\u002FSirScott\u002F5707611",rel:[f,g,h],target:i},children:[{type:a,value:"le plugin Fabric"}]},{type:a,value:L}]},{type:a,value:c},{type:b,tag:l,props:{id:x},children:[{type:b,tag:e,props:{href:"#installation",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:y}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Rien d’exotique, Vagrant a des packages pour les différents OS :"}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:b,tag:e,props:{href:M,rel:[f,g,h],target:i},children:[{type:a,value:M}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Mais pour notre cas nous allons ajouter deux choses supplémentaires :"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Fabric  : que nous installerons avec"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"pip install Fabric"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"La petite subtilité si vous utilisez Windows c’est qu’il faut installer pycrypto manuellement pour que Fabric fonctionne. Vous trouverez le package ici "},{type:b,tag:e,props:{href:N,rel:[f,g,h],target:i},children:[{type:a,value:N}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Et le plugin vagrant Fabric :"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"vagrant plugin install vagrant-fabric"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Ensuite il vous suffirait d’aller dans un répertoire vierge et de taper :"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"$ vagrant init precise32 "},{type:b,tag:e,props:{href:O,rel:[f,g,h],target:i},children:[{type:a,value:O}]},{type:a,value:"\n$ vagrant up\n$ vagrant ssh"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Ces commandes vous permettraient d’initialiser une VM Ubuntu Precise 32bits, de la démarrer et de vous y connecter en SSH."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Mais allons plus loin."}]},{type:a,value:c},{type:b,tag:l,props:{id:z},children:[{type:b,tag:e,props:{href:"#le-fichier-vagrantfile",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:A}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Le fichier Vagrantfile a été créé lorsque vous avez fait vagrant init precise32."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Ce fichier contient la configuration de votre VM. Ce fichier va vous permettre entre autre :"}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"de faire suivre des ports entre votre machine et la VM"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"de partager des répertoires entre les deux machines"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"de configurer le réseau de votre VM"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"de provisionner la VM"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{id:B},children:[{type:b,tag:e,props:{href:"#la-configuration-r%C3%A9seau",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:C}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Par défaut votre machine virtuelle est accessible en ssh via le port 2222. Vagrant a effectué un reroutage du port 2222 de votre machine vers le port 22 de votre VM."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Cette technique peut s’avérer suffisante dans bien des cas. Si vous avez juste besoin d’un routage de ce type pour voir un apache et un elasticsearch installé sur la VM, il vous suffit d’écrire ceci :"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"config.vm.network :forwarded_port, guest: 80, host: 8080\nconfig.vm.network :forwarded_port, guest: 9200, host: 9200"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Dans d’autres cas, si par exemple vous voulez utiliser plusieurs VMs et qu’elles soient toutes disponibles sur un réseau privé au sein de votre machine, alors vous allez plutôt configurer des IPs pour chaque machines :"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"config.vm.network :private_network, ip: \"192.168.50.4\""}]},{type:a,value:c},{type:b,tag:l,props:{id:D},children:[{type:b,tag:e,props:{href:"#le-partage-de-r%C3%A9pertoire",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:E}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Partagez un répertoire entre votre VM et la machine hôte peut avoir plusieurs intérêt :"}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"éviter que chaque nouvelle VM télécharge les mêmes choses et conserve un cache commun, par exemple celui d’APT"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Partagez votre répertoire de développement, vous permettant ainsi que développer sous votre IDE préféré sur votre machine tout en ayant tous les fichiers partagés sur la VM."}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Pour cela, vous allez déclarer des sync folder :"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"config.vm.synced_folder 'C:Usershugovagrantaptcache', \"\u002Fvar\u002Fcache\u002Fapt\u002Farchives\"\nconfig.vm.synced_folder 'D:Devsrcsample', \"\u002Fvagrant\u002Fsrc\""}]},{type:a,value:c},{type:b,tag:l,props:{id:F},children:[{type:b,tag:e,props:{href:"#le-provisionning",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:G}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Le provisionning va consister lors de la création de la VM à effectuer la configuration de la machine :"}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"configuration système"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"installation de softs"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Ici nous allons utiliser Fabric comme suit :"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"config.vm.provision :fabric do |fab|\nfab.tasks = [\"java es_install\"]\nend"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Nous avons juste déclaré deux tâches à appeler, et ces tâches sont déclarées dans un fichier fabfile.py présent au même niveau que votre fichier Vagrantfile."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Ce fichier fabfile est appelé par Vagrant pour la machine qui vient d’être monté installant dans notre exemple Java et elasticsearch."}]},{type:a,value:c},{type:b,tag:l,props:{id:H},children:[{type:b,tag:e,props:{href:"#et-en-%C3%A9quipe-",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:I}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Voilà, nous avons fait un tour rapide. Grâce à Vagrant nous avons pu rapidement monter une VM sur notre machine avec un elasticsearch fonctionnel. Vous pouvez désormais partager ces fichiers de configuration pour votre équipe afin que chacun utilise le même environnement de travail. En cas de modif, changement d’OS, changement de configuration système etc… vous n’avez qu’à reprendre les fichiers Vagrantfile et Fabfile, travailler en local pour les mettre à jour et publier vos modifs."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Rien ne vous empêche aussi de tester la création de vos VM en appelant des scripts de vérification de la machine virtuelle créé, par exemple un script qui teste qu’il y a bien un elasticsearch qui répond sur un port donné de votre nouvelle VM. Et tout ceci, vous pouvez l’automatiser si ce processus de création de VM est vraiment critique pour vous."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Ensuite dans votre équipe, chacun peut réappliquer les modifs de provisionning :"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"vagrant provision"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"ou bien réinitialiser complètement la VM :"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"vagrant reload"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"ou encore la refaire de zéro :"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"vagrant destroy"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"vagrant up"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Et si vous voulez jouer avec les versions complètes de ces fichiers, vous retrouverez l’ensemble du code sous Github : "},{type:b,tag:e,props:{href:P,rel:[f,g,h],target:i},children:[{type:a,value:P}]}]}]},dir:"\u002Farticles\u002F2013\u002F08\u002F21",path:"\u002Farticles\u002F2013\u002F08\u002F21\u002Ffabric-vagrant",extension:".md",createdAt:Q,updatedAt:Q,bodyPlainText:"\nvagrantPetit jeu, est-ce que vous vous retrouvez dans les différentes situations ci-dessous :\n\n1) Vous avez un environnement assez complexe à reproduire pour chaque poste de dev, un serveur de bases de données, une lib particulière, une configuration système etc…\n\nVous avez tout tenté :\n\nun manuel d’accueil de 3 pages avec toutes les procédures d’install, mais dont l’une des étapes c’est d’aller chercher Gégé bureau 451 car “il y a que lui qui sait ce qu’il faut faire à cette étape” (Vous vous rappelez de notre fameux pompier pyromane ?).\n\ndes échanges de fichier via USB ou NFS. Mais au fil du temps il y a des tas de versions dans différents répertoire et plus personne sait ce que c’est. A part Gégé qui a la bonne version sur son PC.\n\n\n2) Vos équipes ont toutes des postes Windows car les outils bureautiques imposé par votre société tourne dessus : Outlook, Office etc… Sauf que pour le développement vous avez besoin d’utiliser une plateforme Unix. Au début vous avez même testé tous les plugins FTP pour Eclipse, SublimeText, Intellij...\n\n \n\nTiens, voici Gégé d'ailleurs...\n\ngege\n\nEt puis un jour, vous avez découvert l’utilité des machines virtuelles. Vous avez passé du temps à configurer une VM, vous avez installé tout ce qu’il fallait et vous l’avez diffusé.\n\nSauf que le temps a passé, les versions de certains outils ont évolué et chacun a effectué ces mises à jour dans son coin. La version de votre distribution aussi a changé et un beau jour la VM d’origine a tellement divergé qu’il a fallu mettre en place des procédures de mise à jour de vos VMs....\n\nEt si on reprenait nos habitudes de dev, qu’on versionnait notre environnement, qu’on le scriptait, voire même qu’on le testait avant diffusion ? Peut-être avez vous déjà entendu parler de traiter votre infrastructure comme du code ?\n\nDans ce cas, ce billet vous intéressera puisque nous allons parler de création de VM et de provisionning, le tout de façon automatisé et reproductible avec Vagrant.\n\nSi vous avez lu le dernier billet sur Fabric, celui-ci poursuit dans la lignée. Cette fois-ci je vous propose d’utiliser Vagrant pour créer une VM, et Fabric pour la configurer et installer les softs qu’il vous faut.\n\nPrincipe\n\nPour résumer, Vagrant est un outil vous permettant de créer des machines virtuelles prêtes à l’emploi pour vos besoins, le tout avec un simple fichier de configuration. Ce sera donc ce fichier que nous versionnerons pour le partager dans l’équipe.\n\nVagrant repose sur des “fournisseurs (providers)” : Virtual Box, VMWare, AWS par défaut. Et vous pouvez ajouter des plugins pour gérer d’autres providers, KVM par exemple.\n\nDans ce billet, nous utiliserons VirtualBox 4.2.16 (attention à bien prendre une version à jour !).\n\nPour “l’alimentation (provisionning)”, Vagrant repose sur des briques connues : Chef, Puppet, Ansible et du simple Shell. Là encore, en passant par des plugins on peut en rajouter et nous utiliserons justement le plugin Fabric.\n\nInstallation\n\nRien d’exotique, Vagrant a des packages pour les différents OS :\n\nhttp:\u002F\u002Fdownloads.vagrantup.com\u002F\n\nMais pour notre cas nous allons ajouter deux choses supplémentaires :\n\nFabric  : que nous installerons avec\n\npip install Fabric\n\nLa petite subtilité si vous utilisez Windows c’est qu’il faut installer pycrypto manuellement pour que Fabric fonctionne. Vous trouverez le package ici http:\u002F\u002Fwww.voidspace.org.uk\u002Fpython\u002Fmodules.shtml#pycrypto\n\nEt le plugin vagrant Fabric :\n\nvagrant plugin install vagrant-fabric\n\nEnsuite il vous suffirait d’aller dans un répertoire vierge et de taper :\n\n$ vagrant init precise32 http:\u002F\u002Ffiles.vagrantup.com\u002Fprecise32.box\n$ vagrant up\n$ vagrant ssh\n\nCes commandes vous permettraient d’initialiser une VM Ubuntu Precise 32bits, de la démarrer et de vous y connecter en SSH.\n\nMais allons plus loin.\n\nLe fichier Vagrantfile\n\nLe fichier Vagrantfile a été créé lorsque vous avez fait vagrant init precise32.\n\nCe fichier contient la configuration de votre VM. Ce fichier va vous permettre entre autre :\n\nde faire suivre des ports entre votre machine et la VM\n\nde partager des répertoires entre les deux machines\n\nde configurer le réseau de votre VM\n\nde provisionner la VM\n\n\nLa configuration réseau\n\nPar défaut votre machine virtuelle est accessible en ssh via le port 2222. Vagrant a effectué un reroutage du port 2222 de votre machine vers le port 22 de votre VM.\n\nCette technique peut s’avérer suffisante dans bien des cas. Si vous avez juste besoin d’un routage de ce type pour voir un apache et un elasticsearch installé sur la VM, il vous suffit d’écrire ceci :\n\nconfig.vm.network :forwarded\\_port, guest: 80, host: 8080\nconfig.vm.network :forwarded\\_port, guest: 9200, host: 9200\n\nDans d’autres cas, si par exemple vous voulez utiliser plusieurs VMs et qu’elles soient toutes disponibles sur un réseau privé au sein de votre machine, alors vous allez plutôt configurer des IPs pour chaque machines :\n\nconfig.vm.network :private\\_network, ip: \"192.168.50.4\"\n\nLe partage de répertoire\n\nPartagez un répertoire entre votre VM et la machine hôte peut avoir plusieurs intérêt :\n\néviter que chaque nouvelle VM télécharge les mêmes choses et conserve un cache commun, par exemple celui d’APT\n\nPartagez votre répertoire de développement, vous permettant ainsi que développer sous votre IDE préféré sur votre machine tout en ayant tous les fichiers partagés sur la VM.\n\n\nPour cela, vous allez déclarer des sync folder :\n\nconfig.vm.synced\\_folder 'C:Usershugovagrantaptcache', \"\u002Fvar\u002Fcache\u002Fapt\u002Farchives\"\nconfig.vm.synced\\_folder 'D:Devsrcsample', \"\u002Fvagrant\u002Fsrc\"\n\nLe provisionning\n\nLe provisionning va consister lors de la création de la VM à effectuer la configuration de la machine :\n\nconfiguration système\n\ninstallation de softs\n\n\nIci nous allons utiliser Fabric comme suit :\n\n \n\nconfig.vm.provision :fabric do |fab|\n  fab.tasks = \\[\"java es\\_install\"\\]\nend\n\n \n\nNous avons juste déclaré deux tâches à appeler, et ces tâches sont déclarées dans un fichier fabfile.py présent au même niveau que votre fichier Vagrantfile.\n\nCe fichier fabfile est appelé par Vagrant pour la machine qui vient d’être monté installant dans notre exemple Java et elasticsearch.\n\nEt en équipe ?\n\nVoilà, nous avons fait un tour rapide. Grâce à Vagrant nous avons pu rapidement monter une VM sur notre machine avec un elasticsearch fonctionnel. Vous pouvez désormais partager ces fichiers de configuration pour votre équipe afin que chacun utilise le même environnement de travail. En cas de modif, changement d’OS, changement de configuration système etc… vous n’avez qu’à reprendre les fichiers Vagrantfile et Fabfile, travailler en local pour les mettre à jour et publier vos modifs.\n\nRien ne vous empêche aussi de tester la création de vos VM en appelant des scripts de vérification de la machine virtuelle créé, par exemple un script qui teste qu’il y a bien un elasticsearch qui répond sur un port donné de votre nouvelle VM. Et tout ceci, vous pouvez l’automatiser si ce processus de création de VM est vraiment critique pour vous.\n\nEnsuite dans votre équipe, chacun peut réappliquer les modifs de provisionning :\n\nvagrant provision\n\nou bien réinitialiser complètement la VM :\n\nvagrant reload\n\nou encore la refaire de zéro :\n\nvagrant destroy\n\nvagrant up\n\n \n\nEt si vous voulez jouer avec les versions complètes de ces fichiers, vous retrouverez l’ensemble du code sous Github : https:\u002F\u002Fgithub.com\u002Fhlassiege\u002Ffabric-vagrant\n",readTime:{text:"6 min read",minutes:5.94,time:356400,words:1188}},relatedArticles:[{slug:"spring-boot-et-ansible-sont-sur-un-bateau",description:"Il y a quelques jours je faisais un retweet [d'un article](http:\u002F\u002Fblog.adaofeliz.com\u002F2014\u002F11\u002F21\u002Ffirst-look-spring-boot-and-docker\u002F \"first-look-spring-...",id:"1119",title:"Spring-boot et Ansible sont sur un bateau",date:"2014-12-03",tags:[R,s,"ops","spring-boot"],img:"61698-deploy.jpg",cover:S,path:"\u002Farticles\u002F2014\u002F12\u002F03\u002Fspring-boot-et-ansible-sont-sur-un-bateau"},{slug:"monit-pour-monitorer-vos-serveurs",description:"Aujourd’hui je tenais à vous présenter [Monit](http:\u002F\u002Fmmonit.com\u002Fmonit\u002F), un bel outil permettant de monitorer vos serveurs et vos process. Le site in...",id:"1102",title:"Monit - pour monitorer vos serveurs",date:"2014-07-23",tags:[s,"monit"],img:"e76bc-cloudinary.png",cover:S,path:"\u002Farticles\u002F2014\u002F07\u002F23\u002Fmonit-pour-monitorer-vos-serveurs"},{slug:"ansible-timeoff-lt-1ere-journee",description:"[![ansible](\u002Fimages\u002F5570d-ansible.png)](http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2014\u002F03\u002F5570d-ansible.png)Nous y voici ! Le timeoff Lateral-Tho...",id:"1051",title:"Ansible (timeoff LT 1ère journée)",date:"2014-03-17",tags:[R,s,t,"timeoff"],img:"5570d-ansible.png",cover:"cover4.jpg",path:"\u002Farticles\u002F2014\u002F03\u002F17\u002Fansible-timeoff-lt-1ere-journee"}],_img:{"/_ipx/_/hugo-nb.jpg":"\u002F_nuxt\u002Fimage\u002Fc3e54c.jpg"}}],fetch:{},mutations:void 0}}("text","element","\n","p","a","nofollow","noopener","noreferrer","_blank","li",2,"h2","true",-1,"span","icon","icon-link","ul","devops","fabric","vagrant","principe","Principe","installation","Installation","le-fichier-vagrantfile","Le fichier Vagrantfile","la-configuration-réseau","La configuration réseau","le-partage-de-répertoire","Le partage de répertoire","le-provisionning","Le provisionning","et-en-équipe-","Et en équipe ?","img","ol",".","http:\u002F\u002Fdownloads.vagrantup.com\u002F","http:\u002F\u002Fwww.voidspace.org.uk\u002Fpython\u002Fmodules.shtml#pycrypto","http:\u002F\u002Ffiles.vagrantup.com\u002Fprecise32.box","https:\u002F\u002Fgithub.com\u002Fhlassiege\u002Ffabric-vagrant","2022-10-03T11:47:30.169Z","ansible","cover3.jpg")));