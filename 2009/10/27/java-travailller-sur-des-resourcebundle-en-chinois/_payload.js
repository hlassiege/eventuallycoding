export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){return {data:{"/articles/2009/10/27/java-travailller-sur-des-resourcebundle-en-chinois":{_path:"\u002Farticles\u002F2009\u002F10\u002F27\u002Fjava-travailller-sur-des-resourcebundle-en-chinois",_dir:"27",_draft:f,_partial:f,_locale:i,_empty:f,title:"Java : Travailller sur des ResourceBundle en Chinois",description:"## Travailller sur des ResourceBundle en Chinois\nAu hasard de mes visites sur developpez.com je suis tombé sur le lien suivant :\n[http:\u002F\u002Fblog.develo...",id:"133",date:"2009-10-27",categories:["waza"],tags:["encodage","java","utf8"],img:"overview.png",cover:"cover2.jpg",readingTime:{text:"2 min read",minutes:1.195,time:71700,words:239},body:{type:"root",children:[{type:a,tag:g,props:{id:j},children:[{type:b,value:k}]},{type:a,tag:c,props:{},children:[{type:b,value:"Au hasard de mes visites sur developpez.com je suis tombé sur le lien suivant :"}]},{type:a,tag:c,props:{},children:[{type:a,tag:l,props:{href:m,rel:[n],title:"utiliser des fichiers utf-8 pour l'internationalisation"},children:[{type:b,value:m}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Je viens récemment de travailler sur le portage de notre application en Chinois et bosser sur des fichiers de traduction en conservant les encodages a justement été un de nos problèmes et nous n'avons pas choisi la même solution. Du coup je fais partager ^^"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Effectivement la solution de witchounet fonctionne, elle consiste à utiliser des ResourceBundle en UTF-8 directement. Il reste cependant la problématique de l'édition de ces fichiers, de l'échappement des caractères etc... Du coup pour les ResourceBundle Java on s'est plutôt orienté vers un plugin Eclipse : "},{type:a,tag:l,props:{href:h,rel:[n],title:h},children:[{type:b,value:h}]}]},{type:a,tag:g,props:{id:o},children:[{type:b,value:p}]},{type:a,tag:c,props:{},children:[{type:b,value:"Il s'agit ni plus ni moins d'un éditeur de ResourceBundle permettant d'afficher les clés du bundle associés aux traductions dans les différentes langues. Ses atouts majeurs :"}]},{type:a,tag:"ul",props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"échappement des caractères"}]},{type:a,tag:d,props:{},children:[{type:b,value:"encodage en unicode  (exemple : u8FDEu63A5u6D88u606Fu670Du52A1u5668u5931u8D25)"}]},{type:a,tag:d,props:{},children:[{type:b,value:"mise en évidence des traductions manquantes"}]},{type:a,tag:d,props:{},children:[{type:b,value:"création assistée d'un nouveau bundle avec les bons codes ISO pour la langue et le pays"}]},{type:a,tag:d,props:{},children:[{type:b,value:"vue en arbre ou vue plate"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:q,props:{alt:"overview",src:"\u002Fimages\u002Foverview.png"},children:[]},{type:b,value:" "},{type:a,tag:q,props:{alt:"nouveau",src:"\u002Fimages\u002Fnouveau.png"},children:[]}]},{type:a,tag:g,props:{id:r},children:[{type:b,value:s}]},{type:a,tag:c,props:{},children:[{type:b,value:"Allez quand même, pour la forme, une petite astuce qui nous a bien servi en début de projet lorsque les fichiers nous arrivaient dans des encodages exotiques. Java est plutot bien fourni en utilitaire et il propose notamment un outils de conversion vers ascii : native2ascii"}]},{type:a,tag:c,props:{},children:[{type:a,tag:"em",props:{},children:[{type:b,value:"Petit exemple :"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"native2ascii -encoding GB2312 ResourceBundleHelper_zh.properties ResourceBundleHelper_zh.properties-NEW"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ca vous permet de retransformer vos fichiers envoyés par vos collègues Chinois en ascii. Et c'est bien pratique."}]}],toc:{title:i,searchDepth:e,depth:e,links:[{id:j,depth:e,text:k},{id:o,depth:e,text:p},{id:r,depth:e,text:s}]}},_type:"markdown",_id:"content:articles:2009:10:27:java-travailller-sur-des-resourcebundle-en-chinois.md",_source:"content",_file:"articles\u002F2009\u002F10\u002F27\u002Fjava-travailller-sur-des-resourcebundle-en-chinois.md",_extension:"md"}},prerenderedAt:1677250793619}}("element","text","p","li",2,false,"h2","http:\u002F\u002Fsourceforge.net\u002Fprojects\u002Feclipse-rbe\u002F","","travailller-sur-des-resourcebundle-en-chinois","Travailller sur des ResourceBundle en Chinois","a","http:\u002F\u002Fblog.developpez.com\u002Fwichtounet\u002Fp8236\u002Fprogrammation\u002Fspring\u002Futiliser-des-fichiers-utf-8-pour-l-inter\u002F","nofollow","comment-ça-marche","Comment ça marche ?","img","astuce","Astuce"))