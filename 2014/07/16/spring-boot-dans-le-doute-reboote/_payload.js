export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B){return {data:{"/articles/2014/07/16/spring-boot-dans-le-doute-reboote":{_path:"\u002Farticles\u002F2014\u002F07\u002F16\u002Fspring-boot-dans-le-doute-reboote",_dir:"16",_draft:k,_partial:k,_locale:l,_empty:k,title:"Spring Boot : dans le doute reboote",description:"[![spring-boot-logo](\u002Fimages\u002F28307-spring-boot-logo.png)](http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2014\u002F07\u002F28307-spring-boot-logo.png)Le dernier...",id:"1089",date:"2014-07-16",categories:["waza"],tags:["devops","monitoring","spring","spring-boot"],img:"28307-spring-boot-logo.png",cover:"cover1.jpg",readingTime:{text:"6 min read",minutes:5.045,time:302700,words:1009},body:{type:"root",children:[{type:b,tag:c,props:{},children:[{type:b,tag:d,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2014\u002F07\u002F28307-spring-boot-logo.png",rel:[e]},children:[{type:b,tag:"img",props:{alt:"spring-boot-logo",src:"\u002Fimages\u002F28307-spring-boot-logo.png"},children:[]}]},{type:a,value:"Le dernier billet date de plus d’un mois, ça commence à faire. Et pour cause, beaucoup de travail à été réalisé sur Hopwork ne laissant que peu de place pour écrire."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Mais je m’y remets, car écrire un billet de blog me permet de me reposer des questions sur les choix qui ont été pris et de me laisser une sorte de doc, un historique."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Et pour ce billet, je vais parler de "},{type:b,tag:d,props:{href:m,rel:[e]},children:[{type:a,value:"Spring boot"}]},{type:a,value:g}]},{type:b,tag:c,props:{},children:[{type:a,value:"Pour ceux qui ne connaissent pas, "},{type:b,tag:d,props:{href:m,rel:[e]},children:[{type:a,value:"Spring Boot"}]},{type:a,value:" est construit au dessus de Spring 4 et propose des projets préconfigurés permettant de développer très rapidement car une grosse partie du boulot est déjà mâché."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Démarrer avec Spring Boot consiste simplement à rajouter des dépendances Maven et à écrire un “main”."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Exemple avec le service de recherche d'Hopwork :"}]},{type:b,tag:c,props:{},children:[{type:a,value:"[gist id=\"27bd5a5e5bc8bb1da94c\" file=\"pom.xml\" width=\"100%\"]"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Et le main :"}]},{type:b,tag:c,props:{},children:[{type:a,value:"[gist id=\"27bd5a5e5bc8bb1da94c\" file=\"HopSearchApplication.java\" width=\"100%\"]"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Ceci suffit pour avoir une appli avec monitoring, sécurité, gestion de configuration par profile et j’en passe !"}]},{type:b,tag:n,props:{id:o},children:[{type:a,value:p}]},{type:b,tag:c,props:{},children:[{type:a,value:"Eh bien il y a quelques années (en 2009),  "},{type:b,tag:d,props:{href:"http:\u002F\u002Fwww.eventuallycoding.com\u002Findex.php\u002Fjouons\u002F",rel:[e]},children:[{type:a,value:"je découvrais Play Framework"}]},{type:a,value:" et enfin, je redécouvrais que c’était agréable de faire du web en Java. Dès que je pouvais je ressortais Play Framework. Ce fut notamment la stack choisie sur localizeyourapps. Tout ceux qui ont subit Struts, JSF et consorts comprendront ce petit besoin de repartir sur des choses simples."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Malheureusement, la sortie de la version 2.x de Play Framework a définitivement tué la version simple de Play 1.x que j’utilisais pour en faire… autre chose. Inutile que je m’y attarde, sinon ca va troller sec."}]},{type:b,tag:c,props:{},children:[{type:a,value:"En terme de “framework haute productivité” il y a eu pas mal d’alternatives intéressantes que je pourrais citer : "},{type:b,tag:d,props:{href:"http:\u002F\u002Fwww.sparkjava.com\u002F",rel:[e]},children:[{type:a,value:"sparkframework"}]},{type:a,value:f},{type:b,tag:d,props:{href:"http:\u002F\u002Fjhipster.github.io\u002F",rel:[e]},children:[{type:a,value:"jhipster"}]},{type:a,value:f},{type:b,tag:d,props:{href:"http:\u002F\u002Fwww.ninjaframework.org\u002F",rel:[e]},children:[{type:a,value:"ninjaframework"}]},{type:a,value:f},{type:b,tag:d,props:{href:"http:\u002F\u002Fwisdom-framework.org\u002F",rel:[e]},children:[{type:a,value:"wisdom"}]},{type:a,value:f},{type:b,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002FCodeStory\u002Ffluent-http",rel:[e]},children:[{type:a,value:"fluenthttp"}]},{type:a,value:f},{type:b,tag:d,props:{href:"http:\u002F\u002Fwww.vraptor.org\u002F",rel:[e]},children:[{type:a,value:"vraptor"}]},{type:a,value:g}]},{type:b,tag:c,props:{},children:[{type:a,value:"Pour les différents services d’Hopwork qui composent l’application nous avons beaucoup hésité. Et puis finalement nous sommes partis sur Spring Boot. Et pour tout dire, nous en sommes très satisfaits. On reste dans l’univers Java\u002FSpring donc une communauté très grande et des tas d’outils déjà existants qui supporte le framework."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Je ne vais pas aborder tous les points de Spring Boot qui en font un super framework, j’aimerais surtout évoquer l’aspect “exploitation\u002Fmonitoring”."}]},{type:b,tag:n,props:{id:q},children:[{type:a,value:r}]},{type:b,tag:h,props:{id:s},children:[{type:a,value:t}]},{type:b,tag:c,props:{},children:[{type:a,value:"Premier point, Spring Boot créé un fichier jar contenant toute votre application et qui peut démarrer avec un simple java -jar application.jar."}]},{type:b,tag:c,props:{},children:[{type:a,value:"En plus d’être démarrable facilement, ce jar à l’avantage de créer un fichier pid ("},{type:b,tag:d,props:{href:"http:\u002F\u002Fwww.kubrynski.com\u002F2014\u002F05\u002Fmanaging-spring-boot-application.html",rel:[e]},children:[{type:a,value:"pour peu qu’on place un fichier de conf dans META-INF"}]},{type:a,value:") sur disque permettant ensuite d’être monitoré par un process externe comme "},{type:b,tag:d,props:{href:u,rel:[e]},children:[{type:a,value:v}]},{type:a,value:g}]},{type:b,tag:c,props:{},children:[{type:a,value:"Tout bête comme feature, mais très pratique."}]},{type:b,tag:h,props:{id:w},children:[{type:a,value:x}]},{type:b,tag:c,props:{},children:[{type:a,value:"Un profile de configuration ? Eh bien par défaut, Spring Boot démarre avec une configuration qui va charger un fichier de configuration nommé application.properties présent dans le classpath."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Mais il est aussi capable d’accepter une option pour aller le chercher sur le disque :"}]},{type:b,tag:c,props:{},children:[{type:a,value:"java -jar myproject.jar --spring.config.location=file:\u002Foverride.properties"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Sur Hopwork, on utilise plutot la notion de profile pour l’instant, c’est à dire que l’on spécifie le profil de lancement (dev, integ, prod) de la façon suivante au démarrage :"}]},{type:b,tag:c,props:{},children:[{type:a,value:"java -jar myproject.jar --spring.profiles.active=integ"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Spring va automatiquement aller chercher les fichiers application.properties et application-integ.properties, ce dernier surchargeant les valeurs si elles sont présentes."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Nous utilisons la même notion de profile pour le fichier de configuration des logs qui diffère selon les environnements :"}]},{type:b,tag:c,props:{},children:[{type:a,value:"java  -Dlogging.config=classpath:logback-integ.xml -jar myproject.jar --spring.profiles.active=integ"}]},{type:b,tag:h,props:{id:y},children:[{type:a,value:z}]},{type:b,tag:c,props:{},children:[{type:a,value:"Si vous ajoutez en dépendance spring-boot-actuator, vous obtenez des outils supplémentaires pour le monitoring de votre application. Spring Boot va automatiquement déployer des endpoints REST permettant de diagnostiquer votre appli : sa configuration, ses variables d’environnements, le profile utilisé, effectuer un threaddump, checker le statut des composants etc..."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Je m’attarde juste sur l’url \u002Fhealth. Cette Url expose des infos sur la santé de votre application. Si vous ajoutez certaines dépendances, comme spring-boot-starter-amqp, ceux-ci vont enrichir ces infos de l’état de santé de l’outil auquel il est connecté."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Par exemple :"}]},{type:b,tag:c,props:{},children:[{type:a,value:"[gist id=\"27bd5a5e5bc8bb1da94c\" file=\"health.json\" width=\"100%\"]"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Vous pouvez facilement ajouter vos propres health. Sur l’exemple plus haut j’ai un jestHealth qui n’a couté que quelques lignes :"}]},{type:b,tag:c,props:{},children:[{type:a,value:"[gist id=\"27bd5a5e5bc8bb1da94c\" file=\"JestHealth.java\" width=\"100%\"]"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Encore une fois, une belle url à monitorer pour un outil comme "},{type:b,tag:d,props:{href:u,rel:[e]},children:[{type:a,value:v}]},{type:a,value:g}]},{type:b,tag:c,props:{},children:[{type:a,value:"Dans la même veine, il existe un endpoint \u002Fmetrics permettant de collecter des métriques sur votre applicatif. Nous ne l’avons pas encore exploité donc je ne détaillerais pas."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Afin d’être complet, je trouve qu’il est préférable de séparer le port des endpoints d’admin\u002Fmonitoring du reste des endpoints applicatifs, ce qui se fait simplement par configuration :"}]},{type:b,tag:c,props:{},children:[{type:a,value:"management.port=8089\nserver.port=8087"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Et pour peu que vous ayez une dépendance sur spring-boot-starter-security"}]},{type:b,tag:c,props:{},children:[{type:a,value:"vous pouvez également configurer une basic auth sur ces endpoints :"}]},{type:b,tag:c,props:{},children:[{type:a,value:"security.user.name=user\nsecurity.user.password=password\nmanagement.security.role=SUPERUSER"}]},{type:b,tag:h,props:{id:A},children:[{type:a,value:B}]},{type:b,tag:c,props:{},children:[{type:a,value:"Je ne sais pas s’il est encore besoin de convaincre des personnes d’avoir un temps de build\u002Flancement court mais j’en remet une couche. Moins vous passez de temps à compiler\u002Flancer votre application, moins vous avez de chances d’être distraits et enclins à regarder Twitter, Facebook ou que sais-je encore. Vous restez dans votre flot de développement plus aisèment. C’est ce qui explique le succès d’un langage comme PHP, un simple F5 sur la page (ou simplement le plugin livreload) et vous avez le résultat immédiate de votre dev."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Au sein de Hopwork, nous utilisons Spring Boot pour écrire de très petits services avec peu de dépendances et un seul “métier”. Ce qui fait que le démarrage d’une appli web de ce type prend entre 3 et 7 secondes sur mon poste. C’est déjà très bien comparé avec des applis qui mettent une minute ou plus à démarrer."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Mais pour accélérer encore le cycle de dev on peut aller plus loin. Spring propose un petit outil qui s’appelle "},{type:b,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Fspring-projects\u002Fspring-loaded",rel:[e]},children:[{type:a,value:"Spring Loaded"}]},{type:a,value:". Ce n’est pas propre à Spring Boot mais ca marche très bien avec. Il s’agit d’un simple agent java permettant un rechargement à chaud du code modifié."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Avec ça, vous êtes paré."}]},{type:b,tag:c,props:{},children:[{type:a,value:"That’s all folks, vous pouvez retourner à vos claviers. J’espère que ce billet vous aura montré quelques fonctionnalités sympa de Spring Boot. Il me permettra également d’introduire de futurs billets sur Monit, Logentries, Ansible etc… A bientôt."}]},{type:b,tag:c,props:{},children:[{type:a,value:"PS : j'utilise depuis cet article un plugin gist pour wordpress mais le rendu est pas top. Si vous utilisez un plugin qui marche bien, n'hésitez pas m'envoyer un petit message."}]}],toc:{title:l,searchDepth:i,depth:i,links:[{id:o,depth:i,text:p},{id:q,depth:i,text:r,children:[{id:s,depth:j,text:t},{id:w,depth:j,text:x},{id:y,depth:j,text:z},{id:A,depth:j,text:B}]}]}},_type:"markdown",_id:"content:articles:2014:07:16:spring-boot-dans-le-doute-reboote.md",_source:"content",_file:"articles\u002F2014\u002F07\u002F16\u002Fspring-boot-dans-le-doute-reboote.md",_extension:"md"}},prerenderedAt:1683010268567}}("text","element","p","a","nofollow",", ",".","h3",2,3,false,"","http:\u002F\u002Fprojects.spring.io\u002Fspring-boot\u002F","h2","pourquoi-avoir-choisi-spring-boot","Pourquoi avoir choisi Spring Boot ?","un-framework-quon-exploite","Un framework qu’on exploite","un-monitoring-simple-via-le-pid-du-process","Un monitoring simple via le pid du process","http:\u002F\u002Fmmonit.com\u002Fmonit\u002F","Monit","des-profiles-de-configuration","Des profiles de configuration","du-monitoring","Du monitoring","un-cycle-de-développement-court","Un cycle de développement court"))