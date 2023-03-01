export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){return {data:{"/articles/2012/10/08/pragmatic-programmer":{_path:"\u002Farticles\u002F2012\u002F10\u002F08\u002Fpragmatic-programmer",_dir:"08",_draft:j,_partial:j,_locale:d,_empty:j,title:"Pragmatic programmer",description:"Et si on parlait du développement pragmatique ? ",id:"602",date:"2012-10-08",categories:["waza"],img:"vera_c10.jpg",cover:"cover4.jpg",readingTime:{text:"6 min read",minutes:5.06,time:303600,words:1012},body:{type:"root",children:[{type:a,tag:c,props:{},children:[{type:a,tag:k,props:{alt:d,src:"\u002Fimages\u002Fvera_c10.jpg",title:"vera_c10"},children:[]}]},{type:a,tag:c,props:{},children:[{type:b,value:"\""},{type:a,tag:e,props:{href:"http:\u002F\u002Fwww.youtube.com\u002Fwatch?v=27tbHlDKiko",rel:[f]},children:[{type:b,value:"Et pendant ce temps à Véra Cruz"}]},{type:b,value:"\" vous vous rappelez de cette scène dans la cité de la peur ?"}]},{type:a,tag:c,props:{},children:[{type:b,value:"C'est un peu l'état d'esprit dans lequel je me trouve face aux débats stériles sur internet : il y a toujours un endroit paisible ailleurs où la vie suit son petit bonhomme de chemin."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Tiens prenons un exemple, récemment je voyais des tweets sur Java Vs Scala, voire même sur OOP Vs FP. J'y ai vu passer de belles absurdités, que je mets sur le compte de la taille max d'un tweet qui ne peut refléter la pensée complète de l'auteur, enfin j'espère... Et pendant ce temps là, je me mets tranquillement à Python et je découvre un petit langage bien sympathique où les lambda expressions, le multi catch, le try with ressource, les varargs, les paramètres nommés  existent depuis belle lurette. Je découvre aussi que l'écosystème est mature (Gunicorn, Celery) et que faire du Web avec Django c'est aussi plaisant qu'avec Play Framework sauf qu'il existe 1400 modules, largement plus que les plugins Play et Grails réunis."}]},{type:a,tag:c,props:{},children:[{type:a,tag:k,props:{alt:d,src:"\u002Fimages\u002FiPOS6.gif",title:"ah oui quand même !"},children:[]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Mais revenons aux trolls, en 98 lorsque je faisais du Java à l'école j'ai moi-même participé à des débats de trolls C++ et Java.\nPlus tard vers 2003 j'ai encore trollé cette fois lorsque je faisais du PHP. Et PHP à l'époque pour faire du Web c'était vraiment bien."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Petite parenthèse, un troll quand il s'agit de second degré c'est parfait, tout comme en sport \"chambrer\" fait partie du jeu, par exemple,\nc'est un peu comme si je disais que la lisibilité du "},{type:a,tag:e,props:{href:"http:\u002F\u002Ffr.wikipedia.org\u002Fwiki\u002FListe_de_programme_Hello_world#Malbolge",rel:[f]},children:[{type:b,value:"Malbolge"}]},{type:b,value:" était comparable à celle de Scala"}]},{type:a,tag:h,props:{code:n,language:"Scala",meta:o},children:[{type:a,tag:p,props:{},children:[{type:a,tag:h,props:{__ignoreMap:d},children:[{type:b,value:n}]}]}]},{type:a,tag:h,props:{code:q,meta:o},children:[{type:a,tag:p,props:{},children:[{type:a,tag:h,props:{__ignoreMap:d},children:[{type:b,value:q}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Sans rancune les Scalaistes, c'était pour la démo ;)"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Commençons la minute psychanalyse, pourquoi troller ?"},{type:a,tag:"br",props:{},children:[]},{type:b,value:"\nApprendre un langage\u002Fframework\u002Ftechno c'est beaucoup d'énergie. Vous avez peut être passé vos études dessus, une certification, vous avez écrit des articles. Qu'un empaffé vienne vous dire que votre langage est pourri, conçus par des idiots et mal utilisé, forcément ça peut provoquer quelques aigreurs d'estomac."}]},{type:a,tag:c,props:{},children:[{type:b,value:"En fait maîtriser un langage, et encore plus un paradigme de programmation c'est long et on ne devient très productif qu'après un certain temps, après avoir eu un certain déclic. Alors qu'est-ce qu'ils viennent vous chercher ces petits newbies qu'ont juste lu un tutorial en ligne !"}]},{type:a,tag:c,props:{},children:[{type:a,tag:k,props:{alt:d,src:"\u002Fimages\u002FUyxD0.gif",title:"Quand j'entends mon collègue dire que les programmeurs Java savent pas programmer parce qu'ils comprennent rien à la gestion de la mémoire"},children:[]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Aujourd'hui après plus de 10 ans de dev, j'ai fait (liste non exhaustive) du C, C++, Visual Basic (argh), Java, C#, Python, PHP et actuellement je m'amuse à passer les cours en ligne Scala sur le site de "},{type:a,tag:e,props:{href:"https:\u002F\u002Fwww.coursera.org\u002F",rel:[f]},children:[{type:b,value:"Coursera"}]},{type:b,value:". Suis-je devenu plus modéré ?"}]},{type:a,tag:r,props:{id:s},children:[{type:b,value:t}]},{type:a,tag:c,props:{},children:[{type:b,value:"Vous connaissez \""},{type:a,tag:e,props:{href:"http:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FThe_Pragmatic_Programmer",rel:[f]},children:[{type:b,value:"pragmatic programmer"}]},{type:b,value:"\" ? (En fait j'ai découvert ce bouquin en écrivant ce billet, il faudrait que je le lise)"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Un développeur pragmatique c'est"}]},{type:a,tag:l,props:{},children:[{type:a,tag:g,props:{},children:[{type:b,value:"une personne capable de prendre des choix en fonction du contexte et non en fonction des modes."}]},{type:a,tag:g,props:{},children:[{type:b,value:"une personne ayant un esprit critique, ce qui exclut d'emblée tous les fanboys"}]},{type:a,tag:g,props:{},children:[{type:b,value:"une personne ayant un large spectre de compétence (sans forcément être un expert)"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Je reviens sur le premier point. Qu'est ce qu'on entend par \""},{type:a,tag:m,props:{},children:[{type:b,value:"prendre des choix en fonction du contexte"}]},{type:b,value:"\" ? Vous vous rappelez de la question fondamentale que doit se poser tout bon développeur : "},{type:a,tag:m,props:{},children:[{type:b,value:"Buy or build"}]},{type:b,value:" ?"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pensez-vous que la réponse soit universelle quelque soit le problème ? Si oui, alors vous faites fausse route. Les personnes qui travaillent sur et en dehors votre projet, les délais, la durée de vie escompté de l'application et bien d'autres critères font partie de votre environnement. Et cet environnement conditionne la réponse à "},{type:a,tag:m,props:{},children:[{type:b,value:"\"Buy or build\""}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Prenons un exemple, j'ai vu il y a peu un architecte pousser un choix \"Ruby On Rails\" pour une application mobile. Je ne peux pas dire que ce choix était mauvais, ROR étant même plutôt un bon Framework web. Maintenant resituons le contexte."}]},{type:a,tag:l,props:{},children:[{type:a,tag:g,props:{},children:[{type:b,value:"Cet architecte vit aux US et prend une décision pour une équipe Française constitué uniquement de développeurs Java"}]},{type:a,tag:g,props:{},children:[{type:b,value:"Les profils Ruby sont très rares sur le marché français alors qu'ils sont plus fréquents sur le marché US (désolé je ne retrouve pas mes sources)"}]},{type:a,tag:g,props:{},children:[{type:b,value:"la stack actuelle de déploiement est déjà peu maitrisé, sous entendu pas prête à changer drastiquement immédiatement"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Au regard de ces éléments, le choix était mauvais. Belle illustration de l'architecte dans sa tour d'ivoire non connecté à son environnement."}]},{type:a,tag:r,props:{id:u},children:[{type:b,value:v}]},{type:a,tag:c,props:{},children:[{type:b,value:"Le type ultra consensuel, vous le connaissez ? C'est celui qui accepte tous les compromis pour obtenir un consensus bancal avec tout le monde. Il y a un monde entre \"composer avec son contexte\" et \"se plier à son contexte\". S'il est vrai que le contexte doit être pris en compte, il faut aussi avoir une vision long terme qui a pour objectif de maintenir la dette technique globale à un niveau acceptable. Etre pragmatique ne veut pas dire accepter tous les compromis."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Revenons en 2006, la célèbre année du coup de boule. Neal Ford insistait alors sur le "},{type:a,tag:e,props:{href:"http:\u002F\u002Fmemeagora.blogspot.fr\u002F2006\u002F12\u002Fpolyglot-programming.html",rel:[f]},children:[{type:b,value:"polyglot programming"}]},{type:b,value:". L'idée principale tient en une ligne :"}]},{type:a,tag:w,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"\"It's all about choosing the right tool for the job and leveraging it correctly\""}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Quand je vois que l'on choisit des outils incorrect pour le job me hérisse toujours le poil. Faire des sites web en C++, déporter la logique métier côté base de données, utiliser Perforce ou Websphere c'est juste aimer se tirer des balles dans le pied et pour le coup ça donne envie de réitérer le célèbre coup de boule de 2006. Et quand ces choix sont trop consensuels, j'ai envie d'appliquer double sentence. Mais avouons-le, parfois être pragmatique ou consensuel c'est un peu comme "},{type:a,tag:e,props:{href:"http:\u002F\u002Fwww.youtube.com\u002Fwatch?v=vH2GdDrJpKg",rel:[f]},children:[{type:b,value:"le bon et le mauvais chasseur"}]},{type:b,value:"."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Tiens, comme je viens de tomber sur "},{type:a,tag:e,props:{href:"http:\u002F\u002Fgorban.org\u002Fpost\u002F32873465932\u002Fsoftware-architecture-cheat-sheet",rel:[f]},children:[{type:b,value:"un billet qui me plait bien"}]},{type:b,value:", je vous propose de reprendre une des questions à se poser constamment que ce soit en conception ou en choix d'outil\u002Fframework\u002Ftechno :"}]},{type:a,tag:l,props:{},children:[{type:a,tag:g,props:{},children:[{type:b,value:"Est-ce qu'il existe un autre moyen ?"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Quelles auraient été les autres alternatives ? Pourquoi les ai-je écartés ? Et pour paraphrase l'article original :"}]},{type:a,tag:w,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"Nothing is more dangerous than an idea if it’s the only one you have."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Si vous êtes capable de répondre à cette question, vous vous approchez du but."}]}],toc:{title:d,searchDepth:i,depth:i,links:[{id:s,depth:i,text:t},{id:u,depth:i,text:v}]}},_type:"markdown",_id:"content:articles:2012:10:08:pragmatic-programmer.md",_source:"content",_file:"articles\u002F2012\u002F10\u002F08\u002Fpragmatic-programmer.md",_extension:"md"}},prerenderedAt:1677656750422}}("element","text","p","","a","nofollow","li","code",2,false,"img","ul","em","  trait GenericFunctor[-\u003E\u003E[_, _], -\u003E\u003E\u003E[_, _], F[_]] {\n    def fmap[A, B](f: A -\u003E\u003E B): F[A] -\u003E\u003E\u003E F[B]\n  }\n  (1.right[String] &lt;**&gt; 2.right[String]) { _ + _ + 10 }\n",null,"pre","(=\u003C`:9876Z4321UT.-Q+*)M'&amp;%$H\"!~}|Bzy?=|{z]KwZY44Eq0\u002F{mlk**&nbsp;hKs_dG5[m_BA{?-Y;;Vb'rR5431M}\u002F.zHGwEDCBA@986543W10\u002F.R,+O&lt;\n","h2","pas-modéré-pragmatique","Pas modéré, pragmatique","pragmatique-ne-veut-pas-dire-consensuel","Pragmatique ne veut pas dire consensuel","blockquote"))