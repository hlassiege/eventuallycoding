---
id: "24"
title: "Comparaison des salaires US et FR (2/2)"
description: "Et si on regardait les salaires au regard du niveau de vie ?"
date: "2023-06-11"
tags:
- "salaires"
cover: "evolution-salaires.jpg"

language: "fr"
---

Voici le second volet de ce billet de blog sur les salaires US et FR.

Dans [le premier billet](https://eventuallycoding.com/2023/05/evolution-salaries-10-years), nous avons regardé comment les salaires ont évolué entre la France et les US sur 10 ans. La conclusion étant que les écarts se sont creusés avec une augmentation générale des salaires aux US plus importante qu’en France malgré une inflation quasi comparable (+19 en France contre +24 aux US sur la même période).

Mais, comparer des salaires sans regarder ce que ce salaire peut procurer en termes de niveau de vie ne rime pas à grand-chose. Et si on allait un peu plus loin ?

::warning
Ce billet manipule de nombreuses notions et il peut y avoir des erreurs. Je ne suis pas spécialiste des US et je ne suis pas économiste non plus.  
Donc n’hésitez pas à me signaler les erreurs éventuelles.
::


## Comparaison des salaires en net et super brut en euros

Nous nous étions arrêtés à ces salaires en 2022/2023

|     |FR |Marché|Tech FR|Big Tech| |     |US |Marché|Big Tech|
|:----|:----|:----|:----|:-------|:----|:----|:----|:----|:----|
|     |Junior|35|47| 68     | |     |Junior|85|120|
|     |Senior|50|62| 82     | |     |Senior|130|170|
|     |Staff|63|78| 120    | |     |Staff|170|220|

Remettons tout cela en Euros pour comparer ce qui est comparable.

|     | FR|Marché|Tech FR|Big Tech| |     |US |Marché|Big Tech|
|:----|:----|:----|:----|:----|:----|:----|:----|:----|:----|
|     |Junior|35|47|68|     | |Junior|79,43925234|112,1495327|
|     |Senior|50|62|82|     | |Senior|121,4953271|158,8785047|
|     |Staff|63|78|120|     | |Staff|158,8785047|205,6074766|

Ici, on pourrait directement comparer le revenu net en enlevant les cotisations sociales.

En France, on va considérer 25% de cotisations sociales pour les cadres.  
Aux US, il n’y a pas de cotisations salariales. L’ensemble des cotisations est pris sur la part patronale (le super brut). Par contre, il y a une imposition à la source, mais nous ne la prendrons pas en compte ici.

| FR     |Marché|Tech FR|Big Tech | |     | US|Marché|Big Tech|
|:-------|:----|:----|:----|:----|:----|:----|:----|:----|
| Junior |26,25|35,25|51| |     |Junior|79,43925234|112,1495327|
| Senior |37,5|46,5|61,5| |     |Senior|121,4953271|158,8785047|
| Staff  |47,25|58,5|90| |     |Staff|158,8785047|205,6074766|


::warning
Eh oui, c'était un piège, je pense qu’on ferait une erreur de comparer les revenus nets.
Parce que les cotisations, c'est aussi du salaire, mais du salaire **indirect**.

Les cotisations (et les impôts), ça finance des services dont on profite, et que, notamment aux US, quand ils sont absents il faut payer en plus (mutuelle, complémentaire retraite, gestion de l'invalidité, etc.). C’est donc inclus in-fine dans “le niveau de vie”.  
Pensez-y quand on vous dit qu’on fait baisser vos cotisations, mais qu’ensuite on a du mal à financer tel ou tel service public.
::

Donc à l’inverse, on va plutôt comparer les salaires en “super brut”, c'est-à-dire le salaire totalement versé par l’employeur, incluant les cotisations patronales.

En france je prends un taux de cotisations patronales de 30%.  
Aux US je prends 15%

Cela nous donne

| | FR     |Marché|Tech FR|Big Tech| US  |Marché|Big Tech|
|:----|:-------|:----|:----|:----|:----|:----|:----|
| | Junior |45,5|61,1|88,4|     |91,35514019|128,9719626|
| | Senior |65|80,6|106,6|     |139,7196262|182,7102804|
| | Staff  |81,9|101,4|156|     |182,7102804|236,4485981|


Enfin, je vous propose d’intégrer le nombre de jours moyens travaillés. Parce que de ce point de vue là, la France et les US ont une petite différence.

En France, en moyenne, le nombre de jours travaillés annuels est de 214 jours [selon l’insee](https://www.insee.fr/fr/statistiques/4501612?sommaire=4504425).

Aux US, le nombre de jours travaillés moyens annuels est de 240.

::warning
Attention, je parle de moyenne. Je sais qu’il y a des entreprises avec des politiques de congés illimités. Mais d’une part, en France aussi, d’autre part, c’est la moyenne constatée qui nous intéresse.
::


Si on ramène le salaire aux US sur 214 jours, ceci nous donne

| | |Marché|Tech FR|Big Tech| | | |Marché|Big Tech|
|:----|:----|:----|:----|:-------|:----|:----|:----|:----|:----|
| |Junior|45,5|61,1| 88,4   | | | |81,45833333|115|
| |Senior|65|80,6| 106,6  | | | |124,5833333|162,9166667|
| |Staff|81,9|101,4| 156    | | | |162,9166667|210,8333333|


Pour simplifier la lecture, on va prendre un revenu étalon qui sera la moyenne par niveau d’expérience et quel que soit le type d’entreprise.

| | FR |     |US | |
|:----|:----|:----|:----|:----|
|Junior| 65          |     |98,22916667|
|Senior| 84,06666667  |     |143,75|
|Staff| 113,1        |     |186,875|


Sur ces chiffres, on va déterminer le rapport entre les deux.

| |Rapport FR / US|
|:----|:----|
|Junior|1,511217949|
|Senior|1,709952419|
|Staff|1,652298851|


On en déduit que, en moyenne, on est payé 1.6x plus aux US qu’en France.

En toute honnêteté, les Big Tech en France étant anecdotique, si je les enlève pour faire le même calcul, j’obtiens ceci :

| |Rapport FR / US|
|:----|:----|
|Junior|1,842948718|
|Senior|1,974587912|
|Staff|2,039007092|


Cette fois-ci, on est plus proche des 2x le revenu en France. C’est plutôt un bel écart.

Je vous propose cependant de voir ce chiffre en regard du cout de la vie.

## Comparaison des salaires en fonction du coût de la vie

Pour l'anecdote, selon [l’agence fédérale de Californie](https://immobilier.lefigaro.fr/article/la-folie-immobiliere-a-san-francisco-expliquee-en-4-chiffres_36a78e2e-471a-11e9-9c1b-f90d50bfaac8/), à moins de 117k dollars par an, un foyer est considéré à faibles revenus en considérant le coût de la vie.

Et pourtant, [le revenu médian en Californie pour un couple est de 111k/an](https://fr.statista.com/statistiques/559153/revenu-median-des-menages-dans-les-villes-les-plus-peuplees-des-etats-unis), ce qui range la moitié des foyers dans la catégorie “faibles revenus”. Cocasse dirons-nous.

Si on prend la définition de l’observatoire des inégalités, le seuil de richesse se situe à deux fois le revenu médian. Autrement dit, il faut avoir 222k de revenu annuel pour un couple pour être considéré comme aisé.

C’est globalement ce que nous dit [ce site](https://expat-assurance.com/fr/expatriation-los-angeles/salaire-moyen-los-angeles) qui considère qu’il faut être dans la tranche 136-150k pour vivre correctement. Correctement ne voulant pas dire avec excès.

En France cette fois, un couple avec 90k de revenu net est considéré comme riche [selon l’observatoire des inégalités](https://www.inegalites.fr/Les-seuils-de-richesse-par-type-de-famille).

Tous ces chiffres considèrent le net, donc cela nous donne :

|FR| |Marché|Tech FR|Big Tech | |  US   | |Marché|Big Tech|
|:----|:----|:----|:----|:----|:----|:----|:----|:----|:----|
|Junior ||26,25|35,25|**51**|     |Junior ||85|120|
|Senior ||37,5|**46,5**|**61,5**|     | Senior||**130**|**170**|
|Staff ||**47,25**|**58,5**|**90**|     | Staff||**170**|**220**|



**(En gras, les catégories considérées comme aisées)**

En France, on est presque tout le temps au-dessus du salaire médian (1850 € net /mois), sauf pour les juniors qui démarrent en dessous de 28k brut annuel.  
Le seuil de richesse étant à 44k net annuels pour une personne seule, cela concerne pas mal de personnes, hormis les seniors dans les entreprises de type 1, ou les juniors dans les entreprises Tech.

Aux US, le salaire médian est de 61k annuel, le seuil de richesse se situe à 122k pour une personne seule.
(A ne pas confondre avec les chiffres plus haut qui étaient valables pour un couple).
Autrement dit, à partir de Senior on passe le seuil de richesse.

Si on prend cet axe de lecture, être Software Engineer aux US, comme en France, est plutôt une bonne situation. (Mieux que Scribe ?)

Maintenant, il faut comprendre que la définition du seuil de richesse ou de pauvreté se fait par rapport à une médiane. Si jamais cette médiane cache de grandes inégalités, cette comparaison n’a pas toujours de sens.
Dit autrement, avoir deux fois le salaire médian dans un pays avec des fortes inégalités ne garantit pas le même niveau de vie qu’une personne ayant deux fois le salaire médian dans un pays plus égalitaire.

Or justement, si on prend [l’indice de Gini](https://www.insee.fr/fr/metadonnees/definition/c1551) qui reflète le niveau d’inégalité d'un état, les US sont moins bien placés que la France à ce niveau-là.

Prenons quelques exemples pour donner un peu de concret.

## Comparaison des niveaux de vie

Il est possible que certains aient bondi de leur chaise en apprenant qu’ils étaient considérés “riches” avec 44k de salaire net (56k de salaire brut). Eh oui, on a tous le sentiment de faire partie de la classe moyenne. Maintenant, c’est vrai qu’avec 56k de revenu, vous n’avez sans doute pas un yacht sur la marina à Nice mais, [vous gagnez plus que 87% des Français](https://www.inegalites.fr/Salaire-etes-vous-riche-ou-pauvre).

La notion de “niveau de vie” se réfère à “la quantité de biens et services qu’une personne peut s’approprier en lien avec ces revenus (et son patrimoine)”. Et cette notion de niveau de vie dépend aussi de votre pays. Par exemple l’accès aux soins, l’école gratuite etc… sont des biens et services auxquels vous avez accès en France, ils élèvent donc votre niveau de vie.

Pour calculer ce niveau de vie, on pourrait prendre le revenu disponible après les dépenses dites contraintes (logement, alimentation etc.). Mais on perdrait encore la notion de services publics. Ca deviendrait très (trop) technique pour moi de me lancer dans une publication plus poussée, je vais donc définir des niveaux de vie de façon plus triviale :

* la moyenne basse, ce serait une personne ou un couple qui part peu en vacances, qui fait ses courses de façon contrainte dans des enseignes discount, vit dans un petit  logement, souvent excentrée avec de forts temps de transport pour rejoindre son lieu de travail
* la moyenne haute, ce serait une personne ou un couple qui part régulièrement en vacances, n’est pas contrainte sur son budget alimentation, peut régulièrement aller au restaurant, et habite dans un lieu de grande taille et/ou très bien située

C’est simpliste et il y a sans doute plein de nuances à apporter, mais je pense que vous avez l’idée. Et bien, en France le niveau de vie est plutôt élevé si on prend ce type de critères.

Pour l’illustrer, on va prendre trois cas de figure pour avoir quelques ordres de grandeur en tête.

* une personne seule vivant dans un studio
* un couple vivant dans un appartement de 2 pièces
* un couple avec enfant dans un appartement de 3 pièces

### Le logement

En location, la Californie est terriblement chère. Il faut compter aux alentours de 3500 euros pour un 2 pièces en centre ville. C’est plus du double de la France.

||studio|2p|3p| | | |studio|2p|3p|
|:----|:----|:----|:----|:----|:----|:----|:----|:----|:----|
|FR|800|1400|1800| | |US|2000|3500|5000|



Sources :
* [seloger](https://www.seloger.com/prix-de-l-immo/location/pays/france.htm)
* [combien-coute.net](https://www.combien-coute.net/loc3pieces-centre/californie/san-francisco/)
* [blog d’un expat à SF](https://julien-bacal.com/cout-vie-san-francisco/)

A l’inverse à l’achat, selon [combien-coute.net](https://www.combien-coute.net/prixm2-centre/californie/san-francisco/), le prix au m² est proche entre Paris et SF, environ 10k.

### La nourriture

On retrouve ici un facteur entre 2 et 3 fois le cout en France.


| |personne seule|couple|couple avec enfant| | | |personne seule|couple|couple avec enfant|
|:----|:----|:----|:----|:----|:----|:----|:----|:----|:----|
|nourriture|300|600|880| | | |750|1400|2800|



Sources:
* [unaf](https://www.unaf.fr/expert-des-familles/budgets-types/)
* [blog d’un expat à SF](https://julien-bacal.com/cout-vie-san-francisco/)

Pour avoir été quelques fois à San Francisco, le budget restaurant est, lui aussi, excessif.

### La santé

En France on a la sécu, plus les mutuelles d’entreprises. Globalement, à part le dentaire et l’optique, on est plutôt bien remboursé.

Aux US, on va trouver aussi les mutuelles d’entreprise, mais pas de sécu. Le programme de sécu est réservé aux personnes à faibles revenus (et c’est spécialement en Californie, pas ailleurs).
Les mutuelles ont des franchises et le reste à charge peut être conséquent.
Par exemple une appendicectomie, c'est 30k à payer avec parfois des franchises à 5k.
On va également trouver des mutuelles avec un nombre max de visites annuelles chez le ou la médecin. Chaque visite supplémentaire peut aller de 85 pour un(e) généraliste et 300 USD pour un(e) spécialiste. Certain(e)s spécialistes ne sont de toute façon consultable qu’en dehors des parcours conventionnés.

Et puis il ne faut pas être au chômage pour avoir une mutuelle d’entreprise…

En fin de compte, la santé aux US est l’une des plus chères du monde, et même avec une mutuelle d’entreprise on peut ressentir la différence.

### L’école

L’école publique, comme en France, est gratuite (enfin, pas gratuite, mais financé par nos impôts si vous préférez).  
La différence se jouera surtout si vous souhaitez passer par des écoles privées, mais ce n’est pas une fatalité.  
Par contre, il n’y a pas d’école obligatoire avant la primaire. Donc les crêches et maternelles sont payantes et là, c’est une autre paire de manches.  
Il faut compter entre 20 et 40k l’année selon les écoles.  
Les études secondaires en fac sont également payantes avec des prix à l’année entre 20 et 60k pour les plus prestigieuses comme [Stanford](https://yourdreamschool.fr/etudier-a-letranger/etudier-aux-etats-unis/etudier-a-luniversite-de-stanford/). Le sujet de [la dette étudiante](https://fr.wikipedia.org/wiki/Dette_%C3%A9tudiante) est d’ailleurs source d’inquiétude pour de nombreux analystes qui y voient les graines de la prochaine crise.

## Conclusion

On ne va pas faire le tour de toutes les catégories, l’habillement, internet, etc. Mais globalement, tout est environ 2 à 3 fois plus cher aux US, et encore plus en Californie que dans le reste des US. Donc il est plutôt logique d'être payé 2 à 3 fois plus également.

Et vous l’avez vu plus haut, en moyenne, ce n’est pas le cas. Oui les différences de revenus sont importantes. Mais le coût de la vie l'est aussi.

Autrement dit, sur le niveau de vie perçu, une personne entre 60 et 70k brut en France peut s’en sortir tout aussi bien, voire mieux qu’une personne avec 130-150k aux US.

Et la personne avec 100k brut en France, qui fait partie des exceptions il faut bien le comprendre, sera dans une position égale ou plus confortable que celui qui gagne 200k aux US.

Par contre, comme on a pu le voir dans le dernier billet, ce n’est pas anecdotique de dépasser les 200k, notamment avec les stocks, aux US. Et dans ce cas-là effectivement, le niveau de vie sera supérieur à ce qu’on peut connaître ici.

## In my humble opinion

Je vais ouvrir ici une parenthèse pour exprimer un avis personnel qui fera office de seconde conclusion.

J’ai démarré ma carrière à un moment où la tech en France était peu attractive et j’étais très attiré par aller bosser aux USA. La tech US pour moi est l’une des plus dynamique et innovante qui soit.
Encore récemment je suis allé plusieurs fois pour le travail à San Francisco et l’énergie qui s’en dégage est décoiffante. Il faut le voir pour le comprendre. Chaque voyage m’a donné l’envie de rester y travailler pour vivre cette expérience.

Cependant, la tech en France et en Europe est devenue bien plus attractive ces 10 dernières années. Ce n’est pas encore le même niveau, loin de là, mais suffisamment pour trouver son bonheur. 

Si on ne regarde que l'aspect financier, la possibilité de s’enrichir fortement existe aux US. Mais, le nombre de personnes qui le font vraiment reste faible en proportion. Beaucoup ont un “american way of life” agréable, mais sans être largement supérieur à celui qu’on trouvera en France. Un(e) CSP+ en France sera en mesure d’aller régulièrement au restaurant, pourra s’acheter de l’alimentation bio, trouver des aliments de qualité, avoir plusieurs activités de loisir sans que ce soit trop onéreux. Et le niveau de vie sera encore plus intéressant dans des villes moins chères comme Lyon, Nantes ou Bordeaux.

Au-delà du salaire, le niveau de vie, ce sont aussi les services dont on bénéficie. Alors oui, les services se dégradent en France. Mais je déconseille de tenter d’être malade et au chômage aux US pour voir la différence.

Enfin il y a des aspects très subjectifs. J’aime la qualité et la beauté des villes ou des paysages en France. Baladez-vous dans le Vieux Lyon, à Montmartre ou sur la place de la comédie de Montpellier, il y a peu ou pas d'équivalent aux US. (J’adorerais voir les grands parcs par contre (Yosemite, Yellowstone etc…).)
Attention, j’aime bien New York pour visiter, mais je ne serais pas capable de vivre dans une mégalopole comme ça, je trouve ça étouffant. Et personnellement, je suis très dérangé par le fait qu'une grande partie de la population à San Francisco soit à la rue.

Bref, pour une personne jeune, célibataire, en bonne santé et qui veut baigner dans un écosystème tech très dynamique, où l’innovation est permanente, les US (enfin surtout la Californie et quelques hubs tech) sont encore incroyables. Mais y aller pour l’aspect financier et le niveau de vie, vous pourriez être surpris, pas forcément déçus, mais surpris. 


