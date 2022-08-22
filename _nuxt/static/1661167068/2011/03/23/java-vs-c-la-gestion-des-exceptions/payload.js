__NUXT_JSONP__("/2011/03/23/java-vs-c-la-gestion-des-exceptions", (function(a,b,c,d,e,f,g,h,i,j,k){return {data:[{article:{slug:"java-vs-c-la-gestion-des-exceptions",description:"[![](\u002Fimages\u002Fjavac1.png \"javac\")](http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2011\u002F05\u002Fjavac1.png) **Warning, warning,** ceci n'est pas une rubrique...",id:"143",title:"Java Vs C# : La gestion des exceptions",date:"2011-03-23",categories:["waza"],tags:["csharp",e],img:"javac1.png",cover:"cover3.jpg",toc:[{id:h,depth:3,text:i}],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:b,tag:j,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2011\u002F05\u002Fjavac1.png",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:b,tag:"img",props:{alt:"",src:"\u002Fimages\u002Fjavac1.png",title:"javac"},children:[]}]},{type:a,value:" "},{type:b,tag:f,props:{},children:[{type:a,value:"Warning, warning,"}]},{type:a,value:" ceci n'est pas une rubrique à troll !!"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Bien qu'étant plutot spécialiste Java, je me suis mis récemment au C#. Loin des débats qui n'en finissent plus pour savoir lequel des deux p... le plus loin, je tenais à faire une petite rubrique pour lister \"les trucs qui tuent\" qui existent dans chaque langage et que tout bon développeur aime connaitre."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Et donc le truc qui tue du jour :"}]},{type:a,value:c},{type:b,tag:"h3",props:{id:h},children:[{type:b,tag:j,props:{href:"#la-gestion-des-exceptions-en-c-et-java",ariaHidden:"true",tabIndex:-1},children:[{type:b,tag:"span",props:{className:["icon","icon-link"]},children:[]}]},{type:a,value:i}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"A première vue, rien qui semble différencier la gestion des exceptions en C# et Java. La syntaxe est quasi identique :"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"try\n{\n...\n}\ncatch (NullPointerException e)\n{\n...\nthrow e;\n}\nfinally\n{\n...\n}"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"et"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"try\n{\n...\n}\ncatch (NullReferenceException)\n{\n...\nthrow ;\n}\nfinally\n{\n...\n}"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Non seulement la syntaxe est très proche mais les Exceptions forment une hiérarchie héritant à chaque fois d'une classe mère dans chacun des deux langages."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Cependant cette hiérarchie connait une différence importante en Java :"}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Chaque Exception dérive de Throwable"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Throwable a 2 types dérivées : Error et Exception"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Les exceptions sont partagées en \""},{type:b,tag:f,props:{},children:[{type:a,value:"checked exception"}]},{type:a,value:"\" et \""},{type:b,tag:f,props:{},children:[{type:a,value:"unchecked exception"}]},{type:a,value:"\""}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Autrement dit, il existe des exceptions qu'il ne faut pas attraper (les Error : OutOfMemoryError, NoClassDeFoundError etc...), des exceptions qu'on n'est pas obligé d'attraper (les unchecked) et des exceptions qu'il faut obligatoirement traiter si elles sont lancées (les checked)."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Et pour préciser les exceptions qu'un code peut lancer, une méthode doit déclarer ces exceptions dans sa signature :"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"public void method() throws Exception1, Exception1\n{\n\u002F\u002F ...\n}"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Cette différence très importante va permettre au compilateur de vérifier la cohérence du code. L'appel d'une méthode entrainera obligatoirement le traitement des exceptions déclarées en signature."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Ainsi les codes suivants seront valides :"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"private void anotherMethod()\n{\ntry\n{\nmethod();\n}\ncatch (Exception1 e1)\n{\n}\ncatch (Exception2 e2)\n{\n}\n}"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"\u002F\u002F si on ne les attrape pas, il faut au moins les relancer et le déclarer\nprivate void anotherMethod() throws Exception1, Exception1\n{\nmethod();\n}"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Par contre le code suivant ne compilera pas :"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"private void anotherMethod()\n{\ntry\n{\nmethod();\n}\ncatch (Exception1 e1)\n{\n}  \n\u002F\u002F Erreur : on n'attrape pas l'exception Exception2\n}\n "}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"private void anotherMethod()\n{\ntry\n{\nmethod();\n}\ncatch (Exception1 e1)\n{\n}  \ncatch (Exception2 e2)\n{\n}\n\u002F\u002F Erreur : cette checked exception n'est pas lancé et ce bloc de code est donc innateignable\ncatch (Exception3 e3)\n{\n}\n}"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Autre truc qui tue, en Java7 la syntaxe va évoluer pour permettre le multi catch des exceptions, très pratique quand on réalise les mêmes traitements pour chaque exception attrapée :"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"catch (Exception1|Exception2 ex)\n{\nlogger.log(ex);\nthrow ex;\n}"}]}]},dir:"\u002Farticles\u002F2011\u002F03\u002F23",path:"\u002Farticles\u002F2011\u002F03\u002F23\u002Fjava-vs-c-la-gestion-des-exceptions",extension:".md",createdAt:k,updatedAt:k,bodyPlainText:"\n Warning, warning, ceci n'est pas une rubrique à troll !!\n\nBien qu'étant plutot spécialiste Java, je me suis mis récemment au C#. Loin des débats qui n'en finissent plus pour savoir lequel des deux p... le plus loin, je tenais à faire une petite rubrique pour lister \"les trucs qui tuent\" qui existent dans chaque langage et que tout bon développeur aime connaitre.\n\nEt donc le truc qui tue du jour :\n\nLa gestion des exceptions en C# et Java\n\nA première vue, rien qui semble différencier la gestion des exceptions en C# et Java. La syntaxe est quasi identique :\n\ntry\n{\n ...\n}\ncatch (NullPointerException e)\n{\n ...\n throw e;\n}\n finally\n {\n ...\n }\n\net\n\ntry\n{\n ...\n}\n catch (NullReferenceException)\n{\n ...\n throw ;\n}\nfinally\n{\n ...\n}\n\nNon seulement la syntaxe est très proche mais les Exceptions forment une hiérarchie héritant à chaque fois d'une classe mère dans chacun des deux langages.\n\nCependant cette hiérarchie connait une différence importante en Java :\n\nChaque Exception dérive de Throwable\nThrowable a 2 types dérivées : Error et Exception\nLes exceptions sont partagées en \"checked exception\" et \"unchecked exception\"\n\nAutrement dit, il existe des exceptions qu'il ne faut pas attraper (les Error : OutOfMemoryError, NoClassDeFoundError etc...), des exceptions qu'on n'est pas obligé d'attraper (les unchecked) et des exceptions qu'il faut obligatoirement traiter si elles sont lancées (les checked).\n\nEt pour préciser les exceptions qu'un code peut lancer, une méthode doit déclarer ces exceptions dans sa signature :\n\n \n\npublic void method() throws Exception1, Exception1\n{\n \u002F\u002F ...\n}\n\nCette différence très importante va permettre au compilateur de vérifier la cohérence du code. L'appel d'une méthode entrainera obligatoirement le traitement des exceptions déclarées en signature.\n\nAinsi les codes suivants seront valides :\n\nprivate void anotherMethod()\n{\n    try\n    {\n       method();\n    }\n    catch (Exception1 e1)\n    {\n    }\n    catch (Exception2 e2)\n    {\n    }\n}\n\n\u002F\u002F si on ne les attrape pas, il faut au moins les relancer et le déclarer\nprivate void anotherMethod() throws Exception1, Exception1\n{\n    method();\n}\n\nPar contre le code suivant ne compilera pas :\n\nprivate void anotherMethod()\n{\n try\n {\n     method();\n }\n catch (Exception1 e1)\n {\n }\n \u002F\u002F Erreur : on n'attrape pas l'exception Exception2\n}\n \n\nprivate void anotherMethod()\n{\n try\n {\n method();\n }\n catch (Exception1 e1)\n {\n }\n catch (Exception2 e2)\n {\n }\n \u002F\u002F Erreur : cette checked exception n'est pas lancé et ce bloc de code est donc innateignable\n catch (Exception3 e3)\n {\n }\n}\n\nAutre truc qui tue, en Java7 la syntaxe va évoluer pour permettre le multi catch des exceptions, très pratique quand on réalise les mêmes traitements pour chaque exception attrapée :\n\ncatch (Exception1|Exception2 ex)\n{\n logger.log(ex);\n throw ex;\n}\n",readTime:{text:"3 min read",minutes:2.275,time:136500,words:455}},relatedArticles:[{slug:"juste-un-cafe-ca-ira-merci",description:"![](\u002Fimages\u002Fdiversite-200x200.jpg \"diversite-200x200\")A l’heure des languages alternatifs sur la JVM : ceylon, scala, fantom et autres joyeusetés, pou...",id:"477",title:"Juste un café, ça ira merci !",date:"2011-11-30",tags:[e],img:"diversite-200x200.jpg",cover:"cover2.jpg",path:"\u002Farticles\u002F2011\u002F11\u002F30\u002Fjuste-un-cafe-ca-ira-merci"},{slug:"luke-que-la-force-soit-avec-toi",description:"Vous connaissez [Lucene](http:\u002F\u002Flucene.apache.org\u002Fjava\u002Fdocs\u002F \"Lucene\") ? Non ? Dans ce cas je vous invite fortement à découvrir cette API utilisé dans...",id:"139",title:"Luke, que la force soit avec toi !",date:"2009-12-06",tags:[e,"lucene"],img:"ouverturefichier.png",cover:"cover7.jpg",path:"\u002Farticles\u002F2009\u002F12\u002F06\u002Fluke-que-la-force-soit-avec-toi"},{slug:"creer-des-fichiers-excel-avec-des-caracteres-chinois-en-java",description:"## Créer des fichiers Excel avec des caractères Chinois\nDans la lignée du post précédent, pourquoi ne pas continuer à parler de la Chine et aborder l...",id:"134",title:"Créer des fichiers Excel avec des caractères Chinois en Java",date:"2009-10-28",tags:[e,"poi","utf8"],img:"exportbadchinese.png",cover:"cover8.jpg",path:"\u002Farticles\u002F2009\u002F10\u002F28\u002Fcreer-des-fichiers-excel-avec-des-caracteres-chinois-en-java"}],_img:{"/_ipx/_/hugo-nb.jpg":"\u002F_nuxt\u002Fimage\u002Fc3e54c.jpg"}}],fetch:{},mutations:void 0}}("text","element","\n","p","java","strong","li","la-gestion-des-exceptions-en-c-et-java","La gestion des exceptions en C# et Java","a","2022-08-22T11:16:21.969Z")));