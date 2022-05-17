---
id: "531"
title: "Devoxx France 2012 jour 3/3"
description: "[![](/images/logo-devoxx-france-seul.png \"Logo-Devoxx-France-seul\")](http://eventuallycoding.com/wp-content/uploads/2012/04/logo-devoxx-france-seul.pn..."
date: "2012-04-23"
categories: 
  - "waza"
tags: 
  - "devoxx"
img: "logo-devoxx-france-seul.png"
cover: "cover7.jpg"
---

[![](/images/logo-devoxx-france-seul.png "Logo-Devoxx-France-seul")](http://eventuallycoding.com/wp-content/uploads/2012/04/logo-devoxx-france-seul.png) Voici le 3ème et dernier jour qui commence. Pour ne rien cacher, après 2 journées déjà bien chargées et la soirée Meet and Greet de la veille, cette journée dense qui s'est malgré tout fini à 19h fut difficile à encaisser. Mais bon, que voulez-vous, quand on aime on ne compte pas.

Petit panorama de ce que j'ai pu y voir.

## les keynotes

Comme la veille, je suis arrivé après le début des keynotes. Il faut dire que cette journée de vendredi fut aussi chargée que la veille en nombre de participants donc tout aussi difficile au vestiaire. Sauf qu'à la différence du jeudi un grand nombre a déposé une valise en sus du manteau. Et oui, ça fait partie des grosses surprises de cette édition, nous avons eu beaucoup de gens provenant d'ailleurs. Je n'ai pas encore les chiffres et je ne sais même pas si nous les aurons mais Devoxx France 2012 fut un évènement à l'échelle du pays et non un regroupement de geeks parisiens !

Bon bref, j'ai rejoint en cours de keynote pour assister à une beau discours de Patrick Chanezon (Vmware) qui a su réutiliser le thème de The Artist avec humour. Après avoir bien roulé sa bosse il analyse notre période actuelle comme faisant partie d'un des grand cycles de changement comme il y en a déjà eu dans le passé :

- les applications mainframe à partir des années 60,
- le client serveur dans les années 80,
- le web dans les années 90 avec sa révolution 2.0 dans les années 2000
- et puis enfin les années 2010 avec le cloud, le html5 et le mobile.

Et son dada justement c'est le Cloud, ça tombe bien dis donc ;) Du coup il nous en a parlé et il est revenu notamment sur la différence entre IAAS, PAAS, SAAS en rappelant qu'en tant que développeur nos centres d'intérêt se situent majoritairement sur les PAAS. Avis personnel, avec les pratiques Devops qui font de plus en parler d'elles, le développeur pourrait aussi s'intéresser aux IAAS pour les provisionner de façon bien plus intelligente et efficace qu'auparavant, fin de la parenthèse.

Les slides de sa présentation sont déjà disponibles sur slideshare, [je vous laisse les découvrir](http://www.slideshare.net/chanezon/devoxx-france-2012-portrait-du-developeur-en-the-artist) si vous avez raté la session. Ils sont suffisamment bien fait pour être compréhensibles.

Et enfin, dernière keynote, nous avons enchaîné avec "Abstraction Distractions" de Neal Ford. Vous pouvez retrouver [les slides utilisés](http://www.nealford.com/mypastconferences.html) sur son site. La encore, bonne keynote, très dynamique et qui a assumé son rôle de note d'ouverture : un discours capable de nous faire aller plus loin que notre train train quotidien. Le thème général tournait autour des abstractions que nous utilisons régulièrement pour résoudre nos problèmes courants d'informaticien et qui nous emmène parfois dans de belles impasses lorsque nous nous laissons distraire de l'objectif initial. Ca ne vous rappelle rien ? Tiens, le discours de Pierre Pezziardi sur la recherche de valeur ! Je ne sais pas si je suis le seul à établir ce lien mais pour moi il existe. Encore une fois la leçon c'est qu'il faut franchir les frontières de la technicité pour résoudre un problème et non se "vautrer" dans nos abstractions et perdre de vue la valeur à produire. On notera un superbe raid anti maven effectué par Neal qui aura entamé la charge par une citation plus cinglante :

> “Maven builds are an infinite cycle of despair that will slowly drag you into the deepest, darkest pits of hell (where Maven itself was forged).”

Comme quoi, même les plus grands peuvent se tromper ;)

## Grails

Bon, vous devinez sur quoi j'ai enchaîné par la suite ? Hum, pour le peu de lecteurs qui fréquentent ce site vous vous souviendrez peut être de [ma quête du graal avec un cure dent](http://hakanai.free.fr/index.php/la-quete-du-graal-avec-un-cure-dent/ "La quête du Graal avec un cure-dent"). Eh oui, j'avais testé Grails pour un projet perso et je m'en étais un peu mordu les doigts. Et devinez quoi, Sébastien Blanc et Stéphane Maldini m'avait invité dans les commentaires à venir voir de mes propres yeux leur présentation à Devoxx France ! Forcément c'est ce que j'ai fait ^^

On a assisté à une présentation rapide de Groovy puis de Grails et ensuite ce fut du live coding pendant 30 minutes. Enfin presque live puisqu'une partie du code provenait d'une application de secours. C'était censé illustrer la rapidité de développement avec Grails et c'était bien amené. Bon après c'est comme toutes les présentations de live coding, c'est dangereux et on a eu droit à l'effet démo. Tant pis, ça arrive. Et je ne trollerais pas en disant que les stracktraces à l'écran étaient incompréhensibles, non je ne trollerais pas ;)

On notera les retours très très positifs sur la présentation de Habib Guergachi sur les architectures orientées Web. Vivement son passage sur Parleys tellement les tweets ont été positifs dessus.

## Les quickies du midi

J'ai vu qu'un seul quickie cette fois car je tenais à ne pas louper le repas cette fois-ci. Et pour poursuivre sur le thème Devops j'ai assisté à [DevOps illustré : la jungle de la configuration d'une application](http://www.devoxx.com/pages/viewpage.action?pageId=6128509 "DevOps illustré   la jungle de la configuration d'une application"). L'approche était intéressante, elle ne répondait pas complètement à ce que j'attendais car j'aurais aimé voir des solutions de configuration management mais j'y penserais sans doute en fonction des cas de figure.

J'en profite pour signaler qu'à la même heure il y avait aussi Florent Biville qui passait pour un autre outils qu'on peut ranger dans la catégorie Devops puisqu'il s'agissait de [Liquibase](http://www.liquibase.org/). Pourquoi Devops ? Parce qu'il permet d'intégrer la gestion du cycle de vie des données dans le cycle de vie de l'application. C'est un peu ça au final Devops, c'est l'intégration des différents processus autrefois en silos (dev, dba, ops) amenant à la création d'une application.

Et vous avez peut être suivi aussi Andrew Spencer et son talk : [L'heure de la SSII coopérative a sonné](http://www.devoxx.com/pages/viewpage.action?pageId=6128512 "L'heure de la SSII coopérative a sonné") ? Cool, il parait qu'on a mentionné [lateral-thoughts](www.lateral-thoughts.com) ! Je vous invite à y jeter un oeil ;)

## Le cloud

La session suivante à laquelle j'ai assisté était centré sur le Cloud. Cyrille Leclerc nous a fait un discours sur les différents services existants aujourd'hui et disponibles pour réaliser une application avec du MongoDb, du Lucene, une base de données, une appli web java. Il a évoqué les différents critères de choix permettant d'opter pour tel ou tel fournisseur en n'oubliant pas les aspects légaux ou les contraintes de vérouillage de certains de ces services.

Déjà premier point positif, l'application présentait un catalogue de cocktails, forcément je me sentais concerné ^^ Ensuite c'était intéressant car on sentait l'étude comparative réalisée et la difficulté de choisir parmi tous les services existants. Pour m'y être un peu frotté, entre le fait de trouver les services, décrypter les grilles tarifaires parfois obscures, comprendre comment s'intégrer dedans etc... C'est une belle jungle.

J'avoue que j'ai ensuite commencé un peu à caler. La fatigue des derniers jours a commencé à se faire ressentir et j'ai donc zappé les trois confs suivantes. J'ai commencé à assister à celle de Olivier Philippot sur les Greens Patterns mais j'ai vite senti que je n'avais plus la concentration nécessaire et je suis ressorti.

## Les castcodeurs

Comme je l'avais twitté, j'avais besoin de débrancher mon cerveau et c'était vraiment le bon endroit pour cela. Ca été ma dernière session, j'ai pris une bière australienne offert par Atlassian, j'ai ouvert le mode veille et j'ai savouré.

Pour le coup, je vais juste résumer l'ambiance, c'était Fun (oui avec un grand F). Et pour la petite histoire, je faisais partie du comité de sélection pour Devoxx et comme je ne connaissais pas les castcodeurs je ne les avais pas bien notés. J'avais un peu d'appréhension. Eh bien en fin de compte je ne regrette pas, c'est vraiment dans l'esprit, c'est une super session de cloture qui permet de résumer la conf. Bref, je m'étais trompé.

Et c'est déjà en ligne ! [http://lescastcodeurs.com/2012/04/les-cast-codeurs-podcast-episode-57-en-direct-de-devoxx-france-2012/](http://lescastcodeurs.com/2012/04/les-cast-codeurs-podcast-episode-57-en-direct-de-devoxx-france-2012/)

 

## Code story/Hackergarten/Programmatoo

Je me suis rendu compte que j'avais oublié 3 évènements majeurs sur les deux premiers billets. Je me permets donc quelques lignes dessus.

Oui car en parallèle de toutes ces confs nous avons eu droit à 3 formats très spéciaux :

- un [hackergarten](http://www.devoxx.com/display/FR12/Hackergarten+Paris) permettant à tout un chacun de devenir commiter open source. Apparemment il a bien marché
- un atelier de programmation pour les tous petits. Je n'ai pas assisté mais il y a de bons retours
- Code story, 4 geeks, 2 jours, du code et un super défi. Je n'ai vu que des bribes en coup de vent mais ça avait l'air d'envoyer du bois sévère. Et le code est sur [github](https://github.com/dgageot/CodeStoryDevoxx) si vous voulez vous faire une idée.

J'en profite pour saluer le fait qu'on a vu des directeurs informatiques (ou ex directeurs) nous démontrer a quel point ils étaient bons durant cet évènement. Ca a l'air de rien peut être mais c'est un message très fort pour moi. Ce sont des experts et ils sont à des postes importants sans avoir perdu leur fibre de développeur. Ils ne sont pas à leur poste juste pour vendre du vent, ce sont de vrais professionnels. C'est à contre courant de certaines grandes boites et ca fait du bien.

 

Pour conclure, je vous dis tous à l'année prochaine. Ce fut une très belle édition et j'espère que nous nous y reverrons si vous étiez déjà présents ou bien que ces petits résumés vous ont incité à venir la prochaine fois si vous avez du zapper cette année.

Et un merci à Arnaud Héritier pour les photos que j'ai collé sur la série. Elles viennent toutes de son appareil.
