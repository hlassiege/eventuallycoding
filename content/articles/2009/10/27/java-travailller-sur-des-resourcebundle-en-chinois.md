---
id: "133"
title: "Java : Travailller sur des ResourceBundle en Chinois"
description: "## Travailller sur des ResourceBundle en Chinois

Au hasard de mes visites sur developpez.com je suis tombé sur le lien suivant :

[http://blog.develo..."
date: "2009-10-27"
categories: 
  - "waza"
tags: 
  - "encodage"
  - "java"
  - "utf8"
img: "overview.png"
cover: "cover2.jpg"
---

## Travailller sur des ResourceBundle en Chinois

Au hasard de mes visites sur developpez.com je suis tombé sur le lien suivant :

[http://blog.developpez.com/wichtounet/p8236/programmation/spring/utiliser-des-fichiers-utf-8-pour-l-inter/](http://blog.developpez.com/wichtounet/p8236/programmation/spring/utiliser-des-fichiers-utf-8-pour-l-inter/ "utiliser des fichiers utf-8 pour l'internationalisation")

Je viens récemment de travailler sur le portage de notre application en Chinois et bosser sur des fichiers de traduction en conservant les encodages a justement été un de nos problèmes et nous n'avons pas choisi la même solution. Du coup je fais partager ^^

Effectivement la solution de witchounet fonctionne, elle consiste à utiliser des ResourceBundle en UTF-8 directement. Il reste cependant la problématique de l'édition de ces fichiers, de l'échappement des caractères etc... Du coup pour les ResourceBundle Java on s'est plutôt orienté vers un plugin Eclipse : [http://sourceforge.net/projects/eclipse-rbe/](http://sourceforge.net/projects/eclipse-rbe/ "http://sourceforge.net/projects/eclipse-rbe/")

## Comment ça marche ?

Il s'agit ni plus ni moins d'un éditeur de ResourceBundle permettant d'afficher les clés du bundle associés aux traductions dans les différentes langues. Ses atouts majeurs :

- échappement des caractères
- encodage en unicode  (exemple : u8FDEu63A5u6D88u606Fu670Du52A1u5668u5931u8D25)
- mise en évidence des traductions manquantes
- création assistée d'un nouveau bundle avec les bons codes ISO pour la langue et le pays
- vue en arbre ou vue plate

![overview](/images/overview.png) ![nouveau](/images/nouveau.png)

## Astuce

Allez quand même, pour la forme, une petite astuce qui nous a bien servi en début de projet lorsque les fichiers nous arrivaient dans des encodages exotiques. Java est plutot bien fourni en utilitaire et il propose notamment un outils de conversion vers ascii : native2ascii

_Petit exemple :_

native2ascii -encoding GB2312 ResourceBundleHelper\_zh.properties ResourceBundleHelper\_zh.properties-NEW

Ca vous permet de retransformer vos fichiers envoyés par vos collègues Chinois en ascii. Et c'est bien pratique.
