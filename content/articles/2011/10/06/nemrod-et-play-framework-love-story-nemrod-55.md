---
id: "417"
title: "Nemrod et Play Framework : love story (Nemrod 5/5)"
description: "[![](/images/logo-web.png \"logo-web\")](http://eventuallycoding.com/wp-content/uploads/2011/10/logo-web.png) J’ai découvert Play Framework en version 1..."
date: "2011-10-06"
categories: 
  - "waza"
tags: 
  - "localizeyourapps"
  - "nemrod"
  - "play"
img: "logo-web.png"
cover: "cover5.jpg"
---

[![](/images/logo-web.png "logo-web")](http://eventuallycoding.com/wp-content/uploads/2011/10/logo-web.png) J’ai découvert Play Framework en version 1.0 (octobre 2009 si j’en crois la release notes) et j’avais tout de suite adhéré au concept. Sa productivité m’a tout de suite rappelé mes lointaines années où je faisais du PHP avec les avantages du Java en plus. Mais ça n’était encore qu’une version 1.0, pas très reconnu et avec de belles inconnues concernant son utilisation sur une application conséquente.

Le temps a passé, [Play Framework](http://www.playframework.org/) a 2 ans d’existence, sa stack s’est étoffé de pas mal de modules et on commence à trouver des applications qui l’utilisent.

Bref, si vous vous rappelez ce qui avait été dit dans les chapitres précédents, l’objectif était de développer vite, de voir rapidement une idée se matérialiser sur une page web. Il était hors de question de créer 5 fichiers java, 3 fichiers xml et je ne sais quoi encore pour avoir un résultat. On perd vite de vue l’objectif quand on met longtemps à le réaliser.

Allez, maintenant dans le détail, voici ce qui nous a plus et moins plu sur Play Framework. Attention, ceci n’est pas un tutorial d’utilisation de Play Framework mais uniquement un retour d’expérience.

## Ce qu'on a aimé

### La compilation à chaud

Sans doute l’un des points les plus importants. Je ne vais pas le détailler c’est sans doute celui que tout le monde connaît. Une modif dans le code, pas de relance de serveur, un F5 sur la page et tout est recompilé. Encore plus puissant que PHP si vous avez activé le mode update de JPA puisque vous n’avez même pas à faire vos ALTER en base de données. Au pire, même si vous relancez le serveur si par exemple la sémantique de vos données à changé, on est loin du temps de redémarrage d’un serveur “classique”, 10 secondes sur mon poste.

### Les intercepteurs

Play Framework utilise (certains disent “abuse”) de la programmation par aspect. Pour les actions écrites dans les contrôleurs, vous pouvez donc définir des comportements via les intercepteurs : @After, @Before, @Catch, @Finally Et vous pouvez écrire vos propres intercepteurs avec @With. Tout le module de sécurité de [Localizeyourapps](http://www.localizeyourapps.com) utilise une extension du module Secure qui fonctionne sur ce principe.

### Les redirections

Vous avez déjà fait du Struts ? Vous vous rappelez du fichier qui définit toute la navigation et des ActionForward ? La même chose avec Play Framework : `public static void show(Long id) { Client client = Client.findById(id); render(client); }`

`public static void create(String name) { Client client = new Client(name); client.save(); // On redirige vers la page qui montre le client juste en appelant la méthode du contrôleur ! show(client.id); }`

### Les validateurs

Par défaut l’API est déjà très sympa pour valider les formulaires. Vous rajoutez à cela les validateurs custom et le module Jquery Validation et vous avez un framework très puissant pour la gestion de vos formulaires.

### Les jobs

Lancer un job toutes les heures, facile, une petite annotation et le tour est joué :

@Every("1h")

Les jobs sont utilisés dans Nemrod pour la purge des fichiers d’import et le chargement d’un jeu de données initial à l’import.

### L’intégration

Je parlais des jobs Quartz juste au dessus. Mais finalement l’énorme force de Play Framework c’est l’intégration des outils. Que ce soit Quartz ou JPA. tout est intégré avec une configuration minimale et pas de prise de tête. Pour peu que vous vouliez utiliser d’autres frameworks comme CAMEL, AMQP etc..., il y a des modules pour ça.

### L’empreinte mémoire

Vous savez combien Nemrod utilise de mémoire sur l’instance live ? 64Mo de ram ! Et il y a clairement de la marge, aucun tuning n’a été fait pour l’instant. Vous en aviez marre des 1Go de lancement de vos serveurs d’applis traditionnels, Play est fait pour vous.

### Le déploiement sur playapps

Nemrod est déployé sur playapps. Et pour cela, on utilise un module Playapps qui permet de réaliser l’install en moins de 5 minutes. D’ailleurs je compte proposer quelques patchs pour l’utilisation du module en mode non interactif histoire de pouvoir l’automatiser sur Jenkins. Pour info, si vous êtes sur Stax, Cloudbees ou Heroku, il y a aussi des modules pour vous.

Bon, après je ne vais pas non plus m’étendre mais l’architecture en général d’une appli Play a vraiment de quoi plaire, du Stateless, des url faciles à réécrire etc...

Bon, mais si voyait maintenant les points un peu moins bons

## Ce qu'on a moins aimé

### Les tests

Je vais peut être surprendre quelques personnes mais oui, les tests nous ont posé problème avec Play. Déjà pour utiliser play auto-test, il faut que chaque test étendent UnitTest. Sauf que étendre UnitTest ca implique un démarrage du serveur Play pour chaque test. Et ça, c’est plutôt coûteux. Grosso modo nous avons environ 2s par classe de tests. Multipliez ça par une 30aine de tests et vous obtenez rapidement un temps qui frôle la minute. Imaginez ça sur des suites de tests plus importantes, ça peut être assez gênant.

Toujours sur les tests, il n’est pas si simple de tester un contrôleur.

- Soit on fait du FunctionalTest mais il est difficile d'enchaîner plusieurs actions après une page authentifié. J’ai pas trouvé d’exemples là-dessus et je n’ai pas réussi pour l’instant.

C’est dommage, sachant que chaque action correspondant à une méthode d’un contrôleur, de ne pas pouvoir tester un contrôleur de façon plus simple.

Il y a un module qui tente d’apporter des solutions : https://github.com/GuyMograbi/play\_test\_module Mais devoir créer un contrôleur de test par contrôleur et surcharger chaque méthode ne me plaît pas des masses.

- Soit on fait du selenium. Mais je ne suis pas un grand fan du selenium à outrance. C’est souvent lourd à maintenir, surtout quand l’appli évolue vite côté IHM comme c’est le cas de Nemrod. Et je n’ai pas encore vu comment ajouter ces propres librairies de méthodes dans les tags selenium qui sont compris par Play. A la limite ça permettrait de factoriser quelques actions.

### Le build

Autre point qui me chagrine c’est le build. Ok je suis super habitué à Maven et j’aime bien pouvoir choisir les plugins que j'exécute en fonction des profiles. J’aime bien séparer mes tests unitaires de mes tests d’intégration ou de mes tests de performance. La c’est plus dur. J’ai un goal auto-test pour lancer tout les types de tests sans distinctions. Si je déclare un plugin cobertura il s’execute tout le temps, même quand je fais tourner le site en DEV. Quand je déclare une dépendance elle est toujours incluse, il n’y a pas de notions de scope de test par exemple. Bref, il manque un peu de maturité et sans doute quelques modules pour avoir plus de souplesse sur le build.

### Les templates

Sur le principe, les templates dans Play sont vraiment sympa. Les tags sont facile à créer, il y a pas de cycle de vie méga complexe à comprendre pour créer une page etc... Mais en pratique, il y a quand même des petits trucs rapidement fatiguants. Premièrement la courbe d’apprentissage est relativement élevé. Heureusement qu’ils ont rajouté une cheatsheet récemment parce que sinon c’est pas inné de connaître tout les signes cryptiques utilisable dans un template. Mais bon, on va dire que c’est un mauvais moment à passer. Par contre le fait de ne pas avoir d’auto complétion ou de vérification syntaxique dans mon IDE ça c’est dur. Même une fois qu’on commence à comprendre les templates on n’est jamais à l’abri d’une faute découverte à l'exécution. Sur ce sujet, il semble que Play 2.0 va bientôt intégrer Japid et que ce dernier peut être utilisé avec un plugin Eclipse. Ok, ça c’est une bonne chose. Même si la lecture de la doc du plugin Japid m’a un peu donné mal à la tête ^^ Vive les notations $ ~ { % ! Je prévois quand même d’y passer, ne serait-ce que pour les perfs qui sont annoncées bien meilleures qu’avec les templates Groovy.

### JPA

Allez, soyons honnête, ça n’a rien à voir avec Play mais JPA commence à me sortir par les yeux. Ça fait quelques temps que j’utilise Hibernate et JPA maintenant et c’est vraiment “pourquoi faire simple quand on peut faire compliqué”. Malheureusement comme je souhaite que Nemrod soit multi base de données, c’est un passage obligé. Et donc mon seul reproche de Play sur ce coup là c’est que ce soit tellement simple d’utiliser JPA ^^ Ben oui, pour le coup comme c’est simple et que les modifs de schéma sont faites sans relancer le serveur ça en devient presque magique. Et puis un jour on se réveille avec 4000 requêtes joués par page, des transactions super longues qui bloquent la base et des performances en berne.

Au final, Play c’est quand même le productivity killer, le retour aux sources pour les développement web. Il manque quelques petits trucs et j’attends de découvrir la version 2.0 avec impatience pour voir l’évolution prise.
