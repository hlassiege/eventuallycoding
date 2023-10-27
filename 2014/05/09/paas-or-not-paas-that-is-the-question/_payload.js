export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){return {data:{"/articles/2014/05/09/paas-or-not-paas-that-is-the-question":{_path:"\u002Farticles\u002F2014\u002F05\u002F09\u002Fpaas-or-not-paas-that-is-the-question",_dir:"09",_draft:j,_partial:j,_locale:m,_empty:j,title:"PAAS or not PAAS, that is the question",description:"[![paas](\u002Fimages\u002Fe3efe-paas.png)](http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2014\u002F05\u002Fe3efe-paas.png)Jusqu’à récemment HopWork tournait sur un PAAS...",id:"1080",date:"2014-05-09",categories:["waza"],tags:["devops",n],img:"e3efe-paas.png",cover:"cover7.jpg",readingTime:{text:"10 min read",minutes:9.405,time:564300,words:1881},body:{type:"root",children:[{type:b,tag:c,props:{},children:[{type:b,tag:e,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2014\u002F05\u002Fe3efe-paas.png",rel:[f]},children:[{type:b,tag:"img",props:{alt:n,src:"\u002Fimages\u002Fe3efe-paas.png"},children:[]}]},{type:a,value:"Jusqu’à récemment HopWork tournait sur un PAAS, mais ça va changer. Pour les quelques uns qui ont dormi ces dernières années, un PAAS c’est l’acronyme de Platform as a service. En très gros c’est un cadre de travail pour délivrer rapidement votre code en production avec tout un ensemble de services préinstallés, gérés pour vous et qui s’associent simplement avec votre applicatif."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Pour simplifier très fort, c’est ce qui permet au développeur de faire un simple : “git push "},{type:b,tag:o,props:{},children:[{type:a,value:"provider"}]},{type:a,value:" master” pour que magiquement votre dernière version sur git se retrouve en prod."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Remplacez ici “provider” par "},{type:b,tag:e,props:{href:"http:\u002F\u002Fwww.cloudbees.com\u002F",rel:[f]},children:[{type:a,value:"Cloudbees"}]},{type:a,value:h},{type:b,tag:e,props:{href:"http:\u002F\u002Fwww.heroku.com",rel:[f]},children:[{type:a,value:"Heroku"}]},{type:a,value:h},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.clever-cloud.com\u002Ffr\u002F",rel:[f]},children:[{type:a,value:"Clever-Cloud"}]},{type:a,value:h},{type:b,tag:e,props:{href:"https:\u002F\u002Fappengine.google.com\u002F",rel:[f]},children:[{type:a,value:"Google App Engine"}]},{type:a,value:" etc..."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Au tout début d’un projet comme "},{type:b,tag:e,props:{href:"http:\u002F\u002Fwww.hopwork.com\u002F",rel:[f]},children:[{type:a,value:"HopWork"}]},{type:a,value:", le choix d’un PAAS se fait naturellement. Tout ceux qui ont un projet en tête, qui souhaitent le prototyper rapidement et le montrer, le PAAS est votre ami. Vous ne vous concentrez que sur votre code et quelques paramétrages relativement légers sur votre PAAS. En plus, bien souvent, pour de petites utilisations un PAAS va se révéler très peu coûteux, voire même gratuit."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Pour notre part, nous avions choisi Heroku. Heroku propose un système de worker et pour un seul worker vous ne payez pas."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Par contre un PAAS s’accompagne de quelques contraintes qu’il faut apprendre à respecter. Par exemple chez Heroku :"}]},{type:b,tag:g,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"les disques sont volatiles"}]},{type:b,tag:d,props:{},children:[{type:a,value:"votre appli doit être rapide à booter"}]},{type:b,tag:d,props:{},children:[{type:a,value:"l’environnement d’execution est contraint (512Mo de ram pour un worker Heroku)"}]},{type:b,tag:d,props:{},children:[{type:a,value:"avec un seul worker sur Heroku, si pas d’activité, votre appli est mise en hibernation (donc elle doit être rapide à redémarrer par la suite)"}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Au dessus de votre PAAS vous allez rapidement faire appel à des SAAS (Software as a service). Sur HopWork nous avons utilisé ou utilisons encore :"}]},{type:b,tag:g,props:{},children:[{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:"http:\u002F\u002Fwww.mongohq.com\u002F",rel:[f]},children:[{type:a,value:"MongoHq"}]},{type:a,value:p},{type:b,tag:e,props:{href:"https:\u002F\u002Fmongolab.com\u002Fwelcome\u002F",rel:[f]},children:[{type:a,value:"Mongolab"}]},{type:a,value:" (mongodb as a service)"}]},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:"http:\u002F\u002Fcloudinary.com\u002F",rel:[f]},children:[{type:a,value:"Cloudinary"}]},{type:a,value:" (gestion des images)"}]},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:"http:\u002F\u002Fwww.searchly.com\u002F",rel:[f]},children:[{type:a,value:"Searchbox"}]},{type:a,value:" devenu Searchly (elasticsearch as a service)"}]},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Fmailgun.com\u002F",rel:[f]},children:[{type:a,value:"Mailgun"}]},{type:a,value:p},{type:b,tag:e,props:{href:"https:\u002F\u002Fmandrillapp.com\u002F",rel:[f]},children:[{type:a,value:"Mandrill"}]},{type:a,value:" (envoi de mail transactionnel)"}]},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:"http:\u002F\u002Fwww.twilio.com\u002F",rel:[f]},children:[{type:a,value:"Twilio"}]},{type:a,value:" (envoi de SMS)"}]},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:"http:\u002F\u002Fwww.mangopay.com\u002F",rel:[f]},children:[{type:a,value:"Mangopay"}]},{type:a,value:" (paiement)"}]},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:"http:\u002F\u002Ffr.zendesk.com\u002F",rel:[f]},children:[{type:a,value:"Zendesk"}]},{type:a,value:q}]},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:"http:\u002F\u002Fwww.livechatinc.com\u002F",rel:[f]},children:[{type:a,value:"Livechat"}]},{type:a,value:q}]},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Flogentries.com\u002F",rel:[f]},children:[{type:a,value:"Logentries"}]},{type:a,value:" (analyse et conservation des logs)"}]},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:"http:\u002F\u002Fwww.monitor.us\u002F",rel:[f]},children:[{type:a,value:"monitorus"}]},{type:a,value:r},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.pingdom.com\u002F",rel:[f]},children:[{type:a,value:"pingdom"}]},{type:a,value:r},{type:b,tag:e,props:{href:"http:\u002F\u002Fnewrelic.com\u002F",rel:[f]},children:[{type:a,value:"new relic"}]},{type:a,value:" (monitoring)"}]},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:"http:\u002F\u002Fwww.localizeyourapps.com\u002F",rel:[f]},children:[{type:a,value:"Localizeyourapps"}]},{type:a,value:" (pour la localisation)"}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"(pour localizeyourapps, ne cherchez pas, c’est moi qui le développais, c’est plus ou moins mort pour l’instant)"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Pour ces quelques services, nous en avons évalué d’autres et continuons à en évaluer régulièrement ("},{type:b,tag:e,props:{href:"http:\u002F\u002Fwww.cloudamqp.com\u002F",rel:[f]},children:[{type:a,value:"CloudAmqp"}]},{type:a,value:h},{type:b,tag:e,props:{href:"http:\u002F\u002Fwww.fasterize.com\u002Ffr",rel:[f]},children:[{type:a,value:"Fasterize"}]},{type:a,value:" et "},{type:b,tag:e,props:{href:"http:\u002F\u002Fwww.cloudflare.com\u002F",rel:[f]},children:[{type:a,value:"Cloudflare"}]},{type:a,value:" sont dans les tuyaux par exemple)."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Là encore, pour des utilisations légères, ces services proposent souvent des plans gratuits qui vont être utilisables pendant longtemps."}]},{type:b,tag:c,props:{},children:[{type:b,tag:o,props:{},children:[{type:a,value:"Alors pourquoi changer ?"}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Pour être honnête, c’est un choix difficile de changer et de revenir sur un serveur dédié pour une partie des services. Quelle plus-value ? Quelle moins-value ?"}]},{type:b,tag:k,props:{id:s},children:[{type:a,value:t}]},{type:b,tag:c,props:{},children:[{type:a,value:"Selon moi un produit connaît plusieurs phases."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Au tout début d’un produit, vous faites tout avec des bouts de ficelles car vous avez zéro budget. De plus vous voulez montrer très vite ce que vous faites. Le PAAS est l’idéal pour cela et vous permet d’être concentré sur votre appli et rien d’autre. (Au diable la sécurité ! :))"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Ensuite si vous avez de la chance, votre soft rencontre un peu de succès, vous avez des sous mais vous devez passer sur des plans tarifaires supérieurs pour certains services que vous utilisez. Vous êtes dans la période où vous devez perpétuellement jongler entre la surveillance des coûts et la rapidité d’exécution. Soyons clair, on doit toujours jongler avec ça, mais dans cette période d’autant plus."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Pour illustrer, voici les coûts mensuels des services avec notre traffic actuel :"}]},{type:b,tag:g,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"Heroku 1 worker de 1024Mo : 35$"}]},{type:b,tag:d,props:{},children:[{type:a,value:"Heroku : certificat SSL : 20$"}]},{type:b,tag:d,props:{},children:[{type:a,value:"Cloudinary : 30$"}]},{type:b,tag:d,props:{},children:[{type:a,value:"Mandrill\u002FMailchimp : 35$"}]},{type:b,tag:d,props:{},children:[{type:a,value:"Twilio : cout fixe par SMS"}]},{type:b,tag:d,props:{},children:[{type:a,value:"Mangopay : % par transaction"}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"A cela s’ajoute des coûts qui vont ou pourraient arriver :"}]},{type:b,tag:g,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"Nous sommes à la limite de devoir passer sur un plan payant pour MongoLab : 15$"}]},{type:b,tag:d,props:{},children:[{type:a,value:"Si nous étions restés chez Searchbox : 9$"}]},{type:b,tag:d,props:{},children:[{type:a,value:"Nous sommes en fin de période “promo” chez Zendesk, le cout passe ensuite à 25$ + 29$ par “agent support”."}]},{type:b,tag:d,props:{},children:[{type:a,value:"Pour bien faire il faudrait 2 worker Heroku : 70$"}]},{type:b,tag:d,props:{},children:[{type:a,value:"Logentries si on veut garder les logs plus longtemps ce sera 19$"}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Mais "},{type:b,tag:u,props:{},children:[{type:a,value:"on ne peut pas comparer"}]},{type:a,value:" SAAS et “fait maison” en parlant que des coûts :"}]},{type:b,tag:g,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"Mangopay c’est du paiement et nous n’avons pas vocation à en faire nous-mêmes"}]},{type:b,tag:d,props:{},children:[{type:a,value:"Mandrill, Twilio, Cloudinary, Zendesk proposent des services à forte valeur ajoutée et nous perdrions beaucoup de temps à le refaire"}]},{type:b,tag:d,props:{},children:[{type:a,value:"A l’inverse certains produits même sur des plans supérieurs ne proposent pas exactement les fonctionnalités que l’on souhaiterait (comme Logentries)"}]},{type:b,tag:d,props:{},children:[{type:a,value:"De toute façon je ne vous ai pas encore parlé des coûts du “fait maison” :)"}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Pour être clair nous allons continuer à utiliser du SAAS pour des services à forte valeur ajoutée car cela n’aurait pas de sens de les refaire de notre côté. Cela reste dans l’optique d’une architecture micro-service telle que nous la concevons sur HopWork (Certains SAAS continueront cependant à être évalués régulièrement face à leurs concurrents). Ce qui est remis en cause c’est uniquement un subset de tout ces services :"}]},{type:b,tag:g,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"mongo"}]},{type:b,tag:d,props:{},children:[{type:a,value:"elasticsearch"}]},{type:b,tag:d,props:{},children:[{type:a,value:"logentries (et encore celui-ci se discute)"}]},{type:b,tag:d,props:{},children:[{type:a,value:"Rabbitmq"}]},{type:b,tag:d,props:{},children:[{type:a,value:"et le PAAS : Heroku"}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"En fait vous remarquerez que j’ai fait le distinguo entre les SAAS à forte valeur ajoutée, et les SAAS qui proposent de l’infra."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Pour ceux la, sur HopWork il nous semble que c’est justement le moment où les coûts restent maîtrisables mais nous commencons à les sentir et on note voyez que les plans tarifaires encore au dessus vont être vraiment plus chers (entre 89 et 200$ mensuel en entrée de gamme selon ce qu’on cherche chez mongolab)."}]},{type:b,tag:c,props:{},children:[{type:a,value:"De toute façon sur les plans de base, c’est souvent labellisé "},{type:b,tag:u,props:{},children:[{type:a,value:"“sandbox” ou “developpement”"}]},{type:a,value:" avec tout ce que ca implique donc nous avons fortement intérêt à upgrader et là "},{type:b,tag:e,props:{href:"https:\u002F\u002Fmongolab.com\u002Fplans\u002Fpricing\u002F#dedicated-cluster-plans",rel:[f]},children:[{type:a,value:"ca peut faire très mal"}]},{type:a,value:l}]},{type:b,tag:c,props:{},children:[{type:a,value:"Au delà de ça, avoir son elasticsearch et sa base mongo accessible sur le net, même protégé par un login\u002Fpassword, ca reste moyen. Nous en avons eu récemment l’expérience avec Heartbleed, tout les providers sans exception nous ont demandé de changer les credentials et clés d’API utilisés sur leurs services."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Pire, il y a quelques mois, seul Searchbox proposait un elastisearch as a service sécurisé."}]},{type:b,tag:k,props:{id:v},children:[{type:a,value:w}]},{type:b,tag:c,props:{},children:[{type:a,value:"Une promesse de ces services, c’est la scalabilité et l’élasticité. Ici par exemple le slogan d’Heroku :"}]},{type:b,tag:"blockquote",props:{},children:[{type:b,tag:c,props:{},children:[{type:a,value:"Build, run, and scale apps."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Cloud computing designed and built for developers."}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Sauf que “scaler” n’est pas une de vos priorités immédiate. Construire des clusters de mongodb avec du sharding ou gérer un traffic de 10000 visiteurs\u002Fminutes ce sera dans longtemps. Enfin pas trop, je vous le souhaite, mais pas immédiatement."}]},{type:b,tag:c,props:{},children:[{type:a,value:"HopWork c’est 4000 inscrits, un peu moins de 1000 visites\u002Fjour (ca augmente chaque mois). C’est très honorable mais ca représente pas tant que ça pour une machine bien dimensionnée et bien utilisée. Pour l’instant la priorité c’est les fonctionnalités, pas la tenue en charge."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Par contre cette fameuse “scalabilité”, quand vous avez une appli simple vous la payez alors que vous n’en profitez pas."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Déjà vous avez une application distribuée, c’est cool mais contrairement à ce que certains croient, "},{type:b,tag:e,props:{href:"http:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FFallacies_of_Distributed_Computing",rel:[f]},children:[{type:a,value:"c’est pas le paradis"}]},{type:a,value:" (le réseau n’est pas fiable, la bande passante n’est pas illimitée, etc…)"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Parmi les fausses croyances du distribuée, on pense que les latences sont négligeables "},{type:b,tag:e,props:{href:"http:\u002F\u002Fwww.addsimplicity.com\u002Fadding_simplicity_an_engi\u002F2007\u002F02\u002Flatency_exists_.html",rel:[f]},children:[{type:a,value:"mais elles existent bel et bien"}]},{type:a,value:l}]},{type:b,tag:c,props:{},children:[{type:a,value:"Par exemple entre un Heroku sur zone US et un Heroku sur zone EU vous avez une latence qui varie entre 200 et 300ms. Entre une appli hébergé sur Amazon EU (Irelande) et une base Mongo hébergé en France (OVH), vous avez une latence qui varie entre 50 et 150ms."}]},{type:b,tag:k,props:{id:x},children:[{type:a,value:y}]},{type:b,tag:c,props:{},children:[{type:a,value:"Si je résume, en fait nous sommes en cours de migration de certains services pour les raisons suivantes :"}]},{type:b,tag:g,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"le coût (pour ce qui concerne le PAAS, les bases de données, files de messages)"}]},{type:b,tag:d,props:{},children:[{type:a,value:"la sécurité"}]},{type:b,tag:d,props:{},children:[{type:a,value:"des besoins actuels simples en terme de scalabilité"}]},{type:b,tag:d,props:{},children:[{type:a,value:"des besoins de meilleure performance (des latences moins élevés)"}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Comme je le disais plus haut, le choix de repasser sur du dédié sur certains services fut difficile. Nous nous sommes donc posé deux contraintes simples :"}]},{type:b,tag:g,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"il doit être possible de refaire le chemin inverse facilement"}]},{type:b,tag:d,props:{},children:[{type:a,value:"la simplicité de mise en prod doit être maintenue"}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Ce qui implique des choix assez évidents :"}]},{type:b,tag:g,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"ne toujours pas reposer sur le disque, faire comme s’il était volatile"}]},{type:b,tag:d,props:{},children:[{type:a,value:"le serveur lui-même est considéré comme volatile, il peut à tout moment crasher. Il doit donc pouvoir être remonté rapidement et automatiquement"}]},{type:b,tag:d,props:{},children:[{type:a,value:"avoir une appli qui boote très rapidement"}]},{type:b,tag:d,props:{},children:[{type:a,value:"ne pas bouffer des ressources comme des malades :)"}]},{type:b,tag:d,props:{},children:[{type:a,value:"conserver un workflow simple de déploiement, idéalement basé sur git"}]},{type:b,tag:d,props:{},children:[{type:a,value:"garder un découplage maximal entre les différents composants de l’architecture"}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Factuellement, pour héberger tout cela, nous avons pris un serveur OVH Soyoustart 32Gb de ram, disque SSD, 8 coeurs pour 40euros\u002Fmois. En terme de ressources et en simplifiant grossièrement cela représente 64 workers Heroku (évidemment c’est exagéré, une appli a une empreinte sur la machine qui ne se résume pas à sa heap)."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Pour l’installation des composants, nous utilisons "},{type:b,tag:e,props:{href:"http:\u002F\u002Fwww.ansible.com\u002F",rel:[f]},children:[{type:a,value:"Ansible"}]},{type:a,value:l}]},{type:b,tag:c,props:{},children:[{type:a,value:"Pour le déploiement applicatif, le choix n’est pas encore posé, c’est l’étape qui reste à faire. Il existe plusieurs pistes : "},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Farnoo\u002Fgit-deliver\u002F",rel:[f]},children:[{type:a,value:"git-deliver"}]},{type:a,value:h},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Fmislav\u002Fgit-deploy",rel:[f]},children:[{type:a,value:"git-deploy"}]},{type:a,value:" ou tout simplement du "},{type:b,tag:e,props:{href:"http:\u002F\u002Fwww.fabfile.org\u002F",rel:[f]},children:[{type:a,value:"Fabric"}]},{type:a,value:" ou du Ansible piloté par Jenkins."}]},{type:b,tag:c,props:{},children:[{type:a,value:"D’ailleurs si vous avez des suggestions ou des retours je suis preneur."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Ok, dans cette configuration certains vont me dire qu’il reste de le souci de la disponibilité. Sauf que par expérience nous avons eu plusieurs “incidents” depuis qu’HopWork existe, que ce soit des indispos et crash de elasticsearch, des indispos Mongolab, Heroku ou carrément amazon, ce qui dans ce cas flingue tout le reste."}]},{type:b,tag:c,props:{},children:[{type:a,value:"En centralisant sur un serveur, nous ne sommes dépendants que de ce serveur et nous gagnons sur les latences entre composants. Ok, il peut crasher, d’où le fait de tout automatiser pour rapidement remonter un autre serveur."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Certains pourraient poser la question “mais quitte à gérer votre plateforme, pourquoi pas du IAAS avec "},{type:b,tag:e,props:{href:"https:\u002F\u002Faws.amazon.com\u002Ffr\u002Fec2\u002F",rel:[f]},children:[{type:a,value:"Amazon EC2"}]},{type:a,value:" ou "},{type:b,tag:e,props:{href:"https:\u002F\u002Fcloud.google.com\u002Fproducts\u002Fcompute-engine\u002F",rel:[f]},children:[{type:a,value:"Google Cloud"}]},{type:a,value:" ?”."}]},{type:b,tag:c,props:{},children:[{type:a,value:"D’autres encore pourraient demander “mais pourquoi pas Cloudwat ou Numergy”, et là ce serait une grosse tranche de rire. Mais passons..."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Concernant EC2 déjà, j’avoue que je trouve leur grille de prix n’est pas simple pour s’y retrouver. Vous avez des instances à la demandes, des instances réservées pour utilisation modérées ou intensives, des instances ponctuelles, vous avez des tarifs pour transferts de données (?! WTF), des instances optimisées pour EBS (?!). En fait, rien que "},{type:b,tag:e,props:{href:"https:\u002F\u002Faws.amazon.com\u002Ffr\u002Fec2\u002Fpricing\u002F",rel:[f]},children:[{type:a,value:"la page de pricing simplifiée"}]},{type:a,value:" est d’une longueur infinie. Et "},{type:b,tag:e,props:{href:"http:\u002F\u002Fcalculator.s3.amazonaws.com\u002Findex.html",rel:[f]},children:[{type:a,value:"leur calculette"}]},{type:a,value:" fait pas rêver non plus. En essayant vaguement de jouer avec la calculette pour une instance médium avec disque SSD et 3Gb de ram j’arrive tout de même à 56$\u002Fmois et je n’ai rien rempli dans les parties Data Transfert ou ElasticIP."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Bref, c’est obscur et pas si rentable si on compare à la machine que j’ai décrit plus haut pour le même prix."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Google Compute Engine "},{type:b,tag:e,props:{href:"https:\u002F\u002Fcloud.google.com\u002Fproducts\u002Fcompute-engine\u002F#pricing",rel:[f]},children:[{type:a,value:"a une grille de tarif"}]},{type:a,value:" à peine aussi claire. Cette fois on ne sait même pas quelle disque est disponible mais on retombe grosso modo sur le même prix que ci-dessus pour 3Gb de ram. Encore une fois, toutes les options du bas de page laisse penser que dès qu’on veut du disque ou une IP ca coute encore plus cher."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Dans les deux cas il s’agit de VM. Pour ma part j’ai des expériences pas très heureuses en ce qui concerne les performances IO et la virtualisation donc déjà sur le principe je ne suis pas emballé."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Bref, je ne demande qu’à être convaincu par quelqu’un ayant déjà utilisé (et je ne parle pas d’avoir juste jouer a spawner une instance)."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Voilà, vous savez tout. Nous ne savons pas avec certitude s’il s’agit du meilleur choix mais nous avons fait en sorte de pouvoir changer d’avis par la suite. Dans les prochains billets je reparlais peut-être d’Ansible ou de quelques outils mis en place pour notre infra."}]},{type:b,tag:c,props:{},children:[{type:a,value:"A bientôt"}]}],toc:{title:m,searchDepth:i,depth:i,links:[{id:s,depth:i,text:t},{id:v,depth:i,text:w},{id:x,depth:i,text:y}]}},_type:"markdown",_id:"content:articles:2014:05:09:paas-or-not-paas-that-is-the-question.md",_source:"content",_file:"articles\u002F2014\u002F05\u002F09\u002Fpaas-or-not-paas-that-is-the-question.md",_extension:"md"}},prerenderedAt:1698390912965}}("text","element","p","li","a","nofollow","ul",", ",2,false,"h2",".","","paas","em"," puis "," (pour le support)","\u002F","les-coûts","Les coûts ?","strong","la-scalabilité","La scalabilité ?","nos-choix","Nos choix"))