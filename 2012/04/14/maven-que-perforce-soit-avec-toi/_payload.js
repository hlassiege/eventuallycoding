export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){return {data:{"/articles/2012/04/14/maven-que-perforce-soit-avec-toi":{_path:"\u002Farticles\u002F2012\u002F04\u002F14\u002Fmaven-que-perforce-soit-avec-toi",_dir:"14",_draft:i,_partial:i,_locale:j,_empty:i,title:"Maven : que Perforce soit avec toi",description:"![](\u002Fimages\u002Fps-kztpdvdc-170x170-751.jpg \"ps.kztpdvdc.170x170-75\")\nJ'ai un peu galéré dernièrement pour configurer correctement Perforce avec Maven et...",id:"506",date:"2012-04-14",categories:["waza"],tags:[k,"nexus",l],img:"ps-kztpdvdc-170x170-751.jpg",cover:"cover3.jpg",readingTime:{text:"3 min read",minutes:2.49,time:149400,words:498},body:{type:"root",children:[{type:a,tag:c,props:{},children:[{type:a,tag:"img",props:{alt:j,src:"\u002Fimages\u002Fps-kztpdvdc-170x170-751.jpg",title:"ps.kztpdvdc.170x170-75"},children:[]}]},{type:a,tag:c,props:{},children:[{type:b,value:"J'ai un peu galéré dernièrement pour configurer correctement Perforce avec Maven et notamment le plugin Maven release. Je vous propose donc un petit billet sur le sujet."},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nBref, ça va parler de release avec maven, de déploiement sur Nexus et  de label perforce."},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nTout un programme."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Tout d'abord petit rappel, si vous avez la chance de ne pas connaitre Perforce (sic...), il s'agit d'un gestionnaire de source tout comme peut l'être Subversion, Git ou Mercurial. Enfin \"tout comme peut l'être\", faut le dire vite... Je passerais rapidement sur l’outil en lui-même car je l’utilise contraint et forcé."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Or comme ce magnifique outil est relativement indigeste et loin d’être simple à utiliser je vous propose de voir rapidement la configuration nécessaire pour l’intégration avec Maven."}]},{type:a,tag:c,props:{},children:[{type:b,value:"A noter que si vraiment Perforce vous insupporte, et je peux comprendre, vous pouvez utiliser un proxy git-perforce. Je vous invite dans ce cas à lire "},{type:a,tag:f,props:{href:"http:\u002F\u002Fjeanchristophegay.com\u002Fgit-p4-au-secours-de-perforce\u002F",rel:[g]},children:[{type:b,value:"le billet Jean Chistophe Gay"}]},{type:b,value:" sur le sujet. (Au passage c’est un super collègue, prenez le sur vos missions ;))"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Mais revenons à nos moutons, même en utilisant git-p4 ca ne vous épargnera pas la douleur de devoir releaser sur Perforce de temps en temps."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Tout d’abord petit rappel,"}]},{type:a,tag:m,props:{id:"le-versionning-avec-maven"},children:[{type:b,value:"le versionning avec Maven"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Maven repose sur un notion forte de version d’artefact. Chaque dépendance que vous déclarez dans votre pom.xml a un numéro de version qui doit être explicitement déclaré. Par exemple :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"com.localizeyourapp\nnemrodclient\n1.1"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Si vous utilisez plusieurs modules, chaque module doit avoir sa version. (Ce qui compliquera heureusement la tâche de ceux qui pensait qu’il suffirait de changer le numéro de version a un seul endroit pour en faire une release....)"}]},{type:a,tag:c,props:{},children:[{type:b,value:"pom.xml\n|\n`---module1\n| |\n| `---pom.xml\n`---module2\n| |\n| `---pom.xml\n`---module3\n|\n`---pom.xml"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Le plugin maven release permet justement de suivre quelques bonnes pratiques lors de la release de votre projet :"}]},{type:a,tag:n,props:{},children:[{type:a,tag:e,props:{},children:[{type:b,value:"Vérification que vous n’avez aucune modifiation non commité en local"}]},{type:a,tag:e,props:{},children:[{type:b,value:"Vérification que vous ne dépendez d’aucune dépendance instable (SNAPSHOT)"}]},{type:a,tag:e,props:{},children:[{type:b,value:"Lancement des tests"}]},{type:a,tag:e,props:{},children:[{type:b,value:"Changement automatique de toutes les versions de POM de votre projet (sous modules inclus)"}]},{type:a,tag:e,props:{},children:[{type:b,value:"Création d’un tag sous votre gestionnaire de source"}]},{type:a,tag:e,props:{},children:[{type:b,value:"Déploiement de l’artefact dans un repo Maven (nexus par exemple)"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ouf, on a de la chance, le plugin maven-release supporte Perforce"}]},{type:a,tag:n,props:{},children:[{type:a,tag:e,props:{},children:[{type:a,tag:f,props:{href:o,rel:[g]},children:[{type:b,value:o}]}]},{type:a,tag:e,props:{},children:[{type:a,tag:f,props:{href:p,rel:[g]},children:[{type:b,value:p}]}]},{type:a,tag:e,props:{},children:[{type:a,tag:f,props:{href:q,rel:[g]},children:[{type:b,value:q}]}]}]},{type:a,tag:m,props:{id:"configuration"},children:[{type:b,value:"Configuration"}]},{type:a,tag:r,props:{id:l},children:[{type:b,value:s}]},{type:a,tag:c,props:{},children:[{type:b,value:"Prérequis :"},{type:a,tag:d,props:{},children:[]},{type:b,value:"\np4 doit être disponible en ligne de commande"},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nvous devez avoir certaines variables disponibles en variable d’environnement"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Les variables nécessaires pour Perforce peuvent être sous forme de variable d’environnement, ou bien écrites dans un fichier p4.ini à la racine de votre dépot. Le fichier doit contenir les informations suivantes :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"P4PORT=perforce:1992"},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nP4CHARSET=utf16le-bom"},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nP4COMMANDCHARSET=winansi"},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nP4CLIENT=hlassiege_1992"},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nP4USER=v-hlassiege"},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nP4PASSWORD=****"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Posez pas de question sur l’encodage, ca fait partie des merveilles de Perforce..."}]},{type:a,tag:r,props:{id:k},children:[{type:b,value:t}]},{type:a,tag:c,props:{},children:[{type:b,value:"Côté Maven, il vous faut quelque configuration dans votre pom.xml."},{type:a,tag:d,props:{},children:[]},{type:b,value:"\nLa balise scm :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"scm:perforce:myHost:1992:\u002F\u002Fdepot\u002Fpoms-parent\u002Fmain\nscm:perforce:myHost:1992:\u002F\u002Fdepot\u002Fpoms-parent\u002Fmain"}]},{type:a,tag:c,props:{},children:[{type:b,value:"La partie distribution management pour que Maven sache sur quel repository déployer ces artefacts :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"inhouse\ndav:"},{type:a,tag:f,props:{href:u,rel:[g]},children:[{type:b,value:u}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"inhouse_snapshot\ndav:"},{type:a,tag:f,props:{href:v,rel:[g]},children:[{type:b,value:v}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ensuite il est important que la personne (ou l’outil si vous l’automatisez via votre intégration continue) qui va déclencher la release utilise un fichier settings.xml qui déclare les identifiants de connexion à Nexus :"}]},{type:a,tag:c,props:{},children:[{type:b,value:"inhouse\nmyLogin\nmyPwd"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ensuite, une fois arrivé là, le reste est trivial"}]},{type:a,tag:c,props:{},children:[{type:b,value:"cd C:DEVperforce1992depotpoms-parentmain\nmvn release:prepare\nmvn release:perform"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Voilà, désormais que Perforce soit avec vous. Ou pas..."}]}],toc:{title:j,searchDepth:h,depth:h,links:[{id:l,depth:h,text:s},{id:k,depth:h,text:t}]}},_type:"markdown",_id:"content:articles:2012:04:14:maven-que-perforce-soit-avec-toi.md",_source:"content",_file:"articles\u002F2012\u002F04\u002F14\u002Fmaven-que-perforce-soit-avec-toi.md",_extension:"md"}},prerenderedAt:1690268485485}}("element","text","p","br","li","a","nofollow",2,false,"","maven","perforce","h1","ul","http:\u002F\u002Fwww.perforce.com\u002Fperforce\u002Fr11.1\u002Fmanuals\u002Fp4maven\u002Findex.html","http:\u002F\u002Fkb.perforce.com\u002Farticle\u002F1023\u002Fmaven-integration","http:\u002F\u002Fmaven.apache.org\u002Fscm\u002Fscms-overview.html","h2","Perforce","Maven","http:\u002F\u002FrepositoryHost:8081\u002Fnexus\u002Fcontent\u002Frepositories\u002Fegencia\u002F","http:\u002F\u002FrepositoryHost:8081\u002Fnexus\u002Fcontent\u002Frepositories\u002Fegencia-snapshot\u002F"))