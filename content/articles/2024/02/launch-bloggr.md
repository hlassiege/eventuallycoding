---
id: "36"
title: "Lancement de Bloggr"
description: "Un template de blog personnel pour Blog pour démarrer rapidement"
tags: []
date: "2024-02-19"
cover: "/launch-bloggr/bloggr.png"

language: "fr"
alternates:
    - en: "/en/2024/02/launch-bloggr"

---


J'écris des articles de blog depuis 2006. Je suis passé par du wordpress auto-hébergé, du wordpress en SAAS, medium, joomla (vi...) et j'ai fini par basculer sur un générateur de blog statique fait avec Nuxt-content.

Je vous propose de bénéficier de mon expérience et de mon travail en utilisant [Bloggr](https://github.com/hlassiege/bloggr) pour faire de même.

J'ai [pris cette décision de migrer sur nuxt-content en 2022](https://eventuallycoding.com/2022/11/blog-migration-on-nuxt) et je ne regrette absolument pas ce choix.

Après 2 ans d'usage, j'adore :
- :white_check_mark: la **flexibilité** que j'ai sur la mise en page. J'ai changé déjà plusieurs fois mon contenu, ajoutant le multilangue en 2023 par exemple.
- :white_check_mark: le **cout**. Je paie uniquement le cout du système de commentaire (5€/mois) et le nom de domaine, tout le reste est gratuit.
- :white_check_mark: l'**impact carbone**. Héberger des pages statiques consomme moins de ressources qu'un process permanent qui écoute des requêtes HTTP.
- :white_check_mark: le **terrain de jeu** qu'il représente pour moi. Je suis développeur backend à l'origine mais ce blog m'a permis de faire beaucoup de veille sur les technos front (tailwind, nuxt, les outils de builds, netlify etc...)

Mais je sais par expérience que **parfois, c'est plutot pénible de démarrer avec ces outils**.  
Que ce soit Next.js, Hugo, Gatsby, Nuxt-content, Gridsome, Jekyll etc. mettre le pied à l'étrier et créer une application de blog complète peut prendre du temps pour tout assembler.

Déjà, je vous déconseille les outils qui n'utilisent pas le templating en markdown (ou asciidoc) mais ensuite il vous faut :

- configurer proprement les outils de syntax highlighting, de markdown
- un flux RSS
- un sitemap
- un fichier robots.txt
- un système de commentaire
- la gestion des tables de matières
- des boutons de partage
- de l'analytics
- un design responsive correct (sans être soit-même spécialiste front)
- tout les petits tricks qui garantissent un SEO correct (les bonnes meta, twitter cards, open graph, les perfs google speed etc...)
- un système de newsletter

Et par expérience, assembler tout cela, même pour un dev, c'est facilement **plusieurs heures ou jours de travail**.

Ca tombe bien, j'ai pas mal bossé sur mon propre blog et je vous propose de profiter du temps que j'y ai passé.
Je viens de sortir [Bloggr](https://github.com/hlassiege/bloggr) qui est un template de blog construit au-dessus de Nuxt. Vous pouvez l'utiliser tel quel pour bénéficier de toutes les fonctionnalités ci-dessus.

::nuxt-image{src="/images/launch-bloggr/bloggr-500x268.png" alt="Bloggr home page"}
::

Vous pouvez en voir une version de démo sur [bloggr.eventuallycoding.com](https://bloggr.eventuallycoding.com/).

J'ai créé cette application de blog car je sais à quel point il est **fastidieux** d'assembler toutes les briques nécessaires pour avoir un blog efficace sur le plan du référencement, avec un design propre, accessible, responsive, avec des fonctionnalités déjà intégrées (système de commentaires, flux rss, newsletter, sitemap etc...).

Tout ce travail, qui peut prendre des jours, je vous l'épargne - **et c'est gratuit**.

Cependant, si vous considérez que vous avez vraiment gagné du temps avec ce template, pour votre propre blog ou pour votre apprentissage de Nuxt, vous pouvez envisager de soutenir ce travail. C'est facultatif, mais ce sera très apprécié.

La première option consiste à m'offrir un [café virtuel](https://www.buymeacoffee.com/hlassiege) représentant la valeur du temps que vous avez gagné.

[![Buy me a coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/hlassiege)

Mais vous pouvez aussi contribuer de bien d'autres manières :

* en parlant de ce projet sur les réseaux sociaux, sur votre blog, avec vos collègues.
* en donnant une étoile à ce projet sur github
* en contribuant au projet open source pour l'améliorer

À savoir que 10% des bénéfices seront reversés à la [fondation Unicef](https://www.unicef.org/), une organisation qui aide les enfants en difficulté dans le monde entier.


 
