export default (function(a,b,c,d,e,f,g,h,i,j){return {data:{"/articles/2011/03/23/java-vs-c-la-gestion-des-exceptions":{_path:"\u002Farticles\u002F2011\u002F03\u002F23\u002Fjava-vs-c-la-gestion-des-exceptions",_dir:"23",_draft:d,_partial:d,_locale:e,_empty:d,title:"Java Vs C# : La gestion des exceptions",description:"[![](\u002Fimages\u002Fjavac1.png \"javac\")](http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2011\u002F05\u002Fjavac1.png) **Warning, warning,** ceci n'est pas une rubrique...",id:"143",date:"2011-03-23",categories:["waza"],tags:["csharp","java"],img:"javac1.png",cover:"cover3.jpg",readingTime:{text:"3 min read",minutes:2.12,time:127200,words:424},body:{type:"root",children:[{type:a,tag:c,props:{},children:[{type:a,tag:"a",props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2011\u002F05\u002Fjavac1.png",rel:["nofollow"]},children:[{type:a,tag:"img",props:{alt:e,src:"\u002Fimages\u002Fjavac1.png",title:"javac"},children:[]}]},{type:b,value:" "},{type:a,tag:f,props:{},children:[{type:b,value:"Warning, warning,"}]},{type:b,value:" ceci n'est pas une rubrique à troll !!"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Bien qu'étant plutot spécialiste Java, je me suis mis récemment au C#. Loin des débats qui n'en finissent plus pour savoir lequel des deux p... le plus loin, je tenais à faire une petite rubrique pour lister \"les trucs qui tuent\" qui existent dans chaque langage et que tout bon développeur aime connaitre."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et donc le truc qui tue du jour :"}]},{type:a,tag:"h3",props:{id:h},children:[{type:b,value:i}]},{type:a,tag:c,props:{},children:[{type:b,value:"A première vue, rien qui semble différencier la gestion des exceptions en C# et Java. La syntaxe est quasi identique :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"try\n{\n...\n}\ncatch (NullPointerException e)\n{\n...\nthrow e;\n}\nfinally\n{\n...\n}"}]},{type:a,tag:c,props:{},children:[{type:b,value:"et"}]},{type:a,tag:c,props:{},children:[{type:b,value:"try\n{\n...\n}\ncatch (NullReferenceException)\n{\n...\nthrow ;\n}\nfinally\n{\n...\n}"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Non seulement la syntaxe est très proche mais les Exceptions forment une hiérarchie héritant à chaque fois d'une classe mère dans chacun des deux langages."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Cependant cette hiérarchie connait une différence importante en Java :"}]},{type:a,tag:"ul",props:{},children:[{type:a,tag:g,props:{},children:[{type:b,value:"Chaque Exception dérive de Throwable"}]},{type:a,tag:g,props:{},children:[{type:b,value:"Throwable a 2 types dérivées : Error et Exception"}]},{type:a,tag:g,props:{},children:[{type:b,value:"Les exceptions sont partagées en \""},{type:a,tag:f,props:{},children:[{type:b,value:"checked exception"}]},{type:b,value:"\" et \""},{type:a,tag:f,props:{},children:[{type:b,value:"unchecked exception"}]},{type:b,value:"\""}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Autrement dit, il existe des exceptions qu'il ne faut pas attraper (les Error : OutOfMemoryError, NoClassDeFoundError etc...), des exceptions qu'on n'est pas obligé d'attraper (les unchecked) et des exceptions qu'il faut obligatoirement traiter si elles sont lancées (les checked)."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et pour préciser les exceptions qu'un code peut lancer, une méthode doit déclarer ces exceptions dans sa signature :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"public void method() throws Exception1, Exception1\n{\n\u002F\u002F ...\n}"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Cette différence très importante va permettre au compilateur de vérifier la cohérence du code. L'appel d'une méthode entrainera obligatoirement le traitement des exceptions déclarées en signature."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ainsi les codes suivants seront valides :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"private void anotherMethod()\n{\ntry\n{\nmethod();\n}\ncatch (Exception1 e1)\n{\n}\ncatch (Exception2 e2)\n{\n}\n}"}]},{type:a,tag:c,props:{},children:[{type:b,value:"\u002F\u002F si on ne les attrape pas, il faut au moins les relancer et le déclarer\nprivate void anotherMethod() throws Exception1, Exception1\n{\nmethod();\n}"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Par contre le code suivant ne compilera pas :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"private void anotherMethod()\n{\ntry\n{\nmethod();\n}\ncatch (Exception1 e1)\n{\n}  \n\u002F\u002F Erreur : on n'attrape pas l'exception Exception2\n}\n "}]},{type:a,tag:c,props:{},children:[{type:b,value:"private void anotherMethod()\n{\ntry\n{\nmethod();\n}\ncatch (Exception1 e1)\n{\n}  \ncatch (Exception2 e2)\n{\n}\n\u002F\u002F Erreur : cette checked exception n'est pas lancé et ce bloc de code est donc innateignable\ncatch (Exception3 e3)\n{\n}\n}"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Autre truc qui tue, en Java7 la syntaxe va évoluer pour permettre le multi catch des exceptions, très pratique quand on réalise les mêmes traitements pour chaque exception attrapée :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"catch (Exception1|Exception2 ex)\n{\nlogger.log(ex);\nthrow ex;\n}"}]}],toc:{title:e,searchDepth:j,depth:j,links:[{id:h,depth:3,text:i}]}},_type:"markdown",_id:"content:articles:2011:03:23:java-vs-c-la-gestion-des-exceptions.md",_source:"content",_file:"articles\u002F2011\u002F03\u002F23\u002Fjava-vs-c-la-gestion-des-exceptions.md",_extension:"md"}},prerenderedAt:1677106059210}}("element","text","p",false,"","strong","li","la-gestion-des-exceptions-en-c-et-java","La gestion des exceptions en C# et Java",2))