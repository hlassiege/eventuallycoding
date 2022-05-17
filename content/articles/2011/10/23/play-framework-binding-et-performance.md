---
id: "461"
title: "Play framework, binding et performance"
description: "Après avoir bataillé un bon moment avec les performances sur la page d’importation de Nemrod je me suis dit que ce serait intéressant de partager ce q..."
date: "2011-10-23"
categories: 
  - "waza"
tags: 
  - "performance"
  - "play"
img: ""
cover: "cover1.jpg"
---

Après avoir bataillé un bon moment avec les performances sur la page d’importation de Nemrod je me suis dit que ce serait intéressant de partager ce que j’ai appris sur le binding de Play. Bref, je vous propose ce petit sujet autour du binding dans Play framework et une optimisation qui m’a sauvé la vie. Resituons le contexte tout d’abord. Si vous utilisez [Play framework](http://www.playframework.org/), vous avez peut être déjà utilisé [des bindings avec des collections d’éléments](http://www.playframework.org/documentation/1.2.3/controllers#array) dans un de vos contrôleur.

Ce type de binding est excessivement utile dans la majorité des cas. Prenons par exemple le bout de template suivant :

    #{list items:results, as:'result' }
       
       
       
       
    #{/list}

Ceci va vous créer dans votre page html une suite d’élément html comme suit :

          
        
        
        
               …..........

Pour traiter ensuite ce résultat dans votre contrôleur, il ne vous reste plus qu’à déclarer :

public static void process(Listresults)

ImportBean étant un simple objet ayant 4 propriété : filename, module, modulepath et localeId

Autrement dit, Play framework a fait le binding pour vous entre les données de votre formulaire et une collection d’objets.

**C’est vrai, c’est super puissant et c’est la méthode conseillée dans la majorité des cas.**

De mon côté j’ai rencontré un cas où la taille de ma collection était de plus de 400 éléments et cela s’est avéré catastrophique.

Prenons la méthode d’un contrôleur comme suit :

    public static void process(Listresults)     {
     
          for (ImportBean importBean : results)
          {
              await(doSomething());
          }

           render();

    }

Le temps nécessaire pour effectuer le traitement durait plus de **2h** ! J’ai évidemment soupçonné le temps de traitement dans doSomething mais après avoir mis en place quelques éléments pour mesurer les temps d'exécution, je n’ai rien trouvé de concluant dans la méthode doSomething. Par contre, j’ai remarqué qu’à chaque tour de boucle la récupération d’un élément de results prenait un temps fou. L’entrée même dans la méthode process dépassait les 10 secondes.

J’ai donc soupçonné le binding effectué par Play. Même si j’avoue ne pas avoir compris pourquoi je perdais du temps à chaque itération (du lazy loading pour le binding peut être ?) Pour valider cette théorie, j’ai modifié le code de la façon suivante :

J’ai remplacé

    #{list items:results, as:'result' }
       
       
       
       
    #{/list}

par

resultJson étant une chaîne représentant ma collection au format json.

Côté contrôleur, je récupère donc une chaîne de caractère et non plus une collection. Cette chaine est désérialisé puis utilisé dans le même traitement que précédemment.

public static void process(String resultJson)
{
       GsonBuilder builder = new GsonBuilder();
       Type collectionType = new TypeToken<List>(){}.getType();
       Listresults = builder.create().fromJson(resultJson, collectionType);

       for (ImportBean importBean : results)
       {
           await(doSomething());
       }

       render();
}

Résultat des courses, le traitement qui s’effectuait auparavant en environ 2h s’effectue désormais en moins de deux minutes !

Bref, heureusement que j’ai posé les sondes aux bons endroits avant d’entamer des optimisations dans doSomething, ce qui ne m’aurait rien apporté au final.

Voila, en espérant que ça vous serve peut être.
