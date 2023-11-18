---
id: "29"
title: "Why use an Internal Developer Portal?"
description: "An Internal Developer Portal is a tool that centralizes all the information a development team needs to build, test and deploy an application."
tags:
    - platform
    - engineering
date: "2023-11-18"
cover: "dashboard-car.jpg"

language: "en"
alternates:
    - fr: "https://eventuallycoding.com/2023/11/idp"
---
## Internal Developer Platform

We regularly talk about Internal Developer Platforms. And it's quite possible that you don't know this acronym, but you use it [every day]{.underline} if you work in Engineering.

It's the backbone for building, testing and deploying an application.

Its purpose is to hide complexity and speed up the ability to build software.

Personally, it's what I used to call a "software factory" just a few years ago.

In short, you've already heard of it.

An IDP can take many forms. A PAAS can be an IDP in the sense that it's the backbone on which the application is built (even if the CI part is often missing).

Everything to do with automating your infrastructure falls within the definition of your IDP.

Once we've said that, you'll have understood that the IDP is essential to a development team's ability to guarantee and boost velocity.

The major trend in recent years towards automation, infrastructure as code, orchestration, environment management and deployment has all contributed to drastically accelerating the capacity of product teams.

It's easy to forget, but it's not so long ago that most companies **delivered on a quarterly or even half-yearly basis**.

Worse still, each new software release mobilized **dozens of people over several days**.

The industry has made huge strides in automation and software factories, coupled with the flexibility of the cloud (faster environment provisioning) to now enable **a daily production release rhythm**, with virtually no human action.

If you're not familiar with [DORA metrics](https://cloud.google.com/blog/products/devops-sre/using-the-four-keys-to-measure-your-devops-performance?hl=en), they've been used for some years now to measure the efficiency of engineering teams. And one of these metrics is precisely **deployment frequency**.

A high-performance team deploys at least once a week, but often several times a day. This is made possible by modern software factories, or internal developer platforms, if you've been paying attention.

At this stage of the reading, I don't think I need to explain further the interest of these **platforms** and the benefit they have brought to the whole industry.

