export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return {data:{"/articles/2014/07/23/monit-pour-monitorer-vos-serveurs":{_path:"\u002Farticles\u002F2014\u002F07\u002F23\u002Fmonit-pour-monitorer-vos-serveurs",_dir:"23",_draft:g,_partial:g,_locale:i,_empty:g,title:"Monit - pour monitorer vos serveurs",description:"Aujourd’hui je tenais à vous présenter [Monit](http:\u002F\u002Fmmonit.com\u002Fmonit\u002F), un bel outil permettant de monitorer vos serveurs et vos process. Le site in...",id:"1102",date:"2014-07-23",categories:["waza"],tags:["devops",j],img:"e76bc-cloudinary.png",cover:"cover3.jpg",readingTime:{text:"6 min read",minutes:5.115,time:306900,words:1023},body:{type:"root",children:[{type:b,tag:c,props:{},children:[{type:a,value:"Aujourd’hui je tenais à vous présenter "},{type:b,tag:d,props:{href:"http:\u002F\u002Fmmonit.com\u002Fmonit\u002F",rel:[e]},children:[{type:a,value:"Monit"}]},{type:a,value:", un bel outil permettant de monitorer vos serveurs et vos process. Le site indique : “up and running in 15 minutes” et vous allez voir qu’il tient ces promesses."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Avant d’aller plus loin, rappelons un peu ce qu’on entend par monitoring car il peut y avoir confusion entre les termes."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Pour faire simple, le monitoring c’est l’ensemble des actions permettant de suivre une infrastructure."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Le monitoring lui-même est constitué de deux activités :"}]},{type:b,tag:k,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"la supervision, qui consiste à superviser des états et alerter en cas de problème"}]},{type:b,tag:f,props:{},children:[{type:a,value:"la métrologie qui consiste à historiser les mesures effectués par la supervision en vue de vous permettre de diagnostiquer “après coup” et de faire du capacity planning."}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"(* le capacity planning étant l’activité permettant de dimensionner et de calculer les coûts de son infrastructure)"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Sur un PAAS, vous n’êtes pas dispensé de faire du monitoring. Vous pouvez déjà utiliser des outils pour faire du monitoring “externe” comme "},{type:b,tag:d,props:{href:"https:\u002F\u002Fwww.pingdom.com\u002F",rel:[e]},children:[{type:a,value:"Pingdom"}]},{type:a,value:l},{type:b,tag:d,props:{href:"http:\u002F\u002Fwww.monitor.us\u002Fen\u002Fwebsite-monitoring",rel:[e]},children:[{type:a,value:"Monitorus"}]},{type:a,value:l},{type:b,tag:d,props:{href:"http:\u002F\u002Fnewrelic.com\u002F",rel:[e]},children:[{type:a,value:"NewRelic"}]},{type:a,value:" vous permettant de savoir si vos applis répondent (status 200) d’une part, et dans un temps correct d’autre part. Ces services sont mêmes capables de vous établir ces données par zone géographiques. Ce monitoring surveille la boîte noire que constitue votre appli."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Si vous souhaitez un monitoring moins “boîte noire”, vous avez la possibilité d’utiliser des sondes. New Relic vous propose cela sous forme d’agent Java par exemple. Parfois ces sondes peuvent être fournis par le PAAS\u002FSAAS en question."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Sur un PAAS\u002FSAAS toujours, le capacity planning reste important car les plans de facturation sont en général liés à la consommation d’une ressource donc il est plutôt conseillé de bien suivre l’évolution de cette consommation."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Heureusement certains services vous fournissent ces données, par exemple ici sur "},{type:b,tag:d,props:{href:"https:\u002F\u002Fcloudinary.com",rel:[e]},children:[{type:a,value:"Cloudinary"}]},{type:a,value:" :"}]},{type:b,tag:c,props:{},children:[{type:b,tag:d,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2014\u002F07\u002Fe76bc-cloudinary.png",rel:[e]},children:[{type:b,tag:m,props:{alt:"cloudinary",src:"\u002Fimages\u002Fe76bc-cloudinary.png"},children:[]}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Sur Hopwork nous avons une grosse partie de nos outils sur nos propres serveurs depuis quelques temps. Et l’installation de ces serveurs est entièrement automatisé avec "},{type:b,tag:d,props:{href:"http:\u002F\u002Fwww.ansible.com\u002Fhome",rel:[e]},children:[{type:a,value:"Ansible"}]},{type:a,value:h}]},{type:b,tag:c,props:{},children:[{type:a,value:"Je ne suis pas spécialiste des outils de supervision. Mais l’un de mes critères de base pour en choisir un était justement que je puisse simplement automatiser son installation. Et c’est ce qui a porté le choix vers Monit. Monit à l’inverse de la plupart des outils connus (Zabbix, Nagios) repose sur uniquement sur une configuration très simple par fichier. Sans doute également qu’il est moins puissant, mais vu nos besoins, ça nous suffit pour l’instant. Et vous allez voir que ce qu’il fournit est déjà très bien."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Installons donc Monit :"}]},{type:b,tag:c,props:{},children:[{type:a,value:"apt-get install monit"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Et c’est tout ? Non, pour bien faire on va quand même rajouter deux trois choses."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Déjà on va configurer l’interface web de Monit en modifiant le fichier \u002Fetc\u002Fmonit\u002Fwebinterface"}]},{type:b,tag:c,props:{},children:[{type:a,value:"set httpd port 2812 and\n   use address localhost\n   allow user:password"}]},{type:b,tag:c,props:{},children:[{type:a,value:"user:password correspondant à votre couple de credentials."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Cette interface plutôt pratique vous donne accès à quelques infos de base : liste des process surveillés, leurs états, leurs consommations de ressources etc.."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Ici par exemple sur une machine d’Hopwork :"}]},{type:b,tag:c,props:{},children:[{type:b,tag:d,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2014\u002F07\u002F1ee46-monit.png",rel:[e]},children:[{type:b,tag:m,props:{alt:j,src:"\u002Fimages\u002F1ee46-monit.png"},children:[]}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Vous avez également la possibilité de redémarrer un process à partir de l’interface mais pour ma part j’évite, je garde cette option dans des cas très exceptionnel."}]},{type:b,tag:c,props:{},children:[{type:a,value:"A noter : Pour éviter d’ouvrir le port 2182 sur votre machine, n’hésitez pas à configurer un virtual host Nginx ou Apache pour ouvrir ce service via votre frontal web préféré."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Toujours dans la configuration de base, voyons maintenant le fichier \u002Fetc\u002Fmonit\u002Fconf.d\u002Fmail"}]},{type:b,tag:c,props:{},children:[{type:a,value:"set eventqueue\n  basedir \u002Fvar\u002Flib\u002Fmonit\u002Fevents\n  slots 1000"}]},{type:b,tag:c,props:{},children:[{type:a,value:"SET MAILSERVER smtp.truc.org port 587 username \"username\" password \"pwd\"\n  with TIMEOUT 30 SECONDS"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Monit est capable de vous informer lorsqu’un problème survient. Pour cela, il est possible de lui préciser un serveur smtp externe. De plus nous déclarons une queue d’évènement juste au dessus pour stocker les évènements en cas d’indisponibilité du serveur SMTP."}]},{type:b,tag:c,props:{},children:[{type:a,value:"L’installation à proprement parler est faite."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Regardons comment monitorer un processus en particulier."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Par défaut, le plus simple c’est de monitorer un fichier pid. Regardons un exemple avec Nginx :"}]},{type:b,tag:c,props:{},children:[{type:a,value:"check process nginx with pidfile \u002Fvar\u002Frun\u002Fnginx.pid\n   start program = \"\u002Fetc\u002Finit.d\u002Fnginx start\"\n   stop program  = \"\u002Fetc\u002Finit.d\u002Fnginx stop\"\n   if totalcpu \u003E 80% for 3 cycles then alert\n   if totalmem \u003E 400.0 MB for 5 cycles then alert\n   if children \u003E 250 then alert\n   if loadavg(5min) \u003E 20 for 8 cycles then alert"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Les premières lignes servent à indiquer comment arrêter ou démarrer le programme. Les suivantes à définir des seuils d’alertes. Par exemple si le process prend plus de 80% de CPU sur 3 cycles, alors on envoie une alerte."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Pour un process Java construit avec SpringBoot, aucun souci, "},{type:b,tag:d,props:{href:n,rel:[e]},children:[{type:a,value:"le fichier pid est bien créé au démarrage"}]},{type:a,value:h}]},{type:b,tag:c,props:{},children:[{type:a,value:"Quand ce n’est pas le cas, vous pouvez aussi demander à Monit de rechercher un pattern dans les process existants :"}]},{type:b,tag:c,props:{},children:[{type:a,value:"check process JamesBond matching \"007\"\n   start program = \"\u002Fopt\u002FJamesBond\u002Fstarter.sh\"\n   stop program = \"\u002Fopt\u002FJamesBond\u002Fstopper.sh\""}]},{type:b,tag:c,props:{},children:[{type:a,value:"Ces fonctionnalités peuvent faire penser à "},{type:b,tag:d,props:{href:"http:\u002F\u002Fsupervisord.org\u002F",rel:[e]},children:[{type:a,value:"supervisord"}]},{type:a,value:" qui est justement un superviseur de process."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Mais Monit va un peu plus loin car il permet de superviser également des ressources comme par exemple l’espace disque :"}]},{type:b,tag:c,props:{},children:[{type:a,value:"check filesystem rootfs with path \u002F\n      if space usage \u003E 90% then alert"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Une url de vie (ici celle d'elasticsearch):"}]},{type:b,tag:c,props:{},children:[{type:a,value:"check host elasticsearch_connection with address 0.0.0.0\n if failed url "},{type:b,tag:d,props:{href:o,rel:[e]},children:[{type:a,value:o}]},{type:a,value:" with timeout 15 seconds then alert  \ncheck host elasticsearch_cluster_health with address 0.0.0.0\n if failed url "},{type:b,tag:d,props:{href:"http:\u002F\u002F0.0.0.0:9200\u002F%5C_cluster\u002Fhealth",rel:[e]},children:[{type:a,value:"http:\u002F\u002F0.0.0.0:9200\u002F\\_cluster\u002Fhealth"}]},{type:a,value:"   \n   and content == 'green'\n   with timeout 60 seconds\n then alert"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Imaginez que toutes les urls de vie "},{type:b,tag:d,props:{href:n,rel:[e]},children:[{type:a,value:"dont nous avons parlé avec Spring Boot dans le précédent billet"}]},{type:a,value:" sont ainsi directement exploitables via Monit !"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Et vous pouvez aussi surveiller les permissions d’un fichier, la présence d’un fichier, son contenu, le fait qu’il ait été altéré, le cpu, la température machine etc…"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Tout cela via des fichiers de config déposés dans \u002Fetc\u002Fmonit."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Pour conclure, avec Monit vous avez donc un processus très léger capable de superviser votre machine, vous avertir par mail suivant des règles personalisables et vous présenter les données d’une machine via une interface web."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Sympa ?"}]},{type:b,tag:"blockquote",props:{},children:[{type:b,tag:c,props:{},children:[{type:a,value:"One more thing"}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Ici nous n’avons abordé que la partie supervision et qui plus est, d’une seule machine. Mais il existe un autre produit au dessus de Monit s’appelant "},{type:b,tag:d,props:{href:"http:\u002F\u002Fmmonit.com\u002F",rel:[e]},children:[{type:a,value:"M\u002FMonit"}]},{type:a,value:" qui va combler ces derniers manques. Ce produit à l’inverse de Monit est lui, payant."}]},{type:b,tag:c,props:{},children:[{type:a,value:"M\u002FMonit, propose plusieurs fonctionnalités :"}]},{type:b,tag:k,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"l’aggrégation des infos provenant de toutes les machines sur un seul tableau de bord"}]},{type:b,tag:f,props:{},children:[{type:a,value:"de la métrologie (!) pour avoir une vision “historique” de votre supervision."}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Je vous laisser regarder "},{type:b,tag:d,props:{href:"http:\u002F\u002Fmmonit.com\u002Fscreenshots\u002F",rel:[e]},children:[{type:a,value:"les screenshots"}]},{type:a,value:h}]},{type:b,tag:c,props:{},children:[{type:a,value:"Cette fois c’est bon. Vous pouvez retourner à une activité normale."}]}],toc:{title:i,searchDepth:p,depth:p,links:[]}},_type:"markdown",_id:"content:articles:2014:07:23:monit-pour-monitorer-vos-serveurs.md",_source:"content",_file:"articles\u002F2014\u002F07\u002F23\u002Fmonit-pour-monitorer-vos-serveurs.md",_extension:"md"},"/articles/2014/07/23/monit-pour-monitorer-vos-serveurs/relatedArticles":[]},prerenderedAt:1676822112169}}("text","element","p","a","nofollow","li",false,".","","monit","ul",", ","img","http:\u002F\u002Fwww.eventuallycoding.com\u002Findex.php\u002Fspring-boot-dans-le-doute-reboote\u002F","http:\u002F\u002F0.0.0.0:9200\u002F",2))