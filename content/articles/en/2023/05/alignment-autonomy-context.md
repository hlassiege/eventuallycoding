---
id: "23"
title: "Alignment, Autonomy and context"
description: "Quel est le rôle des techs leaders pour assurer autonomie et alignement et créer de l'impact ?"
date: "2023-05-31"
tags:
- "empowered"
- "impact"
- "product"
- "engineering"
cover: "bridge.jpg"

book: "impactfulSoftwareEngineering"

language: "en"
alternates:
- fr: "https://eventuallycoding.com/2023/05/alignment-autonomy-context"
---

Over the years, I've met and observed teams that were competent and yet failed: working on the wrong priorities, sometimes working on the right objectives, but with unsuitable solutions, sometimes working with no priorities at all.

The root cause of these problems can be articulated around these 3 words: **autonomy, alignment, and context**.

If these words seem relatively simple to understand, in practice, their implementation is not trivial.

How do you ensure that everyone in a team is trying to solve the same problems? What does autonomy mean within a group, and what are its limits?


## Empowered teams

Perhaps you've heard the term "empowered teams"? And thought it was yet another new consultant concept?

The expression gained popularity via the book [Empowered by Marty Cagan](https://www.svpg.com/books/empowered-ordinary-people-extraordinary-products/). In simple terms, an empowered team works on a problem to be solved, as opposed to a feature team which works on a list of functionalities (the famous roadmap).

Example:

- an empowered team's mission is to work on acquiring new users
- a "feature team" has to come up with a sponsorship program

or

- an "empowered team" is tasked with improving the developer experience by reducing dev cycle times
- a feature team is tasked with implementing a new CI (continuous integration) solution.

We also speak of a team that prioritizes outcomes (impacts) over outputs (deliverables).

The first thing I'd like to stress is that this isn't just a topic for product managers. Any senior person in Engineering should be involved in decision-making, for example :
- avoiding the construction of unnecessarily complex solutions, demonstrating a misunderstanding of objectives
- checking that these priorities are built with the right constraints in mind
- ensuring that these priorities contribute to the group's objectives.

I'm writing this chapter for any technical leader looking to create impact.
To do this, we'll see that creating autonomy, alignment and knowing how to communicate the context are levers for achieving this.

Here, as a Tech Leader you can be in two situations, but often in both at the same time:
- the person seeking to develop his or her group's autonomy
- the person who belongs to a group with limited autonomy, and is seeking to gain independence.

## Alignment, autonomy and context

To tackle this subject, I'm going to start from a drawing by Henrik Kniberg about alignment and empowerment. "Empowered teams" being the teams in the top right-hand corner.

::image
![Alignement and autonomy](/images/alignement-autonomy.png)
::

This drawing is part of a [keynote given in 2016](https://www.infoq.com/fr/presentations/lkfr-henrik-kniberg-keynote/) that I invite you to watch.

In this keynote, it's about a group, whose goal is to cross a river to settle on the other side of the bank.

## Low autonomy, low alignment

The lower-left corner shows a group with little autonomy, no alignment and no precise directions. No one in this part of the quadrant has taken the initial problem of crossing the river personally.

The symptoms of such an organization in a technological context :
- reaction-only teams, i.e. whose work is driven by support and bugs, upgrades to end-of-life components, and so on.
- no hyper-clear objectives, but a kanban (a big todo list) that feeds itself organically
- micromanagement, with tasks assigned by a manager/project leader
- a technical team that works in isolation from users, often in supplier mode for a team that defines the product, but itself far from the business.

What can be done about it?

It's a tough job on this part of the quadrant. Even before talking about autonomy, the first issue will be to get people to agree on a common goal.
The role of a tech leader is to get close to the business, or its closest representative, and understand the issues that need to be addressed. In this type of organization, the business is often far away and/or difficult to access. Breaking the distance can be difficult, and is not part of the company's culture. Technique and "best practices" are likely to be the least of your worries in this context, as the importance of connecting Engineering to the business is paramount.

::image
![What should we do now ?](/images/what-should-we-do.jpg)
::

## High autonomy, low alignment

If we move to the right, we come across organizations made up of individuals or groups of individuals, each of whom has defined objectives, but all of which are different.

If the group's objective is to cross a river, everyone is working on different things: some are growing vegetables, others are fishing, and a few leaders are wondering whether someone is working on crossing the river.

There's a misunderstanding of autonomy here.
Autonomy does not mean independence. A team that decides its priorities in its own corner doesn't make an impact, or does so by accident, and this success is hard to repeat many times over.

And this doesn't mean that individual groups can't be highly effective. Unfortunately, impact is measured in global terms.

The symptoms of such an organization in a technological context:
- several groups work on defined topics, but without collaboration with other teams.
- a large number of projects are underway, stretching out over months. This is linked to the "one-man army" phenomenon: if a single person can move fast, he or she ends up burning out faster than a larger group. This slowness makes teams weary, as they continue to pile new subjects on top of the list.
- the multiplicity of topics creates vagueness throughout the organization, which becomes a black box for the rest of the company
- the perceived impact is low

What can be done about it?   

The observation is fairly similar to the previous one, but the work will be less arduous due to the highly entrepreneurial nature of the company. Here, the tech leader will be able to rely on committed teams. We'll need to work on alignment.

But let's define this notion a little better.

## Strong alignment, weak autonomy

Alignment defines the ability of a group to all seek solutions to the same problem.

Example:
Objective: A European company decides to enter the US market.

* The sales department will invest to open a sales office in the USA.
* The finance department will open a subsidiary in the USA and modify its invoicing model to comply with current regulations.
* The engineering department will study how to reduce product latency through a better geographical distribution of its infrastructure

etc.

Each team will seek to contribute to the same objective.

However, in the drawing in the upper left corner, we can see a clear alignment without autonomy. One or more leaders can decide exactly what needs to be done to achieve an objective.

The leader explicitly asks to build a bridge across the river.

This mode of operation can be very effective, especially on a small scale with a visionary leader. But scaling up can cause problems, as the visionary leader can't spread out across the company and follow all the decisions.

On several occasions, I've observed companies with very good leaders, but with great difficulty in managing rapid growth. They recruited people who were more junior than they were, more capable of carrying out a task than making decisions. These people then failed to scale up in the time available.

Symptoms of such an organization in a technological context:
- the leader is the most experienced member of the group, with a significant gap between them
- there is a strong imbalance between junior and senior staff, to the detriment of the latter
- the team is not involved in decision-making, and the backlog is fed by a single person

What to do about it:

If you're a tech leader, one of your responsibilities is recruitment. You have to recruit people who are better than you in certain areas. You have to learn to [share your legos](https://review.firstround.com/give-away-your-legos-and-other-commandments-for-scaling-startups).  
The second important thing is to get out of the vicious circle:
* the people I work with don't make the right decisions or don't know how to make decisions, so I step in to make them for them
* for the sake of speed I don't spend much time on the explanation    
* the people in question end up concentrating more on their expertise than on decision-making.

At stage 2, you have a major responsibility for coaching/mentoring to educate and provide the necessary context for more effective decision-making.

If you're a tech leader, but you're in a situation where the work is delegated to you, you'll need to show that the team can be autonomous. To do this, two things are important:
- **Develop your business understanding**. You need to step outside the team to better understand the challenges and constraints of the company and/or your customers.

In our example above, a group that chose to build a catapult to hurl individuals to the other side would be showing a certain lack of understanding of the effect of gravity on human bodies :) Hopefully, the initiative would be stopped.  
**Don't be the one to suggest the catapult**.

::image
![The guy who tried the catapult](/images/catapult.jpg)
::

- Develop your decision-making skills. To re-establish the symmetry of exchanges with your management, you need to keep one thing in mind: **you need to provide more solutions than problems**. You won't be trusted if you only come up with problems to solve, and your discussions will systematically turn into basic reporting, so you'll have to make choices.

Example:  
Bad: there are too few of us in the team, so we can't finish the project on time.  
Good: given the size of our team and our current speed, I've decided to cut back on some of the functionalities to meet the deadline.

Bad: We're drowning in support. The team can't deliver project A on time.  
Good: We carried out a support analysis and noted a sharp increase in support cases linked to a bug in a recent feature. We decided to assign one person for a week to fix this bug and regain velocity on project A.

Before I talk about the last quadrant, I need to talk a little about the "context".

## Lead with context

"Lead with context, not control" is a quote you'll find in the excellent book ["No rules rules"](https://www.amazon.com/No-Rules/dp/0753553635) by Erin Meyer and Reed Hastings.
For a person or a group to make a good decision, they need to know the whole context.

If we go back to our group, which has to cross a river, we lack the context to propose initiatives.

Maybe we have to cross the river to find food. In which case, why didn't we decide to settle on this side?  
The leader failed to mention that we're in the territory of another tribe who has asked us to leave before autumn.  
Okay, and if the leader had told us that this tribe wasn't against trading with us after all, having a bridge would probably be more interesting in the future than just building a boat.

Having the context allows you to make the right decisions.

And in the corporate world, there are plenty of occasions when you neglect to give the full context, sometimes for the sake of speed, sometimes to protect your team, sometimes because you've forgotten. But without context, you can't expect people to make the right decisions. Context gives you the constraints that will enable you to propose the most appropriate technological solution.

::image
![Context matters](/images/context-matters.jpg)
::

## Strong alignment, strong autonomy

In this corner of the quadrant, the objective is clearly defined, such as crossing the river. The constraints are known, and each group is invited to contribute to the common goal.

In theory, this is the most efficient type of organization, especially at scale.

I'd like to point out two pitfalls at this stage:

> It doesn't make sense to hire smart people and tell them what to do; we hire smart people so they can tell us what to do.  
> Steve Jobs

You have to accept the unexpected, accept that the solutions you come up with may not be the ones you originally imagined.
If a group suggests crossing the river with a boat or a tunnel, or has spotted a ford a hundred meters downstream, it may be different from what you had in mind, but it may be more effective. Accept that not everything is as it seems in your head.

BUT, if there are several groups working, one on building a tunnel, another on building a bridge, another on building a boat, you've got a problem.
If everyone is working on the same problem with different solutions, **that's also a form of misalignment**.

Again, autonomy doesn't mean independence, and there needs to be regular discussion around the initiatives launched to ensure overall coherence.

**Don't be the one working on creating a tunnel while everyone else is trying to build a bridge.**

Certain methodologies, such as OKRs for example, help to materialize this periodic discussion.

Example:

Objective: The product should enable the acquisition of 10,000 prospects in the USA.

Quarter 1 initiatives:
- Team A works on improving SEO through multi-domain management and regionalization.
- Team B sets up several new domain names for multi-domain management
- Team C works on SEA to refine geographic targeting of campaigns.

Quarter 2 initiatives:
- Team A works on a sponsorship program
- Team B works on sharing mechanisms on social networks
- Team C works on affiliation mechanisms

The coherence of the initiatives is linked to a discussion at the beginning of the quarter of what each group has come up with to contribute to the initial lead acquisition objective.

* The objective is defined in advance.
* Teams propose initiatives to contribute to it
* After discussion, a set of initiatives is chosen.

This step, designed to ensure the coherence of initiatives, can be found in many methodologies:
- in OKR via the OKR Quarterly review
- fixing appetites in the [ShapeUp method](https://basecamp.com/shapeup)
- the construction of ["bet boards"](https://blog.crisp.se/2016/06/08/henrikkniberg/spotify-rhythm) by Henrik Kniberg
- [Program Increment Planning](https://scaledagileframework.com/pi-planning/) in SAFe

I must stress once again that autonomy does not mean independence. If, during these discussions, a decision is made to favor a bet, and it's not the solution you had in mind, too bad but you have to commit to this decision. This is the famous ["disagree and commit"](https://en.wikipedia.org/wiki/Disagree_and_commit). And that doesn't take anything away from team autonomy. Teams can be the driving force behind initiatives to solve a given problem, but in the end, we'll be looking for alignment. Otherwise, we're back in the bottom right quadrant.

## How to facilitate the emergence of autonomous teams

If your aim is to create more autonomous product teams, you may come up against the following difficulties:

- recruitment. To get started, you need very good PMs and Tech leaders who have an entrepreneurial mindset as well as a technical one. Transformation is all about people.
- top management buy-in and a change of mindset are essential. They must agree to delegate the "how" to product teams, and focus on the "what" (objectives). And that's a lot harder than it sounds. Many say they want to move to autonomous product teams, but are very frustrated at not being able to tell them what to do
- agreeing to abandon traditional roadmaps in favor of strategies based on objectives (OKR or other, it doesn't matter).

These 3 subjects create deadlocks.
A good PM and/or Tech Leader will be reluctant to join an organization where he/she feels a lack of autonomy.  
Management will find it hard to trust a team that they don't feel is business-oriented enough.  
Top management who don't have confidence in a team will continue to demand a high degree of predictability in development via detailed roadmaps.  

As a Tech Leader, you have your hands on several levers that I've already covered in the first chapters:
- [Develop your understanding of the business](/en/2023/02/not-only-about-technique)
- [Measuring everything](/en/2023/02/measuring-everything)
- [Know how to prioritize](/en/2023/03/choose-your-battles)
- [Create time for ideation](/en/2023/03/accept-boredom)
- [Know how to communicate](/en/2023/05/tech-marketing)

The aim of all these actions is to increase the trust placed in Engineering's actions. **This confidence will be transformed into the delegation of autonomy**.

## Questions

Would you say that you have all the constraints in mind for your current projects?

How much time do you spend explaining the context to the people who work with you?

What is your team/department's objective for the year?

How are you contributing to this objective this quarter?

## Resources


* [Give away your legos and other commandments for scaling startups](https://review.firstround.com/give-away-your-legos-and-other-commandments-for-scaling-startups)
* [No rules rules](https://www.amazon.com/No-Rules/dp/0753553635)
* [keynote from Henrik Kniberg en 2016](https://www.infoq.com/fr/presentations/lkfr-henrik-kniberg-keynote/)
* [Empowered from Marty Cagan](https://www.svpg.com/books/empowered-ordinary-people-extraordinary-products/)

::tip
This blog post is part of the book [Impactful Software Engineering](/en/2023/02/impactful-software-engineering).
Feel free to read the other chapters.
::
