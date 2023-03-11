export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){return {data:{"/articles/2015/12/22/vers-linfini-et-au-dela":{_path:"\u002Farticles\u002F2015\u002F12\u002F22\u002Fvers-linfini-et-au-dela",_dir:"22",_draft:j,_partial:j,_locale:m,_empty:j,title:"Vers l'infini et au-delà",description:"[![tumblr_lw0g09a2hf1qaz5oho1_500[1]](\u002Fimages\u002F1ace7-tumblr_lw0g09a2hf1qaz5oho1_5001.png)](https:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2019\u002F10\u002F1ace...",id:"1222",date:"2015-12-22",categories:["waza"],tags:["backend","gatling","jmeter","loader-io","performance"],img:"1ace7-tumblr_lw0g09a2hf1qaz5oho1_5001.png",cover:"cover4.jpg",readingTime:{text:"6 min read",minutes:5.575,time:334500,words:1115},body:{type:"root",children:[{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{href:"https:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2019\u002F10\u002F1ace7-tumblr_lw0g09a2hf1qaz5oho1_5001.png",rel:[e]},children:[{type:a,tag:g,props:{alt:"tumblr_lw0g09a2hf1qaz5oho1_5001",src:"\u002Fimages\u002F1ace7-tumblr_lw0g09a2hf1qaz5oho1_5001.png"},children:[]}]},{type:b,value:"Une fois n'est pas coutume ce billet sera rédigé d'une manière plus collégiale que d'habitude car il reflète le travail de 3 personnes : "},{type:a,tag:d,props:{href:"https:\u002F\u002Fwww.hopwork.fr\u002Fprofile\u002Fnicolasgriseydemengel",rel:[e]},children:[{type:b,value:"Nicolas Demengel"}]},{type:b,value:k},{type:a,tag:d,props:{href:"https:\u002F\u002Fwww.hopwork.fr\u002Fprofile\u002Fmaximegaudin",rel:[e]},children:[{type:b,value:"Maxime Gaudin"}]},{type:b,value:" et moi-même. Récemment nous avons eu un petit passage télé au JT de France 2. Et pour une fois on s'est un peu posé la question de l'impact que cela pouvait avoir en terme de visites sur le site. Nous avions déjà eu des passages sur "},{type:a,tag:d,props:{href:"https:\u002F\u002Fblog.hopwork.fr\u002Fhopwork-sur-canal-et-i-tele\u002F",rel:[e]},children:[{type:b,value:"itélé"}]},{type:b,value:", "},{type:a,tag:d,props:{href:"http:\u002F\u002Fwww.france2.fr\u002Femissions\u002Ftelematin\u002Fdecouverte\u002Fdemain-tous-free-lances_300559",rel:[e]},children:[{type:b,value:"télématin"}]},{type:b,value:", BFM et nous n'avions pas vraiment anticipé. Mais cette fois c'était un peu l'occasion de travailler sur les performances du site et de vérifier que nous pouvions tenir un pic de charge. Et nous avons eu quelques surprises."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Spoil : pour tout vous dire, nous n'avons pas vraiment été jusqu'à l'infini et au-delà :)"}]},{type:a,tag:l,props:{id:n},children:[{type:b,value:o}]},{type:a,tag:c,props:{},children:[{type:b,value:"Première étape, nous avons essayé d'estimer le nombre de visiteurs simultanés que nous pouvions supporter sur 3 pages très identifiées : la page d'accueil, un résultat de recherche et une page de visualisation d'un profil. C'est le type de pages qui sont susceptibles d'être vus lors d'un pic d'affluence. Pour cela nous avons utilisé "},{type:a,tag:d,props:{href:"https:\u002F\u002Floader.io\u002F",rel:[e]},children:[{type:b,value:"loader.io"}]},{type:b,value:" qui permet d'attaquer le site à partir de plusieurs endroits dans le monde avec des scénarios assez simplistes, ici de simples demandes d'affichages des pages. Loader.io a l'avantage de demander un setup assez simple, de visualiser l'évolution des temps de réponse en fonction du nombre d'utilisateurs provenant de différentes origines."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Premier essai, avec 250 utilisateurs simultanés sur une minute de temps nous constations déjà des erreurs serveurs et de nombreux logs anormaux dans logentries. Les logs étaient cependant assez rapides à analyser, nous n'avions tout simplement "},{type:a,tag:h,props:{},children:[{type:b,value:"pas dimensionné correctement"}]},{type:b,value:" le nombre de threads tomcat, nombre de threads mongo etc..."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Autant vous dire que nous étions loin de l'infini..."}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2015\u002F12\u002Fea8bf-image-2015-12-05-14-55-57-179.png",rel:[e]},children:[{type:a,tag:g,props:{alt:"image-2015-12-05-14-55-57-179",src:"\u002Fimages\u002Fea8bf-image-2015-12-05-14-55-57-179.png"},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Une fois cette phase de dimensionnement solutionné, la barre des 250 utilisateurs simultanés a pu être franchi pour atteindre 700. Mais encore une fois, avec à peine 700 utilisateurs simultanés sur une minute de temps, le temps de réponse augmentait de façon linéaire. La moyenne passait à plus de 20 secondes de chargement pour des pics a 50secs ! Alors que le temps unitaire de consultation était assez faible. C'est en général symptomatique d'un point de contention quelque part dans votre application."}]},{type:a,tag:c,props:{},children:[{type:b,value:"J'avoue, le moral en prend un coup, vous avez en souvenir "},{type:a,tag:d,props:{href:"https:\u002F\u002Fsites.google.com\u002Fa\u002Focto.com\u002Fchallengeusi2011\u002F",rel:[e]},children:[{type:b,value:"le challenges USI 2011"}]},{type:b,value:" où les participants tentaient de passer 1 milliards d'utilisateurs et vous plafonnez à un malheureux 250..."}]},{type:a,tag:l,props:{id:p},children:[{type:b,value:q}]},{type:a,tag:c,props:{},children:[{type:b,value:"A partir de cette étape nous avons commencé à travailler en local. Pour ce faire nous avons utilisé jMeter et lancé l'application sur nos machines de devs. Une des techniques que j'utilise bien souvent dans ce type de cas de figure c'est de récupérer des "},{type:a,tag:d,props:{href:"https:\u002F\u002Fdocs.oracle.com\u002Fcd\u002FE13150_01\u002Fjrockit_jvm\u002Fjrockit\u002Fgeninfo\u002Fdiagnos\u002Fusing_threaddumps.html",rel:[e]},children:[{type:b,value:"threads dumps"}]},{type:b,value:" à intervalle régulier. Un thread dump est une sorte de photo de l'activité des différents threads de votre application à un instant donné. Il est possible d'avoir cette photo via des outils comme "},{type:a,tag:h,props:{},children:[{type:b,value:"intellij"}]},{type:b,value:k},{type:a,tag:h,props:{},children:[{type:b,value:"jvisualvm"}]},{type:b,value:k},{type:a,tag:h,props:{},children:[{type:b,value:"yourkit"}]},{type:b,value:" ou en ligne de commande via un "},{type:a,tag:h,props:{},children:[{type:b,value:"kill -3"}]},{type:b,value:" Si vous avez des lenteurs il y a de fortes chances qu'avec plusieurs photos vous débusquiez les bouts de code fautif très rapidement. Et c'est ce qui s'est passé."}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2015\u002F12\u002F7e33f-td.jpg",rel:[e]},children:[{type:a,tag:g,props:{alt:"td",src:"\u002Fimages\u002F7e33f-td.jpg"},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Dans ce thread dump nous observons que beaucoup de threads sont en état BLOCKED sur des bouts de code très similaires. Ces bouts de code sont liés à la résolution des EL (expression language) dans des JSP. Et après une petite investigation sur Google nous ne sommes pas les premiers à avoir été confrontés à ce souci. Dans "},{type:a,tag:d,props:{href:"http:\u002F\u002Fwww.ebaytechblog.com\u002F2013\u002F01\u002F04\u002Ftomcatjasper-performance-tuning\u002F",rel:[e]},children:[{type:b,value:"cet article d'Ebay"}]},{type:b,value:", ceux-ci expliquent que la résolution des EL passe par une série de resolvers assez coûteux dont l'un deux tente de faire un chargement de classes. Et dans le class loader Tomcat, ce chargement est réalisé dans une méthode synchrone. Très mauvaise idée sur des résolutions très fréquentes et pour de multiples clients. Heureusement ebay a poussé deux patchs. "},{type:a,tag:d,props:{href:"https:\u002F\u002Fbz.apache.org\u002Fbugzilla\u002Fshow_bug.cgi?id=53896",rel:[e]},children:[{type:b,value:"L'un des deux existe déjà"}]},{type:b,value:" dans tomcat 8 mais "},{type:a,tag:d,props:{href:"https:\u002F\u002Fbz.apache.org\u002Fbugzilla\u002Fshow_bug.cgi?id=54239",rel:[e]},children:[{type:b,value:"le second n'a pas été intégré"}]},{type:b,value:". Nous l'avons donc réintégré dans notre code base et porté pour Tomcat 8 et Spring Boot (merci Nico, le boulot n'était pas trivial). Le principe global de ces deux patchs c'est :"}]},{type:a,tag:"ol",props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:"d'optimiser l'utilisation des résolveurs (c'est désormais dans la base de code de Tomcat)"}]},{type:a,tag:f,props:{},children:[{type:b,value:"de remplacer des résolutions d'EL simples par du code Java lors de la transformation JSP vers classe java."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Une fois cette première étape franchi, un nouveau jeu de test nous a permis d'isoler un autre gros frein, l'utilisation de la balise c:url dans les jsp. "},{type:a,tag:d,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2015\u002F12\u002Fc1e9e-td2.jpg",rel:[e]},children:[{type:a,tag:g,props:{alt:"td2",src:"\u002Fimages\u002Fc1e9e-td2.jpg"},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ces balises déclenchent des appels à des recherches de ressources dans le classpath et notamment dans les jars de l'application."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Dans une grande partie de notre code ces appels sont inutiles et ont pu être supprimés mais ils sont nécessaires à quelques endroits pour les ressources statiques car l'utilisation de c:url nous permet de gérer le versionning automatique des noms de fichiers. Cependant on peut demander à Spring de cacher le résultat des appels à c:url, ce que nous avons donc fait."}]},{type:a,tag:l,props:{id:r},children:[{type:b,value:s}]},{type:a,tag:c,props:{},children:[{type:b,value:"Une fois ces optimisation réalisé, nous avons enfin pu passer le cap des 1000 voire 4000 utilisateurs simultanés sur une minute de temps pour la page d'accueil. Et nous n'avons pas tenté d'aller plus haut pour l'instant. L'infini attendra un peu. Les pics de temps de 50 secondes ont disparu pour désormais avoir des temps moyen de 400ms bien plus acceptables."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Certains trouveront ça faible, ça laisse en tout cas un peu de marge pour voir venir et ce sera un problème de riche lorsque nous devrons gérer 10 000 visiteurs par minutes."}]},{type:a,tag:c,props:{},children:[{type:b,value:"L'autre gros impact que nous n'avions pas anticipé c'est que nous avons gagné 10 points sur google page speed, sans trop savoir pourquoi malheureusement. Mais c'est certainement lié à nos différentes optimisations."}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2015\u002F12\u002Fe526d-pagespeed.jpg",rel:[e]},children:[{type:a,tag:g,props:{alt:"pagespeed",src:"\u002Fimages\u002Fe526d-pagespeed.jpg"},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ce qu'il faut en retenir, c'est qu'il est généralement peu utile de s'attaquer à la lecture du code pour tenter de faire des optimisations à l'aveugle. Ici la majorité des soucis n'étaient pas triviaux au premier abord. Bien sûr nous avons aussi détecté des petites optimisations sur quelques bouts de code que nous n'avons pas décrits ici mais celles-ci, bien que très bénéfiques, étaient négligeables par rapport aux autres problèmes majeurs décrits plus haut."}]},{type:a,tag:c,props:{},children:[{type:b,value:"La méthode pour nous a donc été :"}]},{type:a,tag:"ul",props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:"de bencher l'existant pour relever les mesures anormales"}]},{type:a,tag:f,props:{},children:[{type:b,value:"de prendre des thread dumps pour repérer les bouts de codes fautifs"}]},{type:a,tag:f,props:{},children:[{type:b,value:"de traiter les problèmes dans l'ordre du plus important au moins important"}]},{type:a,tag:f,props:{},children:[{type:b,value:"de remesurer pour valider la résolution (si vous sautez cette étape c'est un peu comme si vous n'aviez rien fait)"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et pour finir nous avons aussi automatisé la détection de régression en utilisant Gatling et Jenkins afin de mesurer et détecter les temps de réponse chaque nuit pour vérifier que nous n'introduisions plus de nouveaux problèmes de performance sur les pages que nous avons déjà traitées."}]}],toc:{title:m,searchDepth:i,depth:i,links:[{id:n,depth:i,text:o},{id:p,depth:i,text:q},{id:r,depth:i,text:s}]}},_type:"markdown",_id:"content:articles:2015:12:22:vers-linfini-et-au-dela.md",_source:"content",_file:"articles\u002F2015\u002F12\u002F22\u002Fvers-linfini-et-au-dela.md",_extension:"md"}},prerenderedAt:1678541444671}}("element","text","p","a","nofollow","li","img","strong",2,false,", ","h2","","loaderio","Loader.io","session-de-travail-en-local","Session de travail en local","résultats","Résultats"))