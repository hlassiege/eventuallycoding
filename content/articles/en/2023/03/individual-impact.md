---
id: "18"
title: "Individual impact in an engineering team"
description: "Let's define together this notion of individual impact in an engineering team."
date: "2023-03-13"
tags:
- "impact"
- "product"
- "engineering"
cover: "impact-crater.jpg"

book: "impactfulSoftwareEngineering"

language: "en"
alternates:
  - fr: "https://eventuallycoding.com/2023/03/individual-impact"
---

What has been your impact in the last 6 months?

Does this question seem difficult?

As I said in the previous chapter, sometimes developers do not participate in the creation of the product, even though tomorrow's products cannot be conceived without the engineers who make them.

And while the reasons may vary, sometimes it is the developers themselves who take a step back and misunderstand the impact they can make or how to make it.

The first part of an engineering career is about learning technical skills and methodologies. It's a steep hill to climb, especially since one quickly realizes that this work must continue for a lifetime to keep up.

But this is actually not the end of the road.

::image
![The mountain of experience](/images/mountain-experience.png)
::

**The impact you can create does not depend on expertise alone**, even if it is necessary.

## It's all about impact
I'm going to talk a lot about impact in [this book](https://eventuallycoding.com/en/2023/02/impactful-software-engineering), it's one of the main terms in the title. So, I think it's necessary before going any further to put a reality in front of that word so that it doesn't remain just a vague concept in a corner of your head.

::image
![An impact in pictures](/images/impact-balls.png)
::

The simplest definition would be to talk about "all the positive effects of your actions on the product or business of your company".

Ok, it's still very vague.

Let's take some examples.

* Decreasing the execution time of acceptance tests by 50% **improves** the overall productivity of the team
* Contributing to **improving** the conversion of your product's sign-up funnel by 10% increases your company's bottom line
* Regularly animating internal talks **improves** the team's knowledge
* Proposing a technical solution that can solve application performance issues and thus increase PageSpeed scores above 95, and by extension decrease the bounce rate by 20% on e-commerce pages **improves** revenue
* Facilitated and/or led a complex, multi-team technical project helps to just get it done.
* Found a technological solution to unblock a business situation


::tip
Sometimes it's not possible to put a number on the impact, but you'll notice that I've tried very often to do so. Without numbers, it is very difficult to be objective about the impact generated.
I'll talk about this again in [a chapter on the importance of measurement](https://eventuallycoding.com/en/2023/02/measuring-everything).
::

I pay attention to these kinds of details when I look at a resume, because I find it quite interesting how a person presents their past accomplishments.

Some people will write this:

- leading a team of 10 people.
- Technical lead on several new features: decision making on the choice of technical implementations,
- exchanges with external providers
- setting up KPIs and reporting
- Elaboration and follow-up of the roadmap according to the company's needs
- Migration from the old architecture to a new one decided in an architecture meeting
- Writing of epics and user stories to feed the Kanban backlog

And others will write this

* Improved B2B mobile app NPS (from -30 to +7) and reduced online booking "no show" rate (-30%).
* Contributed to the growth of 0€ to 10M+€ of GMV
* Creation of the training activity within the company which now generates 10% of the turnover.

If the context of the company does not always allow a clear vision of its impact, it is still significant when a person manages to display it in this way.

That's what we should all be looking for in the end. What is my impact? And not only what my function was in the company.
Conversely, the fact that I have held a specific title before does not necessarily have as much value from my point of view.

## Different impacts by archetype

The impact you can have as a senior does not take the same form for everyone. Some will be able to solve complex technical problems, others will have a facility to coordinate large initiatives, others will have a very positive impact on methods and tools.

