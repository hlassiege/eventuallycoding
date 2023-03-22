---
id: "19"
title: "Accepting boredom"
description: "I have learned over the years to appreciate this forced time off, and to develop the belief that it is even necessary to continue to make an impact."
date: "2023-03-21"
tags:
- "impact"
- "product"
- "engineering"
cover: "boredom.jpg"

book: "impactfulSoftwareEngineering"

language: "en"
alternates:
  - fr: "https://eventuallycoding.com/2023/03/accept-boredom"
---

Over the years at Malt I have learned an important lesson about time and the need to accept "boredom".

As the company grew, I had to redefine my job many times. I have used and used the expression "know how to fire myself" to regularly hire people better than me on this or that activity.    
When you "fire" yourself from a job, you automatically create free time for yourself, before finding a balance.
But I have learned over the years to appreciate this forced time off, and to develop the conviction that it is even necessary to continue creating impact.

## A creative job

Software engineering is a creative job. Creativity can't be ruled, but more importantly it's not likely to happen when your mind is busy doing something else.  
As you may have noticed, this creativity happens when you put down your pencils, sometimes in the shower, in front of a cup of tea or whatever.

I really like the following quote:

> Being busy is a form of laziness  
> Tim Ferris

With a full agenda, we don't have to think. But this is one of our most important roles. Without reflection and hindsight, we end up limiting our impact.

::image
![People who do not want to take the time to improve their work tools](/images/reinvent-wheel.png)
::

## A non-linear impact over time

::image
![A linear impact in time](/images/impact-time1.jpg)
::

One might think that our impact grows linearly over time. At the beginning we learn the job, the context of the company and our autonomy is weak. And then with time, we gain knowledge, we become faster and faster during the development. We don't ask for as much help, and it's even the opposite that happens. You've effectively contributed to several product improvements, and it all stacks up to continue creating impact.

But in practice, at some point, the curve can also look like this:

::image
![An impact that decreases after a while](/images/impact-time2.jpg)
::

Yes, now the improvements are in production, there is support to be done. We find ourselves being asked a lot to understand how it works, to train the newcomers etc... **We lack time**.

This phase is difficult. Some people get used to it and find a certain comfort in having become the "expert" of their product. The schedule fills up by itself, the brain is constantly solicited.

But in reality, the impact decreases. This is the famous moment in a company when you feel like you're not learning or contributing as much. You feel like you're stuck on past impacts.

Worse, the workload required to be the "expert" of the product becomes more and more important. Have you noticed? The meetings pile up, but never decrease in number? And this overload of energy can lead to burnout.

For some, the conclusion will be to go and see what is happening elsewhere to try to reproduce the impact of the beginnings, while returning to a sustainable pace.

Depressing?

There is an alternative when we finally agree to put down the pencils. Our contribution and impact work in fits and starts. **Creating impact requires downtime**.

::image
![A sawtooth impact](/images/impact-time3.jpg)
::

## Reactivity versus proactivity
It's great to be reactive, it's a great quality to be able to solve a problem when it happens.
A reactive environment is the one I describe above. Our personal agenda fills up by itself, without any control on our part.
This is a comfort zone, but if we want to contribute more, we need to take back control, put down the pencils, prune our agenda and get out of that zone.

From Senior, you are expected to work on the right problems to solve. Anticipation is expected. Proactivity and clarity are expected.
Clarity being to be able to isolate the right issues to tackle among the multitude of activities of a product team.

