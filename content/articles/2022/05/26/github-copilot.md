---
id: "2"
title: "Github Copilot, réflexions après quelques semaines d'utilisation"
description: "En démarrant le side project Coderwatch j'ai pu installer et tester Github Copilot. Et après plusieurs semaines d'utilisation je comprends qu'on est très loin du simple gadget."
date: "2022-05-26"
categories:
  - "Tech"
tags:
  - "ML"
  - "IA"
  - "Dev Experience"
img: "GitHub-1.jpg"
cover: "GitHub-1.jpg"
---


En démarrant le side project [Coderwatch](/2022/04/04/cest-lhistoire-dun-side-project) j'ai pu installer et tester [Github Copilot](https://copilot.github.com/). Et après plusieurs semaines d'utilisation je comprends qu'on est très loin du simple gadget.

Il faut qu'on en parle :) 

Est-ce que cet outil signe un tournant majeur dans notre métier ? En tout cas il pourrait y contribuer.

## Mais tout d'abord, comment ça marche github copilot ?

En très résumé, Copilot s'appuie sur un modèle de Machine Learning de [OpenAI](https://openai.com/about/) : [OpenAI Codex](https://openai.com/blog/openai-codex/).
Arrêtons-nous déjà un instant sur OpenAI.
Si vous ne connaissez pas, il s'agit d'une entreprise dont l'objectif est : "de créer une intelligence artificielle qui bénéficiera à toute l'humanité". Vous seriez peut-être surpris de savoir que les deux présidents actuels sont Elon Musk et Sam Altman.
Et dans les projets déjà sortis par OpenAI on retrouve GPT-3 ou Dall-E qui sont tout bonnement incroyables.

Reprenons, donc Copilot s'appuie sur OpenAI Codex et sur le contexte de votre code (le code déjà écrit, les commentaires, les noms de fonctions ou de variables etc...) 
pour proposer des suggestions. Ces suggestions sont acceptées ou non par les utilisateurs ce qui contribue à renforcer l'apprentissage de Copilot.

![Comment ça marche](/images/github-copilot.png)


## Quelques exemples

Concrètement j'ai envie de vous montrer des vrais cas d'usages que j'ai eu récemment. 
Les exemples sur le site de Copilot sont déjà incroyables, mais vous pourriez vous dire qu'ils ont été sélectionnés pour mettre une belle couverture sur leur site et qu'ils ne sont pas représentatifs.

Prenons le premier exemple. Très récemment j'ai eu le besoin de travailler en Javascript pour remplacer chaque lien vers une vidéo youtube, par le player youtube afin d'embarquer la vidéo directement dans le texte.
J'avais vaguement l'idée de comment le faire, trouver les liens via une regexp puis créer un élément dans le DOM pour y placer la vidéo.  
J'ai uniquement fait la déclaration de la variable isYoutubeVideo. Copilot m'a ensuite suggéré toute la suite :


```javascript

	const isYoutubeVideo = block.textContent.match(/^https:\/\/www\.youtube\.com\/watch\?(v=[0-9a-zA-Z]*)$/);
	if (isYoutubeVideo) {
	  isYoutubeVideo.forEach((match) => {
		const regExpMatchArray = match.match(/v=(.*)$/);
		const videoId = regExpMatchArray[1];
		const container = document.createElement("div");
		container.setAttribute("class", "w-1/2 ml-auto mr-auto");
		const iframe = document.createElement("iframe");
		iframe.setAttribute("src", `https://www.youtube-nocookie.com/embed/${videoId}`);
		iframe.setAttribute("frameborder", "0");
		iframe.setAttribute("allowfullscreen", "allowfullscreen");
		iframe.setAttribute("width", "560");
		iframe.setAttribute("height", "315");
		block.innerHTML = "";
		container.appendChild(iframe);
		block.appendChild(container);
	  });
