---
title: "Ah qu'il est bon de rire parfois ! (29 janvier 2012)"
date: "2012-01-29"
categories: 
  - "waza"
img: "nuls.png"
---

![](/images/nuls.png "nuls")Ca faisait des années que je pensais faire une section "best of moumouth", allez c'est le moment, je me lance. Donc le principe de la série "Ah qu'il est bon de rire parfois !" va être de montrer des morceaux de code collectors, des trucs tellement énormes qu'on dit : "non, c'est pas possible". Et pourtant si, c'est possible, je les ai vus. Et contrairement à David Vincent j'ai des preuves.

Pour éviter de heurter la sensibilité d'ex collègues, le code est légèrement retouché pour qu'il ne soit pas "trop" reconnaissable.

Si vous avez des enfants près de vous, merci de les éloigner de l'écran. Ca pique un peu.

C'est parti !

Pour démarrer cette session, je vous propose plein de petits chefs d'oeuvre issu de la même méthode, un bon gros monstre de 800 lignes.

On démarre par le gentillet. J'aime bien celle là. A priori le codeur a du croire que lever une exception était la seule façon d'émettre un log.

           if(list.size() == 0)
           {
                MyException e = new MyException("no files in waiting ");
                LOG.warn(e.getMessage());
            }

Next ! On reste dans le soft. J'ai un peu simplifié le texte histoire de mettre en évidence le côté rocambolesque de la chose. Quizz rapide, à quoi sert le continue qui s'est glissé dans le code suivant ?

                    do
                    {
                        try
                        {
                            doSomething();
                            reste = reste - taille;

                        } catch (MyServiceException e)
                        {
                            doSomethingElse();
                            reste = 0;
                            continue;
                        }
                    } while (reste > 0);

Toujours pas trop méchant, le commentaire bien attentionné

             // je traite fichier par fichier et pas en multi-thread, pour garder la main

C’est vrai, les threads, c’est à manipuler avec précaution si on veut garder ces mains... En même temps ca m'a fait rigoler mais vu le reste du code, j'étais bien content que l'auteur ait choisi d'éviter de s'aventurer dans du parralélisme.

Et pour finir, les deux dernières qui élèvent le tout d'un cran. Attention, pour la première il faut se concentrer un peu (j'ai rajouté des commentaires histoire de simplifier la lecture) :

            // je récupère une liste de "trucàfaire"
            List list = abstractLoadService.filesToBeTreated(nextSchedule, true);

            List allElements = new ArrayList();
            // je copie les ids de ces "trucàfaire" dans une liste
            for(Journal b : list) {
                allElements.add(b.getId());
            }

            // je parcoure la liste de ces ids
            for(Long bid : allElements) {
                // Et la, truc et astuce de la mort qui tue je vais rechercher le "trucàfaire" en base à partir de son ID !!!
                // ca aurait été trop simple d'utiliser celui déjà disponible plus haut
                Journal Journal = LoadDAOManager.getJournal(bid);
                ...
            }

And the last one, que je résume rapidement : "on m'a appris qu'il fallait toujours mettre un bloc finally pour libérer mes ressources. Bon mais j'en ai pas, du coup je fais rien. Mais quand même, dans le doute où ca se passerait mal je vérifie que ca lève pas une exception. Et dans ce cas précis, ben je fais rien non plus !"

        finally
        {
            try
            {
            } catch (Exception e)
            {
            }
        }
