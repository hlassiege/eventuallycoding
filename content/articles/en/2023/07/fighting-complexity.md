---
id: "25"
title: "Fighting complexity"
description: "If there's one factor that strongly and negatively influences impact at scale, it's complexity, and as product leaders, we have a responsibility for this complexity, whether it's the product we build or the organization in place."
date: "2023-07-24"
tags:
- "complexity"
- "impact"
- "product"
- "engineering"
cover: "equilibre.jpg"

book: "impactfulSoftwareEngineering"

language: "en"
alternates:
  - fr: "https://eventuallycoding.com/2023/07/fighting-complexity"
---

If you happen to bump into it here, this chapter is part of the ebook ["Impactful software engineering"](/en/2023/02/impactful-software-engineering) and its main topic is "how to bring impact as developers".

If there's one factor that strongly and negatively influences impact at scale, it's complexity. Complexity slows down decision-making, increases costs and makes products unusable.

As product leaders, we have a responsibility for this complexity, whether in terms of the product we build or the organization we put in place.

> **complexity is the silent killer of growth**  
> Ron Kermisch et Jed Fallis

Complexity, especially technical debt, featural overload and bureaucracy, are perpetual threats to a company's velocity.  
The organization as a whole must constantly strive for simplicity, the famous [KISS (Keep It Simple Stupid)](https://en.wikipedia.org/wiki/KISS_principle).

::image
![balancing on a ball](/images/artist-complexity-seems-easy.jpg)
::

## Simple doesn't mean simplistic. Complicated doesn't mean complex

Simplicity is what the user sees. To be simplistic is to propose a solution that does not meet these needs.  
You have to propose simple solutions to complex problems, without making them either complicated or simplistic :)

And here I'm talking as much about the product we create as about the organization and its processes.  
Note that these topics depend on the size of your team or your user base.

If we're talking about organization, during my years at Malt, I gradually built a product team from 0 to 100. But the whole structure that exists today wouldn't have made any sense, and would certainly have slowed us down in the beginning. Conversely, what exists today would certainly not be sufficient if there were 1,000 of us.

If we think in terms of product complexity, we had what everyone calls "edge cases". But with few users, you can afford to handle these exceptions manually. It's a simple and effective response. The cost of automation is not always justified.  
Today, these edge cases are no longer exceptional, and can occur dozens/hundreds of times a day. It's the cost of not automating that becomes excessive. And this is where we can confuse simplicity with simplism if we don't deal with these cases.

When we talk about cost or return on investment, simple or simplistic, it's also a question of size.

## Technical and functional debt
This article isn't "just" about technical debt. But it would be awkward not to mention it, since I'm primarily speaking to Product and Tech leaders.

The construction of a product is the sum of all past decisions. Just like technical debt.

Each choice is made in a given context: team size, company size, state of knowledge and technology, fit with the product strategy of the moment, etc.  
The corollary of this is that if the context changes, old choices can become obstacles.

Technical debt is partly linked to complexity, which is built up over time, without being challenged.  
When the context changes, these choices have to be reconsidered.


::image
![Do not refactor code that is useless](/images/context-changed.jpg)
::

> The worst thing you can do is add a technological overlay to solve a problem that wouldn't exist, or would no longer exist, if you took a step back.

