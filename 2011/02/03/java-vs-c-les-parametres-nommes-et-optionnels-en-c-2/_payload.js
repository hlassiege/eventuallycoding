export default (function(a,b,c,d,e,f,g,h,i,j){return {data:{"/articles/2011/02/03/java-vs-c-les-parametres-nommes-et-optionnels-en-c-2":{_path:"\u002Farticles\u002F2011\u002F02\u002F03\u002Fjava-vs-c-les-parametres-nommes-et-optionnels-en-c-2",_dir:"03",_draft:d,_partial:d,_locale:e,_empty:d,title:"Java Vs C# : Les paramètres nommés et optionnels en C#",description:"[![](\u002Fimages\u002Fjavac1.png \"javac\")](http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2011\u002F05\u002Fjavac1.png) **Warning, warning,** ceci n'est pas une rubrique...",id:"147",date:"2011-02-03",categories:["waza"],tags:["csharp","java"],img:"javac1.png",cover:"cover2.jpg",readingTime:{text:"2 min read",minutes:1.245,time:74700,words:249},body:{type:"root",children:[{type:a,tag:c,props:{},children:[{type:a,tag:f,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2011\u002F05\u002Fjavac1.png",rel:[g]},children:[{type:a,tag:"img",props:{alt:e,src:"\u002Fimages\u002Fjavac1.png",title:"javac"},children:[]}]},{type:b,value:" "},{type:a,tag:"strong",props:{},children:[{type:b,value:"Warning, warning,"}]},{type:b,value:" ceci n'est pas une rubrique à troll !!"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Bien qu'étant plutot spécialiste Java, je me suis mis récemment au C#. Loin des débats qui n'en finissent plus pour savoir lequel des deux p... le plus loin, je tenais à faire une petite rubrique pour lister \"les trucs qui tuent\" qui existent dans chaque langage et que tout bon développeur aime connaitre."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et donc le truc qui tue du jour :"}]},{type:a,tag:"h3",props:{id:h},children:[{type:b,value:i}]},{type:a,tag:c,props:{},children:[{type:b,value:"C# 4.0 a introduit un concept très sympathique, déjà connu pour ceux qui pratique le python et plutôt évident pour les adeptes de jQuery, les paramètres nommés et optionnels."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Les paramètres nommés existent déjà depuis la version 1.0 du framework, ils permettent notamment d'écrire ceci :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"public void MaMethode(string Arg1, string Arg2)\n{\n\u002F\u002F ...\n}\n..."}]},{type:a,tag:c,props:{},children:[{type:b,value:"myObject.MaMethode(Arg1:\"un argument\", Arg2:\"un autre argument\");"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ok, jusqu'ici, rien de transcendant. C'est verbeux même si ca permet de lever quelques ambiguïtés parfois."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Par contre avec la version 4.0, désormais vous pouvez aussi utiliser des valeurs par défaut et des paramètres optionnels et là ça devient puissant :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"public void MaMethode(string Arg1=\"une valeur\", string Arg2=\"une autre valeur\")\n{\n\u002F\u002F ...\n}"}]},{type:a,tag:c,props:{},children:[{type:b,value:"ce qui permet de faire les appels suivants :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"myObject.MaMethode();\nmyObject.MaMethode(Arg1:\"une valeur différente\");\nmyObject.MaMethode(Arg2:\"une valeur différente\",Arg1:\"dans un autre ordre\");"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et en Java ? Rien de prévu de ce côté là malheureusement, aucune des deux prochaines version 7 et 8 n'abordent ce cas. On pourra se consoler avec le chainage des méthodes proposé "},{type:a,tag:f,props:{href:"http:\u002F\u002Fgfx.developpez.com\u002Ftutoriel\u002Fjava\u002Fconstructeur-fabrique\u002F",rel:[g]},children:[{type:b,value:"ici"}]},{type:b,value:" et  qui peut éventuellement fonctionner pour des constructeurs mais qui sont loin d'être aussi puissant."}]}],toc:{title:e,searchDepth:j,depth:j,links:[{id:h,depth:3,text:i}]}},_type:"markdown",_id:"content:articles:2011:02:03:java-vs-c-les-parametres-nommes-et-optionnels-en-c-2.md",_source:"content",_file:"articles\u002F2011\u002F02\u002F03\u002Fjava-vs-c-les-parametres-nommes-et-optionnels-en-c-2.md",_extension:"md"}},prerenderedAt:1698390364828}}("element","text","p",false,"","a","nofollow","les-paramètres-nommés-optionnels-en-c","Les paramètres nommés optionnels en C#",2))