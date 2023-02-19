export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A){return {data:{"/articles/2022/04/14/integration-et-dev-web-avec-bulma-vue-js-etc-coderwatch-episode-3":{_path:"\u002Farticles\u002F2022\u002F04\u002F14\u002Fintegration-et-dev-web-avec-bulma-vue-js-etc-coderwatch-episode-3",_dir:"14",_draft:j,_partial:j,_locale:i,_empty:j,title:l,description:"[english version here](https:\u002F\u002Feventuallycoding.com\u002F2022\u002F04\u002F14\u002Fintegration-and-web-development-with-bulma-vue-js-etc-coderwatch-episode-3\u002F)\nParlons u...",id:"2035",date:"2022-04-14",categories:["waza"],tags:["bulma","coderwatch","frontend","product","vuejs"],img:"pasted-image-0.png",cover:"cover4.jpg",readingTime:{text:"8 min read",minutes:7.05,time:423000,words:1410},body:{type:"root",children:[{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{href:"https:\u002F\u002Feventuallycoding.com\u002F2022\u002F04\u002F14\u002Fintegration-and-web-development-with-bulma-vue-js-etc-coderwatch-episode-3\u002F",rel:[e]},children:[{type:b,value:"english version here"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Parlons un peu intégration Web, HTML, CSS et dev Frontend. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Dans ce billet je vais vous détailler les choix d’implémentation de Coderwatch et je me concentrerais uniquement sur le Frontend. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Je vais donc parler choix technologique et frameworks. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour situer le contexte, ce billet s’inscrit dans une mini-série autour de la création d’un side project. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Si vous n’avez pas lu les premier, mon objectif est de décrire l’ensemble des étapes pour la création d’une application relativement simple :"}]},{type:a,tag:c,props:{},children:[{type:a,tag:m,props:{},children:[{type:a,tag:d,props:{href:"http:\u002F\u002Fwww.coderwatch.io\u002F",rel:[e]},children:[{type:b,value:"www.coderwatch.io"}]},{type:b,value:" "},{type:a,tag:n,props:{},children:[{type:b,value:": vous permettant d’apprendre des langages et frameworks informatiques en jouant"}]},{type:b,value:". Je vous propose de passer des quizz, de gagner des points, et progressivement de monter dans le classement face aux autres joueurs tout en améliorant vos connaissances."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Sur chaque billet à partir de maintenant je donnerais aussi un bilan intermédiaire pour dire où en est Coderwatch, le nombre d’utilisateurs et les métriques importantes. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Les billets de cette série :"}]},{type:a,tag:k,props:{},children:[{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{href:"https:\u002F\u002Feventuallycoding.com\u002F2022\u002F04\u002F04\u002Fcest-lhistoire-dun-side-project\u002F",rel:[e]},children:[{type:b,value:"C’est l’histoire d’un side project : cultiver une idée, créer un MVP"}]}]},{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{href:"https:\u002F\u002Feventuallycoding.com\u002F2022\u002F04\u002F08\u002Fcoderwatch-episode-2-design-avec-figma-et-procreate\u002F",rel:[e]},children:[{type:b,value:"Coderwatch : épisode 2 : Design avec Figma et Procreate"}]}]},{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{href:"https:\u002F\u002Feventuallycoding.com\u002F2022\u002F04\u002F14\u002Fintegration-et-dev-web-avec-bulma-vue-js-etc-coderwatch-episode-3\u002F",rel:[e]},children:[{type:b,value:l}]}]},{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{href:"https:\u002F\u002Feventuallycoding.com\u002F2022\u002F05\u002F04\u002Fspring-boot-et-vue-js-coderwatch-episode-4\u002F",rel:[e]},children:[{type:b,value:"Spring Boot et Vue.js - Coderwatch episode 4"}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Dans le billet précédent j’ai créé une maquette avec Figma et désormais il faut se retrousser les manches pour l’intégrer en HTML\u002FCSS. "}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{href:"https:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2022\u002F04\u002Fpasted-image-0.png",rel:[e]},children:[{type:a,tag:o,props:{alt:i,src:"\u002Fimages\u002Fpasted-image-0.png"},children:[]}]}]},{type:a,tag:h,props:{id:p},children:[{type:b,value:q}]},{type:a,tag:c,props:{},children:[{type:b,value:"Déjà un peu de contexte, je suis plutôt développeur Backend et j’ai peu développé mes talents d'intégrateur dans le passé. Alors ce que je vais décrire ici, c’est vraiment la démarche d’un dev Back qui souhaite développer un side project et qui doit faire des compromis entre l’état de l'art et la courbe d’apprentissage."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Car justement, tout l’objectif de ce challenge c’est de toucher à tous les métiers, tout en maîtrisant les coûts et le temps. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour la petite histoire, je suis "},{type:a,tag:d,props:{href:"https:\u002F\u002Fwww.youtube.com\u002Fc\u002FBenjaminCode?app=desktop",rel:[e]},children:[{type:b,value:"la chaîne Youtube de Benjamin Code"}]},{type:b,value:" et il est plutôt partisan de se passer des Frameworks CSS qui ont la fâcheuse tendance à être assez lourds pour parfois peu de plus value, voire même sont contre productifs car ils n’utilisent pas les dernières nouveautés. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Vous pouvez retrouver son argumentaire complet ici : "}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{href:r,rel:[e]},children:[{type:b,value:r}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"J’ai donc tenté d’appliquer son conseil en utilisant "},{type:a,tag:d,props:{href:"https:\u002F\u002Ftailwindcss.com\u002F",rel:[e]},children:[{type:b,value:"tailwindCSS"}]},{type:b,value:" dans un premier temps. C’est un framework qui se distingue des autres car il ne propose que des classes utilitaires, aucun composant. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"C’est d’ailleurs pas tout à fait exact car il existe "},{type:a,tag:d,props:{href:"https:\u002F\u002Ftailwindui.com\u002F",rel:[e]},children:[{type:b,value:"tailwindui.com"}]},{type:b,value:" qui propose des galeries de composants payants. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Mais l’idée de base, c’est qu’on peut tout faire avec juste la librairie d’utilitaires."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour être franc, c’était assez douloureux. C’est assez désagréable de polluer autant son HTML et ça nécessite quelques fondamentaux que je n’avais pas à ce moment-là. Coder le responsive du menu, utiliser les flexbox, tout cela c’était trop pour un démarrage. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"J’ai donc bifurqué assez rapidement."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Cependant, j’ai gardé l’idée de trouver un framework orienté composant assez léger, dont je pourrais importer uniquement ce qui m’intéresse, sans Javascript avec une prise en compte du responsive simple."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et vous savez quoi ? Il en existe beaucoup et les tester tous, ça peut rapidement devenir un gouffre temporel !"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Cependant, j’ai abouti sur "},{type:a,tag:d,props:{href:"https:\u002F\u002Fbulma.io\u002F",rel:[e]},children:[{type:b,value:"Bulma"}]},{type:b,value:" :"}]},{type:a,tag:k,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:"aucun Javascript inclus"}]},{type:a,tag:f,props:{},children:[{type:b,value:"modulaire"}]},{type:a,tag:f,props:{},children:[{type:b,value:"possède des composants"}]},{type:a,tag:f,props:{},children:[{type:b,value:"fait pour être customisé par un système intelligent "},{type:a,tag:d,props:{href:"https:\u002F\u002Fbulma.io\u002Fdocumentation\u002Fcustomize\u002Fvariables\u002F",rel:[e]},children:[{type:b,value:"de variables"}]}]},{type:a,tag:f,props:{},children:[{type:b,value:"possède un grand nombre de classes utilitaires"}]}]},{type:a,tag:h,props:{id:s},children:[{type:b,value:t}]},{type:a,tag:c,props:{},children:[{type:b,value:"Dans l’idéal, pour un SAAS, le meilleur setup de dev selon moi c’est un front fait avec un framework JS et un back qui ne sert que des APIs. C’est pas toujours possible pour des raisons de SEO et j’y reviendrai dans un futur billet dédié au SEO. Mais pour Coderwatch, ça me semblait totalement adapté."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Le choix de Vue.js était assez naturel pour moi. J’aurais pu certes aller regarder du côté de React, Solid ou Svelte, mais on utilise déjà Vue.js chez Malt et vraiment sans aucun regret. Le framework est très puissant, très facile à prendre en main et avec une forte communauté en ligne pour trouver de l’aide."}]},{type:a,tag:c,props:{},children:[{type:b,value:"J’ai cependant hésité avec Nuxt.js qui est une surcouche de Vue3 avec un support du développement côté Backend et des fonctionnalités avancées comme le server side rendering. Cependant, envisager le dev backend en Javascript ne me plaisait pas trop. J’y reviendrai dans le futur billet sur le dev Backend."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Avec Vue.js j’utilise"}]},{type:a,tag:c,props:{},children:[{type:b,value:u},{type:a,tag:d,props:{href:"https:\u002F\u002Frouter.vuejs.org\u002F",rel:[e]},children:[{type:b,value:"vue-router"}]},{type:b,value:" pour le routage des pages"}]},{type:a,tag:c,props:{},children:[{type:b,value:u},{type:a,tag:d,props:{href:"https:\u002F\u002Fpinia.vuejs.org\u002F",rel:[e]},children:[{type:b,value:"Pinia"}]},{type:b,value:" pour la gestion d’un state management, j’avais cependant démarré avec vuex au départ"}]},{type:a,tag:h,props:{id:v},children:[{type:b,value:w}]},{type:a,tag:c,props:{},children:[{type:b,value:" Je vais peut-être faire bondir des experts JS sur ce point, mais pour un non spécialiste, le build est une douleur sans nom à prendre en main."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Déjà il existe une multitude d’outils dans chaque catégorie :"}]},{type:a,tag:k,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:"package manager : npm, pnpm, yarn"}]},{type:a,tag:f,props:{},children:[{type:b,value:"tooling (?) : webpack, gulp, vite, parcel etc…"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Beaucoup d’outils ont des overlaps, certains sont parfois utilisés ensemble. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et quand on cherche de la doc en ligne, c’est un enfer car on trouve toujours de la doc soit sur la mauvaise version et qui ne fonctionne pas, soit de la doc avec la mauvaise combinaison d’outil, soit avec un autre outil. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour illustrer, j’ai démarré a un moment ou vuejs a changé de version majeure officielle. J’ai démarré avec une config qui a changé officiellement la semaine suivante. Mettre à niveau et trouver la bonne documentation a été une purge."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Autre exemple, je n’ai pas configuré le support de Typescript au début. Je me suis dit que ce serait simple à rajouter par la suite. J’ai finalement mis 2 semaines à batailler dans une branche de travail pour réussir à faire fonctionner Typescript."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et je ne parle pas du nombre de fois où il faut lutter pour comprendre pourquoi un "},{type:a,tag:m,props:{},children:[{type:b,value:"npm install"}]},{type:b,value:" ne marche pas, lié à une librairie en conflit. C’est un travail manuel d’aller comprendre la version attendue par l’une et l’autre des librairies en question."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Personnellement je viens du monde Java avec un outil qui, selon moi, a changé radicalement les choses en 2004 : Maven."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Maven est venu en remplacement de Ant et il propose un standard de build. Ant permet de tout faire avec énormément de souplesse (comme Gradle aujourd’hui ?) mais au détriment d’une standardisation."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Quand un dev passe d’un projet maven à un autre, même avec plusieurs versions d’écart, il retrouve toujours ses billes. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"De loin, avec un oeil novice, Javascript souffre d’avoir des outils très puissants, mais trop nombreux, avec des versions montantes qui très souvent ne sont pas compatibles, avec tellement de souplesse que ça en devient très complexe de trouver la bonne configuration au début mais surtout c’est un enfer à faire évoluer."}]},{type:a,tag:h,props:{id:x},children:[{type:b,value:y}]},{type:a,tag:c,props:{},children:[{type:b,value:"J’aurais sans doute pas dit ça il y a quelques années mais en fin de compte j’ai vraiment apprécié cette phase d’intégration HTML\u002FCSS."}]},{type:a,tag:c,props:{},children:[{type:b,value:"J’ai appris beaucoup de choses sur le système de flexbox, sur les clippath, sur la modularisation de mes composants, les animations CSS, le positionnement etc… "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Cette phase a duré environ "},{type:a,tag:n,props:{},children:[{type:b,value:"une semaine"}]},{type:b,value:" (toujours en mode soir et week-end) pour une vingtaine de pages. À la fin de cette semaine je me sentais beaucoup plus à l’aise et j'avais envie de progresser davantage. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Si on oublie les outils de build, c’était vraiment plaisant de bosser sur cette partie, de construire des pages et des parcours et de voir progressivement le résultat apparaître."}]},{type:a,tag:h,props:{id:z},children:[{type:b,value:A}]},{type:a,tag:c,props:{},children:[{type:b,value:"Le lancement officiel remonte à 2 semaines. Le nombre de joueurs est de 33 et a connu une augmentation ce jour-là avec le premier article de cette série. Cependant le rythme de nouveaux utilisateurs est assez faible."}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{href:"https:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2022\u002F04\u002Fpasted-image-0-8.png",rel:[e]},children:[{type:a,tag:o,props:{alt:i,src:"\u002Fimages\u002Fpasted-image-0-8-1024x508.png"},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Le nombre de quizz joués est de 39, ce qui implique que plusieurs joueurs n’ont joué qu’une seule fois sans revenir. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Aucun utilisateur n’est venu via un parrainage et seule 3 questions ont été créées par des joueurs."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Bref, pour l’instant le jeu n’a attiré quasiment que des followers curieux et on ne peut pas dire qu’il ait trouvé son product market fit. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Mais ce n’est certainement pas à cette étape qu’il faut laisser tomber, l’inverse aurait été une trop bonne surprise. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Trois utilisateurs m’ont fait des retours précis et intéressants de leurs parcours et je note quelques éléments limitants pour faire correctement découvrir le jeu dans les premiers moments de l’inscription. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"La question sur laquelle je vais devoir trancher dorénavant c’est : est ce que je dois me concentrer sur l’amélioration du jeu pour transformer les utilisateurs actuels en joueurs réguliers et faire en sorte qu’ils en fassent la promotion, ou bien est ce que je dois me concentrer sur l’acquisition de trafic. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Wait and see."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Merci de m’avoir lu jusque là. La semaine prochaine je serais à Devoxx pour donner "},{type:a,tag:d,props:{href:"https:\u002F\u002Fcfp.devoxx.fr\u002F2022\u002Ftalk\u002FTBG-5289\u002FDevelopp(eur%7Ceuse)_Senior_avec_6_ans_d%E2%80%99experience,_et_apres_%3F",rel:[e]},children:[{type:b,value:"un talk sur l’impact, le leadership et les carrières techs"}]},{type:b,value:" donc je n’écrirais sans doute aucun billet. Mais le billet suivant de cette série portera sur le dev Backend."}]},{type:a,tag:c,props:{},children:[{type:b,value:"A bientôt"}]}],toc:{title:i,searchDepth:g,depth:g,links:[{id:p,depth:g,text:q},{id:s,depth:g,text:t},{id:v,depth:g,text:w},{id:x,depth:g,text:y},{id:z,depth:g,text:A}]}},_type:"markdown",_id:"content:articles:2022:04:14:integration-et-dev-web-avec-bulma-vue-js-etc-coderwatch-episode-3.md",_source:"content",_file:"articles\u002F2022\u002F04\u002F14\u002Fintegration-et-dev-web-avec-bulma-vue-js-etc-coderwatch-episode-3.md",_extension:"md"},"/articles/2022/04/14/integration-et-dev-web-avec-bulma-vue-js-etc-coderwatch-episode-3/relatedArticles":[]},prerenderedAt:1676822111031}}("element","text","p","a","nofollow","li",2,"h2","",false,"ul","Intégration et dev web avec Bulma, Vue.js etc... - Coderwatch episode 3","em","strong","img","intégration-htmlcss-avec-ou-sans-framework","Intégration HTML\u002FCSS, avec ou sans framework ?","https:\u002F\u002Fwww.youtube.com\u002Fwatch?v=77hwpuVHGps","une-single-page-application-avec-vuejs","Une single page application avec Vue.js","- ","le-build-point-noir-dune-stack-javascript","Le build, point noir d’une stack javascript","bilan-personnel-positif-en-intégration-web","Bilan personnel positif en intégration Web","les-chiffres-de-la-semaine-sur-coderwatch","Les chiffres de la semaine sur Coderwatch"))