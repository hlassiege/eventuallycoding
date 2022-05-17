---
id: "924"
title: "Vagrant et Fabric : prise en main"
description: "[![vagrant](/images/c143b-vagrant.png)](http://eventuallycoding.com/wp-content/uploads/2013/08/c143b-vagrant.png)Petit jeu, est-ce que vous vous retro..."
date: "2013-08-21"
categories: 
  - "waza"
tags: 
  - "devops"
  - "fabric"
  - "vagrant"
img: "c143b-vagrant.png"
cover: "cover2.jpg"
---

[![vagrant](/images/c143b-vagrant.png)](http://eventuallycoding.com/wp-content/uploads/2013/08/c143b-vagrant.png)Petit jeu, est-ce que vous vous retrouvez dans les différentes situations ci-dessous :

1) Vous avez un environnement assez complexe à reproduire pour chaque poste de dev, un serveur de bases de données, une lib particulière, une configuration système etc…

Vous avez tout tenté :

- un manuel d’accueil de 3 pages avec toutes les procédures d’install, mais dont l’une des étapes c’est d’aller chercher Gégé bureau 451 car “il y a que lui qui sait ce qu’il faut faire à cette étape” (Vous vous rappelez de notre fameux [pompier pyromane](http://www.eventuallycoding.com/index.php/etes-vous-pompier-pyromane/ "Etes-vous pompier pyromane ?") ?).
    
- des échanges de fichier via USB ou NFS. Mais au fil du temps il y a des tas de versions dans différents répertoire et plus personne sait ce que c’est. A part Gégé qui a la bonne version sur son PC.
    

2) Vos équipes ont toutes des postes Windows car les outils bureautiques imposé par votre société tourne dessus : Outlook, Office etc… Sauf que pour le développement vous avez besoin d’utiliser une plateforme Unix. Au début vous avez même testé tous les plugins FTP pour Eclipse, SublimeText, Intellij...

 

Tiens, voici Gégé d'ailleurs...

[![gege](/images/f3985-gege.gif)](http://eventuallycoding.com/wp-content/uploads/2013/08/f3985-gege.gif)

Et puis un jour, vous avez découvert l’utilité des machines virtuelles. Vous avez passé du temps à configurer une VM, vous avez installé tout ce qu’il fallait et vous l’avez diffusé.

Sauf que le temps a passé, les versions de certains outils ont évolué et chacun a effectué ces mises à jour dans son coin. La version de votre distribution aussi a changé et un beau jour la VM d’origine a tellement divergé qu’il a fallu mettre en place des procédures de mise à jour de vos VMs....

Et si on reprenait nos habitudes de dev, qu’on versionnait notre environnement, qu’on le scriptait, voire même qu’on le testait avant diffusion ? Peut-être avez vous déjà entendu parler de traiter votre [infrastructure comme du code](http://architects.dzone.com/articles/infrastructure-code) ?

Dans ce cas, ce billet vous intéressera puisque nous allons parler de création de VM et de provisionning, le tout de façon automatisé et reproductible avec Vagrant.

Si vous avez lu le [dernier billet sur Fabric](http://www.eventuallycoding.com/index.php/fabric-moi-un-cluster/ "Fabric moi un cluster"), celui-ci poursuit dans la lignée. Cette fois-ci je vous propose d’utiliser [Vagrant](http://www.vagrantup.com/) pour créer une VM, et Fabric pour la configurer et installer les softs qu’il vous faut.

## Principe

Pour résumer, Vagrant est un outil vous permettant de créer des machines virtuelles prêtes à l’emploi pour vos besoins, le tout avec un simple fichier de configuration. Ce sera donc ce fichier que nous versionnerons pour le partager dans l’équipe.

Vagrant repose sur des “fournisseurs (providers)” : [Virtual Box](https://www.virtualbox.org/), VMWare, AWS par défaut. Et vous pouvez ajouter des plugins pour gérer d’autres providers, [KVM par exemple](https://github.com/adrahon/vagrant-kvm).

Dans ce billet, nous utiliserons VirtualBox 4.2.16 (attention à bien prendre une version à jour !).

Pour “l’alimentation (provisionning)”, Vagrant repose sur des briques connues : Chef, Puppet, Ansible et du simple Shell. Là encore, en passant par des plugins on peut en rajouter et nous utiliserons justement [le plugin Fabric](https://gist.github.com/SirScott/5707611).

## Installation

Rien d’exotique, Vagrant a des packages pour les différents OS :

- [http://downloads.vagrantup.com/](http://downloads.vagrantup.com/)

Mais pour notre cas nous allons ajouter deux choses supplémentaires :

Fabric  : que nous installerons avec

pip install Fabric

La petite subtilité si vous utilisez Windows c’est qu’il faut installer pycrypto manuellement pour que Fabric fonctionne. Vous trouverez le package ici [http://www.voidspace.org.uk/python/modules.shtml#pycrypto](http://www.voidspace.org.uk/python/modules.shtml#pycrypto)

Et le plugin vagrant Fabric :

vagrant plugin install vagrant-fabric

Ensuite il vous suffirait d’aller dans un répertoire vierge et de taper :

$ vagrant init precise32 http://files.vagrantup.com/precise32.box
$ vagrant up
$ vagrant ssh

Ces commandes vous permettraient d’initialiser une VM Ubuntu Precise 32bits, de la démarrer et de vous y connecter en SSH.

Mais allons plus loin.

## Le fichier Vagrantfile

Le fichier Vagrantfile a été créé lorsque vous avez fait vagrant init precise32.

Ce fichier contient la configuration de votre VM. Ce fichier va vous permettre entre autre :

- de faire suivre des ports entre votre machine et la VM
    
- de partager des répertoires entre les deux machines
    
- de configurer le réseau de votre VM
    
- de provisionner la VM
    

 

## La configuration réseau

Par défaut votre machine virtuelle est accessible en ssh via le port 2222. Vagrant a effectué un reroutage du port 2222 de votre machine vers le port 22 de votre VM.

Cette technique peut s’avérer suffisante dans bien des cas. Si vous avez juste besoin d’un routage de ce type pour voir un apache et un elasticsearch installé sur la VM, il vous suffit d’écrire ceci :

config.vm.network :forwarded\_port, guest: 80, host: 8080
config.vm.network :forwarded\_port, guest: 9200, host: 9200

Dans d’autres cas, si par exemple vous voulez utiliser plusieurs VMs et qu’elles soient toutes disponibles sur un réseau privé au sein de votre machine, alors vous allez plutôt configurer des IPs pour chaque machines :

config.vm.network :private\_network, ip: "192.168.50.4"

## Le partage de répertoire

Partagez un répertoire entre votre VM et la machine hôte peut avoir plusieurs intérêt :

- éviter que chaque nouvelle VM télécharge les mêmes choses et conserve un cache commun, par exemple celui d’APT
    
- Partagez votre répertoire de développement, vous permettant ainsi que développer sous votre IDE préféré sur votre machine tout en ayant tous les fichiers partagés sur la VM.
    

Pour cela, vous allez déclarer des sync folder :

config.vm.synced\_folder 'C:Usershugovagrantaptcache', "/var/cache/apt/archives"
config.vm.synced\_folder 'D:Devsrcsample', "/vagrant/src"

 

## Le provisionning

Le provisionning va consister lors de la création de la VM à effectuer la configuration de la machine :

- configuration système
    
- installation de softs
    

Ici nous allons utiliser Fabric comme suit :

 

config.vm.provision :fabric do |fab|
  fab.tasks = \["java es\_install"\]
end

 

Nous avons juste déclaré deux tâches à appeler, et ces tâches sont déclarées dans un fichier fabfile.py présent au même niveau que votre fichier Vagrantfile.

Ce fichier fabfile est appelé par Vagrant pour la machine qui vient d’être monté installant dans notre exemple Java et elasticsearch.

## Et en équipe ?

Voilà, nous avons fait un tour rapide. Grâce à Vagrant nous avons pu rapidement monter une VM sur notre machine avec un elasticsearch fonctionnel. Vous pouvez désormais partager ces fichiers de configuration pour votre équipe afin que chacun utilise le même environnement de travail. En cas de modif, changement d’OS, changement de configuration système etc… vous n’avez qu’à reprendre les fichiers Vagrantfile et Fabfile, travailler en local pour les mettre à jour et publier vos modifs.

Rien ne vous empêche aussi de tester la création de vos VM en appelant des scripts de vérification de la machine virtuelle créé, par exemple un script qui teste qu’il y a bien un elasticsearch qui répond sur un port donné de votre nouvelle VM. Et tout ceci, vous pouvez l’automatiser si ce processus de création de VM est vraiment critique pour vous.

Ensuite dans votre équipe, chacun peut réappliquer les modifs de provisionning :

vagrant provision

ou bien réinitialiser complètement la VM :

vagrant reload

ou encore la refaire de zéro :

vagrant destroy

vagrant up

 

Et si vous voulez jouer avec les versions complètes de ces fichiers, vous retrouverez l’ensemble du code sous Github : [https://github.com/hlassiege/fabric-vagrant](https://github.com/hlassiege/fabric-vagrant)
