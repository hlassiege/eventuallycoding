---
id: "1606"
title: "les métiers de l'ingénierie informatique vont-ils disparaitre ?"
description: "Ok le titre est un peu putaclick :)  
Mais je ne lance pas ce sujet par hasard.  
J'ai lu récemment plusieurs très bons articles sur ce thème  
[Je fa..."
date: "2020-09-21"
categories: 
  - "waza"
tags: 
  - "nocode"
img: "Strip-Les-specs-cest-du-code-650-final.jpg"
cover: "cover3.jpg"
---

Ok le titre est un peu putaclick :)  
Mais je ne lance pas ce sujet par hasard.  
J'ai lu récemment plusieurs très bons articles sur ce thème  
[Je fais partie d'une espèce en voie d'extinction](https://www.emaxilde.net/posts/2020/07/18/je-fais-partie-d-une-espece-menacee-d-extinction.html)  
[Au secours le métier d'ops va disparaitre](https://blog.zwindler.fr/2020/07/29/au-secours-le-metier-dops-va-disparaitre/)  
et celui que j'ai sans doute préféré : [l'alignement de l'esprit importe plus que celui du code](https://www.emaxilde.net/posts/2020/08/01/l-alignement-de-l-esprit-importe-plus-que-celui-du-code.html)

Or c'est un sujet qui me parle car je suis arrivé sur le marché au même moment que l'approche [MDA](https://fr.wikipedia.org/wiki/Model_driven_architecture) (2001)  
Cette approche faisait le buzz à ce moment là, enfin pour autant que ce soit possible sans réseaux sociaux, blogs etc…  
Pour simplifier, cette méthode avait pour objectif de modéliser entièrement des applications à base de schémas UML, schémas qui permettent ensuite de générer le code de l'application.  
Sur le papier, c'était convaincant pour un jeune diplômé et j'avais été tenté de regarder en détail à l'époque.  
Mais les outils donnés et leurs limitations n'ont jamais permis à cette approche de décoller.

En 2016 (donc bien longtemps après) commitstrip sortait cette image qui résumait plutôt bien MDA :

![Strip-Les-specs-c'est-du-code-(650-final)](/images/Strip-Les-specs-cest-du-code-650-final.jpg)

https://www.commitstrip.com/fr/2016/08/25/a-very-comprehensive-and-precise-spec

Bref, pas d'inquiétude pour le métier de développeur ?

## Simplification ou complexification ?

C'est une question loin d'être répondue. De très nombreuses tâches d'ingénierie sont désormais bien plus simples qu'avant.  
Est-ce qu'on se plaindra de ne plus développer sur cartes perforées ? Ou d'attendre des listings de compilation sur MVS ?  
Combien utilise des générateurs de code pour des formulaires de back office, des schémas SQL etc… ?  
Combien ont utilisé des frameworks "haute productivité" ? Si l'expression n'est plus trop utilisée, rappelez vous des Grails, Play Framework, Spring Roo, tous des adaptations de ce qui existait déjà avec Rails et Django.

Le ticket d'entrée a grandement chuté pour réaliser des applications. Que ce soit via les outils actuels (IDE, frameworks), les plateformes de run (PAAS, DBAAS, SAAS), les pratiques qui sont plus matures (CI, CD) ou tout simplement l'open source qui a permis de mettre en commun des trésors d'ingénierie.

Paradoxalement il y a donc deux sentiments dans ce métier qui semblent s'opposer :

- nous sommes tous globalement plus productifs qu'avant pour réaliser les mêmes tâches
- un fort sentiment de "fatigue" (cf javascript fatigue) où malgré une veille constante et poussée il est devenu impossible de suivre toutes les évolutions technologiques

Ce paradoxe s'explique, si en effet nous sommes plus productifs et que l'industrie du logiciel est plus efficace, cela a aussi renforcé la demande en programmes informatiques et la complexité générale qui en résulte pour répondre à des problèmes toujours plus variés.

## Luddisme et sophisme luddite

C'est une des thèses défendu par ce que nous pourrons appeler les techno-optimistes : [le sophisme luddite](https://fr.wikipedia.org/wiki/Ch%C3%B4mage_technologique#Sophisme_Luddite) qui dit globalement que si le progrès technologique à court terme peut provoquer des pertes d'emploi, sur le long terme il ne faut pas négliger les **effets de compensation** qui résulte des **opportunités** créées par ces progrès.

Mais tout le monde ne partage pas ce point de vue. Je vais paraphraser Wikipedia sur le même chapitre pour exposer leur raisonnement :

1. les machines (programmes) peuvent effectuer des tâches faciles.
2. Le périmètre de ce qui est considéré comme facile évolue à mesure que nos connaissances s'améliorent et évolue vite
3. le travail humain qui dépasse le "facile" nécessite de plus en plus des compétences cognitives fortes réservant le travail à une minorité de personnes

Lorsque l'automatisation des tâches simples va plus vite que la détection de nouvelles opportunités (2 va plus vite que 3) alors on détruit de l'emploi.

Faisons un petit exercice et effectuons le parallèle avec l'automobile.  
L'automobile est au départ (avant 1910) réalisé par des artisans très qualifiés, en petite série.  
Les méthodes de travail évoluent et permettent des productions en grande série grace à un morcellement du travail en petites tâches simples.  
Les tâches simples vont finir par progressivement être automatisé.

Si je grossissais le trait, on est passé d'une petite population d'artisans, à une grosse population d'ouvriers, progressivement remplacé par des machines conçus par une petite poignée d'ingénieurs.  
Sur le long terme, l'industrie automobile, et celle du transport en général, va créer de nombreux autres métier et révolutionner l'activité humaine, créant donc de nombreux emplois mais pas dans le secteur de la production automobile lui-même.

_Avertissement : C'est un exercice purement théorique et je n'ai pas vérifié ces assertions avec des chiffres. Il est possible que la forte demande en voiture notamment dans les pays émergents, les ruptures technologiques (voiture thermique vs voiture hybride vs voiture électrique, voiture autonome), les multiples incitations à renouveler le parc automobile fasse que nous soyons toujours dans une phase où les effets de compensation entrainent toujours une hausse de l'emploi dans le secteur. Cf [cet article](https://www.bilan.ch/economie/lindustrie-automobile-mondiale-en-7-chiffre) qui semble montrer que l'industrie se porte bien._

En bref, l'innovation a créé des emplois, en a remplacé et créé d'autres indirectement par effets d'opportunités.  
Est ce que la somme des emplois créés est supérieur et/ou sera supérieure dans le futur, la question est plus difficile.  
Ca vous rappellerait pas la [théorie de la destruction créatrice de Schumpeter](https://fr.wikipedia.org/wiki/Destruction_cr%C3%A9atrice) ?

## L'informatique au coeur d'une destruction créatrice ?

Si on revient à l'informatique on peut observer les mêmes phénomènes. D'une informatique réservé à quelques personnes dans les années 60/80, on est arrivé à une production massive de logiciels.  
Notre maitrise du domaine a permis de remplacer progressivement des tâches et menace probablement quelques métiers. Mais les effets d'opportunités compensent toujours.

Le point marquant de la numérisation (la dématérialisation comme on l'appelait avant) c'est qu'elle touche aux emplois de nombreuses autres professions. De fait elle accélère significativement le déséquilibre entre créations d'opportunités et destructions d'emplois.

La période qui s'ouvre avec l'essor de l'IA va encore plus accentuer ce déséquilibre, dans tous les métiers, y compris les plus qualifiés. Et ce qui est assez différent des révolutions technologiques précédentes c'est la vitesse de destruction (la fameuse [singularité technologique](https://fr.wikipedia.org/wiki/Singularit%C3%A9_technologique)).  
Sur ce point je paraphrase [le billet d'Olivier Poncet](https://www.emaxilde.net/posts/2020/08/01/l-alignement-de-l-esprit-importe-plus-que-celui-du-code.html) et je m'en excuse. Mais n'hésitez pas à aller le lire.

Bref, "les métiers de l'ingénierie informatique vont-ils disparaitre ?", eh bien sur leurs formes actuelles, je ne serais pas surpris. De la même façon qu'un informaticien des années 80 ou 90 serait bien dépaysé aujourd'hui. Ce n'est pas tant des disparitions que des évolutions.

Je serais bien en peine de savoir à quoi ressemblera ces métiers ou les nouveaux métiers qui seront créés d'ici 2040.

Il existe plein de possibilités, certaines plus réjouissantes que d'autres.  
Si on considérait par exemple que notre capacité à créer de nouveaux usages, de nouvelles opportunités devait aller significativement moins vite que notre capacité à automatiser les tâches simples (Cf plus haut le chapitre sur le luddisme), alors nous pourrions atteindre un effet de seuil sur les créations d'emplois et avoir une petite portion d'experts qui travaillerait sur des outils massivement utilisés par de nombreuses personnes. Personnes qui se focaliseront d'avantage sur le métier que la technique. En gros, une petite population d'experts au service d'une grande population d'intégrateurs (des assembleurs de briques lego).

Attention, ne lisez pas de travers. Ce ne serait pas forcément négatif. Il y aurait toujours une expertise à avoir, il faudrait comprendre son métier, comprendre s'il existe des briques sur étagères qui peuvent vous aider, comprendre leurs limitations, proposer des palliatifs. Il y a des enjeux de conception de systèmes, de flux d'informations. L'ingénierie a encore de beaux jours devant elle. Mais elle pourrait avoir une forme différente.

A l'inverse si on considère que nous sommes très loin d'avoir atteint un pic sur nos capacités d'innovations, alors toutes les simplifications/automatisations actuelles vont conduire pendant encore longtemps à créer de nouveaux types d'emplois et de spécialités.  
Voyons cela comme de multiples branches qui vont partir des mêmes racines. On commence déjà à parler de certains nouveaux métiers : search engineer, dataops, machine learning engineer, développeur VR etc… Ce sera cependant de plus en plus complexe de maitriser tout les aspects de création d'un logiciel (le fameux mythe du fullstack), de faire les bons choix en début de carrière ou de pivoter en cours de carrière.

## C'est un peu l'histoire du nocode non ?

Si vous ne savez pas ce que c'est que le nocode, c'est exactement cela, des logiciels créés par une poignée d'experts qui permettent de donner des outils simples à une majorité de gens.  
Pour avoir une intro plus complète : [lire ce billet](https://blog.hosakka-stud.io/cest-quoi-le-nocode/)

Aujourd'hui les outils nocode permettent de lancer de très nombreux services sans savoir coder.  
Je vous invite à regarder ce site qui recense quelques outils nocode: [Quels outils no code ?](https://quels-outils-nocode.fr/)

Pour beaucoup de développeurs je suis sûr que le nocode est vu avec méfiance ou arrogance. Mais si c'est votre cas, je vous invite à plus d'humilité et de curiosité.  
Vous mêmes vous utilisez des services de plus en plus évolués qui vous ont évité de devoir devenir expert en cartographie (google maps), moteur de recherche pour du e-commerce (Algolia) etc… Alors ne soyez pas surpris qu'il en soit de même pour créer une landing page, automatiser le traitement d'un formulaire pour alimenter une base de contacts et j'en passe.  
Et c'est une bonne nouvelle. Cela permet a de nombreux entrepreneurs de lancer des services plus simplement. Cela permet à des services marketing ou commerciaux d'être plus autonomes.

## Evolution de nos rôles de leaders techniques

En tant que leader technique mon métier évolue. J'ai une obligation de veille constante pour comprendre le panorama technologique et les opportunités exploitables pour le métier de mon entreprise.  
Je dois constamment chercher le bon curseur entre simplicité et besoin de personnalisation et de savoir quand cette personnalisation va être un vrai facteur différentiant au point de justifier un développement maison. Bref, je dois éviter de faire de l'ingénierie pour faire de l'ingénierie mais je dois rechercher la valeur que cela peut créer. Et le nocode dans son ensemble doit faire partie de notre scope de veille et de notre gamme d'outils à disposition.

Sur le fameux make or buy je vous recommande chaudement cette présentation de Julien Lemoine CTO d'Algolia :

https://www.youtube.com/watch?v=fm\_tMvOMXb8

Bon et puisqu'il faut conclure. Gardez toujours la tête hors de l'eau, demandez-vous ce que vous pouvez apporter en dehors de votre expertise technique spécifique et soyez ouvert au changement.

a+
