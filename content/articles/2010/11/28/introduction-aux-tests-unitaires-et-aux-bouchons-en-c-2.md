---
id: "144"
title: "Introduction aux tests unitaires et aux bouchons en C#"
description: "Par définition (Cf. [Wikipédia](http://fr.wikipedia.org/wiki/Test_unitaire) ) un test unitaire est un procédé permettant de s'assurer du fonctionnemen..."
date: "2010-11-28"
categories: 
  - "waza"
tags: 
  - "csharp"
  - "testunitaire"
img: ""
cover: "cover5.jpg"
---

Par définition (Cf. [Wikipédia](http://fr.wikipedia.org/wiki/Test_unitaire) ) un test unitaire est un procédé permettant de s'assurer du fonctionnement correct d'une partie déterminée d'un logiciel ou d'une portion d'un programme (appelée « unité » ou « module »).

Un test est dit **unitaire** s'il ne fait pas appel à d'autres ressources que la classe testé. Un test unitaire n'utilise donc pas de base de données, de socket, MQ series etc... à l'inverse d'un test d'intégration.

Un test d'**intégration** est donc par extension un test qui peut utiliser des ressources externes : bases de données par exemple.

Voyons ce que ça donne en C#.

## Écriture d'un premier test

Par convention, une classe de test correspond généralement aux tests d'une classe de votre code.

**Exemple** :

votre classe : _EmailAdressValidator_

Exemple :

public class  EmailAddressValidator
{
	private DomainValidator domainValidator;

	public EmailAddressValidator()
	{
		DomainValidator domainValidator = new DomainValidator();
	}

	public bool CheckEmailAddressSyntax(string emailAddress)
	{
		if(emailAddress == null )
		{
			throw new NullReferenceException();
		}
			return Regex.IsMatch(emailAddress, @"^\[w.-\]+@\[a-zA-Z0-9-\]+(.\[a-zA-Z0-9-\]{1,})\*(.\[a-zA-Z\]{2,3}){1,2}$");
	}
		...
	public bool CheckDomainExists(string domain)
	{
			return  domainValidator.Exists(domain);
	}
	...
}

la classe de test : _EmailAdressValidatorTest_

Une classe de test comporte un stéréotype TestFixture, les méthodes de test ont un stéréotype Test.

Exemple :

\[TestFixture\]
public class EmailValidatorTest
{
	EmailAddressValidator EAV;

	\[SetUp\]
	public void SetUp()
	{
		EAV = new EmailAddressValidator ();
	}

	\[TearDown\]
	public void TearDown()
	{
		EVA.Clean();
	}

   \[Test\]
   public void TestEmailSyntaxArobas()
   {
	   Assert.IsTrue(EAV.CheckEmailAddressSyntax ("Nom@entreprise.com"));
	   Assert.IsFalse(EAV.CheckEmailAddressSyntax ("Nom@@entreprise.com"));
	   Assert.IsFalse(EAV.CheckEmailAddressSyntax ("Nomentreprise.com"));
	   Assert.IsFalse(EAV.CheckEmailAddressSyntax ("@entreprise.com"));
	   Assert.IsFalse(EAV.CheckEmailAddressSyntax ("Nom@"));
   }
}

## Différentes assertions

Dans un test, on cherche toujours à vérifier un comportement. On utilise donc des assertions, ces assertions définissent le comportement attendu.

En francais, une assertion est un énoncé considéré comme vrai.

Pour un test unitaire, il s'agit d'une expression qui doit être vrai pour que le test réussisse.

NUnit et MBunit utilise une classe statique [Assert](http://gallio.org/api/html/AllMembers_T_MbUnit_Framework_Assert.htm) pour les assertions :

Cette classe [Assert](http://gallio.org/api/html/AllMembers_T_MbUnit_Framework_Assert.htm) va nous permettre de tester entre autre :

- l'égalité : Assert.Equals
- le non null : Assert.IsNotNull
- une condition Assert.IsTrue  
    mais aussi, la présence dans une plage de valeur, une égalité approximative, l'égalité des références etc...

Un test comporte toujours des assertions.

Exemple :

// CheckEmailAdressSyntax doit renvoyer true avec le paramètre "Nom@entreprise.com"
Assert.IsTrue(EAV.CheckEmailAddressSyntax ("Nom@entreprise.com"));

## Setup/TearDown

Il est parfois nécessaire d'effectuer des opérations avant et après chaque test. Une classe peut donc définir des méthodes appelées avant et après chaque test avec les stéréotypes Setup et Teardown.

Exemple :

   // toujours exécuté avant les tests
   \[SetUp\]
   public void SetUp()
   {
		EAV = new EmailAddressValidator ();
   }

   // toujours exécuté après les tests
   \[TearDown\]
   public void TearDown()
   {
		EVA.Clean();
   }

## La couverture de code

La **couverture de code** est une métrique utilisée en génie logiciel pour décrire le taux de code source [http://fr.wikipedia.org/wiki/Code\_source](http://fr.wikipedia.org/wiki/Code_source) testé d'un programme. Ceci permet de mesurer la qualité des tests effectués.

En .NET on utilise [NCover](http://www.ncover.com/) pour mesurer cette couverture de code. [NCover](http://www.ncover.com/) va calculer à partir des tests joués et du code initial l'ensemble des chemins qui ont été parcourus et fournir un pourcentage du code parcouru par rapport au code non parcouru.

Ci-dessous, un exemple des rapports proposés par NCover :

XXXX

Dans les tests précédents, NCover remarque que l'on ne passe pas par **CheckDomainExists** que l'on verra plus bas sur cette page. De plus le test sur la nullité de la chaine entrée n'est jamais évalué à true :

if(emailAddress == null )
{
	throw new NullReferenceException();
}

Un test avec une chaine null ferait remonter la couverture de code.

## Test paramétré

Dans le test précédent, on réécrit x fois la même ligne pour tester avec des paramètres différents :

      Assert.IsFalse(EAV.CheckEmailAddressSyntax ("Nom@@entreprise.com"));
	  Assert.IsFalse(EAV.CheckEmailAddressSyntax ("Nomentreprise.com"));
	  Assert.IsFalse(EAV.CheckEmailAddressSyntax ("@entreprise.com"));
	  Assert.IsFalse(EAV.CheckEmailAddressSyntax ("Nom@"));

Premier défaut à cette méthode :

- il est conseillé d'avoir une assertion par méthode de test, ca permet d'être sur que tout les cas de test sont joués (sinon la première erreur empêche l'execution des autres tests).

Exemple :

	\[Test\]
	public void TestInvalidEmailSyntaxWithTwoArobas()
	{
		Assert.IsFalse(EAV.CheckEmailAddressSyntax ("Nom@@entreprise.com"));
	}

	\[Test\]
	public void TestInvalidEmailSyntaxWithoutName()
	{
		Assert.IsFalse(EAV.CheckEmailAddressSyntax ("@entreprise.com"));
	}

Second défaut, on duplique le code testé. Cela aurait été plus gênant avec un code sur plusieurs lignes.

Solution :  
Pour éviter de réécrire x fois le même test avec des paramètres différents, on va utiliser des tests paramétrés :

	\[Test\]
	\[Row("Nom@@entreprise.com")\]
	\[Row("Nomentreprise.com")\]
	\[Row("@entreprise.com")\]
	\[Row("Nom@")\]
	public void TestEmailSyntaxArobas(string name)
	{
		Assert.IsFalse(EAV.CheckEmailAddressSyntax (name));
	}

Le même test est joué 4 fois pour chaque valeur de paramètre. L'attribut Row est utilisé pour chaque paramétre et celui-ci est passé en paramètre de la méthode.

Autre exemple avec un code plus complexe :

	\[Test\]
	\[Row("Milou")\]
	\[Row("Idefix")\]
	public void TestWithFakeAndRowTest(string name)
	{
		// "Setup" (initialisation des objets pour le test)
		OrderWriter orderWriter = new OrderWriter(new FakeWriter());
		Order order = new Order() { OrderId = 7001, Pet = new Dog(name) };

		// "Execute" (Exécution du test : écriture de l'ordre sur le système)
		orderWriter.WriteOrder(order);

		// "State verification" (vérification de l'état de l'objet par des assertions)
		Assert.AreEqual(name, order.Pet.Name);
		Assert.IsTrue(order.IsFilled);
	}

## Le bouchonnage

### Problématique

Comme dit plus haut, un test unitaire doit être indépendant des ressources externes : base de données, file de message etc...

Mais il arrive souvent que l'on utilise ces ressources dans les classes testées.

Exemple :

public class  EmailAddressValidator
{
	DomainValidator domainValidator;

	public EmailAddressValidator()
	{
		DomainValidator domainValidator = new DomainValidator();
	}

	public bool CheckEmailAddressSyntax(string emailAddress)
	{
		if(emailAddress == null )
		{
			throw new NullReferenceException();
		}
		return Regex.IsMatch(emailAddress, @"^\[w.-\]+@\[a-zA-Z0-9-\]+(.\[a-zA-Z0-9-\]{1,})\*(.\[a-zA-Z\]{2,3}){1,2}$");
	}
	...
	public bool CheckDomainExists(string domain)
	{
		return  domainValidator.Exists(domain);
	}...
}

Ici le DomainValidator fait appel à un service web pour vérifier l'existence d'un nom de domaine. Le test unitaire de la méthode CheckDomainExists pose donc problème.

### Solution

La solution consiste à utiliser un bouchon à la place du DomainValidator.

Pour cela, un peu de remaniement de code est nécessaire (_refactoring_) :

- l'objet DomainValidator n'est plus instancié dans le constructeur mais injecté par constructeur ou par mutateur (propriété)
- On utilise une interface à la place de l'objet réel pour "inverser la dépendance" de la classe EmailAdressValidator non plus sur la classe "DomainValidator" mais sur une interface "IDomainValidator"

Exemple avec injection par constructeur :

// Interface IDomainValidator
public interface IDomainValidator
{
	bool Exists(string sDomain);
}

// Classe à tester
class  EmailAddressValidator
{
	// Interface
	private readonly IDomainValidator domainValidator;

	public EmailAddressValidator(IDomainValidator domainValidator)
	{
		this.domainValidator = domainValidator;
	}

	public bool CheckEmailAddressSyntax(string emailAddress)
	{
		if(sEmailAddress == null )
		{
			throw new NullReferenceException();
		}
		return Regex.IsMatch(emailAddress, @"^\[w.-\]+@\[a-zA-Z0-9-\]+(.\[a-zA-Z0-9-\]{1,})\*(.\[a-zA-Z\]{2,3}){1,2}$");
	}
	...
	public bool CheckDomainExists(string domain)
	{
		return  domainValidator.Exists(domain);
	}
	...
}

Exemple avec injection par mutatteur (propriété getter/setter) :

// Classe à tester
class  EmailAddressValidator
{
	// Interface
	public IDomainValidator domainValidator { get; set; }

   public EmailAddressValidator()
   {
   }
   ....

A partir de là, il faut écrire une implémentation de IDomainValidator valable uniquement pour le test.

class FakeDomainValidator : IDomainValidator
	{
		public bool Exists(string sDomain)
		{
			return true;
		}
	}

**Les tests de EmailAddressValidator pourront donc être indépendants de l'implémentation de IDomainValidator.**

### Limitations

Si vous souhaitez tester le comportement de EmailAddressValidator dans le cas d'un retour true et false, il faut écrire deux bouchons.  
Si l'objet est complexe et contient plus de 3 méthodes, l'écriture des bouchons est rapidement fastidieuse.

Pour cela, il faut utiliser des outils qui génèrent les bouchons dynamiquement. Voir partie suivante sur les mocks.

# Présentation des Mocks

Les Mocks permettent de s'affranchir de l'écriture des bouchons cités plus haut. Deux lignes de code suffisent pour créer une implémentation vide d'une interface :

      var mock = new Mock();
      IDomainValidator domainValidatorMock = mock.Object;

## Mocks pour tester l'état des objets

On peut désormais écrire :

EAV = new EmailAddressValidator ();
EAV.domainValidator = domainValidatorMock;
EAV.CheckDomainExists("domaine.fr");

Par défaut, nous n'avons pas défini ce que devait renvoyer Exists de domainValidatorMock, donc la méthode va renvoyer false (la valeur d'un bool par défaut).

**Ici, on va donc tester la méthode CheckDomainExists de EmailAddressValidator sans faire d'appel à un web service.**

## Préciser le comportement du mock

Dans l'exemple précédent, on va coder deux tests, un ou le résultat du IDomainValidator est false, l'autre ou c'est true. Pour cela, on va initialiser le mock avec la méthode Setup :

        \[Test\]
		public void TestDomainExist()
		{
			EAV = new EmailAddressValidator ();
			EAV.domainValidator = domainValidatorMock;
			mock.Setup(foo => foo.Exists(It.IsAny())).Returns(true);
			Assert.IsTrue(EAV.CheckDomainExists("domaine.fr"));
		}

        \[Test\]
		public void TestDomainNotExist()
		{
			EAV = new EmailAddressValidator ();
			EAV.domainValidator = domainValidatorMock;
			mock.Setup(foo => foo.Exists(It.IsAny())).Returns(false);
			Assert.IsTrue(EAV.CheckDomainExists("domaine.fr"));
		}

La méthode Setup prend une lambda expression indiquant le comportement attendu de la méthode Exists sur l'objet.

On remarque l'utilisation de It.IsAny<string>() qui indique que l'appel de Exists avec n'importe quel string renverra true.

Tout le comportement de la méthode bouchonnée peut être précisé comme cela.  
Par exemple si la méthode doit renvoyer une exception :

mock.Setup(foo => foo.Exists(It.IsAny())).Returns(false).Throws(new ArgumentException("invalid argument"));

On peut indiquer que l'appel de la méthode doit ensuite déclencher une fonction de rappel :

mock.Setup(foo => foo.Exists(It.IsAny())).Returns(false).Callback(() => MethodToCall());

## Mock pour tester le comportement des objets

En réalité il existe deux types de tests à faire :

- tester que EmailAdressValidator se comporte bien
- tester que DomainValidator est correctement appelé par EmailAdressValidator

pour le deuxième type de test, le mock peut ajouter des attentes (ou **expectations**) :

            // "Behavior verification" (vérifications du comportement de l'objet par des attentes)
			mock.Verify(foo => foo.Exists(It.IsAny())).Returns(false), Times.AtMostOnce(),
			"Fail message: method IDomainValidator.Existsshould be called and called only once");

Ici par exemple on vérifie que la méthode Exists ne peut être appelé qu'une seule fois.
