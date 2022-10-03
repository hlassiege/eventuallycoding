__NUXT_JSONP__("/2011/10/02/creer-un-soft-on-fait-comment-nemrod-15", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){return {data:[{article:{slug:"creer-un-soft-on-fait-comment-nemrod-15",description:"[![](\u002Fimages\u002Flogo-web.png \"logo-web\")](http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2011\u002F10\u002Flogo-web.png)\nVoila, [Localizeyourapps](http:\u002F\u002Fwww.loca...",id:"408",title:"Créer un soft, on fait comment ? (Nemrod 1\u002F5)",date:"2011-10-02",categories:["waza"],tags:[m,n,g],img:o,cover:"cover4.jpg",toc:[{id:p,depth:2,text:q}],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2011\u002F10\u002Flogo-web.png",rel:[h,i,j],target:k},children:[{type:b,tag:"img",props:{alt:r,src:"\u002Fimages\u002Flogo-web.png",title:"logo-web"},children:[]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Voila, "},{type:b,tag:f,props:{href:"http:\u002F\u002Fwww.localizeyourapps.com",rel:[h,i,j],target:k},children:[{type:a,value:"Localizeyourapps"}]},{type:a,value:" est sorti, enfin pour être exact il est sorti depuis 2 semaines mais je n’avais pas encore eu le temps d’en parler ici."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Et donc Nemrod pour simplifier c’est :"}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"une histoire d’amour avec Play Framework"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"l’aboutissement d’un mésaventure lors d’un précédent projet"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"l’opportunité de faire du soft avec un status freelance."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Vous voulez en savoir plus ? Comment exploiter une idée ? Comment on lance un soft avec le minimum de budget ? Quelles sont les astuces pour se faire connaître ? Pourquoi avoir utilisé Play Framework et un retour d'expérience dessus ?"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Je vous propose une petite série de billets sur le sujet."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"C’est parti !"}]},{type:a,value:c},{type:b,tag:"h2",props:{id:p},children:[{type:b,tag:f,props:{href:"#petite-g%C3%A9n%C3%A8se-rapide",ariaHidden:"true",tabIndex:-1},children:[{type:b,tag:"span",props:{className:["icon","icon-link"]},children:[]}]},{type:a,value:q}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Forcément si je parle de Nemrod, ça passe par une petite genèse du projet. Ça peut ressembler à la partie \"Histoire de la société\" que chacun a mis dans son rapport de stage de fin d’étude pour combler les 20 premières pages mais non, que nenni ! J’ose espérer que ce sera un peu plus sympa à lire."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Bon, donc, il y a quelques temps j’ai bossé sur un soft internationalisé. Ce soft était déjà localisé en anglais, allemand, italien, espagnol et flamand. Le process pour ces langues était déjà pas super propre mais on arrivait à s’en sortir à coup d’échanges d’email et un gars chargé dans l’équipe de reconsolider le tout dans nos fichiers de ressources. Dans l’ensemble la qualité des traductions était plutôt mauvaise avec pas mal d’incohérences ou de traductions manquantes. Mais on se contentait d’avoir une traduction anglaise a peu près complète, langue à peu près maîtrisé par nos clients."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Et puis est arrivé le Chinois... \"Et là, c’est le drame\" comme dirait l’autre. Sans parler des problématiques d’internationalisation et d’encodage en UTF-8 :"}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"on est passé de quelques traducteurs à plus d’une vingtaine"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"on a eu l’obligation de n’avoir absolument rien en anglais dans l’appli"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"on a du traiter différents formats, fichiers po, fichiers properties et une base de données. Avec des contraintes de format assez évidentes"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Ce fut rapidement la jungle, des encodages inconnus par native2ascii, des tas de mails à traiter, des conflits de versions, des traductions retraduites plus de 10 fois, perdus, retraduites, et bien sur impossible de les vérifier."},{type:b,tag:l,props:{},children:[]},{type:a,value:"\nMalgré un simili process qui s’est établi à l’époque avec plusieurs outils buggé créé pour l’occasion, c’est resté l’enfer (*)."},{type:b,tag:l,props:{},children:[]},{type:a,value:"\nA l’époque j’avais recherché des outils collaboratifs pour la gestion des traductions supportant différents formats de fichiers techniques et je n’avais rien trouvé d’intéressant."},{type:b,tag:l,props:{},children:[]},{type:a,value:"\nDu coup l’idée a germé petit à petit de réaliser le mien."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Voilà, les bases sont posées, la suite dans les prochains billets."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"(*) d'ailleurs je viens de remarquer que cette époque correspond à la création de ce blog et que "},{type:b,tag:f,props:{href:"http:\u002F\u002Fhakanai.free.fr\u002Findex.php\u002Ftag\u002Futf8\u002F",rel:[h,i,j],target:k},children:[{type:a,value:"mes deux premiers billets"}]},{type:a,value:" portent sur le sujet. La boucle est bouclée."}]}]},dir:"\u002Farticles\u002F2011\u002F10\u002F02",path:"\u002Farticles\u002F2011\u002F10\u002F02\u002Fcreer-un-soft-on-fait-comment-nemrod-15",extension:".md",createdAt:t,updatedAt:t,bodyPlainText:"\n\n\nVoila, Localizeyourapps est sorti, enfin pour être exact il est sorti depuis 2 semaines mais je n’avais pas encore eu le temps d’en parler ici.\n\nEt donc Nemrod pour simplifier c’est :\n\nune histoire d’amour avec Play Framework\nl’aboutissement d’un mésaventure lors d’un précédent projet\nl’opportunité de faire du soft avec un status freelance.\n\nVous voulez en savoir plus ? Comment exploiter une idée ? Comment on lance un soft avec le minimum de budget ? Quelles sont les astuces pour se faire connaître ? Pourquoi avoir utilisé Play Framework et un retour d'expérience dessus ?\n\nJe vous propose une petite série de billets sur le sujet.\n\nC’est parti !\n\nPetite génèse rapide\n\nForcément si je parle de Nemrod, ça passe par une petite genèse du projet. Ça peut ressembler à la partie \"Histoire de la société\" que chacun a mis dans son rapport de stage de fin d’étude pour combler les 20 premières pages mais non, que nenni ! J’ose espérer que ce sera un peu plus sympa à lire.\n\nBon, donc, il y a quelques temps j’ai bossé sur un soft internationalisé. Ce soft était déjà localisé en anglais, allemand, italien, espagnol et flamand. Le process pour ces langues était déjà pas super propre mais on arrivait à s’en sortir à coup d’échanges d’email et un gars chargé dans l’équipe de reconsolider le tout dans nos fichiers de ressources. Dans l’ensemble la qualité des traductions était plutôt mauvaise avec pas mal d’incohérences ou de traductions manquantes. Mais on se contentait d’avoir une traduction anglaise a peu près complète, langue à peu près maîtrisé par nos clients.\n\nEt puis est arrivé le Chinois... \"Et là, c’est le drame\" comme dirait l’autre. Sans parler des problématiques d’internationalisation et d’encodage en UTF-8 :\n\non est passé de quelques traducteurs à plus d’une vingtaine\non a eu l’obligation de n’avoir absolument rien en anglais dans l’appli\non a du traiter différents formats, fichiers po, fichiers properties et une base de données. Avec des contraintes de format assez évidentes\n\nCe fut rapidement la jungle, des encodages inconnus par native2ascii, des tas de mails à traiter, des conflits de versions, des traductions retraduites plus de 10 fois, perdus, retraduites, et bien sur impossible de les vérifier.\nMalgré un simili process qui s’est établi à l’époque avec plusieurs outils buggé créé pour l’occasion, c’est resté l’enfer (\\*).\nA l’époque j’avais recherché des outils collaboratifs pour la gestion des traductions supportant différents formats de fichiers techniques et je n’avais rien trouvé d’intéressant.\nDu coup l’idée a germé petit à petit de réaliser le mien.\n\nVoilà, les bases sont posées, la suite dans les prochains billets.\n\n(\\*) d'ailleurs je viens de remarquer que cette époque correspond à la création de ce blog et que mes deux premiers billets portent sur le sujet. La boucle est bouclée.\n",readTime:{text:"3 min read",minutes:2.39,time:143400,words:478}},relatedArticles:[{slug:"sortie-de-play-1-2",description:"[![](\u002Fimages\u002Fplay.png \"play\")](http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2011\u002F04\u002Fplay.png)\nJe vous avais déjà parlé de Play dans [un précédent b...",id:"313",title:"Sortie de Play 1.2 !",date:"2011-04-18",tags:[g],img:"play.png",cover:"cover3.jpg",path:"\u002Farticles\u002F2011\u002F04\u002F18\u002Fsortie-de-play-1-2"},{slug:"nemrod-et-play-framework-love-story-nemrod-55",description:"[![](\u002Fimages\u002Flogo-web.png \"logo-web\")](http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2011\u002F10\u002Flogo-web.png) J’ai découvert Play Framework en version 1...",id:"417",title:"Nemrod et Play Framework : love story (Nemrod 5\u002F5)",date:"2011-10-06",tags:["localizeyourapps",n,g],img:o,cover:"cover5.jpg",path:"\u002Farticles\u002F2011\u002F10\u002F06\u002Fnemrod-et-play-framework-love-story-nemrod-55"},{slug:"freelance-salarie-les-chiffres",description:"Il y a quelques temps j'avais proposé [un billet permettant de comparer les statuts EURL\u002Fsalarié et SASU](http:\u002F\u002Fwww.eventuallycoding.com\u002Findex.php\u002Fca...",id:"1109",title:"Freelance \u002F Salarié : les chiffres",date:"2014-09-30",tags:[m,"salaires"],img:r,cover:"cover7.jpg",path:"\u002Farticles\u002F2014\u002F09\u002F30\u002Ffreelance-salarie-les-chiffres"}],_img:{"/_ipx/_/hugo-nb.jpg":"\u002F_nuxt\u002Fimage\u002Fc3e54c.jpg"}}],fetch:{},mutations:void 0}}("text","element","\n","p","li","a","play","nofollow","noopener","noreferrer","_blank","br","freelance","nemrod","logo-web.png","petite-génèse-rapide","Petite génèse rapide","","ul","2022-10-03T11:47:30.165Z")));