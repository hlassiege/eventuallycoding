export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B){return {data:{"/articles/2022/05/19/malt-engineering-under-the-hood-gridsome":{_path:"\u002Farticles\u002F2022\u002F05\u002F19\u002Fmalt-engineering-under-the-hood-gridsome",_dir:"19",_draft:j,_partial:j,_locale:o,_empty:j,title:"Malt engineering sous le capot avec Gridsome",description:"Je ne sais pas si vous avez suivi l'actualité mais le marché de la tech dévisse pas mal depuis le début d'année.",id:"1",date:"2022-05-19",categories:["Malt"],tags:["malt","gridsome","jamstack"],img:p,cover:p,readingTime:{text:"6 min read",minutes:5.205,time:312300,words:1041},body:{type:"root",children:[{type:b,tag:c,props:{},children:[{type:a,value:"Récemment chez Malt nous avons ouvert "},{type:b,tag:d,props:{href:q,rel:[e]},children:[{type:a,value:r}]},{type:a,value:" afin de rassembler et structurer des informations sur notre fonctionnement.\nSur ce billet je vous propose de découvrir comment cela fonctionne sous le capot.\nJe vais aborder les raisons de la création de ce site, en quoi il est différent du blog et surtout, comment il a été construit avec "},{type:b,tag:h,props:{},children:[{type:a,value:k}]},{type:a,value:l}]},{type:b,tag:i,props:{id:s},children:[{type:a,value:t}]},{type:b,tag:c,props:{},children:[{type:a,value:"Tout d'abord il faut remonter aux raisons qui nous poussent à partager publiquement notre travail.\nIl se trouve que depuis le début de ma carrière je fais ma veille technologique à travers des blogs, forums, vidéos sur internet.\nDepuis mes premières années professionnelles ces ressources en ligne m'ont rendu service et inspiré plusieurs fois, techniquement et humainement."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Assez naturellement j'ai commencé moi-même à contribuer en essayant également de partager mon expérience au bénéfice de cette communauté.\nTout d'abord en tant que rédacteur sur le site developpez.com de 2002 a 2007 (environ ?), puis via le blog "},{type:b,tag:d,props:{href:"https:\u002F\u002Feventuallycoding.com",rel:[e]},children:[{type:a,value:"eventuallycoding.com"}]},{type:a,value:" à partir de 2007."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Lorsque j'ai cofondé Malt, les premières personnes qui nous ont rejointes ce sont soit des ex-collègues avec qui j'avais déjà travaillé, soit des personnes que j'avais rencontré dans des meetups et conférences.\nChaque personne partageait cet état d'esprit et nous avons publié dès les premières années des projets open source (critical css, mongo streamer) et des articles pour décrire ce que nous apprenions avec la croissance de l'entreprise."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Au delà de cette volonté de partage, laissez-moi vous donner un second avantage du blog dans une société comme Malt.\nUn billet de blog, c'est une affirmation, un positionnement.\nLes billets laissent une trace, c'est une documentation. Ils ne documentent pas uniquement le comment, mais aussi le pourquoi.\nBref, aussi un formidable outil à l'intérieur de Malt. Si on donne publiquement une vision de Malt en externe, cela donne du sens et du concret en interne.\nC'est comme un phare qui montre l'intention."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Bref, c'est donc une longue histoire d'implication dans la communauté qui nous a mené ici.\nMais le "},{type:b,tag:d,props:{href:"https:\u002F\u002Fblog.malt.engineering",rel:[e]},children:[{type:a,value:"blog Malt"}]},{type:a,value:" a un défaut. Malgré sa richesse, il est difficile de structurer l'information, difficile de juger de ce qui est obsolète ou non.\nNous sentions qu'il était nécessaire de regrouper l'information pour faire un "},{type:b,tag:h,props:{},children:[{type:a,value:"handbook"}]},{type:a,value:", un petit guide auquel on se réfère ensuite constamment, notamment à l'arrivée dans l'équipe.\nEt quitte à le faire, autant poursuivre dans le même esprit, en le mettant à disposition publiquement."}]},{type:b,tag:c,props:{},children:[{type:a,value:"En somme, "},{type:b,tag:d,props:{href:q,rel:[e]},children:[{type:a,value:r}]},{type:a,value:" permet de mieux nous connaitre mais aussi de découvrir notre fonctionnement interne via un handbook que nous allons enrichir régulièrement.\nCela peut être d'une certaine aide pour d'autres entreprises qui passeront par les mêmes étapes que nous dans le futur.\nEt bien sûr, c'est aussi une facon de vous convaincre de nous rejoindre si vous pensez que cet environnement peut vous convenir."}]},{type:b,tag:i,props:{id:u},children:[{type:a,value:v}]},{type:b,tag:c,props:{},children:[{type:a,value:"Dans de nombreux cas, les sites d'équipes produit se fondent dans un Wordpress un peu plus corporate. Parfois ces équipes ont la main dessus mais c'est très souvent une autre équipe qui gère la structure du contenu.\nNous avons souhaité au contraire que l'ensemble de l'équipe produit puisse s'impliquer dessus, autant sur la forme que sur le fond.\nLe choix s'est donc porté vers un site statique avec "},{type:b,tag:h,props:{},children:[{type:a,value:"Javascript, API et markup"}]},{type:a,value:", la fameuse "},{type:b,tag:d,props:{href:"https:\u002F\u002Fjamstack.org\u002F",rel:[e]},children:[{type:a,value:"\"Jamstack\""}]},{type:a,value:l}]},{type:b,tag:c,props:{},children:[{type:b,tag:m,props:{alt:"Jamstack description",src:"\u002Fimages\u002Fjamstack.jpg"},children:[]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Ce choix a l'avantage d'être très simple à déployer, à modifier et possède une empreinte carbone très faible (tout est statique, pas de bases de données)."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Jamstack c'est un terme générique et nous avions le choix entre de "},{type:b,tag:d,props:{href:"https:\u002F\u002Fjamstack.org\u002Fgenerators\u002F",rel:[e]},children:[{type:a,value:"nombreuses alternatives"}]},{type:a,value:l}]},{type:b,tag:c,props:{},children:[{type:a,value:"Nous avons regardé rapidement :"}]},{type:b,tag:n,props:{},children:[{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{href:"https:\u002F\u002Fgohugo.io\u002F",rel:[e]},children:[{type:a,value:"Hugo"}]},{type:a,value:"\nson templating en go ne nous a pas séduits"}]},{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{href:"https:\u002F\u002Fnextjs.org\u002F",rel:[e]},children:[{type:a,value:"Next.js"}]},{type:a,value:"\ntemplating en react, nous n'étions pas à l'aise. Et c'est avant tout orienté pour faire des apps donc peut-être trop généraliste dans notre cas"}]},{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{href:"https:\u002F\u002Fwww.gatsbyjs.com\u002F",rel:[e]},children:[{type:a,value:"Gatsby"}]},{type:a,value:"\nle favori au départ. Le templating est aussi en react mais il est spécialisé sur la construction de site statique et est très populaire."}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Mais en cherchant davantage, on est tombé sur "},{type:b,tag:d,props:{href:"https:\u002F\u002Fnuxtjs.org\u002F",rel:[e]},children:[{type:a,value:"Nuxt"}]},{type:a,value:", une alternative à Next.js mais utilisant vue.js à la place de React.\nIl avait cependant les mêmes défauts que Next, trop généraliste, trop d'efforts à faire à première vue pour l'usage en tant que blog.\n(j'y reviendrais dans un futur billet cependant)."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Et puis enfin, le chainon manquant, une alternative à Gatsby et utilisant Vue.js comme moteur de template : "},{type:b,tag:d,props:{href:"https:\u002F\u002Fgridsome.org\u002F",rel:[e]},children:[{type:a,value:k}]}]},{type:b,tag:m,props:{alt:"Gridsome logo",src:"\u002Fimages\u002Fgridsome.png",width:400,className:["mx-auto"]},children:[]},{type:b,tag:c,props:{},children:[{type:a,value:"Gridsome a l'énorme avantage d'être spécialisé dans la construction de site statiques ("},{type:b,tag:h,props:{},children:[{type:a,value:"SSG : server side generation"}]},{type:a,value:"), est préconfiguré pour optimiser la performance, et peut se reposer sur des sources de données externes (comme Gatsby)."}]},{type:b,tag:i,props:{id:w},children:[{type:a,value:x}]},{type:b,tag:c,props:{},children:[{type:a,value:"Gridsome reprend les concepts de Gatsby et notamment l'aggrégation de sources externes au moment du build via des \"sources\". Ces sources peuvent utiliser des CMS headless, des flux RSS, des fichiers json, markdown etc...\nL'ensemble de ces informations sont mises dans une base de données Graphql qui peut être interrogé lors de la création de la page. Et tout le templating est fait via Vue.js."}]},{type:b,tag:c,props:{},children:[{type:b,tag:d,props:{href:y},children:[{type:b,tag:m,props:{alt:k,src:y},children:[]}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Tout les sujets de performance sont configurés par défaut, automatic code splitting, prefetch, progressive images etc..."}]},{type:b,tag:c,props:{},children:[{type:a,value:"En terme de plugin, on utilise :"}]},{type:b,tag:n,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"sitemap"}]},{type:b,tag:f,props:{},children:[{type:a,value:"feed (pour aller charger des infos en RSS de notre blog et chaine youtube)"}]},{type:b,tag:f,props:{},children:[{type:a,value:"robots.txt"}]},{type:b,tag:f,props:{},children:[{type:a,value:"remark (pour l'enrichissement du markdown et l'embarquement de liens, vidéos youtube, gist  etc... )"}]},{type:b,tag:f,props:{},children:[{type:a,value:"tailwind"}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Mais le plus simple pour comprendre comment ça marche, c'est peut être tout simplement de "},{type:b,tag:h,props:{},children:[{type:a,value:"regarder le code directement"}]},{type:a,value:" !"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Et celui-ci est disponible ici :\n"},{type:b,tag:d,props:{href:z,rel:[e]},children:[{type:a,value:z}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Eh oui, en effet nous avons souhaité rendre ce dépot open source avec deux objectifs :"}]},{type:b,tag:n,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"cela devient plus simple pour n'importe qui dans la boite de contribuer, donc ce n'est pas réservé aux développeurs et il s'agit d'éditer des fichiers markdown"}]},{type:b,tag:f,props:{},children:[{type:a,value:"plus généralement cela donne une source d'inspiration pour la communauté qui utilise Gridsome.\nOn est bien content quand on tombe sur ce type de ressources nous-mêmes, alors pourquoi ne pas le faire. D'autant que le site étant public, ne contenant rien de sensible, pourquoi cacher le code source ?"}]}]},{type:b,tag:i,props:{id:A},children:[{type:a,value:B}]},{type:b,tag:c,props:{},children:[{type:a,value:"Et est-ce que ça marche ?"}]},{type:b,tag:c,props:{},children:[{type:a,value:"L'un des principaux critères de succès était l'adoption par l'équipe. Il y a eu plus de 115 commits par une douzaine de contributeurs sur le repository.\nD'autres équipes ont déjà proposé des merge request.\nLa simplicité d'usage fait que le site a été mis à jour régulièrement et il continuera à l'être."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Le Handbook va continuer à se structurer dans les prochains jours pour faire apparaître le career path et l'organisation par tribes et guildes."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Restez à l'écoute :)"}]}],toc:{title:o,searchDepth:g,depth:g,links:[{id:s,depth:g,text:t},{id:u,depth:g,text:v},{id:w,depth:g,text:x},{id:A,depth:g,text:B}]}},_type:"markdown",_id:"content:articles:2022:05:19:malt-engineering-under-the-hood-gridsome.md",_source:"content",_file:"articles\u002F2022\u002F05\u002F19\u002Fmalt-engineering-under-the-hood-gridsome.md",_extension:"md"}},prerenderedAt:1676918938070}}("text","element","p","a","nofollow","li",2,"strong","h2",false,"Gridsome",".","img","ul","","jamstack.png","https:\u002F\u002Fmalt.engineering\u002F","malt.engineering","pourquoi-maltengineering","Pourquoi Malt.engineering ?","gridsome-un-framework-ssg","Gridsome, un framework SSG","gridsome-sous-le-capot","Gridsome sous le capot","\u002Fimages\u002Fgridsome-concept.png","https:\u002F\u002Fgitlab.com\u002Fmaltcommunity\u002Fpublic\u002Fmalt.engineering","résultat","Résultat"))