---
title: "Ah qu'il est bon de rire parfois, le retour de la vengeance"
date: "2012-05-06"
categories: 
  - "waza"
tags: 
  - "humour"
img: "follehistoire.png"
---

[![](/images/follehistoire.png "follehistoire")](http://eventuallycoding.com/wp-content/uploads/2012/05/follehistoire.png)Le [premier épisode de cette série](http://hakanai.free.fr/index.php/ah-quil-est-bon-de-rire-parfois-29-janvier-2012/ "Ah qu’il est bon de rire parfois ! (29 janvier 2012)") dédié aux formes de code extraterrestres avait plutôt bien plu en approchant les 300 visualisations, score relativement honorable sur un blog comme celui-ci. C'est donc l'occasion de remettre le couvert en se plongeant à nouveau à la découverte de nouveaux astéroides non identifiés. Et pour reprendre un certain Buzz l'éclair, "vers l'infini et au delà !".

Petit rappel avant de commencer, ici il s'agit de se détendre pas de faire un procès à qui que ce soit. Je ne prétends pas être au dessus de toute critique. Second degré recommandé.

## Le retour du jeudi après midi

Commencons par ce petit bout de code qui sent la fin de semaine :

		final Thread statusThread = new Thread(new Runnable() {
            @Override
            public void run() {
                boolean done = true;
                // une boucle infinie ? Et non plutot l'inverse, on passe jamais dedans.
                while(!done) {
                    try {
                        Thread.sleep(5000);
                        LOG.info("something very important");
                    } catch(Exception e) {
                        LOG.error("quiting stat thread", e);
                        done = true;
                    }
                }
            }
        });
        statusThread.start();

Au passage merci Sonar pour m'avoir permis de mettre le doigt dessus en suspectant une boucle infinie. En fait ce n'est pas une boucle infinie, c'est un thread qui ne sert à rien. Oui oui, lisez attentivement...

Sur le second, il faut un oeil aguerri, un bon café et peu de concentration sinon on risque de passer à côté :

f.setX(a.getB().getC() ==null?a.getB().getC():a.getB().getC() );

Vous avez de la chance, j'ai remplacé les noms de variables pour que ca saute un peu plus aux yeux.

## Le pire contre attaque

Celle la est plutot mignonne. On sent que le programmeur vient d'apprendre l'api reflection. Par contre derrière on le sent relativement hésitant sur son efficacité.

// de l'intérêt d'avoir une méthode qui prend Class en paramètre pour toujours renvoyer le même type d'objet
private A createA(Class clz) throws Exception {
      A a = (A) clz.newInstance();
      ...
	  // evidemment quand on appelle une méthode dessus, on s'assure bien que l'objet a pas changé de nature, des fois que...
       if (a instanceof A) {
            ((A) a).setSomething("something"));
      }
      return a;
}

## De nouveaux déboires

 

[![](/images/what2.jpg "what2")](http://eventuallycoding.com/wp-content/uploads/2012/05/what2.jpg)

Et pour finir sur une note d'espoir, cette fois-ci nous allons voir un test unitaire. Super, on a des tests ! Par contre on va continuer à faire compliqué :

    @Test
    public void testSomething() {
        boolean catched = false;
        try {
	   ...
	   } catch(Exception e) {
              LOG.error("### Unable to do something ", e);
             catched = true;
        }
        Assert.assertFalse(catched);
    }
