export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V){return {data:{"/articles/2023/10/planning-efficient-teams":{_path:"\u002Farticles\u002F2023\u002F10\u002Fplanning-efficient-teams",_dir:"10",_draft:o,_partial:o,_locale:r,_empty:o,title:"Planning et impact",description:"Comment gère-t-on la planification dans les équipes efficaces. Comment notre manière de planifier modifie notre capacité à créer de l'impact.",id:"26",date:"2023-10-22",tags:["planning","impact","product","engineering"],cover:"planning.jpg",book:"impactfulSoftwareEngineering",language:"fr",alternates:[{en:"https:\u002F\u002Feventuallycoding.com\u002Fen\u002F2023\u002F10\u002Fplanning-efficient-teams"}],readingTime:{text:"17 min read",minutes:16.035,time:962100,words:3207},body:{type:"root",children:[{type:a,tag:c,props:{},children:[{type:b,value:"Quand on parle de créer de l’impact, une équipe Engineering a deux responsabilités, participer à la "},{type:a,tag:e,props:{},children:[{type:b,value:"discovery"}]},{type:b,value:", l’identification des opportunités qui vont permettre de contribuer positivement aux revenus de l’entreprise et le "},{type:a,tag:e,props:{},children:[{type:b,value:"delivery"}]},{type:b,value:", la faculté à produire des solutions pour répondre à ces opportunités."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Les deux sont indissociables, une excellente équipe en delivery ou en discovery mais moyenne sur l’autre partie aura un impact plus limité qu’une équipe qui fait correctement les deux."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Une équipe qui serait médiocre sur son delivery ou sa discovery risque même d’avoir un impact négatif."}]},{type:a,tag:c,props:{},children:[{type:b,value:"J’aimerais m’attarder sur un point important du delivery, la planification."}]},{type:a,tag:j,props:{id:s},children:[{type:b,value:t}]},{type:a,tag:c,props:{},children:[{type:b,value:"L’Engineering est responsable du delivery. Cela regroupe l’ensemble de l’activité consistant à mettre à disposition un nouveau produit ou l’amélioration d’un produit existant."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Évidemment par l’ensemble de l’activité, j’entends le développement, mais pas seulement, ce sont les tests, la documentation, l’industrialisation (les fameux reliability, security, scalability, performance)."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Une équipe efficace, c’est donc une équipe capable de réaliser un développement, mais aussi de le mettre à disposition, et cela, avec des contraintes : une contrainte de temps ou une contrainte de budget, le fameux "},{type:a,tag:f,props:{href:"https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FProject_management_triangle",rel:[g]},children:[{type:b,value:"triangle de gestion de projet"}]},{type:b,value:k}]},{type:a,tag:c,props:{},children:[{type:b,value:"Mais, ce qui caractérise aussi une équipe efficace, c'est sa capacité à planifier ces incréments dans le temps."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ces itérations ne vivent pas indépendamment les unes des autres, et surtout le produit ne vit pas en isolation d’autres équipes."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Par exemple, un plan de communication général peut être prévu pour accompagner la sortie d’une innovation."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ou bien le département légal à une obligation à respecter à une date fixe etc…"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Bref, on a des "},{type:a,tag:e,props:{},children:[{type:b,value:"dépendances"}]},{type:b,value:" entre plusieurs équipes et donc des "},{type:a,tag:e,props:{},children:[{type:b,value:"contraintes supplémentaires"}]},{type:b,value:", ce qui augmente l’importance des dates."}]},{type:a,tag:c,props:{},children:[{type:b,value:"À partir de là, on commence à toucher du doigt un sujet sensible dans l’informatique : la "},{type:a,tag:e,props:{},children:[{type:b,value:"prédictibilité"}]},{type:b,value:" et donc la planification."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Mais avant d’aller plus loin sur le sujet de la prédictibilité, faisons déjà la différence entre un projet et un produit parce qu’on n'aborde pas la notion de prédictibilité de la même façon dans les deux cas."}]},{type:a,tag:j,props:{id:u},children:[{type:b,value:v}]},{type:a,tag:c,props:{},children:[{type:b,value:"Un "},{type:a,tag:e,props:{},children:[{type:b,value:"projet"}]},{type:b,value:" démarre lorsqu’on a une solution définie pour un problème donné. Cette solution est fixée par des contraintes fortes sur le “scope”, c'est-à-dire quel service il faut rendre."}]},{type:a,tag:c,props:{},children:[{type:b,value:"La solution, le comment, est donc :"}]},{type:a,tag:h,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"soit fixé en amont par une contrainte externe, un besoin client, une contrainte légale"}]},{type:a,tag:d,props:{},children:[{type:b,value:"soit fixé de façon top down par des décideurs internes"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Exemples de projet :"}]},{type:a,tag:h,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"la mise en place de la conformité au RGPD en 2018"}]},{type:a,tag:d,props:{},children:[{type:b,value:"une certification ISO 27001"}]},{type:a,tag:d,props:{},children:[{type:b,value:"l’ouverture d’un nouveau marché"}]},{type:a,tag:d,props:{},children:[{type:b,value:"le début d’un partenariat"}]},{type:a,tag:d,props:{},children:[{type:b,value:"une mise à jour d’un composant technique de l’application"}]},{type:a,tag:d,props:{},children:[{type:b,value:"l’intégration de votre produit avec un ERP"}]},{type:a,tag:d,props:{},children:[{type:b,value:"etc…"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Dans tous les cas précédents, la solution est définie. Tout l’enjeu, c’est la capacité à mener le projet à terme."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ça ne veut pas dire que tout est gravé dans le marbre, on peut avoir des adaptations, mais globalement le chemin est balisé et il y a peu d’innovations à attendre."}]},{type:a,tag:c,props:{},children:[{type:b,value:"À l’inverse, lorsqu’on travaille pour un "},{type:a,tag:e,props:{},children:[{type:b,value:"produit"}]},{type:b,value:", les solutions ne sont pas définies. "},{type:a,tag:e,props:{},children:[{type:b,value:"Mais"}]},{type:b,value:" les "},{type:a,tag:e,props:{},children:[{type:b,value:"objectifs"}]},{type:b,value:" sont définis."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Par exemple, une équipe Produit va chercher à améliorer l’acquisition de nouveaux utilisateurs, ou leur rétention, ou leur capacité à dépenser plus etc…"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Il y a ici une différence fondamentale entre le fait d’être dans une entreprise qui fait du produit et une entreprise qui fonctionne par projets."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Les deux ne vont pas chercher le même type de prédictibilité et ne vont pas planifier de la même façon."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Dans un cas, on va chercher à prédire le temps de réalisation d’une liste de features. Dans l’autre, on va chercher à anticiper le résultat d’initiatives sur un objectif business."}]},{type:a,tag:c,props:{},children:[{type:b,value:"La différence est parfois subtile. En effet, une équipe Produit peut donner l’apparence de mener des projets. Elle peut par exemple décider d’implémenter la feature X pour atteindre le résultat Y."}]},{type:a,tag:c,props:{},children:[{type:b,value:"La subtilité réside dans le fait que l’équipe produit réalise la feature X pour obtenir un résultat Y et continuera de travailler en ce sens tant que le résultat attendu ne sera pas atteint."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Cette subtilité est importante :"}]},{type:a,tag:h,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"Un petit bout de la feature X peut être suffisant pour réaliser l’objectif et l’équipe peut décider de se contenter d’une solution partielle."}]},{type:a,tag:d,props:{},children:[{type:b,value:"Si le résultat n’est pas atteint, l’équipe peut décider de supprimer totalement ce qui a été testé."}]},{type:a,tag:d,props:{},children:[{type:b,value:"L’équipe peut découvrir en cours de chemin qu’une autre feature Z serait plus utile pour atteindre le résultat et implémenter une solution différente de celle envisagée initialement."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"À noter que Marty Cagan "},{type:a,tag:f,props:{href:w,rel:[g]},children:[{type:b,value:"utilise un autre vocabulaire"}]},{type:b,value:" et parle de “"},{type:a,tag:e,props:{},children:[{type:b,value:"Features teams\u002FDelivery teams"}]},{type:b,value:"” en opposition aux “"},{type:a,tag:e,props:{},children:[{type:b,value:"Impact Teams"}]},{type:b,value:"” pour parler respectivement des équipes Projets et des équipes Produits."}]},{type:a,tag:l,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"Une équipe Produit a bien entendu aussi des projets à gérer. Les exemples donnés plus haut peuvent s'appliquer dans le cadre d'une équipe Produit."}]}]},{type:a,tag:j,props:{id:x},children:[{type:b,value:y}]},{type:a,tag:c,props:{},children:[{type:b,value:"Entendons-nous bien, c’est tout à fait possible de travailler majoritairement sur des projets définis à l’avance et guidés par des dates fixes."}]},{type:a,tag:c,props:{},children:[{type:b,value:"C’est, par exemple, ce que font toutes les agences (agences de conseil, ESN, agences web) et c’est normal."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Le quotidien en agence, c’est de s’engager sur des besoins clients, négocier un scope à produire sur une date fixe."}]},{type:a,tag:c,props:{},children:[{type:b,value:"C’est un exercice très difficile. Les meilleures agences vendent très cher leur méthodologie de conduite de projet."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Le pool de personnes disponible est constamment en mouvement, il faut anticiper pour les assigner aux différents projets qui arrivent."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour réussir à correctement planifier un projet et ses dépendances, il y a un travail phénoménal pour lister l’ensemble des tâches d’un projet, estimer le temps de réalisation de chacune d’entre elles, mobilisant des dizaines de personnes au passage, matérialiser les dépendances sous forme de diagramme de Gantt, bref, faire du capacity planning."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Une personne absente, un impondérable technologique, bref un seul grain de sable et tout peut déraper. Ainsi ces méthodologies vont lister les risques et les mitiger, en doublant les personnes nécessaires, en travaillant sur des plans de secours etc…"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et pour montrer à quel point c’est complexe, le "},{type:a,tag:f,props:{href:z,rel:[g]},children:[{type:b,value:"“Standish Group Chaos report” continue de mesurer année après année"}]},{type:b,value:" que seuls 30% des projets IT sont livrés en respectant le délai et le budget, tandis que 20% de ces projets sont des échecs complets. Ce à quoi je rajouterais que je serais curieux de savoir sur ces 30% de projets réussis lesquels ont eu l’impact business escompté au démarrage."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Parce que, si cette phase de préparation et le temps nécessaire pour coordonner l’ensemble coûte très cher, c’est surtout hautement casse-gueule. Prédire la valeur business d’une fonctionnalité à l’avance est illusoire, prédire que ce sera toujours le plus important à faire dans 6 mois est très optimiste et estimer le temps de réalisation est au mieux un mirage."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Dans une optique “projets”, le plus gros défaut, c'est que c’est orienté output (fonctionnalités), pas outcome (résultats). Donc même si l’objectif n’est pas atteint, on passe à la suite. Ce qu’on célèbre ici, c'est d’avoir sorti x ou y, mais sans que ce soit bénéfique à l’entreprise qui a acheté cette prestation."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Les intérêts de l’agence et de l’entreprise cible ne sont pas forcément les mêmes."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour ma part, j'écris cet e-book pour les équipes Produit et les meilleures équipes Produit fonctionnent différemment donc je ne m’attarderai pas sur les techniques nécessaires pour faire fonctionner une équipe qui travaille majoritairement en mode “agence” (ou en mode "},{type:a,tag:e,props:{},children:[{type:b,value:"delivery team"}]},{type:b,value:" selon les termes utilisés par Marty Cagan)."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour une entreprise Produit, célébrer la fin du projet X alors que l’objectif business sous-jacent n’est pas rempli n’a aucun sens."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Autant il est simple de “prévoir” que le projet de mise en conformité GDPR va nous mettre en conformité, autant prédire que le projet de feature Y va "},{type:a,tag:e,props:{},children:[{type:b,value:"effectivement"}]},{type:b,value:", augmenter les résultats financiers de Z% est une illusion."}]},{type:a,tag:c,props:{},children:[{type:b,value:"A l’opposé, une entreprise Produit va constamment tester des hypothèses, appliquer, mesurer et itérer pour satisfaire un objectif donné."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Autrement dit, les entreprises Produit à succès se concentrent surtout sur la production de résultats versus la liste des fonctionnalités implémentées avec succès."}]},{type:a,tag:l,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"Attention, la différence entre une culture Produit et une culture projet est très forte. Pendant le recrutement, c’est une chose à garder en tête lorsque vous participez à l’embauche de personnes venant d’agences (conseil etc…). Vous pouvez bien sûr trouver d’excellentes personnes pour vous rejoindre, mais vous devez veiller à bien expliquer votre culture. Il y a un fort travail pédagogique à faire pour que ces personnes ne cherchent pas à tendre vers ce mode projet. La culture produit, qui mène à régulièrement tester et itérer, peut leur paraître trop chaotique et ils chercheront à apporter des méthodes “classiques” de gestion de projet pour apporter plus de prédictibilité."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Tout cela nous amène à parler de l’un des outils les plus clivants et qui focalise tous les conflits : la "},{type:a,tag:e,props:{},children:[{type:b,value:"Roadmap"}]},{type:b,value:k}]},{type:a,tag:j,props:{id:A},children:[{type:b,value:B}]},{type:a,tag:c,props:{},children:[{type:b,value:"La feuille de route en bon français, est un outil de communication destiné à montrer la stratégie mise en place."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Beaucoup d’équipes utilisent pour cela une représentation sous forme de longue liste de fonctionnalités avec leurs dates de réalisation sur un axe horizontal."}]},{type:a,tag:p,props:{},children:[{type:a,tag:c,props:{},children:[{type:a,tag:q,props:{alt:"Timeline traditionnelle avec une liste de dates associées à des fonctionnalités",src:"\u002Fimages\u002Froadmap-timeline.jpg"},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"C’est l’outil parfait pour les équipes orientées projets, mais c’est très loin de ce qu’utilisent les meilleures équipes Produit."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Comme dit plus haut, c’est très présomptueux de penser prévoir les impacts sur les revenus à partir d’une liste de fonctionnalités annuelles et cela enlève toute possibilité à l’équipe produit de maximiser son impact."}]},{type:a,tag:c,props:{},children:[{type:b,value:"C’est pourquoi il y a d’autres approches, notamment "},{type:a,tag:f,props:{href:C,rel:[g]},children:[{type:b,value:"celle décrite par Janna Bastow"}]},{type:b,value:" qui propose de le remplacer par des listes d’objectifs (OKR ou autre), eux-mêmes compartimenté en trois horizons de temps : "},{type:a,tag:f,props:{href:D,rel:[g]},children:[{type:b,value:"next, now, later"}]}]},{type:a,tag:p,props:{},children:[{type:a,tag:c,props:{},children:[{type:a,tag:q,props:{alt:"Exemple de roadmap now next later, issu du blog de Janna Bastow",src:"\u002Fimages\u002Fnownextlater.jpg"},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Exemple issu du blog de Janna Bastow"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Janna Bastow, comme "},{type:a,tag:f,props:{href:E,rel:[g]},children:[{type:b,value:"Marty Cagan dans cette vidéo"}]},{type:b,value:", insiste sur le fait qu’une roadmap reste nécessaire et est un indispensable outil de communication qu’il faut construire. C’est la matérialisation de la stratégie produit. Cependant, cela ne doit pas être une liste de features avec des dates de releases, mais une liste d’objectifs, avec des horizons de temps."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour anticiper la question, oui il est possible d’avoir un objectif dans Later sur lequel on a déjà raccroché un ensemble d’initiatives. C’est un extrait de votre “"},{type:a,tag:f,props:{href:"https:\u002F\u002Fwww.producttalk.org\u002Fopportunity-solution-tree\u002F",rel:[g]},children:[{type:b,value:"Arbre d’opportunité"}]},{type:b,value:"”."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Exemple :"}]},{type:a,tag:h,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"Objectif : Augmenter l’acquisition d’utilisateurs de 20% en s’appuyant sur la base existante par viralité"}]},{type:a,tag:d,props:{},children:[{type:b,value:"initiatives :"},{type:a,tag:h,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"développer un programme de referal"}]},{type:a,tag:d,props:{},children:[{type:b,value:"faire des partenariats avec des influenceurs sur les réseaux sociaux"}]},{type:a,tag:d,props:{},children:[{type:b,value:"développer des programmes d’affiliation"}]}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Mais à la différence d’une roadmap qui listerait ces features, ces initiatives “Later” peuvent être modifiées, supprimées, d’autres peuvent être ajoutées pour remplir le même objectif."}]},{type:a,tag:c,props:{},children:[{type:b,value:"L’objectif lui-même sera peut-être dépriorisé dans 12 mois."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Si vous êtes en “"},{type:a,tag:f,props:{href:"https:\u002F\u002Fwww.amazon.com\u002FContinuous-Discovery-Habits-Discover-Products\u002Fdp\u002F1736633309?",rel:[g]},children:[{type:a,tag:e,props:{},children:[{type:b,value:"continuous discovery"}]}]},{type:b,value:"”, vous allez tester des hypothèses pendant les prochains mois pour valider la pertinence de tel ou tel objectif, et telle ou telle initiative."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Un Product Leader aura ici deux défis très importants à gérer :"}]},{type:a,tag:h,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"Il faut être en mesure de savoir détailler sa stratégie now next later en donnant des horizons de temps tout en évitant de s’engager sur une liste de fonctionnalités. C’est bien plus difficile qu’on ne le croit. Au sein d’une équipe Engineering et également à l’échelle de l’entreprise, il est plus facile de parler du futur lancement de la feature F que de remplir l’objectif O"}]},{type:a,tag:d,props:{},children:[{type:b,value:"Certaines personnes dans votre entreprise vont parfois pousser pour avoir un engagement ferme sur des initiatives listées dans votre plan Now Next Later"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Avoir une roadmap complètement construite sur des engagements fermes pour différents décideurs internes, c’est ce qui caractérise une feature team (à l’inverse d’une impact team). C’est limitant en termes d’impact, ça ne garantit pas un quelconque succès pour le business."}]},{type:a,tag:j,props:{id:F},children:[{type:b,value:G}]},{type:a,tag:c,props:{},children:[{type:b,value:"Les équipes Produit qui ont le plus d'impact travaillent en continuous discovery et n'utilisent pas de roadmap à base de listes de features associées à des dates."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Mais est-ce qu'il faut en conclure que toutes les dates sont néfastes ?"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ce serait très caricatural d'aboutir à cette conclusion."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Déjà une stratégie Produit s'appuie sur des horizons de temps. Ces horizons de temps ont une temporalité définie par les impératifs business de l'entreprise."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Par exemple, résoudre le sujet de l'acquisition de nouveaux utilisateurs dans les 3 prochains mois peut être vital pour l'entreprise. Ici il y a bien une contrainte temporelle forte."},{type:a,tag:H,props:{},children:[]},{type:b,value:"\nEn tant que Product Leader vous devez constamment être conscient de ces contraintes externes. Vous devez aller chercher cette information si elle n'est pas donnée pour comprendre les enjeux business de l'entreprise."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ensuite une initiative produit spécifique peut être liée à une stratégie plus globale. Lorsqu'on définit des objectifs (par exemple des OKR) au niveau d'une entreprise, on fait en sorte de coordonner un effort commun (sales, marketing, produit, support client etc...) dans une direction donnée et un horizon de temps donné. L'absence de temporalité, c'est l'absence de coordination."}]},{type:a,tag:c,props:{},children:[{type:b,value:"La temporalité est une contrainte, et comme je le disais dans un précédent chapitre, les contraintes "},{type:a,tag:f,props:{href:"https:\u002F\u002Feventuallycoding.com\u002F2022\u002F09\u002Ftravailler-avec-contraintes",rel:[g]},children:[{type:b,value:"sont bénéfiques pour stimuler l'innovation"}]},{type:b,value:k}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour reprendre un extrait du livre Rework que je citais déjà dans ce billet"}]},{type:a,tag:"blockquote",props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"Send people home at 5"}]},{type:a,tag:c,props:{},children:[{type:b,value:"When people have something to do at home, they get down to business. They get their work done at the office because they have somewhere else to be. They find ways to be more efficient because they have to. They need to pick up the kids or get to choir practice. So they use their time wisely"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Un horizon de temps, c’est la garantie qu’on sait poser des objectifs et trouver des solutions pour y parvenir dans un temps compatible avec le business de l’entreprise et la santé de l’équipe."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour être plus concret, penser qu’utiliser un tableau kanban et prioriser au fil de l’eau est une méthode de gestion de produit efficace est sans doute l’une des erreurs les plus communes que je peux observer. C’est un très bon outil de gestion de projet, mais à aucun moment un outil de gestion de produit."}]},{type:a,tag:j,props:{id:I},children:[{type:b,value:J}]},{type:a,tag:c,props:{},children:[{type:b,value:"Comme vu plus haut, savoir précisément le temps à passer sur un futur développement coûte très cher. En caricaturant, ce n’est possible qu’en réalisant ce développement “à blanc” pour ensuite le refaire."}]},{type:a,tag:c,props:{},children:[{type:b,value:"L’exercice est donc réalisable, mais à un coût élevé. "},{type:a,tag:e,props:{},children:[{type:b,value:"C’est ce coût que l’on va essayer de limiter"}]},{type:b,value:" avec les points suivants."}]},{type:a,tag:l,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"Attention, il y a une relation directe entre les raccourcis pris pour faire cette prédiction et la qualité de celle-ci. La question étant, "},{type:a,tag:e,props:{},children:[{type:b,value:"quelle est la marge d’erreur que vous acceptez d’avoir"}]},{type:b,value:" ?"}]}]},{type:a,tag:m,props:{id:K},children:[{type:b,value:L}]},{type:a,tag:c,props:{},children:[{type:b,value:"Le framework “Now, Next, Later” que nous avons vu plus haut permet de regrouper les opportunités, à explorer selon 3 grands ensembles :"}]},{type:a,tag:h,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"now : ce qui est actuellement en cours"}]},{type:a,tag:d,props:{},children:[{type:b,value:"next : ce que l’on prévoit de faire juste après"}]},{type:a,tag:d,props:{},children:[{type:b,value:"later : ce qui "},{type:a,tag:"u",props:{},children:[{type:b,value:"pourrait"}]},{type:b,value:" être fait par la suite"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et ce que nous n’allons certainement pas faire c’est tenter de définir chaque item à moyen et long terme dans le détail pour estimer le temps à passer dessus."}]},{type:a,tag:c,props:{},children:[{type:b,value:"L’objectif, c’est de ne détailler précisément que ce qui est proche dans le temps. La technologie peut changer, les objectifs peuvent être redéfinis. Définir exactement le temps passé dans 12 mois sur un objectif X n’a aucun sens et sera certainement du temps perdu."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Dans “Now”, à l’inverse, on aura travaillé sur les maquettes, les éventuels prototypes, la définition des flux."}]},{type:a,tag:p,props:{},children:[{type:a,tag:c,props:{},children:[{type:a,tag:q,props:{alt:"Niveau de définition en fonction de court terme ou long terme",src:"\u002Fimages\u002Ftimehorizons.jpg"},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Issu du blog de Janna Bastow"}]},{type:a,tag:m,props:{id:M},children:[{type:b,value:N}]},{type:a,tag:c,props:{},children:[{type:b,value:"Les estimations sont un sujet sensible qui ne fait pas l’unanimité. Là-dessus, je ne suis pas sûr de pouvoir affirmer que l'ensemble des équipes efficaces utilisent telle ou telle approche. Pour ma part je suis plutôt proche du mouvement noestimates dans le sens où je ne fais aucune séance de poker planning pour dimensionner le travail à faire à la tâche près."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour autant, cette approche est souvent associée à Kanban. Et comme je l'indiquais plus haut, c'est une méthode de gestion de projet, pas de gestion de produit.\nPrioriser, anticiper, planifier reste nécessaire, sans pour autant devoir passer 4h de sprint planning toutes les deux semaines !! "},{type:a,tag:"em",props:{},children:[{type:b,value:"(Oui, j'ai vécu ça déjà)"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"J’utilise donc trois méthodes :"}]},{type:a,tag:h,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"je reste à la maille la plus haute, user story par exemple. Il n'y a aucun intérêt à estimer plus finement que ça."}]},{type:a,tag:d,props:{},children:[{type:b,value:"je cherche un proxy me permettant de comparer un élément avec un autre"}]},{type:a,tag:d,props:{},children:[{type:b,value:"je me constitue un référentiel de comparaison"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Par exemple, je peux estimer que la complexité d’une tâche A est équivalente à celle d’une tâche B que j’ai réalisée dans le passé."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ou alors, lorsque je modifie un composant pour une amélioration technologique, je peux regarder la taille de ce composant et le comparer avec un composant de même taille."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Cette méthode a bien sûr des limitations :"}]},{type:a,tag:h,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"Il faut avoir déjà réalisé des chantiers similaires pour pouvoir utiliser ces comparaisons. Mais on peut se reposer sur des comparaisons faites dans une autre entreprise"}]},{type:a,tag:d,props:{},children:[{type:b,value:"le proxy sera toujours imparfait et on aura donc une marge d’erreur plus ou moins importante"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Je parlais de découpage plus haut. Ce découpage va être influencé par ma méthode de travail."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Si la fonctionnalité A peut être découpée en user stories B, C et D. Je ferais en sorte de découper ces user stories de façon à ce qu’elles aient une complexité relativement proche et donc prendre à priori le même temps."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Dans Now, je vais donc avoir un découpage fin. Ce ne sera pas le cas dans Next et Later."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Le temps total est la somme du nombre de User Stories multiplié par le temps moyen sur une user story. Et tant pis si à la maille d'une user story c'est faux. Ce qui m'intéresse, c'est d'avoir une estimation globale."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Dans Next et Later, je ne ferais pas ce découpage ou bien très grossier. Mais ce sera suffisant pour les comparer avec d’autres réalisations faites dans le passé, par exemple sur la complexité perçue."}]},{type:a,tag:m,props:{id:O},children:[{type:b,value:P}]},{type:a,tag:c,props:{},children:[{type:b,value:"Si je ne préconise pas de perdre son temps sur des estimations précises, je considère qu’ouvrir le débat sur la complexité d’une initiative est nécessaire. Tout Product leaders a connu ces moments où deux personnes très seniors ont des estimations de temps radicalement différentes pour une initiative donnée."}]},{type:a,tag:c,props:{},children:[{type:b,value:"En discutant, ces deux personnes finissent par comprendre qu’il s’agit d’une différence de compréhension du problème initial."}]},{type:a,tag:m,props:{id:Q},children:[{type:b,value:R}]},{type:a,tag:c,props:{},children:[{type:b,value:"Lorsqu’une équipe reste stable dans le temps, elle bénéficie d’une meilleure cohésion, peut engager des chantiers d’amélioration continue et acquiert une meilleure connaissance du produit. Et pour toutes ces raisons, l’équipe sera aussi plus précise sur sa capacité à comparer et donc estimer le travail à faire."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Concernant les dépendances, plus elles sont nombreuses, plus le temps passé sur une tâche peut varier de façon importante. Une dépendance c’est par exemple le fait de s’appuyer sur une autre équipe pour travailler sur un objectif."}]},{type:a,tag:c,props:{},children:[{type:b,value:"C’est pourquoi on essaiera au maximum de travailler avec une équipe pluridisciplinaire pour ne pas dépendre d’une autre équipe."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Exit les équipes front et les équipes back par exemple. Ou les équipes constituées par projet"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Par contre, et c’est provocateur volontairement, n’ayez pas peur des silos."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Les silos permettent aux équipes d’être rapides. La plus grande difficulté, c’est de construire ces silos pour leur permettre d’être autonome, d'où la pluridisciplinarité mentionnée ci-dessus."}]},{type:a,tag:c,props:{},children:[{type:b,value:"La seconde difficulté, c’est d’être en mesure de leur fournir le contexte nécessaire "},{type:a,tag:f,props:{href:"https:\u002F\u002Feventuallycoding.com\u002F2023\u002F05\u002Falignment-autonomy-context",rel:[g]},children:[{type:b,value:"à un bon alignement"}]},{type:b,value:", mais ce n’est pas le sujet de ce chapitre."}]},{type:a,tag:j,props:{id:S},children:[{type:b,value:T}]},{type:a,tag:c,props:{},children:[{type:b,value:"Avez-vous une roadmap qui reflète votre stratégie ?"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Quelle forme a votre roadmap ?"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Est-ce que vous faites des séances d’estimations à la tâche pour chaque sprint ?"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Si oui, quel est le temps passé sur l’exercice versus le temps du sprint et trouvez-vous que cela apporte de la valeur ?"}]},{type:a,tag:j,props:{id:U},children:[{type:b,value:V}]},{type:a,tag:h,props:{},children:[{type:a,tag:d,props:{},children:[{type:a,tag:f,props:{href:w,rel:[g]},children:[{type:b,value:"Impact teams vs feature teams"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:f,props:{href:z,rel:[g]},children:[{type:b,value:"Le rapport du standish group sur les échecs de projet"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:f,props:{href:D,rel:[g]},children:[{type:b,value:"Les roadmaps now next later"}]}]},{type:a,tag:d,props:{},children:[{type:b,value:"Janna Bastow "},{type:a,tag:f,props:{href:C,rel:[g]},children:[{type:b,value:"on roadmap"}]},{type:b,value:" and "},{type:a,tag:f,props:{href:"https:\u002F\u002Fwww.mindtheproduct.com\u002Ffree-your-product-roadmap-and-ditch-the-timeline\u002F",rel:[g]},children:[{type:b,value:"the follow up blog post"}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:f,props:{href:E,rel:[g]},children:[{type:b,value:"Marty Cagan on roadmap"}]}]}]},{type:a,tag:l,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"Ce billet de blog fait partie du livre "},{type:a,tag:f,props:{href:"\u002F2023\u002F02\u002Fimpactful-software-engineering"},children:[{type:b,value:"Impactful Software Engineering"}]},{type:b,value:k},{type:a,tag:H,props:{},children:[]},{type:b,value:"\nN'hésitez pas à lire les autres chapitres."}]}]}],toc:{title:r,searchDepth:i,depth:i,links:[{id:s,depth:i,text:t},{id:u,depth:i,text:v},{id:x,depth:i,text:y},{id:A,depth:i,text:B},{id:F,depth:i,text:G},{id:I,depth:i,text:J,children:[{id:K,depth:n,text:L},{id:M,depth:n,text:N},{id:O,depth:n,text:P},{id:Q,depth:n,text:R}]},{id:S,depth:i,text:T},{id:U,depth:i,text:V}]}},_type:"markdown",_id:"content:articles:2023:10:planning-efficient-teams.md",_source:"content",_file:"articles\u002F2023\u002F10\u002Fplanning-efficient-teams.md",_extension:"md"}},prerenderedAt:1699706367038}}("element","text","p","li","strong","a","nofollow","ul",2,"h2",".","tip","h3",3,false,"image","img","","le-delivery-un-enjeu-de-prédictibilité","Le delivery : un enjeu de prédictibilité","équipes-projets-et-produits-cherchent-à-prédire-des-choses-différentes","Équipes projets et produits cherchent à prédire des choses différentes","https:\u002F\u002Fwww.svpg.com\u002Fproduct-vs-feature-teams\u002F","agences-versus-entreprises-produit","Agences versus entreprises Produit","https:\u002F\u002Fbrainhub.eu\u002Flibrary\u002Freasons-for-it-project-failure","la-roadmap-cristallisation-des-différences-entre-produit-et-projet","La roadmap, cristallisation des différences entre Produit et Projet","https:\u002F\u002Ftwitter.com\u002Fsimplybastow\u002Fstatus\u002F1168531672335343616","https:\u002F\u002Fwww.prodpad.com\u002Fblog\u002Finvented-now-next-later-roadmap\u002F","https:\u002F\u002Fwww.youtube.com\u002Fwatch?v=sgRYEVRD_4w","les-dates-sont-elles-néfastes","Les dates sont-elles néfastes ?","br","et-les-estimations","Et les estimations ?","now-next-later","Now, Next, Later","trouver-des-proxy","Trouver des proxy","estimer-la-complexité-est-surtout-un-moyen-de-clarifier","Estimer la complexité est surtout un moyen de clarifier","stabilité-et-dépendances","Stabilité et dépendances","questions","Questions","ressources","Ressources"))