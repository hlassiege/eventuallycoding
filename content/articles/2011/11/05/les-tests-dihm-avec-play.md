---
id: "466"
title: "Les tests d'IHM avec Play!"
description: "[![](/images/test.png \"test\")](http://eventuallycoding.com/wp-content/uploads/2011/11/test.png)

Vous avez une appli Play ? Vous avez déjà bien utilis..."
date: "2011-11-05"
categories: 
  - "waza"
tags: 
  - "play"
  - "selenium"
img: "test.png"
cover: "cover5.jpg"
---

[![](/images/test.png "test")](http://eventuallycoding.com/wp-content/uploads/2011/11/test.png)

Vous avez une appli Play ? Vous avez déjà bien utilisé les UnitTest mais votre couverture de code reste faiblarde ?  
C’est sur que malgré tout vos efforts pour que la couche controlleur soit la plus fine possible il reste quand même pas mal de code et on ne peut pas faire l’impasse dessus. Et on évitera aussi de rappeler que votre merveilleux plugin cobertura ne mesure pas la couverture de code HTML+JS testé...  
Vous auriez bien voulu utiliser les FunctionalTest mais les assertions d’un FunctionalTest ne vous permettent pas de vérifier grand chose en dehors d’un code retour 200. 
Bref, il va vous falloir passer au runner Selenium de Play.

Pour la suite, je pars du principe que vous avez déjà lu la doc sur les tests selenium dans Play.

- [http://www.playframework.org/documentation/1.2.3/guide10](http://www.playframework.org/documentation/1.2.3/guide10)
- [http://www.playframework.org/documentation/1.2.3/test#Seleniumtest](http://www.playframework.org/documentation/1.2.3/test#Seleniumtest)

La doc est pas mal mais il manque des petits trucs pour faire des tests dynamiques et réutilisables.

## Les tags Selenium

Déjà, premier frein pour écrire vos tests Selenium, il faut connaître la syntaxe Selenium.  
Heureusement, Manuel Bernhardt nous a fait un petit plugin pour Selenium IDE capable de générer nos tags pour les tests Play! : [http://manuelbernhardt.github.com/play-selenium-plugin/](http://manuelbernhardt.github.com/play-selenium-plugin/)

Pas de bol, c’est compatible jusqu’à la version 4 et j’ai la version 7 (merci au passage à Mozilla pour avoir accéléré le rythme de ces releases et flinguer tout mes plugins au passage...).

Si vous ne pouvez pas utiliser le copier coller de Selenium IDE, il vous reste à le faire à la main. SeleniumIDE propose quand même la complétion de code sur l’ensemble des mots clés et ce sont les mêmes mots clés qui sont reconnus dans Play! Framework.

Quelques petites règles à respecter malgré tout :

- pas d’espace entre la commande et les arguments tu mettras

assertTextPresent('OK') => OK
assertTextPresent ('OK') => KO (la commande sera ignorée)

- pas de ; tu utiliseras
- pas de “ tu utiliseras

assertTextPresent('OK') => OK
assertTextPresent(“OK”) => KO (la commande sera ignorée)

Evidemment j’ai eu la chance de tester toutes ces erreurs... Et au milieu de 20 commandes, savoir qu’une commande a été ignorée n’est pas évident au premier abord.

## L’extension Play pour Selenium

Bon en fait, le tag Selenium accepte d’autres mots clés qui sont définis comme user-extension de Selenium dans le module TestRunner de Play!

Donc vous pouvez aussi utiliser :

    clearSession()
    storeCacheEntry('myKey', 'stringCacheValue')
    storeLastReceivedEmailBy('boron@localhost', 'email')
    assertEquals
    assertNotEquals
    assertTextLike

Vous pouvez retrouver un exemple de ces tag dans samples-and-test/just-test-cases/test/SeleniumUserExtensions.test.hml dans les sources de Play!  

## Avoir des tests dynamiques

Dans les autres problèmes classiques que l’on rencontre quand on teste, c’est par exemple quand on veut cliquer sur un lien qui comprend l’id d’un élément. Or évidemment cet ID peut être différent d’un lancement à l’autre.  
Et bien pas de souci puisqu’on manipule un template groovy on peut appeler notre code Java :

%{ nemrodId= models.Project.find("byName","Nemrod").first().id;  }%

puis y faire référence comme suit :

clickAndWait('id=messages-${nemrodId}')

De la même façon, vous pouvez faire un assert sur un text présent mais il faut gérer le fait que vous gériez plusieurs langues :

%{ dashboardText = play.i18n.Messages.get("project.dashboard");  }%
…
assertTextPresent('${dashboardText}')

## Se créer sa librairie de test

L’un des inconvénients majeurs des tests selenium c’est qu’ils sont très sensibles au changement d’IHM. C’est d’autant plus accentué que certaines actions reviennent fréquemment, par exemple le login sur une appli et que repasser partout pour modifier le login devient vite fastidieux.

Donc une méthode classique c’est de regrouper des actions selenium (type, click etc...) sous forme plus compréhensibles :

login(myUser,myPwd)

Et avec Play! c’est possible en utilisant les tags.

Créons ici par exemple le template correspondant à l’action login sur une application.  
Je crée un fichier login.tag dans views/tags/testing/ avec le contenu suivant :

open('/')
type('username', '${\_user}')
type('password', '${\_password}')
click('signin')
waitForPageToLoad('30000')

Dans le test selenium, l’appel à ce tag se fait de la façon suivante :

#{selenium}
    clearSession()

    #{testing.login user:'myuser', password:'mypassword'/}
…
#{/selenium}

Voila, la séance est finie. Vous pouvez reprendre une activité normale
