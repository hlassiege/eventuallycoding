---
id: "30"
title: "ChatGPT à la rescousse"
description: "Vous n'utilisez pas encore copilot ou chatGPT en tant que développeur(euse) ? Eh bien, laissez-moi vous montrer un exemple de pourquoi vous devriez."
tags: 
    - chatgpt
date: "2023-11-21"
cover: "chatgpt-to-the-rescue/ai.jpg"

language: "fr"
alternates:
    - en: "/en/2023/11/chatgpt-to-the-rescue"
---
Vous n'utilisez pas encore copilot ou chatGPT en tant que développeur(euse) ?

Eh bien, laissez-moi vous montrer un exemple de pourquoi vous devriez.

Je vous invite à me suivre d'un exemple récent où chatGPT m'a fait gagner des heures. Je vous montrerai également ces limites pendant l'exercice.

## Les étapes d'écriture d'un billet de blog

Je tiens ce blog depuis 20 ans. Ces dernières années, j'écris en moyenne entre 1 et 2 billets par mois.

La pratique m'a permis d'être plus rapide. J'ai donc ajouté un peu de complexité et depuis quelques années, je passe certains de ces billets en anglais, au début pour les mettre sur Medium et désormais dans une section dédiée sur mon propre blog.

Mais j'avoue que cela a complexifié ma routine d'écriture. Voici mes étapes :

-   Écriture du billet sur Google Docs.

-   Mise en forme, recherche d'image ou création d'image avec Procreate

-   Conversion en Markdown via une extension Google Docs

-   Sauvegarde de chaque image à la main, car Google Docs ne permet pas facilement de les récupérer

-   Test sous Nuxt du billet avec quelques informations supplémentaires (titre, description etc...)

-   Vérification de la mise en page, adaptations pour les images récupérées à part depuis Google Docs

-   Création de la version anglaise en copiant/collant le premier fichier

-   Utilisation de Deepl pour traduire par petits blocs afin de ne pas tomber sur la limite d'usage du site

-   Vérification de l'ensemble et publication

Les deux premières étapes sont évidemment les plus importantes, tout le reste est peu intéressant et rébarbatif. Rébarbatif au point de parfois me pousser à laisser un billet de blog au rebut pendant plusieurs jours, voire semaines.

J'avais déjà pensé à automatiser une partie du processus mais ça impliquait d'utiliser plusieurs APIs que je ne connaissais pas : Google Docs, Deepl, une librairie de conversion vers Markdown et, je le savais, plein de manipulations de fichiers.\
C'était faisable, mais le coût me semblait excessif pour un blog personnel.

Et puis un soir je me suis dit que ce serait un bon exercice à faire avec ChatGPT.

## ChatGPT à la rescousse

J'ai demandé à ChatGPT d'écrire un programme Python afin de réaliser toutes les opérations suivantes :

-   récupération du fichier depuis l'API Google Docs à partir de son ID

-   conversation en local au format Markdown

-   Copie aux bons endroits de mon blog avec mes normes de publication (année et mois), ajout de l'entête yaml front matter

-   Export de toutes les images du document original et modification du markdown pour utiliser mon markup et les bons chemins pour accéder aux images récupérées

-   Traduction automatique du fichier Français pour la version Anglaise

Pour obtenir le résultat final, cela a pris entre **1 et 2h**, entrecoupé de nombreuses parties de jeu vidéo. Je ne sais pas combien de temps, j'aurais mis pour obtenir le même résultat, mais sachant que je ne connaissais aucune de ces APIs et que je ne suis pas un expert Python, je considère que j'aurais pu mettre **10 fois plus**.

