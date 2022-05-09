---
title: "User Macro confluence : supprimer les retours à la ligne inutiles"
date: "2011-01-28"
categories: 
  - "waza"
tags: 
  - "atlassian"
  - "confluence"
img: ""
---

  
Petite astuce pour les utilisateurs de Confluence. Vous utilisez sans doute une fonctionnalité très pratique de ce Wiki, les macros personnalisés.  
Super pratique, elles ont cependant un défaut sur la mise en page pas très plaisant, elles ajoutent systématique un retour à la ligne à la suite de la macro.  
  
_Exemple :_  
  
_Wiki markup :_  

> une macro {macro:arg1} avec ou sans retour à la ligne ?  

_Rendu :_  

> une macro arg1  
> avec ou sans retour à la ligne ?  

Pour éviter cela, il y a un moyen lorsque l'on a pas besoin de faire appel à du markup trop évolué. Pour cela, choisir **Output format** en HTML.  
  
Exemple ici avec une macro custom qui écrit un lien renvoyant vers un serveur JIRA :  
  
Le markup est inchangé pour l'appel à la macro :

> une macro {macro:arg1} avec ou sans retour à la ligne ?  

_La Macro défini dans l'admin_ :

> <a href="https://myserver.com/browse/$param0" rel="nofollow">$param0<sup><img src="/images/icons/linkext7.gif" alt="" align="absmiddle" border="0" height="7" width="7"></sup></a>  

  
_Rendu :_

> une macro arg1 avec ou sans retour à la ligne ?
