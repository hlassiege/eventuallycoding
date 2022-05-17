---
id: "148"
title: "Java Vs C# : Les Property en C#"
description: "[![](/images/javac1.png \"javac\")](http://eventuallycoding.com/wp-content/uploads/2011/05/javac1.png) **Warning, warning,** ceci n'est pas une rubrique..."
date: "2011-03-18"
categories: 
  - "waza"
tags: 
  - "csharp"
  - "java"
img: "javac1.png"
cover: "cover3.jpg"
---

[![](/images/javac1.png "javac")](http://eventuallycoding.com/wp-content/uploads/2011/05/javac1.png) **Warning, warning,** ceci n'est pas une rubrique à troll !!

Bien qu'étant plutot spécialiste Java, je me suis mis récemment au C#. Loin des débats qui n'en finissent plus pour savoir lequel des deux p... le plus loin, je tenais à faire une petite rubrique pour lister "les trucs qui tuent" qui existent dans chaque langage et que tout bon développeur aime connaitre.

Et donc le truc qui tue du jour :

### Les Property en C#

En C# comme en Java on respecte le principe d'encapsulation sur les attributs des classes. C'est à dire que les attributs sont déclarées private et ensuite on définit des getters et setters pour y accéder :

 

private int maVariable;

public void setMaVariable (int maVariable)
{
    this.maVariable = maVariable;
}
pubic int getMaVariable ()
{
    return maVariable;
}

Seul inconvénient, il est plus verbeux d'écrire ceci

maClasse.setMaVariable (maClasse.getMaVariable()+1)

que directement

maClasse.maVariable++;

En C# existe la notion de Property qui permet d'éviter l'utilisation de getter et setter :

public double Hours
{
    get
   {
        return seconds / 3600;
   }
   set
   {
       seconds = value \* 3600;
   }
}

Ce qui permet d'écrire :

maClasse.Hours = maClasse.Hours + 1;

et qui reviendra à :

maClasse.setSeconds (maClasse.getSeconds() + 1);

Et depuis la version 3.0, on peut même utiliser des la notion de Property auto-implémenté lorsque les getters et setters ne font rien de spécial :

public int ID { get; set; }

Et en Java ?

A priori rien de prévu pour imiter cette syntaxe en Java pour l'instant. Cependant certains frameworks utilisent l'instrumentation de code pour reproduire le même comportement. Avec Play! la syntaxe est même allégé par rapport aux Property de C# :

public int maVariable;
...
monObjet.maVariable = monObjet.maVariable+1;

Les getters et setters sont automatiquement générés par Play. Si cependant un getter ou un setter a été défini, il sera utilisé à la place des accesseurs générés par Play!.
