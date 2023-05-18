export default (function(a,b,c,d,e,f,g,h,i,j){return {data:{"/articles/2011/03/29/eviter-les-conflits-de-nom-dans-les-interfaces-en-c":{_path:"\u002Farticles\u002F2011\u002F03\u002F29\u002Feviter-les-conflits-de-nom-dans-les-interfaces-en-c",_dir:"29",_draft:e,_partial:e,_locale:d,_empty:e,title:"Java Vs C# : Eviter les conflits de nom dans les interfaces",description:"[![](\u002Fimages\u002Fjavac1.png \"javac\")](http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2011\u002F05\u002Fjavac1.png) **Warning, warning,** ceci n'est pas une rubrique...",id:"286",date:"2011-03-29",categories:["waza"],tags:["csharp","java"],img:"javac1.png",cover:"cover7.jpg",readingTime:{text:"2 min read",minutes:1.05,time:63000,words:210},body:{type:"root",children:[{type:a,tag:c,props:{},children:[{type:a,tag:"a",props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2011\u002F05\u002Fjavac1.png",rel:["nofollow"]},children:[{type:a,tag:"img",props:{alt:d,src:"\u002Fimages\u002Fjavac1.png",title:"javac"},children:[]}]},{type:b,value:" "},{type:a,tag:"strong",props:{},children:[{type:b,value:"Warning, warning,"}]},{type:b,value:" ceci n'est pas une rubrique à troll !!"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Bien qu'étant plutot spécialiste Java, je me suis mis récemment au C#. Loin des débats qui n'en finissent plus pour savoir lequel des deux p... le plus loin, je tenais à faire une petite rubrique pour lister \"les trucs qui tuent\" qui existent dans chaque langage et que tout bon développeur aime connaitre."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et donc le truc qui tue du jour :"}]},{type:a,tag:"h3",props:{id:f},children:[{type:b,value:g}]},{type:a,tag:c,props:{},children:[{type:b,value:"En java vous avez sans doute déjà eu affaire à des interfaces dont les noms rentrent en conflit, non ?"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Dans le cas contraire, je vous propose un petit exemple :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"public interface IInterface1\n{\nvoid execute();\n}"}]},{type:a,tag:c,props:{},children:[{type:b,value:"public interface IInterface2\n{\nvoid execute();\n}"}]},{type:a,tag:c,props:{},children:[{type:b,value:"public class MyClass implements IInterface1, IInterface2\n{\npublic void execute()\n{\n\u002F\u002F  ??\n}\n}"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Rageant n'est-ce pas ? Vous tentez de respecter un contrat identique défini par deux interfaces."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et en C# ?"}]},{type:a,tag:c,props:{},children:[{type:b,value:"C# propose une solution intéressante à ce problème."}]},{type:a,tag:c,props:{},children:[{type:b,value:"public interface IInterface1\n{\nvoid Execute();\n}"}]},{type:a,tag:c,props:{},children:[{type:b,value:"public interface IInterface2\n{\nvoid Execute();\n}"}]},{type:a,tag:c,props:{},children:[{type:b,value:"public class MyClass : IInterface1, IInterface2\n{\nvoid IInterface1.Execute()\n{\nConsole.WriteLine(\"Execute de IInterface1\");\n}"}]},{type:a,tag:h,props:{code:i,meta:null},children:[{type:a,tag:"pre",props:{},children:[{type:a,tag:h,props:{__ignoreMap:d},children:[{type:b,value:i}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"}"}]},{type:a,tag:c,props:{},children:[{type:b,value:"On remarquera que les méthodes sont privées. Elles ne peuvent être appelées qu'à partir de l'interface. Ce qui est beaucoup plus propre."}]}],toc:{title:d,searchDepth:j,depth:j,links:[{id:f,depth:3,text:g}]}},_type:"markdown",_id:"content:articles:2011:03:29:eviter-les-conflits-de-nom-dans-les-interfaces-en-c.md",_source:"content",_file:"articles\u002F2011\u002F03\u002F29\u002Feviter-les-conflits-de-nom-dans-les-interfaces-en-c.md",_extension:"md"}},prerenderedAt:1684411600438}}("element","text","p","",false,"eviter-les-conflits-de-nom-dans-les-interfaces-en-c","Eviter les conflits de nom dans les interfaces en C#","code","void IInterface2.Execute()\n{\n     Console.WriteLine(\"Execute de IInterface2\");\n}\n",2))