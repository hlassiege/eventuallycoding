export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B){return {data:{"/articles/2023/01/faut-il-reecrire-de-zero":{_path:"\u002Farticles\u002F2023\u002F01\u002Ffaut-il-reecrire-de-zero",_dir:"01",_draft:l,_partial:l,_locale:q,_empty:l,title:"Et s'il était temps de tout réécrire ?",description:"Une réécriture, c'est souvent l'aboutissement d'une dette technique trop lourde à rembourser, un aveu d'échec par rapport à une application qu'on ne parvient plus à faire évoluer, le cout et les risques étant trop importants. Mais si les évènements qui amènent à tout réécrire sont déjà en soit un problème, la réécriture elle-même est un piège qui peut tuer un produit.",id:"9",date:"2023-01-02",tags:["rewrite","refactoring","malt"],cover:"itsatrap.jpg",readingTime:{text:"9 min read",minutes:8.66,time:519600,words:1732},body:{type:"root",children:[{type:a,tag:c,props:{},children:[{type:b,value:"Ce titre sonne comme un message d'avertissement n'est-ce pas ? Je suis plutôt très frileux quand il s'agit de tout réécrire en partant de zéro et je rejoins l'avis de Joel Spolsky qui en parlait comme "},{type:a,tag:f,props:{href:"https:\u002F\u002Fwww.joelonsoftware.com\u002F2000\u002F04\u002F06\u002Fthings-you-should-never-do-part-i\u002F",rel:[m]},children:[{type:b,value:"l'une des plus grosses erreurs à faire"}]},{type:b,value:n}]},{type:a,tag:c,props:{},children:[{type:b,value:"Une réécriture, c'est souvent l'aboutissement d'une dette technique trop lourde à rembourser, un aveu d'échec par rapport à une application qu'on ne parvient plus à faire évoluer, le coût et les risques étant trop importants. Mais si les évènements qui amènent à tout réécrire sont déjà en soit un problème, la réécriture elle-même est un piège qui peut tuer un produit."},{type:a,tag:g,props:{},children:[]},{type:b,value:"\nLes exemples sont légions. De nombreuse entreprise ont perdu des années à réécrire un produit puis mis la clé sous la porte quand le marché ne les a pas attendus."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Mais pourquoi je vous parle de tout ça ? Est-ce que Malt est dans une situation aussi catastrophique qu'il est nécessaire de tout refaire ?\nEh bien, c'est ce que je vous propose de voir dans ce billet. On va parler de l'évolution de la stack technique de Malt depuis 2012, de gestion de la dette et de comment nous envisageons de rembourser notre dette de façon itérative par composants."}]},{type:a,tag:h,props:{id:r},children:[{type:b,value:s}]},{type:a,tag:c,props:{},children:[{type:b,value:"La première version de Malt date de 2012. C'était à ce moment-là une application monolithique Java\u002FSpring boot, qui tournait sur un PAAS (Heroku) avec une base de données mongo et un moteur de recherche Elasticsearch.\nLe frontend était majoritairement en vanilla JS avec quelques touches de AngularJS.\nOn utilisait des JSP comme moteur de templating, choix plutôt bon à ce moment précis."}]},{type:a,tag:i,props:{},children:[{type:a,tag:c,props:{},children:[{type:a,tag:j,props:{alt:"Stack 2012",src:"\u002Fimages\u002Fstack-2012.jpg"},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"En 2014 l'application s'est étoffé. J'ai pu passer à temps plein suite à une levée de fonds. Nous sommes 2 cofondateurs sur 3 à avoir une casquette technique et travailler sur le site.\nEntre temps on a introduit Redis pour la gestion des sessions et du cache et RabbitMQ pour introduire du découplage entre certaines parties fonctionnelles via un pattern observer."}]},{type:a,tag:c,props:{},children:[{type:b,value:"On se marche un tout petit peu dessus de temps en temps et on conclut que ce serait intéressant de pouvoir sortir des parties du site indépendamment. Cela permettait par exemple de sortir le moteur de recherche tandis qu'on continuerait à avoir le moteur de paiement en brouillon.\nEn plus de cela, le cout du service Heroku et de ces addons (mongo et Redis), la robustesse de certains services en SAAS (Elastic notamment) font que l'alternative SAAS\u002FPAAS commence à être moins pertinente."}]},{type:a,tag:c,props:{},children:[{type:b,value:"On décide donc de séparer l'application en plusieurs petites applications, de rajouter un reverse proxy Nginx devant et de tout faire tourner sur des serveurs dédiés OVH."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Même rétrospectivement, il est difficile de juger l'ensemble de ces décisions.\nLa séparation en plusieurs applications était discutable à ce stade. D'autant que nous utilisions déjà une stratégie de feature flipping pour désactiver des parties de code.\nMais la migration sur OVH, notamment pour des raisons de coût des addons était plutôt pragmatique et nous a apporté beaucoup de souplesse pour la suite."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Si cette partie vous intéresse, "},{type:a,tag:f,props:{href:"https:\u002F\u002Feventuallycoding.com\u002F2014\u002F05\u002F09\u002Fpaas-or-not-paas-that-is-the-question\u002F",rel:[m]},children:[{type:b,value:"un billet de blog sur la migration vers OVH avait été écrit à l'époque"}]},{type:b,value:n}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour l'anecdote, l'ensemble de l'application et des bases de données tournait sur une seule machine !"}]},{type:a,tag:i,props:{},children:[{type:a,tag:c,props:{},children:[{type:a,tag:j,props:{alt:"Stack 2014",src:"\u002Fimages\u002Fstack-2014.jpg"},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Entre 2014 et 2018, l'équipe Produit s'est étoffée jusqu'à 30 personnes. L'architecture s'est complexifiée pour répondre à des besoins plus forts en termes de résilience, sécurité, scalabilité.\nNous sommes notamment passés en partie sur OVH Cloud. Ça a été l'occasion d'introduire Terraform. Consul a été introduit pour la découvrabilité des services.\nVault a été ajouté pour la gestion des clés privée. Postgresql a été introduit en 2019 suite à de nombreuses déconvenues avec Mongo."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Côté frontend on a introduit Vue.js et supprimé AngularJs (EDIT : en fait, apparemment pas partout). Nos modules en Vanilla JS se sont structurés pour donner lieu à un petit framework maison assez léger. Handlebars nous a permis de partager des templates de pages entre client et serveurs et donc résoudre quelques soucis de SEO."}]},{type:a,tag:i,props:{},children:[{type:a,tag:c,props:{},children:[{type:a,tag:j,props:{alt:t,src:"\u002Fimages\u002Fstack-2018.jpg"},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Suite à 2018, nous avons rencontré de nombreuses limitations sur le cloud OVH. A l'époque leur implémentation de l'api OpenStack n'était pas stable et nous rencontrions de nombreuses erreurs 500. Le manque de services inclus nous imposait de reconstruire des solutions, sans que ce soit notre cœur de métier (la gestion des clés privée, la gestion des logs, la réplication mongo vers PG ou la création d'un datawarehouse par exemple).\nNous avons donc décidé d'aller sur GCP en 2019 pour bénéficier de services plus packagés. Plus exactement nous tournons désormais sur GKE (Kubernetes managé). Traefik a définitivement remplacé Nginx en tant que reverse proxy grâce à son intégration native avec Docker\u002FKube."}]},{type:a,tag:i,props:{},children:[{type:a,tag:c,props:{},children:[{type:a,tag:j,props:{alt:t,src:"\u002Fimages\u002Fstack-2019.jpg"},children:[]}]}]},{type:a,tag:h,props:{id:u},children:[{type:b,value:v}]},{type:a,tag:c,props:{},children:[{type:b,value:"Mis bout à bout, chaque décision décrite précédemment s'explique. Elles ont toutes permis de construire la plateforme Malt que l'on connaît aujourd'hui et je les valide donc à posteriori. Refaire l'histoire ne préjuge pas que nous serions arrivés au même résultat."},{type:a,tag:g,props:{},children:[]},{type:b,value:"\nMais si ces décisions sont bonnes, pourquoi parler de dette technique ?"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Eh bien parce que la dette, ce n'est pas uniquement lié au code de mauvaise qualité."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Déjà posons une définition simple, la dette technique, c'est la somme des choix visant à gagner du temps mais qui vont induire des couts futurs à rembourser.\nPour simplifier, la dette permet d'acheter du temps qu'il faudra rembourser par la suite."}]},{type:a,tag:c,props:{},children:[{type:b,value:"J'aime beaucoup l'analogie avec la dette financière car :"}]},{type:a,tag:k,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"la dette n'est pas toujours négative, elle peut servir à aller vite à un instant T, c'est de l'investissement. Dans le cas idéal, on peut le rembourser quand on a obtenu les moyens pour le faire."}]},{type:a,tag:d,props:{},children:[{type:b,value:"une dette se rembourse avec des intérêts, ces intérêts se cumulent dans le temps, c'est le principe des intérêts composés"}]},{type:a,tag:d,props:{},children:[{type:b,value:"lorsqu'on ne peut plus rembourser, on fait défaut sur une dette. Ce défaut se traduit par une réécriture complète de l'application avec le cout associé. Dans le pire des cas, c'est la fin du produit et de l'entreprise."}]},{type:a,tag:d,props:{},children:[{type:b,value:"la dette technique est soumise à l'inflation et la déflation. Des évènements extérieurs peuvent la faire exploser (ou annuler). Elle n'est donc pas totalement prédictible"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Concernant le dernier point, la dette peut évoluer pour des raisons externes or c'est justement un point important pour répondre à la question initiale.\nLes choix effectués sur Malt ont tous été fait en fonction d'un contexte donné."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Mais :"}]},{type:a,tag:k,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"les contraintes ayant mené à certains choix ont évolué. Par exemple des technologies inexistantes en 2012 sont désormais standard (la gestion du SSR pour les applis frontends par exemple)"}]},{type:a,tag:d,props:{},children:[{type:b,value:"la taille de l'équipe entraine des contraintes supplémentaires sur les standards de développement"}]},{type:a,tag:d,props:{},children:[{type:b,value:"la taille de l'entreprise et de la base utilisateur entraine des contraintes supplémentaires sur les technologies à mettre en œuvre (Exemple, un batch qui prend 10minutes sur une faible volumétrie et qui prend 2h aujourd'hui)"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"etc..."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Bref, certains choix qui ne sont pas vus initialement comme de la dette peuvent en devenir par la suite."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Attention, je ne suis pas en train de dire qu'il faut anticiper les contraintes futures. Pour beaucoup d'entre elles je préconise d'attendre jusqu'au dernier moment car leur résolution induit souvent une complexité supplémentaire qui a aussi un cout et qui grève la vélocité d'équipe."}]},{type:a,tag:h,props:{id:w},children:[{type:b,value:x}]},{type:a,tag:c,props:{},children:[{type:b,value:"Sur Malt nous avons toujours eu un principe fort d'autonomie.\nChaque personne est encouragée à avoir un regard critique, pour proposer et améliorer la stack technologique. Ces choix sont discutés, adoptés ou rejetés collégialement."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Cette approche participative nous a été très utile. Les choix ont toujours été très efficaces, innovants tout en restant pragmatiques."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Par exemple nous avons :"}]},{type:a,tag:k,props:{},children:[{type:a,tag:d,props:{},children:[{type:a,tag:f,props:{href:"https:\u002F\u002Feventuallycoding.com\u002F2019\u002F07\u002F03\u002Fmongodb-vers-postgresql",rel:[m]},children:[{type:b,value:"introduit PGSQL pour remplacer progressivement Mongo"}]}]},{type:a,tag:d,props:{},children:[{type:b,value:"basculé progressivement de Java à Kotlin"}]},{type:a,tag:d,props:{},children:[{type:b,value:"basculé progressivement de Javascript à Typescript"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Mais, dans notre approche, nous avons aussi souvent décidé de faire ces ajouts de façon progressive sur le nouveau code, sans effectuer de migration complète de l'ancien code.\nC'était un choix logique à ce moment-là, mais qui a creusé notre dette technique."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ce choix a une conséquence forte : l'explosion des dépendances."},{type:a,tag:g,props:{},children:[]},{type:b,value:"\nEt ces dépendances ont des impacts importants"}]},{type:a,tag:k,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"sur la charge cognitive de chaque développeur qui tombe régulièrement sur des façons différentes de travailler"}]},{type:a,tag:d,props:{},children:[{type:b,value:"sur les temps de démarrage des applications qui chargent de nombreuses dépendances"}]},{type:a,tag:d,props:{},children:[{type:b,value:"sur les stations de travail qui sont doivent faire tourner une stack de plus en plus complexe"}]},{type:a,tag:d,props:{},children:[{type:b,value:"sur intellij qui galère de façon significative. Pas uniquement parce que la base de code est importante, mais aussi parce qu'il a de nombreuses librairies et langages à analyser. Et chaque plugin coute !"},{type:a,tag:"sup",props:{},children:[{type:a,tag:f,props:{href:"#user-content-fn-1",ariaDescribedBy:[o],dataFootnoteRef:p,id:"user-content-fnref-1"},children:[{type:b,value:"1"}]}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Nous avons de nombreuses métriques que l'on regarde constamment, sur nos temps de builds, taux de disponibilité et j'en passe. Mais pour certaines, l'évolution s'est faite progressivement dans le temps, ce qui n'attire pas l'attention."},{type:a,tag:g,props:{},children:[]},{type:b,value:"\nPar exemple"}]},{type:a,tag:k,props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"le temps de démarrage d'une appli est désormais supérieur à 50secondes sur certains postes de travail"}]},{type:a,tag:d,props:{},children:[{type:b,value:"les stations de dev nécessitent une configuration très lourde pour faire tourner l'ensemble de la stack (imaginez docker avec des containers ES, Redis, Mongo, PgSQL, Traefik etc...)."}]},{type:a,tag:d,props:{},children:[{type:b,value:"les indexations intellij qui peuvent durer des heures avec une empreinte mémoire \u003E 8Go dans les dernières versions"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et tout cela entraîne une augmentation importante des temps de cycle de développement."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Malgré tout, jusqu'ici tout va encore bien."}]},{type:a,tag:i,props:{},children:[{type:a,tag:c,props:{},children:[{type:a,tag:j,props:{alt:"This is fine",src:"\u002Fimages\u002Fthisisfine.jpg"},children:[]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Mais nous savons par expérience que nous sommes arrivés au moment où, si nous ne prenons pas d'actions fortes, dans un an nous devrons faire un défaut partiel de notre dette, qui se traduirait par un freeze code de plusieurs mois pour rembourser."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et ça, c'est ce qu'il faut éviter à tout prix."}]},{type:a,tag:h,props:{id:y},children:[{type:b,value:z}]},{type:a,tag:c,props:{},children:[{type:b,value:"En 2022, parmi nos 5 OKR d'entreprise, nous avions un OKR un peu particulier : KISS, Keep it simple stupid."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Cet enjeu de simplification rejoint totalement le sujet développé dans le chapitre précédent. Il faut simplifier pour diminuer la "},{type:a,tag:A,props:{},children:[{type:b,value:"charge cognitive par développeur"}]},{type:b,value:" et "},{type:a,tag:A,props:{},children:[{type:b,value:"la charge induite sur nos outils"}]},{type:b,value:n}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour faire le lien avec l'introduction de ce billet, nous n'allons pas réécrire tout Malt de zéro bien évidemment. Mais nous allons travailler à simplifier Malt à travers plusieurs projets."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et c'est l'un de ces projets dont je souhaite parler prochainement, la modernisation complète de notre stack frontend, comment passer de 6 technos frontend à uniquement une seule, et comment se débarrasser totalement de Java côté frontend (les fameuses JSP)."},{type:a,tag:g,props:{},children:[]},{type:b,value:"\nDe façon un peu poétique, ce projet s'intitule Singapore car c'est l'histoire d'un voyage en dehors de l'île de Java."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Restez à l'écoute, ce sera le sujet du prochain billet."}]},{type:a,tag:"section",props:{className:["footnotes"],dataFootnotes:p},children:[{type:a,tag:h,props:{id:o,className:["sr-only"]},children:[{type:b,value:B}]},{type:a,tag:"ol",props:{},children:[{type:a,tag:d,props:{id:"user-content-fn-1"},children:[{type:b,value:"Un exemple simple pour comprendre. Nous avons aujourd'hui 3 façons différentes d'interagir avec PgSQL en Java : mybatis, Jooq, Spring Template. La grande majorité utilise Jooq mais Intellij doit mobiliser 3 plugins pour analyser, proposer de l'auto complétion etc... (Même si le plugin Spring est de toute façon actif par défaut) "},{type:a,tag:f,props:{href:"#user-content-fnref-1",ariaLabel:"Back to content",className:["data-footnote-backref"],dataFootnoteBackref:p},children:[{type:b,value:"↩"}]}]}]}]}],toc:{title:q,searchDepth:e,depth:e,links:[{id:r,depth:e,text:s},{id:u,depth:e,text:v},{id:w,depth:e,text:x},{id:y,depth:e,text:z},{id:o,depth:e,text:B}]}},_type:"markdown",_id:"content:articles:2023:01:faut-il-reecrire-de-zero.md",_source:"content",_file:"articles\u002F2023\u002F01\u002Ffaut-il-reecrire-de-zero.md",_extension:"md"}},prerenderedAt:1686557517957}}("element","text","p","li",2,"a","br","h2","image","img","ul",false,"nofollow",".","footnote-label",true,"","un-petit-peu-dhistoire","Un petit peu d'histoire","Stack 2019","quest-ce-que-la-dette-technique","Qu'est ce que la dette technique ?","constat-sur-malt","Constat sur Malt","kiss","KISS","strong","Footnotes"))