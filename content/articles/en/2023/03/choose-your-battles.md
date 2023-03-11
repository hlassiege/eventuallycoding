---
id: "17"
title: "Choose your battles"
description: "One of your main roles as a senior lead is to make choices by finding the right problems to solve and then to provide clarity."
date: "2023-03-11"
tags:
- "prioritization"
- "product"
- "engineering"
cover: "priority.jpg"

book: "impactfulSoftwareEngineering"

language: "en"
alternates:
  - fr: "https://eventuallycoding.com/2023/03/choisissez-vos-batailles"
---

Everyone theoretically knows the importance of prioritizing, yet many of us fail to make choices.

Let's take a trivial case, say I have 10 simple tasks to do. I know that each task theoretically takes 1 day.

If I start them all at the same time, there is a very good chance that I won't take 10 days, but maybe 20, maybe 30.

This is related to two reasons:

- mental load. I will constantly think about the next task, I will anticipate problems that do not exist. In a corner of my head, part of my brain will be processing subjects that are disconnected from my current task, making me less efficient

- the context switching. To start a task, I have to bring up a whole bunch of information in memory, sort it out in my head, connect it together, and then I can actually start. Every time I change the task, I have to erase everything and bring up new information in memory. I'm not a machine and these operations take a lot of my time.

Beyond that, we all have a limited amount of time at our disposal and the energy we spend on a task is then definitely lost. To maximize your impact, **you have to make choices**.

## Avoid Sarkozy Driven Development

::image
![Sarkozy driven development](/images/sarkozy.png)
::
I have been working with Vincent since the creation of Malt. He has many qualities and Malt would not be where it is today without him. He perfectly represents the maxim "He didn't know it was impossible so he did it".

However, I had a joke with him, as we sometimes had these types of interactions:

> Monday: Hey, I saw an old friend of mine who is an SEO specialist, apparently if we do "insert here action A" then we could increase our traffic by 100%.    
> Tuesday: Hey, I just read an article about "insert here tool B", it's just amazing what they do, we should use it too!"    
> Wednesday: Hey, I have a friend who signed up on Malt, he was looking for a freelancer, and he noticed that on page 3, on line 5, one of the freelancers didn't quite match the search he typed in, we really need to look at that.

