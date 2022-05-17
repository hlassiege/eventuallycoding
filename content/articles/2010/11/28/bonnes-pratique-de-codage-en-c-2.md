---
id: "145"
title: "Bonnes pratique de codage en C#"
description: "Dans la lignée d'un [billet précédent](http://localhost/localweb/wordpress/?p=144 \"Introduction aux tests unitaires et aux bouchons en C#\") qui consti..."
date: "2010-11-28"
categories: 
  - "waza"
tags: 
  - "csharp"
  - "testunitaire"
img: "linkext7.gif"
cover: "cover3.jpg"
---

Dans la lignée d'un [billet précédent](http://localhost/localweb/wordpress/?p=144 "Introduction aux tests unitaires et aux bouchons en C#") qui constituait une introduction aux tests unitaires en C#, voici un autre billet orienté "bonnes pratiques de codage" toujours en C#.

Mais loin d'être cantonné au C#, les principes données dans ce billet sont facilement transposables dans d'autres langages. Après tout, il ne s'agit que de "bonnes pratiques".

# Les principes généraux

Les deux principes généraux pour une bonne testabilité :

- l'isolabilité
- la simplicité

> La perfection est atteinte non pas quand il n’y a plus rien à ajouter, mais quand il n’y a plus rien à retirer !

Symptômes d'un code intestable :

Symptômes d'un code testable :

# Constructeur couteux

## Problématique

Exemple de constructeur couteux :

public Dictionnaire ()
{
	StreamReader monStreamReader = new StreamReader("francais.txt");
	string ligne = monStreamReader.ReadLine();

	while (ligne != null)
	{
		string\[\] words = ligne.Split(':');
		definitions.Put(words \[0\],words \[1\]);
		ligne = monStreamReader.ReadLine();
	}
	monStreamReader.Close();
}

Problèmes :

- potentiellement couteux
- dépendant d'une ressource externe (le fichier francais.txt)
- création d'objet (présence de new)
- l'initialisation peut échouer

\=> **Le test n'est pas isolé, il peut durer longtemps et son comportement ne peut pas être différent entre deux tests**

## Solutions

### méthodes init optionnelle

public Dictionnaire ()
{
}

private void Init ()
{
	StreamReader monStreamReader = new StreamReader("francais.txt");
	string ligne = monStreamReader.ReadLine();

    while (ligne != null)
	{
		string\[\] words = ligne.Split(':');
		definitions.Put(words \[0\],words \[1\]);
		ligne = monStreamReader.ReadLine();
	}
	monStreamReader.Close();
}

\=> pour du code existant, le risque c'est que les appelants n'appellent pas cette méthode

### méthode init surchargeable

protected void Init ()
{
	StreamReader monStreamReader = new StreamReader("francais.txt");
	string ligne = monStreamReader.ReadLine();

    while (ligne != null)
	{
		string\[\] words = ligne.Split(':');
		definitions.Put(words \[0\],words \[1\]);
		ligne = monStreamReader.ReadLine();
	}
	monStreamReader.Close();
}

\=> la méthode étant protected, on peut créer un objet DictionnaireTestable qui redéfinit la méthode Init

public class DictionnaireTestable ()
{
	protected void Init ()
	{
		// Do nothing
	}
}

\=> Obligé de créer une classe pour les tests

### constructeur différent pour les tests

public Dictionnaire (boolean ForTest)
{
	// Do nothing
}

- risque de confusion avec le constructeur existant
- paramétre supplémentaire non utilisé

### Solution optimale

- objets liés passés en paramètre

public Dictionnaire ()
{
	// ancien code
	...
}

public Dictionnaire (Dictionary definitions )
{
	this.definitions = definitions;
}

Les définitions sont initialisées dans une factory.

