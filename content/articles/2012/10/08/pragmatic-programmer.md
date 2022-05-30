---
id: "602"
title: "Pragmatic programmer"
description: "Et si on parlait du développement pragmatique ? "
date: "2012-10-08"
categories: 
  - "waza"
img: "vera_c10.jpg"
cover: "cover4.jpg"
---

![](/images/vera_c10.jpg "vera_c10")

"[Et pendant ce temps à Véra Cruz](http://www.youtube.com/watch?v=27tbHlDKiko)" vous vous rappelez de cette scène dans la cité de la peur ?

C'est un peu l'état d'esprit dans lequel je me trouve face aux débats stériles sur internet : il y a toujours un endroit paisible ailleurs où la vie suit son petit bonhomme de chemin.

Tiens prenons un exemple, récemment je voyais des tweets sur Java Vs Scala, voire même sur OOP Vs FP. J'y ai vu passer de belles absurdités, que je mets sur le compte de la taille max d'un tweet qui ne peut refléter la pensée complète de l'auteur, enfin j'espère... Et pendant ce temps là, je me mets tranquillement à Python et je découvre un petit langage bien sympathique où les lambda expressions, le multi catch, le try with ressource, les varargs, les paramètres nommés  existent depuis belle lurette. Je découvre aussi que l'écosystème est mature (Gunicorn, Celery) et que faire du Web avec Django c'est aussi plaisant qu'avec Play Framework sauf qu'il existe 1400 modules, largement plus que les plugins Play et Grails réunis.

![](/images/iPOS6.gif "ah oui quand même !")

Mais revenons aux trolls, en 98 lorsque je faisais du Java à l'école j'ai moi-même participé à des débats de trolls C++ et Java. 
Plus tard vers 2003 j'ai encore trollé cette fois lorsque je faisais du PHP. Et PHP à l'époque pour faire du Web c'était vraiment bien.

Petite parenthèse, un troll quand il s'agit de second degré c'est parfait, tout comme en sport "chambrer" fait partie du jeu, par exemple, 
c'est un peu comme si je disais que la lisibilité du [Malbolge](http://fr.wikipedia.org/wiki/Liste_de_programme_Hello_world#Malbolge) était comparable à celle de Scala

```Scala
  trait GenericFunctor[->>[_, _], ->>>[_, _], F[_]] {
    def fmap[A, B](f: A ->> B): F[A] ->>> F[B]
  }
  (1.right[String] &lt;**&gt; 2.right[String]) { _ + _ + 10 }
```

