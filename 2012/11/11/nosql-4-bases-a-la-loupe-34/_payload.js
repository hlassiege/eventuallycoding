export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E){return {data:{"/articles/2012/11/11/nosql-4-bases-a-la-loupe-34":{_path:"\u002Farticles\u002F2012\u002F11\u002F11\u002Fnosql-4-bases-a-la-loupe-34",_dir:"11",_draft:i,_partial:i,_locale:j,_empty:i,title:r,description:"[![](\u002Fimages\u002Fnosql-logo.gif \"nosql-logo\")](http:\u002F\u002Fhakanai.free.fr\u002Findex.php\u002Fnosql-4-bases-a-la-loupe-14\u002Fnosql-logo\u002F)Vous vous rappelez du bouquin [7 d...",id:"673",date:"2012-11-11",categories:["waza"],tags:["elasticsearch","jest","lucene",s],img:"nosql-logo.gif",cover:"cover7.jpg",readingTime:{text:"5 min read",minutes:4.47,time:268200,words:894},body:{type:"root",children:[{type:b,tag:c,props:{},children:[{type:b,tag:e,props:{href:"http:\u002F\u002Fhakanai.free.fr\u002Findex.php\u002Fnosql-4-bases-a-la-loupe-14\u002Fnosql-logo\u002F",rel:[f]},children:[{type:b,tag:"img",props:{alt:j,src:"\u002Fimages\u002Fnosql-logo.gif",title:"nosql-logo"},children:[]}]},{type:a,value:"Vous vous rappelez du bouquin "},{type:b,tag:e,props:{href:"http:\u002F\u002Fpragprog.com\u002Fbook\u002Frwdata\u002Fseven-databases-in-seven-weeks",rel:[f]},children:[{type:a,value:"7 databases in seven weeks"}]},{type:a,value:" ? Pour le coup j'ai eu l'occasion de réaliser une expérience un peu moins ambitieuse, seulement 4 bases de données. Et si je n'ai pas été aussi loin que le bouquin précédent je vous propose quand même un retour d'expérience sur :"}]},{type:b,tag:h,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"Redis"}]},{type:b,tag:g,props:{},children:[{type:a,value:t}]},{type:b,tag:g,props:{},children:[{type:a,value:u}]},{type:b,tag:g,props:{},children:[{type:a,value:"MongoDb"}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Ce billet fait partie d'une série de plusieurs billets dont le premier est "},{type:b,tag:e,props:{href:v,rel:[f],title:w},children:[{type:a,value:"ici"}]},{type:a,value:". Et le sujet de celui-ci est ElasticSearch et Solr."}]},{type:b,tag:"h3",props:{id:x},children:[{type:a,value:y}]},{type:b,tag:c,props:{},children:[{type:a,value:"Je fais un chapitre commun pour les deux parce que les deux reposent sur Lucene et vont être assez proches sur les fonctionnalités qui m’intéressent."}]},{type:b,tag:k,props:{id:s},children:[{type:a,value:t}]},{type:b,tag:c,props:{},children:[{type:a,value:"En fait j’ai testé Solr avant de commencer à implémenter avec Lucene. Notre première rencontre m’a un peu déçu quand j’ai du déclarer mes mappings de données côtés serveurs. Et puis il m’a semblé à ce moment qu’avoir un process supplémentaire à administrer c’était un peu overkill alors que je pouvais me contenter de faire du Lucene de base. Bref, j’ai testé, les perfs étaient bonnes, mais j’ai pas été plus loin :"}]},{type:b,tag:c,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:l}]},{type:a,value:m},{type:b,tag:d,props:{},children:[{type:a,value:"0.22"}]},{type:a,value:" [+- 0.02], round.gc: 0.00 [+- 0.00], GC.calls: 1, GC.time: 0.00, time.total: 3.46, time.warmup: 1.24, time.bench: 2.22 "},{type:b,tag:d,props:{},children:[{type:a,value:l}]},{type:a,value:n},{type:b,tag:d,props:{},children:[{type:a,value:z}]},{type:a,value:" [+- 0.00], round.gc: 0.00 [+- 0.00], GC.calls: 0, GC.time: 0.00, time.total: 3.01, time.warmup: 1.02, time.bench: 2.00 "},{type:b,tag:d,props:{},children:[{type:a,value:l}]},{type:a,value:o},{type:b,tag:d,props:{},children:[{type:a,value:z}]},{type:a,value:" [+- 0.00], round.gc: 0.00 [+- 0.00], GC.calls: 1, GC.time: 0.00, time.total: 3.02, time.warmup: 1.03, time.bench: 2.00"}]},{type:b,tag:c,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Fbitbucket.org\u002Fhlassiege\u002Fnosql\u002Fsrc\u002F821b12c7c105\u002Fsrc\u002Ftest\u002Fjava\u002Fcom\u002Fsandbox\u002FSolrTest.java?at=default",rel:[f]},children:[{type:a,value:A}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Et puis le temps à passé..."}]},{type:b,tag:k,props:{id:"elastic-search"},children:[{type:a,value:u}]},{type:b,tag:c,props:{},children:[{type:a,value:"Et 2 mois plus tard mes besoins et ma compréhension ont changé :"}]},{type:b,tag:h,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"nous voulons migrer sur Heroku ou Clever-Cloud :"},{type:b,tag:h,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"on trouve ça dommage de bénéfier d’une elasticité sur Mongo et pas sur nos index de recherche"}]},{type:b,tag:g,props:{},children:[{type:a,value:"de toute facon tous les PAAS que nous avons regardé ne proposent que des stockage volatile, interdisant de fait d’avoir nos index de recherche sur disque et qui nous rend obligatoire l’utilisation d’un Elastic Search (ou d’un Solr)"}]}]}]},{type:b,tag:g,props:{},children:[{type:a,value:"Lucene c’est super mais il y a des fonctionnalités qui nécessitent un effort de mise en place non négligeable, comme par exemple les recherches géospatiales ou les facets alors que c’est dispo gratuitement sur du Elastic Search (mais pas sur Solr pour le géospatial)"}]},{type:b,tag:g,props:{},children:[{type:a,value:"j’ai assisté à une bonne prez de "},{type:b,tag:e,props:{href:"https:\u002F\u002Ftwitter.com\u002Fdadoonet",rel:[f]},children:[{type:a,value:"David Pilato"}]},{type:a,value:" et "},{type:b,tag:e,props:{href:"https:\u002F\u002Ftwitter.com\u002Ftlrx",rel:[f]},children:[{type:a,value:"Tanguy Leroux"}]},{type:a,value:" sur Elastic Search et pour moi à ce moment là, la balance vient de pencher sévèrement en faveur de Elastic Search"}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Bref, ce qui explique que j’ai repris des tests avec Elastic Search."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Tiens d’ailleurs pendant la prez de David et Tanguy, une personne a indiqué utiliser Elastic Search comme stockage primaire. Intéressant car malgré tout ca reste encore une question ouverte selon moi. A priori la pratique est encore peu conseillée et je suis assez perplexe personnellement sur la simplicité des capacités d’update sur plusieurs records d’un index (vu qu’un update revient à supprimer\u002Frecréer un document, on ne peut pas se contenter d’updater un champ, il faut réindexer le document entier)"}]},{type:b,tag:c,props:{},children:[{type:b,tag:"em",props:{},children:[{type:a,value:"A ce sujet si vous avez des avis sur la question, n’hésitez pas à partager."}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Côté perf, là encore bons résultats :"}]},{type:b,tag:c,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:p}]},{type:a,value:m},{type:b,tag:d,props:{},children:[{type:a,value:"0.05"}]},{type:a,value:" [+- 0.01], round.gc: 0.00 [+- 0.00], GC.calls: 0, GC.time: 0.00, time.total: 0.91, time.warmup: 0.43, time.bench: 0.48 "},{type:b,tag:d,props:{},children:[{type:a,value:p}]},{type:a,value:n},{type:b,tag:d,props:{},children:[{type:a,value:B}]},{type:a,value:" [+- 0.00], round.gc: 0.00 [+- 0.00], GC.calls: 0, GC.time: 0.00, time.total: 0.62, time.warmup: 0.23, time.bench: 0.39 "},{type:b,tag:d,props:{},children:[{type:a,value:p}]},{type:a,value:o},{type:b,tag:d,props:{},children:[{type:a,value:B}]},{type:a,value:" [+- 0.01], round.gc: 0.00 [+- 0.00], GC.calls: 0, GC.time: 0.00, time.total: 0.82, time.warmup: 0.42, time.bench: 0.39"}]},{type:b,tag:c,props:{},children:[{type:a,value:"On remarque même un net avantage pour Elastic Search. Mais vu que j’ai peu poussé sur Solr, j’imagine que j’ai du louper une optimisation quelque part. Donc à prendre avec des pincettes."}]},{type:b,tag:c,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Fbitbucket.org\u002Fhlassiege\u002Fnosql\u002Fsrc\u002F821b12c7c105\u002Fsrc\u002Ftest\u002Fjava\u002Fcom\u002Fsandbox\u002FElasticSearchTest.java?at=default",rel:[f]},children:[{type:a,value:A}]}]},{type:b,tag:k,props:{id:"elastic-search-avec-jest"},children:[{type:a,value:"Elastic Search avec "},{type:b,tag:e,props:{href:C,rel:[f]},children:[{type:a,value:D}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Pour comprendre pourquoi j’ai choisi "},{type:b,tag:e,props:{href:C,rel:[f]},children:[{type:a,value:D}]},{type:a,value:", en fait j’ai eu un autre souci par la suite. Nous avons migré notre application sur "},{type:b,tag:e,props:{href:"http:\u002F\u002Fwww.heroku.com\u002F",rel:[f]},children:[{type:a,value:"Heroku"}]},{type:a,value:" et nous avons donc utilisé un add-on Heroku pour Elastic Search : searchbox.io. Cependant l’url est de la forme : "},{type:b,tag:e,props:{href:"https:\u002F\u002Fapi.searchbox.io\u002Fapi-key\u002Funecl%C3%A9",rel:[f]},children:[{type:a,value:"https:\u002F\u002Fapi.searchbox.io\u002Fapi-key\u002Funeclé"}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Or l’API ElasticSearch permet de préciser host et port, mais pas de context path... (d’ailleurs si je me trompe, merci de me corriger !) "},{type:b,tag:e,props:{href:"https:\u002F\u002Fapi.searchbox.io\u002Fapi-key\u002Fune",rel:[f]},children:[]},{type:a,value:"Du coup je suis parti sur Jest, l’API réalisé par SearchBox."}]},{type:b,tag:c,props:{},children:[{type:a,value:"De premier abord elle est plutôt pas mal, simple à utiliser mais malheureusement elle est dans un état que je qualifierais d’alpha. (J’ai du la patcher plusieurs fois pour mes besoins)."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Côté perf, j’ai un écart assez surprenant avec l’API Elastic Search de base :"}]},{type:b,tag:c,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:q}]},{type:a,value:m},{type:b,tag:d,props:{},children:[{type:a,value:"0.24"}]},{type:a,value:" [+- 0.03], round.gc: 0.00 [+- 0.00], GC.calls: 1, GC.time: 0.00, time.total: 3.76, time.warmup: 1.40, time.bench: 2.36 "},{type:b,tag:d,props:{},children:[{type:a,value:q}]},{type:a,value:n},{type:b,tag:d,props:{},children:[{type:a,value:"0.18"}]},{type:a,value:" [+- 0.01], round.gc: 0.00 [+- 0.00], GC.calls: 1, GC.time: 0.00, time.total: 2.73, time.warmup: 0.92, time.bench: 1.81 "},{type:b,tag:d,props:{},children:[{type:a,value:q}]},{type:a,value:o},{type:b,tag:d,props:{},children:[{type:a,value:"0.21"}]},{type:a,value:" [+- 0.01], round.gc: 0.00 [+- 0.00], GC.calls: 1, GC.time: 0.00, time.total: 3.15, time.warmup: 1.04, time.bench: 2.11"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Pourtant à première vue vu la taille de la lib ca paraît étrange un tel écart."}]},{type:b,tag:c,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Fbitbucket.org\u002Fhlassiege\u002Fnosql\u002Fsrc\u002F821b12c7c105\u002Fsrc\u002Ftest\u002Fjava\u002Fcom\u002Fsandbox\u002FJestTest.java?at=default",rel:[f]},children:[{type:a,value:"Le code complet sous bitbucket"}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Bref, (copyright Canal+), nous sommes sur un add-on Elastic Search pour Heroku"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Le prochain billet sera l’occasion de récapituler nos résultats."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Pour voir chaque billet :"}]},{type:b,tag:h,props:{},children:[{type:b,tag:g,props:{},children:[{type:b,tag:e,props:{href:v,rel:[f],title:w},children:[{type:a,value:"L'intro"}]}]},{type:b,tag:g,props:{},children:[{type:b,tag:e,props:{href:"http:\u002F\u002Fhakanai.free.fr\u002Findex.php\u002Fnosql-4-bases-a-la-loupe-24\u002F",rel:[f],title:"Nosql, 4 bases à la loupe 2\u002F4"},children:[{type:a,value:"Redis et Mongo"}]}]},{type:b,tag:g,props:{},children:[{type:b,tag:e,props:{href:"http:\u002F\u002Fhakanai.free.fr\u002Findex.php\u002Fnosql-4-bases-a-la-loupe-34\u002F",rel:[f],title:r},children:[{type:a,value:"ElasticSearch et Solr"}]}]},{type:b,tag:g,props:{},children:[{type:b,tag:e,props:{href:"http:\u002F\u002Fhakanai.free.fr\u002Findex.php\u002Fnosql-4-bases-a-la-loupe-44\u002F",rel:[f]},children:[{type:a,value:"Le récap"}]}]}]}],toc:{title:j,searchDepth:E,depth:E,links:[{id:x,depth:3,text:y}]}},_type:"markdown",_id:"content:articles:2012:11:11:nosql-4-bases-a-la-loupe-34.md",_source:"content",_file:"articles\u002F2012\u002F11\u002F11\u002Fnosql-4-bases-a-la-loupe-34.md",_extension:"md"},"/articles/2012/11/11/nosql-4-bases-a-la-loupe-34/relatedArticles":[]},prerenderedAt:1676806140818}}("text","element","p","strong","a","nofollow","li","ul",false,"","h4","SolrTest",".findByLoginShouldReturnSomething: [measured 10 out of 15 rounds, threads: 1 (sequential)] round: ",".assertThatMyDatabaseHasMoreThan100Profile: [measured 10 out of 15 rounds, threads: 1 (sequential)] round: ",".testSearchWithEmbeddedObject: [measured 10 out of 15 rounds, threads: 1 (sequential)] round: ","ElasticSearchTest","JestTest","Nosql, 4 bases à la loupe 3\u002F4","solr","Solr","Elastic Search","http:\u002F\u002Fhakanai.free.fr\u002Findex.php\u002Fnosql-4-bases-a-la-loupe-14\u002F","Nosql, 4 bases à la loupe 1\u002F4","solr-et-elastic-search","Solr et Elastic Search","0.20","Le code complet sous Bitbucket","0.04","https:\u002F\u002Fgithub.com\u002Fsearchbox-io\u002FJest","Jest",2))