public class DictionnaireFactory
{
	public static Dictionnaire buildFromTextFile ()
	{
		Dictionary definitions = new Dictionnary();
		StreamReader monStreamReader = new StreamReader("francais.txt");
		string ligne = monStreamReader.ReadLine();

        while (ligne != null)
		{
			string\[\] words = ligne.Split(':');
			definitions.Put(words \[0\],words \[1\]);
			ligne = monStreamReader.ReadLine();
		}
		monStreamReader.Close();

        return new Dictionnaire (definitions);
	}
}

Ainsi, un test peut utiliser le constructeur avec un dictionnary par défaut. La lecture du fichier a été délocalisé hors de la classe.

### Attention à l'encapsulation

La technique ci-dessus a cependant un risque important si on l'applique naivement, celui de briser l'encapsulation.

Exemple :

public class Car
{
	public Car (Engine engine);
	...
}

En exposant les collaborateurs je donne des indications sur la façon dont fonctionne mon objet. Ici ma voiture est une voiture à moteur.

Si au final l'appelant doit instancier tout les objets nécessaires à ma voiture : le moteur, le frein, la boite de vitesse, je brise l'encapsulation et je rends l'utilisation de l'objet très difficile.

D'où l'intérêt de manipuler des interfaces et d'utiliser des Factory.

# Les instanciations directes

## Problématique