If I apply [Brandolini's Law](https://en.wikipedia.org/wiki/Brandolini%27s_law) to computing it would go something like this:

> the amount of energy needed to demonstrate that an idea works or not [...] is an order of magnitude greater than the amount of energy needed to produce them

It took a lot of energy to deal with each topic.

I ended up calling this type of exchange: The **Sarkozy Driven Development**.

Sarkozy was a french president and people said he was an "hyper president". He was always reacting. For each new event, he announced a new law.

Of course, having a person who constantly opens new horizons is a source of innovation. But you have to focus your energy to produce the maximum impact over a period of time.

## The rule of two

Writing is a way for me to address the problem of context switching. I have text files that I purge my brain into and pull up info in memory when I need it. And for organizing my time, it's very powerful.

For years, I have been using a simple text file: TODO.txt.
This file for a long time was a simple list, ordered from most urgent/important to least important.

I start each day by rereading this file, to verify that my day will be satisfactory if I deal with the top items.

Over time, this file also contained ideas that were never realized, always shifted downwards, and it had the issue of not reconciling the short and the long term.

From now on, I use it a little differently.

I invite you to do the exercise and ask yourself the following questions:
- what are the **two** main tasks that I absolutely must have finished today?
- Same question for the top two tasks of the week?
  And you can iterate on the month, quarter, etc.

From there, the rule is simple. Even if every day you finish the day's tasks, it will be a failure if you don't do your goals for the week. If you do the week's, it will be a failure if you don't do the month's. And so on.

This forces me to make choices on the one hand. I've accepted the things I won't do.
On the other hand, I organize as much of the day's tasks as possible to contribute to my weekly tasks.

I got this approach from a video I highly recommend called "Scaling Yourself" which is linked at the bottom of this chapter.

## Bring clarity

::image
![Graph signal versus noise](/images/clarity.png)
::

As a Software Engineer, our job constantly mixes short and long term. We deal with hundreds of feedbacks, customer support, sales teams, social networks when the company has some visibility, etc.

**Prioritizing means knowing how to sort through all this noise to extract the signal**. The goal is to determine the real problems to be solved, those that will bring value to the company.

Once we have found them, a major responsibility in the company for any "Senior", whatever the job, is to bring clarity.

**Why do we do this or that task and not another?**

To do this, you must use one of the most powerful tools at your disposal: the phrase "no, we won't do that, because...".

## Do not confuse "knowing how to say no" with gatekeeping

By definition, the word "no" is the one you should say the most, because you have to eliminate 99% of the noise to get the 1% that is really useful to the business.

I've been working on product definition and engineering strategy for over 10 years at Malt, there are incredible amounts of feedback to process. All of it is interesting. All of them are intelligent.  
But not all of them fit the strategy we're aiming for.

When you start to lose focus and accommodate every request, **to please**, or **to seek consensus**, you end up creating a debt in the product. To deal with a particular case, you handicap all the other users or developers. The product becomes more complex and special cases are introduced that must always be taken into account for further development, which slows down the speed of execution more and more.

Making a product means making choices. The "and at the same time" strategy does not work.
Not to do so is to create a Frankenstein's monster that will at best collapse on itself, at worst perish.

However, **one should not confuse saying no with gatekeeping**.

A good way to avoid gatekeeping is to bring the famous clarity I mentioned above. Providing clarity means explaining why you are making a particular decision.

Then, it is to know how to say: "ok, this feedback is interesting but" :
- we have taken it into account in another initiative that we think we'll deal with later, which is planned for around the second quarter
- according to the first user feedback, we think that we should deal with this other subject first
- it seems contradictory with the company strategy to achieve X at the end of the year
- in the constraints we set ourselves, it wouldn't be coherent

Making choices is crucial.  
Knowing how to clarify them is just as important.

Making choices also means knowing how to handle frustration. The frustration of others when your decision is not exactly what you expected. But also yours, when you were the one who disagreed.

As a tech lead, you are expected to know how to apply the following rule:

> Agree and commit, disagree and commit, or get out of the way  
Scott McNealy

In some cases, you have to fight, but again, your energy and your company's energy is not infinite. You have to pick the battles that are worth fighting.

## Choose your battles

To make an impact, you have to constantly balance the quest for perfectionism, the desire to please everyone, and the interests of the company.

It's not just about product and business strategy. At the engineering level, we constantly have to make choices.

In addition to our day-to-day work, it's common to find ourselves with a TODO list of things we'd like to do, as long as your arm, that looks something like this:

- investigate the performance of page X following last night's monitoring alerts
- redesign feature Y to eliminate a coupling issue
- write documentation on feature Z
- convince the team to switch to W technology
- discuss with the PM an opportunity to explore
- migrate a set of site pages to the recently changed design system
  etc.

Already, it's a good sign that you are taking the time to think in terms of continuous improvement. But your company has a limited time and so do you, you have to choose your battles and apply the rule of two. Not everything is fixable.

## Questions to ask yourself

How many goals do you have for the next month?

If you have more than 2, what would you eliminate?

Would you say you prioritize mostly by metrics or by instinct?

Do you have a strategy that helps you make choices?

Do you feel that you always face a lot of resistance to your decisions? Would you know how to explain the underlying reasons?

## Ressources

* [Scaling Yourself de Scott Hanselman](https://www.youtube.com/watch?v=FS1mnISoG7U)
* [Signal vs noise](https://nolongerset.com/signal-vs-noise/)
* [Prioritization and perfectionism](https://medium.com/b-t-o/planning-part-2-the-most-important-graph-9d925da21990)
* [Disagree and commit](https://en.wikipedia.org/wiki/Disagree_and_commit)

::tip
This blog post is part of the book [Impactful Software Engineering](/2023/02/impactful-software-engineering).
Feel free to read the other chapters.
::
