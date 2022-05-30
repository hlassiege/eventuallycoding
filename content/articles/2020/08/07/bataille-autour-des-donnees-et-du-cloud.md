---
id: "1571"
title: "Bataille autour des données et du Cloud"
description: "![](/images/Ligne_maginot-1024x838.jpg)

Ce billet fait partie d’une série dont vous pourrez lire [l’introduction ici](https://eventuallycoding.com/20..."
date: "2020-08-07"
categories: 
  - "waza"
tags:
  - "startup"
  - "tech"
  - "ecosysteme"
  - "RGPD"
img: "Ligne_maginot-1024x838.jpg"
cover: "cover2.jpg"
---

![](/images/Ligne_maginot-1024x838.jpg)

Ce billet fait partie d’une série dont vous pourrez lire [l’introduction ici](https://eventuallycoding.com/2020/08/03/leurope-entre-le-marteau-chinois-et-lenclume-us/).

Le fil rouge global de cette série tourne autour du livre ["IA La plus grande mutation de l'histoire" de Kai-Fu Lee](https://livre.fnac.com/a13452637/Kai-Fu-Lee-I-A-La-Plus-Grande-Mutation-de-l-histoire), livre très bien écrit que je vous résume dans ce premier billet.

L’auteur aborde beaucoup la question des données, c’est le point central à l’origine de la révolution de l’IA et dans ce second billet je souhaitais aborder le sujet de la bataille autour des données mais aussi autour du Cloud, ce fameux cloud souverain.

## la RGPD 

La RGPD est apparu en 2016 et a eu pour vocation d'harmoniser les réglementations Européennes sur le sujet de la protection des données personnelles. 

L'avantage pour une entreprise Française est donc d'avoir, pour une fois, un cadre législatif identique au sein de la communauté lui permettant d'éviter de devoir réadapter son produit pour chaque pays membres.

Et de protection des données à protectionnisme il n’y a qu’un pas. La RGPD est aussi une arme législative, qui se veut un peu subtile, brandie pour gêner les géants Américains et Chinois. 

### La RGPD sous l’angle des utilisateurs

En tant qu'utilisateur, la RGPD ne m'a pas facilité la vie. Je suis passé du bandeau d'acceptation des cookies, un peu pénible, à des bandeaux encore plus complexes me demandant de sélectionner les cookies un par un, à chaque visite. 

Cela a globalement dégradé mon expérience utilisateur, **surtout sur mobile** !

En fin de compte, j'utilise Ghostery et Adblock Plus qui sont bien plus efficaces pour bloquer le tracking en ligne. Selon moi depuis le début il aurait fallu généraliser des solutions logicielles sur le navigateur pour que l'utilisateur choisisse globalement ce qu'il accepte ou non plutôt que de **pourrir** la navigation de l'internaute sur chaque site. 

C'était un peu l'esprit de [Do Not Track](https://fr.wikipedia.org/wiki/Do_Not_Track), aujourd'hui obsolète. Mais dans les faits les sites n'ont pas suivi en terme d'implémentation. Le plugin a l'avantage de ne pas laisser le choix aux sites.

Et surtout, malgré toutes mes protections, je suis tout autant spammé qu'avant de démarchage téléphonique et de spams emails. Toutes les boîtes se prévalent de l'intérêt légitime pour m'envoyer leurs pubs. Par exemple les entreprises de pose de fenêtre se cachent derrière des dispositifs d'information gouvernemental. 

Autrement dit, pas sûr malgré un processus très intrusif et gênant qu'on y ait gagné quelque chose de ce côté là. Bref, je n'ai rien gagné en tant qu'internaute et consommateur. Je caricature, on est censé y avoir gagné une meilleure compréhension de l'usage de nos données. En pratique ca reste très complexe et sujet à interprétation.

### La RGPD sous l’angle du CTO

En tant que CTO, j'y vois par contre des points positifs. 

Mon plus grand bémol c'est la grande possibilité d'interprétation des règles de la RGPD et ces très régulières mises à jour. Il y a presque autant de DPO que d'interprétation. Et les changements fréquents, comme par exemple [la remise en cause récente du privacy shield](https://trends.levif.be/economie/entreprises/le-privacy-shield-est-mort-ce-que-ca-change-pour-votre-entreprise/article-opinion-1315113.html?cookie_check=1596033691) (et du Safe Harbor avant lui), entraîne un certain flou préjudiciable pour les entreprises qui doivent s'adapter à ces changements avec des conséquences très importantes pour ce cas précis.

Mais comme je le disais, c'est un standard Européen, donc cela baisse le coût à l'entrée pour faire du commerce entre états membres. Et on l’a vu dans le premier billet, la fragmentation de notre marché Européen est un sacré souci. Avoir au moins un standard commun est plutôt une bonne chose.

Au delà de ça, cette norme en terme de sécurité a fait avancer les choses dans les entreprises en posant un cadre. On pourrait dire que majoritairement ce cadre relève du bon sens : faire la liste de ces fournisseurs, de ces transferts de données ou juste d'avoir des règles d'accès et un meilleur contrôle des accès aux données. Mais le bon sens n’est pas toujours bien partagé. Et surtout c'était avant un sujet purement IT et il fallait un peu prêcher dans le vent pour ca. La RGPD a permis aux DSI d’avoir un argument d’autorité pour se faire entendre plus facilement sur le sujet sécuritaire. 

### Une protection qui se veut protectionniste

Si je suis donc plutôt satisfait de cette réglementation pour les entreprises, et très insatisfait en tant que consommateur, je ne peux qu'inviter le régulateur à une certaine prudence sur ces moyens d’actions et ces intentions. 

La RGPD est aussi une arme économique. Si on regarde au delà de son intention première, l’Europe avec cette législation introduit une barrière pour les pays qui veulent opérer sur son territoire avec cette loi qui se veut extraterritoriale. 

Donc, est-ce qu'on peut voir la RGPD comme une forme de protection d'une richesse nationale ?

Eh bien, pas loin. Bien sûr avant tout c'est une forme de protection des données personnelles, de vous, de moi. 

Mais rappelons le, et c’est le sujet du livre de Kai-Fu Lee, les données sont le pétrole du 21eme siècle. 

Pour l’Europe la RGPD est tout autant une directive forte sur la façon dont on souhaite imposer notre vision sur les usages autour de la donnée, qu’une arme économique pour gêner cette collecte ou la réserver aux entreprises Européennes. 

Je re cite ce que j’indiquais dans le billet précédent, les données vont permettre d'améliorer encore et encore les algorithmes de recommandation, de calcul d'attribution de prêt bancaire, de ciblage publicitaire, de conduite de véhicules autonomes, de prédiction de trafic, de traduction temps réel etc... 

Plus une entreprise a de données, plus elle gagne d’argent. Avec cet argent elle investit en R&D, ce qui améliore la qualité de ses services et lui permet de creuser son avantage concurrentiel. Cet avantage concurrentiel se traduit par plus d’utilisateurs, et donc plus de données et le cercle vertueux continue. 

La création de barrière devant les données est une forme de protectionnisme économique aussi, voire même de souveraineté dans certains cas (Cf l’affaire [Cambridge Analytica](https://fr.wikipedia.org/wiki/Cambridge_Analytica))

Si on reprend notre fil rouge, le livre “IA la plus grande mutation de l’histoire”, tous les enjeux tourne autour de la collecte des données et de la capacité à les utiliser pour créer de nouveaux usages ou améliorer des usages existants. 

Ce protectionnisme non assumé officiellement est cependant une arme à double tranchant.

Ces dernières années on a beaucoup parlé d’amendes record sur [Google](https://www.cnil.fr/fr/la-formation-restreinte-de-la-cnil-prononce-une-sanction-de-50-millions-deuros-lencontre-de-la) ou [Facebook](https://www.lefigaro.fr/secteur/high-tech/2017/05/16/32001-20170516ARTFIG00118-la-cnil-condamne-facebook-a-150000-euros-d-amende.php). Il faut relativiser. Je n’ai pas trouvé de chiffres mais par définition les contrôles sur place de la CNIL se font majoritairement en France. Le risque étant qu’on aille d’abord pénaliser des acteurs Français/Européens, laissant le champ libre aux concurrents US qui n’avaient pas forcément besoin de cet avantage supplémentaire. Rappelons-nous par exemple des startups Teemo, Vectaury et Fidzup dont les mises en demeure publique ont radicalement freiné leur développement. Et une de ces boites [a même dû fermer ces portes](https://www.lebigdata.fr/fidzup-faillite-rgpd). Ces dossiers auraient peut être gagné à être traité plus discrètement. 

En filigrane, également, il y a la question des moyens à mettre en oeuvre. Le marché Européens est globalement moins bien financé que le marché US. Cela se traduit par des ressources moindres à allouer sur le sujet de la conformité réglementaire. 

A chaque fois que la RGPD évolue (comme par exemple avec l’affaire récente sur le privacy shield) et qu’elle se complexifie, les impacts sur les entreprises Françaises sont plus importantes que sur les entreprises US en ratio de leurs ressources financières.

Dit autrement, un Google ou un Alibaba qui a passé ces 20/30 dernières années à créer des boîtes solides et massivement internationales peuvent plus facilement investir des ressources pour s’adapter à ces législations. Si on ajoute à cela une possibilité de contrôle plus grande et des sanctions, comme la mise en demeure publique, qui n’ont d’impact que sur notre marché local, le risque est grand de se mettre des balles dans le pied très fréquemment.

Et le pire, c’est que comme ce protectionnisme n’est pas assumé, en pratique l’administration continue à utiliser massivement des outils US et Chinois. Par exemple [Paris 2024 vient de décider d’utiliser AliBaba pour les futurs jeux](https://itsocial.fr/actualites/partenariat/lorganisation-des-jeux-olympiques-de-paris-2024-opte-pour-le-cloud-dali-baba/).

## Et dans les autres pays ?

Pour la Chine, le protectionnisme se traduit autrement, il y a des règles d’implantation assez contraignantes pour qu’une entreprise opère en Chine, et bien sûr une localisation et une adaptation à un marché culturellement très différent. Ce protectionnisme qui a bien d'autres visages (corruption, dumping etc...) fait que la Chine n'est toujours pas considéré comme une économie de marché par l'OMC.

Côté US, on cite souvent le Patriot Act. Cette loi parle aussi des données mais dans un contexte uniquement de lutte anti terroriste à l’origine. Il n’y a aucune référence à la protection des données. La grande particularité de cette loi (et du Cloud Act), comme pour le RGPD, c’est son extra territorialité, c’est à dire que cette loi s’applique, à toute entreprise américaine même au delà de ses frontières et quelque soit la réglementation locale. Le Patriot act inquiète car il permet en théorie un accès et [une lecture de documents industriels](https://www.challenges.fr/tribunes/comment-le-patriot-act-permet-d-espionner-les-entreprises-francaises_111724) d’entreprises Françaises sans demande préalables et sans notifications et sans tenir compte de nos propres protections. Entre ça [et la souveraineté du dollar](https://www.carnetsdubusiness.com/Souverainete-du-dollar-et-violation-d-embargos-134-milliard-d-amende-pour-la-Societe-generale_a1965.html) qui permet aux US d'interférer dans les transactions financières des autres pays, on peut dire qu'ils ont les outils pour assoir leur domination.

Mais les récentes affaires nous donnent d’autres éclairages très intéressants sur le protectionnisme américain.

### Huawei

Ce qu’on voit aujourd’hui autour de de l’affaire [Huawei](https://www.numerama.com/politique/624110-donald-trump-prive-huawei-de-google-play-sur-ses-smartphones-jusquen-2021.html) c’est l’illustration de ces sujets autour des données. Les USA soupçonnent un espionnage lié aux infrastructures télécom et notamment 5G en cours de mise en place par Huawei et ont donc placé l’entreprise sur liste noire.

Est-ce fondé ? Difficile à dire. C’est sans doute aussi un sujet de souveraineté nationale pour un pays qui voit son infrastructure tourner pavillon Chinois.

Ne soyons pas naïf, l’espionnage n’est pas un mythe, chaque état à ses propres fers de lance dans ce domaine, même auprès de ces partenaires, [CISCO](https://www.lemondeinformatique.fr/actualites/lire-scandale-de-la-nsa-le-patron-de-cisco-fait-la-lecon-a-obama-57508.html) et [Dell](https://www.numerama.com/magazine/29353-nsa-routeurs-serveurs-backdoor.html) par exemple pour les US. D’ailleurs Berlin également [aurait confirmé des liens](https://www.lefigaro.fr/flash-actu/berlin-a-la-preuve-que-huawei-a-travaille-avec-les-services-chinois-20200129) entre Huawei et le renseignement Chinois.

### TikTok

Le conflit TikTok est très intéressant également. De loin, c'est "juste" un réseau social de plus. Alors pourquoi Trump s'y intéresse. Qu'est ce que ca peut bien faire pour les US que ce réseau social attire des américains ? 

Et bien cela illustre parfaitement à quel point le contrôle sur les données mondiales est un enjeu d'état et les USA l'ont bien compris. C'est une question de protectionnisme autour des intérêts américains. Et le contrôle des données en fait partie, c'est l'un des enjeux majeurs des prochaines années.

Autre fait intéressant, c'est Microsoft qui se porte volontaire au rachat qui pourrait être imposé. Microsoft qui a déjà racheté Linkedin et Github. A ne pas se tromper, il s'agit surtout pour Microsoft de consolider sa position sur le terrain de la connaissance et des données.

La remarque la plus intéressante dans cette histoire, c’est ce tweet :

![](/images/twitterDHH.png)

A DHH (David Heinemeier Hansson) je pourrais répondre que l’Europe n’a pas l’unité nécessaire pour se faire entendre aussi fort. 

Mettons que l’Europe en soit capable, vous allez me dire qu’on créérait des internets par régions économiques ? En réalité c’est déjà le cas, il existe un internet Russe, un internet Chinois, un internet Américain avec des applications et des sociétés qui sont de pures copies. 

Sur le fond et de mon opinion c’est dérangeant et très en opposition avec l’idée originale de Tim Berners Lee. C’est bien sûr très idéaliste mais j’aurais espéré que des outils de communication universelles permettent de rapprocher les gens. Il n’empêche qu’on y va tout droit. 

## Le dilemme des entreprises Européennes

Reprenons, la RGPD peut contraindre et empêcher des entreprises étrangères de s’implanter sur le marché Européen, elle remplit en partie son rôle politique.

Sauf que l’Europe est un gros consommateur de nombreux services US encadré par le Patriot Act, bien plus que l’inverse. 

Dans ce contexte, les entreprises Européennes au milieu de tout cela ont du souci à se faire car les deux alternatives proposées sont plutôt handicapantes :

- choisir sciemment des produits, soit US, soit Chinois en sachant qu'on handicape notre propre développement de super champions d’une part, et on se met en risque de fuite de données vers des concurrents US d’autre part
- imposer aux sociétés Françaises de ne pas utiliser de service étrangers, au risque de ne pas bénéficier de services aussi perfectionné et donc de creuser un retard sur la concurrence internationale. 

Suicide économique ou suicide économique ?

Non je ne dirais pas que la question est vite répondue.

C’est exactement à quoi se résume la question autour de [la remise en cause du Privacy Shield](https://www.usine-digitale.fr/article/l-annulation-du-privacy-shield-doit-s-appliquer-immediatement-tranche-la-cnil-europeenne.N989069) et des débats autour du Cloud Act. 

On vient de parler de souveraineté dans le cadre de Huawei puis de Cloud, la transition est idéale pour parler de Cloud souverain :). 

## Le cloud souverain 

La Chine et les US ont développé des super géants dans de nombreux domaines du numérique. Je vais surtout parler des US car, pour l'instant, c'est surtout ces produits qui prévalent en France. 

N'importe quelle entreprise, privée ou publique, est très rapidement confrontée à des produits US, que ce soit pour les OS des machines personnelles et des serveurs, les services de Cloud, et les très nombreux SAAS qu'elle utilise. 

Le Cloud et les SAAS ont été un accélérateur majeur ces dernières années pour les entreprises qui ont pu se focaliser sur leur coeur de métier et déléguer le reste à des spécialistes de l’infrastructure, des services de gestion RH, de learning management, d'envoi de SMS, d'envoi de newsletter, de segmentation marketing, de CRM etc...

Cette prédominance US a de quoi inquiéter bien sûr et surtout sur le socle de base : OS et Cloud. 

Si Trump découvre aujourd’hui ce concept de souverainisme sur les infrastructures de bases avec Huawei, l’Europe elle y est confrontée depuis de nombreuses années.

C'est pourquoi on entend régulièrement des politiques prôner des programmes d'OS souverains ou cloud souverains. 

Cela a donné lieu à des échecs relativements importants comme [Numergy](https://www.usinenouvelle.com/article/sfr-se-donne-un-nouveau-depart-dans-le-cloud-sans-son-cloud-souverain-numergy.N673834) et [Cloudwatt](https://www.usinenouvelle.com/article/adieu-le-cloud-souverain-orange-ferme-aujourd-hui-cloudwatt.N925104), échecs d’autant plus rageant qu’ils étaient prévisibles et que ces financements ont volontairement négligé des acteurs déjà présents comme OVH et Clever Cloud à l’époque. 

Malheureusement sur ce dossier comme dans beaucoup d’autres, on a vu à l’oeuvre les mêmes usual suspects que l’on retrouve bien souvent et qui trustent les marchés publics.

Plus récemment, [une tribune a été signée](https://www.latribune.fr/opinions/tribunes/ne-laissons-plus-les-gafa-s-emparer-des-donnees-europeennes-853782.html) pour relancer l'idée d'un label de Cloud Français

On peut déjà se demander pourquoi Cloud Français et pas Européen. Je ne pense pas qu’il faille raisonner uniquement national sur le sujet. Mais passons. 

On voit également des injonctions régulières sur Twitter à utiliser des services Français déjà existants, et sinon la personne passerait soit pour un incompétent (car il ne sait pas reconnaître la qualité à la Française), soit un traître à la patrie. 

Il est forcément difficile de répondre à ces tweets, si tant est que ca ait une quelconque utilité de toute façon, au risque de devoir défendre des services US alors même qu’au contraire, on apprécie les initiatives Européennes et on veut les voir réussir..

Il y a [des chiffres cependant](https://www.iphon.fr/post/depenses-innovation-rd-apple-google-microsoft-depasse-par-amazon-901015) qui sont assez révélateurs, Amazon par exemple dépense 22 milliards pour sa R&D chaque année, Alphabet (Google) 16 milliards. [Alibaba](https://www.latribune.fr/technos-medias/internet/e-commerce-le-chinois-alibaba-va-investir-15-milliards-de-dollars-en-r-d-753807.html) c’est 15 milliards.

En comparaison, [OVH c’était 1.5 milliards d’investissement au total](https://www.journaldunet.com/solutions/cloud-computing/1438443-apres-deux-ans-a-marche-forcee-ovh-leve-le-pied/) (pas uniquement de R&D) sur 5 ans. Je n’ai pas les budgets de Scaleway mais on doit être dans les mêmes eaux. En moins grand public vous avez également outscale par Dassault Système qui joue à fond la carte cloud souverain pour l’IAAS. Ils déclaraient dans [un communiqué de presse](https://fr.outscale.com/communiques-presse/celine-bousquet-rejoint-outscale-poste-de-directrice-recherche-developpement/) dépenser 15% de leur CA en R&D, CA qui [selon Wikipedia](https://fr.wikipedia.org/wiki/Outscale) est de l’ordre de 7.5M d’euros. On est loin d’OVH en la matière.

Alors entendons nous bien, ce qui fait le succès d’un [écosystème tech](https://eventuallycoding.com/2019/12/19/quest-ce-quun-ecosysteme-tech/) c’est la concentration en un même lieu de sociétés tech, d’universités, d’investisseurs bien pourvus qui collaborent et se consomment leurs services mutuellement. Nous avons tout à gagner que des super champions se développent chez nous. 

Mais les sociétés du cloud, notamment sur le IAAS restent en retard, peut être seulement de quelques années, mais ces années comptent triple dans ce domaine. 

Et l’écart se creuse.

## Alors, c’est tout, on plie bagage ? 

J’ai personnellement beaucoup apprécié le discours de Octave Klaba lors de tech.rocks 2019. Il insistait sur le fait qu’OVH ne devait pas emprunter la route des GCP et Amazon mais devait trouver une route intermédiaire et s’appuyer sur l’expertise d’acteurs du PaaS comme Clevercloud (et peut être d’autres comme platform.sh ou Qovery ?) pour étoffer la gamme de service.

Attendre qu’une entreprise devienne aussi pointue sur tous les domaines, le IaaS, le PaaS, qu’elle développe une marketplace de services, une plateforme data en SAAS etc… je pense que le pari de rattraper GCP et Amazon serait risqué.

A l’inverse, si OVH se concentre sur son savoir faire et rattrape son retard uniquement sur la partie Data center, et collabore avec d’autres acteurs pour constituer une offre complète de service plus larges qu’aujourd’hui au dessus de ça, il y a une porte de sortie. Evidemment la qualité de cette intégration (coucou la console d’admin OVH Cloud...) jouera également et la façon dont on saura le vendre va jouer énormément. 

Bref de sacrés défis et enjeux en perspective. 

Au moment où j’écris ce billet je découvre le consortium [Gaia-X](https://www.lesnumeriques.com/vie-du-net/qu-est-ce-que-gaia-x-le-meta-cloud-europeen-n151195.html) qui se veut comme un regroupement de plusieurs grosses entreprises Européennes pour définir un fonctionnement, des spécifications interopérables et un standard commun pour bâtir des services dessus. Ce n’est pas un Cloud mais une forme de coopération pour définir ce qui devrait tourner sur un Cloud Européen.

Alors c’est un peu tôt pour l’instant, cela date de juin 2020 et je préfère éviter de commenter sur le fond parce que pour l’instant c’est encore assez peu concret dans mon esprit mais j'avoue rester sceptique sur l'approche consistant à vouloir créer un standard d'interop sur des services alors qu'on est plutôt dans une problématique de R&D que de stabilisation des standards en ce moment.

Sur la forme, il est très intéressant de lire le discours qui accompagne cette création :

“L'autre grand sujet discuté par la CE est la création d'un espace européen des données, un _“véritable marché unique des données”_, résume le document. Les données étant _“_**_le carburant de l'intelligence artificielle_**_”_, il est nécessaire de créer une sorte de nuage européen au sein duquel _“les données à caractère personnel et non personnel, y compris les données industrielles sensibles, soient en sécurité et dans lequel_ **_les entreprises aient facilement accès à une quantité quasi infinie de données industrielles de haute qualité_**_, stimulant la croissance et créant de la valeur tout en minimisant l’empreinte carbone et environnemental humain”._

_Source_ [_lesnumériques_](https://www.lesnumeriques.com/vie-du-net/qu-est-ce-que-gaia-x-le-meta-cloud-europeen-n151195.html)

Pour en revenir au Cloud, c’est le socle. Mais le jeu n’est pas fini. Le Cloud a été un énorme changement ces dernières années. Il a permis une accélération de développement de nombreuses boites qui ont pu profiter d’infrastructure plus riche malgré leur taille. C’est encore un enjeu fort mais c’est “presque terminé” si on lis entre les lignes du livre de Kai-Fu Lee. Les prochains défis vont porter autour de l’IA et ces usages. 

Il faudra que nous ayons des alternatives européennes mais il faut aussi regarder vers l’avenir et ne pas rater cette marche là. 

Ce sera le sujet du prochain billet : l’économie des TIC (technologie de l’information et des communications) et nos investissements en la matière.
