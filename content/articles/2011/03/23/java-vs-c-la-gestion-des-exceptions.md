---
id: "143"
title: "Java Vs C# : La gestion des exceptions"
description: "[![](/images/javac1.png \"javac\")](http://eventuallycoding.com/wp-content/uploads/2011/05/javac1.png) **Warning, warning,** ceci n'est pas une rubrique..."
date: "2011-03-23"
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

### La gestion des exceptions en C# et Java

A première vue, rien qui semble différencier la gestion des exceptions en C# et Java. La syntaxe est quasi identique :

try
{
 ...
}
catch (NullPointerException e)
{
 ...
 throw e;
}
 finally
 {
 ...
 }

et

try
{
 ...
}
 catch (NullReferenceException)
{
 ...
 throw ;
}
finally
{
 ...
}

Non seulement la syntaxe est très proche mais les Exceptions forment une hiérarchie héritant à chaque fois d'une classe mère dans chacun des deux langages.

Cependant cette hiérarchie connait une différence importante en Java :

- Chaque Exception dérive de Throwable
- Throwable a 2 types dérivées : Error et Exception
- Les exceptions sont partagées en "**checked exception**" et "**unchecked exception**"

Autrement dit, il existe des exceptions qu'il ne faut pas attraper (les Error : OutOfMemoryError, NoClassDeFoundError etc...), des exceptions qu'on n'est pas obligé d'attraper (les unchecked) et des exceptions qu'il faut obligatoirement traiter si elles sont lancées (les checked).

Et pour préciser les exceptions qu'un code peut lancer, une méthode doit déclarer ces exceptions dans sa signature :

 

public void method() throws Exception1, Exception1
{
 // ...
}

Cette différence très importante va permettre au compilateur de vérifier la cohérence du code. L'appel d'une méthode entrainera obligatoirement le traitement des exceptions déclarées en signature.

Ainsi les codes suivants seront valides :

private void anotherMethod()
{
    try
    {
       method();
    }
    catch (Exception1 e1)
    {
    }
    catch (Exception2 e2)
    {
    }
}

// si on ne les attrape pas, il faut au moins les relancer et le déclarer
private void anotherMethod() throws Exception1, Exception1
{
    method();
}

Par contre le code suivant ne compilera pas :

private void anotherMethod()
{
 try
 {
     method();
 }
 catch (Exception1 e1)
 {
 }   
 // Erreur : on n'attrape pas l'exception Exception2
}
 

private void anotherMethod()
{
 try
 {
 method();
 }
 catch (Exception1 e1)
 {
 }   
 catch (Exception2 e2)
 {
 }
 // Erreur : cette checked exception n'est pas lancé et ce bloc de code est donc innateignable
 catch (Exception3 e3)
 {
 }
}

Autre truc qui tue, en Java7 la syntaxe va évoluer pour permettre le multi catch des exceptions, très pratique quand on réalise les mêmes traitements pour chaque exception attrapée :

catch (Exception1|Exception2 ex)
{
 logger.log(ex);
 throw ex;
}
