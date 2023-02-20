export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){return {data:{"/articles/2011/05/01/java-vs-c-les-types-valeurs-en-c":{_path:"\u002Farticles\u002F2011\u002F05\u002F01\u002Fjava-vs-c-les-types-valeurs-en-c",_dir:"01",_draft:f,_partial:f,_locale:g,_empty:f,title:"Java Vs C# : Les types valeurs en C#",description:"[![](\u002Fimages\u002Fjavac1.png \"javac\")](http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2011\u002F05\u002Fjavac1.png)\n**Warning, warning,** ceci n'est pas une rubriqu...",id:"324",date:"2011-05-01",categories:["waza"],tags:["csharp","java"],img:"javac1.png",cover:"cover4.jpg",readingTime:{text:"2 min read",minutes:1.665,time:99900,words:333},body:{type:"root",children:[{type:a,tag:c,props:{},children:[{type:a,tag:h,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2011\u002F05\u002Fjavac1.png",rel:[i]},children:[{type:a,tag:"img",props:{alt:g,src:"\u002Fimages\u002Fjavac1.png",title:"javac"},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{},children:[{type:b,value:"Warning, warning,"}]},{type:b,value:" ceci n'est pas une rubrique à troll !!"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Bien qu'étant plutot spécialiste Java, je me suis mis récemment au C#. Loin des débats qui n'en finissent plus pour savoir lequel des deux p... le plus loin, je tenais à faire une petite rubrique pour lister \"les trucs qui tuent\" qui existent dans chaque langage et que tout bon développeur aime connaitre."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et donc le truc qui tue du jour :"}]},{type:a,tag:"h3",props:{id:j},children:[{type:b,value:k}]},{type:a,tag:c,props:{},children:[{type:b,value:"Bon en fait il ne s'agit pas vraiment d'un truc qui tue, juste une petite clarification entre le type valeur de C# et le type natif en Java."}]},{type:a,tag:c,props:{},children:[{type:b,value:"On dit souvent que Java n'est pas vraiment un langage objet car tout n'est pas objet. En effet il existe des types dits \"natifs\", ce sont les fameux int, long, float, boolean et char (pour la liste complète : "},{type:a,tag:h,props:{href:l,rel:[i]},children:[{type:b,value:m}]},{type:b,value:")."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ces types ne se manipulent pas comme les autres :"}]},{type:a,tag:n,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"pas d'allocation mémoire avec new, un type natif est créé directement sur le tas"}]},{type:a,tag:d,props:{},children:[{type:b,value:"pas de méthode disponible sur un type natif"}]},{type:a,tag:d,props:{},children:[{type:b,value:"on les manipule par valeur et non par référence"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"En C#, ces types natifs ont été remplacés par des types valeurs. Ce sont en fait des structures (mot clé "},{type:a,tag:e,props:{},children:[{type:b,value:"struct"}]},{type:b,value:") et non des classes. Parmi les différences avec les classes :"}]},{type:a,tag:n,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"ils n'ont pas besoin d'être déclarés avec new (même si c'est possible)"}]},{type:a,tag:d,props:{},children:[{type:b,value:"quelque soit la façon de créer une variable elle sera alloué sur le tas et non la pile"}]},{type:a,tag:d,props:{},children:[{type:b,value:"ils sont manipulés par valeur (l'attribution d'une variable de type valeur à une autre copie la valeur contenue)"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"(Pour plus de détails, "},{type:a,tag:h,props:{href:l,rel:[i]},children:[{type:b,value:m}]},{type:b,value:")"}]},{type:a,tag:c,props:{},children:[{type:b,value:"En fait, pour bien comprendre ces types valeurs sont tous des alias vers des types intégrés au framework, par exemple "},{type:a,tag:e,props:{},children:[{type:b,value:"int"}]},{type:b,value:" alias de "},{type:a,tag:e,props:{},children:[{type:b,value:"System.Int32"}]},{type:b,value:". Et donc il y a des méthodes disponibles sur ces types valeurs ce qui permet d'écrire :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"int i = 1;\nConsole.WriteLine(i.ToString()); \u002F\u002F ici l'intérêt est minime, c'est uniquement pour l'exemple"}]},{type:a,tag:c,props:{},children:[{type:b,value:"ou bien"}]},{type:a,tag:c,props:{},children:[{type:b,value:"int i = int.Parse(\"1\");"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Dans ces conditions, on peut effectivement dire que C# est un peu plus objet que Java."}]}],toc:{title:g,searchDepth:o,depth:o,links:[{id:j,depth:3,text:k}]}},_type:"markdown",_id:"content:articles:2011:05:01:java-vs-c-les-types-valeurs-en-c.md",_source:"content",_file:"articles\u002F2011\u002F05\u002F01\u002Fjava-vs-c-les-types-valeurs-en-c.md",_extension:"md"}},prerenderedAt:1676930268406}}("element","text","p","li","strong",false,"","a","nofollow","les-types-valeurs-en-c","Les types valeurs en C#","http:\u002F\u002Fdownload.oracle.com\u002Fjavase\u002Ftutorial\u002Fjava\u002Fnutsandbolts\u002Fdatatypes.html","voir la doc","ul",2))