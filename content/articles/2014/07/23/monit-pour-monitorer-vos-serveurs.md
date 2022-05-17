---
id: "1102"
title: "Monit - pour monitorer vos serveurs"
description: "Aujourd’hui je tenais à vous présenter [Monit](http://mmonit.com/monit/), un bel outil permettant de monitorer vos serveurs et vos process. Le site in..."
date: "2014-07-23"
categories: 
  - "waza"
tags: 
  - "devops"
  - "monit"
img: "e76bc-cloudinary.png"
cover: "cover3.jpg"
---

Aujourd’hui je tenais à vous présenter [Monit](http://mmonit.com/monit/), un bel outil permettant de monitorer vos serveurs et vos process. Le site indique : “up and running in 15 minutes” et vous allez voir qu’il tient ces promesses.

Avant d’aller plus loin, rappelons un peu ce qu’on entend par monitoring car il peut y avoir confusion entre les termes.

Pour faire simple, le monitoring c’est l’ensemble des actions permettant de suivre une infrastructure.

Le monitoring lui-même est constitué de deux activités :

- la supervision, qui consiste à superviser des états et alerter en cas de problème
- la métrologie qui consiste à historiser les mesures effectués par la supervision en vue de vous permettre de diagnostiquer “après coup” et de faire du capacity planning.

(\* le capacity planning étant l’activité permettant de dimensionner et de calculer les coûts de son infrastructure)

 

Sur un PAAS, vous n’êtes pas dispensé de faire du monitoring. Vous pouvez déjà utiliser des outils pour faire du monitoring “externe” comme [Pingdom](https://www.pingdom.com/), [Monitorus](http://www.monitor.us/en/website-monitoring), [NewRelic](http://newrelic.com/) vous permettant de savoir si vos applis répondent (status 200) d’une part, et dans un temps correct d’autre part. Ces services sont mêmes capables de vous établir ces données par zone géographiques. Ce monitoring surveille la boîte noire que constitue votre appli.

Si vous souhaitez un monitoring moins “boîte noire”, vous avez la possibilité d’utiliser des sondes. New Relic vous propose cela sous forme d’agent Java par exemple. Parfois ces sondes peuvent être fournis par le PAAS/SAAS en question.

Sur un PAAS/SAAS toujours, le capacity planning reste important car les plans de facturation sont en général liés à la consommation d’une ressource donc il est plutôt conseillé de bien suivre l’évolution de cette consommation.

Heureusement certains services vous fournissent ces données, par exemple ici sur [Cloudinary](https://cloudinary.com) :

[![cloudinary](/images/e76bc-cloudinary.png)](http://eventuallycoding.com/wp-content/uploads/2014/07/e76bc-cloudinary.png)

Sur Hopwork nous avons une grosse partie de nos outils sur nos propres serveurs depuis quelques temps. Et l’installation de ces serveurs est entièrement automatisé avec [Ansible](http://www.ansible.com/home).

Je ne suis pas spécialiste des outils de supervision. Mais l’un de mes critères de base pour en choisir un était justement que je puisse simplement automatiser son installation. Et c’est ce qui a porté le choix vers Monit. Monit à l’inverse de la plupart des outils connus (Zabbix, Nagios) repose sur uniquement sur une configuration très simple par fichier. Sans doute également qu’il est moins puissant, mais vu nos besoins, ça nous suffit pour l’instant. Et vous allez voir que ce qu’il fournit est déjà très bien.

 

Installons donc Monit :

apt-get install monit

Et c’est tout ? Non, pour bien faire on va quand même rajouter deux trois choses.

Déjà on va configurer l’interface web de Monit en modifiant le fichier /etc/monit/webinterface

set httpd port 2812 and
   use address localhost
   allow user:password

user:password correspondant à votre couple de credentials.

Cette interface plutôt pratique vous donne accès à quelques infos de base : liste des process surveillés, leurs états, leurs consommations de ressources etc..

Ici par exemple sur une machine d’Hopwork :

[![monit](/images/1ee46-monit.png)](http://eventuallycoding.com/wp-content/uploads/2014/07/1ee46-monit.png)

Vous avez également la possibilité de redémarrer un process à partir de l’interface mais pour ma part j’évite, je garde cette option dans des cas très exceptionnel.

A noter : Pour éviter d’ouvrir le port 2182 sur votre machine, n’hésitez pas à configurer un virtual host Nginx ou Apache pour ouvrir ce service via votre frontal web préféré.

Toujours dans la configuration de base, voyons maintenant le fichier /etc/monit/conf.d/mail

set eventqueue
  basedir /var/lib/monit/events
  slots 1000

SET MAILSERVER smtp.truc.org port 587 username "username" password "pwd"
  with TIMEOUT 30 SECONDS

 

Monit est capable de vous informer lorsqu’un problème survient. Pour cela, il est possible de lui préciser un serveur smtp externe. De plus nous déclarons une queue d’évènement juste au dessus pour stocker les évènements en cas d’indisponibilité du serveur SMTP.

L’installation à proprement parler est faite.

Regardons comment monitorer un processus en particulier.

Par défaut, le plus simple c’est de monitorer un fichier pid. Regardons un exemple avec Nginx :

check process nginx with pidfile /var/run/nginx.pid
   start program = "/etc/init.d/nginx start"
   stop program  = "/etc/init.d/nginx stop"
   if totalcpu > 80% for 3 cycles then alert
   if totalmem > 400.0 MB for 5 cycles then alert
   if children > 250 then alert
   if loadavg(5min) > 20 for 8 cycles then alert

Les premières lignes servent à indiquer comment arrêter ou démarrer le programme. Les suivantes à définir des seuils d’alertes. Par exemple si le process prend plus de 80% de CPU sur 3 cycles, alors on envoie une alerte.

Pour un process Java construit avec SpringBoot, aucun souci, [le fichier pid est bien créé au démarrage](http://www.eventuallycoding.com/index.php/spring-boot-dans-le-doute-reboote/).

Quand ce n’est pas le cas, vous pouvez aussi demander à Monit de rechercher un pattern dans les process existants :

check process JamesBond matching "007"
   start program = "/opt/JamesBond/starter.sh"
   stop program = "/opt/JamesBond/stopper.sh"

Ces fonctionnalités peuvent faire penser à [supervisord](http://supervisord.org/) qui est justement un superviseur de process.

Mais Monit va un peu plus loin car il permet de superviser également des ressources comme par exemple l’espace disque :

check filesystem rootfs with path /
       if space usage > 90% then alert

Une url de vie (ici celle d'elasticsearch):

check host elasticsearch\_connection with address 0.0.0.0
 if failed url http://0.0.0.0:9200/ with timeout 15 seconds then alert  
check host elasticsearch\_cluster\_health with address 0.0.0.0
 if failed url http://0.0.0.0:9200/\_cluster/health   
   and content == 'green'
   with timeout 60 seconds
 then alert

Imaginez que toutes les urls de vie [dont nous avons parlé avec Spring Boot dans le précédent billet](http://www.eventuallycoding.com/index.php/spring-boot-dans-le-doute-reboote/) sont ainsi directement exploitables via Monit !

Et vous pouvez aussi surveiller les permissions d’un fichier, la présence d’un fichier, son contenu, le fait qu’il ait été altéré, le cpu, la température machine etc…

Tout cela via des fichiers de config déposés dans /etc/monit.

Pour conclure, avec Monit vous avez donc un processus très léger capable de superviser votre machine, vous avertir par mail suivant des règles personalisables et vous présenter les données d’une machine via une interface web.

Sympa ?

> One more thing

Ici nous n’avons abordé que la partie supervision et qui plus est, d’une seule machine. Mais il existe un autre produit au dessus de Monit s’appelant [M/Monit](http://mmonit.com/) qui va combler ces derniers manques. Ce produit à l’inverse de Monit est lui, payant.

M/Monit, propose plusieurs fonctionnalités :

- l’aggrégation des infos provenant de toutes les machines sur un seul tableau de bord
- de la métrologie (!) pour avoir une vision “historique” de votre supervision.

Je vous laisser regarder [les screenshots](http://mmonit.com/screenshots/).

 

Cette fois c’est bon. Vous pouvez retourner à une activité normale.
