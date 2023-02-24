export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){return {data:{"/articles/2009/10/30/swing-or-not-swing-that-is-the-question":{_path:"\u002Farticles\u002F2009\u002F10\u002F30\u002Fswing-or-not-swing-that-is-the-question",_dir:"30",_draft:i,_partial:i,_locale:j,_empty:i,title:"Swing or not Swing, that is the question",description:"## Peut-on faire un client lourd en Java ?\nAyant bossé en Java je me suis heurté à Swing comme on peut se heurter à un mur. Ouch, quand on vient du W...",id:"135",date:"2009-10-30",categories:["waza"],tags:["java","swing"],img:j,cover:"cover2.jpg",readingTime:{text:"4 min read",minutes:3.39,time:203400,words:678},body:{type:"root",children:[{type:b,tag:h,props:{id:k},children:[{type:a,value:l}]},{type:b,tag:c,props:{},children:[{type:a,value:"Ayant bossé en Java je me suis heurté à Swing comme on peut se heurter à un mur. Ouch, quand on vient du Web on déguste fort avec Java et son API pour client lourd.  Pour autant, la techno est elle valable ou non, et que vaut-elle par rapport à J2EE ?"}]},{type:b,tag:h,props:{id:m},children:[{type:a,value:n}]},{type:b,tag:c,props:{},children:[{type:a,value:"Avant 2007 Sun a clairement focalisé son attention sur J2EE ce qui leur a permis de gagner en popularité. Le nombre de frameworks existant et la richesse des librairies proposées lui ont permis de s'assoir durablement comme \"langage pour faire du Web\"."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Seulement voilà, à côté de ça J2SE, la partie réservée aux postes de travail, a par contre était délaissé. Pourquoi ? "},{type:b,tag:d,props:{href:o,rel:[e],title:"interview james gosling"},children:[{type:a,value:"Selon James Gosling"}]},{type:a,value:", la faute au conflit qui opposait alors Sun et Windows sur le déploiement de la JVM Windows sur les postes par défaut. Sun n'aurait pas souhaité s'investir dans J2SE tant que Windows proposerait sa JVM."}]},{type:b,tag:c,props:{},children:[{type:a,value:"De l'avis du créateur de Java : \""},{type:b,tag:"em",props:{},children:[{type:a,value:"Aujourd'hui, Java sur le poste client n'est pas à la hauteur"}]},{type:a,value:"\" et ce constat est facile à confirmer :"}]},{type:b,tag:p,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"aucun framework Swing de réelle envergure : pas de JSF, Struts, Wicket, Tapestry etc... si on compare a J2EE"}]},{type:b,tag:f,props:{},children:[{type:a,value:"peu de librairies de composants : Swingx reste experimental."}]},{type:b,tag:f,props:{},children:[{type:a,value:"un système de look and feel trop complexe, pour preuve le peu de boites capable de créer le leur en comparaison avec le nombre capable de créer des CSS"}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"La difficulté de Swing, notamment la maitrise de la gestion événementielle et de l'EDT n'en font pas une partie de plaisir et au final ce n'est pas étonnant de trouver essentiellement des librairies payantes ("},{type:b,tag:d,props:{href:"http:\u002F\u002Fwww.jidesoft.com\u002F",rel:[e],title:q},children:[{type:a,value:q}]},{type:a,value:" par exemple qui est très bon) alors qu'on peut en trouver gratuitement à foison en J2EE."}]},{type:b,tag:h,props:{id:r},children:[{type:a,value:s}]},{type:b,tag:c,props:{},children:[{type:a,value:"Mais voila, depuis 2007 Sun semble vouloir revenir sur J2SE : - James Gosling, créateur de Java "},{type:b,tag:d,props:{href:o,rel:[e],title:"interview de james gosling"},children:[{type:a,value:"met en avant JavaFx"}]},{type:a,value:" - "},{type:b,tag:d,props:{href:"http:\u002F\u002Fswinglabs.org\u002F",rel:[e],title:"swinglabs"},children:[{type:a,value:"Swingx"}]},{type:a,value:" tente d'apporter du neuf avec objectif d'être intégré en Java 1.5 - "},{type:b,tag:d,props:{href:"https:\u002F\u002Faerith.dev.java.net\u002F",rel:[e],title:t},children:[{type:a,value:t}]},{type:a,value:" déjà présenté en 2006 devient open source , et oui, effectivement c'est une IHM qui déchire pas mal - Romain Guy qui s'était fait connaitre sur Aerith publie avec Chett Haase un très bon bouquin : "},{type:b,tag:d,props:{href:"http:\u002F\u002Ffilthyrichclients.org\u002F",rel:[e],title:u},children:[{type:a,value:u}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Soyons honnête toutefois, le bouquin filthyrichclients s'il démontre qu'on peut faire du très bon travail avec Swing met aussi en évidence que ça ne s'adresse pas à tout le monde. Certaines notions comme le double buffering, les problématiques d'accélération matérielle, les notions de Composite ou de transformation d'images sont très techniques et mettent en oeuvre des notions mathématiques qui ne s'adressent pas à monsieur tout le monde. Qui n'a pas galéré des heures sur des problèmes de glitch graphique, de pixels gris etc...  ?"}]},{type:b,tag:h,props:{id:v},children:[{type:a,value:w}]},{type:b,tag:c,props:{},children:[{type:a,value:"Et aujourd'hui 2009, cela me parait toujours moins rose."}]},{type:b,tag:p,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"JavaFx peine à décoller et son API n'est pas toujours pas stable (compatibilité 1.1 et 1.2 qui laisse à désirer). A côté de ça, ses concurrents directs comme Flex sont en plein boom avec notamment un sdk qui vient de sortir sur Eclipse"}]},{type:b,tag:f,props:{},children:[{type:a,value:"aucun framework n'a émergé pour cacher la complexité des concepts nés dans Aerith"}]},{type:b,tag:f,props:{},children:[{type:a,value:"Swingx est tellement peu mis à jour qu'il continue toujours à cibler Java 1.5, version en fin de support depuis cette année..."}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Pourquoi ce manque d'investissement de Sun depuis 2 ans ? Le rachat d'Oracle n'y serait pas étranger ou bien est-ce simplement que 2 ans reste un délai très court ? Nous verrons bien."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Mais personnellement j'ai tendance à être sceptique d'autant que la grande force de J2SE qui était la richesse de ses widgets et la réactivité de son interface est désormais sévèrement concurrencé par les interfaces Web. "},{type:b,tag:d,props:{href:"http:\u002F\u002Fcode.google.com\u002Fintl\u002Ffr\u002Fwebtoolkit\u002F",rel:[e],title:x},children:[{type:a,value:x}]},{type:a,value:" ou "},{type:b,tag:d,props:{href:"http:\u002F\u002Fcomponent-showcase.icefaces.org\u002Fcomponent-showcase\u002Fshowcase.iface",rel:[e],title:"JSF et Icefaces"},children:[{type:a,value:"JSF avec IceFaces"}]},{type:a,value:" apportent désormais la même richesse aux webapps et pour un cout nettement moindre."}]},{type:b,tag:c,props:{},children:[{type:a,value:"En conclusion, je ne dénigre pas Swing et je pense que sa chance de survie va reposer comme beaucoup d'autres technologies sur la capacité à la communauté à proposer des outils, des composants, des best practices afin de cacher la complexité du langage. Mais à l'heure actuelle, si on me donne le choix, je partirais pour ma part sur du J2EE classique."}]}],toc:{title:j,searchDepth:g,depth:g,links:[{id:k,depth:g,text:l},{id:m,depth:g,text:n},{id:r,depth:g,text:s},{id:v,depth:g,text:w}]}},_type:"markdown",_id:"content:articles:2009:10:30:swing-or-not-swing-that-is-the-question.md",_source:"content",_file:"articles\u002F2009\u002F10\u002F30\u002Fswing-or-not-swing-that-is-the-question.md",_extension:"md"}},prerenderedAt:1677251105128}}("text","element","p","a","nofollow","li",2,"h2",false,"","peut-on-faire-un-client-lourd-en-java","Peut-on faire un client lourd en Java ?","swing-avant-2007","Swing avant 2007","http:\u002F\u002Fpro.01net.com\u002Feditorial\u002F363213\u002Fjames-gosling-%28sun%29-java-sur-le-poste-client-nest-pas-a-la-hauteur-aujourdhui\u002F","ul","Jide","swing-depuis-2007","Swing depuis 2007","Aerith","Filthy rich clients","et-aujourdhui","Et aujourd'hui ?","GWT"))