---
id: "35"
title: "Profiter de son flux RSS pour créer une newsletter"
description: "Comment utiliser son flux RSS pour créer une newsletter sur un site statique."
tags: []
date: "2024-02-16"
cover: "/add-newsletter-static-website/postier.jpg"

language: "fr"
---


Vous vous doutez bien si vous lisez ce blog, j'aime ce format.
L'écrit a pour moi toujours sa place et je lis personnellement des tonnes de billets de blog.

Cependant, je rate également beaucoup d'articles de qualité. Il y a très longtemps j'utilisais [Google Reader](https://en.wikipedia.org/wiki/Google_Reader) qui me permettait de ne rien louper de mes blogs préférés.

Et puis Google Reader a rejoint le [cimetière des applications tuées par Google](https://killedbygoogle.com/) en 2013. Snif.

Je n'ai pas vraiment remplacé cette application en tant que tel. J'aurais pu, il y a désormais feedbly, flipboard et plein d'autres apps équivalentes.

Mais mes habitudes ont changé.

J'aime qu'on me recommande du contenu :

- je regarde plus de vidéos youtube qu'avant, que je découvre directement sur la page d'acceuil (je vous invite d'ailleurs à découvrir [la chaine eventuallycoding](https://youtube.com/@eventuallycoding))
- je suis les recommandations qui me sont faites sur Medium

Mais surtout, je me suis inscrit sur de nombreuses newsletters (codrops, pragmatic engineer, leaddev, SWLW etc...).

Par contre jusqu'ici, pour les petits blogs, qui, comme le mien, ont décidé de ne pas donner leur contenu à Medium ou Substack, je comptais un peu sur la chance pour les découvrir via un Tweet ou un Toot.

Parce que, très souvent, ces petits blogs ont deux défauts :
1. ils n'ont pas mis en place de flux RSS
2. ce sont des sites statiques qui ne proposent pas d'inscription à une newsletter

Eh bien je vous propose de découvrir comment remédier à ces deux points. Et n'hésitez pas à renvoyer les auteurs de vos blogs favoris vers ce billet s'ils n'ont toujours pas de flux RSS :)

## Un flux RSS ?

Un flux RSS reprend l'historique des publications d'un blog dans un fichier xml. Sur ce blog par exemple, il est disponible sur /rss.xml.

Ce flux peut être facilement exploité par une application comme feedly ou mailbrew par exemple.

Vous avez un blog, mais pas de flux RSS ?

Aahhh ! S'il vous plait, rajoutez en un. Ca vous coute rien. 

Si vous utilisez wordpress, le flux RSS est en principe sur https://monsitewordpress.com/feed.

Si vous utilisez un générateur de site statique, il faut l'activer via des plugins, des modules ou un peu de dev supplémentaire :

- [hugo](https://gohugo.io/templates/rss/)
- [Gatsby](https://www.gatsbyjs.com/docs/how-to/adding-common-features/adding-an-rss-feed/)
- [Jekyll](https://github.com/jekyll/jekyll-feed)

Pour Nuxt-content, [vous pouvez regarder ce que j'ai fait sur github](https://github.com/hlassiege/bloggr/blob/main/server/routes/rss.xml.ts).

## RSS vers email

Vous allez me dire, "oui, mais le reflexe des lecteurs de blogs aujourd'hui n'est plus d'utiliser un flux RSS"

Certes, c'est un peu vrai. Mais, vous pouvez vous en servir pour proposer une newsletter ! Le fameux "Si tu ne viens pas à Lagardère, Lagardère ira à toi !"

Parce que si vos lecteurs n'utilisent pas d'outils de suivi RSS, vous pouvez leur proposer l'inscription à une newsletter.

Bien sûr, je sais que si vous avez choisi d'utiliser un générateur de site statique, vous ne pouvez pas déclencher des envois d'emails à vos utilisateurs. Mais vous pouvez utiliser une application de RSS to email qui va parcourir à intervalles réguliers votre flux RSS pour envoyer les nouvelles entrées du flux aux personnes qui le souhaitent.

C'est l'approche que j'utilise désormais pour ce blog via [Mailerlite](https://www.mailerlite.com/), dont l'usage s'est avéré peu complexe. Le plus complexe a été le fait d'avoir une adresse email d'envoi pro. C'est-à-dire que désormais la plupart des outils permettant l'envoi d'email vous demanderont une adresse associée à un domaine que vous possédez, sinon vos emails vont très probablement finir en spam.

Je vous passe la procédure d'inscription de Mailerlite, l'idée, c'est de comprendre le fonctionnement, mais après, vous pouvez en essayer d'autres qui proposent la même fonctionnalité.

Une fois inscrit, il faudra créer un formulaire d'abonnement à la newsletter. Ce formulaire sera directement intégré ensuite sur votre site.
Enfin, la dernière étape consiste à créer une campagne "RSS to email". Vous allez devoir indiquer l'adresse de votre flux RSS, et le tour est joué.

Et voilà, vous avez maintenant une newsletter pour votre blog statique, qui utilise votre flux RSS et qui va donc permettre d'envoyer un email à chaque nouvelle publication à ceux qui le souhaitent. 

Et si vous souhaitez vous inscrire à la newsletter de ce blog, c'est juste ici : 

:newsletter