```

Du code proposé, je n'ai modifié que certaines parties pour remplacer www.youtube.com par www.youtube-nocookie.com (afin de n'envoyer aucune info à Youtube sur l'utilisateur qui regarde la vidéo), et l'attribut class.  
Ces quelques lignes, n'étant pas familiers de l'API pour créer du dom ou même du markup nécessaire pour embarquer une vidéo, j'aurais fini par l'écrire mais sans doute que j'aurais pris 10/15 minutes (?). Cela m'a pris 10 secondes.


Second exemple, une requête SQL.
Pour Coderwatch, j'utilise Spring JDBC Template avec SimpleFlatMapper. J'avais une méthode à écrire pour récupérer le dernier quizz terminé pour un joueur donné dans un mode de jeu donné.

Copilot m'a fait cette proposition :

![Suggestion Copilot](/images/suggest-copilot.jpg)

Dans ce cas précis, Copilot a réussi à me suggérer la bonne plomberie, dans le même style que les autres repository déjà écrit, avec les bons frameworks, les bons noms de tables et de champ.
Et ça, c'est déjà impressionnant !

La requête n'est cependant pas celle que je souhaitais, il y un left join qui ne m'intéresse pas et je cherchais "le dernier quizz terminé". Cependant, je ne peux pas lui reprocher puisque mon nom de méthode n'inclus pas cette subtilité, c'est donc la méthode qui est mal nommé en réalité.


Dans les deux exemples cités, mon rôle a été de donner du contexte, de vérifier et d'adapter le résultat.


Ah oui, petit bonus, Copilot est actif partout, y compris dans un fichier markdown. Donc il suggère la documentation.
Exemple, toute cette doc sur l'un de mes derniers devs a été faite à 90% par Copilot (modulo quelques coups de pouce de ma part)

```
    * text: the text to search (mandatory)
    * language: the language of the response (default is "en")
    * country: if you want to boost result near this country (Alpha2 code, example: "FR" for France)
    * latitude: if you want to boost result near this specific geo point (example: "48.857")
    * longitude: if you want to boost result near this specific geo point (example: "2.3521")
    * types: to filter result by type. You can use the following types:
        * locality (will only return cities)
        * ADMINISTRATIVE_AREA_LEVEL_1 (will only return first level administrative areas and cities)
        * ADMINISTRATIVE_AREA_LEVEL_2 (will only return cities, admin area level 1 and admin area level 2)
        * ADMINISTRATIVE_AREA_LEVEL_2 (will only return cities, admin area level 1, admin area level 2, and admin area level 3)
        * country (return everything from country to cities)
    
