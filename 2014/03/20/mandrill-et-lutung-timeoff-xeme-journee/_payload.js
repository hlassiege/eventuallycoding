export default (function(a,b,c,d,e,f,g,h,i,j){return {data:{"/articles/2014/03/20/mandrill-et-lutung-timeoff-xeme-journee":{_path:"\u002Farticles\u002F2014\u002F03\u002F20\u002Fmandrill-et-lutung-timeoff-xeme-journee",_dir:"20",_draft:g,_partial:g,_locale:h,_empty:g,title:"Mandrill et Lutung (timeoff Xeme journée)",description:"_Nous sommes le 4ème jour du timeoff. Ou le 6ème, j’ai arrêté de compter. Désormais je grave des bâtons sur mon clavier pour garder le compte. Jours e...",id:"1065",date:"2014-03-20",categories:["waza"],tags:["mail","mandrill","smtp"],img:"7f64c-mandrill_template.png",cover:"cover1.jpg",readingTime:{text:"4 min read",minutes:3.125,time:187500,words:625},body:{type:"root",children:[{type:b,tag:c,props:{},children:[{type:b,tag:"em",props:{},children:[{type:a,value:"Nous sommes le 4ème jour du timeoff. Ou le 6ème, j’ai arrêté de compter. Désormais je grave des bâtons sur mon clavier pour garder le compte. Jours et nuits se succèdent indistinctement sous lumière artificielle. Nous ne sommes plus que cinq, Jean-Baptiste et Jonathan ont déjà succombé à une bactérie locale. Vincent n’a plus toute sa tête, il répête en boucle “ruby, ruby, j’aurais ta peau”."}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Ce billet aurait largement pu continuer sur ce ton. Je devais faire un billet par jour, je sens que ce ne sera pas simple de trouver un thème suffisamment intéressant par jour. Hier il y a eu trop de pistes démarrées et pas forcément aboutie pour un billet :"}]},{type:b,tag:i,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"utilisation de "},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002FCodeStory\u002Fcode-story-http",rel:[f]},children:[{type:a,value:"Code-story-http"}]},{type:a,value:" et "},{type:b,tag:e,props:{href:"http:\u002F\u002Frometools.github.io\u002Frome\u002F",rel:[f]},children:[{type:a,value:"Rome"}]},{type:a,value:" pour faire un mini site permettant d’aggréger les flux RSS de chaque personne de LT."}]},{type:b,tag:d,props:{},children:[{type:a,value:"discussions enflammées sur les architectures distribuées"}]},{type:b,tag:d,props:{},children:[{type:a,value:"tentative d’explication de concept Scala pour une tête de mule (moi) par Olivier"}]},{type:b,tag:d,props:{},children:[{type:a,value:"présentation de "},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Ftobami\u002Flittlechef",rel:[f]},children:[{type:a,value:"LittleChef"}]},{type:a,value:" par Rony Dray"}]},{type:b,tag:d,props:{},children:[{type:a,value:"explication du jeu de quilles finlandaises par Stuart"}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Finalement j’ai choisi un sujet simple et sympa que je vous propose de découvrir, "},{type:b,tag:e,props:{href:"https:\u002F\u002Fmandrillapp.com\u002F",rel:[f]},children:[{type:a,value:"Mandrill"}]},{type:a,value:" et l’api Java Lutung qui permet de l’utiliser."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Mandrill est une API pour de l’envoi d’email. C’est une boite qui est issu de Mailchimp, l’un des leaders dans les campagnes d’emailing. Si vous ne connaissez pas, sachez qu’il y a déjà plus de 5M de personnes qui l’utilisent et je suis prêt à parier que vous avez déjà reçu une newsletter qui vient d’eux."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Mandrill propose soit un envoi par SMTP classique, soit une API Rest pour l’envoi de vos emails."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Je n’ai pas l’habitude de faire de la pub pour des produits payants, mais il se trouve que cette API est gratuite jusqu’à 12000 mails pour un mois, ce qui est largement suffisant pour de petits besoins."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Ici je ne vais pas m'appesantir sur les nombreuses fonctionnalités sympa :"}]},{type:b,tag:i,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"suivi du taux d’ouverture de vos emails"}]},{type:b,tag:d,props:{},children:[{type:a,value:"suivi des plaintes pour spam"}]},{type:b,tag:d,props:{},children:[{type:a,value:"les webhooks"}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Je vais me contenter de parler de l’API permettant d’envoyer un mail à partir d’un template de mail stocké et géré sur mandrill. Ok, c’est léger mais il est plus de minuit et je fatigue :)"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Le principe ici est simple, vous ne vous préoccupez pas de votre template dans votre application. Celui-ci est stocké chez Mandrill et modifiable indépendamment de votre appli."}]},{type:b,tag:c,props:{},children:[{type:a,value:"En Java nous allons utiliser "},{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Frschreijer\u002Flutung",rel:[f]},children:[{type:a,value:"Lutung"}]},{type:a,value:", un wrapper Java permettant d’interagir au dessus de l’API."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Première étape, vous allez créer un template sur le site :"}]},{type:b,tag:c,props:{},children:[{type:b,tag:e,props:{href:"http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2014\u002F03\u002F7f64c-mandrill_template.png",rel:[f]},children:[{type:b,tag:"img",props:{alt:"mandrill_template",src:"\u002Fimages\u002F7f64c-mandrill_template.png"},children:[]}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Dans cet email vous allez ajouter des placeholders pour vos variables dynamiques, par exemple :"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Bonjour *|RNAME|*"}]},{type:b,tag:c,props:{},children:[{type:a,value:"(je n’aborderais pas l’utilisation de région, permettant de dynamiser de plus grosses parties du mail)"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Ensuite, en Java, créez votre wrapper :"}]},{type:b,tag:c,props:{},children:[{type:a,value:"MandrillApi mandrillApi = new MandrillApi(\"API KEY\");"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Puis on va créer le message avec ces propriétés simples :"}]},{type:b,tag:c,props:{},children:[{type:a,value:"       \u002F\u002F create your message\n       MandrillMessage message = new MandrillMessage();\n       message.setSubject(\"Hello World!\");\n       message.setFromEmail(\""},{type:b,tag:e,props:{href:"mailto:hugo@hopwork.com"},children:[{type:a,value:"hugo@hopwork.com"}]},{type:a,value:"\");\n       message.setFromName(\"Hugo Lassiège\");"}]},{type:b,tag:c,props:{},children:[{type:a,value:"On va activer une fonctionnalité de mandrill permettant d’inliner le CSS utilisé dans votre template. En effet la majorité des clients mail (dont gmail) suppriment toutes les balises style. Mandrill vous propose de lui fournir des templates “normaux” avec des balises style et d’inliner tout le CSS dans les balises HTML au moment de l’envoi."}]},{type:b,tag:c,props:{},children:[{type:a,value:"       message.setInlineCss(true);"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Ensuite on va donner des variables utilisées pour le template afin de remplir des parties dynamiques définies dans le template :"}]},{type:b,tag:c,props:{},children:[{type:a,value:"       List"},{type:b,tag:"merge-var",props:{},children:[{type:a,value:" vars = new ArrayList\u003C\u003E();\n       vars.add(new MergeVar(\"RNAME\", \"Hugo\"));\n       vars.add(new MergeVar(\"MSG\", “Hello !”));\n       message.setGlobalMergeVars(vars);"}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Enfin on va ajouter les destinataires :"}]},{type:b,tag:c,props:{},children:[{type:a,value:"       \u002F\u002F add recipients\n       List"},{type:b,tag:"recipient",props:{},children:[{type:a,value:" recipients = new ArrayList\u003C\u003E();\n       Recipient recipient = new Recipient();\n       recipient.setEmail(\""},{type:b,tag:e,props:{href:"mailto:h.lassiege@gmail.com"},children:[{type:a,value:"h.lassiege@gmail.com"}]},{type:a,value:"\");\n       recipient.setName(\"Hugo Lassiege\");\n       recipients.add(recipient);\n       message.setTo(recipients);\n       message.setPreserveRecipients(true);"}]}]},{type:b,tag:c,props:{},children:[{type:a,value:"Puis dernière étape on va appeler l’envoi sur un template appelé “nouveau-message” :"}]},{type:b,tag:c,props:{},children:[{type:a,value:"       mandrillApi.messages().sendTemplate(\"nouveau-message\", null, message, true);"}]},{type:b,tag:c,props:{},children:[{type:a,value:"Et voilà, l’api n’a rien de plus compliqué."}]},{type:b,tag:c,props:{},children:[{type:a,value:"A noter que vous pouvez également planifier l’envoi de votre email dans le futur, avoir plusieurs destinataires et des variables par destinataires."}]},{type:b,tag:c,props:{},children:[{type:a,value:"Vous pouvez retourner à vos claviers."}]}],toc:{title:h,searchDepth:j,depth:j,links:[]}},_type:"markdown",_id:"content:articles:2014:03:20:mandrill-et-lutung-timeoff-xeme-journee.md",_source:"content",_file:"articles\u002F2014\u002F03\u002F20\u002Fmandrill-et-lutung-timeoff-xeme-journee.md",_extension:"md"},"/articles/2014/03/20/mandrill-et-lutung-timeoff-xeme-journee/relatedArticles":[]},prerenderedAt:1676806140378}}("text","element","p","li","a","nofollow",false,"","ul",2))