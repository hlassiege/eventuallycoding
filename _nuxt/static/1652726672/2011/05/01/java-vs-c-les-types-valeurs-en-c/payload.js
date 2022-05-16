__NUXT_JSONP__("/2011/05/01/java-vs-c-les-types-valeurs-en-c", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){return {data:[{article:{slug:"java-vs-c-les-types-valeurs-en-c",description:"[![](\u002Fimages\u002Fjavac1.png \"javac\")](http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2011\u002F05\u002Fjavac1.png)\n**Warning, warning,** ceci n'est pas une rubriqu...",title:"Java Vs C# : Les types valeurs en C#",date:"2011-05-01",categories:["waza"],tags:["csharp","java"],img:"javac1.png",cover:"cover4.jpg",toc:[{id:l,depth:3,text:m}],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2011\u002F05\u002Fjavac1.png",rel:[h,i,j],target:k},children:[{type:b,tag:"img",props:{alt:"",src:"\u002Fimages\u002Fjavac1.png",title:"javac"},children:[]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"Warning, warning,"}]},{type:a,value:" ceci n'est pas une rubrique à troll !!"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Bien qu'étant plutot spécialiste Java, je me suis mis récemment au C#. Loin des débats qui n'en finissent plus pour savoir lequel des deux p... le plus loin, je tenais à faire une petite rubrique pour lister \"les trucs qui tuent\" qui existent dans chaque langage et que tout bon développeur aime connaitre."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Et donc le truc qui tue du jour :"}]},{type:a,value:c},{type:b,tag:"h3",props:{id:l},children:[{type:b,tag:f,props:{href:"#les-types-valeurs-en-c",ariaHidden:"true",tabIndex:-1},children:[{type:b,tag:"span",props:{className:["icon","icon-link"]},children:[]}]},{type:a,value:m}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Bon en fait il ne s'agit pas vraiment d'un truc qui tue, juste une petite clarification entre le type valeur de C# et le type natif en Java."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"On dit souvent que Java n'est pas vraiment un langage objet car tout n'est pas objet. En effet il existe des types dits \"natifs\", ce sont les fameux int, long, float, boolean et char (pour la liste complète : "},{type:b,tag:f,props:{href:n,rel:[h,i,j],target:k},children:[{type:a,value:o}]},{type:a,value:")."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Ces types ne se manipulent pas comme les autres :"}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"pas d'allocation mémoire avec new, un type natif est créé directement sur le tas"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"pas de méthode disponible sur un type natif"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"on les manipule par valeur et non par référence"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"En C#, ces types natifs ont été remplacés par des types valeurs. Ce sont en fait des structures (mot clé "},{type:b,tag:g,props:{},children:[{type:a,value:"struct"}]},{type:a,value:") et non des classes. Parmi les différences avec les classes :"}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"ils n'ont pas besoin d'être déclarés avec new (même si c'est possible)"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"quelque soit la façon de créer une variable elle sera alloué sur le tas et non la pile"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"ils sont manipulés par valeur (l'attribution d'une variable de type valeur à une autre copie la valeur contenue)"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"(Pour plus de détails, "},{type:b,tag:f,props:{href:n,rel:[h,i,j],target:k},children:[{type:a,value:o}]},{type:a,value:")"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"En fait, pour bien comprendre ces types valeurs sont tous des alias vers des types intégrés au framework, par exemple "},{type:b,tag:g,props:{},children:[{type:a,value:"int"}]},{type:a,value:" alias de "},{type:b,tag:g,props:{},children:[{type:a,value:"System.Int32"}]},{type:a,value:". Et donc il y a des méthodes disponibles sur ces types valeurs ce qui permet d'écrire :"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"int i = 1;\nConsole.WriteLine(i.ToString()); \u002F\u002F ici l'intérêt est minime, c'est uniquement pour l'exemple"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"ou bien"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"int i = int.Parse(\"1\");"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Dans ces conditions, on peut effectivement dire que C# est un peu plus objet que Java."}]}]},dir:"\u002Farticles\u002F2011\u002F05\u002F01",path:"\u002Farticles\u002F2011\u002F05\u002F01\u002Fjava-vs-c-les-types-valeurs-en-c",extension:".md",createdAt:q,updatedAt:q,bodyPlainText:"\n\n\nWarning, warning, ceci n'est pas une rubrique à troll !!\n\nBien qu'étant plutot spécialiste Java, je me suis mis récemment au C#. Loin des débats qui n'en finissent plus pour savoir lequel des deux p... le plus loin, je tenais à faire une petite rubrique pour lister \"les trucs qui tuent\" qui existent dans chaque langage et que tout bon développeur aime connaitre.\n\nEt donc le truc qui tue du jour :\n\nLes types valeurs en C#\n\nBon en fait il ne s'agit pas vraiment d'un truc qui tue, juste une petite clarification entre le type valeur de C# et le type natif en Java.\n\nOn dit souvent que Java n'est pas vraiment un langage objet car tout n'est pas objet. En effet il existe des types dits \"natifs\", ce sont les fameux int, long, float, boolean et char (pour la liste complète : voir la doc).\n\nCes types ne se manipulent pas comme les autres :\n\npas d'allocation mémoire avec new, un type natif est créé directement sur le tas\npas de méthode disponible sur un type natif\non les manipule par valeur et non par référence\n\nEn C#, ces types natifs ont été remplacés par des types valeurs. Ce sont en fait des structures (mot clé struct) et non des classes. Parmi les différences avec les classes :\n\nils n'ont pas besoin d'être déclarés avec new (même si c'est possible)\nquelque soit la façon de créer une variable elle sera alloué sur le tas et non la pile\nils sont manipulés par valeur (l'attribution d'une variable de type valeur à une autre copie la valeur contenue)\n\n(Pour plus de détails, voir la doc)\n\nEn fait, pour bien comprendre ces types valeurs sont tous des alias vers des types intégrés au framework, par exemple int alias de System.Int32. Et donc il y a des méthodes disponibles sur ces types valeurs ce qui permet d'écrire :\n\nint i = 1;\nConsole.WriteLine(i.ToString()); \u002F\u002F ici l'intérêt est minime, c'est uniquement pour l'exemple\n\nou bien\n\nint i = int.Parse(\"1\");\n\nDans ces conditions, on peut effectivement dire que C# est un peu plus objet que Java.\n",readTime:{text:"2 min read",minutes:1.805,time:108300,words:361}},_img:{"/_ipx/_/hugo-nb.jpg":"\u002F_nuxt\u002Fimage\u002Fc3e54c.jpg"}}],fetch:{},mutations:void 0}}("text","element","\n","p","li","a","strong","nofollow","noopener","noreferrer","_blank","les-types-valeurs-en-c","Les types valeurs en C#","http:\u002F\u002Fdownload.oracle.com\u002Fjavase\u002Ftutorial\u002Fjava\u002Fnutsandbolts\u002Fdatatypes.html","voir la doc","ul","2022-05-16T18:42:45.607Z")));