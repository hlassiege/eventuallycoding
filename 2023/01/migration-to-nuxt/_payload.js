export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G){return {data:{"/articles/2023/01/migration-to-nuxt":{_path:"\u002Farticles\u002F2023\u002F01\u002Fmigration-to-nuxt",_dir:"01",_draft:k,_partial:k,_locale:m,_empty:k,title:"Le projet Singapore : Migration vers Nuxt",description:"Dans ce billet, je souhaite vous présenter le projet Singapore, qui vise à simplifier et moderniser toute notre stack frontend en utilisant Nuxt.  ",id:"10",date:"2023-01-10",tags:["rewrite","refactoring","malt","nuxt"],cover:"singapore.jpg",readingTime:{text:"14 min read",minutes:13.61,time:816600,words:2722},body:{type:"root",children:[{type:a,tag:c,props:{},children:[{type:a,tag:g,props:{href:"https:\u002F\u002Feventuallycoding.com\u002F2023\u002F01\u002Ffaut-il-reecrire-de-zero",rel:[h]},children:[{type:b,value:"Dans un précédent billet"}]},{type:b,value:", j'évoquais des chantiers de simplification engagés en 2022."}]},{type:a,tag:c,props:{},children:[{type:b,value:"J'espère que nous aurons l'occasion d'aborder plusieurs de ces chantiers sur ce blog "},{type:a,tag:g,props:{href:"https:\u002F\u002Fblog.malt.engineering\u002F",rel:[h]},children:[{type:b,value:"et celui de Malt"}]},{type:b,value:".\nEntre temps, dans ce billet, je souhaite vous présenter l'un de ces projets dont l'objectif est de moderniser toute notre technologie frontend en utilisant "},{type:a,tag:g,props:{href:"https:\u002F\u002Fnuxt.com\u002F",rel:[h]},children:[{type:b,value:"Nuxt"}]},{type:b,value:n}]},{type:a,tag:c,props:{},children:[{type:b,value:"J'espère vous donner un aperçu de notre méthodologie, comment nous en sommes arrivés à prendre cette décision et comment nous l'avons mis en œuvre."}]},{type:a,tag:j,props:{id:o},children:[{type:b,value:p}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour bien comprendre d'abord de quoi on parle, voici quelques chiffres importants début 2022 :"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"l'équipe d'ingénierie est proche de 100 développeurs"}]},{type:a,tag:d,props:{},children:[{type:b,value:"la taille de la base de code des applications front avoisine 1M de ligne(j'exclus toutes les libs communes, apis, services et applis qui ne font que du back)"}]},{type:a,tag:d,props:{},children:[{type:b,value:"la taille totale de la base de code approche les 2.4M de lignes de code ("},{type:a,tag:g,props:{href:"https:\u002F\u002Fwww.informationisbeautiful.net\u002Fvisualizations\u002Fmillion-lines-of-code\u002F",rel:[h]},children:[{type:b,value:"et voici une infographie pour vous donner une base de comparaison"}]},{type:b,value:")"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Le risque à cette taille, c'est la complexification et l'intrication."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Il y a quelque temps déjà nous avons construit une équipe plateforme dont l'objectif est de créer un produit à l'intérieur du produit, à destination des autres équipes.\nDans la littérature, vous entendrez souvent parler de "},{type:a,tag:g,props:{href:"https:\u002F\u002Ftomgeraghty.co.uk\u002Findex.php\u002Fplatform-as-a-product\u002F",rel:[h]},children:[{type:b,value:"\"platform as a product\""}]},{type:b,value:" car le travail d'une telle équipe est de concevoir la plateforme comme on construirait un produit externe. On utilisera des phases d'exploration (discovery) incluant des interviews utilisateurs et un usage intensif des données."},{type:a,tag:f,props:{},children:[]},{type:b,value:"\nBref, du quantitatif et du qualitatif. L'idée étant d'être très concret et pragmatique pour éviter l'effet \"architectes en tour d'ivoire\" qui peut encore exister ici et là."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Leur travail englobe des sujets divers :"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"l'expérience développeur (DX ou developer experience si vous avez l'habitude des articles de blogs anglais sur le sujet)"}]},{type:a,tag:d,props:{},children:[{type:b,value:"les services partagés, techniques comme les logs, le monitoring, mais aussi fonctionnels comme certaines apis, SSO, api gateway etc..."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour cette équipe, la simplification doit être l'un de ces enjeux principaux. Ce qui est simple s'explique bien et s'utilise bien.\nElle doit prendre en compte la conduite de changement, il ne suffit pas d'améliorer la plateforme, il faut accompagner les utilisateurs. Ca peut être via de la formation, de la documentation, l'usage de standards et j'en passe."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Je parlais de quantitatif plus haut, c'est important pour rationaliser le travail. Nous souhaitons avoir systématiquement des critères chiffrés pour entamer un projet. Faire de la technique pour de la technique n'a aucun sens. Il faut mettre en évidence pourquoi on le fait et fixer un objectif d'amélioration.\nSans chiffres, il n'y a pas d'objectifs.\nSans objectifs, on ne peut rien prioriser et il n'y a pas d'alignement."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Voici pour la mise en contexte, maintenant abordons les origines du projet \""},{type:a,tag:l,props:{},children:[{type:b,value:"Singapore"}]},{type:b,value:"\", justement démarré dans le cadre de cette équipe."}]},{type:a,tag:j,props:{id:q},children:[{type:b,value:r}]},{type:a,tag:c,props:{},children:[{type:b,value:"Avec le temps, la charge cognitive de chaque développeur est devenue importante au vu de la taille de la base de code. Les choix technologiques de ces 10 dernières années sont pour certains encore très pertinents, mais pour d'autres, c'est moins évident, pour rester poli :)"},{type:a,tag:f,props:{},children:[]},{type:b,value:"\nEt c'est justement le cas pour les technologies front-end que nous utilisons."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Sur le début d'année 2022 nous faisons le constat suivant."}]},{type:a,tag:c,props:{},children:[{type:b,value:"6 technologies différentes sont utilisés côté front-end :"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"JSP, le moteur de templating Java par défaut"}]},{type:a,tag:d,props:{},children:[{type:b,value:"AngularJS pour une page du site (je l'ai redécouvert au moment de l'écriture de ce billet)"}]},{type:a,tag:d,props:{},children:[{type:b,value:"Vue.js (2 avec une migration en cours vers la 3), essentiellement pour des parties où l'utilisateur est connecté ou bien pour des applications internes"}]},{type:a,tag:d,props:{},children:[{type:b,value:"des modules Javascript maison, appelé hopmodule, utilisé principalement dans les JSP"}]},{type:a,tag:d,props:{},children:[{type:b,value:"Des templates Handlebars sont partagés entre backend et frontend pour certaines pages qui nécessitent d'être rendu côté serveur puis ensuite rendu dynamique côté client"}]},{type:a,tag:d,props:{},children:[{type:b,value:"Nuxt 2 pour une application (parmi une vingtaine)"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour comprendre, en 2012 nous avions fait le choix des JSP pour faire du rendu côté serveur (SSR pour server side rendering) afin d'être compris par les moteurs d'indexation (Google, Bing) et donc avoir un bon SEO.\nPlus tard nous avons introduit des frameworks comme AngularJS, remplacé par la suite par Vue.js afin de rendre dynamique des portions de la page après chargement.\nEnfin nous avons totalement utilisé Vue.js pour des applications complètes (SPA pour Single page application)."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Tout ceci implique qu'il y a beaucoup à savoir quand on développe côté front, notamment parce qu'il a fallu répondre plusieurs fois aux mêmes enjeux, pour chaque technologie."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Si je prends un exemple, sur notre portail de documentation développeur :"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"pour l'échappement de caractères, nous détaillons plus d'une demi-douzaine de façons de faire (avec JSP, avec la taglig spring-message, avec les attributs data-js utilisé par nos micro modules, etc...)"}]},{type:a,tag:d,props:{},children:[{type:b,value:"pour l'internationalisation, rebelote, nous détaillons là encore plus d'une demi-douzaine de façons d'internationaliser les pages"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Autre chose à savoir, la plupart du code source des applications front est inclus dans le code source des applications backs dans des répertoires src\u002Fmain\u002Ffront et c'est le rôle de l'usine logicielle de séparer les artefacts au moment du build.\nMais les développeurs eux doivent tout charger dans leur IDE (intellij pour beaucoup d'entre nous).\nOr avec le volume de code et l'ensemble des plugins nécessaires pour comprendre toutes les technologies, intellij souffre beaucoup. Et quand je dis beaucoup...."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Au quotidien, lorsqu'on travaille sur le front-end des applications, il y a également de l'outillage qui tourne en permanence, par exemple pour faire des copies de fichiers ayant été modifié (des JSP présentes dans une librairie commune) vers le répertoire où tourne l'application en cours de travail."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Je passe sur de nombreux autres détails, mais ce qu'il faut retenir :"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"les outils pour travailler sont nombreux, ce qui rend parfois compliqué les fois où cela ne se passe pas bien. Il faut souvent plusieurs personnes pour débloquer une personne rencontrant un problème"}]},{type:a,tag:d,props:{},children:[{type:b,value:"la charge sur la machine est importante, ce qui rend nécessaire d'avoir des machines de courses pour travailler. Et même comme cela, l'expérience n'est pas toujours fluide."}]}]},{type:a,tag:j,props:{id:s},children:[{type:b,value:t}]},{type:a,tag:c,props:{},children:[{type:b,value:"A ce moment-là, j'aime bien me poser une question simple :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"\"Quels seraient mes choix si nous devions créer Malt en partant d'une feuille blanche en 2022 ? Est-ce que nous pourrions faire beaucoup mieux ?\""}]},{type:a,tag:c,props:{},children:[{type:b,value:"En parallèle de cette question, j'ai eu plusieurs expériences positives avec des stack "},{type:a,tag:g,props:{href:"https:\u002F\u002Fjamstack.org\u002F",rel:[h]},children:[{type:b,value:"jamstack"}]},{type:b,value:n}]},{type:a,tag:u,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"Jamstack is an architectural approach that decouples the web experience layer from data and business logic, improving flexibility, scalability, performance, and maintainability."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"J'ai pu tester avec succès :"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"gridsome pour le site "},{type:a,tag:g,props:{href:v,rel:[h]},children:[{type:b,value:v}]}]},{type:a,tag:d,props:{},children:[{type:b,value:"Nuxt et nuxt-content pour mon blog personnel."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"La réponse à la question ci-dessus semble évidente, en 2022 l'approche standard la plus efficace serait sans doute d'utiliser une approche Jamstack."}]},{type:a,tag:c,props:{},children:[{type:b,value:"D'autant que, ici on parle de front, mais cela change aussi le développement côté back. On passe sur un paradigme orienté API. On ne construit plus des vues métiers car la logique de présentation est désormais déporté. On pense en termes de contrats d'API et cela peut faciliter le travail de notre équipe mobile qui n'aura plus autant besoin de développement adhoc."},{type:a,tag:f,props:{},children:[]},{type:b,value:"\nCela ouvre aussi d'autres horizons comme le fait d'ouvrir nos APIs en externes."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour rendre à César ce qui appartient à César, cette piste avait déjà été envisagée en 2018 par Mickael J. On imaginait à ce moment-là une solution utilisant Nuxt afin de faire du Server side rendering et donc de répondre aux contraintes SEO.\nNous n'étions pas encore prêt à investir autant dans ce changement. Nous n'avions peut-être pas non plus la maturité nécessaire. Toujours est-il que nous n'avons pas entamé ce chantier."}]},{type:a,tag:c,props:{},children:[{type:b,value:"En 2022 notre complexité front a cependant augmenté et nous devons simplifier \"l'expérience développeur\" au risque d'avoir de grosses déconvenues très prochainement autrement.\nA cette étape, il ne s'agissait encore que d'une intuition. Il était devenu nécessaire d'étudier la faisabilité de ce chantier et de se fixer des objectifs chiffrés sur le résultat."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Nous déciderons d'appeler le projet \"Singapore\" qui représente symboliquement le départ de l'île de Java (les JSP) vers le pays le plus proche du continent Asiatique."}]},{type:a,tag:j,props:{id:w},children:[{type:b,value:x}]},{type:a,tag:c,props:{},children:[{type:b,value:"En quelques mots, qu'est-ce que Nuxt ?\nC'est un meta framework, c'est-à-dire que c'est un framework au-dessus d'un autre framework : vue.js"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Il apporte notamment la possibilité d'utiliser plusieurs modes de rendus :"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"Client side rendering (pas vraiment besoin de Nuxt dans ce cas là, vous pourriez faire pareil avec Vue.js tout seul)"}]},{type:a,tag:d,props:{},children:[{type:b,value:"Server side rendering (pour envoyer le contenu complet déjà rempli au navigateur, remplissant ainsi les contraintes SEO)"}]},{type:a,tag:d,props:{},children:[{type:b,value:"Universal rendering (le premier appel fait du SSR, ensuite l'application est chargée et tout se fait en client side rendering)"}]},{type:a,tag:d,props:{},children:[{type:b,value:"de la génération statique"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et pourquoi Nuxt ?\nLa question aurait pu se poser avec Next.js qui a le même objectif dans l'écosystème React. Next est plus ancien, semble plus mature et bénéficie d'une communauté très large."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Mais nous sommes très à l'aise avec Vue.js, framework que nous utilisons depuis maintenant plusieurs années.\nEt dans l'écosystème vue.js, c'est Nuxt qui nous a semblé le plus mature."}]},{type:a,tag:j,props:{id:y},children:[{type:b,value:z}]},{type:a,tag:c,props:{},children:[{type:b,value:"Après avoir initié la réflexion, je me suis lancé sur l'étude préalable en juillet\u002Faoût 2022."}]},{type:a,tag:c,props:{},children:[{type:b,value:"L'objectif de l'étude était de vérifier que nous pouvions reproduire l'ensemble de nos applications front actuelles. Il fallait par exemple valider toutes nos spécificités sur l'internationalisation (la gestion des formes plurielles avec ICU), la sécurité (les taglibs spring security), le feature flipping (avec ff4j) etc..."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Le second objectif de l'étude, c'était de définir les critères de succès."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Enfin, cette phase était aussi la première étape d'une opération de conduite de changement. L'aspect humain était crucial dans cette phase d'étude dans le sens où elle devait impliquer et embarquer les futurs sponsors du projet."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Lors de cette étape, un meeting hebdomadaire a été mis en place afin de partager l'avancement, discuter des points techniques en cours d'étude ou faire des démonstrations.\nUn support écrit et collaboratif (un google docs) a été tenu à jour pendant toute la durée de l'étude avec toutes les discussions liés aux prototypes, les comptes rendus de réunions etc...\nCe document n'est pas une ADR à proprement parler (architecture decision record) mais peut servir à en rédiger. Il a notamment servi à la rédaction de la documentation développeur par la suite."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Tous les prototypes non sensibles ont été publiés en open source afin de communiquer avec l'équipe Nuxt :"}]},{type:a,tag:c,props:{},children:[{type:a,tag:g,props:{href:A,rel:[h]},children:[{type:b,value:A}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Parmi les points que nous avons abordés lors de l'étude :"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"la problématique de déploiement pour les apps avec et sans SSR"}]},{type:a,tag:d,props:{},children:[{type:b,value:"l'authentification"}]},{type:a,tag:d,props:{},children:[{type:b,value:"le partage de code entre client et serveurs"}]},{type:a,tag:d,props:{},children:[{type:b,value:"i18n"}]},{type:a,tag:d,props:{},children:[{type:b,value:"les modules Nuxt"}]},{type:a,tag:d,props:{},children:[{type:b,value:"le SEO"}]},{type:a,tag:d,props:{},children:[{type:b,value:"les taglibs spring security et spring message"}]},{type:a,tag:d,props:{},children:[{type:b,value:"les micro frontends"}]}]},{type:a,tag:u,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"Je ne rentrerais pas en détail ici sur chaque sujet sinon ce billet serait gigantesque. Mais s'il y a un intérêt particulier pour l'un de ces items, il pourrait être abordé dans un futur billet."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Fin août, l'étude a permis de valider la faisabilité technique. En sus, les objectifs listés étaient les suivants :"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"diminution du temps de cycle"}]},{type:a,tag:d,props:{},children:[{type:b,value:"diminution du temps de build"}]},{type:a,tag:d,props:{},children:[{type:b,value:"découplage front et back"}]},{type:a,tag:d,props:{},children:[{type:b,value:"diminution du temps de démarrage des applications"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ces métriques vont cependant évoluer par la suite."},{type:a,tag:f,props:{},children:[]},{type:b,value:"\nLes temps de cycle sont à ce jour mal mesurés chez nous. C'est surprenant, car c'est sans doute la métrique plus importante de toutes mais effectivement nous ne sommes pas encore assez bons pour la suivre correctement."},{type:a,tag:f,props:{},children:[]},{type:b,value:"\nLa diminution du temps de build devait beaucoup être lié au fait de supprimer les dépendances entre build front et back. Ce sujet a été adressé en parallèle dans un autre chantier lié à la CI (migration de maven vers gradle)."},{type:a,tag:f,props:{},children:[]},{type:b,value:"\nLe temps de démarrage est intéressant, mais nous ne collectons pas la mesure sur les postes de travail."},{type:a,tag:f,props:{},children:[]},{type:b,value:"\nPour ma part j'ai certaines applis qui pouvaient mettre entre 100 et 200 secondes à démarrer. Mais je n'ai aucun moyen de démontrer que ce phénomène est le même chez tout le monde, et il n'est pas vrai sur toutes les applis."},{type:a,tag:f,props:{},children:[]},{type:b,value:"\nLe temps en intégration et production est, de plus, totalement différent du poste de dev (en grande partie lié à l'instrumentation datadog et le dimensionnement des pods)."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Sur le découplage, à l'origine, on se demande comment le mesurer. Et puis nous noterons plusieurs axes possibles :"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"le passage de 6 technologies front à une seule est déjà une métrique en soi."}]},{type:a,tag:d,props:{},children:[{type:b,value:"la suppression du volume de JSP. Cette mesure n'est cependant pas très satisfaisante puisqu'elle mesure juste un changement de techno. Elle n'apporte pas plus que la précédente."}]},{type:a,tag:d,props:{},children:[{type:b,value:"la diminution de la base de code. En effet, le passage de 6 technos à une seule va supprimer beaucoup de code en doublon. Chaque techno ayant implémenté les mêmes briques de bases pour la sécu, l'internationalisation etc..."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Un premier prototype grandeur nature va nous permettre d'y voir plus clair."}]},{type:a,tag:j,props:{id:B},children:[{type:b,value:C}]},{type:a,tag:c,props:{},children:[{type:b,value:"Sur septembre, une première application a été migrée. Les critères de choix de ce premier projet étaient :"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"de taille modeste, car une seule personne allait travailler dessus à temps plein, tout du moins au début"}]},{type:a,tag:d,props:{},children:[{type:b,value:"pas visible pour l'utilisateur final, pour limiter les risques"}]},{type:a,tag:d,props:{},children:[{type:b,value:"pas central pour éviter de marcher sur les plates bandes de plusieurs équipes"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ce premier projet a été une SPA (sans utilisation de SSR). Il s'agit d'un back office interne, une appli relativement simple (12k lignes de code).\nCependant, cette application est intéressante, car elle utilise des JSP, des petites applications en vue2, et du javascript custom.\nElle permettait donc de démontrer la faisabilité sur de nombreux points en suspens et de valider l'architecture générale cible pour une SPA en CSR (client side rendering)."}]},{type:a,tag:c,props:{},children:[{type:b,value:"La migration s'est faite en \"double run\" : Les deux applis ont coexisté avec un mécanisme de routage effectué par Traefik (notre reverse proxy).\nLa démarche de migration devait aussi valider la facon dont on pouvait basculer et revenir en arrière en cas de soucis."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Entre temps, l'équipe s'est étoffée en cours de route et ce qui permettra ensuite d'avancer plus rapidement pour la fin d'année."}]},{type:a,tag:j,props:{id:D},children:[{type:b,value:E}]},{type:a,tag:c,props:{},children:[{type:b,value:"Comme je l'indiquais plus haut, l'un des enjeux dans un projet de ce type est avant tout humain. Pour améliorer la developer experience, il ne faut pas lésiner sur l'accompagnement."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Dans ce cadre, j'ai décidé de totalement revoir notre portail de documentation interne à destination des développeurs. Cela pourrait faire l'objet d'un billet à part entière, mais dans les grandes lignes voici quelques éléments importants :"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"On suit globalement les principes listés sur "},{type:a,tag:g,props:{href:"https:\u002F\u002Fdocumentation.divio.com\u002F",rel:[h]},children:[{type:b,value:"ce très bon article de référence sur la gestion de la documentation"}]},{type:b,value:" (même si on ne le connaissait pas encore à ce moment là, je vous recommande sa lecture)"}]},{type:a,tag:d,props:{},children:[{type:b,value:"nous avons abandonné antora pour passer sur "},{type:a,tag:g,props:{href:"https:\u002F\u002Fv2.vuepress.vuejs.org\u002F",rel:[h]},children:[{type:b,value:"vuepress"}]},{type:b,value:", toujours dans l'optique de capitaliser sur vue.js"}]}]},{type:a,tag:j,props:{id:F},children:[{type:b,value:G}]},{type:a,tag:c,props:{},children:[{type:b,value:"Mi-octobre, une démo a pu être faite avec l'application porté sur Nuxt."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Voici quelques résultats :"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"7,7k lignes de code. C'est une diminution de "},{type:a,tag:l,props:{},children:[{type:b,value:"53%"}]},{type:b,value:" de l'application d'origine"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Nuxt et Vue3 permettent effectivement d'être beaucoup plus concis que l'équivalent en JSP. Les applications vue ont été simplifiées également.\nMais une autre explication, et c'est l'un des intérêts des réécritures comme celle-ci. Ca a été aussi l'occasion de détecter des fonctionnalités plus utilisées et de les supprimer."}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"les performances sont globalement meilleures. Tests effectués avec "},{type:a,tag:g,props:{href:"https:\u002F\u002Fk6.io\u002F",rel:[h]},children:[{type:b,value:"K6"}]},{type:b,value:" : Un P95 a 489ms avant pour 271ms après, soit "},{type:a,tag:l,props:{},children:[{type:b,value:"44%"}]},{type:b,value:" d'amélioration"}]},{type:a,tag:d,props:{},children:[{type:b,value:"un score lighthouse en hausse également, 86 vers 94 en performance, 72 vers 84 en accessibilité et 67 vers 83 en best practices.."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Concernant les progrès sur l'accessibilité, tout n'est pas lié au fait d'utiliser nuxt mais aussi à une utilisation massive du design system Malt alors que l'ancienne app l'utilisait peu."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Une seconde application a été migrée entre mi-octobre et décembre, cette fois très centrale puisqu'il s'agit de la page d'accueil et de quelques pages de contenu.\nCette fois, le SSR était obligatoire."},{type:a,tag:f,props:{},children:[]},{type:b,value:"\nSans rentrer dans le détail, on utilise Prismic et nuxt prismic pour créer ce contenu."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Les résultats sur cette application sont les suivants :"}]},{type:a,tag:e,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"43% de code en moins"}]},{type:a,tag:d,props:{},children:[{type:b,value:"le score lighthouse est passé de 90 a 96 en perf, 89 a 95 en accessibilité et 67 a 83 en best practices."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"On constate donc que pour l'instant, en moyenne, on allège la base de code des applications front de plus de 40% ce qui est au-dessus de nos attentes initiales."},{type:a,tag:f,props:{},children:[]},{type:b,value:"\nLe temps de démarrage s'améliore lui de 22% sur staging et prod."}]},{type:a,tag:c,props:{},children:[{type:b,value:"La surprise vient de l'amélioration des performances, ce n'était pas un objectif initialement. Les gains sont très forts sur la première app.\nIls existent aussi sur la seconde application mais malgré tout le \"server response time\" reste très grand et nous devons travailler pour l'améliorer.\nCependant, pour un premier jet, c'est très satisfaisant."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour rajouter quelques éléments, 5 personnes étaient impliquées en décembre à temps plein sur le projet."},{type:a,tag:f,props:{},children:[]},{type:b,value:"\nEn janvier, 10,53% des applications a été migré."},{type:a,tag:f,props:{},children:[]},{type:b,value:"\nLe projet, reconnu comme étant stratégique, est désormais une priorité de l'ensemble de l'équipe produit et sera mis en œuvre progressivement durant toute l'année."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et voilà qui conclura cette première étape. Ce billet pourrait faire l'objet de suite plus tard, soit pour donner un état d'avancement, soit pour aller plus en profondeur sur certains sujets techniques bien spécifiques."}]}],toc:{title:m,searchDepth:i,depth:i,links:[{id:o,depth:i,text:p},{id:q,depth:i,text:r},{id:s,depth:i,text:t},{id:w,depth:i,text:x},{id:y,depth:i,text:z},{id:B,depth:i,text:C},{id:D,depth:i,text:E},{id:F,depth:i,text:G}]}},_type:"markdown",_id:"content:articles:2023:01:migration-to-nuxt.md",_source:"content",_file:"articles\u002F2023\u002F01\u002Fmigration-to-nuxt.md",_extension:"md"}},prerenderedAt:1676842540383}}("element","text","p","li","ul","br","a","nofollow",2,"h2",false,"strong","",".","contexte","Contexte","lorigine-du-projet","L'origine du projet","la-question-à-1m-de-dollars","La question à 1M de dollars","tip","https:\u002F\u002Fwww.malt.engineering\u002F","présentation-de-nuxt","Présentation de nuxt","etude-préalable","Etude préalable","https:\u002F\u002Fgitlab.com\u002Fmaltcommunity\u002Fpublic\u002Fsingapore-prototypes","un-premier-prototype","Un premier prototype","un-effet-de-bord-une-documentation-totalement-remaniée","Un effet de bord, une documentation totalement remaniée","les-résultats","Les résultats"))