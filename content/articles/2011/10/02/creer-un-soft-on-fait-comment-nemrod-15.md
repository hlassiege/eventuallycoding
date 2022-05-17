---
id: "408"
title: "Créer un soft, on fait comment ? (Nemrod 1/5)"
description: "[![](/images/logo-web.png \"logo-web\")](http://eventuallycoding.com/wp-content/uploads/2011/10/logo-web.png)

Voila, [Localizeyourapps](http://www.loca..."
date: "2011-10-02"
categories: 
  - "waza"
tags: 
  - "freelance"
  - "nemrod"
  - "play"
img: "logo-web.png"
cover: "cover4.jpg"
---

[![](/images/logo-web.png "logo-web")](http://eventuallycoding.com/wp-content/uploads/2011/10/logo-web.png)

Voila, [Localizeyourapps](http://www.localizeyourapps.com) est sorti, enfin pour être exact il est sorti depuis 2 semaines mais je n’avais pas encore eu le temps d’en parler ici.

Et donc Nemrod pour simplifier c’est :

- une histoire d’amour avec Play Framework
- l’aboutissement d’un mésaventure lors d’un précédent projet
- l’opportunité de faire du soft avec un status freelance.

Vous voulez en savoir plus ? Comment exploiter une idée ? Comment on lance un soft avec le minimum de budget ? Quelles sont les astuces pour se faire connaître ? Pourquoi avoir utilisé Play Framework et un retour d'expérience dessus ?

Je vous propose une petite série de billets sur le sujet.

C’est parti !

## Petite génèse rapide

Forcément si je parle de Nemrod, ça passe par une petite genèse du projet. Ça peut ressembler à la partie "Histoire de la société" que chacun a mis dans son rapport de stage de fin d’étude pour combler les 20 premières pages mais non, que nenni ! J’ose espérer que ce sera un peu plus sympa à lire.

Bon, donc, il y a quelques temps j’ai bossé sur un soft internationalisé. Ce soft était déjà localisé en anglais, allemand, italien, espagnol et flamand. Le process pour ces langues était déjà pas super propre mais on arrivait à s’en sortir à coup d’échanges d’email et un gars chargé dans l’équipe de reconsolider le tout dans nos fichiers de ressources. Dans l’ensemble la qualité des traductions était plutôt mauvaise avec pas mal d’incohérences ou de traductions manquantes. Mais on se contentait d’avoir une traduction anglaise a peu près complète, langue à peu près maîtrisé par nos clients.

Et puis est arrivé le Chinois... "Et là, c’est le drame" comme dirait l’autre. Sans parler des problématiques d’internationalisation et d’encodage en UTF-8 :

- on est passé de quelques traducteurs à plus d’une vingtaine
- on a eu l’obligation de n’avoir absolument rien en anglais dans l’appli
- on a du traiter différents formats, fichiers po, fichiers properties et une base de données. Avec des contraintes de format assez évidentes

Ce fut rapidement la jungle, des encodages inconnus par native2ascii, des tas de mails à traiter, des conflits de versions, des traductions retraduites plus de 10 fois, perdus, retraduites, et bien sur impossible de les vérifier.  
Malgré un simili process qui s’est établi à l’époque avec plusieurs outils buggé créé pour l’occasion, c’est resté l’enfer (\*).  
A l’époque j’avais recherché des outils collaboratifs pour la gestion des traductions supportant différents formats de fichiers techniques et je n’avais rien trouvé d’intéressant.  
Du coup l’idée a germé petit à petit de réaliser le mien.

Voilà, les bases sont posées, la suite dans les prochains billets.

(\*) d'ailleurs je viens de remarquer que cette époque correspond à la création de ce blog et que [mes deux premiers billets](http://hakanai.free.fr/index.php/tag/utf8/) portent sur le sujet. La boucle est bouclée.
