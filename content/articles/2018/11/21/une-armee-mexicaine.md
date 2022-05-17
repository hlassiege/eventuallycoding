---
id: "1391"
title: "Une armée mexicaine ?"
description: "[![](/images/e0779-image1.png)](http://eventuallycoding.com/wp-content/uploads/2018/11/e0779-image1.png)Petit flashback, on est début 2017, c’est la s..."
date: "2018-11-21"
categories: 
  - "waza"
tags: 
  - "startup"
img: "e0779-image1.png"
cover: "cover6.jpg"
---

[![](/images/e0779-image1.png)](http://eventuallycoding.com/wp-content/uploads/2018/11/e0779-image1.png)Petit flashback, on est début 2017, c’est la soirée MiXiT à l’hôtel de ville. Ambiance relax entre petits fours et discussions sur les confs de la journée. 

Au détour d’une conversation j’en viens à détailler notre équipe produit et j’ai une petite question un peu provoc en retour. “Vous êtes tout ça pour faire un site web ?”

A l’époque, 9 personnes dans l’équipe produit dont 3 devs backs, 1 dev front.

Et forcément ça va me trotter dans la tête. Certes, on peut faire un site web avec un seul dev, voire même aucun dev en utilisant certains CMS très bien foutus mais est-ce vraiment équivalent ? Est-ce qu’au delà d’une équipe de 1 les autres viennent juste pour pouvoir faire des plus grandes LAN et des tournois d’e-sport ?

Partant de cette question je vais y réfléchir et soumettre le sujet à deux CFP de belles confs françaises pour y apporter une réponse un peu plus détaillée mais le sujet ne retiendra pas l’attention. Bref ce n’est que partie remise, bloguons dans ce cas :)

Bon mais qu’est ce que vous allez en tirer dans votre travail de tous les jours ?

Ce ne sera pas un billet de blog tech, donc rien de ce point de vue là.

Vous allez peut-être gagner un autre point de vue sur certains lieux communs de l’informatique comme la loi de Pareto, le mythe du fullstack developer, l’expression consacrée "le mieux est l’ennemi du bien". Si, pour vous, réinventer la roue c’est toujours inutile, que le pragmatisme ça veut juste dire de faire vite et sale, là encore, vous trouverez peut-être un autre éclairage ici.

# Développer une application, ça s’arrête où selon vous ?

Finalement tout commence par cette question. Un site web au final ça commence et ça s’arrête où ? A quel moment peut-on dire, “c’est bon, ce site fonctionne et je n’ai plus rien à faire dessus ?”

- C’est du code qui produit de l’HTML ?
- Du code testé qui produit de l’HTML ?
- Des micro services ? (lol)
- Une page (joli ?) visible sur internet ?
- Faut obligatoirement que ça puisse supporter des millions d’utilisateurs simultanés ?
- Faut que ce soit en très bonne position dans un moteur de recherche ?
- Pas de site web sans respect de l’accessibilité ?
- Responsive obligatoirement ou accompagné d’une application mobile ?
- Comment on le déploie, à la main ou automatiquement ?
- Avec 99.99999% de dispo ?
- et sous Safari 8 et IE 5 ?
- et en Espagne, ça va vite ?
- etc… etc…

 

Et bien, le travail ne se termine jamais. Tout dépend bien sûr des moyens que vous avez à votre disposition et de l’ambition que vous pouvez légitimement porter avec votre application.

Prenons un exemple, vous pouvez construire une marketplace ou un site de e-commerce en quelques jours avec de nombreux outils : prestashop, magento, wordpress pour ne citer qu’eux.

Ce sera une application, vous serez capable d’y vendre vos produits.

Très bien, mais est-ce comparable à Amazon ?

 

Je résumerais la différence grossièrement à une différence : le sens du détail. Mais je vais y revenir plus loin.

 

Juste avant, j’aimerais que vous preniez connaissance de quelques chiffres.

Est ce que vous imaginiez que les sociétés suivantes avaient un tel nombre de développeurs :