(Mon égo me dit 3 fois plus, mais je suis convaincu qu'il a tort)

Mais, pourquoi 1h et pas juste 30 secondes le temps qu'il écrive sa réponse ?

En fait, ce n'est pas ChatGPT qui est long, mais c'est la personne qui le manipule qui doit structurer sa demande et l'emmener au bon endroit.

## ChatGPT est un assistant, pas un magicien

Quand on utilise ChatGPT, il faut lui donner des instructions très précises pour obtenir un résultat. Mais ces instructions, vous allez les faire évoluer au fil du temps.

Pour ma part, je l'utilise comme un assistant qui écrit le code pour moi, mais je me retrouve, comme dans un processus de développement classique, à explorer une piste, me rendre compte que ce n'est pas la plus efficace, rebrousser chemin, ajouter des règles métiers que j'avais oubliés etc...

Plusieurs choses à savoir sur ChatGPT

-   Il donne rarement des recommandations sur l'usage de telle ou telle librairie ou de telle ou telle approche. C'est à vous d'être explicite

-   Il peut inventer des réponses. Il faut donc tester systématiquement

-   Il se fiche de savoir si c'est la méthode la plus optimale. Il fait ce qu'on lui demande de faire

-   selon la façon dont vous posez la question, il vous emmènera dans le mur. Il n'apportera aucun regard critique à votre démarche

Prenons quelques exemples. J'ai lui ai demandé :

> j'écris des documents sur Google docs. Est-ce que j'ai un moyen pour lire ce doc à partir d'un programme en python ?

La question est clairement peu précise. Mais, j'espérais bien qu'il utilise l'API google Docs, ce qu'il a fait.

```python
from googleapiclient.discovery import build
from google.oauth2 import service_account

SERVICE_ACCOUNT_FILE = 'path/to/service_account.json'

DOCUMENT_ID = 'your-document-id'

SCOPES = ['https://www.googleapis.com/auth/documents.readonly']

creds = service_account.Credentials.from_service_account_file(SERVICE_ACCOUNT_FILE, scopes=SCOPES)

service = build('docs', 'v1', credentials=creds)

document = service.documents().get(documentId=DOCUMENT_ID).execute()

print(document['body']['content'])

```

Il m'a aussi précisé qu'il fallait que je crée un service account sur Google et que j'active l'API. Comme je ne connaissais pas bien, on a fait quelques échanges supplémentaires pour qu'il m'explique tout cela.

Je vous passe les quelques soucis d'environnement Python, qu'il m'a également aidé à résoudre, j'ai finalement récupéré le fichier et je lui ai demandé :

> J'ai bien accès à mon document, comment convertir le contenu du doc en markdown ?

Voici une partie du code proposé

```python
from googleapiclient.discovery import build
from google.oauth2 import service_account

SERVICE_ACCOUNT_FILE = 'path/to/your/service_account.json'
SCOPES = ['https://www.googleapis.com/auth/documents.readonly']
creds = service_account.Credentials.from_service_account_file(
    SERVICE_ACCOUNT_FILE, scopes=SCOPES)
service = build('docs', 'v1', credentials=creds)

DOCUMENT_ID = 'your-document-id'

document = service.documents().get(documentId=DOCUMENT_ID).execute()

def convert_to_markdown(element):
    # Your conversion logic here to convert title, lists etc…
    return ""

markdown_content = ""
for element in document['body']['content']:
    markdown_content += convert_to_markdown(element)

print(markdown_content)
```

Vous noterez le "**Your conversion logic here to convert title, lists etc...**"

J'ai testé et effectivement, le fichier google docs comprend une liste d\'objets correspondant à des blocs de textes.

À ce moment-là, j'aurais pu continuer à itérer avec chatGPT pour qu'il me propose toutes les fonctions de conversions pour chaque type d'éléments, mais j'ai senti que c'était loin d'être efficace.

À cette étape, en tant que dev, [j'ai senti qu'il fallait réorienter mon assistant]{.underline}. J'ai fait une recherche et sur StackOverflow, je suis tombé sur un post qui préconisait d'utiliser plutôt l'export en format docx et ensuite la librairie **pypandoc** pour la conversion elle-même. Voilà qui pouvait me faire gagner un temps fou.

**ChatGPT fait ce que vous lui demandez de faire. Ce n'est pas lui qui vous indiquera que votre approche est peu optimale !**

Bref, cette-fois ci, je lui ai demandé de télécharger le fichier au format docx et de le convertir avec pypandoc.

Il a donc modifié le code pour cela, et ce code incluait la ligne suivante :

```python
output = pypandoc.convert_file(input_file, 'markdown', outputfile=output_file)
```


Il m'a également dit

> Les images seront extraites dans un dossier nommé selon le nom du fichier Markdown sans son extension, suivi de \_media. Par exemple, si votre fichier Markdown s'appelle output.md, le dossier contenant les images sera output_media.

Mais ça, c'est faux. Et il ne semblait pas connaître la bonne réponse ou bien, je ne lui ai pas posé la question de la bonne façon. J'ai dû aller cette fois sur la doc de pypandoc pour corriger et ajouter un paramètre pour avoir mes images dans un répertoire de sortie :

```python
output = pypandoc.convert_file(input_file, 'markdown', outputfile=output_file, extra_args=['--extract-media', '.'])
```


**ChatGPT parfois peut ne pas savoir mais vous répondra avec assurance. Et vous lui ferez confiance...**

Je vous passe une partie des étapes suivantes qui se sont très bien passées, copie du fichier markdown au bon endroit en fonction de la date du jour, ajout des entête yaml front matter.

Cela s'est bien passé mais je lui ai posé les questions une par une, d\'où le temps final. C'est, il me semble, la façon la plus efficace d'avancer avec lui, être très précis dans ces demandes donc découper ses instructions en petits blocs.

Je lui ai ensuite demandé d'utiliser Deepl pour traduire le document en Anglais.

Je note qu'il m'a proposé une solution très simple et efficace

```python
DEEPL_API_KEY = 'your-deepl-api-key'

data = {
    'auth_key': DEEPL_API_KEY,
    'text': french_content,
    'target_lang': 'EN'
}

response = requests.post('https://api.deepl.com/v2/translate', data=data)
```


Cette solution n'utilise cependant pas le sdk Python proposé par Deepl. Est-ce grave ? Pas forcément. Mais en tout cas, il ne m'en a pas parlé.

**Par défaut ChatGTP essaie souvent de s'en sortir avec les outils de base. Il m'a rarement proposé d'utiliser des libs additionnelles. Si je veux que ce soit le cas, je dois lui préciser explicitement.**

Enfin, comme tout bon client qui se respecte, j'ai changé les spécifications à la fin du développement :)

Eh oui, je me suis rendu compte que je souhaitais des adaptations dans le markdown généré.

-   Je souhaitais utiliser une balise custom pour l'affichage des images.

-   Pypandoc m'avait introduit de nombreux passages à la ligne inutile, ce qui perturbait Deepl pendant la traduction.

Toutes ces modifications sont passées sans aucune embuche. ChatGPT a su proposer les bonnes modifications qui ont marché du premier coup.

Un énorme point fort de ChatGPT, c'est sa maîtrise des regexp...

Et c'est lui qui a su me proposer l'option suivante que j'aurais sans doute galéré à trouver tout seul dans la documentation.

```python
extra_args=['--wrap=none']
```


**Dernier tips, le temps gagné par ChatGPT augmente avec la précision de vos instructions.**

Vous noterez que mes premières instructions étaient très laconiques. Avec le temps, j'ai amélioré la façon de lui demander de travailler et j'ai gagné du temps.

Par exemple :

> Écris-moi un script python qui parcourt l\'ensemble de mes articles en markdown contenu dans un répertoire content et ces sous répertoires
> Fais-moi la liste des images utilisée dans ces articles
> Compare cette liste avec les images contenue dans un autre répertoire \"images\"

> En sortie :
>- donne-moi la liste des images utilisées par articles
>- Donne-moi la liste des images non utilisées

Plus les instructions d'entrée étaient précises, moins j'ai eu à retoucher. Dans l'exemple ci-dessus, j'ai pu ensuite détecter les images non utilisées de mon blog pour les supprimer.

## Bilan

D'un point de vue pratique, désormais ma routine d'écriture d'un article de blog est grandement simplifiée. J'ai gagné un temps fou (des heures ?) et je me suis débarrassé des tâches qui me plaisaient le moins.

ChatGPT a été particulièrement efficace à un ou deux ratés prêts. Mais si je n'ai pas mis 30 secondes, c'est plus de ma faute que de la sienne.

Vous pouvez retrouver l'ensemble du code produit [sur Github](https://github.com/hlassiege/eventuallycoding-tooling). C'est environ 200 lignes de code, écrites à 99% par ChatGPT.

Je n'étais pas sûr de la solution, je l'ai même orienté sur une mauvaise approche au début. J'ai changé plusieurs fois de spécifications car je les faisais évoluer en même temps que je testais le résultat.

En tant que développeur, je sais qu'il m'a fait gagner un temps fou. Il me remplace quand je code, avec une connaissance parfaite des API. Cela ne m'empêche pas de devoir réfléchir à mon processus de développement, tester, raffiner mes instructions, lui préciser les cas aux limites. Ce qui est normal, il ne lit pas dans les pensées et il a toujours besoin d'un opérateur pour le guider. Et l'expérience de l'opérateur va jouer sur le résultat obtenu.\
Mais cela ouvre la voie à des personnes moins expertes en développement, mais toujours avec la même méthode de travail.

Et non, ce n'est pas "moins bien".

Pendant mes études, j'ai eu des cours d'assembleur sur processeur 68000. Je détestais ça. Mon professeur m'a dit à l'époque "*si vous ne savez pas faire de l'assembleur, vous n'arriverez à rien dans l'informatique*".

Cette prédiction s'est révélée plutôt fausse. De nouveaux outils sont apparus qui m'ont permis de ne pas me préoccuper de l'assembleur.

Aujourd'hui des outils comme ChatGPT vont me permettre de moins me préoccuper du langage de programmation. Cela n'empêchera pas, pour l'instant en tout cas, qu'un opérateur sera toujours nécessaire pour le guider. Et l'expérience de cet opérateur, son approche méthodologique, sa capacité à traduire des problèmes métiers complexes en une architecture logicielle et des blocs d'instructions lui feront mieux utiliser cet outil qu'un autre.

Cela reste encore, pour l'instant, mon super-pouvoir de développeur.