```
(=<`:9876Z4321UT.-Q+*)M'&amp;%$H"!~}|Bzy?=|{z]KwZY44Eq0/{mlk**&nbsp;hKs_dG5[m_BA{?-Y;;Vb'rR5431M}/.zHGwEDCBA@986543W10/.R,+O&lt;
```

Sans rancune les Scalaistes, c'était pour la démo ;)

Commençons la minute psychanalyse, pourquoi troller ?  
Apprendre un langage/framework/techno c'est beaucoup d'énergie. Vous avez peut être passé vos études dessus, une certification, vous avez écrit des articles. Qu'un empaffé vienne vous dire que votre langage est pourri, conçus par des idiots et mal utilisé, forcément ça peut provoquer quelques aigreurs d'estomac.

En fait maîtriser un langage, et encore plus un paradigme de programmation c'est long et on ne devient très productif qu'après un certain temps, après avoir eu un certain déclic. Alors qu'est-ce qu'ils viennent vous chercher ces petits newbies qu'ont juste lu un tutorial en ligne !

![](/images/UyxD0.gif "Quand j'entends mon collègue dire que les programmeurs Java savent pas programmer parce qu'ils comprennent rien à la gestion de la mémoire")

Aujourd'hui après plus de 10 ans de dev, j'ai fait (liste non exhaustive) du C, C++, Visual Basic (argh), Java, C#, Python, PHP et actuellement je m'amuse à passer les cours en ligne Scala sur le site de [Coursera](https://www.coursera.org/). Suis-je devenu plus modéré ?

## Pas modéré, pragmatique

Vous connaissez "[pragmatic programmer](http://en.wikipedia.org/wiki/The_Pragmatic_Programmer)" ? (En fait j'ai découvert ce bouquin en écrivant ce billet, il faudrait que je le lise)

Un développeur pragmatique c'est

- une personne capable de prendre des choix en fonction du contexte et non en fonction des modes.
- une personne ayant un esprit critique, ce qui exclut d'emblée tous les fanboys
- une personne ayant un large spectre de compétence (sans forcément être un expert)

Je reviens sur le premier point. Qu'est ce qu'on entend par "_prendre des choix en fonction du contexte_" ? Vous vous rappelez de la question fondamentale que doit se poser tout bon développeur : _Buy or build_ ?

Pensez-vous que la réponse soit universelle quelque soit le problème ? Si oui, alors vous faites fausse route. Les personnes qui travaillent sur et en dehors votre projet, les délais, la durée de vie escompté de l'application et bien d'autres critères font partie de votre environnement. Et cet environnement conditionne la réponse à _"Buy or build"_

Prenons un exemple, j'ai vu il y a peu un architecte pousser un choix "Ruby On Rails" pour une application mobile. Je ne peux pas dire que ce choix était mauvais, ROR étant même plutôt un bon Framework web. Maintenant resituons le contexte.

- Cet architecte vit aux US et prend une décision pour une équipe Française constitué uniquement de développeurs Java
- Les profils Ruby sont très rares sur le marché français alors qu'ils sont plus fréquents sur le marché US (désolé je ne retrouve pas mes sources)
- la stack actuelle de déploiement est déjà peu maitrisé, sous entendu pas prête à changer drastiquement immédiatement

Au regard de ces éléments, le choix était mauvais. Belle illustration de l'architecte dans sa tour d'ivoire non connecté à son environnement.

## Pragmatique ne veut pas dire consensuel

Le type ultra consensuel, vous le connaissez ? C'est celui qui accepte tous les compromis pour obtenir un consensus bancal avec tout le monde. Il y a un monde entre "composer avec son contexte" et "se plier à son contexte". S'il est vrai que le contexte doit être pris en compte, il faut aussi avoir une vision long terme qui a pour objectif de maintenir la dette technique globale à un niveau acceptable. Etre pragmatique ne veut pas dire accepter tous les compromis.

Revenons en 2006, la célèbre année du coup de boule. Neal Ford insistait alors sur le [polyglot programming](http://memeagora.blogspot.fr/2006/12/polyglot-programming.html). L'idée principale tient en une ligne :

> "It's all about choosing the right tool for the job and leveraging it correctly"

Quand je vois que l'on choisit des outils incorrect pour le job me hérisse toujours le poil. Faire des sites web en C++, déporter la logique métier côté base de données, utiliser Perforce ou Websphere c'est juste aimer se tirer des balles dans le pied et pour le coup ça donne envie de réitérer le célèbre coup de boule de 2006. Et quand ces choix sont trop consensuels, j'ai envie d'appliquer double sentence. Mais avouons-le, parfois être pragmatique ou consensuel c'est un peu comme [le bon et le mauvais chasseur](http://www.youtube.com/watch?v=vH2GdDrJpKg).

Tiens, comme je viens de tomber sur [un billet qui me plait bien](http://gorban.org/post/32873465932/software-architecture-cheat-sheet), je vous propose de reprendre une des questions à se poser constamment que ce soit en conception ou en choix d'outil/framework/techno :

- Est-ce qu'il existe un autre moyen ?

Quelles auraient été les autres alternatives ? Pourquoi les ai-je écartés ? Et pour paraphrase l'article original :

> Nothing is more dangerous than an idea if it’s the only one you have.

Si vous êtes capable de répondre à cette question, vous vous approchez du but.