- Vente privée 800 devs
- Spotify 1000 devs (sans compter Data et ops)
- Airbnb plus de 1500 (en recherchant sur linkedin)
- Amazon 7000 ([https://www.businessinsider.fr/us/amazon-now-employs-a-whopping-542000-people-and-counting-2017-10](https://www.businessinsider.fr/us/amazon-now-employs-a-whopping-542000-people-and-counting-2017-10))
- Facebook 20 000 (basé en partie sur les chiffres d’un de leur communiqué de presse que je ne retrouve plus)

 

Et si ça vous paraît incroyable, lisez la suite.

Dans tout les cas vous pouvez la lire hein :)

# La loi de Pareto, les fameux 80/20

Revenons sur l’exemple de la marketplace faite en quelques jours. Certains y verraient l’illustration de la fameuse loi de Pareto à laquelle on se réfère si souvent. Combien de fois avez-vous entendu un développeur dire :

“C’est bon, je pense que j’ai fait les 20% nécessaires de boulot qui correspondent à 80% de ce qu’attendent les utilisateurs”

Sous-entendu, “le reste du boulot nécessaire pour satisfaire nos utilisateurs à 100% prendra 5 fois plus de temps mais c’est largement jouable”.

[![](/images/7e48f-image2.png)](http://eventuallycoding.com/wp-content/uploads/2018/11/7e48f-image2.png)

Quoi de plus faux ?

 

Utilisé à mauvais escient dans la grande majorité du temps, elle est tellement rentré dans les têtes pour illustrer le rapport entre un premier résultat utilisable et un résultat définitif que certains en ont oublié son caractère… imprécis, au mieux.

Pour l’anecdote, chez Malt nous utilisons elasticsearch depuis le début. Dans les faits, il a fallu un jour pour le prendre en main, un jour pour faire un beau billet de blog dessus, une semaine pour faire la première version du moteur de recherche.

Mais 6 ans plus tard nous continuons à l’améliorer dessus et nous continuons à apprendre !

Si je ramène cela à ma question du chapitre précédent, à quel moment considère-t-on que notre moteur de recherche est terminé ?

Et bien jamais. Car ce n’est pas binaire (soit ça ne marche pas, soit ça marche). Vous ne passez jamais d’un état A (il n’y a rien) à un état B (c’est parfait).

# Le sens du détail

Justement, parlons du moteur de recherche, sur ce moteur nous avons itéré de nombreuses fois. Nous avons itéré sur l’interface utilisateur : filtres de recherches en haut ou sur le côté, sur les résultats (listing, puis vignettes).

Parfois certains changements d’UI ou d’UX sont purement des effets de mode qu’il faut suivre car vos utilisateurs s’habituent à un type de navigation sur internet et s’attendent à le retrouver chez vous.

Nous avons changé l’algorithme qui se cache derrière, pris en compte de nouvelles informations, ajouté des éléments de boosting/malus, supprimé l’utilisation du scoring interne de elasticsearch basé sur TF/IDF, introduit du machine learning et j’en passe.

Sur ce sujet comme plein d’autres, il n’y a pas d’état A (rien) et d’état B (l’implémentation parfaite). Tout passe par le sens du détail, la recherche perpétuelles d’améliorations.

Et ce sens du détail c’est ce qui fait la différence fondamentale entre votre site de e-commerce fait en quelques jours et Amazon.

Le sens du détail se joue à tous les niveaux chez Amazon, les aspects logistiques de la livraison, la gestion des catégories, la gestion des litiges, l’UI/UX, les recommandations de produit etc…

Pour vous donner une idée de ce que j’appelle le sens du détail, voici quelques illustrations :

- Chez Spotify, une équipe s’occupe uniquement de la gestion des utilisateurs sur les 15 premiers jours d’existence
- Chez Slack, [une équipe travaille sur le “Tone and voice”](https://slackhq.com/one-voice-many-hands) uniquement (l’ensemble des libellés et formulations de l’application pour parler à ces utilisateurs)

 

Et les détails vous ne les anticiperez pas tous.

Voyez la construction de votre application, épine dorsale de votre entreprise, comme une sculpture ou du dessin. Au début vous ne faites que dégrossir les contours, vous créez les formes. Ensuite seulement vous attaquez les détails dont certains que vous découvrirez à l'inspiration en réalisant votre oeuvre.

\[caption id="attachment\_1398" align="aligncenter" width="756"\][![](/images/dbe5d-maxresdefault.jpg)](http://eventuallycoding.com/wp-content/uploads/2018/11/dbe5d-maxresdefault.jpg) Superbe illustration par ZHC que le temps est crucial pour faire les choses bien (https://www.youtube.com/watch?v=v6mHKcdwpwY)\[/caption\]

 

Par exemple, prenons la performance de votre site Web. Ce n’est pas le premier sujet sur lequel s’appliquer lorsque votre application n’est pas sorti. Evidemment la première étape c’est d’avoir une version fonctionnelle de votre site. Première victoire.

Ensuite seulement vous allez vous intéresser au temps de chargement, au poids de la page. Vous allez mettre en oeuvre des premières techniques simples et vous allez réussir à obtenir une note d’au moins 85 sur page speed. Seconde victoire.

Mais ici vous pourriez tomber dans l’illusion de la loi de Pareto, l’effort fourni pour arriver à 85, il suffira de passer le même temps pour prendre les derniers 15 points et atteindre 100 ?

Dans notre cas nous avons passé beaucoup d’efforts pour atteindre 95 (en desktop). Cet [article pourrait vous intéresser par exemple sur le critical css](https://medium.com/nerds-malt/critical-css-pour-quelques-millisecondes-de-moins-abc382f88b3b).

Et les détails c’est parfois ingrat, ça nécessite d’y travailler tous les jours.

Une fois ce succès acquis sur desktop, rebelote pour viser ce score sur mobile. D’ailleurs, et pourquoi pas une application mobile ? Bref, ça ne s'arrête jamais.

Le produit parfait du premier coup n’existe pas.

**Pire, si vous pensez sortir un produit parfait, c’est sans doute que vous le sortez trop tard.**

Relisez plusieurs fois cette phrase.

 

Ce fameux sens du détail a une conséquence importante : à un moment, il vous faut des spécialistes.

# Le mythe de l’ingénieur full stack

S’il y a bien une expression qui me semble absurde récemment dans le monde du développement informatique, c’est fullstack.

Il est servi à toutes les sauces, j’entends parler de devs web fullstack, d’ops fullstack, de datascientist fullstack, de spécialiste ad fullstack etc…

 

Fullstack pour ceux qui ne connaissent pas correspond à des personnes polyvalentes dans un domaine et donc capable de travailler sur tous les aspects de ce domaine.

Pour beaucoup, parler de fullstack c’est un raccourci pour développeur web fullstack et on inclut uniquement le développement Frontend et Backend.

On oublie généralement le côté ops, l’UI/UX et on considère bien souvent uniquement le dev Frontend sous l’angle du développement Javascript, rarement sous l’angle de l’intégration HTML/CSS.

 

Bref, vous l’aurez compris, très très rare sont les vrais “fullstack”. Et je n’ai jamais vu de multispécialiste, dans ma définition de spécialiste, sur tous ces sujets.

Une définition que je préfère est-celle de [profil en T](https://en.wikipedia.org/wiki/T-shaped_skills) (ou T-shaped skills) dans le sens où elle résume mieux la réalité, il s’agit d’une personne ayant une spécialité (le pilier du T) et un ensemble de connaissances généralistes lui permettant de travailler en dehors de sa zone de spécialisation (la barre du T). Et vous trouverez des T de différentes formes, un pilier plus court et une barre plus large ou inversement un pilier très long mais une barre plus courte.

[![](/images/b2059-image4.png)](http://eventuallycoding.com/wp-content/uploads/2018/11/b2059-image4.png)

Mais pourquoi parler de ça ?

Ce sujet est très lié à tous les précédents. Il est possible de démarrer une application avec une équipe de T-shaped skills qui sauront faire de tout. On parlera parfois de moutons à cinq pattes et c’est le genre de personnes à trouver dans le début d’une équipe de dev.

Mais à un moment, dans cette fameuse recherche du sens du détail, il vous faut des spécialistes. L’idée n’est pas de remplacer vos profils généralistes par des spécialistes, loin de là, vous avez besoin des deux. Mais il faut reconnaître la nécessité d’avoir des spécialistes pour passer un cap.

C’est à ce prix là que votre équipe sera capable d’adresser des sujets de plus en plus pointus et précis.

 

# Ne jamais réinventer la roue ! Ou pas.

 

Si on apprend une chose assez tôt c’est bien cela, évitez de réinventer la roue.

[![](/images/6b528-image3.png)](http://eventuallycoding.com/wp-content/uploads/2018/11/6b528-image3.png)

 

Bref, ne passez pas un temps fou sur les choses déjà faites par ailleurs même si ça ne répond pas exactement à votre besoin.

On est passé par Heroku au début pour l’hébergement, on a pris des services en SAAS pour de nombreux services cloudinary (gestion des images), twilio puis infobip (envoi de SMS), mandrill (emails transactionnels + gestion des templates) et... Et évidemment on repose sur de nombreuses briques open source.

Tout cela permet de démarrer un produit avec une ou deux personnes et c’est un atout majeur de notre domaine.

MAIS, à un moment dans la vie d’une boîte, l’adage “ne pas réinventer la roue” n’est plus aussi binaire qu’avant.

Parfois, on réinvente la roue et c’est pas plus mal.

[![](/images/e6bb4-image5.png)](http://eventuallycoding.com/wp-content/uploads/2018/11/e6bb4-image5.png)

(J’ai repris les images du site de Hteumeuleu et vous retrouverez globalement cette réflexion autour de la réinvention de la roue sur [un très bon billet de blog](https://www.hteumeuleu.fr/reinventer-la-roue/)).

 

Quand le produit devient plus mature, alors se pose inévitablement et sans arrêt la question : “**buy or build**” ?

 

C’est l’une des questions les plus difficiles à partir d’un certain moment. Et la réponse est systématiquement différente selon les contextes.

(Je vous invite d’ailleurs à voir [la conférence du CTO d’Algolia](https://www.youtube.com/watch?v=fm_tMvOMXb8) à ce sujet)

 

A quel moment, les petites choses qu’il manque aux produits que vous utilisez sont cruciales pour faire la différence ? Est ce que l’outil que vous utilisez pour faire X ou Y est sensible pour votre **coeur de métier** ou pas ? A quel moment il vous permet de vous différencier.

Je remet cette image de xkcd parce qu’elle est aussi d’actualité pour ce sujet.

[![](/images/7e48f-image2.png)](http://eventuallycoding.com/wp-content/uploads/2018/11/7e48f-image2.png)

Peut-être qu’à un moment la fonctionnalité en plus elle devient tellement cruciale que vous allez la créer cette équipe de recherche pour y passer du temps !

 

C’est dans ce type de choix que la notion de **pragmatisme** prend tout son sens. Il faut parfois être capable de prendre une solution “moins bien” mais plus adapté à votre contexte, financier par exemple et parfois il faut être capable d’investir pour faire mieux.

Et non, pragmatisme ne veut pas dire faire des choix systématiquement quick and dirty, ça veut dire comprendre son contexte et les compromis à faire dans tous les scénarios que vous envisagez.

 

Lorsque, dans votre quête de recherche du détail que je décrivais plus haut, vous décidez de construire un outil alors cette masse invisible de personnes qui bossait pour vous sans que vous vous en rendiez compte cette fois-ci vous en avez besoin dans **vos** équipes.

 

Parce que, si vous ne l’aviez pas compris, même si chez vous il n’y avait qu’un seul développeur, en utilisant Spring, les librairies Apache, les différents SAAS cités ci-dessus etc… en réalité vous avez des centaines/milliers de gens qui bossent déjà pour vous.

Et c’est donc aussi de cette façon que vous passez d’une boite à 1 devs à plusieurs dizaines puis centaines de personnes.

 

Que dire de plus, eh bien oui parfois on peut ne pas se représenter pourquoi telle ou telle boîte a tellement de développeurs dans ses équipes alors que bon, ils font “juste” un site web. Mais créer une application, dont votre société repose entièrement dessus, nécessite d’y passer toujours plus de temps pour l’améliorer. 

Si vous ne bossez pas dans ce secteur ou si vous n’avez bossé que sur des petites applis de gestion, des prototypes, des applications un peu jetables (valable le temps d’un événement) ça peut ne pas paraître très concret.

Dans ce cas imaginez le monde du cinéma ou du jeu vidéo et je vous invites à faire le parallèle :

- Red dead redemption, 8 ans de développement, on estime que son budget (non encore officiel) tourne autour de 400M de dollars, des milliers d’acteurs et centaines de salariés ont bossé dessus.
- Marvel Infinity war, 4 ans entre son annonce et sa sortie sur écran, 300M de dollars de budget, là encore, des milliers de personnes impliquées dessus.

 

Imaginez-vous les mêmes avec des équipes de 5 personnes réalisées en quelques mois ?

 

Les finitions, les détails, tout se joue là.
