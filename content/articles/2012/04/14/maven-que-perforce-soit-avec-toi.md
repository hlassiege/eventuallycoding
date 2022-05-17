---
id: "506"
title: "Maven : que Perforce soit avec toi"
description: "![](/images/ps-kztpdvdc-170x170-751.jpg \"ps.kztpdvdc.170x170-75\")

J'ai un peu galéré dernièrement pour configurer correctement Perforce avec Maven et..."
date: "2012-04-14"
categories: 
  - "waza"
tags: 
  - "maven"
  - "nexus"
  - "perforce"
img: "ps-kztpdvdc-170x170-751.jpg"
cover: "cover3.jpg"
---

![](/images/ps-kztpdvdc-170x170-751.jpg "ps.kztpdvdc.170x170-75")

J'ai un peu galéré dernièrement pour configurer correctement Perforce avec Maven et notamment le plugin Maven release. Je vous propose donc un petit billet sur le sujet.  
Bref, ça va parler de release avec maven, de déploiement sur Nexus et  de label perforce.  
Tout un programme.

Tout d'abord petit rappel, si vous avez la chance de ne pas connaitre Perforce (sic...), il s'agit d'un gestionnaire de source tout comme peut l'être Subversion, Git ou Mercurial. Enfin "tout comme peut l'être", faut le dire vite... Je passerais rapidement sur l’outil en lui-même car je l’utilise contraint et forcé.

Or comme ce magnifique outil est relativement indigeste et loin d’être simple à utiliser je vous propose de voir rapidement la configuration nécessaire pour l’intégration avec Maven.

A noter que si vraiment Perforce vous insupporte, et je peux comprendre, vous pouvez utiliser un proxy git-perforce. Je vous invite dans ce cas à lire [le billet Jean Chistophe Gay](http://jeanchristophegay.com/git-p4-au-secours-de-perforce/) sur le sujet. (Au passage c’est un super collègue, prenez le sur vos missions ;))

Mais revenons à nos moutons, même en utilisant git-p4 ca ne vous épargnera pas la douleur de devoir releaser sur Perforce de temps en temps.

Tout d’abord petit rappel,

# le versionning avec Maven

Maven repose sur un notion forte de version d’artefact. Chaque dépendance que vous déclarez dans votre pom.xml a un numéro de version qui doit être explicitement déclaré. Par exemple :

com.localizeyourapp
nemrodclient
1.1

Si vous utilisez plusieurs modules, chaque module doit avoir sa version. (Ce qui compliquera heureusement la tâche de ceux qui pensait qu’il suffirait de changer le numéro de version a un seul endroit pour en faire une release....)

pom.xml
|
\`---module1
| |
| \`---pom.xml
\`---module2
| |
| \`---pom.xml
\`---module3
|
\`---pom.xml

Le plugin maven release permet justement de suivre quelques bonnes pratiques lors de la release de votre projet :

- Vérification que vous n’avez aucune modifiation non commité en local
- Vérification que vous ne dépendez d’aucune dépendance instable (SNAPSHOT)
- Lancement des tests
- Changement automatique de toutes les versions de POM de votre projet (sous modules inclus)
- Création d’un tag sous votre gestionnaire de source
- Déploiement de l’artefact dans un repo Maven (nexus par exemple)

Ouf, on a de la chance, le plugin maven-release supporte Perforce

- http://www.perforce.com/perforce/r11.1/manuals/p4maven/index.html
- http://kb.perforce.com/article/1023/maven-integration
- http://maven.apache.org/scm/scms-overview.html

# Configuration

## Perforce

Prérequis :  
p4 doit être disponible en ligne de commande  
vous devez avoir certaines variables disponibles en variable d’environnement

Les variables nécessaires pour Perforce peuvent être sous forme de variable d’environnement, ou bien écrites dans un fichier p4.ini à la racine de votre dépot. Le fichier doit contenir les informations suivantes :

P4PORT=perforce:1992  
P4CHARSET=utf16le-bom  
P4COMMANDCHARSET=winansi  
P4CLIENT=hlassiege\_1992  
P4USER=v-hlassiege  
P4PASSWORD=\*\*\*\*

Posez pas de question sur l’encodage, ca fait partie des merveilles de Perforce...

## Maven

Côté Maven, il vous faut quelque configuration dans votre pom.xml.  
La balise scm :

scm:perforce:myHost:1992://depot/poms-parent/main
scm:perforce:myHost:1992://depot/poms-parent/main

La partie distribution management pour que Maven sache sur quel repository déployer ces artefacts :

inhouse
dav:http://repositoryHost:8081/nexus/content/repositories/egencia/

inhouse\_snapshot
dav:http://repositoryHost:8081/nexus/content/repositories/egencia-snapshot/

Ensuite il est important que la personne (ou l’outil si vous l’automatisez via votre intégration continue) qui va déclencher la release utilise un fichier settings.xml qui déclare les identifiants de connexion à Nexus :

inhouse
myLogin
myPwd

Ensuite, une fois arrivé là, le reste est trivial

cd C:DEVperforce1992depotpoms-parentmain
mvn release:prepare
mvn release:perform

Voilà, désormais que Perforce soit avec vous. Ou pas...
