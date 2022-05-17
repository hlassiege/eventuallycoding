---
id: "286"
title: "Java Vs C# : Eviter les conflits de nom dans les interfaces"
description: "[![](/images/javac1.png \"javac\")](http://eventuallycoding.com/wp-content/uploads/2011/05/javac1.png) **Warning, warning,** ceci n'est pas une rubrique..."
date: "2011-03-29"
categories: 
  - "waza"
tags: 
  - "csharp"
  - "java"
img: "javac1.png"
cover: "cover7.jpg"
---

[![](/images/javac1.png "javac")](http://eventuallycoding.com/wp-content/uploads/2011/05/javac1.png) **Warning, warning,** ceci n'est pas une rubrique à troll !!

Bien qu'étant plutot spécialiste Java, je me suis mis récemment au C#. Loin des débats qui n'en finissent plus pour savoir lequel des deux p... le plus loin, je tenais à faire une petite rubrique pour lister "les trucs qui tuent" qui existent dans chaque langage et que tout bon développeur aime connaitre.

Et donc le truc qui tue du jour :

### Eviter les conflits de nom dans les interfaces en C#

En java vous avez sans doute déjà eu affaire à des interfaces dont les noms rentrent en conflit, non ?

Dans le cas contraire, je vous propose un petit exemple :

public interface IInterface1
{
    void execute();
}

public interface IInterface2
{
    void execute();
}

public class MyClass implements IInterface1, IInterface2
{
      public void execute()
	  {
	     //  ?? 	  
	  }
}

Rageant n'est-ce pas ? Vous tentez de respecter un contrat identique défini par deux interfaces.

Et en C# ?

C# propose une solution intéressante à ce problème.

public interface IInterface1
{
    void Execute();
}

public interface IInterface2
{
    void Execute();
}

public class MyClass : IInterface1, IInterface2
{
	void IInterface1.Execute()
	{
         Console.WriteLine("Execute de IInterface1");
	}

    void IInterface2.Execute()
	{
         Console.WriteLine("Execute de IInterface2");
    }
}

On remarquera que les méthodes sont privées. Elles ne peuvent être appelées qu'à partir de l'interface. Ce qui est beaucoup plus propre.
