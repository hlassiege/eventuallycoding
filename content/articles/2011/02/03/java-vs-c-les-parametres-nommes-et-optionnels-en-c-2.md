---
id: "147"
title: "Java Vs C# : Les paramètres nommés et optionnels en C#"
description: "[![](/images/javac1.png \"javac\")](http://eventuallycoding.com/wp-content/uploads/2011/05/javac1.png) **Warning, warning,** ceci n'est pas une rubrique..."
date: "2011-02-03"
categories: 
  - "waza"
tags: 
  - "csharp"
  - "java"
img: "javac1.png"
cover: "cover2.jpg"
---

[![](/images/javac1.png "javac")](http://eventuallycoding.com/wp-content/uploads/2011/05/javac1.png) **Warning, warning,** ceci n'est pas une rubrique à troll !!

Bien qu'étant plutot spécialiste Java, je me suis mis récemment au C#. Loin des débats qui n'en finissent plus pour savoir lequel des deux p... le plus loin, je tenais à faire une petite rubrique pour lister "les trucs qui tuent" qui existent dans chaque langage et que tout bon développeur aime connaitre.

Et donc le truc qui tue du jour :

### Les paramètres nommés optionnels en C#

C# 4.0 a introduit un concept très sympathique, déjà connu pour ceux qui pratique le python et plutôt évident pour les adeptes de jQuery, les paramètres nommés et optionnels.

Les paramètres nommés existent déjà depuis la version 1.0 du framework, ils permettent notamment d'écrire ceci :

public void MaMethode(string Arg1, string Arg2)
{
    // ...
}
...

myObject.MaMethode(Arg1:"un argument", Arg2:"un autre argument");

Ok, jusqu'ici, rien de transcendant. C'est verbeux même si ca permet de lever quelques ambiguïtés parfois.

Par contre avec la version 4.0, désormais vous pouvez aussi utiliser des valeurs par défaut et des paramètres optionnels et là ça devient puissant :

public void MaMethode(string Arg1="une valeur", string Arg2="une autre valeur")
{
    // ...
}

ce qui permet de faire les appels suivants :

myObject.MaMethode();
myObject.MaMethode(Arg1:"une valeur différente");
myObject.MaMethode(Arg2:"une valeur différente",Arg1:"dans un autre ordre");

Et en Java ? Rien de prévu de ce côté là malheureusement, aucune des deux prochaines version 7 et 8 n'abordent ce cas. On pourra se consoler avec le chainage des méthodes proposé [ici](http://gfx.developpez.com/tutoriel/java/constructeur-fabrique/) et  qui peut éventuellement fonctionner pour des constructeurs mais qui sont loin d'être aussi puissant.
