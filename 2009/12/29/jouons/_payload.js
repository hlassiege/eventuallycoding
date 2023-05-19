export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J){return {data:{"/articles/2009/12/29/jouons":{_path:"\u002Farticles\u002F2009\u002F12\u002F29\u002Fjouons",_dir:"29",_draft:l,_partial:l,_locale:m,_empty:l,title:"Jouons !",description:"[![](\u002Fimages\u002Fplay.png \"play\")](http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2011\u002F04\u002Fplay.png) Récemment, entre le [livre blanc d'Aurélien Maury sur ...",id:"140",date:"2009-12-29",categories:["waza"],tags:[q],img:"play.png",cover:"cover5.jpg",readingTime:{text:"7 min read",minutes:6.55,time:393000,words:1310},body:{type:"root",children:[{type:a,tag:c,props:{},children:[{type:a,tag:f,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2011\u002F04\u002Fplay.png",rel:[g]},children:[{type:a,tag:n,props:{alt:m,src:"\u002Fimages\u002Fplay.png",title:q},children:[]}]},{type:b,value:" Récemment, entre le "},{type:a,tag:f,props:{href:"http:\u002F\u002Fxebia.developpez.com\u002Farticles\u002Fjava\u002Fweb\u002F",rel:[g],title:"livre blanc"},children:[{type:b,value:"livre blanc d'Aurélien Maury sur les Frameworks web haute productivité"}]},{type:b,value:" ou "},{type:a,tag:f,props:{href:"http:\u002F\u002Fwww.infoq.com\u002Fpresentations\u002FLessons-Learned-from-Java-EE",rel:[g]},children:[{type:b,value:"les critiques de Rod Johnson à propos de J2EE"}]},{type:b,value:", la mode revient aux Frameworks lights. Je dis bien \""},{type:a,tag:i,props:{},children:[{type:b,value:"revient"}]},{type:b,value:"\", car ça fait déjà quelque temps que le développement web rapide existe et fait recette."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Quand à moi je suis attardé un petit peu sur Play!, le petit nouveau qui change tout."}]},{type:a,tag:o,props:{id:r},children:[{type:b,value:s}]},{type:a,tag:c,props:{},children:[{type:b,value:"Play! c'est un Framework français créé par "},{type:a,tag:f,props:{href:"http:\u002F\u002Fguillaume.bort.fr\u002F",rel:[g],title:t},children:[{type:b,value:t}]},{type:b,value:" et supporté par la société qu'il a créé "},{type:a,tag:f,props:{href:"http:\u002F\u002Fwww.zenexity.fr\u002F",rel:[g],title:u},children:[{type:b,value:u}]},{type:b,value:". En reprenant l'expression sur le site de Play! plus qu'un Framework, c'est une stack complète. Entendez par là que Play! c'est :"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"un serveur web avec son routeur de requêtes HTTP,"}]},{type:a,tag:d,props:{},children:[{type:b,value:"un Framework MVC2,"}]},{type:a,tag:d,props:{},children:[{type:b,value:"des utilitaires (envoi de mails etc...),"}]},{type:a,tag:d,props:{},children:[{type:b,value:"des modules (CRUD, secure, intégration GWT, intégration Scala etc...)."}]}]},{type:a,tag:o,props:{id:v},children:[{type:b,value:w}]},{type:a,tag:c,props:{},children:[{type:b,value:"Eh bien pour faire simple, j'adore. J'avais fait pas mal de "},{type:a,tag:p,props:{},children:[{type:b,value:"PHP"}]},{type:b,value:" à une époque et j'ai enfin retrouvé la souplesse et la rapidité de développement que j'avais alors. En effet il ne s'agit pas simplement d'un nième Framework web mais d'une stack complète (voir plus haut) qui vient avec sa propre vision de développement. Comme le dit le site : \""},{type:a,tag:i,props:{},children:[{type:b,value:"un Framework de développement fait par des développeurs"}]},{type:b,value:"\""}]},{type:a,tag:j,props:{id:x},children:[{type:b,value:y}]},{type:a,tag:c,props:{},children:[{type:b,value:"Un petit retour en arrière s'impose pour faire comprendre le parallèle. A une équipe j'ai fait pas mal de PHP comme beaucoup de développeurs débutants, séduits par sa simplicité, sa syntaxe proche du C (donc facilement abordable en sortie d'école). Je débutais, j'étais \"mal habillé\", entendez par là que je n'utilisais pas de Framework, pas de debugger, pas d'IDE. Et pourtant c'était très rapide à faire, parce que c'était simple."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Simple déjà par son débogage, l'erreur était immédiatement affiché sur la page web"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Warning: mysql_fetch_array(): supplied argument is not a valid MySQL result resource in \u002Fservers\u002Fapache\u002Fsites\u002Fddb\u002Fkb\u002Ffct_kb.php on line 260"}]},{type:a,tag:c,props:{},children:[{type:b,value:"avec le numéro de ligne etc..."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Simple ensuite parce que relancer un serveur apache :"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"c'était très rarement nécessaire"}]},{type:a,tag:d,props:{},children:[{type:b,value:"ca prenait 10 secondes"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Simple parce qu'on était très proche du web, si vous aviez compris l'utilisation des variables réservées $_GET, $_POST, $_REQUEST, $_SESSION et $_COOKIE vous aviez presque tout compris aux grands principes de l'HTTP (ok je simplifie ^^)."}]},{type:a,tag:c,props:{},children:[{type:a,tag:p,props:{},children:[{type:a,tag:i,props:{},children:[{type:b,value:"En gros, on passait de l'éditeur au navigateur, un F5 et on testait."}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Bon d'accord, mais il y avait quand même des points noirs faut pas le cacher :"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"pas de stack cohérente, à l'époque PEAR était encore trop inégal suivant les paquetages (je ne sais pas si ça a changé aujourd'hui)"}]},{type:a,tag:d,props:{},children:[{type:b,value:"pas de Framework ORM, donc pas mal de SQL à faire soi-même"}]},{type:a,tag:d,props:{},children:[{type:b,value:"l'absence de typage c'est pas toujours très pratique, surtout pour l'auto complétion dans un IDE ^^ (je sais, chacun son point de vue sur ce sujet...)"}]},{type:a,tag:d,props:{},children:[{type:b,value:"ok, ne pas compiler c'est un gain de temps, mais c'est un peu frustrant de se rendre compte à l'exécution qu'on a oublié un \";\""}]}]},{type:a,tag:j,props:{id:z},children:[{type:b,value:A}]},{type:a,tag:c,props:{},children:[{type:b,value:"Eh bien Play! c'est un ensemble de ces avantages, sans les inconvénients ;)"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"Le débogage est là encore rapide, des erreurs très détaillées sont affichées sur le navigateur."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Que ce soit pour la compilation :"}]},{type:a,tag:c,props:{},children:[{type:a,tag:n,props:{alt:"guide1-3",src:"\u002Fimages\u002Fguide1-3.png"},children:[]}]},{type:a,tag:c,props:{},children:[{type:b,value:B}]},{type:a,tag:c,props:{},children:[{type:b,value:"L'insertion de données :"}]},{type:a,tag:c,props:{},children:[{type:a,tag:n,props:{alt:"guide6-1",src:"\u002Fimages\u002Fguide6-1.png"},children:[]}]},{type:a,tag:c,props:{},children:[{type:b,value:B}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"Relancer le serveur Play! c'est très rare, puisque Play! compile vos sources et lit vos fichiers de conf à la volée. Et au pire c'est pas très long, beaucoup moins qu'un serveur Weblogic ;)"}]}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"On reste proche du Web, la surcouche J2EE a disparu et il ne reste que les concepts HTTP pour ce Framework qui se veut totalement "},{type:a,tag:f,props:{href:"http:\u002F\u002Fjava.sun.com\u002Fdeveloper\u002FtechnicalArticles\u002FWebServices\u002Frestful\u002F",rel:[g],title:C},children:[{type:b,value:C}]},{type:b,value:". On a accès directement à params, session, request etc... Et le binding automatique sur les paramètres HTTP c'est du bohneur ^^"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:p,props:{},children:[{type:b,value:"Le cycle de développement consiste toujours à coder puis switcher vers le navigateur."}]}]},{type:a,tag:j,props:{id:D},children:[{type:b,value:E}]},{type:a,tag:c,props:{},children:[{type:b,value:"Eh bien ils ont disparu :"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"la stack est très cohérente, on a une très bonne intégration des paquetages entre eux (JPA intégré dans le model, model enrichi dans les templates, utilitaires fourni de base pour les mails où la manipulation des cookies etc...)"}]},{type:a,tag:d,props:{},children:[{type:b,value:"le Framework ORM c'est tout simplement JPA. En fait dans un premier temps en développant avec Play je n'ai pas touché du tout ni à du SQL, ni à une base de données."}]},{type:a,tag:d,props:{},children:[{type:b,value:"Évidemment Java est typé (je sais, chacun son point de vue sur ce sujet...)"}]},{type:a,tag:d,props:{},children:[{type:b,value:"Comme on reste dans un univers Java, j'utilise Eclipse allégrement et je profite de la détection des erreurs en amont via mon éditeur. Play! compile ses classes à la volée mais ça n'empêche pas Eclipse de faire de même. D'après la doc Play! utilise d'ailleurs le compilateur d'Eclipse dans son noyau."}]}]},{type:a,tag:j,props:{id:F},children:[{type:b,value:G}]},{type:a,tag:c,props:{},children:[{type:b,value:"D'un point de vue technique, je suis pour l'instant débutant en Play! A première vue c'est concis, rapide à développer etc..."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Mais, je n'ai pas encore testé des choses très importantes :"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"les performances du serveur Play! En effet Play! n’utilisant pas de serveur d'appli, on se repose sur la stack Play! qui reste jeune. Pour avoir connu des ennuis en pagaille sur Tomcat ou Apache, je resterais prudent sur l'utilisation de Play! sous forte charge tant que je ne l'aurais pas testé moi même"}]},{type:a,tag:d,props:{},children:[{type:b,value:"la souplesse de configuration. Ca rejoint le point précédent, ok pour l'instant j'ai utilisé Play! avec la configuration de base mais est-ce que je pourrais facilement le tuner en fonction du nombre d'utilisateurs ?"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Enfin ce sont des interrogations donc « "},{type:a,tag:i,props:{},children:[{type:b,value:"Wait and see"}]},{type:b,value:" »."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ensuite Play! peut être perturbant sur certains principes :"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"des variables publiques sans accesseurs. Même si, je l'accorde, les accesseurs sont souvent inutiles, parfois ils servent à effectuer un traitement\u002Fune transformation avant affectation ou envoi de la valeur. Ils peuvent aussi servir à protéger en écriture des collections de données. Ca reste pour moi un point polémique mais je suis peut être passé à côté."}]},{type:a,tag:d,props:{},children:[{type:b,value:"des méthodes statiques destiné à des controlleurs procéduraux. Déstabilisant mais pourquoi pas. Du coup la surcharge des méthodes statiques n'est pas possible mais pour l'instant je n'ai pas rencontré de problème majeur avec cette philosophie."}]},{type:a,tag:d,props:{},children:[{type:b,value:"des méthodes statiques sur les principaux outils de Play! Etant assez friand de programmation par contrat, j'ai tendance à être assez opposé aux méthodes statiques. Ca se justifie parfois (sur java.math par exemple), et d'autre fois c'est délicat (Cache ou Notifier par exemple ?). J'aime bien injecter l'implémentation dont j'ai besoin en fonction du contexte, surtout quand je teste ^^"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et puis sinon, dans les inconvénients : ce n'est pas du J2EE Bon ok je viens de dire que c'était super bien que ce ne soit pas du J2EE, c'est simple, concis, efficace etc... Oui mais du coup on perd quelques outils qui étaient présents uniquement sur J2EE (les filtres Spring Security par exemple). On se coupe d'une partie des outils déjà créé, donc il faudra les recréer ou attendre qu'il le soit."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et là ça me permet d'aborder le principal point noir de Play!, sa communauté. Play! étant très jeune, la communauté est très limité, les outils et modules sont essentiellement issus de l'équipe de Play! La richesse d'un Framework c'est son écosystème, et celui-ci est encore assez limité ce qui rend son choix un peu culotté pour l'instant. Et puis même si le technical lead Guillaume Bort est très actif aujourd'hui, qu'en sera-t-il demain s'il abandonne sa société Zenecity ? Quelle est la pérennité de ce Framework franco-francais et de la société Zenecity qui se trouve derrière ?"}]},{type:a,tag:o,props:{id:H},children:[{type:b,value:I}]},{type:a,tag:c,props:{},children:[{type:b,value:"J'adhère aux principes de simplicité mis en avant par ces Frameworks \"haute productivité\". Après avoir bossé (et bosser encore) sur des logiciels usines à gaz, après avoir vu des fichiers de 75 000 lignes de code (véridique !!), des couches d'abstraction à n'en plus finir pour envoyer un simple entier d'une fonction à l'autre etc... je tente de coller le plus possible au principe : "},{type:a,tag:f,props:{href:"http:\u002F\u002Ffr.wikipedia.org\u002Fwiki\u002FKeep_it_Simple,_Stupid",rel:[g],title:J},children:[{type:b,value:J}]},{type:b,value:". Donc oui, Play! j'adhère et je compte jouer encore un peu avec, au moins en extra professionnel. En espérant qu'il gagne un écosystème suffisamment pérenne pour le proposer en milieu professionnel."}]}],toc:{title:m,searchDepth:h,depth:h,links:[{id:r,depth:h,text:s},{id:v,depth:h,text:w,children:[{id:x,depth:k,text:y},{id:z,depth:k,text:A},{id:D,depth:k,text:E},{id:F,depth:k,text:G}]},{id:H,depth:h,text:I}]}},_type:"markdown",_id:"content:articles:2009:12:29:jouons.md",_source:"content",_file:"articles\u002F2009\u002F12\u002F29\u002Fjouons.md",_extension:"md"}},prerenderedAt:1684525856616}}("element","text","p","li","ul","a","nofollow",2,"em","h3",3,false,"","img","h2","strong","play","mais-cest-quoi-play","Mais c'est quoi Play! ?","Guillaume Bort","Zenecity","cest-bien-ou-pas","C'est bien ou pas ?","pourquoi-cette-comparaison-avec-php","Pourquoi cette comparaison avec PHP ?","et-play-dans-tout-ça","Et Play dans tout ça ?","(image issue de la doc Play!)","REST","et-quand-aux-points-noirs-que-jévoquais-pour-le-php","Et quand aux points noirs que j'évoquais pour le PHP ?","bon-mais-il-y-a-quelque-chose-qui-cloche","Bon mais il y a quelque chose qui cloche ?","conclusion","Conclusion","Keep it simple"))