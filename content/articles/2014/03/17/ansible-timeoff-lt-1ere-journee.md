---
id: "1051"
title: "Ansible (timeoff LT 1ère journée)"
description: "[![ansible](/images/5570d-ansible.png)](http://eventuallycoding.com/wp-content/uploads/2014/03/5570d-ansible.png)Nous y voici ! Le timeoff Lateral-Tho..."
date: "2014-03-17"
categories: 
  - "waza"
tags: 
  - "ansible"
  - "devops"
  - "fabric"
  - "timeoff"
img: "5570d-ansible.png"
cover: "cover4.jpg"
---

[![ansible](/images/5570d-ansible.png)](http://eventuallycoding.com/wp-content/uploads/2014/03/5570d-ansible.png)Nous y voici ! Le timeoff Lateral-Thoughts a démarré dans une super propriété a [Garrigues Sainte-Eulalie](https://www.airbnb.fr/rooms/911475?s=zcbV). Pour résumé, [le timeoff](http://www.eventuallycoding.com/index.php/on-devrait-toujours-travailler-comme-ca-bis/) c’est une semaine de code retreat avec l’ensemble de l’équipe dans un coin sympa pour veiller, coder, livrer des choses qui nous branchent.

Challenge, je vais tenter de faire un billet par jour sur la semaine si j’apprends quelque chose d’intéressant (c’est déjà mal barré, ce billet a trainé sur deux jours…).

Et aujourd’hui, on va parler d’Ansible, et pour la première fois sur ce blog, ce sera un billet écrit à quatre mains. Mon comparse pour ce billet sera [Jonathan Dray](https://github.com/spiroid) qui connaissait déjà un peu l'outil.

_Petit défi, trouvez qui a écrit chaque paragraphe._

Ansible, pour ceux qui ne connaissent pas, c’est un outil de provisionning de machine. Si on simplifie, cet outil permet de “scripter” le déploiement d’un ensemble de groupes de machine, chaque groupe devant contenir certains logiciels ou configurations.

Quand je parle de groupe de machines, c’est par exemple les serveurs de base de données et les serveurs applicatifs. Chaque groupe de machine attend des configurations différentes.

Resituons le problème que c’est censé résoudre.

Souvent lorsqu’une nouvelle machine arrive dans le parc, elle est configuré manuellement : installation du jdk, de python, d’une base de données etc… C’est évidemment source d’erreur et relativement long.

Parfois on utilise un master (un template) qui est une image type qui sera cloné sur une machine. Le souci principal concerne la maintenance de ces masters, et le nombre de masters nécessaires : poste de dev front, poste de dev back, poste de dev pour les deux, serveur de base de données etc…

Ensuite vient l’étape au dessus, les machines provisionnées de façon automatique.

Sur ce blog j’avais déjà parlé de [Fabric](http://www.eventuallycoding.com/index.php/fabric-moi-un-cluster/), outil python pour scripter un déploiement.

Avant cela, on aurait pu évoquer le simple shell script. Fabric permet une abstraction au dessus, le contrôle d’erreur, l’exécution parallèle, les tâches qui s’exécutent en fonction du type de machine (serveur base de données, serveur applicatif etc…).

Ansible s’inscrit dans la famille des outils qui propose de décrire un état de la machine et qui va faire en sorte lors de l’exécution que la machine soit conforme à cet état si ce n’était pas encore le cas.

## Ansible et Windows

Première mauvaise découverte, Ansible n’est pas vraiment fait pour tourner sous Windows. Il existe cependant [une possibilité décrite sur ce lien](https://servercheck.in/blog/running-ansible-within-windows).

Je souhaitais utiliser Vagrant pour créer des VM sur mon poste et utiliser le [provisionner Ansible](http://docs.vagrantup.com/v2/provisioning/ansible.html). Pour ceux qui ne connaissent pas Vagrant et des provisionneur, je vous invite à lire un ancien billet où j’avais utilisé [Vagrant et Fabric](http://www.eventuallycoding.com/index.php/fabric-vagrant/).

Malheureusement le mix Ansible/Vagrant ne semble vraiment pas fait pour tourner ensemble sous Windows.

Solution de secours après une heure de combat inégal entre l’homme et la machine :

- utiliser Vagrant pour créer une VM vierge
- utiliser Ansible sur la VM pour piloter le provisionning de la machine elle-même (puis une machine distante)

J’ai eu cependant une seconde mauvaise surprise, je comptais utiliser un répertoire partagé entre ma VM et Windows (mécanisme de shared folder avec Vagrant). Or j’ai pu constater que tout fichier dans un shared folder est en permission 777. Or cela pose des soucis à Ansible… Du coup j’ai du laisser tomber l’utilisation de répertoire partagé.

 

## L’arborescence d’un playbook

Un playbook (livre à jouer) contient la description de plusieurs composants (rôles) à installer, les configurations, les templates, les adresses de machine etc...

Voyons l’arborescence en détail :

vagrant@precise32:~/playbook$ tree
|-- ansible.cfg
|-- production
|-- roles
|   |-- common
|   |   |-- meta
|   |   \`-- tasks
|   |       \`-- main.yml
|   \`-- jira
|       |-- handlers
|       |   \`-- main.yml
|       |-- tasks
|       |   \`-- main.yml
|       |-- templates
|       |   |-- jira-application.properties
|       |   |-- jira.init.d.j2
|       |   \`-- response.varfile.j2
|       \`-- vars
|           \`-- main.yml
|-- site.yml
\`-- stage

- Le fichie ansible.cfg permet d’avoir une configuration globale à Ansible. Il a été utilisé ici pour référencer d’autres rôles que nous avons récupéré (mais non utilisé) à partir de Github :

\[defaults\]

roles\_path=/home/vagrant/workspace/the-ansibles/roles

- Les fichiers stage et production permettent de définir les machines utilisées dans chaque cas.
- Les rôles contiennent les définitions de chaque composant à installer.
- Le fichier site.yml décrit les rôles à lancer pour chaque type de machine. Par exemple ici, pour les machines de type adminservers (décrit dans les fichiers stage et production), les rôles à appliquer sont common et jira :

\---
- hosts: adminservers
 remote\_user: root
 sudo: true
 roles:
   - common
   - jira

 

## Au sein d’un rôle

Pour ma part, après une journée de lutte j’ai cependant réussi à créer deux “rôles” pour installer postgresql, un jdk7 et Jira sur une machine.

Dans un rôle, on peut trouver plusieurs répertoires :

- meta : qui peut décrire les dépendances d’un rôle, par exemple le rôle jira peut avoir comme prérequis le rôle jira.
    
- tasks : les tâches à effectuer pour installer un composant
    
- handlers : les actions qui peuvent être lancés par des actions effectuées dans des tâches. J’ai peu creusé ce point donc je n’insisterais pas.
    
- templates : les templates de configuration qui pourront être poussés sur le serveur par les tâches
    
- vars : les variables de configuration qui pourront être utilisés dans les templates ou les tâches
    

## Un fichier de tâche

Pour exécuter un rôle Ansible va lire le fichier main.yml présent dans le répertoire tasks. Voyons un fichier de ce type, ici un rôle pour installer postgresql :

\- apt: pkg=libpq-dev
- apt: pkg=python-dev
- apt: pkg=python-pip
- pip: name=psycopg2
- name: install postgresql
 shell: LANG=en\_US.UTF-8 LC\_COLLATE=en\_US.UTF-8 LC\_CTYPE=en\_US.UTF-8 LC\_MESSAGES=en\_US.UTF-8 LC\_MONETARY=en\_US.UTF-8 LC\_NUMERIC=en\_US.UTF-8 LC\_TIME=en\_US.UTF-8 LC\_ALL=en\_US.UTF-8  apt-get
install postgresql -y -q

- name: install postgresql-client
 apt: pkg=postgresql-client state=installed

- apt: pkg=openjdk-7-jre

- postgresql\_db: name=jira encoding='UTF-8' lc\_ctype='en\_US.UTF-8' lc\_collate='en\_US.UTF-8' template='template0'
 sudo\_user: postgres

- postgresql\_user: db=jira password=jira name=jira priv=ALL state=present
 sudo\_user: postgres

 

Chaque ligne commençant par un - correspond à l’appel d’un module. Dans ce fichier on utilise par exemple les modules suivants :

- apt pour les installations de package
- pip pour les installations de package python
- shell pour lancer des commandes directement, l’install par apt de postgresql ayant quelque souci
- postgresql\_db et postgresql\_user qui permettent de manipuler base et utilisateurs sur postgresql.

Sur la doc Ansible on retrouve une [liste de module](http://docs.ansible.com/list_of_all_modules.html) assez riche.

## Les plâtres essuyés

Ansible est une solution assez jeune et on a rencontré quelques problèmes lors de nos expérimentations.

La première difficulté venait du fait que l’on partait d’un serveur minimaliste et qui n’avait aucune librairie pré-installée.

Pas même python-apt (ouh la on part de loin !) qui est un pré-requis à l’exécution de l’installation des paquets avec Ansible sur des machines de type Debian-like.

Dans ce cas précis, un mécanisme de fallback installe python-apt, … en temps normal …

Après quelques heures d’investigations avec Olivier, et quelques verres de plus, le bug est trouvé, corrigé, et une [pull-request](https://github.com/ansible/ansible/pull/6518) ouverte sur le repository github de Ansible.

Cerise sur le gâteau, le code a été validé et mergé dans la journée qui a suivi, preuve que la communauté est bien réactive :)

 Deuxième blocage, un peu plus long à diagnostiquer et à contourner, la prise en compte de la langue et des locales.

Notre use case : installation et configuration d’une base de données Postgresql sous Debian 7 avec Ansible. Systématiquement, l’installation échoue et renvoie des warnings peu lisibles sur des dizaines de lignes.

Ce qui était d’autant plus frustrant car l’installation se passait sans accrocs s’il elle était lancée directement sur le serveur !

Plusieurs heures de debug en mode essai / erreur ainsi que de longs moments de recherche dans la documentation Ansible et dans les forums nous ont orienté sur les soucis de langue et de locale. Nos nerfs ont été mis à rude épreuve !

**Explication**: l’installation de Postgresql a besoin d’une langue pour initialiser un cluster par défaut.

D’un autre coté, pour éviter un certain de nombre de souci avec les locales et l’encodage, Ansible positionne les variables d’environnements LANG et LC\_\* à la variable standard “C”.

**Solution de contournement:**

Pour le moment on a modifié la task Ansible pour renseigner la locale et installer le package postgresql avec une commande shell. Ce hack n'est pas satisfaisant car on court circuite le module apt d’installation de paquet. Mais ça fonctionne...

 

## Avis après un jour et demi d’utilisation

Ok, c’est un peu court pour se faire un avis. Heureusement nous avons été bien guidé par Olivier et Jonathan pour avancer.

Pour ma part j’ai beaucoup plus galéré qu’avec Fabric, surtout car j’ai du bosser entièrement sur la VM avec vim et me passer de Sublime Text. Ce ne sont pas les conditions optimales pour moi :)

Malgré tout, j’ai désormais un playbook fonctionnel me permettant d’installer postgresql, java et jira. Ce playbook a pu être testé sur une VM puis ensuite sur une machine OVH.

Il y a peu de prérequis sur la machine cible, une clé SSH à configurer et Python. Ca reste léger.

Dans l’ensemble je sens que j’ai encore pas mal de boulot pour faire un playbook dans les rêgles de l’art, utiliser les dépendances proprement, les templates etc.. Mais la doc semble assez complète et l’outil semble assez prometteur.

Je compte bien le réutiliser pour des besoins plus lourd assez prochainement.
