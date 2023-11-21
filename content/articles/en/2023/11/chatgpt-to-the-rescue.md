---
id: "30"
title: "ChatGPT to the rescue"
description: "Not yet using copilot or chatGPT as a developer? Well, let me show you an example of why you should."
tags:
    - chatgpt
date: "2023-11-21"
cover: "chatgpt-to-the-rescue/ai.jpg"

language: "en"
alternates:
    - fr: "/2023/11/chatgpt-to-the-rescue"
---
Not yet using copilot or chatGPT as a developer?

Well, let me show you an example of why you should.

I invite you to follow me through a recent example where chatGPT saved me hours. I'll also show you these limitations during the exercise.

## Steps to writing a blog post

I've been writing this blog for 20 years. In recent years, I've been writing an average of between 1 and 2 posts a month.

Practice has made me faster. So I've added a bit of complexity and for the past few years I've been putting some of these posts in English, initially to put on Medium and now in a dedicated section on my own blog.

But I confess that this has made my writing routine more complex. Here are my steps:

- Write the post in Google Docs.

- Formatting, image search or image creation with Procreate

- Convert to Markdown using a Google Docs extension

- Save each image by hand, as Google Docs doesn't allow you to retrieve them easily

- test with Nuxt of the post with some additional information (title, description etc...)

- Check layout, adaptations for images retrieved separately from Google Docs

- Creation of the English version by copying/pasting the first file

- Use Deepl to translate in small chunks to avoid hitting the site's usage limit

- Verification and publication

The first two steps are obviously the most important; everything else is boring and uninteresting. Uninteresting to the point of sometimes making me leave a blog post in the scrap heap for several days, or even weeks.

I'd already thought of automating part of the process, but that meant using several APIs I didn't know: Google Docs, Deepl, a Markdown conversion library and, I knew, lots of  file manipulation.
It was doable, but the cost seemed excessive for a personal blog.

Then one evening I thought it would be a good exercise to do with ChatGPT.

## ChatGPT to the rescue

I asked ChatGPT to write a Python program to perform all the following operations:

- retrieve the file from the Google Docs API using its ID

- local conversation in Markdown format

- Copy in the right places on my blog with my publishing standards (year and month), add front matter yaml header

- Exported all the images from the original document and modified the Markdown to use my markup and the correct paths to access the recovered images.

- Automatic translation of the French file for the English version

To get the final result, it took between **1 and 2 hours**, interspersed with numerous video games. I don't know how long it would have taken me to get the same result, but given that I didn't know any of these APIs and I'm not a Python expert, I reckon it could have taken me **10 times as long**.

(My ego says 3 times more, but I'm convinced it's wrong).

But why 1 hour and not just 30 seconds for him to write his answer?

In fact, it's not ChatGPT that's long, it's the person handling it who has to structure his request and take it to the right place.

## ChatGPT is an assistant, not a magician.

When you use ChatGPT, you have to give it very precise instructions to obtain a result. But these instructions will evolve over time.

For my part, I use it as an assistant who writes code for me, but I find myself, as in a classic development process, exploring a path, realizing that it's not the most efficient, turning back, adding business rules that I'd forgotten etc...

A few things to know about ChatGPT

- It rarely gives recommendations on the use of this or that library or this or that approach. It's up to you to be explicit.

- It can invent answers. You must therefore systematically test

- He doesn't care if it's the most optimal method. He does what he's told.

- depending on how you ask the question, he'll drive you up the wall. He won't take a critical look at your approach.

Let's take a few examples. I asked him:

> I write documents on Google docs. Do I have a way to read this doc from a python program?

Clearly not a very precise question. But I was hoping it would use the google Docs API, which it did.

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

He also told me that I had to create a service account on Google and activate the API. As I didn't know much about it, we had a few more exchanges so that he could explain it all to me.

I'll pass on to you the few Python environment problems, which he also helped me to resolve, I finally got the file and asked him :

> I've got access to my document, how do I convert the contents of the doc into Markdown?

Here's some of the suggested code

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
    # Your conversion logic here to convert title, lists etc...
    return ""

markdown_content = ""
for element in document['body']['content']:
    markdown_content += convert_to_markdown(element)

