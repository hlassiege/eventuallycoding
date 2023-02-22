export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){return {data:{"/articles/2009/10/28/creer-des-fichiers-excel-avec-des-caracteres-chinois-en-java":{_path:"\u002Farticles\u002F2009\u002F10\u002F28\u002Fcreer-des-fichiers-excel-avec-des-caracteres-chinois-en-java",_dir:"28",_draft:i,_partial:i,_locale:e,_empty:i,title:"Créer des fichiers Excel avec des caractères Chinois en Java",description:"## Créer des fichiers Excel avec des caractères Chinois\nDans la lignée du post précédent, pourquoi ne pas continuer à parler de la Chine et aborder l...",id:"134",date:"2009-10-28",tags:[g,"poi","utf8"],img:"exportbadchinese.png",cover:"cover8.jpg",readingTime:{text:"2 min read",minutes:1.78,time:106800,words:356},body:{type:"root",children:[{type:a,tag:j,props:{id:o},children:[{type:b,value:p}]},{type:a,tag:c,props:{},children:[{type:b,value:"Dans la lignée du post précédent, pourquoi ne pas continuer à parler de la Chine et aborder le sujet des exports de fichiers au format Excel."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Je vais aborder ici l'utilisation de "},{type:a,tag:k,props:{href:q,rel:[l],title:h},children:[{type:b,value:h}]},{type:b,value:" et les problèmes que vous pourriez rencontrer avec des jeux de caractères exotiques."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Sur l'application sur laquelle je travaillais nous avions un module de transformation de fichiers CSV vers Excel."}]},{type:a,tag:c,props:{},children:[{type:b,value:"L'implémentation de transformation repose sur "},{type:a,tag:k,props:{href:q,rel:[l],title:h},children:[{type:b,value:h}]},{type:b,value:", c'est une librairie assez simple et bien foutu pour créer des fichiers Excel."}]},{type:a,tag:c,props:{},children:[{type:b,value:"L'algo est simple, je parcours la liste des valeurs et je crée des cellules au fur et à mesure en se basant sur un code de ce type (ici il s'agit d'une cellule au format texte) :"}]},{type:a,tag:d,props:{code:r,language:g,meta:m},children:[{type:a,tag:n,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:r}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Seulement voila, avec cet algo on obtient un résultat un peu étrange lorsque nos données sont en Chinois"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Et je vous garantis, ce n'est pas du Chinois (même si l'un dans l'autre, je ne comprends aucun des deux...)."}]},{type:a,tag:j,props:{id:s},children:[{type:b,value:t}]},{type:a,tag:c,props:{},children:[{type:b,value:"En fait il est nécessaire de rajouter cette petite indication à POI pour que ça se passe bien :"}]},{type:a,tag:d,props:{code:u,language:g,meta:m},children:[{type:a,tag:n,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:u}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Cette fois on obtient bien du Chinois dans notre fichier."}]},{type:a,tag:j,props:{id:v},children:[{type:b,value:w}]},{type:a,tag:c,props:{},children:[{type:b,value:"J'en profite pour une petite astuce qui mérite d'être noté pour la partie purement CSV. Vous le savez sans doute, si vous utilisez un fichier csv avec l'extension xls vous pouvez aussi l'ouvrir dans Excel et celui-ci s'occupe de tout pour l'afficher comme un document \"classique\". Si vous utilisez un encodage ISO-latin1 pour vos fichiers textes sur vos postes Windows avec des caractères qui correspondent à ce charset, aucun souci, vous obtiendrez le résultat voulu. Là où ça se corse, c'est quand vous passez en encodage UTF-8 avec des caractères Chinois. Pour le coup Excel ne sera plus capable de reconnaitre correctement votre encodage (pour l'anecdote, OpenOffice y arrive lui)."}]},{type:a,tag:c,props:{},children:[{type:b,value:"En fait il faut penser à rajouter un "},{type:a,tag:k,props:{href:"http:\u002F\u002Ffr.wikipedia.org\u002Fwiki\u002FByte_Order_Mark",rel:[l],title:x},children:[{type:b,value:x}]},{type:b,value:" en début de fichier pour qu'Excel ouvre correctement le fichier."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Pour cela, il suffit d'insérer le BOM en début de flux :"}]},{type:a,tag:d,props:{code:y,language:g,meta:m},children:[{type:a,tag:n,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:y}]}]}]}],toc:{title:e,searchDepth:f,depth:f,links:[{id:o,depth:f,text:p},{id:s,depth:f,text:t},{id:v,depth:f,text:w}]}},_type:"markdown",_id:"content:articles:2009:10:28:creer-des-fichiers-excel-avec-des-caracteres-chinois-en-java.md",_source:"content",_file:"articles\u002F2009\u002F10\u002F28\u002Fcreer-des-fichiers-excel-avec-des-caracteres-chinois-en-java.md",_extension:"md"}},prerenderedAt:1677106059531}}("element","text","p","code","",2,"java","POI",false,"h2","a","nofollow",null,"pre","créer-des-fichiers-excel-avec-des-caractères-chinois","Créer des fichiers Excel avec des caractères Chinois","http:\u002F\u002Fpoi.apache.org\u002Fspreadsheet\u002Findex.html","\u002F\u002F row est une ligne excel créé précédemment, indexCol l'indice de colonne sur la ligne\nHSSFCell cell = row.createCell(indexCol);\nHSSFCellStyle textCellStyle = workbook.createCellStyle();\ntextCellStyle.setDataFormat(format.getFormat(\"General\"));\ncell.setCellStyle(textCellStyle);\ncell.setCellValue(value);\n","solution","Solution","cell.setEncoding(HSSFCell.ENCODING_UTF_16);\n","astuce","Astuce","BOM","OutputStreamWriter osw = new OutputStreamWriter( new FileOutputStream(csv), FILE_ENCODING);\nosw.write(0xFEFF);\n"))