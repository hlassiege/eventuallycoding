---
id: "324"
title: "Java Vs C# : Les types valeurs en C#"
description: "[![](/images/javac1.png \"javac\")](http://eventuallycoding.com/wp-content/uploads/2011/05/javac1.png)

**Warning, warning,** ceci n'est pas une rubriqu..."
date: "2011-05-01"
categories: 
  - "waza"
tags: 
  - "csharp"
  - "java"
img: "javac1.png"
cover: "cover4.jpg"
---

[![](/images/javac1.png "javac")](http://eventuallycoding.com/wp-content/uploads/2011/05/javac1.png)

**Warning, warning,** ceci n'est pas une rubrique à troll !!

Bien qu'étant plutot spécialiste Java, je me suis mis récemment au C#. Loin des débats qui n'en finissent plus pour savoir lequel des deux p... le plus loin, je tenais à faire une petite rubrique pour lister "les trucs qui tuent" qui existent dans chaque langage et que tout bon développeur aime connaitre.

Et donc le truc qui tue du jour :

### Les types valeurs en C#

Bon en fait il ne s'agit pas vraiment d'un truc qui tue, juste une petite clarification entre le type valeur de C# et le type natif en Java.

On dit souvent que Java n'est pas vraiment un langage objet car tout n'est pas objet. En effet il existe des types dits "natifs", ce sont les fameux int, long, float, boolean et char (pour la liste complète : [voir la doc](http://download.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)).

Ces types ne se manipulent pas comme les autres :

- pas d'allocation mémoire avec new, un type natif est créé directement sur le tas
- pas de méthode disponible sur un type natif
- on les manipule par valeur et non par référence

En C#, ces types natifs ont été remplacés par des types valeurs. Ce sont en fait des structures (mot clé **struct**) et non des classes. Parmi les différences avec les classes :

- ils n'ont pas besoin d'être déclarés avec new (même si c'est possible)
- quelque soit la façon de créer une variable elle sera alloué sur le tas et non la pile
- ils sont manipulés par valeur (l'attribution d'une variable de type valeur à une autre copie la valeur contenue)

(Pour plus de détails, [voir la doc](http://download.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html))

En fait, pour bien comprendre ces types valeurs sont tous des alias vers des types intégrés au framework, par exemple **int** alias de **System.Int32**. Et donc il y a des méthodes disponibles sur ces types valeurs ce qui permet d'écrire :

int i = 1;
Console.WriteLine(i.ToString()); // ici l'intérêt est minime, c'est uniquement pour l'exemple

ou bien

int i = int.Parse("1");

Dans ces conditions, on peut effectivement dire que C# est un peu plus objet que Java.
