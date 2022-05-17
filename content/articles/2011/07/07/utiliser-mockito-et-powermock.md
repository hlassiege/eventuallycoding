---
id: "380"
title: "Utiliser Mockito et PowerMock"
description: "[![](/images/mockito.jpg \"mockito\")](http://eventuallycoding.com/wp-content/uploads/2011/07/mockito.jpg)Vous connaissez peut-être déjà [Mockito](http:..."
date: "2011-07-07"
categories: 
  - "waza"
tags: 
  - "java"
  - "mockito"
  - "powermock"
  - "testunitaire"
img: "mockito.jpg"
cover: "cover2.jpg"
---

[![](/images/mockito.jpg "mockito")](http://eventuallycoding.com/wp-content/uploads/2011/07/mockito.jpg)Vous connaissez peut-être déjà [Mockito](http://mockito.org/) ? En fait vous connaissez même surement pour ceux qui ont eu la chance d'être présent à la [première soirée Marmite des JDuchess](http://jduchess.org/duchess-france/blog/marmite-soiree-crumble-pour-la-premiere-edition/).

Et pourquoi j'en parle ? Bon, pas seulement parce que leur logo est un mojito géant et que j'adore cette boisson (\*), mais tout simplement pour présenter quelques astuces d'utilisation avec PowerMock.

\* inconsciemment ca doit jouer un peu quand même

### Mais c'est quoi Mockito ?

Petit retour aux sources, selon [le site officiel](http://mockito.org/) : "Mockito is a mocking framework that tastes really good."

### Et pourquoi Mockito ?

1. Parce que son API utilise un DSL agréable à utiliser, lisible, typé :
    
    when(mockedList.get(0)).thenReturn("first");
    when(mockedList.get(2)).thenThrow(new ArrayOutOfBoundException());
    
2. Pas de record-replay obligatoire

Ca c'est pour ceux qui connaissent EasyMock, pas besoin de préciser le comportement attendu de votre mock dans ses moindres détails. On se focalise juste sur le resultat produit par l'objet testé, pas sur sa facon d'utiliser le mock. (A noter que EasyMock permet désormais de créer des mocks sans nécessité de préciser son comportement avec createNiceMock)

### Et pourquoi Powermock ?

Parce que Mockito tout seul ne permet pas de gérer quelques cas sur du code "intestable". Et ce que j'appelle intestable, alors ça, je suis sur que vous en avez déjà vu (ou alors vous avez une veine incroyable et je veux savoir où vous travaillez !) :

- des méthodes statiques de partout (getInstance, Lookup, etc...)
- des blocs statiques
- un constructeur qui fait papa-maman (j'adore cette expression...)

Pour info, vous avez déjà un bon article sur le sujet mais concernant JMockit : [http://fchabanois.developpez.com/tutorial/java/jmockit/](http://fchabanois.developpez.com/tutorial/java/jmockit/)

### Mais revenons aux fondamentaux, pourquoi utiliser des mocks ?

Tout simplement parce que quand on parle de test unitaire, on fait référence à des tests **UNITAIRES** ! Et tester unitairement un objet ça veut dire le tester en isolation, donc pas d'appel à une base de données, à une file de messages etc... Dans l'idéal, un test unitaire ne teste qu'une seule classe. On utilise d'ailleurs une convention simple et assez parlante pour cela : MonObjet est testé par MonObjetTest (ou TestMonObjet).

_Point personnel, sur ce dernier point, je suis plus coulant. Un test reste unitaire du moment que je n'utilise pas de ressources externes (base de données etc...) mais j'accepte l'utilisation d'autre classes du moment que je maitrise leurs propres interactions._

Et donc pour tester en isolation nous allons avoir besoin des fausses implémentations de toutes les dépendances de notre objet. Nous pourrions les écrire toutes, en admettant que chaque dépendance soit utilisé via une interface mais ce serait très fastidieux. Utiliser une librairie de mock permettra donc d'éviter une tâche bien pénible.

### Passons à la pratique

Mockito est fourni avec runner Junit que l'on peut activer comme suit :

@RunWith(MockitoJUnitRunner.class)
public class TestMyObjet
{
@InjectMocks
private MyObject myObjet = new MyObject();

@Mock
private MyComplexObject myComplexObject;

@Mock
private IMyComplexInterface anotherComplexObject ;
...
}

Première bonne nouvelle, en utilisant l'annotation **@Mock**, le runner Mockito va créer pour vous tout les mocks qui sont déclarés que ce soit des interfaces ou des classes.

### Gérer les attributs privés sans setters !

Là ou le runner est encore plus fort, c'est qu'il va injecter tout les mocks nécessaires sur l'objet annoté par **@InjectMocks**. Et là c'est très pratique, surtout si vous avez du code sans setter.

public class MyObjet
{
...
@Autowired
private MyComplexObjet myComplexObjet;
...

myComplexObjet est privé et n'a aucun setter, donc sans le runner Mockito vous ne pourriez pas l'injecter.

Bon en fait, si comme nous allons le voir.

D'ailleurs dans le cas suivant Mockito ne vous sera d'aucune aide et du coup nous allons quand même avoir recours à des ruses de sioux :

public class MyObjet
{
@Value("${onekey}")
private String onekey;
@Value("${anotherkey}")
private String anotherkey;
...
}

Dans ce cas, vous pouvez utiliser Spring à la rescousse et **ReflectionTestUtils** :

@Before
public void initialize ()
{
ReflectionTestUtils.setField(myObject, "onekey", "one");
ReflectionTestUtils.setField(myObject, "anotherkey", "two");
}

C'est pas du Mockito mais ça valait le coup d'être cité.

### Mocker une méthode statique

En fait Mockito n'est pas capable de mocker une méthode statique par lui même. Pour cela il va falloir appeler [PowerMock](http://code.google.com/p/powermock/) à la rescousse.

Pour l'activer, vous allez désormais utiliser un autre runner : **PowerMockRunner**.

@RunWith(PowerMockRunner.class)
@PrepareForTest({ Lookup.class })
@PowerMockIgnore("org.apache.commons.logging.\*")
public class TestMyObject
{
...
@Before
public void initialize() throws Exception
{
// Comme vous n'utilisez pas MockitoRunner, vous devez faire appel à initMocks pour initialiser vos mocks
MockitoAnnotations.initMocks(this);
...
// o utilise PowerMockito pour mocker l'appel statique à Lookup.getInstance()
// -------------------------------------------------------------------
PowerMockito.mockStatic(Lookup.class);
Lookup lookup = mock(Lookup.class);
when(Lookup.getInstance()).thenReturn(lookup);
...
}

Explications de texte :

Activation du runner :

@RunWith(PowerMockRunner.class)

Liste des objets dont on va faire un mock de méthode statiques :

@PrepareForTest({ Lookup.class })

La ligne suivante est nécessaire car on n'utilise plus le runner **MockitoJUnitRunner** mais que l'on souhaite quand même utiliser les annotations **Mocks** et **InjectMocks**

MockitoAnnotations.initMocks(this);

et enfin, le mock de la méthode statique :

PowerMockito.mockStatic(Lookup.class);
Lookup lookup = mock(Lookup.class);
when(Lookup.getInstance()).thenReturn(lookup );

Facile non ?

Allez, une petite dernière pour la route. Et si mon objet doit implémenter deux interfaces ? Par exemple j'utilise Carbon pour l'injection de dépendance (ok on sent le projet legacy là) et du coup tout mes beans doivent aussi implémenter l'interface Component.

Ouf, Mockito le gère depuis 2009 :

mock(Lookup.class, withSettings().extraInterfaces(Component.class));

Voila, vous en savez (peut-être) un peu plus sur Mockito, à vous de jouer maintenant !
