__NUXT_JSONP__("/2009/10/28/creer-des-fichiers-excel-avec-des-caracteres-chinois-en-java", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B){return {data:[{article:{slug:"creer-des-fichiers-excel-avec-des-caracteres-chinois-en-java",description:"## Créer des fichiers Excel avec des caractères Chinois\nDans la lignée du post précédent, pourquoi ne pas continuer à parler de la Chine et aborder l...",id:"134",title:"Créer des fichiers Excel avec des caractères Chinois en Java",date:"2009-10-28",categories:["waza"],tags:[f,"poi","utf8"],img:"exportbadchinese.png",cover:"cover8.jpg",toc:[{id:s,depth:h,text:t},{id:u,depth:h,text:v},{id:w,depth:h,text:x}],body:{type:"root",children:[{type:b,tag:i,props:{id:s},children:[{type:b,tag:e,props:{href:"#cr%C3%A9er-des-fichiers-excel-avec-des-caract%C3%A8res-chinois",ariaHidden:j,tabIndex:k},children:[{type:b,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:t}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Dans la lignée du post précédent, pourquoi ne pas continuer à parler de la Chine et aborder le sujet des exports de fichiers au format Excel."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Je vais aborder ici l'utilisation de "},{type:b,tag:e,props:{href:y,rel:[o,p,q],target:r,title:g},children:[{type:a,value:g}]},{type:a,value:" et les problèmes que vous pourriez rencontrer avec des jeux de caractères exotiques."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Sur l'application sur laquelle je travaillais nous avions un module de transformation de fichiers CSV vers Excel."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"L'implémentation de transformation repose sur "},{type:b,tag:e,props:{href:y,rel:[o,p,q],target:r,title:g},children:[{type:a,value:g}]},{type:a,value:", c'est une librairie assez simple et bien foutu pour créer des fichiers Excel."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"L'algo est simple, je parcours la liste des valeurs et je crée des cellules au fur et à mesure en se basant sur un code de ce type (ici il s'agit d'une cellule au format texte) :"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"\u002F\u002F row est une ligne excel créé précédemment, indexCol l'indice de colonne sur la ligne\nHSSFCell cell = row.createCell(indexCol);\nHSSFCellStyle textCellStyle = workbook.createCellStyle();\ntextCellStyle.setDataFormat(format.getFormat(\"General\"));\ncell.setCellStyle(textCellStyle);\ncell.setCellValue(_value);"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Seulement voila, avec cet algo on obtient un résultat un peu étrange lorsque nos données sont en Chinois :"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:z,props:{alt:"exportbadchinese",src:"\u002Fimages\u002Fexportbadchinese.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Et je vous garantis, ce n'est pas du Chinois (même si l'un dans l'autre, je ne comprends aucun des deux...)."}]},{type:a,value:c},{type:b,tag:i,props:{id:u},children:[{type:b,tag:e,props:{href:"#solution",ariaHidden:j,tabIndex:k},children:[{type:b,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:v}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"En fait il est nécessaire de rajouter cette petite indication à POI pour que ça se passe bien :"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"cell.setEncoding(HSSFCell.ENCODING_UTF_16);"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Cette fois on obtient bien du Chinois dans notre fichier :"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:z,props:{alt:"excelok",src:"\u002Fimages\u002Fexcelok.png"},children:[]}]},{type:a,value:c},{type:b,tag:i,props:{id:w},children:[{type:b,tag:e,props:{href:"#astuce",ariaHidden:j,tabIndex:k},children:[{type:b,tag:l,props:{className:[m,n]},children:[]}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"J'en profite pour une petite astuce qui mérite d'être noté pour la partie purement CSV. Vous le savez sans doute, si vous utilisez un fichier csv avec l'extension xls vous pouvez aussi l'ouvrir dans Excel et celui-ci s'occupe de tout pour l'afficher comme un document \"classique\". Si vous utilisez un encodage ISO-latin1 pour vos fichiers textes sur vos postes Windows avec des caractères qui correspondent à ce charset, aucun souci, vous obtiendrez le résultat voulu. Là où ça se corse, c'est quand vous passez en encodage UTF-8 avec des caractères Chinois. Pour le coup Excel ne sera plus capable de reconnaitre correctement votre encodage (pour l'anecdote, OpenOffice y arrive lui)."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"En fait il faut penser à rajouter un "},{type:b,tag:e,props:{href:"http:\u002F\u002Ffr.wikipedia.org\u002Fwiki\u002FByte_Order_Mark",rel:[o,p,q],target:r,title:A},children:[{type:a,value:A}]},{type:a,value:" en début de fichier pour qu'Excel ouvre correctement le fichier."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Pour cela, il suffit d'insérer le BOM en début de flux :"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"OutputStreamWriter osw = new OutputStreamWriter( new FileOutputStream(csv), FILE_ENCODING);\nosw.write(0xFEFF);\n...."}]}]},dir:"\u002Farticles\u002F2009\u002F10\u002F28",path:"\u002Farticles\u002F2009\u002F10\u002F28\u002Fcreer-des-fichiers-excel-avec-des-caracteres-chinois-en-java",extension:".md",createdAt:B,updatedAt:B,bodyPlainText:"\nCréer des fichiers Excel avec des caractères Chinois\n\nDans la lignée du post précédent, pourquoi ne pas continuer à parler de la Chine et aborder le sujet des exports de fichiers au format Excel.\n\nJe vais aborder ici l'utilisation de POI et les problèmes que vous pourriez rencontrer avec des jeux de caractères exotiques.\n\n \n\nSur l'application sur laquelle je travaillais nous avions un module de transformation de fichiers CSV vers Excel.\n\nL'implémentation de transformation repose sur POI, c'est une librairie assez simple et bien foutu pour créer des fichiers Excel.\n\nL'algo est simple, je parcours la liste des valeurs et je crée des cellules au fur et à mesure en se basant sur un code de ce type (ici il s'agit d'une cellule au format texte) :\n\n\u002F\u002F row est une ligne excel créé précédemment, indexCol l'indice de colonne sur la ligne\nHSSFCell cell = row.createCell(indexCol);\nHSSFCellStyle textCellStyle = workbook.createCellStyle();\ntextCellStyle.setDataFormat(format.getFormat(\"General\"));\ncell.setCellStyle(textCellStyle);\ncell.setCellValue(\\_value);\n\nSeulement voila, avec cet algo on obtient un résultat un peu étrange lorsque nos données sont en Chinois :\n\nexportbadchinese\n\nEt je vous garantis, ce n'est pas du Chinois (même si l'un dans l'autre, je ne comprends aucun des deux...).\n\nSolution\n\nEn fait il est nécessaire de rajouter cette petite indication à POI pour que ça se passe bien :\n\ncell.setEncoding(HSSFCell.ENCODING\\_UTF\\_16);\n\nCette fois on obtient bien du Chinois dans notre fichier :\n\nexcelok\n\nAstuce\n\nJ'en profite pour une petite astuce qui mérite d'être noté pour la partie purement CSV. Vous le savez sans doute, si vous utilisez un fichier csv avec l'extension xls vous pouvez aussi l'ouvrir dans Excel et celui-ci s'occupe de tout pour l'afficher comme un document \"classique\". Si vous utilisez un encodage ISO-latin1 pour vos fichiers textes sur vos postes Windows avec des caractères qui correspondent à ce charset, aucun souci, vous obtiendrez le résultat voulu. Là où ça se corse, c'est quand vous passez en encodage UTF-8 avec des caractères Chinois. Pour le coup Excel ne sera plus capable de reconnaitre correctement votre encodage (pour l'anecdote, OpenOffice y arrive lui).\n\nEn fait il faut penser à rajouter un BOM en début de fichier pour qu'Excel ouvre correctement le fichier.\n\nPour cela, il suffit d'insérer le BOM en début de flux :\n\nOutputStreamWriter osw = new OutputStreamWriter( new FileOutputStream(csv), FILE\\_ENCODING);\nosw.write(0xFEFF);\n....\n",readTime:{text:"2 min read",minutes:1.93,time:115800,words:386}},relatedArticles:[{slug:"swing-or-not-swing-that-is-the-question",description:"## Peut-on faire un client lourd en Java ?\nAyant bossé en Java je me suis heurté à Swing comme on peut se heurter à un mur. Ouch, quand on vient du W...",id:"135",title:"Swing or not Swing, that is the question",date:"2009-10-30",tags:[f,"swing"],img:"",cover:"cover2.jpg",path:"\u002Farticles\u002F2009\u002F10\u002F30\u002Fswing-or-not-swing-that-is-the-question"},{slug:"java-vs-c-les-types-valeurs-en-c",description:"[![](\u002Fimages\u002Fjavac1.png \"javac\")](http:\u002F\u002Feventuallycoding.com\u002Fwp-content\u002Fuploads\u002F2011\u002F05\u002Fjavac1.png)\n**Warning, warning,** ceci n'est pas une rubriqu...",id:"324",title:"Java Vs C# : Les types valeurs en C#",date:"2011-05-01",tags:["csharp",f],img:"javac1.png",cover:"cover4.jpg",path:"\u002Farticles\u002F2011\u002F05\u002F01\u002Fjava-vs-c-les-types-valeurs-en-c"},{slug:"luke-que-la-force-soit-avec-toi",description:"Vous connaissez [Lucene](http:\u002F\u002Flucene.apache.org\u002Fjava\u002Fdocs\u002F \"Lucene\") ? Non ? Dans ce cas je vous invite fortement à découvrir cette API utilisé dans...",id:"139",title:"Luke, que la force soit avec toi !",date:"2009-12-06",tags:[f,"lucene"],img:"ouverturefichier.png",cover:"cover7.jpg",path:"\u002Farticles\u002F2009\u002F12\u002F06\u002Fluke-que-la-force-soit-avec-toi"}],_img:{"/_ipx/_/hugo-nb.jpg":"\u002F_nuxt\u002Fimage\u002Fc3e54c.jpg"}}],fetch:{},mutations:void 0}}("text","element","\n","p","a","java","POI",2,"h2","true",-1,"span","icon","icon-link","nofollow","noopener","noreferrer","_blank","créer-des-fichiers-excel-avec-des-caractères-chinois","Créer des fichiers Excel avec des caractères Chinois","solution","Solution","astuce","Astuce","http:\u002F\u002Fpoi.apache.org\u002Fspreadsheet\u002Findex.html","img","BOM","2022-08-22T11:16:21.965Z")));