---
title: "Mandrill et Lutung (timeoff Xeme journée)"
date: "2014-03-20"
categories: 
  - "waza"
tags: 
  - "mail"
  - "mandrill"
  - "smtp"
img: "7f64c-mandrill_template.png"
---

_Nous sommes le 4ème jour du timeoff. Ou le 6ème, j’ai arrêté de compter. Désormais je grave des bâtons sur mon clavier pour garder le compte. Jours et nuits se succèdent indistinctement sous lumière artificielle. Nous ne sommes plus que cinq, Jean-Baptiste et Jonathan ont déjà succombé à une bactérie locale. Vincent n’a plus toute sa tête, il répête en boucle “ruby, ruby, j’aurais ta peau”._

Ce billet aurait largement pu continuer sur ce ton. Je devais faire un billet par jour, je sens que ce ne sera pas simple de trouver un thème suffisamment intéressant par jour. Hier il y a eu trop de pistes démarrées et pas forcément aboutie pour un billet :

- utilisation de [Code-story-http](https://github.com/CodeStory/code-story-http) et [Rome](http://rometools.github.io/rome/) pour faire un mini site permettant d’aggréger les flux RSS de chaque personne de LT.
- discussions enflammées sur les architectures distribuées
- tentative d’explication de concept Scala pour une tête de mule (moi) par Olivier
- présentation de [LittleChef](https://github.com/tobami/littlechef) par Rony Dray
- explication du jeu de quilles finlandaises par Stuart

Finalement j’ai choisi un sujet simple et sympa que je vous propose de découvrir, [Mandrill](https://mandrillapp.com/) et l’api Java Lutung qui permet de l’utiliser.

Mandrill est une API pour de l’envoi d’email. C’est une boite qui est issu de Mailchimp, l’un des leaders dans les campagnes d’emailing. Si vous ne connaissez pas, sachez qu’il y a déjà plus de 5M de personnes qui l’utilisent et je suis prêt à parier que vous avez déjà reçu une newsletter qui vient d’eux.

 

Mandrill propose soit un envoi par SMTP classique, soit une API Rest pour l’envoi de vos emails.

Je n’ai pas l’habitude de faire de la pub pour des produits payants, mais il se trouve que cette API est gratuite jusqu’à 12000 mails pour un mois, ce qui est largement suffisant pour de petits besoins.

Ici je ne vais pas m'appesantir sur les nombreuses fonctionnalités sympa :

- suivi du taux d’ouverture de vos emails
- suivi des plaintes pour spam
- les webhooks

Je vais me contenter de parler de l’API permettant d’envoyer un mail à partir d’un template de mail stocké et géré sur mandrill. Ok, c’est léger mais il est plus de minuit et je fatigue :)

Le principe ici est simple, vous ne vous préoccupez pas de votre template dans votre application. Celui-ci est stocké chez Mandrill et modifiable indépendamment de votre appli.

En Java nous allons utiliser [Lutung](https://github.com/rschreijer/lutung), un wrapper Java permettant d’interagir au dessus de l’API.

Première étape, vous allez créer un template sur le site :

[![mandrill_template](/images/7f64c-mandrill_template.png)](http://eventuallycoding.com/wp-content/uploads/2014/03/7f64c-mandrill_template.png)

Dans cet email vous allez ajouter des placeholders pour vos variables dynamiques, par exemple :

Bonjour \*|RNAME|\*

(je n’aborderais pas l’utilisation de région, permettant de dynamiser de plus grosses parties du mail)

Ensuite, en Java, créez votre wrapper :

MandrillApi mandrillApi = new MandrillApi("API KEY");

Puis on va créer le message avec ces propriétés simples :

       // create your message
       MandrillMessage message = new MandrillMessage();
       message.setSubject("Hello World!");
       message.setFromEmail("hugo@hopwork.com");
       message.setFromName("Hugo Lassiège");

On va activer une fonctionnalité de mandrill permettant d’inliner le CSS utilisé dans votre template. En effet la majorité des clients mail (dont gmail) suppriment toutes les balises style. Mandrill vous propose de lui fournir des templates “normaux” avec des balises style et d’inliner tout le CSS dans les balises HTML au moment de l’envoi.

       message.setInlineCss(true);

Ensuite on va donner des variables utilisées pour le template afin de remplir des parties dynamiques définies dans le template :

       List<MergeVar> vars = new ArrayList<>();
       vars.add(new MergeVar("RNAME", "Hugo"));
       vars.add(new MergeVar("MSG", “Hello !”));
       message.setGlobalMergeVars(vars);

Enfin on va ajouter les destinataires :

       // add recipients
       List<Recipient> recipients = new ArrayList<>();
       Recipient recipient = new Recipient();
       recipient.setEmail("h.lassiege@gmail.com");
       recipient.setName("Hugo Lassiege");
       recipients.add(recipient);
       message.setTo(recipients);
       message.setPreserveRecipients(true);

Puis dernière étape on va appeler l’envoi sur un template appelé “nouveau-message” :

       mandrillApi.messages().sendTemplate("nouveau-message", null, message, true);

Et voilà, l’api n’a rien de plus compliqué.

A noter que vous pouvez également planifier l’envoi de votre email dans le futur, avoir plusieurs destinataires et des variables par destinataires.

Vous pouvez retourner à vos claviers.
