---
id: "141"
title: "Let's Swing !"
description: "Vous connaissez Swing ? Oui, enfin non, pas la [musique](http://fr.wikipedia.org/wiki/Swing_%28musique%29 \"Musique swing\")... En plus d'avoir fait dan..."
date: "2010-01-28"
categories: 
  - "waza"
tags: 
  - "edt"
  - "substance"
  - "swing"
img: ""
cover: "cover7.jpg"
---

Vous connaissez Swing ? Oui, enfin non, pas la [musique](http://fr.wikipedia.org/wiki/Swing_%28musique%29 "Musique swing")... En plus d'avoir fait danser des générations, il s'agit aussi de la librairie Java pour les interfaces lourdes en Java (ok c'est moins glamour).

A propos de Swing on parle souvent de sa grande complexité et le moins que l'on puisse dire, c'est que ce n'est pas exagéré (là on peut voir la comparaison avec la musique en fin de compte). Profitons de cet article pour revenir sur quelques uns de ces aspects qui en ont déjà dérouté plus d'un  :

- la complexité de la gestion de l'EDT
- les pièges du modèle événementiel.

Si ces deux points viennent souvent en tête des mauvaises pratiques de programmation les plus courantes, leurs effets sont surtout une des causes de [la mauvaise réputation](http://www.developpez.net/forums/d833682-4/java/interfaces-graphiques-java/on-faire-client-lourd-java/ "La mauvaise réputation de Swing") de Swing.

Allez, entrons dans le vif du sujet.

### l'EDT et la gestion des threads

L'un des éceuils majeurs sur beaucoup d'IHM Java c'est la gestion des threads. En effet Swing repose sur un thread principal pour la gestion de l'affichage. Je ne décrirais pas dans le détail l'objet de ce Thread mais celui-ci a pour objectif de repeindre les différentes parties affiché dans un certain ordre. Ce thread appelé EDT (Event dispatcher Thread) suit donc un algorithme relativement séquentiel pour l'affichage. Si vous voulez en savoir plus sur l'EDT, je vous conseille la lecture de [Filthy Rich Clients](http://filthyrichclients.org/ "Filthy Rich Client"), son fonctionnement y est décrit en détail dans plusieurs chapitres.

Ce qu'il faut en retenir, c'est que l'affichage géré par l'EDT n'est pas Thread safe ! Les opérations liées à l'affichage des composants graphiques est monothread et toute mise à jour en dehors de ce thread peut avoir un comportement imprévisible.

Ce qui implique :

- si l'affichage est monothread, il faut placer le traitements longs qui ne sont pas liés à l'affichage dans des threads séparés
- à l'inverse, pour les modifications des composants graphiques il faut poster toutes les demandes de modifications de l'IHM dans l'EDT

sinon vous risquez respectivement :

- d'avoir une application extrèmement lente puisque les traitements sous-jacents vont ralentir l'affichage
- d'avoir des erreurs d'affichage puisque les ordres de repaint ne seront pas executés dans le bon sens

Je vous renvoie à [un excellent article de Romain Guy (Gfx)](http://gfx.developpez.com/tutoriel/java/swing/swing-threading/), co-auteur de Filthy Rich Client justement,  pour plus de détails.

Soyons clairs, débutants comme confirmés peuvent tomber dans ces pièges. Je vais surtout parler des problèmes d'affichage car bien souvent les problèmes de lenteur sont plus simples à débusquer (ils arrivent à des moments précis du coup on devine "facilement" le traitement qui ralentit).

#### Les problèmes d'affichage

Les problèmes d'affichage peuvent être beaucoup plus pervers. Vous avez les traditionnels écrans gris. Mais vous pouvez aussi avoir des choses plus vicieuses :

- des doubles affichages de fenêtre fantomes,
- des textes incomplets,
- des pertes de focus etc...

Un problème d'affichage comme je l'indiquais résulte de l'EDT qui tente de raffraichir l'écran et l'ensemble des informations visibles avec des informations que vous lui avez donné de facon incohérente. Par exemple vous avez modifié un tableau hors de l'EDT ou repositionné une fenêtre etc...

Outre le symptome graphique, vous pouvez rencontrer ce type de trace dans votre application :

Exception in thread "AWT-EventQueue-0" java.lang.ArrayIndexOutOfBoundsException: Array index out of range: 5
 at java.util.Vector.get(Unknown Source)
 at com.developpez.table.TableSelectionModel.isSelectionEmpty(TableSelectionModel.java:565)
 at javax.swing.DefaultListSelectionModel.clear(Unknown Source)
 at javax.swing.DefaultListSelectionModel.changeSelection(Unknown Source)
 at javax.swing.DefaultListSelectionModel.changeSelection(Unknown Source)
 at javax.swing.DefaultListSelectionModel.setLeadSelectionIndex(Unknown Source)
 at com.developpez.table.TableSelectionModel.clearSelection(TableSelectionModel.java:94)
 at com.developpez.table.MyInputBean.focusGained(MyInputBean.java:99)
 at java.awt.AWTEventMulticaster.focusGained(Unknown Source)
 at java.awt.Component.processFocusEvent(Unknown Source)
 at java.awt.Component.processEvent(Unknown Source)
 at java.awt.Container.processEvent(Unknown Source)
 at java.awt.Component.dispatchEventImpl(Unknown Source)
 at java.awt.Container.dispatchEventImpl(Unknown Source)
 at java.awt.Component.dispatchEvent(Unknown Source)
 at java.awt.KeyboardFocusManager.redispatchEvent(Unknown Source)
 at java.awt.DefaultKeyboardFocusManager.typeAheadAssertions(Unknown Source)
 at java.awt.DefaultKeyboardFocusManager.dispatchEvent(Unknown Source)
 at java.awt.Component.dispatchEventImpl(Unknown Source)
 at java.awt.Container.dispatchEventImpl(Unknown Source)
 at java.awt.Component.dispatchEvent(Unknown Source)
 at java.awt.EventQueue.dispatchEvent(Unknown Source)
 at java.awt.EventDispatchThread.pumpOneEventForHierarchy(Unknown Source)
 at java.awt.EventDispatchThread.pumpEventsForHierarchy(Unknown Source)
 at java.awt.EventDispatchThread.pumpEvents(Unknown Source)
 at java.awt.EventDispatchThread.pumpEvents(Unknown Source)
 at java.awt.EventDispatchThread.run(Unknown Source)

_problème de focus sur une table modifié hors de l'EDT_

 java.lang.ArrayIndexOutOfBoundsException: No such child: 2
 at java.awt.Container.getComponent(Container.java:237)
 at javax.swing.JComponent.rectangleIsObscured(JComponent.java:3702)
 at javax.swing.JComponent.paint(JComponent.java:806)
 at javax.swing.JLayeredPane.paint(JLayeredPane.java:557)
 at javax.swing.JComponent.paintWithOffscreenBuffer(JComponent.java:4787)
 at javax.swing.JComponent.paintDoubleBuffered(JComponent.java:4740)
 at javax.swing.JComponent.\_paintImmediately(JComponent.java:4685)
 at javax.swing.JComponent.paintImmediately(JComponent.java:4488)
 at javax.swing.RepaintManager.paintDirtyRegions(RepaintManager.java:410)
 at javax.swing.SystemEventQueueUtilities$ComponentWorkRequest.run(SystemEventQueueUtilities.java:117)
 at java.awt.event.InvocationEvent.dispatch(InvocationEvent.java:189)
 at java.awt.EventQueue.dispatchEvent(EventQueue.java:478)
 at java.awt.EventDispatchThread.pumpOneEventForHierarchy(EventDispatchThread.java:201)
 at java.awt.EventDispatchThread.pumpEventsForHierarchy(EventDispatchThread.java:151)
 at java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:145)
 at java.awt.EventDispatchThread.pumpEvents(EventDispatchThread.java:137)
 at java.awt.EventDispatchThread.run(EventDispatchThread.java:100)

_problème de repaint sur des zones modifié hors de l'EDT_

Avec cette stacktrace on se rend compte de la difficulté du problème : ce n'est pas notre code ^^ Donc en debug il y a de grands risques que l'on ne voit rien. C'est vrai qu'avec un peu d'expérience on comprend rapidement qu'on est face à un problème d'EDT mais traquer manuellement le code responsable reste pénible.

#### Les solutions

Heureusement, certains ont pris le temps de réfléchir à cet épineux problème et il existe plusieurs solutions.

Attention, toutes les solutions décrites ci-dessous s'attachent à la détection des bouts de codes fautifs. Une fois le code repéré, c'est à vous de le corriger. Ce ne sont pas des fix magiques qui rendent clean votre code.

##### Swinghelper ([https://swinghelper.dev.java.net/](https://swinghelper.dev.java.net/ "SwingHelper"))

Au sein du swinglab on retrouve Swinghelper, un projet d'utilitaires qui permet justement de détecter les mises à jour hors de l'EDT via un ThreadCheckingRepaintManager. Ce repaint manager permet de détecter que les ordres de repaint ont été envoyé dans l'EDT, dans le cas contraire on affiche une belle stacktrace qui permet de retrouver le bout de code fautif. Cependant cette méthode a pour défaut qu'elle ne prend pas en compte les appels qui n'envoient pas de repaint (les getters par exemple). C'est déjà une bonne première piste et c'est assez peu intrusif.

##### Substance ([https://substance.dev.java.net/](https://substance.dev.java.net/ "Substance"))

La c'est un peu plus qu'une solution de détection de la mauvaise utilisation de l'EDT et c'est assez intrusif. Substance est une librairie de look and feel java assez sympa dont j'ai déjà parlé [dans un précédent billet](http://localhost/localweb/wordpress/?p=136 "Substance, une librairie « hype » pour Swing"). Et c'est Substance qui rajoute un check de cohérence dans votre application Swing. Si on se réfère à [l'article de l'auteur](http://www.pushing-pixels.org/?p=368), dès qu'un composant est créé, Substance va faire un check lors de l'appel à createUI. Ca ne prend pas en compte tout les cas de figure (seul les instanciations de composants sont blindés) mais c'est une sécurité supplémentaire pour éviter une mauvaise programmation. Utiliser Substance juste pour cette fonctionnalité serait ridicule, par contre si vous l'avez adopté pour ces look and feel cette fonctionnalité est un bonus appréciable.

##### Les aspects

La [programmation par aspect](http://ewawszczyk.developpez.com/tutoriel/java/spring/aop/ "Programmation par aspect") trouve ici une bonne application.

L'utilisation de l'AOP pour le débuggage Swing a été décrite [sur l'article suivant](http://weblogs.java.net/blog/alexfromsun/archive/2006/02/debugging_swing.html "Swing debug") en anglais par Alexander Potochkin. L'aspect créé par l'auteur permet ici d'enrober les appels sur les JComponents pour détecter tout appel Swing hors de l'EDT.

Le code de l'aspect :

import javax.swing.\*;

aspect EdtRuleChecker
{
 private boolean isStressChecking = true;

 public pointcut anySwingMethods(JComponent c):
 target(c) && call(\* \*(..));

 public pointcut threadSafeMethods():
 call(\* repaint(..)) ||
 call(\* revalidate()) ||
 call(\* invalidate()) ||
 call(\* getListeners(..)) ||
 call(\* add\*Listener(..)) ||
 call(\* remove\*Listener(..));

 //calls of any JComponent method, including subclasses
 before(JComponent c): anySwingMethods(c) && !threadSafeMethods() &&    !within(EdtRuleChecker)
 {
 if(!SwingUtilities.isEventDispatchThread() && (isStressChecking || c.isShowing()))
 {
 System.err.println(thisJoinPoint.getSourceLocation());
 System.err.println(thisJoinPoint.getSignature());
 System.err.println();
 }
 }

 //calls of any JComponent constructor, including subclasses
 before(): call(JComponent+.new(..))
 {
 if (isStressChecking && !SwingUtilities.isEventDispatchThread())
 {
 System.err.println(thisJoinPoint.getSourceLocation());
 System.err.println(thisJoinPoint.getSignature() +
 " \*constructor\*");
 System.err.println();
 }
 }
}

Cet aspect permet d'intercepter toutes les méthodes non thread safe pour les afficher. Evidemment il y a un peu plus de mise en place pour l'utiliser. Personnellement j'ai utilisé le [plugin AspectJ pour eclipse](http://www.eclipse.org/ajdt/ "Plugin AspectJ pour Eclipse") qui m'a permis d'utiliser directement aspectJ au runtime lors d'une séance de debugging eclipse.

Attention, certains pourraient vouloir modifier cet aspect pour directement reposter les évènements dans l'EDT avec [SwingUtilitiesHelper.invokeAndWait](http://java.sun.com/javase/6/docs/api/javax/swing/SwingUtilities.html#invokeAndWait%28java.lang.Runnable%29 "Swing utilities"). Je le déconseille, ce serait une rustine. Nettoyez plutôt votre code.

##### Conclusion

Voilà, rien de magique mais des méthodes très efficaces qui selon les contextes devraient vraiment vous aider. J'ai personnellement utilisé les aspects sur une appli un peu vieillote sur laquelle j'ai travaillé et sur laquelle la rêgle de l'EDT n'avait jamais été respecté. Sur un code même modeste de 40 000 lignes je ne m'en serais jamais sorti manuellement ^^

#### Le modèle évènementiel

En Swing on parle souvent de [programmation évènementielle](http://fr.wikipedia.org/wiki/Programmation_%C3%A9v%C3%A9nementielle "Programmation évenementielle"). Plusieurs types d'évènements peuvent être "écoutés" pour déclencher des actions : click sur un bouton, gain de focus, etc....

Dans ce type de programmation on utilise souvent le design pattern Observer. Je vous laisse lire l'article suivant si vous ne connaissez pas ce pattern : [http://www.design-patterns.fr/Observateur.html](http://www.design-patterns.fr/Observateur.html). Or ce design pattern a un défaut assez commun si on l'utilise mal : les fuites mémoires

Prenons un exemple simple :

1. un observateur O
2. un observé A s'inscrit auprès de O
3. l'observé A n'est plus utilisé pour une raison quelconque

Dans cet exemple, le développeur n'utilisant plus l'objet A va s'attendre à ce que celui-ci soit collecté par le garbage collector. Or il n'en sera jamais rien puisqu'une référence subsiste auprès de O qui continue d'observer A. Il aurait fallu que l'objet A se désinscrivent pour ne plus conserver de références actives.

(Plus d'info sur le garbage collector [ici](http://gfx.developpez.com/tutoriel/java/gc/ "Garbage collector"))

Ce type de problèmes est rencontré très fréquemment dans les applications Swing. Je l'ai rencontré lors d'une mission ou ce design pattern avait été beaucoup utilisé sans jamais penser à la désinscription des observés. Lors des phases de développement les concepteurs n'avaient pas détecté ce problème. Mais en production, au bout de plusieurs heures d'utilisation l'application a commencé à beaucoup consommé et être très lente, avant de finalement crasher avec un OutOfMemoryError.

Ok, mais que faire sur une application existante pour laquelle la recherche de ces mauvaises utilisations va prendre beaucoup de temps et risque de ne pas être triviale ?

##### Une solution, utiliser les weak references !

La WeakReference va vous permettre de n'intervenir que sur le code des observateurs et donc de centraliser votre correction.

On peut en trouver une implémentation sur un [article de Romain Guy sur developpez.com](http://gfx.developpez.com/tutoriel/java/reference-memoire/).

Voici un code succinct qui vous permettra de la comprendre :

protected void fireMessageCalled(MyEvent e)
{
	int count = listeners.size();
	for (int i = 0; i < count; i++)
	{
		WeakReference ref = (WeakReference) listeners.elementAt(i);
		final myListener listener = (myListener) ref.get();
		if (listener != null)
		{
			listener.messageCalled(e);
		} else
		{
			listeners.remove(ref);
		}
	}
}

Ici l'évènement déclenché appelle la méthode fireMessageCalled. Celui ci parcourt la liste des listeners (les observés) et les notifie. Si un des listener n'est plus référencé, alors sa référence sera nulle car nous avons utilisé des références faibles (WeakReference).

Une autre implémentation pour simplifier le code pourra être d'utiliser une [WeakHashMap.](http://java.sun.com/j2se/1.5.0/docs/api/java/util/WeakHashMap.html "WeakHashMap")

Cette fois c'est la collection qui va gérer la suppression des éléments qui ne sont plus référencés.

**Attention** cependant, la clé dans la map sera l'observé lui-même. Il faut donc implémenter les méthodes hashcode et equals et faire en sorte que ces méthodes renvoient un résultat qui ne varie pas au cours du temps (immuabilité de la clé). Je vous invite à lire attentivement les petits warnings indiqués dans la JavaDoc de cette classe sur son utilisation.

##### Conclusion

Cette méthode ne pourra s'appliquer qu'à votre code et vous évitera d'implémenter des méthodes pour désinscrire les observés. Cependant que cela ne vous donne pas de mauvaises habitudes, ces méthodes existent pour les observateurs de l'API Swing et si elles sont la c'est pas pour la déco !

Voilà, en espérant que ces petites astuces auront pu vous aider. En me basant sur ce que j'ai vu ce sont deux problèmes qui reviennent souvent, y compris pour des développeurs confirmés alors ne faites pas l'impasse dessus !

a+
