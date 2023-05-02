export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_){return {data:{"/articles/2023/02/measuring-everything":{_path:"\u002Farticles\u002F2023\u002F02\u002Fmeasuring-everything",_dir:"02",_draft:n,_partial:n,_locale:q,_empty:n,title:"Tout mesurer",description:"Sans mesure, tout se fait à l'intuition. Et pourtant, la maturité de votre équipe Engineering repose sur sa capacité à prendre des décisions étayées par les données.",id:"13",date:"2023-02-19",tags:["impact","senior","measures"],cover:"opticien.jpg",book:"impactfulSoftwareEngineering",language:"fr",alternates:[{en:"https:\u002F\u002Feventuallycoding.com\u002Fen\u002F2023\u002F02\u002Fmeasuring-everything"}],readingTime:{text:"14 min read",minutes:13.82,time:829200,words:2764},body:{type:"root",children:[{type:a,tag:r,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"You can't improve what you don't measure"},{type:a,tag:i,props:{},children:[]},{type:a,tag:f,props:{href:"https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FPeter_Drucker",rel:[g]},children:[{type:b,value:"Peter Drucker"}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Imaginez cette scène, un individu entre chez un opticien :"}]},{type:a,tag:r,props:{},children:[{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"Bonjour, je pense être myope, je souhaite des lunettes pour traiter ma myopie"}]},{type:a,tag:d,props:{},children:[{type:b,value:"Bien sûr, asseyez-vous, je pense vous proposer des lunettes avec une correction de 3 à gauche et 2 à droite"}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"C'est absurde et vous n'avez sans doute jamais assisté à cela."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et pourtant, en développement logiciel, combien de fois avez-vous vu les situations suivantes :"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"un refactoring majeur sans aucune mesure d'impact"}]},{type:a,tag:d,props:{},children:[{type:b,value:"un travail massif sur l'élasticité d'une infra sans capacity planning"}]},{type:a,tag:d,props:{},children:[{type:b,value:"des micro optimisations de performance sans avoir mesuré ladite performance au préalable"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"D'ailleurs, si vous avez des exemples à partager, n'hésitez pas à répondre sur ce fil Twitter :"}]},{type:a,tag:c,props:{},children:[{type:a,tag:f,props:{href:s,rel:[g]},children:[{type:b,value:s}]}]},{type:a,tag:j,props:{id:t},children:[{type:b,value:u}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ce sujet nécessite beaucoup de pincettes alors je vais essayer d'apporter le maximum de nuances."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Loin de moi l'idée de dire qu'il ne faut pas améliorer constamment le code. Vous ne devez pas avoir à remplir des dossiers de plusieurs pages pour les justifier. Et vous ne voulez pas tomber dans l'"},{type:a,tag:f,props:{href:"https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FAnalysis_paralysis",rel:[g]},children:[{type:b,value:"analysis paralysis"}]},{type:b,value:".\nPour tous les petits refactorings autour de la testabilité ou la lisibilité, la validation en Peer review est un mécanisme suffisant de validation dans bien des cas."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Je vais aussi exclure le cas des startups en amorçage. Je suis passé par cette étape. L'intuition joue énormément. La base de code est petite, le produit est encore assez simple pour l'appréhender dans son ensemble. A ce stade, ça passe où ça casse et de toute façon la vitesse d'exécution est primordiale et, comme nous le verrons plus loin, pour avoir une maturité sur la donnée suffisante il y a de l'investissement à faire."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Mais, à partir du moment où :"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"les impacts sur la base de code commencent à être significatif, souvent quand l'équipe produit dépasse une certaine taille (\u003E20?)"}]},{type:a,tag:d,props:{},children:[{type:b,value:"qu'ils nécessitent plus d'une personne pour être traité"}]},{type:a,tag:d,props:{},children:[{type:b,value:"qu'ils vont décaler largement le reste du travail en cours"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Mesurer les choses va permettre de lever toute ambiguïté."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Mon point, c'est de dire que vous devez composer avec des ressources finies, notamment une : "},{type:a,tag:k,props:{},children:[{type:b,value:"le temps"}]},{type:b,value:" (et l'argent qui est un résultat de vos choix d'investissement).\nQuand vous le consommez, vous devez le faire en connaissance de cause et de préférence avec un objectif en tête. Vous devez savoir ce que vous sacrifiez, et pour faire ces choix, soit la somme de temps dépensé est négligeable, soit je vous conseille de rationaliser votre démarche. Et non, travailler le soir ou le week-end n'est pas une option viable. Vous devez avant tout chercher à être efficace."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Tiens, d'ailleurs, j'excluais plus haut les petits refactorings. Eh bien malgré tout, c'est un sujet intéressant. Livrons-nous à un petit exercice théorique."},{type:a,tag:i,props:{},children:[]},{type:b,value:"\nQuelle que soit la taille d'une entreprise, imaginez que vous avez un nombre fini de frappes sur le clavier disponible par semaine. Fixons ce chiffre arbitrairement à 10 000.\nSi un refactoring mineur vous fait consommer 10 frappes, on peut se dire que c'est ok.\nMais si votre base de code est très large, il faut peut-être répliquer ce changement et cela peut coûter 1000 frappes, vous venez de consommer 10% de votre capital de frappe sur la semaine. Ce sera peut-être au détriment d'un autre refactoring qui avait plus d'impacts négatifs, ou d'un décalage sur un développement en cours.\nDonc à un moment, vous devez faire un choix. J'ai un nombre de frappes limité, à quel endroit dois-je utiliser cette énergie ?\nOn parle de gain en lisibilité. Est-ce avéré ? Est-ce mesurable ? Par une mesure sur votre CI peut être ? Est-ce un bout de code régulièrement modifié ou autre contraire très stable. Il y a un gain en consommations de ressources ? C'est mesurable ?"}]},{type:a,tag:j,props:{id:v},children:[{type:b,value:w}]},{type:a,tag:c,props:{},children:[{type:b,value:"Mais surtout, si vous n'avez pas de mesures, même le succès est non démontrable.\nSans mesures avant\u002Faprès, rien ne dit qu'une action a été bénéfique, et si elle l'a été, de quel ordre de grandeur."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Or, votre métier comporte une part importante de discussion avec de nombreuses personnes qui ont toutes pour objectif que l'entreprise utilise au mieux ces ressources pour le bénéfice de ces clients, et in fine son propre bénéfice."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Votre rôle en tant que Senior Software engineer c'est d'être présent dans ces discussions, car l'Engineering a un rôle majeur à jouer dans la réussite de l'entreprise. Une partie de votre métier, c'est de savoir vulgariser, défendre des investissements (en temps, en argent etc…). Oui, même quand on n'est pas manager…"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Sans mesures, vous ne pouvez pas fixer d'objectifs."},{type:a,tag:i,props:{},children:[]},{type:b,value:"\nSans objectifs, vous ne pouvez pas fixer de critères de succès."},{type:a,tag:i,props:{},children:[]},{type:b,value:"\nSans objectifs, vous ne pouvez pas créer d'alignement."},{type:a,tag:i,props:{},children:[]},{type:b,value:"\nSans alignement il n'y a pas d'impact."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Une équipe produit qui ne produit pas d'impact est moins écoutée, et finit par être en danger de sous-investissement. Et en vrai, tout le monde finit perdant dans l'histoire."}]},{type:a,tag:j,props:{id:x},children:[{type:b,value:y}]},{type:a,tag:c,props:{},children:[{type:b,value:"Notre métier est un métier scientifique et l'un des principaux piliers de la culture scientifique, c'est la mesure."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Cette mesure s'inscrit dans une démarche scientifique."}]},{type:a,tag:c,props:{},children:[{type:b,value:"On entend souvent parler de 10x developer et j'ai personnellement travaillé avec des personnes qui effectivement sont terriblement plus productives que d'autres.\nCe n'est pas leur vitesse de frappe sur le clavier qui les rends si productives, "},{type:a,tag:k,props:{},children:[{type:b,value:"c'est leur capacité à appliquer une démarche systématique pour résoudre un problème"}]},{type:b,value:z},{type:a,tag:i,props:{},children:[]},{type:b,value:"\nEt ça s'apprend."}]},{type:a,tag:c,props:{},children:[{type:b,value:"L'approche peut se résumer comme suit :"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"écouter, observer, mesurer"}]},{type:a,tag:d,props:{},children:[{type:b,value:"formuler des hypothèses"}]},{type:a,tag:d,props:{},children:[{type:b,value:"fixer des objectifs et aligner l'équipe autour de ces objectifs"}]},{type:a,tag:d,props:{},children:[{type:b,value:"tester"}]},{type:a,tag:d,props:{},children:[{type:b,value:"recommencer depuis la première étape"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Exemple :"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"Ecouter : Des utilisateurs se plaignent de la lenteur d'une page de paiement qui mettrait du temps à s'afficher"}]},{type:a,tag:d,props:{},children:[{type:b,value:"Mesurer : Les outils de mesures montrent qu'effectivement"},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"une part importante des utilisateurs dépassent les 10 secondes d'affichages, tandis que d'autres affichent la page en moins d'une seconde"}]},{type:a,tag:d,props:{},children:[{type:b,value:"ces utilisateurs finissent par abandonner leur achat ce qui se traduit par une perte de xk€ potentiels"}]}]}]},{type:a,tag:d,props:{},children:[{type:b,value:"Hypothèse : une ressource est sous-dimensionnée. La performance serait ok sous une certaine charge mais s'écroulerait à partir d'un certain seuil"}]},{type:a,tag:d,props:{},children:[{type:b,value:"Objectif : Viser un P95 (95% des utilisateurs) en dessous de la seconde d'affichage et regagner yk€ de CA"}]},{type:a,tag:d,props:{},children:[{type:b,value:"Action :"},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"Mesurer l'ensemble de la chaîne via des flame graphs avec des bots pour simuler un trafic croissant pour identifier les différents blocages"}]},{type:a,tag:d,props:{},children:[{type:b,value:"réaliser les actions correctrices nécessaires à corriger les plus gros points de blocages qui causent 95% des ralentissements"}]}]}]},{type:a,tag:d,props:{},children:[{type:b,value:"tester, valider en situation réelle"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"A chaque fois qu'on aborde un sujet, même quand c'est un cas inconnu, une section de l'application qu'on ne connaît pas, une techno qu'on ne connait pas etc.. Si on applique une démarche méthodique, on finit par y arriver."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Bien sûr, la vitesse de résolution va dépendre de votre connaissance initiale et de votre savoir faire. Le fait de maîtriser certains outils de diagnostique ou de devoir vous faire assister va vous ralentir ou vous accélérer, mais c'est la méthode qui doit vous guider et cette méthode s'appuie sur ces trois piliers :"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"observations\u002Fmesures"}]},{type:a,tag:d,props:{},children:[{type:b,value:"hypothèses"}]},{type:a,tag:d,props:{},children:[{type:b,value:"validation\u002Finvalidation"}]}]},{type:a,tag:j,props:{id:A},children:[{type:b,value:B}]},{type:a,tag:c,props:{},children:[{type:b,value:"Je vous invite à lire ce thread twitter de Mary, SRE chez Microsoft :"}]},{type:a,tag:c,props:{},children:[{type:a,tag:f,props:{href:C,rel:[g]},children:[{type:b,value:C}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"La Data est clairement ici utilisée de façon "},{type:a,tag:k,props:{},children:[{type:b,value:"systématique"}]},{type:b,value:" pour travailler. Ce n'est pas juste anecdotique, c'est un critère de maturité de l'équipe engineering, et de l'entreprise sans doute."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et ça ne s'improvise pas. Avoir la bonne donnée sous la main au bon moment nécessite de la préparation. Pouvoir la croiser avec d'autres données pour établir des corrélations nécessite une infrastructure de collectes et de visualisation données."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Chez Malt nous avons fait beaucoup d'efforts pour que la Data soit disponible, corrélable et accessible simplement."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Par exemple :"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"notre documentation interne utilise un outil d'analytique pour comprendre quelles sont les pages les plus lues, les moins lues"}]},{type:a,tag:d,props:{},children:[{type:b,value:"nous utilisons datadog pour agréger toutes les données de monitoring, performance, alerting"}]},{type:a,tag:d,props:{},children:[{type:b,value:"nous stockons tous les évènements métiers dans BigQuery pour reconstruire ensuite des vues analytiques et juger du succès de notre produit"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et si je vous parle de tout ça, c'est parce que c'est votre rôle de tech lead de faire grandir la maturité de votre entreprise sur le sujet."},{type:a,tag:i,props:{},children:[]},{type:b,value:"\nC'est votre responsabilité d'avoir une vision fine du coût de votre produit et de son ROI. C'est votre capacité à comprendre les enjeux financiers qui va vous permettre aussi de faire des recommandations et de faire des choix d'investissements sur du Buy or Build."}]},{type:a,tag:j,props:{id:D},children:[{type:b,value:E}]},{type:a,tag:c,props:{},children:[{type:b,value:"Une fois qu'on a dit qu'il fallait systématiser l'accès à la donnée et son usage, c'est bien, mais je vous propose de découvrir un modèle d'évaluation de maturité pour mieux comprendre où vous en êtes, et où vous pourriez aller."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Des modèles il en existe plusieurs, IBM, Gartner ou Snowplow par exemple. Ici je vous propose de voir celui de "},{type:a,tag:f,props:{href:o,rel:[g]},children:[{type:b,value:"Gartner"}]},{type:b,value:", mais que nous allons adapter ici pour l'engineering et le produit."}]},{type:a,tag:l,props:{id:F},children:[{type:b,value:G}]},{type:a,tag:c,props:{},children:[{type:b,value:"C'est la pire situation. Aucune donnée n'est utilisée. Côté engineering il n'existe pas de mécanisme de collectes (monitoring, APM), et forcément pas de mécanisme d'agrégation et consolidation (observabilité). Aucun outillage spécifique n'est utilisé pour les tests de performances. Aucune métrique de mesure de la performance de l'engineering n'est suivie, DORA\u002Faccelerate etc…"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Côté produit idem, le produit n'est pas instrumenté (tracking analytics). Les objectifs sont tous qualitatifs, on vise à sortir des fonctionnalités mais sans avoir d'éléments de mesures sur leur usage. Aucune KPI clé n'est suivie (funnel de conversion, churn, activation etc…)"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Les actions ici sont assez évidentes, il faut former toute l'équipe à l'importance de la donnée et mettre en place les outils de collectes de mesures."}]},{type:a,tag:l,props:{id:H},children:[{type:b,value:I}]},{type:a,tag:c,props:{},children:[{type:b,value:"A cette étape, certains outils de collecte existent mais sans avoir de personnes dont c'est la responsabilité pour les surveiller. La qualité de la donnée est donc discutable.\nOn peut par exemple collecter des logs mais sans avoir d'agrégation dans un système distribué, ou ne pas avoir de politique claire de niveau de logs et donc avoir beaucoup de données non exploitables.\nIl peut y avoir plusieurs sources de données, parfois contradictoires."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Sporadiquement certaines données sont utilisées malgré tout.\nCôté produit c'est identique, le tracking peut être en place mais non suivi, aucun plan de tracking, aucun funnel réellement monitoré."}]},{type:a,tag:c,props:{},children:[{type:b,value:"L'action ici c'est de commencer à nommer des responsables (ça peut être des équipes) pour améliorer la qualité des données. Une stratégie globale doit commencer à être réfléchie.\nExemple :"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"c'est quoi les niveaux de logs applicatifs, pour quel type d'actions, quel détails"}]},{type:a,tag:d,props:{},children:[{type:b,value:"comment traiter les logs dans un système distribuée, comment mettre en place une corrélation entre une requête web, les logs applicatifs et logs DB ou systèmes"}]},{type:a,tag:d,props:{},children:[{type:b,value:"comment suivre un funnel avec un parcours utilisateur, comment corréler le web analytique et les données métiers"}]}]},{type:a,tag:l,props:{id:J},children:[{type:b,value:K}]},{type:a,tag:c,props:{},children:[{type:b,value:"La donnée est ici utilisée de façon plus régulière mais surtout en réaction.\nDes stratégies ont été mises en place mais l'adoption reste légère.\nL'alerting n'est toujours pas en place ou efficace."}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"il remonte des faux positifs (exemple sonar mal configuré)"}]},{type:a,tag:d,props:{},children:[{type:b,value:"ou trop d'alertes, qui finissent par être masqué pour ne plus déranger"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Côté produit, on monitore les principales KPI et on sait où aller chercher l'info. Malgré tout, on ne suit pas l'information régulièrement, on change souvent de définition. La qualité reste perfectible.\nIl y a malgré tout quelques équipes qui commencent à avoir un usage plus important et qui partagent cette donnée."}]},{type:a,tag:l,props:{id:L},children:[{type:b,value:M}]},{type:a,tag:c,props:{},children:[{type:b,value:"A cette étape, il y a des responsables clairs et actifs sur les outils de collectes et les sources de données.\nLes stratégies sont en place (niveaux de logs, niveaux d'alertes, SLA\u002FSLO\u002FSLI)\nSi on entame des chantiers de refactoring, d'amélioration de performance, de scalabilité, la donnée est centrale dans la prise de décision."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Côté produit, chaque nouveau projet pense à la mise en place de métriques de succès dès le démarrage, cela fait partie des conditions de démarrage.\nPar contre cela reste interne aux équipes engineering et product, ces données ne sont pas encore utilisées à grande échelle dans l'entreprise. Voire même d'autres métriques sont utilisées dans d'autres départements pour représenter la même chose. Ce sera la prochaine étape."}]},{type:a,tag:l,props:{id:N},children:[{type:b,value:O}]},{type:a,tag:c,props:{},children:[{type:b,value:"Cette fois, l'importance de la donnée et sa qualité est reconnue dans toute l'entreprise mais surtout elle est considérée comme critique."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Les métriques engineering sont communiquées et connues au niveau le plus haut (comité exécutifs). Les post mortems sont partagés en dehors de l'équipe engineering lors d'incidents.\nOn sait relier les coûts d'opérations du produit avec le business (coût nominal d'un user en termes de ressources machines par exemple, coût nominal d'un user sur sa durée de vie etc…) et c'est utilisé dans les exercices budgétaires pour calculer des projections de croissance.\nOn utilise des métriques reconnues comme best practices sur le marché : DORA, temps de cycle etc…"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Au niveau produit de la même façon, les données sont communiquées à toute l'entreprise. Les objectifs de l'équipe produit sont matérialisés par des objectifs chiffrés (augmentation de la conversion, diminution du churn etc…)."}]},{type:a,tag:l,props:{id:P},children:[{type:b,value:Q}]},{type:a,tag:c,props:{},children:[{type:b,value:"La Data est utilisée de façon globale, dans l'entreprise, la qualité est contrôlée, la gouvernance est formalisée.\nLa donnée est utilisée à l'extérieur. Elle peut donner un avantage compétitif dans certains cas."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Au niveau engineering, on publie des engagements de service (SLA publics), on peut mettre à disposition des pages de status détaillées avec le niveau de stabilité du produit par brique logicielle, par exemple : défaillance en cours sur le paiement par CB, statut ok sur le moteur de recherche etc… On peut préciser des temps de rétablissements ou publier des posts mortems."}]},{type:a,tag:c,props:{},children:[{type:b,value:"D'un point de vue produit, c'est lié au métier de l'entreprise. Par exemple, la publication de données en open Data peut procurer un avantage à la marque."}]},{type:a,tag:j,props:{id:R},children:[{type:b,value:S}]},{type:a,tag:c,props:{},children:[{type:b,value:"Prenons un exemple concret pour illustrer comment utiliser la mesure et une démarche scientifique sur un sujet classique : l'architecture fonctionnelle."}]},{type:a,tag:c,props:{},children:[{type:a,tag:k,props:{},children:[{type:b,value:"Contexte"}]},{type:b,value:" : Malt en 2022\nScale-up, 600 personnes, 100 à l'engineering"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Acteur principal : Nicolas Grisey Demengel."}]},{type:a,tag:c,props:{},children:[{type:a,tag:k,props:{},children:[{type:b,value:"Observation"}]},{type:b,value:T}]},{type:a,tag:c,props:{},children:[{type:b,value:"Nicolas travaillait sur un sujet qui lui avait été remonté, la lenteur de la CI (continuous integration).\nL'opportunité est importante, il s'agit de toute la chaîne de construction de nos applications. Cela ralentit les temps de feedback et plus globalement tout le cycle de dev.\nDe plus, nous payons la CI par les ressources consommées. Bref le sujet est critique."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour donner une petite description de contexte, chez Malt il y a plusieurs équipes (squads) qui sont responsables en théorie d'une ou plusieurs applications. L'équipe A s'occupe de l'application A, l'équipe B de l'application B etc…"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Nicolas observe plusieurs choses :"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"si la CI est longue, ce n'est pas une question de lenteur de build, c'est une question de nombre de builds en parallèle"}]},{type:a,tag:d,props:{},children:[{type:b,value:"Lorsqu'une équipe A livre son application, elle livre aussi très souvent d'autres applications, B, C, D etc…"}]},{type:a,tag:d,props:{},children:[{type:b,value:"Si l'équipe A relivre d'autres applications c'est parce que les applications partagent souvent des librairies communes qu'il faut modifier et qui sont utilisées dans d'autres applications. Ces modifications entraînent le rebuild des autres applications, et parfois il faut aussi les modifier en fonction des changements sur la librairie commune."}]},{type:a,tag:d,props:{},children:[{type:b,value:"Les équipes ne sont pas sereines, car elles relivrent des applications dont elles ne sont pas responsables et craignent des régressions"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:k,props:{},children:[{type:b,value:"Hypothèse"}]},{type:b,value:" :\nIl y a des problèmes de couplage. Les librairies communes devraient être limitées. L'architecture fonctionnelle pose souci."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Sauf que, ce n'est pas suffisant pour attaquer le sujet. Il y a 2.3M de lignes de code, commencer par n'importe où serait sans doute inefficace. Et comment considérer que le sujet est résolu ? Résoudre totalement les sujets d'architecture, ce serait un chantier de plusieurs années."}]},{type:a,tag:c,props:{},children:[{type:a,tag:k,props:{},children:[{type:b,value:"Mesures"}]},{type:b,value:T}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour déterminer la meilleure façon de démarrer, et pour prouver l'hypothèse, Nicolas a mis en place un ensemble de mesures. Si je résume, il a observé :"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"le nombre d'applications déployé par un changement sur une librairie donnée"}]},{type:a,tag:d,props:{},children:[{type:b,value:"la fréquence de modification d'une librairie donnée"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"A partir de là, il a pu déterminer les “hots spots”, les librairies entraînant le plus de rebuilds, et avec les plus grandes fréquences de modification."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ces hots spots, ce sont les endroits par lesquels commencer."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Le détail exact du travail réalisé, les graphes etc… "},{type:a,tag:f,props:{href:p,rel:[g]},children:[{type:b,value:"sont disponibles sur le blog de Malt Engineering"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:k,props:{},children:[{type:b,value:"Conclusion"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Le fait d'avoir réalisé ces mesures a permis :"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"de prioriser le travail à accomplir"}]},{type:a,tag:d,props:{},children:[{type:b,value:"de fixer des objectifs"}]},{type:a,tag:d,props:{},children:[{type:b,value:"d'aligner plusieurs équipes sur la démarche"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Cette démarche s'appuie sur une méthodologie simple : observation, mesures, hypothèses, re-mesures, objectifs, suivi."}]},{type:a,tag:c,props:{},children:[{type:b,value:"La fixation d'objectifs dans le cas présent est déterminante. Sans objectif chiffré, à quel moment on s'arrête dans un projet de “découplage” ? Ici Nicolas a pu fixer des seuils (nombre de builds maximum, taux d'ownership par application etc…) auxquels il fallait agir, mais en dessous desquels, il n'y avait plus d'urgences."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et ça, c'est c'est une démarche d'équipe Engineering mature."}]},{type:a,tag:j,props:{id:U},children:[{type:b,value:V}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et vous, sur vos projets, utilisez-vous des objectifs quantitatifs ? Sinon, vous pourriez en rajouter ?"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Quel serait votre niveau de maturité sur le modèle ci-dessus ?"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Connaissez-vous le coût d'un utilisateur et l'évolution de ce coût sur les 2 dernières années ?"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Est-ce que vos métriques Engineering sont connus en dehors de votre équipe ?"}]},{type:a,tag:j,props:{id:W},children:[{type:b,value:X}]},{type:a,tag:c,props:{},children:[{type:a,tag:f,props:{href:Y,rel:[g]},children:[{type:b,value:Y}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:f,props:{href:o,rel:[g]},children:[{type:b,value:o}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:f,props:{href:Z,rel:[g]},children:[{type:b,value:Z}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:f,props:{href:_,rel:[g]},children:[{type:b,value:_}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:f,props:{href:p,rel:[g]},children:[{type:b,value:p}]}]},{type:a,tag:"tip",props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"Ce billet de blog fait partie du livre "},{type:a,tag:f,props:{href:"\u002F2023\u002F02\u002Fimpactful-software-engineering"},children:[{type:b,value:"Impactful Software Engineering"}]},{type:b,value:z},{type:a,tag:i,props:{},children:[]},{type:b,value:"\nN'hésitez pas à lire les autres chapitres."}]}]}],toc:{title:q,searchDepth:h,depth:h,links:[{id:t,depth:h,text:u},{id:v,depth:h,text:w},{id:x,depth:h,text:y},{id:A,depth:h,text:B},{id:D,depth:h,text:E,children:[{id:F,depth:m,text:G},{id:H,depth:m,text:I},{id:J,depth:m,text:K},{id:L,depth:m,text:M},{id:N,depth:m,text:O},{id:P,depth:m,text:Q}]},{id:R,depth:h,text:S},{id:U,depth:h,text:V},{id:W,depth:h,text:X}]}},_type:"markdown",_id:"content:articles:2023:02:measuring-everything.md",_source:"content",_file:"articles\u002F2023\u002F02\u002Fmeasuring-everything.md",_extension:"md"}},prerenderedAt:1683010266347}}("element","text","p","li","ul","a","nofollow",2,"br","h2","strong","h3",3,false,"https:\u002F\u002Fwww.ovaledge.com\u002Fblog\u002Fdata-governance-maturity-model","https:\u002F\u002Fblog.malt.engineering\u002Fyour-version-control-system-contains-invaluable-insights-for-your-engineering-teams-part-i-c90b237fe7b4","","blockquote","https:\u002F\u002Ftwitter.com\u002Fhugolassiege\u002Fstatus\u002F1626880872363204609","intuition-et-expérience-versus-mesures","Intuition et expérience versus mesures","sans-mesures-pas-dalignement","Sans mesures, pas d'alignement","notre-métier-est-un-métier-scientifique","Notre métier est un métier scientifique",".","la-donnée-un-critère-de-maturité-déquipe-engineering","La donnée, un critère de maturité d'équipe engineering","https:\u002F\u002Ftwitter.com\u002FPykPyky\u002Fstatus\u002F1605205574957907968","data-maturity-model","Data maturity model","niveau-0-unaware","Niveau 0 : Unaware.","niveau-1-aware","Niveau 1: Aware.","niveau-2-reactive","Niveau 2 : Reactive","niveau-3-proactive","Niveau 3 : Proactive","niveau-4-managed","Niveau 4: Managed","niveau-5-effective","Niveau 5 : Effective","un-refactoring-à-grande-échelle-sur-malt","Un refactoring à grande échelle sur Malt"," :","questions-pour-vous","Questions pour vous ?","resources","Resources","https:\u002F\u002Fwww.softkraft.co\u002Fwhat-is-data-maturity-and-how-to-climb-the-data-maturity-scale\u002F#the-gartner-data-maturity-model","https:\u002F\u002Fblog.malt.engineering\u002Fyour-version-control-system-contains-invaluable-insights-for-your-engineering-teams-part-iii-238a7296aa36","https:\u002F\u002Fblog.malt.engineering\u002Fyour-version-control-system-contains-invaluable-insights-for-your-engineering-teams-part-ii-258a72b6eb65"))