print(markdown_content)
```

Note the "**Your conversion logic here to convert title, lists etc...**".

I've tested this and the google docs file does indeed include a list of objects corresponding to blocks of text.

At this point, I could have continued iterating with chatGPT to get it to offer me all the conversion functions for each type of element, but I felt it was far from efficient.

At this point, as a dev, [I felt I needed to redirect my assistant]{.underline}. I did a search on StackOverflow, I came across a post that advocated using the docx export instead and then the **pypandoc** library for the conversion itself. That could save me a lot of time.

**ChatGPT does what you tell it to do. It won't tell you that your approach is less than optimal!**

Anyway, this time I asked it to download the file in docx format and convert it with **pypandoc**.

He modified the code to do this, and it included the following line:

```python
output = pypandoc.convert_file(input_file, 'markdown', outputfile=output_file)
```


He also told me

> The images will be extracted into a folder named after the Markdown file name without its extension, followed by \_media. For example, if your Markdown file is called output.md, the folder containing the images will be output_media.

But that's wrong. And he didn't seem to know the right answer, or I didn't ask him the right way. This time I had to go to the pypandoc doc to correct it and add a parameter to have my images in an output directory:

```python
output = pypandoc.convert_file(input_file, 'markdown', outputfile=output_file, extra_args=['--extract-media', '.'])
```


**ChatGPT sometimes may not know, but will answer you with confidence. And you'll trust it...**

I'll skip some of the following steps, which went very smoothly, copying the markdown file to the right place according to today's date, adding the yaml front matter headers.

It went well, but I asked him the questions one by one, hence the final time. It seems to me that this is the most effective way of making progress with him: be very precise in your requests, so break down your instructions into small blocks.

I then asked him to use Deepl to translate the document into English.

I note that he proposed a very simple and effective solution

```python
DEEPL_API_KEY = 'your-deepl-api-key'

data = {
    auth_key': DEEPL_API_KEY,
    'text': french_content,
    target_lang': 'EN
}

response = requests.post('https://api.deepl.com/v2/translate', data=data)
```


However, this solution doesn't use Deepl's Python sdk. Is this a problem? Not necessarily. But in any case, he didn't tell me about it.

**By default, ChatGTP often tries to get by with the basic tools. It has rarely suggested that I use additional libs. If I want it to, I have to tell it explicitly**.

Finally, like any self-respecting customer, I changed the specifications at the end of development :)

Yes, I realized that I wanted some adaptations in the generated Markdown.

- I wanted to use a custom tag for displaying images.

- Pypandoc had introduced a lot of unnecessary line breaks, which confused Deepl during translation.

All these changes went through without a hitch. ChatGPT was able to propose the right modifications that worked the first time.

A huge strength of ChatGPT is its mastery of regexp...

And it was ChatGPT who came up with the next option that I'd probably have struggled to find on my own in the documentation.

```python
extra_args=['--wrap=none']
```


**Last but not least, the more precise your instructions, the more time ChatGPT saves.**

You'll notice that my first instructions were very laconic. Over time, I've improved the way I ask it to work and I've saved time.

For example:

> Write me a python script that browses all my markdown articles contained in a content directory and its sub-directories.
> Make me a list of the images used in these articles
> Compare this list with the images contained in another directory called "images".

> Output:
>- give me the list of images used in each article
>- Give me the list of unused images

The more precise the input instructions, the less retouching I had to do. In the example above, I was then able to detect unused images on my blog and delete them.

## Summary

From a practical point of view, my blog post writing routine is now much simpler. I've saved an incredible amount of time (hours?) and I've got rid of the tasks I didn't like the most.

ChatGPT has been particularly efficient. And if it didn't take me 30 seconds, that's more my fault than his.

You can find all the code produced [on Github](https://github.com/hlassiege/eventuallycoding-tooling). It's about 200 lines of code, 99% written by ChatGPT.

I wasn't sure about the solution, I even steered it towards the wrong approach at first. I changed the specifications several times as I was evolving them while testing the result.

As a developer, I know that he has saved me an incredible amount of time. He replaces me when I'm coding, with perfect knowledge of the APIs. This doesn't mean I don't have to think about my development process, test and refine my instructions, and tell him where the limits are. Which is normal, since he's not a mind reader and always needs an operator to guide him. And the operator's experience will influence the result obtained.
But this opens the way to people with less development expertise, but still with the same working method.

And no, it's not "less good".

During my studies, I took assembler courses on the 68000 processor. I hated it. My teacher told me at the time, "_If you can't do assembler, you won't get anywhere in computing_".

This prediction turned out to be rather wrong. New tools appeared that allowed me not to worry about assembler.

Today, tools like ChatGPT will enable me to worry less about the programming language. This will not prevent me, for the time being at least, from still needing an operator to guide me. And this operator's experience, methodological approach and ability to translate complex business problems into a software architecture and blocks of instructions will make him or her use this tool better than any other.

For the time being, this remains my superpower as a developer.
