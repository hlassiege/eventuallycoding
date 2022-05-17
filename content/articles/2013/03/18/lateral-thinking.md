---
id: "737"
title: "Lateral Thinking"
description: "Cette expression vous évoque quelque chose ? Un petit indice, elle est souvent associée à une autre expression : “Penser en dehors de la boîte” (Think..."
date: "2013-03-18"
categories: 
  - "waza"
tags: 
  - "lateralthinking"
img: "glasses.gif"
cover: "cover6.jpg"
---

Cette expression vous évoque quelque chose ? Un petit indice, elle est souvent associée à une autre expression : “Penser en dehors de la boîte” (Thinking outside the box). Avec cet indice vous ne devriez plus être très loin. C’est un mode de résolution de problème basé sur une approche non conventionnelle. Il s’agit avant tout de se débarrasser des contraintes traditionnelles, approcher un problème par de multiples angles y compris les plus étonnants.

La pensée verticale/classique consiste à avancer étape par étape après avoir éliminé toutes les pistes irréelles ou absurde. La pensée latérale s’autorise à envisager ces solutions absurdes pour déclencher un processus de pensée qui aboutira peut-être à une solution viable. Ce mode de reflexion encourage la créativité et permet parfois de passer des obstacles réputé insoluble.

 

## Testez votre latéralité

Tout d’abord un petit test, voyons vos capacités à innover pour répondre à un problème.

Si je vous demandais en ne touchant qu’un seul verre d’alterner les verres pleins et les verres vides sur cette rangée ?

