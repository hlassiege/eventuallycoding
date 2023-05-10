export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G){return {data:{"/articles/2021/10/07/faut-il-mesurer-la-performance-dune-equipe-engineering":{_path:"\u002Farticles\u002F2021\u002F10\u002F07\u002Ffaut-il-mesurer-la-performance-dune-equipe-engineering",_dir:"07",_draft:m,_partial:m,_locale:h,_empty:m,title:"Faut-il mesurer la performance d’une équipe engineering ?",description:"Et si on parlait de mesure de la performance d’une équipe engineering ? \nLe sujet peut sembler épineux car il tire deux sujets majeurs :\n- les instr...",id:"1821",date:"2021-10-07",categories:["waza"],tags:[n,"engineering","okr","performance"],img:"Illustration_sans_titre-1024x716.jpg",cover:"cover6.jpg",readingTime:{text:"11 min read",minutes:10.55,time:633000,words:2110},body:{type:"root",children:[{type:a,tag:c,props:{},children:[{type:b,value:"Et si on parlait de mesure de la performance d’une équipe engineering ? "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Le sujet peut sembler épineux car il tire deux sujets majeurs :"}]},{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"les instruments de mesures, que faut-il mesurer, comment et pourquoi ?"}]},{type:a,tag:d,props:{},children:[{type:b,value:"la méthode de management qui se cache derrière"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et le moins que l’on puisse dire, c’est que sur ces deux thèmes, il y a de quoi écrire. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Les métriques de suivi absurdes ont très longtemps été un running gag dans l’informatique. Et surtout elles auront eu des objectifs très divers parfois très nocifs pour la qualité des projets, de la collaboration ou la gestion des individus. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Cependant, c’est une source d’infos précieuses et sur laquelle on peut construire les leviers d’amélioration continue de nos pratiques. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Bref, je vous propose un petit panorama sur le sujet avec en pointillé la philosophie que nous essayons de mettre en place chez Malt autour de la "},{type:a,tag:l,props:{},children:[{type:b,value:"Developer Experience"}]},{type:b,value:"."}]},{type:a,tag:j,props:{id:o},children:[{type:b,value:p}]},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{href:"https:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2021\u002F10\u002FIllustration_sans_titre.jpg",rel:[f]},children:[{type:a,tag:k,props:{alt:h,src:"\u002Fimages\u002FIllustration_sans_titre-1024x716.jpg"},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Le moins que l’on puisse dire, c’est que sur le sujet, il y a pléthore d’approches. Récemment je dirais que l’on retrouve les tendances suivantes :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"- une performance mesurée via les OKR. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Si les OKR sont très bien pour mesurer l’alignement entre la stratégie de la boîte et la stratégie produit, ils ne permettent cependant pas de mesurer profondément la qualité\u002Fperformance de l’engineering qui se cache derrière le produit. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"- une performance mesurée par les métriques "},{type:a,tag:e,props:{href:"https:\u002F\u002Fwww.amazon.fr\u002Fdp\u002FB07B9F83WM\u002Fref=dp-kindle-redirect?_encoding=UTF8&btkr=1",rel:[f]},children:[{type:a,tag:l,props:{},children:[{type:b,value:n}]}]},{type:b,value:" :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"les métriques accelerate sont celles tirés du livre éponyme et sont :"}]},{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"la fréquence de déploiement "}]},{type:a,tag:d,props:{},children:[{type:b,value:"le temps de cycle entre l’idée et la production (product delivery lead time)"}]},{type:a,tag:d,props:{},children:[{type:b,value:"le temps moyen de résolution d’incident (mean time to repair)"}]},{type:a,tag:d,props:{},children:[{type:b,value:"le taux d’erreur (change failure rate)"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ces métriques ont l’avantage de mesurer la qualité globale du logiciel, c’est à dire qu’une faible fréquence de déploiement indique que de nombreuses bonnes pratiques n’ont pas été mises en place pour arriver à ce résultat. Idem pour le taux d’erreur etc… "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Elles permettent de poser un constat. Je suis très convaincu par ces métriques pour créer une mesure généraliste de la qualité de l’engineering. Mais je ne peux pas plonger dans le détail pour aller chercher des améliorations à faire. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"- les outils d’analyse de code (exemple sonar)"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ces outils permettent de plonger dans des analyses de qualité de code, duplication, conception (couplage, complexité), sécurité etc… "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ils ont par contre le défaut d’être parfois complexes à appréhender lors de leur mise en place sur un projet existant car ils créent beaucoup de bruit. On peut être vite perdu et ne pas savoir ce qui est important ou non à regarder. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"- les métriques plus old school : points de vélocité, nombre de lignes de code "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ces métriques sont assez discutables, peu représentatives de la qualité, non comparables d’une équipe à l’autre et par expérience, souvent mal utilisées en termes de philosophie de management. Elles peuvent donner l’illusion de mesurer la productivité, malheureusement ce n’est pas le cas."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Chez Malt on a utilisé beaucoup de choses dans le passé, par exemple :"}]},{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"des outils d’analyses de code (sonar), "}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"malheureusement je pense qu’on ne l’utilise pas à son plein potentiel. Les builds sonar sont trop longs et sont donc joués en décalé du build standard. Il y a pas mal de bruit sur l’outil et donc un manque de suivi au global. "}]},{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"des outils de suivi de l’uptime comme statuscake. "}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"même si on peut considérer que l’usage était plus lié au monitoring que la mesure de la performance, malgré tout on utilise cette métrique d’uptime auprès de nos clients"}]},{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"du suivi sur le nombre de tickets de bug et support"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Cela a surtout servi dans des moments précis pour factualiser un feeling mais on ne le suit pas de façon régulière"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Bon mais entre les OKR qui permettent l’alignement avec le business, les métriques old school qui veulent mesurer la productivité ou les métriques accelerate qui regardent la qualité, on note que les objectifs diffèrent. Alors penchons-nous sur l’intérêt de mesurer la performance."}]},{type:a,tag:j,props:{id:q},children:[{type:b,value:r}]},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{href:"https:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2021\u002F10\u002FIllustration_sans_titre-1.jpg",rel:[f]},children:[{type:a,tag:k,props:{alt:h,src:"\u002Fimages\u002FIllustration_sans_titre-1-1024x706.jpg"},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Juste au-dessus, je mentionnais des métriques et leurs objectifs associés. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"On peut mesurer la qualité globale des pratiques de dev (via les métriques listées dans accelerate), la contribution à la stratégie globale (via les OKR) et certains tentent de mesurer la productivité avec des métriques old school (claquées au sol comme on dit aujourd’hui)."}]},{type:a,tag:c,props:{},children:[{type:b,value:"J’ai pu entendre des très bons Software Engineer disant que la fréquence de déploiement était le seul indicateur que l’on devrait suivre. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"De une, cela ne peut pas aller sans des indicateurs business, je peux très bien livrer des choses peu pertinentes pour le business très fréquemment. De deux, si l’objectif c’est de permettre à l’équipe de s’améliorer, c’est insuffisant (en dehors de dire qu’on peut faire mieux)."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Mon opinion est qu’il y a complémentarité dans ces outils. Ce n’est pas contradictoire d’un côté de mesurer la qualité du code pour l’améliorer, de s’aligner avec le succès business et de monitorer la qualité globale de l’équipe. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Depuis tout à l’heure, je parle de mesurer la performance engineering, donc la performance collective. Et si on abordait un sujet un peu plus épineux : la mesure de la performance individuelle."}]},{type:a,tag:j,props:{id:s},children:[{type:b,value:t}]},{type:a,tag:c,props:{},children:[{type:b,value:"Eh oui, quoi de plus naturel que de chercher des outils de mesure individuels alors même qu’on le fait sur d’autres fonctions. Si on regarde du côté des commerciaux ou du marketing, c’est fréquent d’avoir une partie de la rémunération indexée sur la performance (volume de ventes, nombres d’appels, trafic généré etc…). "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Naturellement dans une entreprise, dès lors qu’une équipe dépasse une certaine taille, on va chercher un outil fiable, juste, objectif, cohérent dans le temps et dans l’espace pour mesurer. Quoi de mieux que du quantitatif pour ça ? L’intention est bonne. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Il faut bien comprendre que pour beaucoup, la performance d’un(e) dev est assez mystérieuse. Ce n'est pas toujours les plus visibles qui sont les plus performants alors il faut se reposer sur un manager avec un risque de manque d’objectivité ou un risque d’incohérence entre différents managers. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et c’est là où on retrouve un certain paradoxe, traditionnellement la population dev est assez réticente à avoir des mesures de la performance individuelles sur du quanti alors même que c’est également une population qui se laisse facilement motiver par de la gamification (c’est mon cas). "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Mais un mauvais usage dans de nombreuses structures a sans doute un peu tendu le sujet. Chat échaudé craint l’eau froide. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et un de ces usages qui peut crisper, c’est la rémunération. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Avant d’aller plus loin, je précise que pour ma part, de façon générale, je ne suis pas favorable au variable sur les postes Engineering. Au moins pas avant les postes de staff engineering et plus mais ce n'est pas le sujet de ce billet donc je ne m'étendrai pas là dessus. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Par contre, j'ai plusieurs sujets que je souhaite effectivement résoudre : la mesure de l’expertise, la progression dans le career path (chemin d’évolution de carrière), la cohérence entre les individus, et l’objectivité. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et pour cela je souhaite m’appuyer sur du quantitatif "},{type:a,tag:l,props:{},children:[{type:b,value:"et"}]},{type:b,value:" du qualitatif."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Je ne prends pas de mesure quantitative seule, car les métriques quantitatives de performance individuelles peuvent avoir un impact négatif. En effet, poser une mesure c'est la meilleure façon de biaiser un système complexe, à plus forte raison quand on y met des incitations derrière. "}]},{type:a,tag:"blockquote",props:{},children:[{type:a,tag:c,props:{},children:[{type:a,tag:u,props:{},children:[{type:b,value:"When a measure becomes a target, it ceases to be a good measure."}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{href:"https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FGoodhart%27s_law",rel:[f]},children:[{type:a,tag:u,props:{},children:[{type:b,value:"Goodhart's Law"}]}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Il est parfois possible de faire remonter artificiellement une métrique et ça ne va pas forcément dans le sens de la qualité du projet."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Inciter à la performance individuelle pour une activité qui est par nature collaborative, c’est aussi prendre le risque de casser cette dite collaboration, par exemple en réduisant les séances de pair programming, les sessions de conception etc… "}]},{type:a,tag:c,props:{},children:[{type:b,value:"C’est aussi assez idéal pour créer des tensions, car certaines métriques sont conjoncturelles (projet mal cadré en amont avec impact sur la productivité, temps passé sur des bugs complexes etc…)"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ne prendre que des mesures quantitatives c’est un peu le dernier rempart du manager qui ne connaîtrait pas le métier et donc n’aurait pas d’autres moyens que d’utiliser ça uniquement."}]},{type:a,tag:c,props:{},children:[{type:b,value:"En conséquence, je vais coupler le quanti avec du quali. Cela passe par de la discussion régulière (1:1) et des feedbacks récoltés dans le reste de l’équipe. Dans une organisation à l’échelle, ce sera le rôle des Engineering Manager de consolider ce type d’informations."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et à partir de toutes ces infos, on peut avoir un usage “expert” de la data. C’est à dire que c’est à partir des retours quali qu’on va décider à valider ou invalider des suppositions à partir du quanti. La data ne sert que pour des analyses adhoc. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Se reposer sur l’engineering manager seul comporte des risques de subjectivité ou de manque de cohérence dans l’organisation. Se reposer sur la data seule comporte le risque de ne pas savoir l'interpréter et la remettre dans le contexte. Il faut mixer les deux."}]},{type:a,tag:j,props:{id:v},children:[{type:b,value:w}]},{type:a,tag:c,props:{},children:[{type:b,value:"L'autre façon d'utiliser ces métriques c'est dans une optique d'amélioration continue de la performance collective. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et là c'est intéressant puisqu'on va pouvoir agir sur plus d’individus, et des échelles de temps plus grandes, bref, plus de données."}]},{type:a,tag:c,props:{},children:[{type:b,value:"La loi des grands nombres va permettre d’extraire des tendances. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Chez Malt nous faisons émerger petit à petit une équipe interne concentrée sur ce que nous appelons “Developer Experience”. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"La Developer experience chez Malt c’est la facilité d’utiliser et de développer le produit par les tribes. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ca regroupe tout un tas de sujets comme la conception, le design system, l’usine logicielle etc… "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Je digresse un instant pour expliquer notre organisation."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Nous avons 3 Tribes. Une Tribe correspond à des équipes pluridisciplinaires de PM, Data, Dev, Design organisé autour d’un objectif, une ligne produit."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Les 3 tribes sont :"}]},{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"Freelance : tout ce qui est relié à l’expérience Freelance sur Malt"}]},{type:a,tag:d,props:{},children:[{type:b,value:"Company : tout ce qui est relié à l’expérience des entreprises sur Malt"}]},{type:a,tag:d,props:{},children:[{type:b,value:"Platform : les services partagés, la sécurité, la developer experience, le cloudops"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Platform est donc une tribe dont les clients sont les autres tribes. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Si vous n’êtes pas familier avec la notion d’équipe Platform, je vous invite à lire "},{type:a,tag:e,props:{href:"https:\u002F\u002Fwww.thoughtworks.com\u002Fradar\u002Ftechniques\u002Fplatform-engineering-product-teams",rel:[f]},children:[{type:b,value:"le radar Thoughtworks qui en donne une définition"}]},{type:b,value:x}]},{type:a,tag:c,props:{},children:[{type:b,value:"Developer experience c’est donc chez nous une équipe au sein de l’équipe Platform qui est en réalité pour l’instant un croisement entre cloudops et shared services. C’est cette équipe qui travaille par exemple "},{type:a,tag:e,props:{href:"https:\u002F\u002Fmedium.com\u002Fnerds-malt\u002Fchoosing-a-ci-that-grows-at-the-same-pace-as-a-scale-up-f4e1c0648084",rel:[f]},children:[{type:b,value:"sur notre nouvelle CI"}]},{type:b,value:x}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ces sujets portent par exemple sur l'accueil des nouveaux arrivants (onboarding), la documentation (living documentation, les ADR etc…), le découpage et l’indépendance applicative des tribes, la CI, le design system etc… "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Un point important, on cherche à "},{type:a,tag:l,props:{},children:[{type:b,value:"mesurer l’impact"}]},{type:b,value:". Et pour cela on porte une attention particulière à la Data issue de jira, git, ou la CI. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Exemple : on souhaite améliorer l’onboarding (accueil des nouveaux arrivants) pour qu’ils s’approprient la stack Malt plus facilement. On pose une métrique de succès avant de démarrer : le time to first commit en production. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Sans métriques, dans une équipe tech, on peut facilement se retrouver dans des situations où finalement on a surtout fait du hype driven development. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Dans une équipe Platform, et ici plus particulièrement Developer Experience, on cherche à travailler comme une équipe produit en considérant les autres équipes comme les utilisateurs de notre produit. On travaille avec de la discovery (user interviews, proto, quanti, quali etc…) et on mesure le résultat obtenu. "}]},{type:a,tag:c,props:{},children:[{type:b,value:"Quelques exemples  :"}]},{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"On contrôle le découpage fonctionnel de nos modules en mesurant l’activité par équipe sur ces modules (un module doit en principe avoir une seule couleur, donc il reste des modules à travailler)"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{href:"https:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2021\u002F10\u002Fpasted-image-0-2.png",rel:[f]},children:[{type:a,tag:k,props:{alt:h,src:"\u002Fimages\u002Fpasted-image-0-2-1024x392.png"},children:[]}]}]},{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"On a travaillé sur des remaniements de code visant à réduire l’édition de certains modules “legacy”. On surveille désormais que ce remaniement a fonctionné en mesurant le ratio d’édition du legacy par semaine"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{href:"https:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2021\u002F10\u002Fpasted-image-0-3.png",rel:[f]},children:[{type:a,tag:k,props:{alt:h,src:"\u002Fimages\u002Fpasted-image-0-3.png"},children:[]}]}]},{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"nous testons la stabilité des modules communs en mesurant l’activité (nb commits)"}]},{type:a,tag:d,props:{},children:[{type:b,value:"la mesure du temps de revue d’une PR"}]},{type:a,tag:d,props:{},children:[{type:b,value:"nous contrôlons la durée de vie d’une branche. "}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"et bien d’autres..."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Chaque analyse ayant pour but de comprendre l’impact précis de nos modifications. Ca peut être sur la stabilité du code, son découplage, sa performance etc..."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Dans les analyses un peu fun fact, voici :"}]},{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"mon propre graphe d’activité depuis la création de Malt :"}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{href:"https:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2021\u002F10\u002Fpasted-image-0-4.png",rel:[f]},children:[{type:a,tag:k,props:{alt:h,src:"\u002Fimages\u002Fpasted-image-0-4.png"},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"(eh oui, je code de moins en moins)"}]},{type:a,tag:j,props:{id:y},children:[{type:b,value:z}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour conclure je dirais que l’usage des métriques pour mesurer la performance des équipes permet une véritable mise en place d’une politique d’amélioration continue car elles permettent de mesurer l’impact."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Dans une équipe plus petite on peut légitimement se demander si c’est autant utile, le volume de données est plus faible et la taille de l’équipe fait qu’on sait plus facilement identifier les blocages. Cependant il est à noter qu’il existe des outils assez bien foutus pour démarrer (liste plus bas dans les sources)."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ensuite, dès lors qu’on dépasse une certaine taille, la mise à l’échelle d’une équipe engineering nécessite une attention particulière pour éviter de tuer progressivement votre efficacité et cela passe par une mise en place forte de l’amélioration continue. "}]},{type:a,tag:"h3",props:{id:A},children:[{type:b,value:B}]},{type:a,tag:c,props:{},children:[{type:b,value:"Outils de suivi de métriques :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"(je ne les ai pas utilisés, donc je vous invite à vous faire vos propres idées)"}]},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{href:C,rel:[f]},children:[{type:b,value:C}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{href:D,rel:[f]},children:[{type:b,value:D}]},{type:b,value:"  (Accelerate metrics)"}]},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{href:E,rel:[f]},children:[{type:b,value:E}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{href:F,rel:[f]},children:[{type:b,value:F}]}]},{type:a,tag:c,props:{},children:[{type:a,tag:e,props:{href:G,rel:[f]},children:[{type:b,value:G}]}]}],toc:{title:h,searchDepth:i,depth:i,links:[{id:o,depth:i,text:p},{id:q,depth:i,text:r},{id:s,depth:i,text:t},{id:v,depth:i,text:w},{id:y,depth:i,text:z,children:[{id:A,depth:3,text:B}]}]}},_type:"markdown",_id:"content:articles:2021:10:07:faut-il-mesurer-la-performance-dune-equipe-engineering.md",_source:"content",_file:"articles\u002F2021\u002F10\u002F07\u002Ffaut-il-mesurer-la-performance-dune-equipe-engineering.md",_extension:"md"}},prerenderedAt:1683748022051}}("element","text","p","li","a","nofollow","ul","",2,"h2","img","strong",false,"accelerate","quelles-métriques","Quelles métriques ?","pourquoi-mesurer-la-performance","Pourquoi mesurer la performance ? ","la-mesure-de-la-performance-individuelle","La mesure de la performance individuelle","em","les-métriques-au-service-de-lamélioration-continue","Les métriques au service de l’amélioration continue",". ","et-la-suite","Et la suite ?","annexe","Annexe :","https:\u002F\u002Fwww.echoeshq.com\u002F","https:\u002F\u002Fwww.usehaystack.io\u002F","https:\u002F\u002Fwww.gitclear.com\u002F","https:\u002F\u002Fwaydev.co\u002F","https:\u002F\u002Fwww.pluralsight.com\u002Fproduct\u002Fflow"))