---
id: "1080"
title: "PAAS or not PAAS, that is the question"
description: "[![paas](/images/e3efe-paas.png)](http://eventuallycoding.com/wp-content/uploads/2014/05/e3efe-paas.png)Jusqu’à récemment HopWork tournait sur un PAAS..."
date: "2014-05-09"
categories: 
  - "waza"
tags: 
  - "devops"
  - "paas"
img: "e3efe-paas.png"
cover: "cover7.jpg"
---

[![paas](/images/e3efe-paas.png)](http://eventuallycoding.com/wp-content/uploads/2014/05/e3efe-paas.png)Jusqu’à récemment HopWork tournait sur un PAAS, mais ça va changer. Pour les quelques uns qui ont dormi ces dernières années, un PAAS c’est l’acronyme de Platform as a service. En très gros c’est un cadre de travail pour délivrer rapidement votre code en production avec tout un ensemble de services préinstallés, gérés pour vous et qui s’associent simplement avec votre applicatif.

Pour simplifier très fort, c’est ce qui permet au développeur de faire un simple : “git push _provider_ master” pour que magiquement votre dernière version sur git se retrouve en prod.

Remplacez ici “provider” par [Cloudbees](http://www.cloudbees.com/), [Heroku](http://www.heroku.com), [Clever-Cloud](https://www.clever-cloud.com/fr/), [Google App Engine](https://appengine.google.com/) etc...

Au tout début d’un projet comme [HopWork](http://www.hopwork.com/), le choix d’un PAAS se fait naturellement. Tout ceux qui ont un projet en tête, qui souhaitent le prototyper rapidement et le montrer, le PAAS est votre ami. Vous ne vous concentrez que sur votre code et quelques paramétrages relativement légers sur votre PAAS. En plus, bien souvent, pour de petites utilisations un PAAS va se révéler très peu coûteux, voire même gratuit.

Pour notre part, nous avions choisi Heroku. Heroku propose un système de worker et pour un seul worker vous ne payez pas.

Par contre un PAAS s’accompagne de quelques contraintes qu’il faut apprendre à respecter. Par exemple chez Heroku :

- les disques sont volatiles
- votre appli doit être rapide à booter
- l’environnement d’execution est contraint (512Mo de ram pour un worker Heroku)
- avec un seul worker sur Heroku, si pas d’activité, votre appli est mise en hibernation (donc elle doit être rapide à redémarrer par la suite)

Au dessus de votre PAAS vous allez rapidement faire appel à des SAAS (Software as a service). Sur HopWork nous avons utilisé ou utilisons encore :

- [MongoHq](http://www.mongohq.com/) puis [Mongolab](https://mongolab.com/welcome/) (mongodb as a service)
- [Cloudinary](http://cloudinary.com/) (gestion des images)
- [Searchbox](http://www.searchly.com/) devenu Searchly (elasticsearch as a service)
- [Mailgun](https://mailgun.com/) puis [Mandrill](https://mandrillapp.com/) (envoi de mail transactionnel)
- [Twilio](http://www.twilio.com/) (envoi de SMS)
- [Mangopay](http://www.mangopay.com/) (paiement)
- [Zendesk](http://fr.zendesk.com/) (pour le support)
- [Livechat](http://www.livechatinc.com/) (pour le support)
- [Logentries](https://logentries.com/) (analyse et conservation des logs)
- [monitorus](http://www.monitor.us/)/[pingdom](https://www.pingdom.com/)/[new relic](http://newrelic.com/) (monitoring)
- [Localizeyourapps](http://www.localizeyourapps.com/) (pour la localisation)

(pour localizeyourapps, ne cherchez pas, c’est moi qui le développais, c’est plus ou moins mort pour l’instant)

Pour ces quelques services, nous en avons évalué d’autres et continuons à en évaluer régulièrement ([CloudAmqp](http://www.cloudamqp.com/), [Fasterize](http://www.fasterize.com/fr) et [Cloudflare](http://www.cloudflare.com/) sont dans les tuyaux par exemple).

Là encore, pour des utilisations légères, ces services proposent souvent des plans gratuits qui vont être utilisables pendant longtemps.

_Alors pourquoi changer ?_

Pour être honnête, c’est un choix difficile de changer et de revenir sur un serveur dédié pour une partie des services. Quelle plus-value ? Quelle moins-value ?

## Les coûts ?

Selon moi un produit connaît plusieurs phases.

Au tout début d’un produit, vous faites tout avec des bouts de ficelles car vous avez zéro budget. De plus vous voulez montrer très vite ce que vous faites. Le PAAS est l’idéal pour cela et vous permet d’être concentré sur votre appli et rien d’autre. (Au diable la sécurité ! :))

Ensuite si vous avez de la chance, votre soft rencontre un peu de succès, vous avez des sous mais vous devez passer sur des plans tarifaires supérieurs pour certains services que vous utilisez. Vous êtes dans la période où vous devez perpétuellement jongler entre la surveillance des coûts et la rapidité d’exécution. Soyons clair, on doit toujours jongler avec ça, mais dans cette période d’autant plus.

Pour illustrer, voici les coûts mensuels des services avec notre traffic actuel :

- Heroku 1 worker de 1024Mo : 35$
- Heroku : certificat SSL : 20$
- Cloudinary : 30$
- Mandrill/Mailchimp : 35$
- Twilio : cout fixe par SMS
- Mangopay : % par transaction

A cela s’ajoute des coûts qui vont ou pourraient arriver :

- Nous sommes à la limite de devoir passer sur un plan payant pour MongoLab : 15$
- Si nous étions restés chez Searchbox : 9$
- Nous sommes en fin de période “promo” chez Zendesk, le cout passe ensuite à 25$ + 29$ par “agent support”.
- Pour bien faire il faudrait 2 worker Heroku : 70$
- Logentries si on veut garder les logs plus longtemps ce sera 19$

Mais **on ne peut pas comparer** SAAS et “fait maison” en parlant que des coûts :

- Mangopay c’est du paiement et nous n’avons pas vocation à en faire nous-mêmes
- Mandrill, Twilio, Cloudinary, Zendesk proposent des services à forte valeur ajoutée et nous perdrions beaucoup de temps à le refaire
- A l’inverse certains produits même sur des plans supérieurs ne proposent pas exactement les fonctionnalités que l’on souhaiterait (comme Logentries)
- De toute façon je ne vous ai pas encore parlé des coûts du “fait maison” :)

Pour être clair nous allons continuer à utiliser du SAAS pour des services à forte valeur ajoutée car cela n’aurait pas de sens de les refaire de notre côté. Cela reste dans l’optique d’une architecture micro-service telle que nous la concevons sur HopWork (Certains SAAS continueront cependant à être évalués régulièrement face à leurs concurrents). Ce qui est remis en cause c’est uniquement un subset de tout ces services :

- mongo
- elasticsearch
- logentries (et encore celui-ci se discute)
- Rabbitmq
- et le PAAS : Heroku

En fait vous remarquerez que j’ai fait le distinguo entre les SAAS à forte valeur ajoutée, et les SAAS qui proposent de l’infra.

Pour ceux la, sur HopWork il nous semble que c’est justement le moment où les coûts restent maîtrisables mais nous commencons à les sentir et on note voyez que les plans tarifaires encore au dessus vont être vraiment plus chers (entre 89 et 200$ mensuel en entrée de gamme selon ce qu’on cherche chez mongolab).

De toute façon sur les plans de base, c’est souvent labellisé **“sandbox” ou “developpement”** avec tout ce que ca implique donc nous avons fortement intérêt à upgrader et là [ca peut faire très mal](https://mongolab.com/plans/pricing/#dedicated-cluster-plans).

Au delà de ça, avoir son elasticsearch et sa base mongo accessible sur le net, même protégé par un login/password, ca reste moyen. Nous en avons eu récemment l’expérience avec Heartbleed, tout les providers sans exception nous ont demandé de changer les credentials et clés d’API utilisés sur leurs services.

Pire, il y a quelques mois, seul Searchbox proposait un elastisearch as a service sécurisé.

 

## La scalabilité ?

Une promesse de ces services, c’est la scalabilité et l’élasticité. Ici par exemple le slogan d’Heroku :

> Build, run, and scale apps.
> 
> Cloud computing designed and built for developers.

 

Sauf que “scaler” n’est pas une de vos priorités immédiate. Construire des clusters de mongodb avec du sharding ou gérer un traffic de 10000 visiteurs/minutes ce sera dans longtemps. Enfin pas trop, je vous le souhaite, mais pas immédiatement.

HopWork c’est 4000 inscrits, un peu moins de 1000 visites/jour (ca augmente chaque mois). C’est très honorable mais ca représente pas tant que ça pour une machine bien dimensionnée et bien utilisée. Pour l’instant la priorité c’est les fonctionnalités, pas la tenue en charge.

Par contre cette fameuse “scalabilité”, quand vous avez une appli simple vous la payez alors que vous n’en profitez pas.

Déjà vous avez une application distribuée, c’est cool mais contrairement à ce que certains croient, [c’est pas le paradis](http://en.wikipedia.org/wiki/Fallacies_of_Distributed_Computing) (le réseau n’est pas fiable, la bande passante n’est pas illimitée, etc…)

Parmi les fausses croyances du distribuée, on pense que les latences sont négligeables [mais elles existent bel et bien](http://www.addsimplicity.com/adding_simplicity_an_engi/2007/02/latency_exists_.html).

Par exemple entre un Heroku sur zone US et un Heroku sur zone EU vous avez une latence qui varie entre 200 et 300ms. Entre une appli hébergé sur Amazon EU (Irelande) et une base Mongo hébergé en France (OVH), vous avez une latence qui varie entre 50 et 150ms.

 

## Nos choix

Si je résume, en fait nous sommes en cours de migration de certains services pour les raisons suivantes :

- le coût (pour ce qui concerne le PAAS, les bases de données, files de messages)
- la sécurité
- des besoins actuels simples en terme de scalabilité
- des besoins de meilleure performance (des latences moins élevés)

Comme je le disais plus haut, le choix de repasser sur du dédié sur certains services fut difficile. Nous nous sommes donc posé deux contraintes simples :

- il doit être possible de refaire le chemin inverse facilement
- la simplicité de mise en prod doit être maintenue

Ce qui implique des choix assez évidents :

- ne toujours pas reposer sur le disque, faire comme s’il était volatile
- le serveur lui-même est considéré comme volatile, il peut à tout moment crasher. Il doit donc pouvoir être remonté rapidement et automatiquement
- avoir une appli qui boote très rapidement
- ne pas bouffer des ressources comme des malades :)
- conserver un workflow simple de déploiement, idéalement basé sur git
- garder un découplage maximal entre les différents composants de l’architecture

Factuellement, pour héberger tout cela, nous avons pris un serveur OVH Soyoustart 32Gb de ram, disque SSD, 8 coeurs pour 40euros/mois. En terme de ressources et en simplifiant grossièrement cela représente 64 workers Heroku (évidemment c’est exagéré, une appli a une empreinte sur la machine qui ne se résume pas à sa heap).

Pour l’installation des composants, nous utilisons [Ansible](http://www.ansible.com/).

Pour le déploiement applicatif, le choix n’est pas encore posé, c’est l’étape qui reste à faire. Il existe plusieurs pistes : [git-deliver](https://github.com/arnoo/git-deliver/), [git-deploy](https://github.com/mislav/git-deploy) ou tout simplement du [Fabric](http://www.fabfile.org/) ou du Ansible piloté par Jenkins.

D’ailleurs si vous avez des suggestions ou des retours je suis preneur.

 

Ok, dans cette configuration certains vont me dire qu’il reste de le souci de la disponibilité. Sauf que par expérience nous avons eu plusieurs “incidents” depuis qu’HopWork existe, que ce soit des indispos et crash de elasticsearch, des indispos Mongolab, Heroku ou carrément amazon, ce qui dans ce cas flingue tout le reste.

En centralisant sur un serveur, nous ne sommes dépendants que de ce serveur et nous gagnons sur les latences entre composants. Ok, il peut crasher, d’où le fait de tout automatiser pour rapidement remonter un autre serveur.

 

Certains pourraient poser la question “mais quitte à gérer votre plateforme, pourquoi pas du IAAS avec [Amazon EC2](https://aws.amazon.com/fr/ec2/) ou [Google Cloud](https://cloud.google.com/products/compute-engine/) ?”.

D’autres encore pourraient demander “mais pourquoi pas Cloudwat ou Numergy”, et là ce serait une grosse tranche de rire. Mais passons...

Concernant EC2 déjà, j’avoue que je trouve leur grille de prix n’est pas simple pour s’y retrouver. Vous avez des instances à la demandes, des instances réservées pour utilisation modérées ou intensives, des instances ponctuelles, vous avez des tarifs pour transferts de données (?! WTF), des instances optimisées pour EBS (?!). En fait, rien que [la page de pricing simplifiée](https://aws.amazon.com/fr/ec2/pricing/) est d’une longueur infinie. Et [leur calculette](http://calculator.s3.amazonaws.com/index.html) fait pas rêver non plus. En essayant vaguement de jouer avec la calculette pour une instance médium avec disque SSD et 3Gb de ram j’arrive tout de même à 56$/mois et je n’ai rien rempli dans les parties Data Transfert ou ElasticIP.

Bref, c’est obscur et pas si rentable si on compare à la machine que j’ai décrit plus haut pour le même prix.

Google Compute Engine [a une grille de tarif](https://cloud.google.com/products/compute-engine/#pricing) à peine aussi claire. Cette fois on ne sait même pas quelle disque est disponible mais on retombe grosso modo sur le même prix que ci-dessus pour 3Gb de ram. Encore une fois, toutes les options du bas de page laisse penser que dès qu’on veut du disque ou une IP ca coute encore plus cher.

Dans les deux cas il s’agit de VM. Pour ma part j’ai des expériences pas très heureuses en ce qui concerne les performances IO et la virtualisation donc déjà sur le principe je ne suis pas emballé.

Bref, je ne demande qu’à être convaincu par quelqu’un ayant déjà utilisé (et je ne parle pas d’avoir juste jouer a spawner une instance).

 

Voilà, vous savez tout. Nous ne savons pas avec certitude s’il s’agit du meilleur choix mais nous avons fait en sorte de pouvoir changer d’avis par la suite. Dans les prochains billets je reparlais peut-être d’Ansible ou de quelques outils mis en place pour notre infra.

A bientôt
