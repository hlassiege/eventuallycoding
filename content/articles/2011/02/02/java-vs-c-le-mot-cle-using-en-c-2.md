---
id: "146"
title: "Java Vs C# : le mot clé using en C#"
description: "[![](/images/javac1.png \"javac\")](http://eventuallycoding.com/wp-content/uploads/2011/05/javac1.png) **Warning, warning,** ceci n'est pas une rubrique..."
date: "2011-02-02"
categories: 
  - "waza"
tags: 
  - "csharp"
  - "java"
img: "javac1.png"
cover: "cover1.jpg"
---

[![](/images/javac1.png "javac")](http://eventuallycoding.com/wp-content/uploads/2011/05/javac1.png) **Warning, warning,** ceci n'est pas une rubrique à troll !!

Bien qu'étant plutot spécialiste Java, je me suis mis récemment au C#. Loin des débats qui n'en finissent plus pour savoir lequel des deux p... le plus loin, je tenais à faire une petite rubrique pour lister "les trucs qui tuent" qui existent dans chaque langage et que tout bon développeur aime connaitre.

Et donc le truc qui tue du jour :

### le mot clé using en C#

Je ne vous l'apprends pas (enfin j'espère) en Java et en C#, on a l'habitude d'utiliser des blocs finally pour fermer les ressources proprement en cas d'exception.

Par exemple :

InputStream   input = null;
try
{
    input = new FileInputStream(fileName);
    //...process input stream...
}catch (IOException e)
{
    // do something
}
finally
{
    if(input != null)
    {
       try
       {
           input.close();
       }
       catch(IOException e)
       {
       }
   }
}

Verbeux n'est ce pas ?

En C# le truc qui tue ? Pas besoin de bloc finally, la fermeture des ressources peut être faite automatiquement avec la syntaxe suivante :

using (System.IO.StreamReader sr = new System.IO.StreamReader(@"C:UsersPublicDocumentstest.txt"))
{  �
 string s = null;  �
 while((s = sr.ReadLine()) != null)  �
 {      �
 Console.WriteLine(s);  �
 }
}

Le mot clé using permet de désigner les ressources à fermer à la fin du bloc. Ces ressources implémentent l'interface IDisposable.

Mais un peu d'espoir quand même pour les javaistes, [la fonctionnalité est prévue pour JDK7](http://blog.developpez.com/adiguba/p9231/java/try-with-resources/#more9231) avec les blocs ARM :

public void copy(String sourceFile, String destFile) throws IOException
{
	try (InputStream input = new FileInputStream(sourceFile); OutputStream output = new FileOutputStream(destFile) )
	{
		byte\[\] buf = new byte\[8192\];
		int len;
		while ( (len=input.read(buf)) >= 0 )
		{
			output.write(buf, 0, len);
		}
	}
}

En plus j'apprécie qu'ils aient réutilisé le mot clé try pour les gérer, ca porte moins à confusion que using en C# qui est déjà utilisé pour les imports.