(The purpose of this post is not to talk about **platform teams**, but implicitly, you will understand that these teams are key to the overall health of Engineering and its ability to deliver software.

## Internal Developer Portal

Today, we're hearing more and more about internal developers **portal**. From now on in this post I'll use the acronym IDP to refer to them.

An Internal Developer Portal should not be confused with the Internal Developer Platform. But it is part of it.

An Internal Developer Portal is intended as a unified interface to all the tools offered by an Internal Developer Platform.

So here again, [you're probably already using an IDP]{.underline} even if you don't know the name. Or to be more precise, you've probably already seen parts of an IDP.

It's your CI dashboard, for example:

::nuxt-image{src="/images/idp/image2.png" alt="Jenkins dashboard"}
::

Maybe it's your argocd dashboard for your deployments:

::nuxt-image{src="/images/idp/image4.png" alt="ArgoCD dashboard"}
::

You may already have gathered a whole range of information in a Jira Board, which is already an advanced use.

::nuxt-image{src="/images/idp/image1.png" alt="Jira Dashboard"}
::

But in addition to these few tools, it's often necessary to consult a multiplicity of products. Here, for example, is a mindmap of what this means at Malt.

::nuxt-image{src="/images/idp/image5.png" alt="Mindmap of all tools used at Malt. Thanks to Jonathan Perucca for providing this mindmap."}
::

In short, someone on a product team has to juggle products from :

- ticketing (jira, github issues etc..)

- alerting (sentry, datadog)

- security alerting (snyk, dependabot...)

- wiki and documentation (notion, confluence, miro...)

- git repository (gitlab, github...)

- software factory (gitlab CI, github actions, circle CI...)

- communication channels (slack, teams, emails...)

- deployment platform(s) (cloud console, PAAS, argocd)

- monitoring tools (datadog, prometheus, grafana)

The information overload is staggering compared with the stack I was able to use in the early 2000s.

Please don't misunderstand. This stack is also the one that enabled us to make a giant leap forward in the industry in terms of delivery rate and software quality.

But **this stack deserves to be simplified, or rather centralized**. Which is what IDPs are all about: consolidating all information.

Because this decentralization often turns out to be a waste of time, and therefore money.

Let's go back to the mindmap we saw earlier: the development cycle is punctuated by numerous questions that result in permanent interruptions:

* Who's in charge of this service?
* When was it last deployed or modified?
* Have I received any alerts in production?
* What kind of software version does it correspond to?
* Is anyone working on it?
* Who should I notify if I update this component?
* What's the latest on the X initiative launched last month?
* How much does the service I've deployed in production cost? Is this normal?
* How do I add a new service to the system?
* How can I be sure that my service is running at the right memory and CPU size?
* How can I change these parameters if necessary?

And of course, the product doesn't work in isolation. Other teams sometimes need the same answers.

* Who takes care of this functionality?
* What's the slack channel to contact the right people if it's not working or if I want to discuss it?
* Is the feature announced at the last Product Meeting already available? How exactly does it work? Where is the documentation?

The purpose of the Internal developer portal is to bring information together in one place.

It often consists of several major components:

- the service catalog

- the automation portal

- scorecard definition

- cost management

The subject is now very popular. Thoughtworks and Forrester have released [a study in 2023](https://www.thoughtworks.com/content/dam/thoughtworks/documents/report/what-we-do/enterprise-modernization-platforms-cloud/tw_report_empowering_engineering_effectiveness_forrester_opportunity_snapshot.pdf) to measure software practices related to development platforms.

In this study, it appears that 78% of teams plan to set up an internal developer portal.

Gartner made this [a recent recommendation in 2022](https://www.gartner.com/en/documents/4010078).

In short, if this whole ecosystem has the wind in its sails, it's because it boosts team productivity.

Internal developer portals are designed to reduce the time wasted by an engineering team (we'll see how below).

We'll be looking at average time savings of between 5% and 15% over the year.

This means a gain of :

- 250 to 750k for a team of 50 people.

- 500k to 1.5M for a team of 100 people.

- from 2.5M to 7.5M for a team of 500 people.

It doesn't take long to understand the importance of the subject.

::tip

This gain is not linear. As the loss of information is greater as the team grows, the gain brought by an IDP climbs with the size of the team. Conversely, it is much lower for smaller teams. It's the size of the team that poses problems for information sharing and coordination.

::

Let's look at the different building blocks of an IDP.

## The catalog service

The Service Catalog is simply the inventory of all the applications, libraries and services for which you are responsible.

It used to be called **mapping** the system. It's just what you need to know who's in charge of which service, and who to contact if you have any questions.

A service catalog can also model the relationships between components, or list communication channels, on-call personnel and service guarantees.

When the service catalog is dynamic, it can also indicate a component's state of health, known alerts, etc.

It's often at this stage that we find a plethora of Service Catalogs.

- your CI

- your deployment tool

- your cloud environment

And as if that weren't enough, once you've reached a certain size, and to give the same information outside the engineering team, you probably also have an Excel file that looks like this:

::nuxt-image{src="/images/idp/image3.png" alt="Big Excel file listing all services"}
::

(At Malt this file contains 120 lines)

From this point on, we begin to see the first source of inefficiency: these different catalog services can contradict each other, use component names that don't overlap, and require manual maintenance.

When these tools give incorrect or partial information, it's an endless source of problems. Time is wasted in finding the right people, errors are made in handling alerts, and the **context switching** of people trying to understand the disparities.

And time is money.

The fragmentation of all these products also creates a form of ["alert fatigue"](https://en.wikipedia.org/wiki/Alarm_fatigue).

If I get alerts on different channels from Datadog, Sentry, GitlabCI, Phrase, Snyk, Sonar, etc., which should I look at first?

If it's ringing all the time, is it serious?

Especially if a large proportion of these alerts are poorly targeted and don't concern me, when the data sources are so disparate that the resulting alerts are bound to be misconfigured.

One of the key features of an IDP is to centralize information from several data sources and guarantee that there is only **one source of truth**.

Aggregation enables you to see at a glance the correlation between data coming from monitoring, security or who is managing the service, its state of health, and the communication channel of the team concerned.

Example with the getport catalog

::nuxt-image{src="/images/idp/image8.png" alt="Service Catalog"}
::

Or with an application's detail window :

::nuxt-image{src="/images/idp/image12.png" alt="Detail of the application within getport"}
::

## Automation portal

As I said earlier, the internal developer platform has enabled monstrous productivity gains.

But the complexity of systems, particularly in cloud and distributed environments, means that most operations are often inaccessible to all developers.

Add a secret in the CI or on your cloud provider via terraform. Okay, it's a guarantee of doing it correctly, checked by a CI, and reproducible when the environment needs to be reassembled. But it also means learning new skills.

Adding a new service, knowing how to configure it in a multitude of products so that it's correctly monitored, built on the CI and deployed - here again, it's often necessary to ask for help.

And there's no shortage of similar examples: obtaining a personal security certificate, initializing local data sets and middleware, correctly dimensioning your application in production, recovering crash dump logs, etc.

Here you have two options. You either recruit heavily into the Ops team, or you spread the knowledge to everyone, hence the famous [Devops movement](https://en.wikipedia.org/wiki/DevOps). In practice, the cognitive load is such that there are often a few people who end up taking on all this, and who end up becoming human SPOFs (single point of failure). It's exhausting for these people, and frustrating for others.

But there is an alternative. Get the people who centralize a large part of the RUN to BUILD simplified interfaces within the Internal Developer platform so that every operation is presented in a simple, documented, centralized way.

This is also referred to as a "[Platform teams](https://martinfowler.com/articles/platform-teams-stuff-done.html)" approach. The article on Martin Fowler's site is much broader than that. But imagine the Internal Developer Platform built as a product, by a centralized team whose aim is to empower these users, who are the Product teams.

And imagine all actions presented as a **portal of self-service actions**:

::nuxt-image{src="/images/idp/image11.png" alt="Self service portal in getport"}
::

The idea is to make teams more autonomous while offering a layer of abstraction above the complexity of the platform.

## Defining standards

As mentioned above, an engineering team has many tools at its disposal to measure the quality of the software produced, and its technical debt. But how do you consolidate all this?

What is acceptable in terms of time spent on support?

What technologies can be used?

What deployment and monitoring standards need to be respected?

Is it normal for Team A to be at 100% build success, while mine is at 80% because we've introduced a Sonar quality gate?

In a small company, it's common to list standards in a "[Definition of Done](https://www.agilealliance.org/glossary/definition-of-done/)", but this quickly shows its limitations. Here, we limit ourselves to listing the tasks that need to be completed before development can be considered complete. There's no mention of the standards expected on the production RUN. And how can this be monitored at scale?

The initial version is often linked to basic tools: Sonar and its quality gate, the CI, and sometimes a few metrics on Jira.\.
\
As soon as you start to gather information, and when the team gets bigger, it becomes interesting to feed data into a database to create appropriate dashboards:

::nuxt-image{src="/images/idp/image10.png" alt="Looker dashboard aggregating data from different sources"}
::

Or use dev analytics tools such as Haystack, echoeshq or swarmia.

I haven't tested them personally, as we've spent a lot of time building these analytics on our own.

They're not always easy tools to get to grips with, because you also need to accompany them with dev practices (PR labels, etc.).

And we often needed ad hoc analyses that these tools don't provide, such as app ownership rates or migration tracking.

Finally, these tools don't address one of our main needs: the Service Catalog.

But I'm not a specialist in this field, and I'd be delighted to hear any feedback you may have on the subject.

With an Internal Developer Portal, we're starting to be able to really set team objectives and quality levels.

Example with getport:

::nuxt-image{src="/images/idp/image9.png" alt="Scorecard in getport"}
::

or with Configure8

::nuxt-image{src="/images/idp/image7.png" alt="Scorecard in Configure8"}
::

## Cost management

I could have grouped the section on standards and cost management together, I'd say that keeping track of costs is a criterion that I include in team Scorecards.

But I like to keep this item separate. Many teams develop without paying attention to costs, because they are sometimes difficult to obtain at the right level of granularity, and even more so when aggregated with other information (uptime, dependencies, etc.).

And yet, being able to detect anomalies, see changes over time and identify peaks is just as important as monitoring cycle time or deployment frequency.

A good IDP must be able to gather this information and make it available.

Configure8 has a great demo on this subject:

::nuxt-image{src="/images/idp/image13.png" alt="Cost management in Configure8"}
::

## Buy Vs Build

If you've been following along so far, I'd say you probably already have an Internal Developer Portal, but perhaps it's only partial compared to what I've described next: service catalog, automation, definition of standards and cost management.

There are undoubtedly several audiences here.

Let's ignore the simplest case.

* You're part of a team of less than 10/15 people.
* Your entire software factory consists of your CI and a few ancillary tools.
* You mainly use a monolith.
* You're not in the cloud or on a PAAS.

So there's little chance that you'll need more than your CI and PAAS for the time being.

At 50/100 people or more, on a product made up of a multitude of services, by nature highly distributed, you should start asking yourself questions.

Since 2020, there's been an open source brick that lets you build your own IDP "for free". This is [Backstage](https://backstage.io/), offered to the community by Spotify.

For the anecdote, at Malt the first mention of Backstage on our slack dates back to 2020 and it's paradoxically our CEO Vincent Huguet who posts the information:

::nuxt-image{src="/images/idp/image6.png" alt="Internal message of Vincent Huguet about Backstage in 2020"}
::

At the time, we thought the tool was very good, but in 2020 there are about fifty of us, and the effort involved in setting it up for the expected gain doesn't seem worthwhile at the time.

And yet, in retrospect, we ended up rebuilding our own IDP based on Grafana, various ETL jobs and dataviz tools.

Since 2020, many products have appeared in SAAS (sometimes with self-hosted options):

- getport

- configure8

- cortex

- opslevel

- atlassian compass

- roadie

So, **Buy or Build**?

We're just thinking about it, and the Buy option is our preference for the moment.

We've done a basic calculation.

For a gain of between 5 and 10%, on a team of 50 people, I estimated my gain at between 250 and 500k.

To set up a custom IDP, based on Backstage, I envisage 3 people over 2 months for a first effort and 1 person per month thereafter for its maintenance.

The cost goes up with each new integration and update.

You could say that my total cost is between 160 and 200k. That's probably optimistic.

For a SAAS, you need 1 full-time person for setup and then a maintenance cost equivalent to half a person per month.

The total cost varies between 50 and 100k per year.

Then there's the cost per user, which varies between 20 and 50 euros per user per month.

For 50 people, this would be between 12 and 30k.

The first thing to note is that, in both cases, it's a good deal compared to the expected 500k.

However, the gain between buy and build changes according to team size.

Based on my rough assumptions, I'd say that as long as you don't exceed 200 people, it's still more advantageous to opt for SAAS.

This will be less true thereafter, even if the cost of changing tools is never negligible. There's bound to be an effect of scale that makes the SAAS choice less optimal.

At Malt, we're taking a serious look at this question after having spent a lot of energy on a set of homemade bricks. We're leaning more towards a SAAS solution than Backstage, whose human cost seems too high for our size.

But we're going to do our utmost to ensure that all the data pipelines feeding the IDP are as reusable as possible.

See you in a few months for an update on this subject.

