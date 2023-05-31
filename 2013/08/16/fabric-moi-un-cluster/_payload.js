export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T){return {data:{"/articles/2013/08/16/fabric-moi-un-cluster":{_path:"\u002Farticles\u002F2013\u002F08\u002F16\u002Ffabric-moi-un-cluster",_dir:"16",_draft:k,_partial:k,_locale:e,_empty:k,title:"Fabric moi un cluster",description:"Je vous propose dans ce billet de prendre en main Fabric...",id:"904",date:"2013-08-16",categories:["waza"],tags:["devops","fabric",i],img:"b9590-python.jpeg",cover:"cover2.jpg",readingTime:{text:"6 min read",minutes:5.27,time:316200,words:1054},body:{type:"root",children:[{type:a,tag:c,props:{},children:[{type:a,tag:"img",props:{alt:i,src:"\u002Fimages\u002Fb9590-python.jpeg"},children:[]},{type:b,value:"Je vous propose dans ce billet de prendre en main "},{type:a,tag:l,props:{href:"http:\u002F\u002Fdocs.fabfile.org\u002Fen\u002F1.7\u002F",rel:[m]},children:[{type:b,value:"Fabric"}]},{type:b,value:", un outil que j’ai utilisé récemment et qui vous permettra de scripter des déploiements sur plusieurs machines assez simplement."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour résumer, Fabric est une lib Python qui vous permet d’automatiser des executions de commandes via ssh sur des serveurs distants."}]},{type:a,tag:c,props:{},children:[{type:b,value:"En sus, Fabric permet de créer une topologie de votre application : quels sont les machines “web”, les machines “bases de données” etc..."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Grâce à ces infos, Fabric permet ensuite exécuter des scripts par famille de nœud. Par exemple installer la dernière version de votre Webapp sur tous les nœuds “web”."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Peut-être que si vous connaissiez déjà "},{type:a,tag:l,props:{href:"http:\u002F\u002Frundeck.org\u002F",rel:[m]},children:[{type:b,value:"Rundeck"}]},{type:b,value:" tout ceci vous rappelle quelque chose puisqu’il répond a peu près à la même problématique."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Python Fabric est plus simple d’utilisation, vous ne retrouverez pas l’application Web qui permettait de gérer votre topologie et vous ne retrouverez pas les hooks qui permettaient de déclencher des actions. Mais vous allez voir qu’on y perd pas au change."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pourquoi Fabric et pas simplement faire du script Shell ? Nous le verrons dans la suite du billet."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et pour illustrer ce billet par un exemple de la vraie vie, vous trouverez à la fin de ce billet les sources pour installer un Cluster de 3 noeuds pour elasticsearch, MongoDB et Cassandra qui devraient fonctionner sous Debian."}]},{type:a,tag:j,props:{id:n},children:[{type:b,value:o}]},{type:a,tag:d,props:{code:p,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:p}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Oui, super complexe..."}]},{type:a,tag:j,props:{id:q},children:[{type:b,value:r}]},{type:a,tag:c,props:{},children:[{type:b,value:"(issu de la doc)"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Dans un fichier nommé fabfile.py, écrire les lignes suivantes :"}]},{type:a,tag:d,props:{code:s,language:i,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:s}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Rien d’extraordinaire pour l’instant, nous allons juste executer cette commande sur des machines distantes."}]},{type:a,tag:d,props:{code:t,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:t}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"La même chose avec un script shell :"}]},{type:a,tag:d,props:{code:u,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:u}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Premier réflexe une fois qu’on connaît l’équivalent en shell, pourquoi pas du shell uniquement ? Voici mes raisons :"}]},{type:a,tag:"ul",props:{},children:[{type:a,tag:v,props:{},children:[{type:b,value:"je préfère coder en Python (la raison la plus subjective :))"}]},{type:a,tag:v,props:{},children:[{type:b,value:"je ne réinvente pas la roue, les appels ssh, le parallélisme, la gestion des erreurs, les familles de noeuds, tout est déjà codé"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Voyons cela en détail."}]},{type:a,tag:j,props:{id:w},children:[{type:b,value:x}]},{type:a,tag:c,props:{},children:[{type:b,value:"Changeons désormais notre méthode pour la remplacer par"}]},{type:a,tag:d,props:{code:y,language:i,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:y}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et lors de l’execution :"}]},{type:a,tag:d,props:{code:z,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:z}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Comme son nom l’indique, notre décorateur nous a permis de lancer notre commande en parallèle sur les hôtes passés en paramètre."}]},{type:a,tag:j,props:{id:A},children:[{type:b,value:B}]},{type:a,tag:c,props:{},children:[{type:b,value:"Comme je le disais en intro Fabric permet de gérer des topologies applicatives."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Par exemple, nous allons définir 3 type de rôles :"}]},{type:a,tag:d,props:{code:C,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:C}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et nous allons définir une tâche pour installer java uniquement sur les machines Web :"}]},{type:a,tag:d,props:{code:D,language:i,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:D}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"En tapant cette commande : fab java"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Fabric va lancer l’install de Java uniquement sur les machines de type “web”"}]},{type:a,tag:j,props:{id:E},children:[{type:b,value:F}]},{type:a,tag:c,props:{},children:[{type:b,value:"En réalité lorsque vous lancez une commande, il ne s’agit pas uniquement de lancer votre commande et basta. Vous espérez aussi que cela s’est bien passé. Fabric va vérifier cela pour vous en regardant le code retour de chaque opération. Exemple ici :"}]},{type:a,tag:d,props:{code:G,language:i,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:G}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et l’execution"}]},{type:a,tag:d,props:{code:H,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:H}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Evidemment parfois on s’attend à une erreur, par exemple sur la tâche suivante :"}]},{type:a,tag:d,props:{code:I,language:i,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:I}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et si MongoDB n’est pas démarré ? C’est un cas normal et la désinstall doit tout de même se poursuivre."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Dans ce cas, on pourra ignorer l’erreur :"}]},{type:a,tag:d,props:{code:J,language:i,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:J}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Le décorateur @with_settings vous permettra d’ignorer les erreurs pour une tâche entière."}]},{type:a,tag:j,props:{id:K},children:[{type:b,value:L}]},{type:a,tag:c,props:{},children:[{type:b,value:"Plutôt fréquent dans une installation, vous devez modifier la configuration par défaut. Fabric vous propose plusieurs méthodes pour cela à base de sed."}]},{type:a,tag:c,props:{},children:[{type:b,value:"La première, la plus simple dont on va se servir pour configurer le nom du cluster elasticsearch :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"sed('\u002Fetc\u002Felasticsearch\u002Felasticsearch.yml', '."},{type:a,tag:"em",props:{},children:[{type:b,value:"cluster.name:."}]},{type:b,value:"', 'cluster.name: eventuallycoding')"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Parfois cependant on a une logique plus alambiqué : si jamais la ligne n’existe pas tu la rajoutes, sinon tu la modifies (par exemple pour rajouter un dépot apt)."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Fabric vous propose ceci :"}]},{type:a,tag:d,props:{code:M,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:M}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"La ligne ne sera pas ajouté si elle existe déjà. Et surtout le fichier sera créé s’il n’existait pas."}]},{type:a,tag:j,props:{id:N},children:[{type:b,value:O}]},{type:a,tag:c,props:{},children:[{type:b,value:"Il arrive régulièrement d’avoir une “super tâche” Fabric qui ordonnance une mise à jour sur l’ensemble des noeuds, par exemple Web et Database. Ce serait dommage de devoir scripter en shell les appels successifs aux tâches Fabric non ?"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Donc Fabric vous propose d’appeler des tâches à l’intérieur d’une tâche :"}]},{type:a,tag:d,props:{code:P,language:i,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:P}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"La tâche deploy va lancer successivement les tâches migrate et update sur les bons noeuds de votre application."}]},{type:a,tag:j,props:{id:Q},children:[{type:b,value:R}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour bien faire les choses, nous allons modulariser nos instructions d’installation. Ici je vais vous présenter un cas concret, l’installation d’un cluster MongoDB, d’un cluster ElasticSearch et d’un cluster Cassandra."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pas question évidemment d’avoir toutes les instructions dans un seul fichier fabfile. Nous allons donc créer : elasticsearch.py, mongodb.py, cassandra.py."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Dans notre fichier fabfile.py il nous suffira de faire :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"import mongodb, elasticsearch, cassandra"}]},{type:a,tag:c,props:{},children:[{type:b,value:"afin d’avoir accès à l’ensemble des tâches présentes pour chaque module."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et ensuite pour l’utilisateur, pour connaître la liste des tâches disponibles :"}]},{type:a,tag:d,props:{code:S,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:S}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et voilà. Comme tout outil de qualité qui se respecte, sa simplicité nous a permis d’en faire le tour rapidement."}]},{type:a,tag:c,props:{},children:[{type:b,value:"En bonus vous pouvez aller voir ce repository github qui contient des scripts fabric pour installer MongoDB, ElasticSearch et Cassandra en cluster, chose dont j’ai eu besoin récemment pour réaliser des benchs sur les 3 (peut être un futur billet) :"}]},{type:a,tag:c,props:{},children:[{type:a,tag:l,props:{href:T,rel:[m]},children:[{type:b,value:T}]}]}],toc:{title:e,searchDepth:h,depth:h,links:[{id:n,depth:h,text:o},{id:q,depth:h,text:r},{id:w,depth:h,text:x},{id:A,depth:h,text:B},{id:E,depth:h,text:F},{id:K,depth:h,text:L},{id:N,depth:h,text:O},{id:Q,depth:h,text:R}]}},_type:"markdown",_id:"content:articles:2013:08:16:fabric-moi-un-cluster.md",_source:"content",_file:"articles\u002F2013\u002F08\u002F16\u002Ffabric-moi-un-cluster.md",_extension:"md"}},prerenderedAt:1685521719559}}("element","text","p","code","",null,"pre",2,"python","h2",false,"a","nofollow","installation","Installation","pip install fabric\n","mon-premier-script","Mon premier script","from fabric.api import *\n\n@task\ndef host_type():\n    run('uname -s')\n","$ fab -H localhost,linuxbox host_type\n[localhost] run: uname -s\n[localhost] out: Darwin\n[linuxbox] run: uname -s\n[linuxbox] out: Linux\nDone. \nDisconnecting from localhost... done. \nDisconnecting from linuxbox... done.\n","for machine in localhost linuxbox ; do ssh user@$machine \"uname -s\"; done\n","li","le-parralélisme","Le parralélisme","@task\n@parallel\ndef host_type():\n    run(‘uname -s’)\n","$ fab -H localhost,linuxbox host_type\n[localhost] Executing task ‘host_type’\n[linuxbox] Executing task ‘host_type’\n[linuxbox] run: uname -s\n[localhost run: uname -s\n[linuxbox] out: Linux\n[linuxbox] out:\n[localhost] out: Darwin\n[localhost] out:\n","maintenir-une-topologie-de-nœuds","Maintenir une topologie de nœuds","env.roledefs = {\n‘test’:  ['localhost' ],\n‘database’:  ['root@xx.xx.xx.10', 'root@xx.xx.xx.11', 'root@xx.xx.xx.12' ],\n‘web’:  ['root@xx.xx.xx.1', 'root@xx.xx.xx.2', 'root@xx.xx.xx.3' ]\n}\n","@task\n@parallel\n@roles(‘web’)\ndef java():\n    run(‘apt-get install openjdk-7-jdk –assume-yes’)\n","la-gestion-des-erreurs","La gestion des erreurs","@task\n@roles(‘web’)\n@parallel\ndef something _wrong():\n    run(‘rm \u002Ftmp\u002Funknown _file’)\n","$ fab something _wrong\n [root@linuxbox ] Executing task ‘something _wrong’\n [root@linuxbox ] run: rm \u002Ftmp\u002Funknown _file\n [root@linuxbox ] out: rm: impossible de supprimer « \u002Ftmp\u002Funknown _file »: Aucun fichier ou dossier de ce type\n [root@linuxbox ] out:\nFatal error: run() received nonzero return code 1 while executing!\nRequested: rm \u002Ftmp\u002Funknown _file\nExecuted: \u002Fbin\u002Fbash -l -c « rm \u002Ftmp\u002Funknown _file »\nAborting.\n\nFatal error: One or more hosts failed while executing task ‘something _wrong’\nAborting.\n","@task\n@roles(‘database’)\n@parallel\ndef remove():\n    run(‘service mongodb stop’)\n    run(‘aptitude purge mongodb-10gen –assume-yes’)\n    run(‘rm -rf \u002Fvar\u002Flib\u002Fmongodb\u002F *’)\n","@task\n@roles(‘database’)\n@parallel\ndef remove():\n    with settings(warn _only=True):\n        run(‘service mongodb stop’)\n    run(‘aptitude purge mongodb-10gen –assume-yes’)\n    run(‘rm -rf \u002Fvar\u002Flib\u002Fmongodb\u002F *’)\n","la-manipulation-de-fichier","La manipulation de fichier","append('\u002Fetc\u002Fapt\u002Fsources.list.d\u002Fmongodb.list','deb http:\u002F\u002Fdownloads-distro.mongodb.org\u002Frepo\u002Fdebian-sysvinit dist 10gen')\n","lordonnancement","L’ordonnancement","@task\n@roles('database')\ndef migrate():\n    # Database stuff here.\n    pass\n\n@task\n@roles('web')\ndef update():\n    # Code updates here.\n    pass\n\n@task\ndef deploy():\n    execute(migrate)\n    execute(update)\n","la-modularisation","La modularisation","$ fab -l\nAvailable commands:\n\ninstall\ncassandra.install\ncassandra.start\ncassandra.stop\ncassandra.uninstall\nelasticsearch.install\nelasticsearch.uninstall\nelasticsearch.start\nelasticsearch.stop\njava.java\nmongodb.install\nmongodb.uninstall\nmongodb.start\nmongodb.stop\n","https:\u002F\u002Fgithub.com\u002Fhlassiege\u002Ffabric-sample"))