To do this, I suggest that you take the approach we saw together in the chapter ["Measuring everything"](https://eventuallycoding.com/en/2023/02/measuring-everything): LIME (for Listen, Ideas, Measure, Evolve)

The first step is "Listen", and for that you need time.

## The importance of creating time

For Senior ICs, to maximize your impact, you need to find ways to create free time.

By free time, I mean open phases, dedicated to technology exploration, to exchanges with peers, including outside the company, to inter-functional exchanges within the company, to data collection and analysis, to writing documents.

This listening work is necessary to determine the problems that need to be worked on, both at the product and technological levels. Not doing so means not anticipating, and exposing yourself to significant productivity losses due to an exploding technical and/or functional debt. It also means missing out on business opportunities through the use of a technology.

Every successful product organization has been able to create these spaces, popularized in particular by [Google with the famous 20% innovation rule](https://abc.xyz/investor/founders-letters/2004-ipo-letter/) (although they may not apply it exactly like that anymore).

At Malt this has resulted in innovations like :
- push notification systems on mobile
- [an open source implementation to handle Critical CSS](https://blog.malt.engineering/critical-css-pour-quelques-millisecondes-de-moins-abc382f88b3b)
- freelance groups
- Malt+, the recommendation system for freelancers
- the punchout to connect Malt to ERP

I propose you to discover an example in detail.

::example
Houssem Belhadj Ahmed  
Senior Software Security Engineer at Malt

**Date** : 2022  
**Topic** : BIMI Implementation

Since the end of 2022, every email sent by Malt has featured the company logo in Gmail on mobile.
This has increased our open rate from 40 to 60% by improving the trust linked to our brand.

Originally, Houssem was working on securing our emails, preventing fraud via identity theft, preventing phishing, and improving our domain reputation. Stepping back, he discovered the new BIMI specification, which among other things allows a company logo to be displayed in Gmail.  
He realized that this specification could improve our open rates, and that he could implement it with all the work already done on SPF, DKIM and DMARC. So he did this extra work [which he described on the blog](https://blog.malt.engineering/email-authentication-from-zero-to-bimi-e3b4a8345196).  
These are the kinds of benefits that can be expected when people have the opportunity to take time, analyze, hypothesize and act.
::

## Creating time in a Scrum team

Since Scrum is used a lot in the industry, I think it is interesting to open a parenthesis here.
There is a word in the Scrum vocabulary that often bothers me, it's "sprint". It gives the impression that we can constantly chain development iterations without a break.
Scrum has many pitfalls anyway, such as the role of the product owner, the importance of stakeholders as a proxy for users and how to organize discovery. The sprint is a bit of a reflection of these flaws. The sprint, in most cases, does not allow time for observation.   
I propose several options for creating this space.

If you are doing Scrum, try to convince people of the value of "cool-down" periods every 2 or 3 sprints. This is a period of observation that allows you to prepare the work for the next sprints, to take time to analyze the data or the support, to polish the areas that were neglected during the sprints, to do technical discovery and so on.
You can find this period in [Basecamp's "Shape Up" method](https://basecamp.com/shapeup/2.2-chapter-08#cool-down).

Otherwise, if this change meets too much resistance, make sure to increase the "Discovery" buffer within the sprints. In other words, voluntarily reduce the commitment to sprints. This is counter-intuitive, but I refer you to the expected benefits listed above.

## Alternate immersion and recovery

As a Senior IC you can also be in cross-functional teams, sometimes called Platform teams. These teams often have the mission of improving the development experience (DX). One of the difficulties of these teams is to be too far from the work done in the business squads.

Here I suggest alternating immersion and recovery phases.  
Immersion in the product teams to understand the day-to-day difficulties, recovery in the platform team to take a step back and decide what actions to take.

This is how [we decided to carry out a transformation of our front-end stack at Malt](https://blog.malt.engineering/the-singapore-project-migration-to-nuxt-ce4019b8f86c).  
In 2022, immersions in the teams allowed us to better understand the day-to-day difficulties linked to our technological choices over the previous 10 years. And it was during a recovery phase that we decided to launch this major simplification project.

## Accepting boredom

In the past I made a mistake that I want to share here. Building a product is an iterative process, consisting of two stages that are often called: Discovery and Delivery. These names can vary depending on the company, but roughly speaking, they correspond to the discovery of the problems to be solved and the identification of solutions, and then to the realization/industrialization of these solutions.

There is a certain amount of tension about time management between these two phases. And sometimes, people can think that the [product trio](https://www.producttalk.org/2021/05/product-trio/) should never have an empty backlog, because they have to "feed the development team".

This is actually a mistake. It's okay if the development team has no features to produce. And the Product Trio's first and only goal is to create a quality product for its users that generates revenue for its company, not to keep teams busy.

The development team should be involved in Discovery anyway, which would solve part of the problem.
Even if not everyone participates, this is a the perfect opportunity to take time to do technical exploration, solve debt, improve development tools and many other useful activities.

The worst choice to make would be to create "fake" work to keep the team busy. By fake I mean features that are not really expected. These are features that are pulled out of the backlog, not totally useless, but whose gain remains uncertain. It's a loss of focus from the PM/UX and Tech Lead who will have to define these tasks. It is more complexity in the product that will eventually produce its own technical and functional debt. We lose time, and we put ourselves in a good position to lose time in the future.

You have to fight against this feeling of guilt for not keeping the team busy.  
**Or of not being 100% busy yourself**.

## Questions

* How reactive or proactive do you think your team is?
* How busy are you? How much time could you free up in your schedule?
* Are there any meetings in your schedule that would not be impacted by not going?
* How many of these could be replaced by asynchronous communication?
* In the last 6 months, how many times have you had moments of calm that allowed you to unblock critical situations?

## Ressources

* [ShapeUp](https://basecamp.com/shapeup/)
* [Daily Motion implementation inspired by ShapeUp](https://medium.com/dailymotion/how-dailymotion-hacked-its-feature-team-project-model-to-shorten-time-to-market-618232f671da)
* [Frontend transformation's project at Malt](https://blog.malt.engineering/the-singapore-project-migration-to-nuxt-ce4019b8f86c)
* [BIMI project at Malt](https://blog.malt.engineering/email-authentication-from-zero-to-bimi-e3b4a8345196)
* [Letter from the founders of Google from 2004](https://abc.xyz/investor/founders-letters/2004-ipo-letter/)


::tip
This blog post is part of the book [Impactful Software Engineering](/en/2023/02/impactful-software-engineering).
Feel free to read the other chapters.
::

