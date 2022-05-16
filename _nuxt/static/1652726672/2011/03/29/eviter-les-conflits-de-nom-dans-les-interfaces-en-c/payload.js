__NUXT_JSONP__("/2011/03/29/eviter-les-conflits-de-nom-dans-les-interfaces-en-c", (function(a,b,c,d,e,f,g,h){return {data:[{article:{slug:e,description:"[![](\u002Fimages\u002Fjavac1.png \"javac\")](http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2011\u002F05\u002Fjavac1.png) **Warning, warning,** ceci n'est pas une rubrique...",title:"Java Vs C# : Eviter les conflits de nom dans les interfaces",date:"2011-03-29",categories:["waza"],tags:["csharp","java"],img:"javac1.png",cover:"cover3.jpg",toc:[{id:e,depth:3,text:f}],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2011\u002F05\u002Fjavac1.png",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:b,tag:"img",props:{alt:"",src:"\u002Fimages\u002Fjavac1.png",title:"javac"},children:[]}]},{type:a,value:" "},{type:b,tag:"strong",props:{},children:[{type:a,value:"Warning, warning,"}]},{type:a,value:" ceci n'est pas une rubrique à troll !!"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Bien qu'étant plutot spécialiste Java, je me suis mis récemment au C#. Loin des débats qui n'en finissent plus pour savoir lequel des deux p... le plus loin, je tenais à faire une petite rubrique pour lister \"les trucs qui tuent\" qui existent dans chaque langage et que tout bon développeur aime connaitre."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Et donc le truc qui tue du jour :"}]},{type:a,value:c},{type:b,tag:"h3",props:{id:e},children:[{type:b,tag:g,props:{href:"#eviter-les-conflits-de-nom-dans-les-interfaces-en-c",ariaHidden:"true",tabIndex:-1},children:[{type:b,tag:"span",props:{className:["icon","icon-link"]},children:[]}]},{type:a,value:f}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"En java vous avez sans doute déjà eu affaire à des interfaces dont les noms rentrent en conflit, non ?"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Dans le cas contraire, je vous propose un petit exemple :"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"public interface IInterface1\n{\nvoid execute();\n}"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"public interface IInterface2\n{\nvoid execute();\n}"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"public class MyClass implements IInterface1, IInterface2\n{\npublic void execute()\n{\n\u002F\u002F  ??\n}\n}"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Rageant n'est-ce pas ? Vous tentez de respecter un contrat identique défini par deux interfaces."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Et en C# ?"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"C# propose une solution intéressante à ce problème."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"public interface IInterface1\n{\nvoid Execute();\n}"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"public interface IInterface2\n{\nvoid Execute();\n}"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"public class MyClass : IInterface1, IInterface2\n{\nvoid IInterface1.Execute()\n{\nConsole.WriteLine(\"Execute de IInterface1\");\n}"}]},{type:a,value:c},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-text","line-numbers"]},children:[{type:b,tag:"code",props:{},children:[{type:a,value:"void IInterface2.Execute()\n{\n     Console.WriteLine(\"Execute de IInterface2\");\n}\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"}"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"On remarquera que les méthodes sont privées. Elles ne peuvent être appelées qu'à partir de l'interface. Ce qui est beaucoup plus propre."}]}]},dir:"\u002Farticles\u002F2011\u002F03\u002F29",path:"\u002Farticles\u002F2011\u002F03\u002F29\u002Feviter-les-conflits-de-nom-dans-les-interfaces-en-c",extension:".md",createdAt:h,updatedAt:h,bodyPlainText:"\n Warning, warning, ceci n'est pas une rubrique à troll !!\n\nBien qu'étant plutot spécialiste Java, je me suis mis récemment au C#. Loin des débats qui n'en finissent plus pour savoir lequel des deux p... le plus loin, je tenais à faire une petite rubrique pour lister \"les trucs qui tuent\" qui existent dans chaque langage et que tout bon développeur aime connaitre.\n\nEt donc le truc qui tue du jour :\n\nEviter les conflits de nom dans les interfaces en C#\n\nEn java vous avez sans doute déjà eu affaire à des interfaces dont les noms rentrent en conflit, non ?\n\nDans le cas contraire, je vous propose un petit exemple :\n\npublic interface IInterface1\n{\n    void execute();\n}\n\npublic interface IInterface2\n{\n    void execute();\n}\n\npublic class MyClass implements IInterface1, IInterface2\n{\n      public void execute()\n\t  {\n\t     \u002F\u002F  ??\n\t  }\n}\n\nRageant n'est-ce pas ? Vous tentez de respecter un contrat identique défini par deux interfaces.\n\nEt en C# ?\n\nC# propose une solution intéressante à ce problème.\n\npublic interface IInterface1\n{\n    void Execute();\n}\n\npublic interface IInterface2\n{\n    void Execute();\n}\n\npublic class MyClass : IInterface1, IInterface2\n{\n\tvoid IInterface1.Execute()\n\t{\n         Console.WriteLine(\"Execute de IInterface1\");\n\t}\n\n    void IInterface2.Execute()\n\t{\n         Console.WriteLine(\"Execute de IInterface2\");\n    }\n}\n\nOn remarquera que les méthodes sont privées. Elles ne peuvent être appelées qu'à partir de l'interface. Ce qui est beaucoup plus propre.\n",readTime:{text:"2 min read",minutes:1.15,time:69000,words:230}},_img:{"/_ipx/_/hugo-nb.jpg":"\u002F_nuxt\u002Fimage\u002Fc3e54c.jpg"}}],fetch:{},mutations:void 0}}("text","element","\n","p","eviter-les-conflits-de-nom-dans-les-interfaces-en-c","Eviter les conflits de nom dans les interfaces en C#","a","2022-05-16T18:42:45.607Z")));