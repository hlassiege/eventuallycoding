---
id: "2040"
title: "Integration and web development with Bulma, Vue.js etc… – Coderwatch episode 3"
description: "Let's talk about web integration, HTML, CSS and Frontend dev. 

In this post I will detail the Coderwatch implementation choices and I will focus only..."
date: "2022-04-14"
categories: 
  - "waza"
tags: 
  - "bulma"
  - "coderwatch"
  - "frontend"
  - "product"
  - "vuejs"
img: "pasted-image-0.png"
cover: "cover6.jpg"
---

Let's talk about web integration, HTML, CSS and Frontend dev. 

In this post I will detail the Coderwatch implementation choices and I will focus only on the Frontend. 

So I'm going to talk about technological choices and frameworks. 

To set the context, this post is part of a mini-series around the creation of a side project. 

If you haven't read the first ones, my goal is to describe all the steps for creating a relatively simple application:

_[www.coderwatch.io](http://www.coderwatch.io/) **: allowing you to learn computer languages ​​and frameworks while playing** . I suggest you take quizzes, earn points, and gradually climb the rankings against other players while improving your knowledge._

On each post from now on I will also give an status update on Coderwatch, the number of users and the important metrics. 

Posts in this series:

- [This is the story of a side project: cultivating an idea, creating an MVP](https://eventuallycoding.com/2022/04/04/this-is-the-story-of-a-side-project/)
- [Coderwatch: Episode 2: Design with Figma and Procreate](https://eventuallycoding.com/2022/04/08/coderwatch-episode-2-design-with-figma-and-procreate/)
- Integration and web development with Bulma, Vue.js etc… – Coderwatch episode 3

In the previous post I created a model with Figma and now we have to roll up our sleeves to integrate it into HTML/CSS. 

[![](/images/pasted-image-0.png)](https://translate.google.com/website?sl=fr&tl=en&hl=fr&client=webapp&u=https://i0.wp.com/eventuallycoding.com/wp-content/uploads/2022/04/pasted-image-0.png?ssl%3D1)

## HTML/CSS integration, with or without a framework?

First, I'd like to say that I'm more of a Backend developer and I haven't developed my skills as an integrator in the past. So what I'm going to describe here is really the approach of a Backend developer who wants to develop a side project and who has to compromise between the state of the art and the learning curve.

Because precisely, the whole objective of this challenge is to touch every aspect of the application creation, while controlling costs and time. 

For the record, I follow [Benjamin Code's Youtube channel](https://www.youtube.com/c/BenjaminCode?app=desktop) and he is rather in favor of doing without CSS Frameworks which have the unfortunate tendency to be quite heavy for sometimes little added value, or even are counterproductive because they do not use not the latest features of the language. 

You can find his full pitch here (sorry, it's in french): 

https://www.youtube.com/watch?v=77hwpuVHGps

So I tried to apply his advice by using [tailwindCSS](https://tailwindcss.com/) first. It is a framework that stands out from the others because it only offers utility classes, no components. 

(This is however not totally true because there is [tailwindui.com](http://tailwindui.com) which offers galleries of paid components.) 

But the basic idea is that you can do anything with just the utility library.

To be honest, it was quite painful. It's quite unpleasant to pollute your HTML so much and it requires some fundamentals that I didn't have at that time. Coding the responsive menu, using the flexboxes, all that was too much for a start. 

So I changed my mind pretty quickly.

However, I kept the idea of ​​finding a fairly light component-oriented framework, from which I could import only what interests me, without Javascript and with simple responsive consideration.

And you know what ? There are many of them and trying them all can quickly become a time sink!

However, I ended up with [Bulma](https://bulma.io/) :

- no Javascript included
- modular
- has components
- built to be customized by an intelligent system [of variables](https://bulma.io/documentation/customize/variables/)
- has a large number of utility classes

## A single page application with Vue.js

Ideally, for a SAAS, the best dev setup in my opinion is a front end made with a JS framework and a back end that only serves APIs. This is not always possible for SEO reasons and I will come back to this in a future post dedicated to SEO. But for Coderwatch, it seemed completely suitable to me.

The choice of Vue.js was quite natural for me. I could certainly have looked at React, Solid or Svelte, but we already use Vue.js at Malt and really without any regrets. The framework is very powerful, very easy to pick up and with a strong online community to find help.

However, I hesitated with Nuxt.js which is an overlay of Vue3 with support for Backend side development and advanced features such as server side rendering. However, considering the backend dev in Javascript did not please me too much. I will come back to this in the future post about the Backend.

With Vue.js I use

– [vue-router](https://router.vuejs.org/) for page routing

– [Pinia](https://pinia.vuejs.org/) for the management of a state management, I had however started with vuex at the start

## The build, pain in the ass of a javascript stack

 I might make some JS experts jump on this point, but for a non-specialist, the build is an indescribable pain to start with.

There are a multitude of tools in each category:

- package manager: npm, pnpm, yarn
- tooling (?): webpack, gulp, vite, parcel etc…

Many tools have overlaps, some are sometimes used together. 

And when you look for docs online, it's hell because you always find docs either on the wrong version and which doesn't work, or docs with the wrong tool combination, or with another tool . 

To illustrate, I started at a time when vuejs changed its official major version. I started with a config that officially changed the following week. Upgrading and finding the right documentation was a purge.

Another example, I didn't setup Typescript support at first. I thought it would be easy to add later. I finally spent 2 weeks struggling in a working branch to get Typescript working.

And I'm not talking about the number of times you have to struggle to figure out why an _npm install_ doesn't work, linked to a conflicting library. It is a manual work to understand the version expected by one or the other of the libraries in question.

Personally, I come from the Java world with a tool that, in my opinion, changed things radically in 2004: Maven.

Maven came as a replacement for Ant and it offers a standardized build. Ant allows you to do everything with a lot of flexibility (like Gradle today?) but at the expense of standardization.

When a dev goes from one maven project to another, even with several versions apart, he is always confortable. He don't have to learn a lot. 

From my perspective, with a novice eye, JavaScript suffers from having very powerful tools, but too numerous, with rising versions which very often are not compatible, with so much flexibility that it becomes very complex to find the right configuration at the beginning but above all it is a hell to evolve.

## Positive personal record in Web integration

I probably wouldn't have said that a few years ago, but in the end I really enjoyed this HTML/CSS integration phase.

I learned a lot about the flexbox system, about clippaths, about the modularization of my components, CSS animations, positioning etc… 

This step lasted about **a week** (still in evening and weekend mode) for about twenty pages. At the end of this week I felt much more comfortable and I wanted to progress more. 

If we forget the tooling, it was really fun to work on this part, to build pages and funnel and to gradually see the result appear.

## Numbers of the week on Coderwatch

The official launch was 2 weeks ago. The player count is 33 and I saw an increase that day with the first article in this series. However, the rate of new users is quite low (and 99% are in France).

[![](/images/pasted-image-0-8.png)](https://translate.google.com/website?sl=fr&tl=en&hl=fr&client=webapp&u=https://i0.wp.com/eventuallycoding.com/wp-content/uploads/2022/04/pasted-image-0-8.png?ssl%3D1)

The number of quizzes played is 39, which implies that several players have played only once without returning. 

No user came via referral and only 3 questions were created by players.

In short, for the moment the game has attracted almost only curious followers and we cannot say that it has found its product market fit. 

But it is certainly not at this stage that we should give up, the reverse would have been a surprise. 

Three users gave me precise and interesting feedback on their journeys and I note a few limiting elements to properly introduce the game in the first moments of registration. 

The question I'm going to have to decide from now on is: should I focus on improving the game to turn current users into regular players and get them to promote it, or do I need to focus on gaining traffic. 

Wait and see.

Thanks for reading me so far. Next week I'll be at Devoxx giving [a talk on tech impact, leadership and careers](https://cfp.devoxx.fr/2022/talk/TBG-5289/Developp(eur%7Ceuse)_Senior_avec_6_ans_d%E2%80%99experience,_et_apres_%3F) so I probably won't write any posts. But the next post in this series will focus on Backend dev.

See you soon