Les instanciations (via l'opérateur new) comme dans l'exemple suivant peuvent être gênant pour les tests :

Dictionnaire dico = new Dictionnaire ();
...

Ici on créé un couplage fort avec l'implémentation du dictionnaire.  
Si celui-ci établit une connexion à la base de données, le code devient intestable.

## Solution

Plusieurs approches sont possibles, elles sont toutes basées sur l'utilisation d'une interface qui va définir le contrat du dictionnaire.

public interface IDictionnaire
{
    ...
}

Le code appelant utilisera désormais l'interface qui ne déclare que son comportement métier.

On pourra ensuite utiliser :

- une Factory
- l'injection de dépendances via un framework spécialisé (Spring.Net, GenericFacade etc...)

// Ici la factory nous permet de rajouter un découplage entre celui qui utilise et l'implémentation.
IDictionnaire dico = DictionnaireFactory.BuildDictionnaire ();
...

ou avec Spring.Net

ApplicationContext ctx = ContextRegistry.GetContext();
IDictionnaire dico= (IDictionnaire ) ctx.GetObject ("MyDictionnaire");

L'intérêt des Frameworks, entre autre, par rapport à une factory classique, c'est de pouvoir configurer l'implémentation renvoyé selon le contexte.

# Les blocs statiques

## Problématique

L'utilisation de bloc statique est impossible en C# donc ce paragraphe n'est pas applicable.  
Cependant en C# on peut avoir des constructeurs statiques.

class SimpleClass
{
	// Static constructor
	static SimpleClass()
	{
		//...
	}
}

Le défaut des constructeurs statiques étant qu'ils créent un état permanent. Tester une classe avec état peut être très difficile a cause des effets de bord :

class SimpleClass
{
	private static int compteur;

    // Static constructor
	static SimpleClass()
	{
		compteur = 0;
	}

    public static int AddValueToCompteur (int value)
	{
		compteur +=value;
		return compteur;
	}
}

Les tests suivants échoueront aléatoirement => l'ordre des tests n'est pas garanti par les frameworks de tests. **On ne doit pas se reposer sur l'ordre d'écriture des tests pour présumer du résultat**.

    \[Test\]
	public void TestAddNegativeValue()
	{
		Assert.AreEquals(-2, SimpleClass.AddValueToCompteur(-2));

	}
	\[Test\]
	public void TestAddPositiveValue()
	{
		Assert.AreEquals(0, SimpleClass.AddValueToCompteur(2));
	}

## Suppression des constructeurs statiques

class SimpleClass
{
	private int compteur;

    public SimpleClass()
	{
		compteur = 0;
	}

    public int AddValueToCompteur (int value)
	{
		compteur +=value;
		return compteur;
	}
}

# Dynastie de classes

## Introduction

L'utilisation de l'héritage n'est pas toujours idéale :

- duplication de code
- fragilité du modèle
- non réutilisabilité

En fait, bien souvent : **Il faut privilégier la composition à l'héritage**

Nous n'allons pas redémontrer ce point ici, mais si vous voulez plus de sources à ce sujet :

- [Inhéritance is evil and must be destroyed![](/images/linkext7.gif)](http://berniesumption.com/software/inheritance-is-evil-and-must-be-destroyed/)
- [Les limites de l'héritage (le pattern strategy)![](/images/linkext7.gif)](http://www.siteduzero.com/tutoriel-3-65563-les-limites-de-l-heritage-le-pattern-strategy.html)
- [Le design pattern Stratégy en .Net![](/images/linkext7.gif)](http://blogs.developpeur.org/tja/archive/2009/06/28/design-patterns-privil-giez-la-composition-l-h-ritage-strat-gie.aspx)

En fait, selon le principe de Liskov :

> "une relation d'héritage est bien employée s'il est possible de substituer n'importe quel instance d'une super-classe, par n'importe quel instance d'une de ses sous-classes, sans que la sémantique d'un programme écrit dans les termes de la super-classe n'en soit affectée."

(Cf. [Le principe de Liskov, à la base de la conception par contrat![](/images/linkext7.gif)](http://fr.wikipedia.org/wiki/Principe_de_substitution_de_Liskov))

## Exemple

Ci-dessous un hiérarchie de classe :

Un compte peut être spécialisé en compte courant ou compte epargne. Un compte hérite des méthodes liées aux objets sécurisées et sauvegardable.

Outre les problèmes inhérents à cette modélisation :

- duplication de code au niveau des comptes (sans doute des override pour redéfinir des comportements)
- réutilisation des comptes en dehors du contexte de notre modèle de données impossible
- fragilité du modèle (rajouter des types de comptes, spécialiser la sécurité par type d'objet ou la sauvegarde, tout cela est dangereux pour ce modèle legacy)
- scalabilité faible (que va-t-il se passer avec 32 types de comptes différents)

**Il se pose aussi des problèmes de testabilité !**

Exemple :

- Pour tester un compte, je dois configurer une connexion à la base de données car EntiteSauvegardable s'initialise à partir d'une connexion
- La sécurisation nécessite l'accès à une ressource Active Directory  
    etc...

**En instanciant un objet Compte, je suis fortement couplé avec les objets dont il hérite.**

## Solution

- le design pattern strategy (voir article plus haut)
- la composition (un compte n'est pas une entité sécurisé mais **utilise** une entité sécurisé)
- la séparation des responsabilités (séparation DAO (accès aux données), entités (objets simples), services (comportement métier)

Toutes ces solutions reposent sur la programmation par contrat (l'utilisation d'interface pour définir le contrat d'un objet) et peuvent s'appuyer sur l'injection de dépendances pour injecter les implémentations correspondantes au comportement voulu.

**Et surtout, c'est testable !**

public class Compte
{
	private string titulaire;
	private float amount;
	private ISecureEntity;
	....
}

En injectant un bouchon pour ISecureEntity, mon Compte est testable en isolation.

<table><colgroup><col width="24"> <col> </colgroup><tbody><tr><td valign="top"><img src="/images/information.gif" alt="" width="16" height="16" align="absmiddle" border="0"></td><td>L'exemple ci-dessus bénéficierait sans doute encore plus d'une véritable séparation des responsabilités. Le compte ne devrait pas être responsable de la façon dont il est sauvé, ou sécurisé.</td></tr></tbody></table>

# Des états globaux

Un état global est en général contenu par une variable globale :

public static string maValeur ;

Les différents problèmes que posent les variables globales :

- La variable globale persiste d'un test à l'autre et créé de la confusion
- Un test peut fonctionner seul mais pas quand il est joué avec les autres
- Les tests peuvent échouer ensemble mais marcher individuellement
- L'ordre des tests influe sur le résultat

L'exemple plus haut avec un compteur dans un bloc statique illustre bien ces problèmes.

class SimpleClass
{
	private static int compteur = 0 ;

    public static int AddValueToCompteur (int value)
	{
	compteur +=value;
	return compteur;
	}
}

Les tests suivants échoueront aléatoirement => l'ordre des tests n'est pas garanti par les frameworks de tests. **On ne doit pas se reposer sur l'ordre d'écriture des tests pour présumer du résultat**.

    \[Test\]
	public void TestAddNegativeValue()
	{
		Assert.AreEquals(-2, SimpleClass.AddValueToCompteur(-2));
	}
	\[Test\]
	public void TestAddPositiveValue()
	{
		Assert.AreEquals(0, SimpleClass.AddValueToCompteur(2));
	}

Il existe un pattern pour remplacer cette variable globale : le singleton (_mais injecté !_)

public class Compteur
{
	private int myCompteur ;
	public int MyCompteur
	{
		get {return myCompteur} ;
		set {myCompteur = value}
	}

    public int AddValueToCompteur (int value)
	{
		myCompteur += value
		return myCompteur;
	}
}

Vous avez encapsulé le comportement de votre compteur dans un objet compteur, lui-même pourra être injecté dans les classes qui l'utilisent.

Ainsi, dans un contexte de production vous utiliserez un singleton et garantirez donc que votre état reste global à l'application.  
Si par exemple vous utilisez spring.Net, vous utiliserez des singletons :

Et dans un contexte de production, vous pourrez injecter une nouvelle instance de compteur pour chaque test.

# Annuaire de service

Si l'utilisation d'annuaire est récurrente, son usage doit être bien contrôlé pour favoriser une bonne testabilité.

Prenons les exemples suivant :

    XmlApplicationContext context = new XmlApplicationContext("assembly://MySolution/Namespace/spring.xml");
	MySuperObject configuration = (MySuperObject )context.GetObject("MySuperObject");

    MySuperObject.DoSomething();

	....

    MyService service = Locator.findService ("Service");
	service.DoSomething();

	....

    public MonObjet (Context context)
	{
		MyProperty1 = context.getProperty1();
		MyProperty2 = context.getProperty2();
		MyProperty3 = context.getProperty3();
	}

Ces bouts de code ont un impact sur la testabilité :

- méthodes statiques (voir plus haut)
- liaison avec l'implémentation du XmlApplicationContext basé sur un fichier xml dans le premier exemple
- dépendances cachées entre objet

Solution

De façon générale, l'injection de dépendance permet d'éviter l'utilisation des annuaires.

Cependant si l'utilisation d'un annuaire est nécessaire, l'injection de l'annuaire est préférable à l'instanciation directe.  
Dans le premier exemple, se faire injecter un IApplicationContext permet d'être indépendant de l'implémentation et donc de fournir à l'annuaire nos propres services.

# Trop d'intermédiaire

Exemple :

public void facturer (Commande commande, Client client)
{
	banqueService.prelever (client.getCompteBancaire(),commande.getTotal());
	emailService.notifierPrelevement(client.getEmail());
}

Les défauts :

- manque de lisibilité, la facturation nécessite bien plus que Commande et Client
- initialisation du test complexe
- couplage avec les objets intermédiaires

La solution :

- appliquer le principe de [Demeter![](/images/linkext7.gif)](http://fr.wikipedia.org/wiki/Loi_de_D%C3%A9m%C3%A9ter)

Exemple de test avant :

Commande commande = new Commande();commande.setTotal(20.0);

Client client = new Client();
Compte compte = new Compte();
client.setCompte  (compte);

string email= "toto@free.fr";
client.setEmail(email);

manager.facturer (commande,client);

Après :

Compte compte = new Compte();
string email= "toto@free.fr";
double total = 20.0;

manager.facturer (compte,total,email);

# Méthodes trop chargées

Une méthode est trop chargé :

- s'il y a trop de if else, for, while imbriqué
- s'il y a beaucoup de conditions

\=> on utilise souvent l'indicateur de complexité cyclomatique pour le mesurer.

Comment faire baisser la complexité :

- déléguer dans d'autres méthodes
- extraire d'autres classes et déléguer
- utiliser le polymorphisme
- retourner des objets vides plutot que null
- donner des valeurs par défaut (pour éviter les else)

Quel est le rapport avec la testabilité ?

Plus il y a de routes différentes (les valeurs aux limites, les valeurs null), plus le test sera complexe à écrire.

## Exemple1

public boolean laisserPasser (Personne personne)
{
	if (personne.getAge() > 12 && personne.getTaille() > 1.3 && personne.EstEnBonneSante())
	{
		if ((personne.getAge() < 18 && personne.EstAccompagne()) || personne.getAge()>=18)
		{
			facturer(personne);
			return true;
		}
	}
	return false;
}

Exemple avec découpage des méthodes :

public boolean laisserPasser (Personne personne)
{
	if (EstPhysiquementCompatibleJeuxIntense(personne))
	{
		if (EstLegalementCompatibleJeuxIntense(personne))
		{
			facturer(personne);
			return true;
		}
	}
	return false;
}

Exemple avec délégation dans d'autres classes :

private PersonneChecker personneChecker;

public boolean laisserPasser (Personne personne)
{
	if (personneChecker.PhysiqueMinimum(personne) && personneChecker.EstMajeur(personne))
	{
		facturer(personne);
		return true;
	}
	return false;
}

## Exemple 2

public void TraiterListeCommande()
{
	List commandes = RecupererCommandes();

    if (commandes != null)
	{
		foreach (Commande commande in commandes)
		{
			// do something
		}
	}
}

si le Dao est fait de facon à toujours renvoyer une liste, même vide (c'est ce que fait NHibernate par exemple)

public void TraiterListeCommande()
{
	List commandes = RecupererCommandes();

    foreach (Commande commande in commandes)
	{
		// do something
	}
}

# Conclusion

Comme vu ci-dessus, la testabilité va souvent de pair avec une bonne conception objet.  
Une bonne conception permet une bonne modularité et une grande souplesse, tout ce qui est nécessaire à la testabilité.

C'est d'ailleurs parce que la testabilité impose une programmation plus rigoureuse que certaines méthodes de développement impose d'écrire les tests en premiers (Voir [TDD![](/images/linkext7.gif)](http://fr.wikipedia.org/wiki/Test_Driven_Development))

<table width="36"><tbody><tr><td valign="top">&nbsp;</td><td>&nbsp;</td></tr></tbody></table>

Sur un code ancien n'ayant pas été conçu pour être testable, l'application des solutions ci-dessus permet de rendre progressivement testable le logiciel.

# Sources

- [http://blog.o2sources.com/2009/03/23/celui-qui-voulait-ecrire-du-code-testable.html![](/images/linkext7.gif)](http://blog.o2sources.com/2009/03/23/celui-qui-voulait-ecrire-du-code-testable.html)
- [http://misko.hevery.com/code-reviewers-guide/![](/images/linkext7.gif)](http://misko.hevery.com/code-reviewers-guide/)
- [http://googletesting.blogspot.com/2008/08/by-miko-hevery-so-you-decided-to.html![](/images/linkext7.gif)](http://googletesting.blogspot.com/2008/08/by-miko-hevery-so-you-decided-to.html)
- [http://www.slideshare.net/foucha/comment-crire-du-code-testable![](/images/linkext7.gif)](http://www.slideshare.net/foucha/comment-crire-du-code-testable)
