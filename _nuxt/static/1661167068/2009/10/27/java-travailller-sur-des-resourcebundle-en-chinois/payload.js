__NUXT_JSONP__("/2009/10/27/java-travailller-sur-des-resourcebundle-en-chinois", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D){return {data:[{article:{slug:"java-travailller-sur-des-resourcebundle-en-chinois",description:"## Travailller sur des ResourceBundle en Chinois\nAu hasard de mes visites sur developpez.com je suis tombé sur le lien suivant :\n[http:\u002F\u002Fblog.develo...",id:"133",title:"Java : Travailller sur des ResourceBundle en Chinois",date:"2009-10-27",categories:["waza"],tags:["encodage",g,"utf8"],img:"overview.png",cover:p,toc:[{id:q,depth:h,text:r},{id:s,depth:h,text:t},{id:u,depth:h,text:v}],body:{type:"root",children:[{type:b,tag:i,props:{id:q},children:[{type:b,tag:e,props:{href:"#travailller-sur-des-resourcebundle-en-chinois",ariaHidden:j,tabIndex:k},children:[{type:b,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:r}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Au hasard de mes visites sur developpez.com je suis tombé sur le lien suivant :"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:w,rel:[x,y,z],target:A,title:"utiliser des fichiers utf-8 pour l'internationalisation"},children:[{type:a,value:w}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Je viens récemment de travailler sur le portage de notre application en Chinois et bosser sur des fichiers de traduction en conservant les encodages a justement été un de nos problèmes et nous n'avons pas choisi la même solution. Du coup je fais partager ^^"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Effectivement la solution de witchounet fonctionne, elle consiste à utiliser des ResourceBundle en UTF-8 directement. Il reste cependant la problématique de l'édition de ces fichiers, de l'échappement des caractères etc... Du coup pour les ResourceBundle Java on s'est plutôt orienté vers un plugin Eclipse : "},{type:b,tag:e,props:{href:o,rel:[x,y,z],target:A,title:o},children:[{type:a,value:o}]}]},{type:a,value:c},{type:b,tag:i,props:{id:s},children:[{type:b,tag:e,props:{href:"#comment-%C3%A7a-marche-",ariaHidden:j,tabIndex:k},children:[{type:b,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:t}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Il s'agit ni plus ni moins d'un éditeur de ResourceBundle permettant d'afficher les clés du bundle associés aux traductions dans les différentes langues. Ses atouts majeurs :"}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"échappement des caractères"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"encodage en unicode  (exemple : u8FDEu63A5u6D88u606Fu670Du52A1u5668u5931u8D25)"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"mise en évidence des traductions manquantes"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"création assistée d'un nouveau bundle avec les bons codes ISO pour la langue et le pays"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"vue en arbre ou vue plate"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:B,props:{alt:"overview",src:"\u002Fimages\u002Foverview.png"},children:[]},{type:a,value:" "},{type:b,tag:B,props:{alt:"nouveau",src:"\u002Fimages\u002Fnouveau.png"},children:[]}]},{type:a,value:c},{type:b,tag:i,props:{id:u},children:[{type:b,tag:e,props:{href:"#astuce",ariaHidden:j,tabIndex:k},children:[{type:b,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:v}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Allez quand même, pour la forme, une petite astuce qui nous a bien servi en début de projet lorsque les fichiers nous arrivaient dans des encodages exotiques. Java est plutot bien fourni en utilitaire et il propose notamment un outils de conversion vers ascii : native2ascii"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:"em",props:{},children:[{type:a,value:"Petit exemple :"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"native2ascii -encoding GB2312 ResourceBundleHelper_zh.properties ResourceBundleHelper_zh.properties-NEW"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Ca vous permet de retransformer vos fichiers envoyés par vos collègues Chinois en ascii. Et c'est bien pratique."}]}]},dir:"\u002Farticles\u002F2009\u002F10\u002F27",path:"\u002Farticles\u002F2009\u002F10\u002F27\u002Fjava-travailller-sur-des-resourcebundle-en-chinois",extension:".md",createdAt:C,updatedAt:C,bodyPlainText:"\nTravailller sur des ResourceBundle en Chinois\n\nAu hasard de mes visites sur developpez.com je suis tombé sur le lien suivant :\n\nhttp:\u002F\u002Fblog.developpez.com\u002Fwichtounet\u002Fp8236\u002Fprogrammation\u002Fspring\u002Futiliser-des-fichiers-utf-8-pour-l-inter\u002F\n\nJe viens récemment de travailler sur le portage de notre application en Chinois et bosser sur des fichiers de traduction en conservant les encodages a justement été un de nos problèmes et nous n'avons pas choisi la même solution. Du coup je fais partager ^^\n\nEffectivement la solution de witchounet fonctionne, elle consiste à utiliser des ResourceBundle en UTF-8 directement. Il reste cependant la problématique de l'édition de ces fichiers, de l'échappement des caractères etc... Du coup pour les ResourceBundle Java on s'est plutôt orienté vers un plugin Eclipse : http:\u002F\u002Fsourceforge.net\u002Fprojects\u002Feclipse-rbe\u002F\n\nComment ça marche ?\n\nIl s'agit ni plus ni moins d'un éditeur de ResourceBundle permettant d'afficher les clés du bundle associés aux traductions dans les différentes langues. Ses atouts majeurs :\n\néchappement des caractères\nencodage en unicode  (exemple : u8FDEu63A5u6D88u606Fu670Du52A1u5668u5931u8D25)\nmise en évidence des traductions manquantes\ncréation assistée d'un nouveau bundle avec les bons codes ISO pour la langue et le pays\nvue en arbre ou vue plate\n\noverview nouveau\n\nAstuce\n\nAllez quand même, pour la forme, une petite astuce qui nous a bien servi en début de projet lorsque les fichiers nous arrivaient dans des encodages exotiques. Java est plutot bien fourni en utilitaire et il propose notamment un outils de conversion vers ascii : native2ascii\n\nPetit exemple :\n\nnative2ascii -encoding GB2312 ResourceBundleHelper\\_zh.properties ResourceBundleHelper\\_zh.properties-NEW\n\nCa vous permet de retransformer vos fichiers envoyés par vos collègues Chinois en ascii. Et c'est bien pratique.\n",readTime:{text:"2 min read",minutes:1.355,time:81300,words:271}},relatedArticles:[{slug:"eviter-les-conflits-de-nom-dans-les-interfaces-en-c",description:"[![](\u002Fimages\u002Fjavac1.png \"javac\")](http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2011\u002F05\u002Fjavac1.png) **Warning, warning,** ceci n'est pas une rubrique...",id:"286",title:"Java Vs C# : Eviter les conflits de nom dans les interfaces",date:"2011-03-29",tags:["csharp",g],img:"javac1.png",cover:D,path:"\u002Farticles\u002F2011\u002F03\u002F29\u002Feviter-les-conflits-de-nom-dans-les-interfaces-en-c"},{slug:"luke-que-la-force-soit-avec-toi",description:"Vous connaissez [Lucene](http:\u002F\u002Flucene.apache.org\u002Fjava\u002Fdocs\u002F \"Lucene\") ? Non ? Dans ce cas je vous invite fortement à découvrir cette API utilisé dans...",id:"139",title:"Luke, que la force soit avec toi !",date:"2009-12-06",tags:[g,"lucene"],img:"ouverturefichier.png",cover:D,path:"\u002Farticles\u002F2009\u002F12\u002F06\u002Fluke-que-la-force-soit-avec-toi"},{slug:"swing-or-not-swing-that-is-the-question",description:"## Peut-on faire un client lourd en Java ?\nAyant bossé en Java je me suis heurté à Swing comme on peut se heurter à un mur. Ouch, quand on vient du W...",id:"135",title:"Swing or not Swing, that is the question",date:"2009-10-30",tags:[g,"swing"],img:"",cover:p,path:"\u002Farticles\u002F2009\u002F10\u002F30\u002Fswing-or-not-swing-that-is-the-question"}],_img:{"/_ipx/_/hugo-nb.jpg":"\u002F_nuxt\u002Fimage\u002Fc3e54c.jpg"}}],fetch:{},mutations:void 0}}("text","element","\n","p","a","li","java",2,"h2","true",-1,"span","icon","icon-link","http:\u002F\u002Fsourceforge.net\u002Fprojects\u002Feclipse-rbe\u002F","cover2.jpg","travailller-sur-des-resourcebundle-en-chinois","Travailller sur des ResourceBundle en Chinois","comment-ça-marche-","Comment ça marche ?","astuce","Astuce","http:\u002F\u002Fblog.developpez.com\u002Fwichtounet\u002Fp8236\u002Fprogrammation\u002Fspring\u002Futiliser-des-fichiers-utf-8-pour-l-inter\u002F","nofollow","noopener","noreferrer","_blank","img","2022-08-22T11:16:21.965Z","cover7.jpg")));