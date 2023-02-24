export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){return {data:{"/articles/2022/01/11/outil-de-calcul-de-revenus-pour-freelance-et-salaries":{_path:"\u002Farticles\u002F2022\u002F01\u002F11\u002Foutil-de-calcul-de-revenus-pour-freelance-et-salaries",_dir:"11",_draft:k,_partial:k,_locale:l,_empty:k,title:"Outil de calcul de revenus pour freelance et salariés",description:"**TLDR;**\nJe vous mets à disposition une calculette permettant de déterminer vos revenus nets après IR en fonction de si vous êtes en SASU ou EURL. J...",id:"1897",date:"2022-01-11",categories:["waza"],tags:["freelance","salaires"],img:l,cover:"cover6.jpg",readingTime:{text:"4 min read",minutes:3.585,time:215100,words:717},body:{type:"root",children:[{type:a,tag:c,props:{},children:[{type:a,tag:i,props:{},children:[{type:b,value:"TLDR;"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Je vous mets à disposition une calculette permettant de déterminer vos revenus nets après IR en fonction de si vous êtes en SASU ou EURL. Je prévois de rajouter l'EI. J'ai également inclus un onglet salariat pour comparer les taux d'impositions."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Vous pouvez trouver tout cela ici :"}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{href:o,rel:[e]},children:[{type:b,value:o}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Voilà, vous avez l'essentiel."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Cependant :"}]},{type:a,tag:m,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:"si vous avez envie de contribuer pour améliorer ou corriger"}]},{type:a,tag:f,props:{},children:[{type:b,value:"si vous trouvez intéressant de comprendre ma démarche"}]},{type:a,tag:f,props:{},children:[{type:b,value:"si vous vous demandez la différence avec le simulateur de l'URSSAF"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Je vous invite à lire la suite :)"}]},{type:a,tag:j,props:{id:p},children:[{type:b,value:q}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ce billet est une mise à jour d'un ancien billet paru en 2014 sur le même thème :"}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{href:"https:\u002F\u002Feventuallycoding.com\u002F2014\u002F01\u002F24\u002Fcalculer-ses-revenus-entre-eurl-sasu-et-salariat\u002F",rel:[e]},children:[{type:b,value:"Calculer ses revenus entre EURL, SASU et salariat"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Il s'est passé 8 ans depuis ce billet (paru également en janvier). J'y distribuais un fichier Google Sheets permettant de déterminer ses revenus nets en fonction du type de société choisi et de certaines options."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Quelques règles ont changé, par exemple la Flat Tax en 2018, et les valeurs prises ont évolué (les taux de cotisations sociales, les tranches d'impot sur le revenu etc...)."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Cependant cela reste un de mes billets les plus lus, j'ai de nombreuses consultations tous les mois dessus et j'étais un peu frustré de laisser ce fichier sans mise à jour et avec quelques erreurs (relevés dans les commentaires)."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et puis sur Twitter, le coup de grâce"}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{href:r,rel:[e]},children:[{type:b,value:r}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Il n'était plus possible de laisser ce billet en l'état ! :)"}]},{type:a,tag:j,props:{id:s},children:[{type:b,value:t}]},{type:a,tag:c,props:{},children:[{type:b,value:"Malgré tout :"}]},{type:a,tag:m,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:"je reste dev, ce blog s'appelle \"eventually coding\", je pouvais pas garder un fichier Sheets"}]},{type:a,tag:f,props:{},children:[{type:b,value:"en 8 ans, personne n'a pu contribuer au fichier Sheets parce que le format n'aide pas trop pour ça"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"J'ai donc décidé d'en faire une appli Javascript."},{type:a,tag:g,props:{},children:[]},{type:b,value:"\nAlors certes, je suis plutôt dev backend et loin d'être spécialiste Javascript mais je trouvais que sortir une application Java ou Kotlin pour ça, c'était un peu ridicule."},{type:a,tag:g,props:{},children:[]},{type:b,value:"\nJ'ai choisi d'utiliser "},{type:a,tag:i,props:{},children:[{type:b,value:"Vue.js"}]},{type:b,value:" 3 avec "},{type:a,tag:i,props:{},children:[{type:b,value:"Bootstrap"}]},{type:b,value:n},{type:a,tag:g,props:{},children:[]},{type:b,value:"\nJe souhaitais minimiser le nombre de dépendances en dehors de ça. Le code reste très simple, peu de dépendances, pas de typescript. D'ailleurs je n'ai même pas inclus bootstrap-vue qui est incompatible avec vue3 pour l'instant."}]},{type:a,tag:c,props:{},children:[{type:b,value:"J'ai souhaité rester totalement indépendant de la RGPD donc il n'y a aucun cookie tiers. Même si j'aurais aimé inclure un compteur de visite basique ne nécessitant pas de consentement, je n'ai pas trouvé de solutions simples et gratuites pour ça."},{type:a,tag:g,props:{},children:[]},{type:b,value:"\nSi vous notez le temps entre les deux tweets qui m'ont fait réagir, l'application a été faite et déployé sur "},{type:a,tag:i,props:{},children:[{type:b,value:"github-pages"}]},{type:b,value:" en 1 journée (ok je suis sorti de Google Sheets pour aller chez Microsoft Github...). Le plus long étant de rétro ingénieré le fichier Excel ainsi que de trouver les chiffres à jour sur les règles fiscales."},{type:a,tag:g,props:{},children:[]},{type:b,value:"\nPar contre oui, c'est pas très joli, l'ergonomie est discutable et le code est sans doute améliorable mais pour l'ambition qu'il a, cela me satisfait pour l'instant."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Je prévois quelques modifications dans le futur en fonction du temps et de la motivation pour par exemple aider à optimiser automatiquement la répartition en dividendes pour les SASU, ou aider à fixer son TJM en fonction d'un objectif de revenus."}]},{type:a,tag:j,props:{id:u},children:[{type:b,value:v}]},{type:a,tag:c,props:{},children:[{type:b,value:"Comme dit plus haut, le code est "},{type:a,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Fhlassiege\u002Finmypocket",rel:[e]},children:[{type:b,value:"sous Github"}]},{type:b,value:n}]},{type:a,tag:c,props:{},children:[{type:b,value:"Les chiffres utilisés pour les taux d'impositions, les tranches etc... sont regroupés dans "},{type:a,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Fhlassiege\u002Finmypocket\u002Fblob\u002Fmaster\u002Fsrc\u002Fmain.js",rel:[e]},children:[{type:b,value:"le fichier main.js"}]},{type:b,value:". Tout est sourcé avec la date."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Les détails de calculs par status sont indiqués "},{type:a,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Fhlassiege\u002Finmypocket\u002Ftree\u002Fmaster\u002Fsrc\u002Fcomponents",rel:[e]},children:[{type:b,value:"dans les composants associés à chaque status"}]},{type:b,value:n}]},{type:a,tag:c,props:{},children:[{type:b,value:"Le Readme indique comment lancer l'application en local."}]},{type:a,tag:j,props:{id:w},children:[{type:b,value:x}]},{type:a,tag:c,props:{},children:[{type:b,value:"Je vous cache pas, au début une des réponses sur Twitter était :"}]},{type:a,tag:c,props:{},children:[{type:a,tag:d,props:{href:y,rel:[e]},children:[{type:b,value:y}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et honte à moi, je connaissais pas. Et j'ai été jouer avec, franchement c'est bien foutu. On peut faire des simulations de revenus nets en fonction des statuts choisis."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Je me suis demandé si mon application était utile dans ces conditions."},{type:a,tag:g,props:{},children:[]},{type:b,value:"\nCependant j'ai également noté que le simulateur prenait le sujet à partir de la rémunération reçue par le dirigeant."}]},{type:a,tag:m,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:"Cela ne permet pas de jouer avec la répartition en dividendes."}]},{type:a,tag:f,props:{},children:[{type:b,value:"Cela ne permet pas de faire le lien avec le CA de l'entreprise ou de calculer son IS."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Je pense que ça cherche à répondre au sujet d'une autre façon qui est complémentaire et je trouve vraiment que le travail fait dessus est bien (et venant de l'URSSAF c'est vraiment rare pour le souligner)."},{type:a,tag:g,props:{},children:[]},{type:b,value:"\nMais j'ai la sensation que InMyPocket (le nom que j'ai choisi pour la calculette) permet de donner une autre vision du sujet."}]},{type:a,tag:c,props:{},children:[{type:b,value:"a+"}]}],toc:{title:l,searchDepth:h,depth:h,links:[{id:p,depth:h,text:q},{id:s,depth:h,text:t},{id:u,depth:h,text:v},{id:w,depth:h,text:x}]}},_type:"markdown",_id:"content:articles:2022:01:11:outil-de-calcul-de-revenus-pour-freelance-et-salaries.md",_source:"content",_file:"articles\u002F2022\u002F01\u002F11\u002Foutil-de-calcul-de-revenus-pour-freelance-et-salaries.md",_extension:"md"}},prerenderedAt:1677253376924}}("element","text","p","a","nofollow","li","br",2,"strong","h2",false,"","ul",".","https:\u002F\u002Fhlassiege.github.io\u002Finmypocket\u002F","lorigine-de-cette-calculette","L'origine de cette calculette","https:\u002F\u002Ftwitter.com\u002FChabertSylvain\u002Fstatus\u002F1479749553339486213","le-coin-de-la-technique","Le coin de la technique","comment-contribuer","Comment contribuer","quelle-est-la-différence-avec-le-simulateur-de-lurssaf","Quelle est la différence avec le simulateur de l'URSSAF ?","https:\u002F\u002Ftwitter.com\u002Fflorentpellet\u002Fstatus\u002F1480248355380936708"))