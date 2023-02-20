export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B){return {data:{"/articles/2011/11/05/les-tests-dihm-avec-play":{_path:"\u002Farticles\u002F2011\u002F11\u002F05\u002Fles-tests-dihm-avec-play",_dir:"05",_draft:l,_partial:l,_locale:e,_empty:l,title:"Les tests d'IHM avec Play!",description:"[![](\u002Fimages\u002Ftest.png \"test\")](http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2011\u002F11\u002Ftest.png)\nVous avez une appli Play ? Vous avez déjà bien utilis...",id:"466",date:"2011-11-05",categories:["waza"],tags:["play","selenium"],img:"test.png",cover:"cover5.jpg",readingTime:{text:"4 min read",minutes:3.02,time:181200,words:604},body:{type:"root",children:[{type:a,tag:c,props:{},children:[{type:a,tag:h,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2011\u002F11\u002Ftest.png",rel:[i]},children:[{type:a,tag:"img",props:{alt:e,src:"\u002Fimages\u002Ftest.png",title:"test"},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Vous avez une appli Play ? Vous avez déjà bien utilisé les UnitTest mais votre couverture de code reste faiblarde ?"},{type:a,tag:f,props:{},children:[]},{type:b,value:"\nC’est sur que malgré tout vos efforts pour que la couche controlleur soit la plus fine possible il reste quand même pas mal de code et on ne peut pas faire l’impasse dessus. Et on évitera aussi de rappeler que votre merveilleux plugin cobertura ne mesure pas la couverture de code HTML+JS testé..."},{type:a,tag:f,props:{},children:[]},{type:b,value:"\nVous auriez bien voulu utiliser les FunctionalTest mais les assertions d’un FunctionalTest ne vous permettent pas de vérifier grand chose en dehors d’un code retour 200.\nBref, il va vous falloir passer au runner Selenium de Play."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour la suite, je pars du principe que vous avez déjà lu la doc sur les tests selenium dans Play."}]},{type:a,tag:m,props:{},children:[{type:a,tag:g,props:{},children:[{type:a,tag:h,props:{href:n,rel:[i]},children:[{type:b,value:n}]}]},{type:a,tag:g,props:{},children:[{type:a,tag:h,props:{href:o,rel:[i]},children:[{type:b,value:o}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"La doc est pas mal mais il manque des petits trucs pour faire des tests dynamiques et réutilisables."}]},{type:a,tag:j,props:{id:p},children:[{type:b,value:q}]},{type:a,tag:c,props:{},children:[{type:b,value:"Déjà, premier frein pour écrire vos tests Selenium, il faut connaître la syntaxe Selenium."},{type:a,tag:f,props:{},children:[]},{type:b,value:"\nHeureusement, Manuel Bernhardt nous a fait un petit plugin pour Selenium IDE capable de générer nos tags pour les tests Play! : "},{type:a,tag:h,props:{href:r,rel:[i]},children:[{type:b,value:r}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pas de bol, c’est compatible jusqu’à la version 4 et j’ai la version 7 (merci au passage à Mozilla pour avoir accéléré le rythme de ces releases et flinguer tout mes plugins au passage...)."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Si vous ne pouvez pas utiliser le copier coller de Selenium IDE, il vous reste à le faire à la main. SeleniumIDE propose quand même la complétion de code sur l’ensemble des mots clés et ce sont les mêmes mots clés qui sont reconnus dans Play! Framework."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Quelques petites règles à respecter malgré tout :"}]},{type:a,tag:m,props:{},children:[{type:a,tag:g,props:{},children:[{type:b,value:"pas d’espace entre la commande et les arguments tu mettras"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"assertTextPresent('OK') =\u003E OK\nassertTextPresent ('OK') =\u003E KO (la commande sera ignorée)"}]},{type:a,tag:m,props:{},children:[{type:a,tag:g,props:{},children:[{type:b,value:"pas de ; tu utiliseras"}]},{type:a,tag:g,props:{},children:[{type:b,value:"pas de “ tu utiliseras"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"assertTextPresent('OK') =\u003E OK\nassertTextPresent(“OK”) =\u003E KO (la commande sera ignorée)"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Evidemment j’ai eu la chance de tester toutes ces erreurs... Et au milieu de 20 commandes, savoir qu’une commande a été ignorée n’est pas évident au premier abord."}]},{type:a,tag:j,props:{id:s},children:[{type:b,value:t}]},{type:a,tag:c,props:{},children:[{type:b,value:"Bon en fait, le tag Selenium accepte d’autres mots clés qui sont définis comme user-extension de Selenium dans le module TestRunner de Play!"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Donc vous pouvez aussi utiliser :"}]},{type:a,tag:k,props:{code:u,meta:v},children:[{type:a,tag:w,props:{},children:[{type:a,tag:k,props:{__ignoreMap:e},children:[{type:b,value:u}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Vous pouvez retrouver un exemple de ces tag dans samples-and-test\u002Fjust-test-cases\u002Ftest\u002FSeleniumUserExtensions.test.hml dans les sources de Play!"}]},{type:a,tag:j,props:{id:x},children:[{type:b,value:y}]},{type:a,tag:c,props:{},children:[{type:b,value:"Dans les autres problèmes classiques que l’on rencontre quand on teste, c’est par exemple quand on veut cliquer sur un lien qui comprend l’id d’un élément. Or évidemment cet ID peut être différent d’un lancement à l’autre."},{type:a,tag:f,props:{},children:[]},{type:b,value:"\nEt bien pas de souci puisqu’on manipule un template groovy on peut appeler notre code Java :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"%{ nemrodId= models.Project.find(\"byName\",\"Nemrod\").first().id;  }%"}]},{type:a,tag:c,props:{},children:[{type:b,value:"puis y faire référence comme suit :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"clickAndWait('id=messages-${nemrodId}')"}]},{type:a,tag:c,props:{},children:[{type:b,value:"De la même façon, vous pouvez faire un assert sur un text présent mais il faut gérer le fait que vous gériez plusieurs langues :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"%{ dashboardText = play.i18n.Messages.get(\"project.dashboard\");  }%\n…\nassertTextPresent('${dashboardText}')"}]},{type:a,tag:j,props:{id:z},children:[{type:b,value:A}]},{type:a,tag:c,props:{},children:[{type:b,value:"L’un des inconvénients majeurs des tests selenium c’est qu’ils sont très sensibles au changement d’IHM. C’est d’autant plus accentué que certaines actions reviennent fréquemment, par exemple le login sur une appli et que repasser partout pour modifier le login devient vite fastidieux."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Donc une méthode classique c’est de regrouper des actions selenium (type, click etc...) sous forme plus compréhensibles :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"login(myUser,myPwd)"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et avec Play! c’est possible en utilisant les tags."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Créons ici par exemple le template correspondant à l’action login sur une application."},{type:a,tag:f,props:{},children:[]},{type:b,value:"\nJe crée un fichier login.tag dans views\u002Ftags\u002Ftesting\u002F avec le contenu suivant :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"open('\u002F')\ntype('username', '${_user}')\ntype('password', '${_password}')\nclick('signin')\nwaitForPageToLoad('30000')"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Dans le test selenium, l’appel à ce tag se fait de la façon suivante :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"#{selenium}\nclearSession()"}]},{type:a,tag:k,props:{code:B,meta:v},children:[{type:a,tag:w,props:{},children:[{type:a,tag:k,props:{__ignoreMap:e},children:[{type:b,value:B}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"…\n#{\u002Fselenium}"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Voila, la séance est finie. Vous pouvez reprendre une activité normale"}]}],toc:{title:e,searchDepth:d,depth:d,links:[{id:p,depth:d,text:q},{id:s,depth:d,text:t},{id:x,depth:d,text:y},{id:z,depth:d,text:A}]}},_type:"markdown",_id:"content:articles:2011:11:05:les-tests-dihm-avec-play.md",_source:"content",_file:"articles\u002F2011\u002F11\u002F05\u002Fles-tests-dihm-avec-play.md",_extension:"md"}},prerenderedAt:1676929897623}}("element","text","p",2,"","br","li","a","nofollow","h2","code",false,"ul","http:\u002F\u002Fwww.playframework.org\u002Fdocumentation\u002F1.2.3\u002Fguide10","http:\u002F\u002Fwww.playframework.org\u002Fdocumentation\u002F1.2.3\u002Ftest#Seleniumtest","les-tags-selenium","Les tags Selenium","http:\u002F\u002Fmanuelbernhardt.github.com\u002Fplay-selenium-plugin\u002F","lextension-play-pour-selenium","L’extension Play pour Selenium","clearSession()\nstoreCacheEntry('myKey', 'stringCacheValue')\nstoreLastReceivedEmailBy('boron@localhost', 'email')\nassertEquals\nassertNotEquals\nassertTextLike\n",null,"pre","avoir-des-tests-dynamiques","Avoir des tests dynamiques","se-créer-sa-librairie-de-test","Se créer sa librairie de test","#{testing.login user:'myuser', password:'mypassword'\u002F}\n"))