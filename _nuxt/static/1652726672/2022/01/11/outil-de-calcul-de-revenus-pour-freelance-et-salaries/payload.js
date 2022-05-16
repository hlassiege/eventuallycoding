__NUXT_JSONP__("/2022/01/11/outil-de-calcul-de-revenus-pour-freelance-et-salaries", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G){return {data:[{article:{slug:"outil-de-calcul-de-revenus-pour-freelance-et-salaries",description:"**TLDR;**\nJe vous mets à disposition une calculette permettant de déterminer vos revenus nets après IR en fonction de si vous êtes en SASU ou EURL. J...",title:"Outil de calcul de revenus pour freelance et salariés",date:"2022-01-11",categories:["waza"],img:"",cover:"cover5.jpg",toc:[{id:v,depth:l,text:w},{id:x,depth:l,text:y},{id:z,depth:l,text:A},{id:B,depth:l,text:C}],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:"TLDR;"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Je vous mets à disposition une calculette permettant de déterminer vos revenus nets après IR en fonction de si vous êtes en SASU ou EURL. Je prévois de rajouter l'EI. J'ai également inclus un onglet salariat pour comparer les taux d'impositions."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Vous pouvez trouver tout cela ici :"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:D,rel:[f,g,h],target:i},children:[{type:a,value:D}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Voilà, vous avez l'essentiel."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Cependant :"}]},{type:a,value:c},{type:b,tag:t,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"si vous avez envie de contribuer pour améliorer ou corriger"}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"si vous trouvez intéressant de comprendre ma démarche"}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"si vous vous demandez la différence avec le simulateur de l'URSSAF"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Je vous invite à lire la suite :)"}]},{type:a,value:c},{type:b,tag:n,props:{id:v},children:[{type:b,tag:e,props:{href:"#lorigine-de-cette-calculette",ariaHidden:o,tabIndex:p},children:[{type:b,tag:q,props:{className:[r,s]},children:[]}]},{type:a,value:w}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Ce billet est une mise à jour d'un ancien billet paru en 2014 sur le même thème :"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Feventuallycoding.com\u002F2014\u002F01\u002F24\u002Fcalculer-ses-revenus-entre-eurl-sasu-et-salariat\u002F",rel:[f,g,h],target:i},children:[{type:a,value:"Calculer ses revenus entre EURL, SASU et salariat"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Il s'est passé 8 ans depuis ce billet (paru également en janvier). J'y distribuais un fichier Google Sheets permettant de déterminer ses revenus nets en fonction du type de société choisi et de certaines options."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Quelques règles ont changé, par exemple la Flat Tax en 2018, et les valeurs prises ont évolué (les taux de cotisations sociales, les tranches d'impot sur le revenu etc...)."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Cependant cela reste un de mes billets les plus lus, j'ai de nombreuses consultations tous les mois dessus et j'étais un peu frustré de laisser ce fichier sans mise à jour et avec quelques erreurs (relevés dans les commentaires)."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Et puis sur Twitter, le coup de grâce"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:E,rel:[f,g,h],target:i},children:[{type:a,value:E}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Il n'était plus possible de laisser ce billet en l'état ! :)"}]},{type:a,value:c},{type:b,tag:n,props:{id:x},children:[{type:b,tag:e,props:{href:"#le-coin-de-la-technique",ariaHidden:o,tabIndex:p},children:[{type:b,tag:q,props:{className:[r,s]},children:[]}]},{type:a,value:y}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Malgré tout :"}]},{type:a,value:c},{type:b,tag:t,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"je reste dev, ce blog s'appelle \"eventually coding\", je pouvais pas garder un fichier Sheets"}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"en 8 ans, personne n'a pu contribuer au fichier Sheets parce que le format n'aide pas trop pour ça"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"J'ai donc décidé d'en faire une appli Javascript."},{type:b,tag:k,props:{},children:[]},{type:a,value:"\nAlors certes, je suis plutôt dev backend et loin d'être spécialiste Javascript mais je trouvais que sortir une application Java ou Kotlin pour ça, c'était un peu ridicule."},{type:b,tag:k,props:{},children:[]},{type:a,value:"\nJ'ai choisi d'utiliser "},{type:b,tag:m,props:{},children:[{type:a,value:"Vue.js"}]},{type:a,value:" 3 avec "},{type:b,tag:m,props:{},children:[{type:a,value:"Bootstrap"}]},{type:a,value:u},{type:b,tag:k,props:{},children:[]},{type:a,value:"\nJe souhaitais minimiser le nombre de dépendances en dehors de ça. Le code reste très simple, peu de dépendances, pas de typescript. D'ailleurs je n'ai même pas inclus bootstrap-vue qui est incompatible avec vue3 pour l'instant."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"J'ai souhaité rester totalement indépendant de la RGPD donc il n'y a aucun cookie tiers. Même si j'aurais aimé inclure un compteur de visite basique ne nécessitant pas de consentement, je n'ai pas trouvé de solutions simples et gratuites pour ça."},{type:b,tag:k,props:{},children:[]},{type:a,value:"\nSi vous notez le temps entre les deux tweets qui m'ont fait réagir, l'application a été faite et déployé sur "},{type:b,tag:m,props:{},children:[{type:a,value:"github-pages"}]},{type:a,value:" en 1 journée (ok je suis sorti de Google Sheets pour aller chez Microsoft Github...). Le plus long étant de rétro ingénieré le fichier Excel ainsi que de trouver les chiffres à jour sur les règles fiscales."},{type:b,tag:k,props:{},children:[]},{type:a,value:"\nPar contre oui, c'est pas très joli, l'ergonomie est discutable et le code est sans doute améliorable mais pour l'ambition qu'il a, cela me satisfait pour l'instant."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Je prévois quelques modifications dans le futur en fonction du temps et de la motivation pour par exemple aider à optimiser automatiquement la répartition en dividendes pour les SASU, ou aider à fixer son TJM en fonction d'un objectif de revenus."}]},{type:a,value:c},{type:b,tag:n,props:{id:z},children:[{type:b,tag:e,props:{href:"#comment-contribuer",ariaHidden:o,tabIndex:p},children:[{type:b,tag:q,props:{className:[r,s]},children:[]}]},{type:a,value:A}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Comme dit plus haut, le code est "},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Fhlassiege\u002Finmypocket",rel:[f,g,h],target:i},children:[{type:a,value:"sous Github"}]},{type:a,value:u}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Les chiffres utilisés pour les taux d'impositions, les tranches etc... sont regroupés dans "},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Fhlassiege\u002Finmypocket\u002Fblob\u002Fmaster\u002Fsrc\u002Fmain.js",rel:[f,g,h],target:i},children:[{type:a,value:"le fichier main.js"}]},{type:a,value:". Tout est sourcé avec la date."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Les détails de calculs par status sont indiqués "},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Fhlassiege\u002Finmypocket\u002Ftree\u002Fmaster\u002Fsrc\u002Fcomponents",rel:[f,g,h],target:i},children:[{type:a,value:"dans les composants associés à chaque status"}]},{type:a,value:u}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Le Readme indique comment lancer l'application en local."}]},{type:a,value:c},{type:b,tag:n,props:{id:B},children:[{type:b,tag:e,props:{href:"#quelle-est-la-diff%C3%A9rence-avec-le-simulateur-de-lurssaf-",ariaHidden:o,tabIndex:p},children:[{type:b,tag:q,props:{className:[r,s]},children:[]}]},{type:a,value:C}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Je vous cache pas, au début une des réponses sur Twitter était :"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:F,rel:[f,g,h],target:i},children:[{type:a,value:F}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Et honte à moi, je connaissais pas. Et j'ai été jouer avec, franchement c'est bien foutu. On peut faire des simulations de revenus nets en fonction des statuts choisis."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Je me suis demandé si mon application était utile dans ces conditions."},{type:b,tag:k,props:{},children:[]},{type:a,value:"\nCependant j'ai également noté que le simulateur prenait le sujet à partir de la rémunération reçue par le dirigeant."}]},{type:a,value:c},{type:b,tag:t,props:{},children:[{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"Cela ne permet pas de jouer avec la répartition en dividendes."}]},{type:a,value:c},{type:b,tag:j,props:{},children:[{type:a,value:"Cela ne permet pas de faire le lien avec le CA de l'entreprise ou de calculer son IS."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Je pense que ça cherche à répondre au sujet d'une autre façon qui est complémentaire et je trouve vraiment que le travail fait dessus est bien (et venant de l'URSSAF c'est vraiment rare pour le souligner)."},{type:b,tag:k,props:{},children:[]},{type:a,value:"\nMais j'ai la sensation que InMyPocket (le nom que j'ai choisi pour la calculette) permet de donner une autre vision du sujet."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"a+"}]}]},dir:"\u002Farticles\u002F2022\u002F01\u002F11",path:"\u002Farticles\u002F2022\u002F01\u002F11\u002Foutil-de-calcul-de-revenus-pour-freelance-et-salaries",extension:".md",createdAt:G,updatedAt:G,bodyPlainText:"\nTLDR;\n\nJe vous mets à disposition une calculette permettant de déterminer vos revenus nets après IR en fonction de si vous êtes en SASU ou EURL. Je prévois de rajouter l'EI. J'ai également inclus un onglet salariat pour comparer les taux d'impositions.\n\nVous pouvez trouver tout cela ici :\n\nhttps:\u002F\u002Fhlassiege.github.io\u002Finmypocket\u002F\n\nVoilà, vous avez l'essentiel.\n\nCependant :\n\nsi vous avez envie de contribuer pour améliorer ou corriger\nsi vous trouvez intéressant de comprendre ma démarche\nsi vous vous demandez la différence avec le simulateur de l'URSSAF\n\nJe vous invite à lire la suite :)\n\nL'origine de cette calculette\n\nCe billet est une mise à jour d'un ancien billet paru en 2014 sur le même thème :\n\nCalculer ses revenus entre EURL, SASU et salariat\n\nIl s'est passé 8 ans depuis ce billet (paru également en janvier). J'y distribuais un fichier Google Sheets permettant de déterminer ses revenus nets en fonction du type de société choisi et de certaines options.\n\nQuelques règles ont changé, par exemple la Flat Tax en 2018, et les valeurs prises ont évolué (les taux de cotisations sociales, les tranches d'impot sur le revenu etc...).\n\nCependant cela reste un de mes billets les plus lus, j'ai de nombreuses consultations tous les mois dessus et j'étais un peu frustré de laisser ce fichier sans mise à jour et avec quelques erreurs (relevés dans les commentaires).\n\nEt puis sur Twitter, le coup de grâce\n\nhttps:\u002F\u002Ftwitter.com\u002FChabertSylvain\u002Fstatus\u002F1479749553339486213\n\nIl n'était plus possible de laisser ce billet en l'état ! :)\n\nLe coin de la technique\n\nMalgré tout :\n\nje reste dev, ce blog s'appelle \"eventually coding\", je pouvais pas garder un fichier Sheets\nen 8 ans, personne n'a pu contribuer au fichier Sheets parce que le format n'aide pas trop pour ça\n\nJ'ai donc décidé d'en faire une appli Javascript.\nAlors certes, je suis plutôt dev backend et loin d'être spécialiste Javascript mais je trouvais que sortir une application Java ou Kotlin pour ça, c'était un peu ridicule.\nJ'ai choisi d'utiliser Vue.js 3 avec Bootstrap.\nJe souhaitais minimiser le nombre de dépendances en dehors de ça. Le code reste très simple, peu de dépendances, pas de typescript. D'ailleurs je n'ai même pas inclus bootstrap-vue qui est incompatible avec vue3 pour l'instant.\n\nJ'ai souhaité rester totalement indépendant de la RGPD donc il n'y a aucun cookie tiers. Même si j'aurais aimé inclure un compteur de visite basique ne nécessitant pas de consentement, je n'ai pas trouvé de solutions simples et gratuites pour ça.\nSi vous notez le temps entre les deux tweets qui m'ont fait réagir, l'application a été faite et déployé sur github-pages en 1 journée (ok je suis sorti de Google Sheets pour aller chez Microsoft Github...). Le plus long étant de rétro ingénieré le fichier Excel ainsi que de trouver les chiffres à jour sur les règles fiscales.\nPar contre oui, c'est pas très joli, l'ergonomie est discutable et le code est sans doute améliorable mais pour l'ambition qu'il a, cela me satisfait pour l'instant.\n\nJe prévois quelques modifications dans le futur en fonction du temps et de la motivation pour par exemple aider à optimiser automatiquement la répartition en dividendes pour les SASU, ou aider à fixer son TJM en fonction d'un objectif de revenus.\n\nComment contribuer\n\nComme dit plus haut, le code est sous Github.\n\nLes chiffres utilisés pour les taux d'impositions, les tranches etc... sont regroupés dans le fichier main.js. Tout est sourcé avec la date.\n\nLes détails de calculs par status sont indiqués dans les composants associés à chaque status.\n\nLe Readme indique comment lancer l'application en local.\n\nQuelle est la différence avec le simulateur de l'URSSAF ?\n\nJe vous cache pas, au début une des réponses sur Twitter était :\n\nhttps:\u002F\u002Ftwitter.com\u002Fflorentpellet\u002Fstatus\u002F1480248355380936708\n\nEt honte à moi, je connaissais pas. Et j'ai été jouer avec, franchement c'est bien foutu. On peut faire des simulations de revenus nets en fonction des statuts choisis.\n\nJe me suis demandé si mon application était utile dans ces conditions.\nCependant j'ai également noté que le simulateur prenait le sujet à partir de la rémunération reçue par le dirigeant.\n\nCela ne permet pas de jouer avec la répartition en dividendes.\nCela ne permet pas de faire le lien avec le CA de l'entreprise ou de calculer son IS.\n\nJe pense que ça cherche à répondre au sujet d'une autre façon qui est complémentaire et je trouve vraiment que le travail fait dessus est bien (et venant de l'URSSAF c'est vraiment rare pour le souligner).\nMais j'ai la sensation que InMyPocket (le nom que j'ai choisi pour la calculette) permet de donner une autre vision du sujet.\n\na+\n",readTime:{text:"4 min read",minutes:3.87,time:232200,words:774}},_img:{"/_ipx/_/hugo-nb.jpg":"\u002F_nuxt\u002Fimage\u002Fc3e54c.jpg"}}],fetch:{},mutations:void 0}}("text","element","\n","p","a","nofollow","noopener","noreferrer","_blank","li","br",2,"strong","h2","true",-1,"span","icon","icon-link","ul",".","lorigine-de-cette-calculette","L'origine de cette calculette","le-coin-de-la-technique","Le coin de la technique","comment-contribuer","Comment contribuer","quelle-est-la-différence-avec-le-simulateur-de-lurssaf-","Quelle est la différence avec le simulateur de l'URSSAF ?","https:\u002F\u002Fhlassiege.github.io\u002Finmypocket\u002F","https:\u002F\u002Ftwitter.com\u002FChabertSylvain\u002Fstatus\u002F1479749553339486213","https:\u002F\u002Ftwitter.com\u002Fflorentpellet\u002Fstatus\u002F1480248355380936708","2022-05-16T18:42:45.623Z")));