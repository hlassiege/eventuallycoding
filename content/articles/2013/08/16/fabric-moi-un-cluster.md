---
id: "904"
title: "Fabric moi un cluster"
description: "[![python](/images/b9590-python.jpeg)](http://eventuallycoding.com/wp-content/uploads/2013/08/b9590-python.jpeg)Je vous propose dans ce billet de pren..."
date: "2013-08-16"
categories: 
  - "waza"
tags: 
  - "devops"
  - "fabric"
  - "python"
img: "b9590-python.jpeg"
cover: "cover2.jpg"
---

[![python](/images/b9590-python.jpeg)](http://eventuallycoding.com/wp-content/uploads/2013/08/b9590-python.jpeg)Je vous propose dans ce billet de prendre en main [Fabric](http://docs.fabfile.org/en/1.7/), un outil que j’ai utilisé récemment et qui vous permettra de scripter des déploiements sur plusieurs machines assez simplement.

Pour résumer, Fabric est une lib Python qui vous permet d’automatiser des executions de commandes via ssh sur des serveurs distants.

En sus, Fabric permet de créer une topologie de votre application : quels sont les machines “web”, les machines “bases de données” etc...

Grâce à ces infos, Fabric permet ensuite exécuter des scripts par famille de nœud. Par exemple installer la dernière version de votre Webapp sur tous les nœuds “web”.

Peut-être que si vous connaissiez déjà [Rundeck](http://rundeck.org/) tout ceci vous rappelle quelque chose puisqu’il répond a peu près à la même problématique.

Python Fabric est plus simple d’utilisation, vous ne retrouverez pas l’application Web qui permettait de gérer votre topologie et vous ne retrouverez pas les hooks qui permettaient de déclencher des actions. Mais vous allez voir qu’on y perd pas au change.

Pourquoi Fabric et pas simplement faire du script Shell ? Nous le verrons dans la suite du billet.

Et pour illustrer ce billet par un exemple de la vraie vie, vous trouverez à la fin de ce billet les sources pour installer un Cluster de 3 noeuds pour elasticsearch, MongoDB et Cassandra qui devraient fonctionner sous Debian.

## Installation

pip install fabric

Oui, super complexe...

 

## Mon premier script

(issu de la doc)

Dans un fichier nommé fabfile.py, écrire les lignes suivantes :

from fabric.api import \*

@task
def host\_type():
    run('uname -s')

Rien d’extraordinaire pour l’instant, nous allons juste executer cette commande sur des machines distantes.

$ fab -H localhost,linuxbox host\_type
\[localhost\] run: uname -s
\[localhost\] out: Darwin
\[linuxbox\] run: uname -s
\[linuxbox\] out: Linux
Done. 
Disconnecting from localhost... done. 
Disconnecting from linuxbox... done.

La même chose avec un script shell :

for machine in localhost linuxbox ; do ssh user@$machine "uname -s"; done

Premier réflexe une fois qu’on connaît l’équivalent en shell, pourquoi pas du shell uniquement ? Voici mes raisons :

- je préfère coder en Python (la raison la plus subjective :))
    
- je ne réinvente pas la roue, les appels ssh, le parallélisme, la gestion des erreurs, les familles de noeuds, tout est déjà codé
    

Voyons cela en détail.

## Le parralélisme

Changeons désormais notre méthode pour la remplacer par

@task
@parallel
def host\_type():
    run(‘uname -s’)

Et lors de l’execution :

$ fab -H localhost,linuxbox host\_type
\[localhost\] Executing task ‘host\_type’
\[linuxbox\] Executing task ‘host\_type’
\[linuxbox\] run: uname -s
\[localhost run: uname -s
\[linuxbox\] out: Linux
\[linuxbox\] out:
\[localhost\] out: Darwin
\[localhost\] out:

Comme son nom l’indique, notre décorateur nous a permis de lancer notre commande en parallèle sur les hôtes passés en paramètre.

## Maintenir une topologie de nœuds

Comme je le disais en intro Fabric permet de gérer des topologies applicatives.

Par exemple, nous allons définir 3 type de rôles :

env.roledefs = {
‘test’: \['localhost'\],
‘database’: \['root@xx.xx.xx.10', 'root@xx.xx.xx.11', 'root@xx.xx.xx.12'\],
‘web’: \['root@xx.xx.xx.1', 'root@xx.xx.xx.2', 'root@xx.xx.xx.3'\]
}

Et nous allons définir une tâche pour installer java uniquement sur les machines Web :

@task
@parallel
@roles(‘web’)
def java():
    run(‘apt-get install openjdk-7-jdk –assume-yes’)

En tapant cette commande : fab java

Fabric va lancer l’install de Java uniquement sur les machines de type “web”

## La gestion des erreurs

En réalité lorsque vous lancez une commande, il ne s’agit pas uniquement de lancer votre commande et basta. Vous espérez aussi que cela s’est bien passé. Fabric va vérifier cela pour vous en regardant le code retour de chaque opération. Exemple ici :

@task
@roles(‘web’)
@parallel
def something\_wrong():
    run(‘rm /tmp/unknown\_file’)

Et l’execution

$ fab something\_wrong
\[root@linuxbox\] Executing task ‘something\_wrong’
\[root@linuxbox\] run: rm /tmp/unknown\_file
\[root@linuxbox\] out: rm: impossible de supprimer « /tmp/unknown\_file »: Aucun fichier ou dossier de ce type
\[root@linuxbox\] out:
Fatal error: run() received nonzero return code 1 while executing!
Requested: rm /tmp/unknown\_file
Executed: /bin/bash -l -c « rm /tmp/unknown\_file »
Aborting.

Fatal error: One or more hosts failed while executing task ‘something\_wrong’
Aborting.

Evidemment parfois on s’attend à une erreur, par exemple sur la tâche suivante :

@task
@roles(‘database’)
@parallel
def remove():
    run(‘service mongodb stop’)
    run(‘aptitude purge mongodb-10gen –assume-yes’)
    run(‘rm -rf /var/lib/mongodb/\*’)

Et si MongoDB n’est pas démarré ? C’est un cas normal et la désinstall doit tout de même se poursuivre.

Dans ce cas, on pourra ignorer l’erreur :

@task
@roles(‘database’)
@parallel
def remove():
    with settings(warn\_only=True):
        run(‘service mongodb stop’)
    run(‘aptitude purge mongodb-10gen –assume-yes’)
    run(‘rm -rf /var/lib/mongodb/\*’)

Le décorateur @with\_settings vous permettra d’ignorer les erreurs pour une tâche entière.

## La manipulation de fichier

Plutôt fréquent dans une installation, vous devez modifier la configuration par défaut. Fabric vous propose plusieurs méthodes pour cela à base de sed.

La première, la plus simple dont on va se servir pour configurer le nom du cluster elasticsearch :

sed('/etc/elasticsearch/elasticsearch.yml', '.\*cluster.name:.\*', 'cluster.name: eventuallycoding')

Parfois cependant on a une logique plus alambiqué : si jamais la ligne n’existe pas tu la rajoutes, sinon tu la modifies (par exemple pour rajouter un dépot apt).

Fabric vous propose ceci :

append('/etc/apt/sources.list.d/mongodb.list',
           'deb http://downloads-distro.mongodb.org/repo/debian-sysvinit dist 10gen')

La ligne ne sera pas ajouté si elle existe déjà. Et surtout le fichier sera créé s’il n’existait pas.

## L’ordonnancement

Il arrive régulièrement d’avoir une “super tâche” Fabric qui ordonnance une mise à jour sur l’ensemble des noeuds, par exemple Web et Database. Ce serait dommage de devoir scripter en shell les appels successifs aux tâches Fabric non ?

Donc Fabric vous propose d’appeler des tâches à l’intérieur d’une tâche :

@task
@roles('database')
def migrate():
    # Database stuff here.
    pass

@task
@roles('web')
def update():
    # Code updates here.
    pass

@task
def deploy():
    execute(migrate)
    execute(update)

La tâche deploy va lancer successivement les tâches migrate et update sur les bons noeuds de votre application.

## La modularisation

Pour bien faire les choses, nous allons modulariser nos instructions d’installation. Ici je vais vous présenter un cas concret, l’installation d’un cluster MongoDB, d’un cluster ElasticSearch et d’un cluster Cassandra.

Pas question évidemment d’avoir toutes les instructions dans un seul fichier fabfile. Nous allons donc créer : elasticsearch.py, mongodb.py, cassandra.py.

Dans notre fichier fabfile.py il nous suffira de faire :

import mongodb, elasticsearch, cassandra

afin d’avoir accès à l’ensemble des tâches présentes pour chaque module.

Et ensuite pour l’utilisateur, pour connaître la liste des tâches disponibles :

$ fab -l
Available commands:

install
cassandra.install
cassandra.start
cassandra.stop
cassandra.uninstall
elasticsearch.install
elasticsearch.uninstall
elasticsearch.start
elasticsearch.stop
java.java
mongodb.install
mongodb.uninstall
mongodb.start
mongodb.stop

Et voilà. Comme tout outil de qualité qui se respecte, sa simplicité nous a permis d’en faire le tour rapidement.

En bonus vous pouvez aller voir ce repository github qui contient des scripts fabric pour installer MongoDB, ElasticSearch et Cassandra en cluster, chose dont j’ai eu besoin récemment pour réaliser des benchs sur les 3 (peut être un futur billet) :

[https://github.com/hlassiege/fabric-sample](https://github.com/hlassiege/fabric-sample)
