---
id: "134"
title: "Créer des fichiers Excel avec des caractères Chinois en Java"
description: "## Créer des fichiers Excel avec des caractères Chinois

Dans la lignée du post précédent, pourquoi ne pas continuer à parler de la Chine et aborder l..."
date: "2009-10-28"
categories: 
  - "waza"
tags: 
  - "java"
  - "poi"
  - "utf8"
img: "exportbadchinese.png"
cover: "cover8.jpg"
---

## Créer des fichiers Excel avec des caractères Chinois

Dans la lignée du post précédent, pourquoi ne pas continuer à parler de la Chine et aborder le sujet des exports de fichiers au format Excel.

Je vais aborder ici l'utilisation de [POI](http://poi.apache.org/spreadsheet/index.html "POI") et les problèmes que vous pourriez rencontrer avec des jeux de caractères exotiques.

 

Sur l'application sur laquelle je travaillais nous avions un module de transformation de fichiers CSV vers Excel.

L'implémentation de transformation repose sur [POI](http://poi.apache.org/spreadsheet/index.html "POI"), c'est une librairie assez simple et bien foutu pour créer des fichiers Excel.

L'algo est simple, je parcours la liste des valeurs et je crée des cellules au fur et à mesure en se basant sur un code de ce type (ici il s'agit d'une cellule au format texte) :

// row est une ligne excel créé précédemment, indexCol l'indice de colonne sur la ligne
HSSFCell cell = row.createCell(indexCol);
HSSFCellStyle textCellStyle = workbook.createCellStyle();
textCellStyle.setDataFormat(format.getFormat("General"));
cell.setCellStyle(textCellStyle);
cell.setCellValue(\_value);

Seulement voila, avec cet algo on obtient un résultat un peu étrange lorsque nos données sont en Chinois :

![exportbadchinese](/images/exportbadchinese.png)

Et je vous garantis, ce n'est pas du Chinois (même si l'un dans l'autre, je ne comprends aucun des deux...).

## Solution

En fait il est nécessaire de rajouter cette petite indication à POI pour que ça se passe bien :

cell.setEncoding(HSSFCell.ENCODING\_UTF\_16);

Cette fois on obtient bien du Chinois dans notre fichier :

![excelok](/images/excelok.png)

 

## Astuce

J'en profite pour une petite astuce qui mérite d'être noté pour la partie purement CSV. Vous le savez sans doute, si vous utilisez un fichier csv avec l'extension xls vous pouvez aussi l'ouvrir dans Excel et celui-ci s'occupe de tout pour l'afficher comme un document "classique". Si vous utilisez un encodage ISO-latin1 pour vos fichiers textes sur vos postes Windows avec des caractères qui correspondent à ce charset, aucun souci, vous obtiendrez le résultat voulu. Là où ça se corse, c'est quand vous passez en encodage UTF-8 avec des caractères Chinois. Pour le coup Excel ne sera plus capable de reconnaitre correctement votre encodage (pour l'anecdote, OpenOffice y arrive lui).

En fait il faut penser à rajouter un [BOM](http://fr.wikipedia.org/wiki/Byte_Order_Mark "BOM") en début de fichier pour qu'Excel ouvre correctement le fichier.

Pour cela, il suffit d'insérer le BOM en début de flux :

OutputStreamWriter osw = new OutputStreamWriter( new FileOutputStream(csv), FILE\_ENCODING);
osw.write(0xFEFF);
....
