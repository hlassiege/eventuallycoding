---
id: "1993"
title: "C'est l'histoire d'un side project"
description: "English version [here](https://eventuallycoding.com/2022/04/04/this-is-the-story-of-a-side-project/)

Très récemment, pris d’une envie de retour aux s..."
date: "2022-04-04"
categories: 
  - "waza"
tags: 
  - "coderwatch"
  - "product"
  - "side-project"
img: "pasted-image-0.png"
cover: "cover7.jpg"
---

English version [here](https://eventuallycoding.com/2022/04/04/this-is-the-story-of-a-side-project/)

Très récemment, pris d’une envie de retour aux sources, je me suis lancé dans quelques sides projects. Et pour le dernier en date, je me suis imposé quelques défis que j’ai envie de raconter ici.

Alors pourquoi faudrait-il lire ce billet ?

- Vous pourriez apprendre comment réaliser un projet, de l’idée à la mise en ligne et en détaillant chaque étape (l'idéation, le design, l'intégration, le backend, le déploiement)
- Pour réaliser que FullStack c’est loin d’être simple ^^
- Vous pourriez découvrir quelques outils et frameworks sympa.
- Vous pourriez en apprendre plus sur des métiers que vous ne connaissez pas bien.
- On va parler de combien ça coûte de créer un produit, même très simple comme celui-ci
- Vous allez pouvoir rire à mes dépens de mes compétences en UI.

Evidemment au vu du nombre de sujet à traiter, ce serait indigeste dans un seul billet donc je vous propose de découvrir tout cela dans une série de billet à paraître: 

- [C’est l’histoire d’un side project : cultiver une idée, créer un MVP](https://eventuallycoding.com/2022/04/04/cest-lhistoire-dun-side-project/)
- [Coderwatch : épisode 2 : Design avec Figma et Procreate](https://eventuallycoding.com/2022/04/08/coderwatch-episode-2-design-avec-figma-et-procreate/)
- [Intégration et dev web avec Bulma, Vue.js etc... - Coderwatch episode 3](https://eventuallycoding.com/2022/04/14/integration-et-dev-web-avec-bulma-vue-js-etc-coderwatch-episode-3/)
- [Spring Boot et Vue.js - Coderwatch episode 4](https://eventuallycoding.com/2022/05/04/spring-boot-et-vue-js-coderwatch-episode-4/)

Tout d’abord, si vous voulez le tester, il est disponible en ligne sur [www.coderwatch.io](http://www.coderwatch.io).

Le pitch principal : **apprendre des langages et frameworks informatiques en jouant**. Je vous propose de passer des quizz, de gagner des points, et progressivement de monter dans le classement face aux autres joueurs tout en améliorant vos connaissances.

[![](/images/pasted-image-0.png)](https://eventuallycoding.com/wp-content/uploads/2022/04/pasted-image-0.png)

## Un side project pour rester à jour

Bon mais dans un premier temps, pourquoi faire un side project ?

Avant tout, je suis développeur et j’adore créer des produits. Mais depuis 2020 je ne code plus sur Malt. C’est une évolution naturelle d’un fondateur dans une entreprise, il faut donner de l’espace aux équipes pour ne pas devenir un goulot d’étranglement et permettre à tout le monde de s’approprier la vision, tout en se concentrant sur le long terme. Et puis il faut constamment aller mettre de l’énergie là où c’est le plus utile, quitte à changer plusieurs fois de métier.

Mais bon, c’est pas pour autant que l’envie de coder disparaît ^^

Donc déjà, mes premiers objectifs : 

me tenir à jour, continuer à apprendre, expérimenter. 

Mais ce n'est pas tout. J’avais envie aussi de me lancer un défi amusant. 

Fullstack c’est le terme un peu fourre-tout par excellence. Tout le monde est fullstack, j’en suis à voir passer des CV de Fullstack Front, Fullstack Back, Fullstack data etc… (?!)

Ok, et bien concrètement, je voulais faire un site du sol au plafond, design inclus et goûter aux problématiques de chaque métier.

Et je vais pas vous mentir, ça n’a pas été simple… Mais j’ai beaucoup appris et notamment côté frontend.

D’ailleurs j’en profite pour faire un aparté. L’objectif ici étant pour moi de coder un produit, j’ai écarté l’idée de le faire avec des outils NoCode, mais l’option était sans doute viable, voire préférable pour un véritable produit qui se lancerait. Cependant, même si l’idée de faire un vrai produit me trotte dans la tête, pour autant je n’ai pas approché ce challenge comme j’aurais approché une création de produit commercial. 

## L’idée de départ 

Au tout début, il faut une idée pour se lancer sur un side project :) 

Ok il y a des personnes qui sont capables de voir très grand, très ambitieux, qui envisagent d’aller sur la lune, de créer des voitures autonomes et d’impacter des millions de vies et qui en plus ont les moyens de leur ambition, ce qui ne gâche rien. Mais là, on n’est plus sur le side project du tout. 

Il y a donc bien plus simple. La majorité du temps, on rencontre des moments où il nous manque le petit outil ou service qui va bien. C’est des petits utilitaires qu’on a fait à droite à gauche et qui pourraient devenir des produits plus matures. 

Dans les dernières années chez Malt, j’ai vu plein de petites douleurs présentes dans les entreprises qui pourraient donner lieu à des outils en SAAS. 

J’ai créé un premier produit avant Malt, c’était localizeyourapp.com (RIP), à la suite d’un projet un peu foireux d’internationalisation d’un site en Chinois. C’était une appli qui fait grosso modo ce que fait Phrase ou Lokalise aujourd’hui, mais en 2010. 

Dans le cadre de Malt j’avais fait un outil  pour faire du feedback 360 pour les membres de l’équipe (Rocket 360). Depuis il a été abandonné et on utilise OfficeVibe. 

Et des exemples j’en ai plein d’autres. 

On sous-estime parfois grandement les “petits” devs qu’on fait dans son coin et qu’on juge pas assez utiles, trop simples, trop… pas assez parfait.

Par exemple, une personne de l’équipe a codé un bot slack pour noter la présence de chacun le jour d’après dans les bureaux. Il n’a jamais envisagé d’en faire un produit. Et bien pendant le COVID on a vu une application se lancer sur ce créneau. 

Et c’est ainsi qu’est né, **Coderwatch**.

[![](/images/image.png)](https://eventuallycoding.com/wp-content/uploads/2022/04/image.png)

## Coderwatch

Coderwatch, c’est la somme de plusieurs idées qui se rencontrent : un peu de nostalgie, un gros attrait pour la gamification et un lien avec le recrutement.

Nostalgie car j’ai été un utilisateur d’un site qui s’appelait BlackBeltFactory il y a plus de 10 ans et qui a malheureusement disparu. Il s’agissait de gagner des ceintures de couleur, comme dans les arts martiaux, en remplissant des quizz sur des langages de développement. La gamification rendait le challenge amusant. 

Je pourrais aussi citer “Le légionnaire”, un autre jeu en ligne avec des quizz de culture générale qui te permettait de grimper dans la hiérarchie d’une légion romaine en défiant les autres joueurs. 

Même si BlackBeltFactory était pas mal, je pense qu’il aurait pu aller bien plus loin en termes de jeu. Pour ma part je joue pas mal et je suis très sensible aux mécanismes de gamification dans les applications, et notamment dans l’e-learning. A ce titre, Duolingo est très clairement un modèle. 

Et puis, tout au long de ma carrière, j’ai été amené à passer ou faire passer des tests techniques. Le moins que l’on puisse dire, c’est que c’est rarement fun. J’ai cependant appris en les passant et je pense qu’on peut en faire un outil utile.

En bref, j’avais envie de transposer tout ça dans une expérience qui allierait un côté fun et gamifié au côté très challengeant de BlackBeltFactory pour des devs. 

## Créer un MVP

Une fois que l'idée est là, l’objectif c’est de définir un MVP, une version minimale qui peut accrocher les joueurs. 

En faisant cela, j’ai réfléchi à 3 choses :

- la proposition de valeurs
- les principes du jeu
- la monétisation (comment rembourser le coût du service ?)

### La proposition de valeurs

La proposition de valeurs que je vois de façon assez immédiate est la suivante :

- Créer une expérience fun pour apprendre des compétences tech
- Se mesurer aux autres
- Se mettre en avant (prouver ses compétences)
- et côté entreprise, dans une optique de monétisation, recruter des devs parmi la communauté

[![](/images/image-1-1024x418.png)](https://eventuallycoding.com/wp-content/uploads/2022/04/image-1.png)

Quand on fait une appli web, l’un des réflexes systématiques c’est de faire un benchmark pour étudier l’existant. 

Et là, je ne vous cache pas, j’ai trouvé plein de sites sympas :

Codewars, Exercism, Codingame, Coderbyte, Hackerrank, Welovedevs

Tous les premiers ont une approche identique, on peut coder dans le navigateur et donc bosser sur de vrais algos à développer. Mon préféré est Codingame (développé par des frenchies !). 

J’aime beaucoup mais le temps nécessaire à passer dessus est important, on ne peut pas y jouer sur mobile sur un trajet de Métro et dans l’ensemble, je trouve la gamification un peu limitée. 

Sur la gamification à proprement parler, je préfère de loin Duolingo qui est plus orienté apprentissage des langues.

Enfin welovedevs s’approche un peu plus de ce que je recherche, puisqu’on y retrouve des quizz. L’expérience de jeu reste limitée, ce n’est pas la raison première du site mais ça reste sympa à utiliser. 

En général, quand on trouve autant de boîtes sur le même créneau, la première réaction c’est de se dire qu’il faut passer à autre chose. Elles ont toutes pas mal de personnes qui bossent déjà dessus, une techno plus aboutie (l’IDE dans le navigateur), un modèle de revenu établie. 

Mais je vais vous dire, premièrement je pense qu’au contraire il faut se dire que cela prouve que ça peut marcher. Cela démontre qu’il y un intérêt pour ça et qu’on peut même en faire un business rentable. 

Deuxièmement, je pense pouvoir apporter quelque chose de légèrement différent.

Et puis troisièmement, encore une fois, **j’ai 0 pression**. C’est un side project, au pire ca m’aura couté de l’argent mais j’aurais appris plein de choses. Donc osef. 

Au passage, en les étudiant je découvre leurs modes de monétisation, des SAAS dédiés aux recruteurs pour créer leurs propres tests de recrutement, des outils de team building, du job board etc… 

### Les principes du jeu

C’est le cœur du projet puisque j’ai envie que ce soit fun à jouer. J’ai envie de reprendre les codes et le vocabulaire d’un jeu vidéo avec des badges, des bonus qui permettent de débloquer des fonctionnalités, des niveaux à passer, un classement, un usage free to play etc…

Je sais que le design et l’ergonomie seront ma plus grande faiblesse pour ce projet parce que clairement c’est ce qui doit faire toute la différence et c’est loin d’être ma spécialité. Mais peu importe, c’est justement tout le challenge. 

Je vais pas vous spoiler tout les modes de jeu que j’envisage mais en grosse mailles, j’imagine deux modes principaux :

- un mode **campagne solo** permettant d’explorer un langage ou framework en profondeur, des niveaux à passer, un classement mondial
- un **mode arcade** fait de petites parties rapides avec des modes de jeu variés (questions aléatoires, bonus de rapidité, défi, jeu par guildes etc…)

Un autre aspect qui me semble important, c’est de faire participer la communauté de joueurs pour créer de nouveaux quizz et enrichir le jeu. 

Sauf que je le sais, la première barrière ça va être justement d’écrire les premiers quizz. C’est mon problème de Cold Start. 

Peu de quizz = peu de joueurs et un intérêt qui s'essouffle vite. 

Peu de joueurs = peu de quizz puisqu’une grande partie des questions doit venir d’eux.

Donc ça se mord la queue.

Mon pari sera donc de placer la demande de contribution directement sur la page de résultat d’une partie et de récompenser la contribution par des points d’XP, permettant eux aussi de prendre le large dans le classement. 

Ca fera certainement partie des métriques de succès mais j’ai pas une confiance totale dans celle-ci. 

Dans un premier temps pour mitiger cette faiblesse, je décide donc de ne rendre disponible qu’un seul mode de jeu : le mode Arcade et uniquement en partie “Random” (questions aléatoires). Les joueurs pouvant faire une partie par jour avec un maximum de 20 questions s’ils ne font aucune erreur, il me faut 100 questions pour proposer 5 jours de jeu aux meilleurs qui font des sans fautes mais je peux allonger l’expérience à 10 jours pour ceux qui font une erreur de temps en temps. 

### La monétisation 

Mais pourquoi donc penser à la monétisation puisque je disais plus haut que l’idée n’était pas d’en faire un produit commercial ?

Eh bien, si l’objectif c’est de créer une communauté sur la base d’un jeu multi joueur, ça va avoir un coût malgré tout. Dans ce cas, je me suis quand même posé la question de comment je pourrais dégager un minimum de revenu pour payer le service.

Justement, combien coûte le fait de faire tourner Coderwatch ?

- 40 euros de nom de domaine (une fois par an)
- 49 euros de thèmes figma (j’y reviendrai)
- 20 euros de conso mensuelle sur Clever Cloud (un PAAS pour faire tourner l’application)

Bref, la cible n'est pas haute, il faut réussir à dégager environ 25 euros par mois. 

En réalité, c’est un peu plus complexe que ça, si jamais il y avait plus d’utilisateurs, la conso sur Clever augmenterait aussi. Mais bon même dans le cas improbable d’une large utilisation, je pense qu’il y a le temps de voir venir avant de dépasser les 50 euros mensuels. 

Mais bon, ne nous emballons pas. A ce stade quand j’y réfléchis j’ai 0 utilisateurs, pas encore de site qui marche et le temps disponible pour le faire se résume aux soirs et week ends. En principe c’est la bonne recette pour dégager quelque chose qui se rapproche de 0 et donc je dois sans doute accepter d’en être pour ma poche et de le faire pour la gloire. 

D’autant que, encore une fois, **ce n'est pas mon objectif**. A côté de ça j’ai un métier qui fait que je n’ai vraiment pas à me plaindre donc ça va rester un hobby. 

Oui certains ont des hobbies bizarres… 

Ceci étant dit, il y a quelques pistes possibles. Elles dépendent du trafic généré. La publicité est une option (comme Duolingo). L’affichage d’annonces de job, via affiliation ou en direct est une autre option. 

Sur la pub, AdSense propose [un outil de simulation des revenus](https://www.google.com/adsense/start/#calculator) en fonction du trafic.

Avec l’application de quelques règles de trois, il faut faire environ 200 utilisateurs actifs par jour pour atteindre ces fameux 50 euros mensuels, et encore, si personne n’utilise adblock ce qui serait surprenant sur une population de dev. C’est pas la solution qui m’attire le plus, je n’aime pas la pub. Mais bon, il faut le garder en tête car par contre c’est très simple à mettre en œuvre. 

Faire un jobboard, c’est du dev en plus, même si ca me semble pas trop complexe. Il faut cependant avoir un trafic journalier conséquent pour intéresser des boîtes à poster des annonces. Par contre le coût d’une annonce sur un job board oscille entre 100 et 200 euros pour un site de niche. Avec une seule annonce j’atteins mon objectif de payer le prix du service. C’est aussi l’option qui passe le mieux à l’échelle parce qu’avec du volume ça pourrait même devenir un vrai revenu et il y a d’ailleurs des boîtes dont c’est le business model. 

Bon, c’est pas très sec, mais comme je le disais, ça risque d’être surtout pour la gloire.

## La suite ! La suite !

C’est fini pour aujourd’hui dans ce premier billet de la série. Je vous ai dévoilé tout le cheminement de pensée derrière les premières étapes de la création du jeu. 

Pour rappel, vous pouvez le tester sur [www.coderwatch.io](http://www.coderwatch.io) . 

[![](/images/image-2.png)](https://eventuallycoding.com/wp-content/uploads/2022/04/image-2.png)

Dans les prochains billets je parlerais de design, d’intégration front end, de développement backend et de comment je déploie tout cela sur Clever Cloud. 

Stay tuned.
