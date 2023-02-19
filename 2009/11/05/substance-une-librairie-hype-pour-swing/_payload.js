export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){return {data:{"/articles/2009/11/05/substance-une-librairie-hype-pour-swing":{_path:"\u002Farticles\u002F2009\u002F11\u002F05\u002Fsubstance-une-librairie-hype-pour-swing",_dir:"05",_draft:g,_partial:g,_locale:h,_empty:g,title:"Substance, une librairie \"hype\" pour Swing",description:"Mon [dernier billet sur Swing](index.php\u002Fthe-news\u002F51-swing-or-not-swing \"Swing or not swing\") pouvait paraître pessimiste puisque je parlais de cette ...",id:"136",date:"2009-11-05",categories:["waza"],tags:[j,"substance","swing"],img:"button.png",cover:"cover4.jpg",readingTime:{text:"2 min read",minutes:1.36,time:81600,words:272},body:{type:"root",children:[{type:b,tag:c,props:{},children:[{type:a,value:"Mon "},{type:b,tag:d,props:{href:k,title:"Swing or not swing"},children:[{type:a,value:"dernier billet sur Swing"}]},{type:a,value:" pouvait paraître pessimiste puisque je parlais de cette API comme d'une API complexe et qui avait mal évolué avec notamment peu de frameworks autour. \"Peu\" ne veut pas pour autant dire \"aucun\" et c'est justement l'occasion d'aborder "},{type:b,tag:d,props:{href:"https:\u002F\u002Fsubstance.dev.java.net\u002F",rel:[e],title:i},children:[{type:a,value:i}]},{type:a,value:", une librairie bien sympathique créé par "},{type:b,tag:"em",props:{},children:[{type:a,value:"Kirill Grouchnikov"}]},{type:a,value:"."}]},{type:b,tag:c,props:{},children:[{type:a,value:"A mon sens c'est l'une des librairies qui a le plus profité de la période 2006-2007 et des avancées matérialisées dans "},{type:b,tag:d,props:{href:"https:\u002F\u002Faerith.dev.java.net\u002F",rel:[e],title:l},children:[{type:a,value:l}]},{type:a,value:". Romain Guy, l'un des leaders sur Aerith, fait d'ailleurs partie des contributeurs de Substance "},{type:b,tag:d,props:{href:"http:\u002F\u002Fweblogs.java.net\u002Fblog\u002Fkirillcool\u002Farchive\u002F2006\u002F09\u002Flistening_to_th_1.html",rel:[e]},children:[{type:a,value:"pour ces précieux conseils"}]},{type:a,value:". Les effets de fading, les animations sur les boutons, les tables à couleurs alternées etc... voici des choses facilement abordables avec cette librairie. Attention, comme je l'évoquais dans mon billet \""},{type:b,tag:d,props:{href:k,title:"Swing or not Swing"},children:[{type:a,value:"Swing or not Swing, that is the question"}]},{type:a,value:"\", il ne s'agit pas de nouvelles fonctionnalités de Swing mais de fonctionnalités existantes pour lesquelles la librairie propose des outils afin d'en faciliter l'usage."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Par exemple pour utiliser le fading lors de la surbrillange des éléments d'une liste :"}]},{type:b,tag:m,props:{code:n,language:j,meta:null},children:[{type:b,tag:"pre",props:{},children:[{type:b,tag:m,props:{__ignoreMap:h},children:[{type:a,value:n}]}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Nettement plus simple que de le coder soi-même..."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Pour voir un apercu de ce que cela peut donner une "},{type:b,tag:d,props:{href:"https:\u002F\u002Fsubstance.dev.java.net\u002Fsee.html",rel:[e],title:i},children:[{type:a,value:"application est disponible via Java Webstart"}]},{type:a,value:". Attention, à utiliser avec Java 6, c'est le prix de la modernité ;)"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Je vous invite à jouer avec les options générales et notamment à cocher les options suivantes :"}]},{type:b,tag:"ul",props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"Focus loop"}]},{type:b,tag:f,props:{},children:[{type:a,value:"Icon glow"}]},{type:b,tag:f,props:{},children:[{type:a,value:"Icon rollover"}]},{type:b,tag:f,props:{},children:[{type:a,value:"Button press"}]},{type:b,tag:f,props:{},children:[{type:a,value:"Global fade events"}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Et observez le résultat sur les boutons à icône, tout simplement bluffant..."}]},{type:b,tag:c,props:{},children:[{type:a,value:"A cela ajoutez la prévisualisation des fenêtres minimisées, la notion de "},{type:b,tag:d,props:{href:"https:\u002F\u002Fsubstance.dev.java.net\u002Fdocs\u002Fskins\u002Foverview.html",rel:[e]},children:[{type:a,value:"skin custom"}]},{type:a,value:"... et vous avez un framework que je ne saurais que trop vous conseiller."}]}],toc:{title:h,searchDepth:o,depth:o,links:[]}},_type:"markdown",_id:"content:articles:2009:11:05:substance-une-librairie-hype-pour-swing.md",_source:"content",_file:"articles\u002F2009\u002F11\u002F05\u002Fsubstance-une-librairie-hype-pour-swing.md",_extension:"md"},"/articles/2009/11/05/substance-une-librairie-hype-pour-swing/relatedArticles":[]},prerenderedAt:1676822113439}}("text","element","p","a","nofollow","li",false,"","Substance","java","index.php\u002Fthe-news\u002F51-swing-or-not-swing","Aerith","code","  JList list = ...; \u002F\u002F create the list\n  FadeConfigurationManager.getInstance().allowFades(FadeKind.ROLLOVER, list);\n  FadeConfigurationManager.getInstance().allowFades(FadeKind.SELECTION, list);\n",2))