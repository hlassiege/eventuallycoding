---
title: "Utiliser subversion derrière un proxy NTLM"
date: "2010-04-16"
categories: 
  - "waza"
tags: 
  - "proxy"
img: "tortoisesvn.png"
---

## Pourquoi c'est bien l'interropérabilité

Voilà, je viens de changer de boite et comme d'habitude c'est la valse des outils, des accréditations etc... Et évidemment rien ne marche comme avant, sinon ce serait pas drole ^^

Bref, voulant utiliser mes outils comme auparavant je me suis installé Tortoisesvn et maven pour démarrer des devs sur JIRA en vue d'une migration de Sharepoint vers JIRA. L'objectif étant de récupérer des infos sur les repos atlassian pour travailler sur le plugin SOAP fourni avec JIRA.

Et là, c'est le drame, la société dans laquelle j'arrive utilise un proxy [NTLM](http://fr.wikipedia.org/wiki/NT_Lan_Manager "NTLM"). Pour faire simple, ce type de proxy permet de réutiliser les infos de login Windows. C'est sympa, mais apparemment tout les logiciels ne gèrent pas correctement ce type de proxy et c'est le cas de TortoiseSvn. Même si celui-ci permet de paramétrer un proxy, on tombe invariablement sur une erreur 407 lors de l'envoi des premiers headers HTTP par Tortoise.

Le bohneur...

## Et on fait comment ?

Ouf, il existe une solution. J'ai lutté pour la trouver alors je la partage.

En fait il existe un soft qui permet de gérer ce proxy NTLM tout en se comportant lui-même comme un proxy. Ce soft c'est [NTLMAPS](http://ntlmaps.sourceforge.net/ "Ntlmaps").

### Récupérez ntlmaps

Téléchargez le soft sur sourceforge ou sur le blog de [Tamil](http://my.opera.com/Tamil/blog/index.dml/tag/NTLMAPS) :

- http://my.opera.com/Tamil/homes/Softwares/NTLMAPS.zip
- http://sourceforge.net/projects/ntlmaps/files/ntlmaps/ntlmaps-0.9.9/

Le premier lien à l'avantage d'être packagé sous forme de .exe et donc de ne pas nécessiter python sur sa machine.

### Configuration de ntlmaps

Editez ensuite le fichier server.cfg et modifiez les valeurs suivantes :

- PARENT\_PROXY: le nom de votre serveur proxy
- PARENT\_PROXY\_PORT: le port
- NT\_DOMAIN : votre nom de domaine NT
- USER: votre login
- PASSWORD: votre password

### Configuration de tortoisesvn

Entrez dans la conf de TortoiseSvn :

 

![tortoisesvn](/images/tortoisesvn.png)

 

Configurez le proxy svn pour pointer sur ntlmaps (Voir le port LISTEN\_PORT dans le fichier server.cfg) :

 

![svnntlm](/images/svnntlm.png)

 

### Lancer ntlmaps

Pour ça, rien de plus simple, lancez l'exe ou le python et laissez la fenêtre ouverte.

![ntlmaps](/images/ntlmaps.png)

Et voilà, le tour est joué !

Au passage vous pouvez utiliser ce même proxy pour d'autres outils qui auraient éventuellement des soucis avec le protocole NTLM.

a+
