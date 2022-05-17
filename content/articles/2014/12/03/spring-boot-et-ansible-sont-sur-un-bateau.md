---
id: "1119"
title: "Spring-boot et Ansible sont sur un bateau"
description: "Il y a quelques jours je faisais un retweet [d'un article](http://blog.adaofeliz.com/2014/11/21/first-look-spring-boot-and-docker/ \"first-look-spring-..."
date: "2014-12-03"
categories: 
  - "waza"
tags: 
  - "ansible"
  - "devops"
  - "ops"
  - "spring-boot"
img: "61698-deploy.jpg"
cover: "cover3.jpg"
---

Il y a quelques jours je faisais un retweet [d'un article](http://blog.adaofeliz.com/2014/11/21/first-look-spring-boot-and-docker/ "first-look-spring-boot-and-docker") sur lequel j'étais tombé d'une personne ayant automatisé son déploiement d'une application [spring-boot](http://projects.spring.io/spring-boot/ "Spring Boot") sur un conteneur [Docker](https://www.docker.com/ "Docker").

Sur [HopWork](https://www.hopwork.com/ "Hopwork") nous avons une approche qui peut ressembler sauf que nous n'utilisons pas Docker et que nous provisionnons avec Ansible. Oui, donc ça ressemble de loin, dans le noir et par temps brumeux me direz-vous ? Voyons en détail.

Lorsque nous sommes passés [d'un PAAS (Heroku) à nos propres serveurs](http://www.eventuallycoding.com/index.php/paas-or-not-paas-that-is-the-question/ "PAAS or not PAAS, that is the question"), nous avions un point important, il était hors de question de complexifier le déploiement.

Pour rappel, sur [Heroku](http://www.heroku.com "Heroku"), un simple "_git push heroku master_" suffit. "Hors de Git, point de salut" comme dirait l'autre. J'avais jeté un oeil sur deux solutions semblables à l'époque :

- Git-deliver : https://github.com/arnoo/git-deliver/
- Git-deploy : https://github.com/mislav/git-deploy

git-deliver est très intéressant sur le principe. C'est un projet jeune et celui qui le maintient semble impliqué et très pro. Il nécessite l'installation d'un script deliver.sh (qui marchera sous windows avec git bash) et l'apprentissage de ces nouvelles commandes. En soi c'est un petit défaut car il faut apprendre à chaque nouvel arrivant ces commandes. Mais ça reste simple. Là ou j'étais plus mitigé, c'était sur le fait d'utiliser des scripts shells en tant que hook et d'utiliser rsync pour du déploiement multi hôte ([comme suggéré ici](https://github.com/arnoo/git-deliver/issues/62)). Finalement je trouvais qu'il y avait trop de plomberie à faire moi-même. Et je suis feignant. Enfin disons que j'essaie d'éviter de faire ce que d'autres ont déjà fait.

git-deploy se veut plus simple mais nous allons voir que c'est aussi parce qu'il fait moins de choses. #Troll Déjà il part avec un gros point négatif, il faut installer une gem Ruby #/Troll. Par contre à la différence du premier, nul besoin de l'installer sur tous les postes. Il se déclenche par des hooks git sur un simple git push.

Et puis vient le drame quand tu comprends que l'ensemble des scripts exécutes par les hooks sont fait pour une appli RoR (Ruby on Rails pour ceux qui se la jouent un peu c'est RoR, vous pouvez me remercier, vous brillerez en société ce soir). Je suppose qu'il doit être envisageable de modifier l'outil pour mettre ces propres scripts de hooks mais je n'ai pas été plus loin. Cependant plusieurs points m'ont intéressé :

- le fait d'avoir les scripts de déploiement dans le même repo git que les sources applicatives
- l'utilisation de git push (sans passer par une nouvelle commande)

NPTL (Note pour toi lecteur) : si je n'ai pas utilisé ces solutions, ce n'est pas qu'elles n'étaient pas bonnes. N'hésites pas à les essayer car il est possible que pour ton cas d'usage elles conviennent très bien. Dans le même temps, nous avions déjà utilisé [Ansible](http://www.ansible.com/home "Ansible") pour l'installation de nos composants sur les serveurs (rabbitmq, elasticsearch, mongo, monit etc...). Alors pourquoi pas l'utiliser pour le déploiement des applicatifs. Et comme l'auteur du blog que je cite en haut de cet article, je trouve qu'il est très simple de déployer une application Spring-Boot. J'en avais déjà parlé dans [ce billet](http://www.eventuallycoding.com/index.php/spring-boot-dans-le-doute-reboote/ "Spring Boot : dans le doute reboote")  . Pour résumer, Spring-boot permet de créer un simple jar exécutable, exploitable, monitorable etc... Ansible/Spring-Boot, ça se précise.

Comment nous procédons en quelques étapes :

### Ajout d'un répertoire .deploy à la racine du projet

[![deploy](/images/61698-deploy.jpg)](http://eventuallycoding.com/wp-content/uploads/2014/12/61698-deploy.jpg)

Ce répertoire contient un script ansible et les fichiers dont il a besoin :

- deploy.yml : le script ansible
- starter.sh/stopper.sh : les scripts d'arrêt/relance qui seront appelés par monit
- analytics.monit : la conf monit qui indique comment surveiller cette application
- integration/production : les fichiers permettant de décrire l'inventaire des machines

J'aime bien cette approche car cela me permet d'utiliser tout ce que sait bien faire ansible sans avoir à le code moi-même. Voici ce que ca peut donner pour une de nos applications :

\[gist id="ac20ada7400c1d7dda31" file="analytics.yml" width="100%"\]

Ansible est très souple : Si jamais je dois ajouter des règles iptables, il me suffit d'ajouter ces étapes :

\[gist id="ac20ada7400c1d7dda31" file="iptables.yml" width="100%"\]

Si jamais cette application doit être servi par un frontal nginx :

\[gist id="ac20ada7400c1d7dda31" file="nginx.yml" width="100%"\]

### Configuration de jenkins pour jouer ces étapes sur un push git

Pour que Jenkins déclenche le déploiement, nous le faisons surveiller le repo git mais uniquement sur une branche. Ici par exemple integ. Il execute un build standard avec maven pour vérifier que tout se passe bien mais il exécute une étape de plus en post steps en exécutant une commande shell :

echo "Deploiement en cours"
ansible-playbook -vvvv -i .deploy/${ENV\_NAME} .deploy/deploy.yml

Inutile de dire que ansible est installé sur la machine où se trouve jenkins et que la configuration ssh nécessaire a été faite pour la communication entre cette machine est la/les machine(s) à déployer.

Comme il se peut que votre application nécessite des prérequis (comme par exemple un nginx, monit etc...) j'ai un Trigger jenkins qui déclenche l'exécution d'un playbook Ansible et bloque le build s'il ne passe pas correctement. Pour nous, cela déploie notamment la conf applicative. And that's all. En développement il suffit donc de faire : **_git push origin master:integ_** pour envoyer nos devs en cours de master vers la branche integ et déclencher le build. Evidemment tout est tracé sur git et jenkins. Au final, nous sommes content de cette solution et elle fonctionne bien désormais. Mais elle pourrait être amélioré :

- Ajouter une application (micro services pour faire hype) nécessite de faire pas mal de conf jenkins pour le déploiement sur les machines d'intégration et de production, configuration faite aujourd'hui à la main.
- Nous avons une sorte de petit hack pour alimenter un fichier version.yml par l'utilisation de filtre maven qui permet de passer le numéro de version à ansible afin de trouver le nom du jar à déployer. Ca pollue le script de build maven et on peut facilement l'oublier.
- Dans nos étapes de déploiement, on coupe complètement monit alors que je souhaiterais juste désactiver le monitoring de l'appli en question. On doit pouvoir faire mieux.
- Je serais plus à l'aise d'avoir l'inventaire des machines regroupé en un seul endroit plutot que le dupliquer et le mettre dans les sources (les fichiers integration/production)

 

Vous pouvez retourner à une activité normale.

Mais je vous laisse un petit jeu. Pouvez-vous retrouver le jeu de mot très pourri qui s'est glissé dans ce billet ?
