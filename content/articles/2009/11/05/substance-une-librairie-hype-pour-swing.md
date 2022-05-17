---
id: "136"
title: "Substance, une librairie \"hype\" pour Swing"
description: "Mon [dernier billet sur Swing](index.php/the-news/51-swing-or-not-swing \"Swing or not swing\") pouvait paraître pessimiste puisque je parlais de cette ..."
date: "2009-11-05"
categories: 
  - "waza"
tags: 
  - "java"
  - "substance"
  - "swing"
img: "button.png"
cover: "cover4.jpg"
---

Mon [dernier billet sur Swing](index.php/the-news/51-swing-or-not-swing "Swing or not swing") pouvait paraître pessimiste puisque je parlais de cette API comme d'une API complexe et qui avait mal évolué avec notamment peu de frameworks autour. "Peu" ne veut pas pour autant dire "aucun" et c'est justement l'occasion d'aborder [Substance](https://substance.dev.java.net/ "Substance"), une librairie bien sympathique créé par _Kirill Grouchnikov_.

A mon sens c'est l'une des librairies qui a le plus profité de la période 2006-2007 et des avancées matérialisées dans [Aerith](https://aerith.dev.java.net/ "Aerith"). Romain Guy, l'un des leaders sur Aerith, fait d'ailleurs partie des contributeurs de Substance [pour ces précieux conseils](http://weblogs.java.net/blog/kirillcool/archive/2006/09/listening_to_th_1.html). Les effets de fading, les animations sur les boutons, les tables à couleurs alternées etc... voici des choses facilement abordables avec cette librairie. Attention, comme je l'évoquais dans mon billet "[Swing or not Swing, that is the question](index.php/the-news/51-swing-or-not-swing "Swing or not Swing")", il ne s'agit pas de nouvelles fonctionnalités de Swing mais de fonctionnalités existantes pour lesquelles la librairie propose des outils afin d'en faciliter l'usage.

Par exemple pour utiliser le fading lors de la surbrillange des éléments d'une liste :

```java
  JList list = ...; // create the list
  FadeConfigurationManager.getInstance().allowFades(FadeKind.ROLLOVER, list);
  FadeConfigurationManager.getInstance().allowFades(FadeKind.SELECTION, list);
```
Nettement plus simple que de le coder soi-même...

Pour voir un apercu de ce que cela peut donner une [application est disponible via Java Webstart](https://substance.dev.java.net/see.html "Substance"). Attention, à utiliser avec Java 6, c'est le prix de la modernité ;)

Je vous invite à jouer avec les options générales et notamment à cocher les options suivantes :

- Focus loop
- Icon glow
- Icon rollover
- Button press
- Global fade events

Et observez le résultat sur les boutons à icône, tout simplement bluffant...

A cela ajoutez la prévisualisation des fenêtres minimisées, la notion de [skin custom](https://substance.dev.java.net/docs/skins/overview.html)... et vous avez un framework que je ne saurais que trop vous conseiller.

