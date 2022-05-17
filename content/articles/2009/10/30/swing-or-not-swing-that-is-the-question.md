---
id: "135"
title: "Swing or not Swing, that is the question"
description: "## Peut-on faire un client lourd en Java ?

Ayant bossé en Java je me suis heurté à Swing comme on peut se heurter à un mur. Ouch, quand on vient du W..."
date: "2009-10-30"
categories: 
  - "waza"
tags: 
  - "java"
  - "swing"
img: ""
cover: "cover2.jpg"
---

## Peut-on faire un client lourd en Java ?

Ayant bossé en Java je me suis heurté à Swing comme on peut se heurter à un mur. Ouch, quand on vient du Web on déguste fort avec Java et son API pour client lourd.  Pour autant, la techno est elle valable ou non, et que vaut-elle par rapport à J2EE ?

### Swing avant 2007

Avant 2007 Sun a clairement focalisé son attention sur J2EE ce qui leur a permis de gagner en popularité. Le nombre de frameworks existant et la richesse des librairies proposées lui ont permis de s'assoir durablement comme "langage pour faire du Web".

Seulement voilà, à côté de ça J2SE, la partie réservée aux postes de travail, a par contre était délaissé. Pourquoi ? [Selon James Gosling](http://pro.01net.com/editorial/363213/james-gosling-%28sun%29-java-sur-le-poste-client-nest-pas-a-la-hauteur-aujourdhui/ "interview james gosling"), la faute au conflit qui opposait alors Sun et Windows sur le déploiement de la JVM Windows sur les postes par défaut. Sun n'aurait pas souhaité s'investir dans J2SE tant que Windows proposerait sa JVM.

De l'avis du créateur de Java : "_Aujourd'hui, Java sur le poste client n'est pas à la hauteur_" et ce constat est facile à confirmer :

- aucun framework Swing de réelle envergure : pas de JSF, Struts, Wicket, Tapestry etc... si on compare a J2EE
- peu de librairies de composants : Swingx reste experimental.
- un système de look and feel trop complexe, pour preuve le peu de boites capable de créer le leur en comparaison avec le nombre capable de créer des CSS

La difficulté de Swing, notamment la maitrise de la gestion événementielle et de l'EDT n'en font pas une partie de plaisir et au final ce n'est pas étonnant de trouver essentiellement des librairies payantes ([Jide](http://www.jidesoft.com/ "Jide") par exemple qui est très bon) alors qu'on peut en trouver gratuitement à foison en J2EE.

### Swing depuis 2007

Mais voila, depuis 2007 Sun semble vouloir revenir sur J2SE : - James Gosling, créateur de Java [met en avant JavaFx](http://pro.01net.com/editorial/363213/james-gosling-%28sun%29-java-sur-le-poste-client-nest-pas-a-la-hauteur-aujourdhui/ "interview de james gosling") \- [Swingx](http://swinglabs.org/ "swinglabs") tente d'apporter du neuf avec objectif d'être intégré en Java 1.5 - [Aerith](https://aerith.dev.java.net/ "Aerith") déjà présenté en 2006 devient open source , et oui, effectivement c'est une IHM qui déchire pas mal - Romain Guy qui s'était fait connaitre sur Aerith publie avec Chett Haase un très bon bouquin : [Filthy rich clients](http://filthyrichclients.org/ "Filthy rich clients")

Soyons honnête toutefois, le bouquin filthyrichclients s'il démontre qu'on peut faire du très bon travail avec Swing met aussi en évidence que ça ne s'adresse pas à tout le monde. Certaines notions comme le double buffering, les problématiques d'accélération matérielle, les notions de Composite ou de transformation d'images sont très techniques et mettent en oeuvre des notions mathématiques qui ne s'adressent pas à monsieur tout le monde. Qui n'a pas galéré des heures sur des problèmes de glitch graphique, de pixels gris etc...  ?

### Et aujourd'hui ?

Et aujourd'hui 2009, cela me parait toujours moins rose.

- JavaFx peine à décoller et son API n'est pas toujours pas stable (compatibilité 1.1 et 1.2 qui laisse à désirer). A côté de ça, ses concurrents directs comme Flex sont en plein boom avec notamment un sdk qui vient de sortir sur Eclipse
- aucun framework n'a émergé pour cacher la complexité des concepts nés dans Aerith
- Swingx est tellement peu mis à jour qu'il continue toujours à cibler Java 1.5, version en fin de support depuis cette année...

Pourquoi ce manque d'investissement de Sun depuis 2 ans ? Le rachat d'Oracle n'y serait pas étranger ou bien est-ce simplement que 2 ans reste un délai très court ? Nous verrons bien.

Mais personnellement j'ai tendance à être sceptique d'autant que la grande force de J2SE qui était la richesse de ses widgets et la réactivité de son interface est désormais sévèrement concurrencé par les interfaces Web. [GWT](http://code.google.com/intl/fr/webtoolkit/ "GWT") ou [JSF avec IceFaces](http://component-showcase.icefaces.org/component-showcase/showcase.iface "JSF et Icefaces") apportent désormais la même richesse aux webapps et pour un cout nettement moindre.

En conclusion, je ne dénigre pas Swing et je pense que sa chance de survie va reposer comme beaucoup d'autres technologies sur la capacité à la communauté à proposer des outils, des composants, des best practices afin de cacher la complexité du langage. Mais à l'heure actuelle, si on me donne le choix, je partirais pour ma part sur du J2EE classique.
