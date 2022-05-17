---
id: "1807"
title: "Différences entre VP Engineering et CTO"
description: "Si le rôle de VP Engineering est relativement courant dans les entreprises anglo-saxonnes, cette dénomination est assez jeune en France et peut-être q..."
date: "2021-09-01"
categories: 
  - "waza"
tags: 
  - "cto"
  - "startup"
  - "vp"
img: "Illustration_sans_titre-20-1024x393.jpg"
cover: "cover4.jpg"
---

Si le rôle de VP Engineering est relativement courant dans les entreprises anglo-saxonnes, cette dénomination est assez jeune en France et peut-être que vous n'en avez pas encore côtoyé. 

Je souhaitais faire un billet sur ce rôle parfois méconnu, incompris, ou juste confondu avec le poste de CTO. 

Et pour cela, je souhaitais décrire la façon dont ce rôle a été introduit dans l'équipe engineering de Malt. 

En faisant cela, cela permettra de répondre à quelques questions que je me suis moi-même posé lorsque nous avons cherché notre VP Engineering :

- A partir de quelle taille d'équipe faudrait-il avoir un VP Eng ? 
- Quel est le profil type d'un VP Eng ?
- Dans quelle mesure son rôle et le mien se recoupe et comment cohabiter ?

En espérant que mon expérience dans une startup de 0 à 250 employés puisse servir à d'autres.