When you've got your head in the game, racing towards a new goal, it's easy to forget to take a step back. We need to create this space, and I refer you to another chapter: [Accepting boredom](https://eventuallycoding.com/en/2023/03/accept-boredom).

::image
![People too busy to use the wheel](/images/reinvent-wheel.png)
::

**Solution 1**: by dedicating part of the iteration time to resolving the technical debt. This solution is often less than optimal. Everyone understands it as "best effort" time.
Best effort" should only be reserved for what you are comfortable doing badly_. And resolving technical debt is not something you should be willing to do badly. It's the first thing that jumps out when you're stressed, and you never devote the necessary time to it.


**Solution 2**: Insert cooldown periods between iterations. These periods are separate from the iterations. Many teams take advantage of these rest periods to continue working on new features that were not completed in the last iteration. These cool-downs periods only work if they are used to simplify what already exists, not to add new features_.


**Solution 3**: by creating teams dedicated to technological governance. This can take the form of communities of practice, a platform team, etc. The first challenge here is to avoid creating teams that are disconnected from the field. The second challenge is to manage change within the product teams, who may be reluctant to let change get in the way of their planning. This configuration works if the "central" teams regularly reconnect with the Product teams (user interviews, immersion, etc.), and if the technical leaders of these teams also participate in defining the projects (technical discovery phases carried out as a team, for example).


The last point in this section is **be careful not to try to be too clever**.

You're probably familiar with one of the most common questions asked to a tech leader: **buy or build**.  
Well, at exactly the same level, I'd like to mention another subject: "**standard or customized**".

Quite often, we use solutions with recommended uses, and then at some point, we get the feeling that we're limited in our choices. And in these situations, we often pull out the "I've found a clever way of deviating from the recommended uses to fit my particular case" card.

::example

**Mongodb and transactions**

A few years ago, I used Mongodb a lot. Before version 4, the notion of transactions didn't exist. Because the product relied on you thinking of your documents as self-sufficient. You shouldn't need transactions across multiple collections if your documents are well designed. In theory...

In practice, use cases change, and you always end up wondering how to avoid inconsistencies between two collections.

At this stage, I've met several people who have tried to implement transaction mechanisms programmatically. I'll spare you the implementation details, but it's possible.  
It's possible, but it's complex. Obviously, over time, this type of code becomes an area where nobody wants to intervene.
::

Deviating from the standard is often a bad idea. On the spot, for a few months or even years, it may work. But even more frequently, these small deviations end up costing you in **cognitive load**. A piece of code or a feature can become a no-go zone where no-one dares set foot.

It's important to remember that code is more often read than written. And average team turnover is between 10% and 30%. Deviating from the standard means closing the door on future newcomers.

Ideally, a newcomer to your project should be as familiar as possible with the best practices he or she has observed elsewhere.   
Ideally, when you search for a solution on the Internet, you'll come across dozens or hundreds of solutions, because your case is not a special one.

Going beyond the standard only makes sense if your name is Google and your context absolutely cannot accommodate conventional solutions.

But you know what, in the end, the best code is still the code that doesn't exist. Which gives me the perfect transition to talk about featural overload.

## Featural overload

> Perfection is achieved, not when there is nothing left to add, but when there is nothing left to take away.  
> Antoine de Saint Exupéry

I've taken the expression featural overload from a [conference by Estelle Landry (sorry it's in french)](https://www.youtube.com/watch?v=6SczOv0TSkI). I think it's telling enough for you to have the image in mind.

Featural overload is a shared responsibility between Tech, PM and UX. In principle, the PM deals with viability and value, the UX lead with usability, the tech lead with feasibility, **but everyone must contribute to simplification**.
* Lead UX, because usability goes hand in hand with the absence of complexity for a user.
* Lead tech, because feasibility and cost depend heavily on the constraints brought about by existing functionalities and those famous side-effects.
* The PM, because the viability of a product decreases with the cost of unused functionalities, and perceived value also decreases when the product becomes incomprehensible.

How can we avoid this featural overload?
There are 2 important points to bear in mind:

* **The importance of** [**measurement**](https://eventuallycoding.com/2023/02/measuring-everything) in deciding what to kill and what not to kill.
  It's important to correlate usage with value. A feature may be used by only 10% of customers, but it may correspond to the 10% who bring in 80% of revenues.
* **Knowing how to make choices** (aka, having a Product vision). Creating a product or organizing a team means knowing how to make decisions. The absence of decisions leads to overload.

When you design a solution, you have to close the loop, make sure the user goes in the direction you want, and accept that you can't work with customers who want your product to be just another product.

::example

**The iPod**

The Ipod was launched in 2001 with the success we know today.
And yet, at the time, the ipod was arriving on a market already well furnished in terms of MP3 players. Apple set itself apart with a very distinctive product vision. They chose to offer a single function, but to do it perfectly: the scroll wheel for selecting and launching music. They gambled on design and integration with iTunes.  
And this simplicity has paid off, winning over its generation. It's this ability to make strong choices and bet on simplicity that makes Apple the giant it is today.
::

The above example highlights the importance of the product vision. **A product vision is not a backlog of features sorted by the last customers who spoke**.  
(or worse, internal customer proxies).

As soon as you pile on features without any strategy, you end up creating a Frankenstein's monster so complex that the slightest addition becomes excessively costly.

::image
![Why it takes so much time to add a new window](/images/adding-widow.jpg)
::

In fact, it's a very good unit of measurement. If implementation times become too long, it may be a sign of too much complexity.  
As an anecdote, it took Apple no more than 10 months to build the first iPod. Once again, this is the fruit of simplicity.

## Organization versus process
The third responsibility of product leaders - and this one is perhaps less natural than the first two - is to ensure that processes don't take precedence over everything else.

So, let's be clear: what makes the difference between a junior and an experienced person is not technical mastery, but methodological mastery.
A method is a recipe that can be applied to a specific type of problem. What I call a process is the formalization of this method on the scale of a group of people.

When you think about it, it's a kind of crutch that ensures you apply the recipe correctly, even when you haven't mastered it. As Marty Cagan puts it: [we could do without them by growing people rather than processes](https://www.svpg.com/scaling-with-process-vs-people/).

Without minimizing their importance, processes tend to become rigid, accumulating and becoming more complex over time, becoming the antithesis of what they are supposed to be: a brake rather than a booster.

Since I quoted Marty Cagan above, I'll share the quotes that appear on the blog post mentioned above:

> Good process serves you so you can serve customers. But if you’re not watchful, the process can become the thing.  This can happen very easily in large organizations.  
> Jeff Bezos

> That’s what makes great products.  It’s not process; it’s content…The system is that there is no system. That doesn’t mean we don’t have process…But that’s not what it’s about.  
> Steve Jobs

> The problem is that at a lot of big companies, process becomes a substitute for thinking. You’re encouraged to behave like a little gear in a complex machine.  
> Elon Musk

> As companies and agencies get larger, they start to value the importance of process over the product. [...] People who manage processes are not the same people as those who create product. […] Over time as organizations grow, they become risk averse. The process people dominate management, and the product people end up reporting to them  
> Steve Blank


> Process is great when you live in a world where both the problem and solution are known. Process helps ensure that you can deliver solutions that scale without breaking other parts of the organization…These processes reduce risk to an overall organization, but each layer of process reduces the ability to be agile and lean and — most importantly — responsive to new opportunities and threats.  
> Steve Blank

Again, processes are necessary for scalability. They provide clarity about who does what, when and why. Unfortunately, processes often go much further than that. And it's up to the leaders of an organization to know how to keep them in the place they should remain: a booster, a methodological aid, but not a barrier to autonomy, creativity and innovation.

Along with processes, there are also what Marty Cagan calls "[Process people](https://www.svpg.com/process-people/)". I also invite you to read his article, which is much opinionated on the subject than mine.

Process people are one of those people who very often respond with the famous phrase to justify complexity **"yes, but we're different "**.

All professions and all sectors have their share of difficulties: finance, banking, insurance, marketplaces, automotive, marketing, communication, development and so on.

And yet you can all think of examples of companies that have managed to simplify the underlying complexity of their business.

I'll try to be as nuanced as possible. Process people are very often very intelligent, with a great sense of organization, very analytical. They seek to improve the lives of their teams. But their main job is to take care of processes or enforce compliance with constraints (legal, regulatory, etc.), not to build or sell the product.  
And it's human nature that if an organization creates a job, that job will do everything it can to grow and take up space. It's natural entropy.  
You've all been there: create an A-team tomorrow with just one person. At the end of the year, this person will tell you that the budget needs to be tripled and new staff hired because the workload has become too heavy. Except that when people processes increase, with them comes complexity.  
Paradoxically, a person who is there to implement a process should aim to make his or her role unnecessary, but this is rarely the case.

::example
**Example**:

The bank where I took out my mortgage is one of the "old-style" banks.
At each appointment, I have to sign a mountain of paper. The website's security constraints are so tight that it takes me 1 minute to connect. Some functions on the site refer to a phone number, as they are impossible online.  
I'm registered with another bank for my day-to-day management, and most of my procedures are carried out online. I was able to open an account for my child online, with an electronic signature. In short, these are two totally different worlds.  
And yet these two banks have exactly the same constraints.  
They illustrate perfectly well the weight of complexity on the product on the one hand, and I'm willing to bet that the former's organization has its share of bureaucracy, which paralyzes innovation.
::

Product Leaders need to keep a very close eye on the creation and application of processes to ensure that they don't take precedence over everything else.

Here are a few warning signs:
* when product meetings spend more than 50% of the time talking about processes
* setting up PMOs or Steering Committees
* SAFe (!)
* permanent agile coaches
* support teams (coaches, product ops, etc.) that grow faster than the rest of the team
* product decisions conditioned to Process People's go/no go

I'm going to quote [Mike Fisher](https://mikefisher.substack.com/p/principles-over-process) who reminds us of the importance of principles, the famous Product pillars, before processes.

What's important in processes is the methodological framework they provide, the pillars and principles they are supposed to support.
According to Mike Fisher, the failure of agility comes from the rigid formalization of agile methods. But the best teams continue to rely on Agile principles in spite of this.

Building a product relies heavily on people. Not only is there no silver bullet, but the activities we follow will very often depend on the context.

Everyone in the product organization needs to understand why they're doing what they're doing, and have the option of not doing it, provided they've followed the product principles and strategy in place.


## Don’t break silos

Last but not least, we often hear that silos need to be broken down. I think this phrase is misunderstood.
As a company grows, wanting to be involved in all decisions means drastically increasing the number of people you have to talk to.

::image
![The complexity of communication increases dramatically with the number of people involved.](/images/dunbars-number.jpg)
::

This number of exchanges can rapidly exceed human cognitive capacities (Cf [Dunbar's number](https://en.wikipedia.org/wiki/Dunbar%27s_number), which sets the maximum number of individuals with whom one can maintain close relations at 150), and requires numerous processes to compensate for this.
Added to this is the [bikeshedding](https://en.wikipedia.org/wiki/Law_of_triviality) inherent in all group decision-making mechanisms.
Several articles suggest that the optimum number of people to make a decision is between 3 and 7.

* [Forbes](https://www.forbes.com/sites/eriklarson/2017/03/23/3-best-practices-for-high-performance-decision-making-teams/)
* [Harvard Business Review](https://hbr.org/2020/09/7-strategies-for-better-group-decision-making)

But for this to work, you need to break down the silos and get the right people into the group. That's what breaking down silos is all about: building multi-disciplinary teams.

On the other hand, it makes no sense to build backend teams, frontend teams and ops teams that pass the buck between each stage. This pattern is a bad smell.

The responsibility of Product Leaders is to help create [autonomous and aligned teams](/en/2023/05/alignment-autonomy-context). This autonomy comes with multidisciplinarity.

So, on the contrary, we shouldn't try to break down silos, but rather build them up properly: get the right people in, give them the necessary context, and then let them have autonomy.

## Questions

Do you measure your cycle time?

Do you also measure it for all day-to-day actions (time to create a new application, time to onboard a new team member, time to define and write an ADR, etc.)?

Do you measure the use of your product's functionalities?

When was the last time you killed a feature on your product?

Would you say that resolving technical debt is a best-effort process, or do you have programs underway to address these issues?

Have you ever heard the words steering committee, SAFe or PMO in your company ;)

## Resources

* [Killing complexity before complexity kills growth](https://www.bain.com/insights/killing-complexity-before-complexity-kills-growth/)
* [How to lose your featural overload](https://www.youtube.com/watch?v=6SczOv0TSkI)
* [Principles over process](https://mikefisher.substack.com/p/principles-over-process)
* [Process People](https://www.svpg.com/process-people/)
* [Scaling with process vs people](https://www.svpg.com/scaling-with-process-vs-people/)

::tip
This blog post is part of the book [Impactful Software Engineering](/en/2023/02/impactful-software-engineering).
Feel free to read the other chapters.
::