It is common to talk about senior types, **archetypes**. I like to refer to the site [staffeng.com](https://staffeng.com/guides/staff-archetypes/) which lists 4 types of archetypes: the tech lead, the architect, the solver, the right hand.
To these four I would add: the explorer and the product engineer.

*Of course, these archetypes are exaggerated visions of reality and an individual can have characteristics of several archetypes*.

I propose to show you examples of the impact that each of these archetypes can have.

For the first 4, I invite you to refer to staffeng.com for more details.

### Tech Lead
The tech lead is characterized by his organizational and coordination skills. They know how to take a step back and find solutions to bring complex issues to a conclusion.

Example :

::example
Nicolas Payot - Frontend Guild lead at Malt

**Date** : 2022  
**Top**: Coordination of the Vue2 to Vue3 migration for a team of 100 people

In 2022, Malt was using several frontend technologies, including Vue.js in version 2.

Nicolas is the leader of the frontend guild. A guild is a community of practice and the lead has the role of animating this community in order to bring out the best practices and a common technological vision.

In the summer of 2022, Nicolas led a discussion about the end of support for Vue 2, scheduled for the end of 2023, and the need to anticipate this.

Among the important tasks made by the tech lead, presentations and prototypes were made to explain the changes. Nicolas also coordinated all the work on cross-functional libraries to ensure compatibility between Vue2 and Vue3 to ensure the smoothest possible transition once started in a team.

The size of the codebase was also a challenge. The project involved 80k lines of code, across 11 applications. It was not possible to do it in a centralized way. Nicolas therefore had to work with the Tribes Directors (lead PM) to convince them of the importance of the project and to prioritize the work in the product roadmaps.

Thanks to this important coordination work at the level of a team of 100 people, the Vue3 migration took place over 4 months with limited disruption to the work of the teams.
::

### The Architect

Architects are comfortable with solution design. They work on long-term issues, scalability and any other issue that requires them to take a step back.


Example:

::example
Nicolas Grisey Demengel - Staff Engineer at Malt

**Date**: 2020  
**Topic**: Standardize calls to external services

In 2020, Nicolas noticed that our web services calls were facing many problems:

- error recovery. What to do if the call fails?
- how to anticipate the rate limiting at the scale of a distributed system
- message deduplication
- how to guarantee that the order has been taken care of despite the asynchronism or the slowness of the final service?
- can we group calls to optimize?
- how to handle a persistent error after retry without blocking a user?

This work resulted in a command queue system that is now a standard at Malt.

This work has drastically improved the robustness of our systems and above all standardized the solutions that were sometimes implemented here and there.

Today, 40k calls per day go through this command queue for about 15 external services.
The average error rate is 0.2%, but only 0.02% that must be looked at manually, the rest being managed by the retry mechanisms of the command queue.
The command queue has reduced to 0 the error cases related to rate limiting, which usually ended up in quarantine for manual processing.

If you want more details, [this work has been described on the Malt blog](https://blog.malt.engineering/a-tale-of-calling-an-external-service-51442115b362).
::

### The Solver

This archetype groups together people who are capable of solving complex problems. The architect works on the long term in advance. The solver works on an existing and often urgent issue. If there is a complex problem that requires a lot of methodology and technical expertise, they are frequently called upon.

Examples :

::example
Guillaume Darmont - Principal Engineer at Enedis

**Date** : 2014  
**Topic**: Long-term serialization system for business information

In 2014, a project was using a lot of inter-services communication with information exchanges in Json. This Json represented business entities and changed regularly according to code evolutions.
Each change meant deleting the old data stored in the previous schema, as it was no longer compatible with the new schema.
It was necessary to solve this problem before the production launch 2 months later.

Guillaume intervened to find a long-lasting and backward compatible serialization method. The data had to be able to be stored in different types of systems: column or relational database, distributed memory cache, message broker, etc.
The existing code base and the timeframe of a few weeks made it impossible to rewrite the existing Java business model from an Avro or Protobuf type schema.

The objectives of the serialization system were:
* To integrate seamlessly into the existing code base, without modifying the business model, so as not to slow down developments.
* To have an ascending and descending compatibility, necessary for application versioning and long term storage.

Guillaume worked to set up :
* The definition of a binary storage protocol
* The development of components for the transformation from one version to another of the model
* The development of a server and its client, with a dedicated request/response protocol
* The development of various components to integrate this system into existing applications and storage bricks.

His action allowed the project to be released on time and above all it is still used 8 years later for its functionality and reliability.
::

### The Right Hand

This role is not the easiest to understand because it is very versatile. It is only when a certain team size is reached that this person appears as a free electron, representing the technological or organizational vision.
This type of person is sometimes part of what is called the CTO office. It is often a Staff or Principal Engineer.

Example:

::example
Nicolas Martignoles - Principal Engineer at Doctolib

**Date** : 2022  
**Top** : Technology strategy at Doctolib


In 2022, Doctolib will have 77 product teams and alignment on the same technological vision is a crucial issue.

Nicolas' role at Doctolib includes a large part of discussions with the teams. He himself works as a Principal Engineer with very identified subjects: migration to Datadog, performance work on Redis etc... but also as a free agent with the teams.  
I will quote Nicolas directly here:
> [...] I keep some time to talk to people "in real life". My agenda is sometimes blocked with a 2 hour slot, which I devote to physically going to discuss and exchange with the developers.
My role does not work on authority. People have to want to come to me and have to know what I can do (or not). This is done through influence, which we work on by speaking, writing and especially by going to talk to people. There is no team of "knowers" at Doctolib who are wisely waiting for work. It's up to us to go and find the subjects, and to impact the whole of Doctolib.

What is interesting and representative of the impact of a "Right Hand" is all this important work of immersion in the teams, of collecting the problems to be solved, of influence on the good practices which then allows to materialize a technological alignment on tens of teams.
::

### The Explorer

This archetype is very rarely listed and/or sometimes confused with the Product Engineer.
Charity Majors is the only one that mentions it a bit

https://twitter.com/mipsytipsy/status/1057133939544846336

> some are good at bootstrapping new projects

So I'm going to detail it a bit more.

The explorer is the person who will explore unknown paths. This is typically the ideal person at the beginning of a startup, but not only.
This person, like the Product Engineer, is characterized by his or her ability to prototype quickly, test, and throw things away.
However, the Product Engineer is more likely to be found in an already established structure, especially in partnership with a Product Manager.
The explorer is more of a free spirit. He or she can look in directions not originally envisaged. This is also what I would call an "entrepreneur".
The explorer is often not a "finisher". He or she regularly changes the subject.
They are people who can easily disrupt a subject, but they are also impatient and will not want to spend time accompanying the generated change.  This fickleness can sometimes cause some frustration later on for the people who are going to finalize the work started.

Example:

::example
Jean-Baptiste Lemée - Co-CTO at Malt

**Date** : 2016   
**Topic**: The Punchout

In 2016, Malt was already working with large groups and most of them use ERP, especially for purchasing.

Some wanted to use their purchasing system to add the ability to pay for freelancer services on Malt.
In 2016, this was a totally unknown world for us.

It was Jean-Baptiste who worked alone on the subject to understand what was technically behind the ERPs, and he studied the CXML protocol, which defines an exchange protocol, in theory compatible with all ERPs.
He quickly developed a prototype to integrate an entire purchasing and contractualization flow from an ERP in punchout on Malt and this was put into production with a client in the process.

This exploratory work, even if it had to be redone for the most part, gave us an enormous amount of knowledge on the subject and demonstrated that it could work with a client.

Today, we continue to expand the use of Punchout among large groups. This has given us a real competitive advantage.
::

### The Product Engineer

This archetype is not detailed on the staffeng.com site so for this one I'll refer you to [Pragmatic Engineer](https://blog.pragmaticengineer.com/the-product-minded-engineer/) for a detailed explanation.

This is the ideal partner of the Product Manager. He or she is one of the archetypes who best bridges the gap between the technical and the business side of the company.
The Product Engineer shares several characteristics with the Explorer, such as the ability to identify the Minimum Viable Product to move forward quickly  
But unlike the Explorer, he is a person able to focus on details and spend time refining a product with the Product Manager to solve all open opportunities until the expected benefit is reached.

Example:

::example
Sahbi Ktifa - Staff Engineer at Malt

**Date** : 2022   
**Topic**: Development of the use of advance payment

Malt offers a functionality of cash advance on missions. In concrete terms, a freelancer uses Malt to contract on the platform and will be paid at D+5 by Malt, which will take care of the payment at the end of the mission, by relying on a partner.

This feature was previously used only for large clients, as the partner did not allow to work with all types of companies.

The functionality had several flaws. It had been developed several years earlier and did not offer any abstraction. In addition, the user workflow was not very smooth, requiring documents to be sent for identity verification, the KYC (know your customer) directive.

By the end of 2022, the functionality was able to process 35% of financial flows despite these shortcomings.

Sahbi Ktifa is a tech lead in the team that deals with payment at Malt.
In 2022, Sahbi's team had to manage several changes.

First of all, the cash advance had to work for new countries, which was not possible with the historical partner.
Secondly, in the new markets, they had to be able to work with smaller companies.

As the tech lead of his team, Sahbi worked on modeling the payment advance flows to create an ideal scenario, with extension points so that as many new payment partners as needed could be added and all the frictions of the old workflow were removed.

The work carried out has enabled us to increase the number of financial flows benefiting from factoring to 70%, in all open countries.
The integration of a new advance payment partner now takes only 2/3 weeks.

At the end of 2022, the historical partner unfortunately closed. It is also thanks to the work done that this incident was resolved in a transparent manner.
::

## Growing impact with experience

You may have noticed in my examples that not all of them have the same impact.

Let's take a famous example: Kent Beck. Among his achievements, he is the author of all XUnit testing frameworks. He is also the author of the Extreme Programming method

Indeed, we can say that Kent Beck has had an important impact on the industry.

But is it necessary for everyone to have an impact at this level?  
Of course not. The impact grows with seniority.


::image
![Growing impact by experience levels](/images/circle-impact.png)
::

During our career, we can have successive impacts on ourselves, our team, our department, our company and our industry.

Without trying to be exhaustive, let's take a specific example to illustrate these levels of impact.

A "chapter" or "guild" in the diagram above is a community of practice. It is, for example, the group of people interested in frontend development or security.

* Participating in the guild to learn best practices is an individual impact.
* Collecting information and making sure that these best practices are applied in your squad is a team impact.
* Actively contributing to the guild with Pull Requests, participating in design discussions creates impact within the guild
* Initiating a guild, bringing people together around a theme and providing leadership is an impact at the product department level.
* Bringing in guild initiatives that result in significant productivity gains, or business gains (e.g. improving web performance practices and gaining SEO) has an Enterprise-level impact
* Generalizing the work done to make it a best practice outside the enterprise has industry impact (e.g. Kent Beck with the xUnit framework)

This is an example spun through the lens of a guild. But as you saw above, there are multiple ways to create impact, depending on your archetypes.

## Career path and impact

It is usual, or at least that is what we do at Malt, to align impact level and career path:
- Junior - Individual impact
- Senior - Team impact
- Senior - Transverse impact (between guild and product team)
- Staff - Transverse impact (between product team and company)
- Principal - Cross-functional impact on the company
- Distinguished/Fellow - Industry impact

However, it is important to understand that this is very contextual. Being Principal Engineer or CTO in a company of 20 people does not translate into a company of 10,000.

You have to understand this through the notion of impact.

But I won't dwell on that for the moment, the notion of career path is not the subject of this chapter.

## What next?

Now that we have taken the time to talk about impact, let's see how we can work on it at the individual level. In particular, I propose to discuss in the next chapters:
* the importance of measurement
  the importance of measurement * the skills of prioritization
* accepting boredom
* Networking
* tech marketing

## Questions for you

What has been your impact in the last 6 months?

Can you measure it? Express it in business value?

What are the archetypes that characterize you the most?

## Resources

* [Staffeng.com: the different staff archetypes](https://staffeng.com/guides/staff-archetypes/)
* [What archetype are you?](https://candor.co/articles/career-paths/engineer-archetypes-which-one-are-you)
* [Pragmatic Engineer: Product Engineer](https://blog.pragmaticengineer.com/the-product-minded-engineer/)
* [Staff Engineer role at small companies](https://blog.separateconcerns.com/2023-02-03-staff-engineer-inch.html)

::tip
This blog post is part of the book [Impactful Software Engineering](/en/2023/02/impactful-software-engineering).
Feel free to read the other chapters.
::