[![](/images/Illustration_sans_titre-20-1024x393.jpg)](https://eventuallycoding.com/wp-content/uploads/2021/09/Illustration_sans_titre-20.jpg)

**Avertissement** 

Dans ce billet comme dans les précédents, je vais utiliser les termes US pour les métiers : VP, CTO etc... 

Et honnêtement je ne me vois pas faire autrement. 

La structuration des startups/scaleup est largement calquée sur les modèles américains. Et s'il est vrai que certains rôles peuvent être traduits en Français, c'est aussi vrai que l'esprit du poste en question est très lié à un modèle d'organisation "à l'américaine" et que les traductions ne rendent pas toujours l'esprit de ces postes.

Est-ce que le directeur technique a véritablement le même rôle qu'un CTO ? Quand je vois les définitions de directeur technique sur internet, je peux vous dire que non ^^

Et les traductions n'existent pas toujours. Qu'est-ce qu'un Principal Engineer, Staff Engineer, Engineering Manager ou même VP Engineering en Français ? 

De fait, les titres reflètent bien souvent la culture managériale d’un pays et sur ce point, la France et les US sont assez éloignés. 

Et c'est d'ailleurs ces différences culturelles qui expliquent en partie pourquoi le rôle de VP Engineering n'est pas forcément présent dans votre entreprise. 

Second disclaimer, ça y est je commence les anglicismes, ce billet est écrit sous l’angle d’un CTO fondateur. Et ça a son importance. 

En tant que fondateur, le rôle évolue dans le temps avec le “confort” (**1**) de pouvoir choisir son rôle dans l’organisation qui change, ce qui est assez différent d’une personne qui rejoindrait une entreprise avec un rôle de VP ou CTO et une mission claire dont il ne peut pas dévier. 

# A partir de quelle taille d'équipe faudrait-il un VP Engineering ?

[![](/images/Illustration_sans_titre-19-1024x706.jpg)](https://eventuallycoding.com/wp-content/uploads/2021/09/Illustration_sans_titre-19.jpg)

Récemment j'ai écrit un billet sur [l'évolution du rôle de CTO de startup à scaleup](https://eventuallycoding.com/2021/05/03/cto-de-startup-a-scaleup/). Je racontais notamment que ce rôle de CTO dans les premières étapes comprend le fait d'être le premier développeur, le garant de la vision technologique et celui qui va créer l'équipe produit pour son passage à l'échelle.

Par la suite, on apprend à se virer soi-même pour trouver les personnes qui vont nous remplacer sur telle ou telle partie du job. 

Le rôle est à cheval entre un rôle de contributeur individuel, de leadership et de management. 

Et puis à un moment dans la croissance de la société, le CTO doit faire un choix. Il devient de plus en plus dur d'être développeur, recruteur, organisateur, responsable de la stratégie, coach etc... 

Et quand j'écris cela, c'est pour des raisons évidentes de temps disponible dans une journée. Je m'explique.

Si on reprend les grands axes du rôle de CTO en startup, on retrouve :

\- la vision technologique (définition de l'architecture, scalabilité, faisabilité)

\- la gestion humaine (coaching, recrutement, fidélisation, gestion de la performance)

\- la gestion de l'exécution et du delivery (organisation et staffing des équipes, process de communication, méthodes agiles, mesures de la qualité)

\- la vision produit (adéquation entre tech et métier, définition produit, stratégie, discussion avec les autres C-Level, discussions avec les clients)

A cela, pour un CTO fondateur, il faut ajouter toute la diversité des tâches liés à la création et la croissance de la société.

Même si on part de l'hypothèse que la personne soit compétente et motivée par tous ces aspects du métier, il y a une limite matérialisée par le nombre d'heures disponibles dans une journée.

Or, quand la boite grandit, **chacun de ces rôles prend plus de temps** (**2**) donc il faut faire des choix, ou bien tout faire moins bien, ce qui est un choix aussi ^^

[![](/images/Illustration_sans_titre-18-1024x533.jpg)](https://eventuallycoding.com/wp-content/uploads/2021/09/Illustration_sans_titre-18.jpg)

Et donc, à partir de quand cela devient nécessaire ? 

On parle souvent du palier de 7/8 personnes qui correspond à la taille idéale d'une équipe, la fameuse [pizza team de Amazon](http://blog.idonethis.com/two-pizza-team/). 

Effectivement à ce palier en théorie on peut déjà rechercher un Engineering manager pour prendre en charge une partie de la responsabilité du delivery (organisation, process, qualité, people management). 

Mon point de vue c'est, qu'en startup, chaque recrutement compte d'un point de vue financier et ça reste un peu overkill dans une équipe de 8 de commencer à introduire des rôles "organisationnel". 

Donc ma stratégie a été un peu différente, je n'ai recruté volontairement que des seniors qui, en théorie selon moi, ne nécessitent pas de management. 

Bref, pour une startup avec un CTO fondateur, **qui a des appétences de VP (****3****)**, je situerais ce palier plutôt aux alentours de 15/20 personnes.

# En pratique, comment avons- nous recruté notre VP chez Malt ?

Fin 2018 nous étions environ 30 dans l'équipe produit, j'avais un peu tardé... Il n'existait aucun engineering manager (et donc aucun VP non plus). 

Sauf que l'année 2018 m'avait montré les limites du modèle. Ma capacité à développer avait diminué de 50% par rapport à 2015 car les recrutements de l'année m'avaient pris un temps important. En parallèle, j'ai pu passer de moins en moins de temps avec les membres de l'équipe qui étaient pourtant de plus en plus nombreux.

Ce que je savais, c'est que je souhaitais me décharger de la gestion humaine et la gestion du delivery, même si j'aimais bien ces sujets. 

J'ai mis du temps à définir ce que j'attendais et comment ça fonctionnerait. Et forcément, si "tout ce qui se conçoit bien s'énonce clairement", l'inverse est vrai. Ayant du mal à le définir, j'ai sans doute eu du mal à l'expliquer, par exemple à Vincent, cofondateur, qui, comme moi quelques mois plus tôt, trouvait anticipé d'avoir un rôle organisationnel dans une petite structure. 

Sauf que là, c'était déjà trop tard. 

Premier trimestre 2019 j'ai mis sur papier une fiche de poste, un descriptif permettant de bien séparer le rôle du CTO de celui du VP. Cette étape a été importante puisqu'elle m'a permis de formaliser pour moi mais aussi pour les candidats que j'allais rencontrer. Eux aussi ont besoin que ce soit clair. 

Selon Lever, notre ATS, 40 personnes sont entrées dans le processus pour ce poste. 6 ont été jusqu'à rencontrer l'équipe. 

Le processus a démarré en février/mars 2020 et s'est conclu en septembre pour une prise de poste en décembre.

Pour moi, l'exercice a été très difficile. Je sais très bien recruter des Software Engineer, j'ai un process rodé et sur chaque étape je sais détecter les mauvais et les bons signes.

Mais un engineering manager ou un VP, je n'avais pas l'habitude. J'avais des critères un peu généraux : le fait d'avoir déjà vécu une phase de scale par exemple. Mais là il s'agissait de trouver la personne avec qui la relation devait être parfaite. 

J'ai rencontré plein de gens très bien, mais c'est difficile de savoir si j'aurais pu travailler avec eux, si on allait partager la même vision. C'est un peu comme choisir un colocataire. Et puis dans cette histoire j’allais déléguer des parties sur lesquelles j’étais plutôt content de mes résultats et je voulais que le travail soit dans le même esprit.

En conséquence, c’était compliqué de savoir si je prenais ou pas une bonne décision sur chaque personne que j’ai pu rencontrer et j’ai sans doute été très conservateur sur certains cas...

En fin de compte, la recherche s'est conclue avec Benoit Guillon, ex Director Engineering chez Talend. Mais j’ai un peu triché puisque nous avions déjà travaillé ensemble 10 ans auparavant. Et la confiance que j’avais en cette personne a été un critère clé pour le choix final. 

# Le profil type d’un VP Engineering

Ce titre de paragraphe est un peu fallacieux, il n’existe pas de profil type, ou tout du moins, nous n’aurons pas tous la même définition de ce profil type.

De mon point de vue, un VP engineering est passé par le développement. Il existe des exemples de VP à succès qui n’ont pas été dev, mais c’est une exception. 

C’est une personne qui doit être capable de comprendre les subtilités des problématiques du développement et l’arbitrage constant que l’on fait entre court et long terme. Attention, cependant, un(e) VP n’a pas nécessairement été un(e) excellent dev et on n’attends pas de cette personne qu’elle dirige la vision technologique. 

En terme de parcours au sein d’une équipe d’ingénierie, on peut trouver des personnes qui sont passés par Chief Architect, Engineering Manager, Principal Engineer, donc avec une notion de leadership dans le rôle. 

Comme la gestion des rapports humains ne coule pas de source simplement parce que l’on était un(e) bon développeur, la personne doit avancer par palier, donc en théorie dans la plupart des cas, on essaie de viser une personne ayant déjà eu une expérience sur une taille d’équipe similaire ou légèrement inférieure.

Dans notre cas, le critère était d’avoir géré une équipe dans une phase de scale sur l’étape juste après nous, donc environ 100 personnes. On cherchait à apprendre de la personne en question pour gagner en rapidité d'exécution.

# Le recrutement d’un VP est-il inévitable ?

Je disais plus haut qu’à partir d’un certain palier, le CTO doit faire un choix sur ce qu’il veut faire (et peut faire). Il est tout à fait possible que le CTO fondateur choisisse de se concentrer sur la fonction de VP (people et delivery). 

Le recrutement d’un VP et le fait d’abandonner ces activités n’est pas une fatalité. 

Il est tout à fait possible au contraire de délaisser la partie vision technologique et de ne plus mettre les mains dans le cambouis assez tôt. Dans ce cas, le CTO va plutôt rechercher un Principal Engineer ou un Chief Architect. 

Mais je triche un peu dans ma réponse, si vous avez suivi, effectivement le CTO fondateur a le choix de ne pas recruter de VP, mais dans ce cas il va prendre ce rôle (avec ou sans changement de titre, ce n’est pas le point important).

[![](/images/Illustration_sans_titre-17-1024x1024.jpg)](https://eventuallycoding.com/wp-content/uploads/2021/09/Illustration_sans_titre-17.jpg)

Avec la croissance, le rôle se divise mais ne devient pas plus petit

# Rôle du CTO vs rôle du VP engineering 

Concrètement, le rôle du VP engineering c’est quoi ? 

VP comme CTO ce sont des rôles avec pas mal de variations suivant les boîtes car l’articulation des deux rôles peut justement amener à déporter plus ou moins de sujets sur l’un ou l’autre.

Dans certains cas, le VP peut prendre en charge toute la stratégie tech, le delivery et le people management et le rôle de CTO peut totalement s’effacer.

Vraiment j’insiste, ce rôle peut avoir des responsabilités et un rattachement hiérarchique assez différents selon les sociétés. 

Alors pour ne pas réécrire ce que bien d’autres ont déjà bien écrit avant moi, je vous propose une sélection de sources en fin de billet qui complètent mon propos.

Chez Malt, le VP a le people management (perf reviews, animation et vie d’équipe, organisation, recrutement) et le delivery sous sa responsabilité. La stratégie tech est encore partagée entre CTO et VP. En tant que CPTO je suis plus tourné vers l’extérieur et la stratégie long terme. 

# Les changements depuis l’arrivée du VP

Cela fera office de conclusion pour ce billet. 

Sur 2021 le rôle de VP est entièrement tourné vers la croissance de la société avec une structuration des recrutements qui augmentent, un travail fort sur l’accueil et l’accompagnement des nouveaux arrivants et la qualité du delivery dont la vitesse ne doit pas pâtir de la croissance.

L’arrivée d’un VP m’a permis de prendre de la hauteur sur mon propre rôle. Ceci fait directement écho au billet “CTO de startup à scaleup” que j’évoquais plus haut. 

J’ai pu me recentrer sur un rôle plus orienté stratégie tech, stratégie produit et plus tourné vers les autres équipes. Cette transition est encore en cours et la société continue de pas mal évoluer en ce moment. 

Wait and see

1. Confort c’est vite dit. C’est parfois assez déstabilisant d’être forcé de grandir à la même vitesse que la société, de ne jamais pouvoir se créer une zone de confort qui dure plus de 6 mois, de se virer soi-même sans arrêt. Mais au moins on a le choix.
2. C’est d’ailleurs vrai de tous les rôles et c’est pour cela qu’une équipe qui grandit a besoin de plus en plus de spécialiste d’une fonction
3. Je souligne en gras car si le CTO n’a aucune appétence pour le people management et le recrutement, là au contraire il va falloir rapidement trouver quelqu’un pour ça. Mais de mon point de vue c’est un cas relativement rare et anormal que le CTO fondateur soit rebuté par ces aspects

Autres sources :

[https://www.linkedin.com/pulse/vpe-cto-brad-henrickson/](https://www.linkedin.com/pulse/vpe-cto-brad-henrickson/)  : on retrouve les variations de rôles pour CTO et VPE

[https://www.beautifulcode.co/blog/94-vp-of-engineering-vs-cto-who-does-what](https://www.beautifulcode.co/blog/94-vp-of-engineering-vs-cto-who-does-what) avec une proposition de séparation des rôles par axe : vision, stratégie, supervision, responsabilité, planning etc…

[https://superorbital.io/journal/cto-vs-vpe/](https://superorbital.io/journal/cto-vs-vpe/) un mini-billet qui insiste sur le fait qu’un CTO ne lead pas d’équipes, tandis qu’un bon VP peut leader des centaines de développeurs

[https://jellyfish.co/blog/cto-vs-vp-engineering/](https://jellyfish.co/blog/cto-vs-vp-engineering/) cet article mentionne malgré tout la possibilité pour un CTO de garder une petite team de tech lead avec lui pour travailler sur de la R&D

[https://www.ivyexec.com/career-advice/2015/cto-versus-vp-engineering-whats-the-difference/](https://www.ivyexec.com/career-advice/2015/cto-versus-vp-engineering-whats-the-difference/) idem, le CTO est même vu au même rang hiérarchique avec report au CEO, comme le VP[https://review.firstround.com/give-away-your-legos-and-other-commandments-for-scaling-startups](https://review.firstround.com/give-away-your-legos-and-other-commandments-for-scaling-startups) Moins lié directement mais relate l’importance de savoir changer de rôle avec la croissance d’une société