[![](/images/glasses.gif "glasses")](http://hakanai.free.fr/index.php/lateral-thinking/glasses/)

En adoptant une étape standard, vous ne réfléchiriez qu’en terme de permutations de verre et le problème vous paraitrait insoluble. Mais si vous preniez le second verre pour en verser le contenu dans le 5ème avant de le reposer à sa place d’origine ?

Un autre test ?

Essayez de joindre les 9 points de ce carré en utilisant seulement 4 traits sans lever la main et sans repasser sur le même trait : [![](/images/ninedots.gif "ninedots")](http://hakanai.free.fr/index.php/lateral-thinking/ninedots/) La réponse consiste à sortir des limites de la boîte délimité par les points :

[![](/images/ninedotslines.gif "ninedotslines")](http://hakanai.free.fr/index.php/lateral-thinking/ninedotslines/)

Et c’est de cette énigme que vient l’expression  : **Thinking outside the box**, “Penser en dehors de la boîte”.

 

## Identifiez les bords de votre boîte

Si vous avez lu Pragmatic Programmer il est question du Lateral Thinking et l’auteur ajoute :

> _“il ne s’agit seulement pas de penser en dehors de la boîte, mais de trouver la boîte”_ (citation approximative)

Parfois le plus difficile avant d’aborder d’autres pistes c’est de comprendre où se situent les limites qui vous empêchent de voir les autres pistes. Si on reprend l’exemple des points ci-dessus, la première difficulté revient à comprendre que l’on se fixe soi-même la règle de ne pas aller en dehors du carré délimité par les points. Personne ne nous a donné cette règle, elle s’est imposé d’elle même. Votre éducation, votre esprit logique façonné par des centaines d’heures d’apprentissage abbétissant de manuels d’exercices vous ont enseigné ce réflexe. Première leçon, il faut savoir remettre en cause nos acquis.

En informatique nous avons souvent des problèmes à résoudre. Prenons en un au hasard :

J’arrive sur un projet, il existe une intégration continue qui joue des tests d’intégration, un bon milliers, durant plus d’une heure, parfois 5, et échouant aléatoirement..

[![](/images/yz9z6q8.gif "YZ9Z6Q8")](http://hakanai.free.fr/index.php/lateral-thinking/yz9z6q8/)

Oui, c’est triste...

Ceux qui ont l’habitude de faire des tests vont être formatés pour résoudre en priorité chaque build en échec. Nos 1000 tests doivent fonctionner, ils forment un garde fou des développements en cours.

Une approche logique va conduire à envisager différentes pistes :

- identifier les tests avec les temps d’exécution les plus importants
- résoudre les tests qui échouent

en itérant sur chaque nouvel échec de build jusqu’à la fin de temps (ou de la mission pour être plus réaliste)

Revoyons cela sur une autre approche et autorisons nous une piste abbérante :

et si on supprimait les tests ?

[![](/images/catcrazy.jpg "catcrazy")](http://hakanai.free.fr/index.php/lateral-thinking/catcrazy/)

De cette hypothèse de départ étrange, on peut être amené à se poser des questions :

- quelle est la valeur de mes tests ?
- que testent mes tests ?
- qui regarde ces tests ?

 

La première question va peut être m’amener à découvrir que le code testé correspond à du code mort non utilisé depuis des années. Il est temps de lui rendre un dernier hommage et de le laisser partir. Même du code mort a droit à un peu de respect.

La seconde question va peut être me faire découvrir que je teste des objets mocks. Les développeurs à trop vouloir bien faire ont remplacé tout le code testé par... du code de test. Vous laissant vous dépatouiller avec un tomcat qui met 5 minutes à se lancer et des tests seleniums qui testent des pages mockés. Un petit moment de solitude ?

Et puis la dernière question va m’amener à découvrir que je suis le seul intéressé par le résultat de ces tests. Le problème est plus profond, les tests ne sont pas maintenus et ne le seront pas après moi. Vu l’état du bouzin, s’il y a de l’énergie à perdre elle est ailleurs, un peu d'évangélisation ne serait pas malvenue. Mais il faut s'attendre à revenir au ras des paquerettes.

## L’immobilisme

A l’opposé de la pensée latérale on a plutôt ça :

> _Nan mais c’est comme ça depuis le début/ça a toujours été comme ça_

Elle ne vous fatigue pas celle là ? Avec l’expérience vous remarquerez que cette citation n’a rien à voir avec l’âge de la boîte ou du soft. C’est une attitude, une position qui campe devant le changement comme les romains devant le village d’Astérix. Pas besoin de justification, si je suis là j’ai pas à me demander pourquoi.

J’insiste, c’est avant tout une question d’état d’esprit, pas une réalité. Pire, parfois c’est devenu une culture d’entreprise. Si vous vous demandiez comment ce genre de situation peut se mettre en place, je vous invite à lire [le théorème du singe](http://fr.wikipedia.org/wiki/Th%C3%A9or%C3%A8me_du_singe) : (mais après cette page hein, procédez dans l’ordre ;))

C’est dans ce genre d’ambiance que ça vaut le coup d’afficher au dessus de son bureau les deux citations suivantes :

> _Tout le monde disait que c'était impossible, un "imbécile" qui n'était pas au courant est arrivé et l'a fait._ - MARCEL PAGNOL
> 
> _Ils ne savaient pas que c'était impossible, alors ils l'ont fait._ -  Mark Twain ; Pensées et aphorismes (1835-1910)

Savoir remettre en cause vos contraintes, revenir sur vos acquis, rouvrir des pistes fermées par _habitude/loi régalienne/cétaitcommeçaavant_ fait partie du processus de Lateral Thinking.

## Le mouvement

A l’inverse de l’immobilisme, la caractéristique de la pensée latérale c’est le mouvement. En suivant un mode de raisonnement logique étape par étape on peut parfois bloquer dans la résolution de problème. Aborder de nouvelles solutions et envisager l’improbable permet de continuer à avancer, même si ce n’est pas en ligne droite.

Revenons sur cette notion, le mouvement, le pivot. C’est sur cette notion de pivot que se base le Lean Startup. Le Lean Startup c’est l’adaptation des process Lean à la création de société/produit. C’est se donner la capacité d’aller vite, de confronter ces idées via un MVP (most valuable product Minimum Viable Product) simple mais qui donne déjà un maximum de valeur. L’un des objectifs du Lean Startup c’est de récupérer un maximum de feedback régulièrement. Et en récoltant ces feedbacks, on adapte, on pivote. On peut voir cela comme du Lateral Thinking. Si vous voulez quelques exemples de sociétés qui se sont construits sur le principe et qui ont su pivoter pour s’adapter à leur marché, n’hésitez pas à regarder ce site : http://theleanstartup.com/casestudies

Voilà, vous en savez un peu plus sur le Lateral Thinking. Et ce mode de pensée caractérise les membres de Lateral-Thoughts. Nous sommes convaincus :

- que la remise en cause est nécessaire, même des acquis les plus profonds
- que l’innovation peut émerger de partout, et de tout le monde
- que le mouvement est préférable à la résistance
- que les meilleures solutions nécessitent parfois de sortir des sentiers battus

 

Et ce n'est pas pour rien que nous sommes inspirés de l'énigme des 9 points pour le logo de [Lateral Thoughts](http://www.lateral-thoughts/) :

[![](/images/logoapp.png "logoapp")](http://hakanai.free.fr/index.php/lateral-thinking/logoapp/)

Pour la petite histoire, le logo a été récemment revisité par [Laurent Chesneau](http://www.lolograph.com/), un bon designer. Et pour mémoire l’ancien c’était celui-ci :

[![](/images/logoappold.png "logoappold")](http://hakanai.free.fr/index.php/lateral-thinking/logoappold/)

Et pour rester dans l’inattendu, le décalage, Laurent Chesneau nous a proposé un second logo que l’on va utiliser en bonus de temps en temps basé sur cette notion de mouvement, de déplacement latéral. C’est notamment notre nouvelle icône sur Twitter !

[![](/images/redcrabe2.jpg "redcrabe")](http://hakanai.free.fr/index.php/lateral-thinking/redcrabe-3/)
