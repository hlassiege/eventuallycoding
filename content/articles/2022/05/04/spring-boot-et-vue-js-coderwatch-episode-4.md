---
id: "2073"
title: "Spring Boot et Vue.js - Coderwatch episode 4"
description: "Voici le 4ème billet de cette série et pour ce billet nous allons parler de développement Backend avec une application Vue.js en Frontend. 

Je vais r..."
date: "2022-05-04"
categories: 
  - "waza"
tags: 
  - "coderwatch"
  - "spring-boot"
  - "startup"
  - "vuejs"
img: "pasted-image-0.png"
cover: "cover7.jpg"
---

Voici le 4ème billet de cette série et pour ce billet nous allons parler de développement Backend avec une application Vue.js en Frontend. 

Je vais rebalayer les critères de choix côté backend : bases de données, bus de message, design, communication avec le front. 

Pour situer le contexte, ce billet s’inscrit dans une mini-série autour de la création d’un side project. 

Si vous n’avez pas lu les premier, mon objectif est de décrire l’ensemble des étapes pour la création d’une application relativement simple :

_[www.coderwatch.io](http://www.coderwatch.io/) **: vous permettant d’apprendre des langages et frameworks informatiques en jouant**. Je vous propose de passer des quizz, de gagner des points, et progressivement de monter dans le classement face aux autres joueurs tout en améliorant vos connaissances._

Sur chaque billet je donnerais aussi un bilan intermédiaire pour dire où en est Coderwatch, le nombre d’utilisateurs et les métriques importantes. Et ici je vais en profiter pour donner le résultat d’un sondage utilisateur et parler Discovery. 

Les billets de cette série :

- [C’est l’histoire d’un side project : cultiver une idée, créer un MVP](https://eventuallycoding.com/2022/04/04/cest-lhistoire-dun-side-project/)
- [Coderwatch : épisode 2 : Design avec Figma et Procreate](https://eventuallycoding.com/2022/04/08/coderwatch-episode-2-design-avec-figma-et-procreate/)
- [Intégration et dev web avec Bulma, Vue.js etc... - Coderwatch episode 3](https://eventuallycoding.com/2022/04/14/integration-et-dev-web-avec-bulma-vue-js-etc-coderwatch-episode-3/)
- [Spring Boot et Vue.js - Coderwatch episode 4](https://eventuallycoding.com/2022/05/04/spring-boot-et-vue-js-coderwatch-episode-4/)

Dans le billet précédent je décrivais comment s’était déroulé l’intégration de la maquette de Coderwatch. Mais jusqu’à présent, le site n’était qu’une coquille vide et il fallait encore créer toute la logique métier de Coderwatch. 

[![](/images/pasted-image-0.png)](https://eventuallycoding.com/wp-content/uploads/2022/04/pasted-image-0.png)

## Quelle technologie pour le backend ?

Si je suis plus à l’aise en Java, je suis également capable de coder en PHP, Python ou Javascript. J’ai donc repassé en revue les frameworks existants pour être sûr de ne passer à côté de rien. L’objectif reste pour moi d’aller le plus vite possible. Chaque phase de ce side project ne doit pas dépasser 1 semaine. Ici le besoin est simple, faire des API consommées côté Front. Par défaut, je savais en faisant ce tour rapide qu’il y avait 90% de chances que je le fasse en Java car c’est avec ce langage que je suis le plus productif. Mais je voulais quand même jeter un œil par acquis de conscience. 

Pour la forme, j’ai refait un état des lieux rapide des écosystèmes et je me suis rendu compte avec un peu de tristesse qu’en fin de compte, le paysage technologique a peu changé en 15 ans. Essayez de chercher “Les meilleurs Frameworks Web 2022 en Java” sur Google. Il y a une furieuse impression d’avoir les mêmes résultats qu’en 2012, voire même moins. 

Côté Java, les frameworks haute productivité qui avaient la côte il y a 10 ans n’ont pas réussi à passer à l’âge adulte: Roo, Play, Grails, Vert.x, Jhipster, Dropwizard.

Spring boot a su picorer les bons points pour s’imposer comme LE framework web en Java. L’écosystème s’est structuré autour de lui, l’outillage, la connaissance en ligne etc… 

Ok, j’oublie Quarkus malgré tout et il faudrait que je le teste en profondeur sur un autre side project pour me faire un avis plus fort. 

Côté PHP et Python, même constat, le panorama des frameworks Web 2022 ressemble très fort au panorama 2012 même si pour le coup le langage PHP en lui-même a bien évolué. 

Côté Javascript on retrouve express (2010) et meteor (2012) mais par contre il existe pas mal d’autres frameworks qui ont émergé depuis. Si j’avais plus de temps je regarderais peut être plus en détail ce qui existe mais le survol ne me donne pas une impression de maturité très forte. En fin de compte, j’ai choisi d’avancer et j’ai choisi Spring boot avec lequel je savais que j’aurais une productivité très forte.

## Objectif, the boring stack

A l’inverse de ce que j’avais pu faire sur Malt en 2012 (ex Hopwork), l’idée ici n’est pas d’utiliser ce side project comme bac à sables. Bien sûr que je veux et dois apprendre plein de choses côté front et design. Par contre sur le reste, je cherche à aller vite et, fort de l’expérience Malt, je sais que le plus efficace reste de viser une stack simple et éprouvée.

D’autant plus que si l’écosystème semble similaire à celui d’il y a 10 ans, son outillage lui a bien évolué et permet d’être bien plus efficace qu’avant.

Bref, côté stack je vais donc choisir :

- Java 

- Spring Boot pour servir les API en mode **stateless**
- Spring security pour la protection des endpoints avec des tokens JWT 
- Postgresql pour la base de données
- Liquibase pour la gestion des schémas, montées de versions et patchs de données
- maven pour le build
- JdbcTemplate pour les repository 

## JdbcTemplate ? Et pas d’ORM ?

Eh oui, je suis loin d’apprécier les ORM. Ce n'est pas l’objet de ce billet mais je préfère de loin garder la main sur les requêtes SQL. Pour autant je n’ai pas envie de faire le mapping à la main à chaque fois que je fais une query. 

Avec JdbcTemplate on peut utiliser [**simpleflatmapper**](https://simpleflatmapper.org/0104-getting-started-springjdbc.html) qui permet de simplifier énormément le requêtage. 

Et pourquoi pas JOOQ ? J’ai toujours du mal à saisir en quoi c’est une bonne chose d’apprendre un DSL, parfois complexe, pour en fin de compte devoir quand même se pencher sur le SQL produit. Autant apprendre qu’une seule chose… 

Alors oui il y a l’argument de la type safety et de l’auto complete dans l’IDE.

Pour la Type safety, avec simpleflatmapper on associe un bean avec un resultSet. Et intellij est très puissant en terme d’auto complete si on a associé le projet a la vue “Database” ouverte sur le bon schéma. 

## Le build et les dépendances, à surveiller comme le petit lait

Maven est un très bon outil mais un des écueils fréquents en Java c’est la multiplication des dépendances transitives qui à la longue peut rendre obsèse une application et pénaliser son temps de démarrage. D’autant plus avec les librairies qui vont scanner le classpath pour leur fonctionnement.

Il n’existe pas avec Maven de notion de “profile” qui permettrait de dire par exemple : je souhaite telle dépendance mais sur son profil “A”, et donc sans embarquer les dépendances nécessaires à son profil “B”.

Pour ce side project je vais tenter au maximum de jouer avec les exclusions pour limiter les dépendances transitives inutiles. Et de façon générale je vais tenter de limiter les dépendances externes (comme sur le front d’ailleurs), d’autant plus quand c’est pour récupérer une seule classe par la suite. 

Pour ceux qui se demandent, Coderwatch a un startup time de 4s. Ca, plus le fait qu’une modif mineure dans une classe ne nécessite pas de reload, c’est invisible dans le cycle de dev. 

## Packager une appli Vue.js avec une application Spring boot 

Si vous avez suivi jusqu’ici, Coderwatch est constituée d’une application Spring Boot pour son API et d’une application Front en Vue.js.

A partir de là s’ouvre plusieurs choix :

\- fusionner les deux pour n’avoir qu’un seul hébergement à gérer et tout déployer d’un coup

\- déployer chaque appli séparément

J’ai pris la première option pour des questions de simplicité mais pour être franc, par mauvaise connaissance à ce moment-là. Au moment où j’ai fait ce choix, je connaissais github pages mais qui, à ma connaissance, ne me permet que de déployer sur un sous dossier et sans custom domain (j’avais tort). Et je ne trouvais pas d’hébergement simple avec custom domain qui soit gratuit. Ma décision à ce moment-là, c’est aussi une question d’économie. 

J’ai clairement mal cherché ^^

Je prévois de revenir là dessus plus tard et de déployer le front sur cloudflage-pages qui gère très bien ce genre de cas de figure pour 0 euros. 

Ceci étant dit, pour cette première version, celle qui tourne actuellement, c’est une seule application qui est déployée. Et c’est très simple à réaliser.

Voici les deux applications en terme de répertoire :

- coderwatch
    - coderwatch-frontend
    - coderwatch-backend

Je builde en premier le frontend. Ensuite je build le backend, qui utilise maven-resources-plugin pour faire une copie des fichiers de coderwatch-frontend/dist dans target/classes/static/

Aussi simple que ça.

## Github Copilot, l’invité surprise

Là, il faut que je vous en parle !

C’était pas prévu à l’origine mais j’ai vu passer un tweet dessus et je me suis donc [inscrit à la bêta](https://copilot.github.com/) pour l’utiliser sur Coderwatch. 

[Github Copilot](https://copilot.github.com/) si vous ne connaissez pas, c’est un plugin dans votre IDE, intellij pour mon cas, qui va suggérer le code que vous comptiez écrire en fonction de plusieurs choses :

- le nom de la méthode 
- des commentaires au dessus
- les variables à disposition
- etc…

Et ça marche **terriblement bien**.

Toute la plomberie se code en un clin d'œil, les repository, les méthodes utilitaires simples etc… Faut vraiment le tester pour comprendre parce qu’on peut facilement être perplexe avant de le faire. 

Son seul défaut c’est de constamment proposer quelque chose, ce qui parfois est pénible. Mais franchement, même sur du texte dans un Readme, le résultat est bluffant. 

## Bilan positif sur le cycle de dev back/front

La rapidité de développement est plutôt au rendez-vous. Je suis très à l’aise en Java, le code Backend, qui est pourtant celui qui contient le plus de logique, ne m’a pas pris longtemps à faire. Le reload auto et le startup time font que je n’ai presque pas de pause dans mon dev.

Le plus long paradoxalement c’est côté front, les rebuilds quand on touche à une classe un peu profonde (inclus partout). 

Github Copilot me booste en vitesse. Je me demande si je vais pas 2x plus vite grâce à ça ?

Bref, 1 semaine pour boucler cette partie là. 

## Les chiffres de la semaine sur Coderwatch

Parlons un peu chiffres et Discovery. 

Le lancement officiel remonte à 4 semaines. Le nombre de joueurs est de 40, ça représente +21% depuis le dernier billet de blog mais ça reste encore modeste. 

[![](/images/pasted-image-0-9-1024x505.png)](https://eventuallycoding.com/wp-content/uploads/2022/05/pasted-image-0-9.png)

Le nombre de quizz joués est de 46 (+18%). 

C’est le moment de récolter des retours et comprendre les utilisateurs. 

J’ai fait un sondage avec Typeform il y a deux semaines auquel j’ai reçu environ une dizaine de réponses. 

Il en ressort plusieurs choses intéressantes.

- 80% ont déjà utilisé des sites de challenges de code auparavant mais sur ces 80%, seuls 16% y sont encore actifs.
- le manque de temps, l’absence de progression et le côté répétitif en sont les principales causes
- Sur Coderwatch, 71% attendent d’apprendre des petites astuces. 42% aimerait bien un profil public plus sympa pour montrer leur progression, 28% souhaiterait plus de possibilité de challenger les autres joueurs et 28% pour s'entraîner sur de futurs entretiens 

(QCM à choix multiple, la somme dépasse 100% c’est normal)

- 100% des personnes qui sont venus sont des curieux venant de ce blog
- 40% d’entre eux sont trop occupés pour revenir souvent, 40% attendent des évolutions, le reste n’en attendait pas grand chose
- A la question, qu’est ce qui vous ferait utiliser Coderwatch davantage ?
    - 42% aimerait un circuit complet sur un langage (la fameuse campagne solo)
    - 28% aimerait de nouveaux modes de jeu (seul le mode random était dispo)
    - certains soulignent la difficulté du jeu et la frustration d’attendre 24h pour recommencer

Bref, c’est hyper intéressant. Et si on complète cela avec de la data, on remarque que :

-  sur les 40 joueurs, une dizaine n’a même pas lancé un seul quizz 
- une 20aine n’ont pas réussi à dépasser les 20 points. 

Cela met en évidence plusieurs axes très important dans un jeu :

- dans tout les jeux, les premières minutes doivent nous faire comprendre comment on joue pour lancer une partie de façon naturelle => le circuit d’inscription n’est pas assez fluide
- la difficulté du jeu, si elle est mal dosée, calme tout de suite les premiers utilisateurs

De tous les retours, ce sont ceux-là que j’ai traité en premier à la réception de cette enquête. Parlons objectif chiffré :

- un nouveau joueur doit avoir démarré un quizz dans la même journée 
- un nouveau joueur doit dépasser les 20 points d’XP dans les deux premiers jours

Le week end est des 16 et 17 avril ont donc été sortis :

- une refonte du circuit d’inscription pour enlever 2 étapes
- une suggestion de démarrer une partie tout de suite après l’inscription
- un système de **barre d’énergie** permettant d’annuler des mauvaises réponses et donc ne pas se faire éliminer tout de suite 
- un **nouveau mode de jeu** : Classical

La suite sera sans doute d’améliorer la fiche du joueur pour qu’elle soit plus sexy et plus engageante pour progresser. 

Par contre je commence à ressentir des limites :

- Côté design, je ne suis pas mécontent de ce que j’ai produit mais c’est à des années lumières de ce que j’ai en tête. Le besoin d’un bon designer se fait sentir. 
- je ne peux pas me reposer uniquement sur les quelques lecteurs de ce blog, qui sont essentiellement des curieux. Je dois trouver un moyen de parler de ce jeu à des personnes qui pourraient être intéressées.

Il va falloir que je trouve une solution.

Merci de m’avoir lu jusque là. Le billet suivant parlera sans doute de la partie Ops/Déploiement. On parlera notamment de Clever Cloud et Cloudflare-pages.

A bientôt
