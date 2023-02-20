export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj){return {data:{"/articles/2010/11/28/introduction-aux-tests-unitaires-et-aux-bouchons-en-c-2":{_path:"\u002Farticles\u002F2010\u002F11\u002F28\u002Fintroduction-aux-tests-unitaires-et-aux-bouchons-en-c-2",_dir:"28",_draft:q,_partial:q,_locale:e,_empty:q,title:"Introduction aux tests unitaires et aux bouchons en C#",description:"Par définition (Cf. [Wikipédia](http:\u002F\u002Ffr.wikipedia.org\u002Fwiki\u002FTest_unitaire) ) un test unitaire est un procédé permettant de s'assurer du fonctionnemen...",id:"144",date:"2010-11-28",categories:["waza"],tags:["csharp","testunitaire"],img:e,cover:"cover5.jpg",readingTime:{text:"8 min read",minutes:7.05,time:423000,words:1410},body:{type:"root",children:[{type:a,tag:c,props:{},children:[{type:b,value:"Par définition (Cf. "},{type:a,tag:i,props:{href:"http:\u002F\u002Ffr.wikipedia.org\u002Fwiki\u002FTest_unitaire",rel:[m]},children:[{type:b,value:"Wikipédia"}]},{type:b,value:" ) un test unitaire est un procédé permettant de s'assurer du fonctionnement correct d'une partie déterminée d'un logiciel ou d'une portion d'un programme (appelée « unité » ou « module »)."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Un test est dit "},{type:a,tag:k,props:{},children:[{type:b,value:"unitaire"}]},{type:b,value:" s'il ne fait pas appel à d'autres ressources que la classe testé. Un test unitaire n'utilise donc pas de base de données, de socket, MQ series etc... à l'inverse d'un test d'intégration."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Un test d'"},{type:a,tag:k,props:{},children:[{type:b,value:"intégration"}]},{type:b,value:" est donc par extension un test qui peut utiliser des ressources externes : bases de données par exemple."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Voyons ce que ça donne en C#."}]},{type:a,tag:j,props:{id:x},children:[{type:b,value:y}]},{type:a,tag:c,props:{},children:[{type:b,value:"Par convention, une classe de test correspond généralement aux tests d'une classe de votre code."}]},{type:a,tag:c,props:{},children:[{type:a,tag:k,props:{},children:[{type:b,value:"Exemple"}]},{type:b,value:" :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"votre classe : "},{type:a,tag:r,props:{},children:[{type:b,value:"EmailAdressValidator"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:n}]},{type:a,tag:c,props:{},children:[{type:b,value:"public class  EmailAddressValidator\n{\nprivate DomainValidator domainValidator;"}]},{type:a,tag:d,props:{code:z,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:z}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:s}]},{type:a,tag:c,props:{},children:[{type:b,value:"la classe de test : "},{type:a,tag:r,props:{},children:[{type:b,value:"EmailAdressValidatorTest"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Une classe de test comporte un stéréotype TestFixture, les méthodes de test ont un stéréotype Test."}]},{type:a,tag:c,props:{},children:[{type:b,value:n}]},{type:a,tag:c,props:{},children:[{type:b,value:"[TestFixture]\npublic class EmailValidatorTest\n{\nEmailAddressValidator EAV;"}]},{type:a,tag:d,props:{code:A,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:A}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"[Test]\npublic void TestEmailSyntaxArobas()\n{\nAssert.IsTrue(EAV.CheckEmailAddressSyntax (\""},{type:a,tag:i,props:{href:t},children:[{type:b,value:u}]},{type:b,value:"\"));\nAssert.IsFalse(EAV.CheckEmailAddressSyntax (\"Nom@@entreprise.com\"));\nAssert.IsFalse(EAV.CheckEmailAddressSyntax (\"Nomentreprise.com\"));\nAssert.IsFalse(EAV.CheckEmailAddressSyntax (\"@entreprise.com\"));\nAssert.IsFalse(EAV.CheckEmailAddressSyntax (\"Nom@\"));\n}\n}"}]},{type:a,tag:j,props:{id:B},children:[{type:b,value:C}]},{type:a,tag:c,props:{},children:[{type:b,value:"Dans un test, on cherche toujours à vérifier un comportement. On utilise donc des assertions, ces assertions définissent le comportement attendu."}]},{type:a,tag:c,props:{},children:[{type:b,value:"En francais, une assertion est un énoncé considéré comme vrai."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour un test unitaire, il s'agit d'une expression qui doit être vrai pour que le test réussisse."}]},{type:a,tag:c,props:{},children:[{type:b,value:"NUnit et MBunit utilise une classe statique "},{type:a,tag:i,props:{href:D,rel:[m]},children:[{type:b,value:E}]},{type:b,value:" pour les assertions :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Cette classe "},{type:a,tag:i,props:{href:D,rel:[m]},children:[{type:b,value:E}]},{type:b,value:" va nous permettre de tester entre autre :"}]},{type:a,tag:o,props:{},children:[{type:a,tag:l,props:{},children:[{type:b,value:"l'égalité : Assert.Equals"}]},{type:a,tag:l,props:{},children:[{type:b,value:"le non null : Assert.IsNotNull"}]},{type:a,tag:l,props:{},children:[{type:b,value:"une condition Assert.IsTrue"},{type:a,tag:p,props:{},children:[]},{type:b,value:"\nmais aussi, la présence dans une plage de valeur, une égalité approximative, l'égalité des références etc..."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Un test comporte toujours des assertions."}]},{type:a,tag:c,props:{},children:[{type:b,value:n}]},{type:a,tag:c,props:{},children:[{type:b,value:"\u002F\u002F CheckEmailAdressSyntax doit renvoyer true avec le paramètre \""},{type:a,tag:i,props:{href:t},children:[{type:b,value:u}]},{type:b,value:"\"\nAssert.IsTrue(EAV.CheckEmailAddressSyntax (\""},{type:a,tag:i,props:{href:t},children:[{type:b,value:u}]},{type:b,value:"\"));"}]},{type:a,tag:j,props:{id:F},children:[{type:b,value:G}]},{type:a,tag:c,props:{},children:[{type:b,value:"Il est parfois nécessaire d'effectuer des opérations avant et après chaque test. Une classe peut donc définir des méthodes appelées avant et après chaque test avec les stéréotypes Setup et Teardown."}]},{type:a,tag:c,props:{},children:[{type:b,value:n}]},{type:a,tag:c,props:{},children:[{type:b,value:"\u002F\u002F toujours exécuté avant les tests\n[SetUp]\npublic void SetUp()\n{\nEAV = new EmailAddressValidator ();\n}"}]},{type:a,tag:c,props:{},children:[{type:b,value:"\u002F\u002F toujours exécuté après les tests\n[TearDown]\npublic void TearDown()\n{\nEVA.Clean();\n}"}]},{type:a,tag:j,props:{id:H},children:[{type:b,value:I}]},{type:a,tag:c,props:{},children:[{type:b,value:"La "},{type:a,tag:k,props:{},children:[{type:b,value:"couverture de code"}]},{type:b,value:" est une métrique utilisée en génie logiciel pour décrire le taux de code source "},{type:a,tag:i,props:{href:J,rel:[m]},children:[{type:b,value:J}]},{type:b,value:" testé d'un programme. Ceci permet de mesurer la qualité des tests effectués."}]},{type:a,tag:c,props:{},children:[{type:b,value:"En .NET on utilise "},{type:a,tag:i,props:{href:K,rel:[m]},children:[{type:b,value:L}]},{type:b,value:" pour mesurer cette couverture de code. "},{type:a,tag:i,props:{href:K,rel:[m]},children:[{type:b,value:L}]},{type:b,value:" va calculer à partir des tests joués et du code initial l'ensemble des chemins qui ont été parcourus et fournir un pourcentage du code parcouru par rapport au code non parcouru."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ci-dessous, un exemple des rapports proposés par NCover :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"XXXX"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Dans les tests précédents, NCover remarque que l'on ne passe pas par "},{type:a,tag:k,props:{},children:[{type:b,value:"CheckDomainExists"}]},{type:b,value:" que l'on verra plus bas sur cette page. De plus le test sur la nullité de la chaine entrée n'est jamais évalué à true :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"if(emailAddress == null )\n{\nthrow new NullReferenceException();\n}"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Un test avec une chaine null ferait remonter la couverture de code."}]},{type:a,tag:j,props:{id:M},children:[{type:b,value:N}]},{type:a,tag:c,props:{},children:[{type:b,value:"Dans le test précédent, on réécrit x fois la même ligne pour tester avec des paramètres différents :"}]},{type:a,tag:d,props:{code:O,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:O}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Premier défaut à cette méthode :"}]},{type:a,tag:o,props:{},children:[{type:a,tag:l,props:{},children:[{type:b,value:"il est conseillé d'avoir une assertion par méthode de test, ca permet d'être sur que tout les cas de test sont joués (sinon la première erreur empêche l'execution des autres tests)."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:n}]},{type:a,tag:d,props:{code:P,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:P}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Second défaut, on duplique le code testé. Cela aurait été plus gênant avec un code sur plusieurs lignes."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Solution :"},{type:a,tag:p,props:{},children:[]},{type:b,value:"\nPour éviter de réécrire x fois le même test avec des paramètres différents, on va utiliser des tests paramétrés :"}]},{type:a,tag:d,props:{code:Q,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:Q}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Le même test est joué 4 fois pour chaque valeur de paramètre. L'attribut Row est utilisé pour chaque paramétre et celui-ci est passé en paramètre de la méthode."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Autre exemple avec un code plus complexe :"}]},{type:a,tag:d,props:{code:R,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:R}]}]}]},{type:a,tag:j,props:{id:S},children:[{type:b,value:T}]},{type:a,tag:v,props:{id:U},children:[{type:b,value:V}]},{type:a,tag:c,props:{},children:[{type:b,value:"Comme dit plus haut, un test unitaire doit être indépendant des ressources externes : base de données, file de message etc..."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Mais il arrive souvent que l'on utilise ces ressources dans les classes testées."}]},{type:a,tag:c,props:{},children:[{type:b,value:n}]},{type:a,tag:c,props:{},children:[{type:b,value:"public class  EmailAddressValidator\n{\nDomainValidator domainValidator;"}]},{type:a,tag:d,props:{code:W,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:W}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:s}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ici le DomainValidator fait appel à un service web pour vérifier l'existence d'un nom de domaine. Le test unitaire de la méthode CheckDomainExists pose donc problème."}]},{type:a,tag:v,props:{id:X},children:[{type:b,value:Y}]},{type:a,tag:c,props:{},children:[{type:b,value:"La solution consiste à utiliser un bouchon à la place du DomainValidator."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour cela, un peu de remaniement de code est nécessaire ("},{type:a,tag:r,props:{},children:[{type:b,value:"refactoring"}]},{type:b,value:Z}]},{type:a,tag:o,props:{},children:[{type:a,tag:l,props:{},children:[{type:b,value:"l'objet DomainValidator n'est plus instancié dans le constructeur mais injecté par constructeur ou par mutateur (propriété)"}]},{type:a,tag:l,props:{},children:[{type:b,value:"On utilise une interface à la place de l'objet réel pour \"inverser la dépendance\" de la classe EmailAdressValidator non plus sur la classe \"DomainValidator\" mais sur une interface \"IDomainValidator\""}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Exemple avec injection par constructeur :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"\u002F\u002F Interface IDomainValidator\npublic interface IDomainValidator\n{\nbool Exists(string sDomain);\n}"}]},{type:a,tag:c,props:{},children:[{type:b,value:"\u002F\u002F Classe à tester\nclass  EmailAddressValidator\n{\n\u002F\u002F Interface\nprivate readonly IDomainValidator domainValidator;"}]},{type:a,tag:d,props:{code:_,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:_}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:s}]},{type:a,tag:c,props:{},children:[{type:b,value:"Exemple avec injection par mutatteur (propriété getter\u002Fsetter) :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"\u002F\u002F Classe à tester\nclass  EmailAddressValidator\n{\n\u002F\u002F Interface\npublic IDomainValidator domainValidator { get; set; }"}]},{type:a,tag:c,props:{},children:[{type:b,value:"public EmailAddressValidator()\n{\n}\n...."}]},{type:a,tag:c,props:{},children:[{type:b,value:"A partir de là, il faut écrire une implémentation de IDomainValidator valable uniquement pour le test."}]},{type:a,tag:c,props:{},children:[{type:b,value:"class FakeDomainValidator : IDomainValidator\n{\npublic bool Exists(string sDomain)\n{\nreturn true;\n}\n}"}]},{type:a,tag:c,props:{},children:[{type:a,tag:k,props:{},children:[{type:b,value:"Les tests de EmailAddressValidator pourront donc être indépendants de l'implémentation de IDomainValidator."}]}]},{type:a,tag:v,props:{id:$},children:[{type:b,value:aa}]},{type:a,tag:c,props:{},children:[{type:b,value:"Si vous souhaitez tester le comportement de EmailAddressValidator dans le cas d'un retour true et false, il faut écrire deux bouchons."},{type:a,tag:p,props:{},children:[]},{type:b,value:"\nSi l'objet est complexe et contient plus de 3 méthodes, l'écriture des bouchons est rapidement fastidieuse."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour cela, il faut utiliser des outils qui génèrent les bouchons dynamiquement. Voir partie suivante sur les mocks."}]},{type:a,tag:"h1",props:{id:"présentation-des-mocks"},children:[{type:b,value:"Présentation des Mocks"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Les Mocks permettent de s'affranchir de l'écriture des bouchons cités plus haut. Deux lignes de code suffisent pour créer une implémentation vide d'une interface :"}]},{type:a,tag:d,props:{code:ab,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:ab}]}]}]},{type:a,tag:j,props:{id:ac},children:[{type:b,value:ad}]},{type:a,tag:c,props:{},children:[{type:b,value:"On peut désormais écrire :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"EAV = new EmailAddressValidator ();\nEAV.domainValidator = domainValidatorMock;\nEAV.CheckDomainExists(\"domaine.fr\");"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Par défaut, nous n'avons pas défini ce que devait renvoyer Exists de domainValidatorMock, donc la méthode va renvoyer false (la valeur d'un bool par défaut)."}]},{type:a,tag:c,props:{},children:[{type:a,tag:k,props:{},children:[{type:b,value:"Ici, on va donc tester la méthode CheckDomainExists de EmailAddressValidator sans faire d'appel à un web service."}]}]},{type:a,tag:j,props:{id:ae},children:[{type:b,value:af}]},{type:a,tag:c,props:{},children:[{type:b,value:"Dans l'exemple précédent, on va coder deux tests, un ou le résultat du IDomainValidator est false, l'autre ou c'est true. Pour cela, on va initialiser le mock avec la méthode Setup :"}]},{type:a,tag:d,props:{code:ag,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:ag}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"La méthode Setup prend une lambda expression indiquant le comportement attendu de la méthode Exists sur l'objet."}]},{type:a,tag:c,props:{},children:[{type:b,value:"On remarque l'utilisation de It.IsAny"},{type:a,tag:"string",props:{},children:[{type:b,value:"() qui indique que l'appel de Exists avec n'importe quel string renverra true."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Tout le comportement de la méthode bouchonnée peut être précisé comme cela."},{type:a,tag:p,props:{},children:[]},{type:b,value:"\nPar exemple si la méthode doit renvoyer une exception :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"mock.Setup(foo =\u003E foo.Exists(It.IsAny())).Returns(false).Throws(new ArgumentException(\"invalid argument\"));"}]},{type:a,tag:c,props:{},children:[{type:b,value:"On peut indiquer que l'appel de la méthode doit ensuite déclencher une fonction de rappel :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"mock.Setup(foo =\u003E foo.Exists(It.IsAny())).Returns(false).Callback(() =\u003E MethodToCall());"}]},{type:a,tag:j,props:{id:ah},children:[{type:b,value:ai}]},{type:a,tag:c,props:{},children:[{type:b,value:"En réalité il existe deux types de tests à faire :"}]},{type:a,tag:o,props:{},children:[{type:a,tag:l,props:{},children:[{type:b,value:"tester que EmailAdressValidator se comporte bien"}]},{type:a,tag:l,props:{},children:[{type:b,value:"tester que DomainValidator est correctement appelé par EmailAdressValidator"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"pour le deuxième type de test, le mock peut ajouter des attentes (ou "},{type:a,tag:k,props:{},children:[{type:b,value:"expectations"}]},{type:b,value:Z}]},{type:a,tag:d,props:{code:aj,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:aj}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ici par exemple on vérifie que la méthode Exists ne peut être appelé qu'une seule fois."}]}],toc:{title:e,searchDepth:h,depth:h,links:[{id:x,depth:h,text:y},{id:B,depth:h,text:C},{id:F,depth:h,text:G},{id:H,depth:h,text:I},{id:M,depth:h,text:N},{id:S,depth:h,text:T,children:[{id:U,depth:w,text:V},{id:X,depth:w,text:Y},{id:$,depth:w,text:aa}]},{id:ac,depth:h,text:ad},{id:ae,depth:h,text:af},{id:ah,depth:h,text:ai}]}},_type:"markdown",_id:"content:articles:2010:11:28:introduction-aux-tests-unitaires-et-aux-bouchons-en-c-2.md",_source:"content",_file:"articles\u002F2010\u002F11\u002F28\u002Fintroduction-aux-tests-unitaires-et-aux-bouchons-en-c-2.md",_extension:"md"}},prerenderedAt:1676918942030}}("element","text","p","code","",null,"pre",2,"a","h2","strong","li","nofollow","Exemple :","ul","br",false,"em","}","mailto:Nom@entreprise.com","Nom@entreprise.com","h3",3,"écriture-dun-premier-test","Écriture d'un premier test","public EmailAddressValidator()\n{\n    DomainValidator domainValidator = new DomainValidator();\n}\n\npublic bool CheckEmailAddressSyntax(string emailAddress)\n{\n    if(emailAddress == null )\n    {\n        throw new NullReferenceException();\n    }\n        return Regex.IsMatch(emailAddress, @\"^\\[w.-\\]+@\\[a-zA-Z0-9-\\]+(.\\[a-zA-Z0-9-\\]{1,})\\*(.\\[a-zA-Z\\]{2,3}){1,2}$\");\n}\n    ...\npublic bool CheckDomainExists(string domain)\n{\n        return  domainValidator.Exists(domain);\n}\n...\n","\\[SetUp\\]\npublic void SetUp()\n{\n    EAV = new EmailAddressValidator ();\n}\n\n\\[TearDown\\]\npublic void TearDown()\n{\n    EVA.Clean();\n}\n","différentes-assertions","Différentes assertions","http:\u002F\u002Fgallio.org\u002Fapi\u002Fhtml\u002FAllMembers_T_MbUnit_Framework_Assert.htm","Assert","setupteardown","Setup\u002FTearDown","la-couverture-de-code","La couverture de code","http:\u002F\u002Ffr.wikipedia.org\u002Fwiki\u002FCode_source","http:\u002F\u002Fwww.ncover.com\u002F","NCover","test-paramétré","Test paramétré","  Assert.IsFalse(EAV.CheckEmailAddressSyntax (\"Nom@@entreprise.com\"));\n  Assert.IsFalse(EAV.CheckEmailAddressSyntax (\"Nomentreprise.com\"));\n  Assert.IsFalse(EAV.CheckEmailAddressSyntax (\"@entreprise.com\"));\n  Assert.IsFalse(EAV.CheckEmailAddressSyntax (\"Nom@\"));\n","\\[Test\\]\npublic void TestInvalidEmailSyntaxWithTwoArobas()\n{\n    Assert.IsFalse(EAV.CheckEmailAddressSyntax (\"Nom@@entreprise.com\"));\n}\n\n\\[Test\\]\npublic void TestInvalidEmailSyntaxWithoutName()\n{\n    Assert.IsFalse(EAV.CheckEmailAddressSyntax (\"@entreprise.com\"));\n}\n","\\[Test\\]\n\\[Row(\"Nom@@entreprise.com\")\\]\n\\[Row(\"Nomentreprise.com\")\\]\n\\[Row(\"@entreprise.com\")\\]\n\\[Row(\"Nom@\")\\]\npublic void TestEmailSyntaxArobas(string name)\n{\n    Assert.IsFalse(EAV.CheckEmailAddressSyntax (name));\n}\n","\\[Test\\]\n\\[Row(\"Milou\")\\]\n\\[Row(\"Idefix\")\\]\npublic void TestWithFakeAndRowTest(string name)\n{\n    \u002F\u002F \"Setup\" (initialisation des objets pour le test)\n    OrderWriter orderWriter = new OrderWriter(new FakeWriter());\n    Order order = new Order() { OrderId = 7001, Pet = new Dog(name) };\n\n    \u002F\u002F \"Execute\" (Exécution du test : écriture de l'ordre sur le système)\n    orderWriter.WriteOrder(order);\n\n    \u002F\u002F \"State verification\" (vérification de l'état de l'objet par des assertions)\n    Assert.AreEqual(name, order.Pet.Name);\n    Assert.IsTrue(order.IsFilled);\n}\n","le-bouchonnage","Le bouchonnage","problématique","Problématique","public EmailAddressValidator()\n{\n    DomainValidator domainValidator = new DomainValidator();\n}\n\npublic bool CheckEmailAddressSyntax(string emailAddress)\n{\n    if(emailAddress == null )\n    {\n        throw new NullReferenceException();\n    }\n    return Regex.IsMatch(emailAddress, @\"^\\[w.-\\]+@\\[a-zA-Z0-9-\\]+(.\\[a-zA-Z0-9-\\]{1,})\\*(.\\[a-zA-Z\\]{2,3}){1,2}$\");\n}\n...\npublic bool CheckDomainExists(string domain)\n{\n    return  domainValidator.Exists(domain);\n}...\n","solution","Solution",") :","public EmailAddressValidator(IDomainValidator domainValidator)\n{\n    this.domainValidator = domainValidator;\n}\n\npublic bool CheckEmailAddressSyntax(string emailAddress)\n{\n    if(sEmailAddress == null )\n    {\n        throw new NullReferenceException();\n    }\n    return Regex.IsMatch(emailAddress, @\"^\\[w.-\\]+@\\[a-zA-Z0-9-\\]+(.\\[a-zA-Z0-9-\\]{1,})\\*(.\\[a-zA-Z\\]{2,3}){1,2}$\");\n}\n...\npublic bool CheckDomainExists(string domain)\n{\n    return  domainValidator.Exists(domain);\n}\n...\n","limitations","Limitations","  var mock = new Mock();\n  IDomainValidator domainValidatorMock = mock.Object;\n","mocks-pour-tester-létat-des-objets","Mocks pour tester l'état des objets","préciser-le-comportement-du-mock","Préciser le comportement du mock","    \\[Test\\]\n    public void TestDomainExist()\n    {\n        EAV = new EmailAddressValidator ();\n        EAV.domainValidator = domainValidatorMock;\n        mock.Setup(foo =\u003E foo.Exists(It.IsAny())).Returns(true);\n        Assert.IsTrue(EAV.CheckDomainExists(\"domaine.fr\"));\n    }\n\n    \\[Test\\]\n    public void TestDomainNotExist()\n    {\n        EAV = new EmailAddressValidator ();\n        EAV.domainValidator = domainValidatorMock;\n        mock.Setup(foo =\u003E foo.Exists(It.IsAny())).Returns(false);\n        Assert.IsTrue(EAV.CheckDomainExists(\"domaine.fr\"));\n    }\n","mock-pour-tester-le-comportement-des-objets","Mock pour tester le comportement des objets","        \u002F\u002F \"Behavior verification\" (vérifications du comportement de l'objet par des attentes)\n        mock.Verify(foo =\u003E foo.Exists(It.IsAny())).Returns(false), Times.AtMostOnce(),\n        \"Fail message: method IDomainValidator.Existsshould be called and called only once\");\n"))