```


## Une aide incroyable au quotidien

Lorsque j'ai installé ce plugin dans mon IDE, je ne savais pas trop à quoi m'attendre, comment l'outil s'adapterait à mon contexte, ma façon de coder.  
Et en fait, c'est juste incroyable. Pour moi, c'est un gain de temps constant sur toute la plomberie.
C'est également une béquille terriblement puissante lorsque je développe dans des langages ou avec des frameworks que je maitrise moins, avec une moins bonne connaissance de l'API. Mon autonomie grandit même si je dois absolument contrôler ce qui est écrit et ça ne m'épargne pas de lire la doc.  
Dans tous les cas, j'ai un gain de rapidité évident, y compris pour de la doc.
Bref, les tâches rébarbatives ont une forte tendance à disparaître et je peux me concentrer sur ce qui a vraiment de la valeur.

Cependant, tout n'est pas rose.

## Copilot, inconvénients et polémiques

Au jour le jour, je note quelques petits soucis d'ergonomie. C'est mineur et ça s'améliorera sans doute, mais parfois entre les suggestions de l'IDE et les suggestions Copilot on peut s'embrouiller. Copilot propose toujours quelque chose, y compris quand en réalité il n'y a plus rien à écrire. Dans une page HTML je ne vous raconte pas, Copilot cherche toujours à en faire plus ^^

Comme je le disais plus haut, Copilot ne s'arrête pas au code, mais suggère aussi du texte. Et pour le coup, c'est pénible, par exemple sur un billet de blog. Copilot me propose constamment d'écrire mon billet à ma place et ça m'agace assez vite donc je repasse sur notepad++ pour éviter d'être influencé.

Autre risque que je peux voir apparaître, j'ai utilisé l'expression "C'est également une béquille". Est-ce que je n'ai pas un risque d'arrêter d'apprendre ? Et si on m'enlève cette béquille, est-ce que je ne risque pas d'avoir oublié comment on fait telle ou telle chose ? C'est pas encore le cas mais je pourrais facilement céder à la facilité.
Je reviendrais sur ce point en conclusion.

Mais abordons quelques points sensibles.
Deux polémiques majeures ont été soulevées par l'usage de Copilot :

- Copilot créé des bugs

Celle-là je vais passer vite, car je trouve la polémique un peu ridicule. 
Dans un [article du monde](https://www.lemondeinformatique.fr/actualites/lire-copilot-de-github-un-generateur-de-code-et-de-bugs-83946.html) on apprend que des chercheurs ont créé des programmes avec Copilot puis qu'ils ont évalué le pourcentage de ces programmes contenant des vulnérabilités.
La conclusion de l'article est cependant moins racoleuse que le titre, car les chercheurs ne remettent pas en cause l'usage de Copilot. Tout d'abord l'outil s'appuie sur des codes déjà écrits, il reflète donc en partie des bugs déjà existants dans des projets open source, ensuite l'outil n'est pas censé être autonome, c'est de l'aide à l'écriture. Il y a toujours un(e) développeur pour superviser. Enfin ça n'empêche pas de coupler cela avec des outils de vérification de code et de détection de vulnérabilités.


- la violation de propriété intellectuelle.

Sans rentrer trop dans les détails, Copilot s'appuie sur un modèle de ML qui a été construit sur des millions de lignes de code publiques lues sur Github. Ce code est sous license. Dans certains cas il est possible que Copilot reproduise des bouts de code qui proviennent de ces librairies.
Certains questionnent l'exploitation de ce code dans le but d'entrainer un algorithme, d'autres parlent de blanchiment de license dans les cas où le code produit est un copier-coller d'une lib sous license.
J'avoue que vouloir revendiquer une propriété sur des bouts de code de 10 lignes qu'on aurait sans doute fini par écrire soi-même, même sans copilot, et sans savoir qu'un bout de code très proche existe en open source, je trouve cela absurde. En tout cas ce sont les cas d'usage que j'ai eu sur mon usage de Copilot. Copilot ne m'a pas écrit toute une application, il m'a aidé sur des blocs de 1 a à 10 lignes max.  

Cependant, je comprends que ça grince un peu des dents dans la communauté open source, d'autant plus que le futur modèle économique de Copilot n'est pas connu.  
Peut-on avoir un produit commercial qui repose sur une exploitation du code libre ?  
Est-ce équitable de créer un outil aussi puissant qui sera réservé à ceux qui peuvent se le payer, sachant qu'il est construit sur du code diffusé gratuitement (je simplifie) ?  
De mon point de vue, c'est le sujet qui doit poser question. Je pense que tout le monde y trouvera son compte au final. Les développeurs open source aussi vont en profiter. Si tant est que son modèle économique soit accessible et équitable.

Ce sujet est loin d'être clos, rempli de nuances donc on en réentendra sans doute parler. 

## Avis perso

Selon moi, Copilot pourrait signer ou préfigurer un tournant majeur dans notre métier. 
Ça fait 25 ans que j'entends parler de génération de code, c'est la première fois que je vois un résultat aussi impressionant.
Au mieux jusqu'à présent on décrivait un modèle dans du pseudo code ou de l'UML et on générait tout un tas de boiler plate, souvent illisible. 
Et ça restera sans doute très pratique pour de nombreuses parties du code en one-shot (la création du modèle lié à un stub, XSD vers beans etc...).
Mais cette fois ci, on parle de code métier, lisible, maintenable qui me procure un gain de temps permanent.
Alors oui, je peux céder à la facilité, commencer à oublier quelques APIs importantes parce que l'outil me le suggérera systématiquement.  
Pour un(e) junior, c'est un outil qui permet de gagner plus rapidement en autonomie et donc devenir plus rapidement confirmé(e).

Cependant, on ne devient pas senior uniquement en écrivant correctement du code. On devient senior en sachant si on traite les bons sujets. 
Copilot permet de changer de niveau d'abstraction.   

Est-ce que je regrette mes cours d'assembleur et la gestion des registres ? Absolument pas.  
Est-ce que je regrette le fait de ne plus gérer la mémoire comme je le faisais en C ? Non.  
Est-ce que le métier de dev a disparu avec des langages et outils de plus haut niveau d'abstraction ? Non, car le volume d'applications nécessaire a constamment augmenté. Le niveau de complexité a augmenté.

Il restera un besoin de supervision d'une part, cela restera un outil d'aide à la décision mais, pour l'instant en tout cas, ce n'est pas Copilot qui pourra me dire que le code que je viens d'écrire répond effectivement au besoin de mes utilisateurs. Ce n'est pas lui qui pourra me dire que parmi toutes les solutions possibles pour répondre au besoin, celle que je viens d'implémenter n'était pas la meilleure.

En tout cas moi, pour l'instant, je vais continuer à l'utiliser.


