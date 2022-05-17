---
id: "497"
title: "La quête du Graal avec un cure-dent"
description: "![](/images/grails-logo.png \"grails-logo\") Grails fait partie des framework haute productivité à la mode ces dernières années. J’étais plutôt motivé p..."
date: "2012-03-10"
categories: 
  - "waza"
tags: 
  - "grails"
  - "groovy"
img: "grails-logo.png"
cover: "cover7.jpg"
---

![](/images/grails-logo.png "grails-logo") Grails fait partie des framework haute productivité à la mode ces dernières années. J’étais plutôt motivé pour le tester histoire de sortir un peu de Play Framework pour lequel j’avoue avoir quelques craintes sur son futur (je détaillerais dans un futur billet). Du coup je me suis motivé pour l’utiliser au sein de [Lateral-Thoughts](http://www.lateral-thoughts.com/) sur une appli interne. Et pour être honnête, j’ai été plutôt déçu. 

Avant d’aller plus loin je vais mettre les petites astériques habituelles histoire de m’éviter des insultes en pagailles dans les commentaires.

> (\*) Le reste de ce billet n’engage que moi, il fait suite à 2 semaines d’expérimentation sur le framework et peut très bien s’expliquer par un manque de connaissance sur Grails.
> 
> Je ne connaissais pas non plus Groovy, a part le peu que j’en utilise sur les templates Play Framework et dans le même temps je me suis aussi mis sur IntelliJ.
> 
> Changer d’IDE, changer de framework web, apprendre Groovy, ok c’est vrai que je mettais pas toutes les chances de mon côté.

_En même temps il n’y a pas non plus des miliers de lecteurs ici pour craindre des représailles ^^_

Maintenant que j’ai mis les gants, je vais ressortir les griffes. Grails, framework haute productivité, j’y crois pas un instant. La caractéristique même d’un framework haute productivité devant être la rapidité de développement.

C’est vrai qu’on peut mettre ma difficulté à entrer dedans sur le dos de la nouveauté. En même temps j’ai déjà suffisamment fait de langages et de frameworks différents pour penser que 2 semaines ça aurait du être largement suffisant vu ce qu’il y avait à faire.

Voici une petite liste des gros points noirs que j’ai rencontrés :

- le débuggage :

Juste l’enfer, en fait pendant un certain temps j’ai cru que la seule trace d’erreur que pouvait écrire Grails c’était : NumberFormatException For input string: "1B" Les messages d’erreurs sont imbitables la majorité du temps et les stack traces inutilisables. Être un langage dynamique n’excuse rien, PHP est capable de donner l’erreur et la ligne exacte depuis ces toutes premières versions...

- Lenteur des tests unitaires

Rien que sur ce seul point j’ai détesté coder avec Grails. Je n’ai peut être pas trouvé la bonne de façon de faire mais j’ai tenté l’utilisation d’IntelliJ pour lancer les tests. Dans ce cas il se pose deux choix : le lanceur Grails ou le lanceur Junit. Utiliser le lanceur Grails implique de passer 10 secondes pour un test. Impensable d’écrire des tests régulièrement et de devoir attendre 10 secondes à chaque fois. Quand au lanceur Junit, il met un peu moins de temps (3 sec quand même) mais ne permet pas de jouer tout les tests, notamment pas ceux portant sur le modèle. C’est un énorme STOP pour moi.

- lenteur des templates

En DEV la compilation des JSP Grails est relativement lente. C’est même assez paradoxal de remarquer que les templates Groovy de Play sont plus rapide à s’afficher que les pages GSP de Grails. Ca ne reste que du ressenti mais la sensation de lenteur est très pénible. Enfin au moins les GSP supportent les modifs à chaud, contrairement au reste (Cf point suivant).

- Les modifications à chaud

Depuis que je connais Play, les modifications à chaud font partie des critères obligatoires pour que je puisse qualifier un framework de “haute productivité”. Dans mon cas les modifications à chaud ont marché une fois sur 10. Les modifs dans les contrôleurs par exemple nécessitent presque à chaque fois un redémarrage. Effectivement ça marche mieux avec les GSP mais bon, c’est aussi le cas des JSP depuis des années. En fait Grails a été moins efficace qu’un Spring MVC avec Tomcat et Jrebel.

Bon mais il y quand même des points un peu moins noirs:

Les GSP sont plus riches que les templates Play en terme de fonctionnalités et le fait d’être une surcouche sur des JSP permet d’utiliser toutes les taglibs classiques. Je reste un peu dépaysé avec mais je pense que je finirais par les apprécier.

GORM est plus expressif que JPA. Une fois pris en main la définition des objets du modèle est assez simple. Cependant j’ai rencontré pas mal de soucis. Par exemple qu’il fallait utiliser save(failOnError : true) pour connaitre les erreurs au moment de sauver une entité. Pas très “straightforward” pour un débutant. Bon après ca reste du hibernate en dessous, forcément si on aime pas la magie, fallait pas ;)

Les plugins Grails sont assez nombreux et ont l’avantage d’être présent sur des repository qui ne dépendent pas de l’éditeur (en comparaison avec ceux de Play par exemple). En deux semaines je n’ai cependant pas eu l’occasion d’en utiliser donc je ne m’aventurerais pas trop sur le sujet.

La documentation est assez riche, c’est quand même Spring derrière. Par contre elle a un gros défaut, il lui manque un côté didactique pour qu’un débutant démarre un projet rapidement dessus. Le quick start est un peu trop léger, quand à la partie Tutorials elle ne comporte que des liens vers des blogs pas toujours mis à jour. Dommage, sur ce point le tutorial Yabe de la doc Play est un bel exemple de documentation didactique.

Juste avant de conclure j’ai envie de répondre a un troll que j’ai vu passer sur Twitter :

![](/images/grails.png "grails")

Euh, ouais, enfin l'adoption mainstream en entreprise je rigole doucement :

- [freelance-info](http://www.freelance-info.fr/) : 0 offre sur grails
- [les jeudis.com](http://www.lesjeudis.com) : 1 offre sur grails
- [express board](http://www.express-board.fr/) : 0 offre sur grails (1 avec groovy mentionné dedans quand même)

Et pour répondre au troll par un troll si les gars qui font du grails ne bloggent pas c'est surtout qu'ils passent leur temps a relancer leur serveur a chaque modif ou a lancer leurs tests unitaires qui prennent une minute ;)

Bon enfin tout n’est pas si horrible, il y a des bons points mais pas suffisamment à mon goût et surtout des points noirs rédhibitoires. Je ne doute pas qu’il soit possible de faire des choses puissantes ave mais mon besoin était simple et je n’ai pas eu la productivité escompté.

En fin de compte je le comparerais plutôt à un Spring MVC (utilisé en sous main). Et quitte à le comparer je préfère justement un Spring MVC bien configuré pour aller plus vite.
