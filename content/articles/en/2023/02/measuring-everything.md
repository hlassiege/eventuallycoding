---
id: "13"
title: "Measuring everything"
description: "Without measurement, everything is done by intuition. And yet, the maturity of your engineering team lies in its ability to make data-driven decisions."
date: "2023-02-19"
tags:
  - "impact"
  - "senior"
  - "measures"
cover: "opticien.jpg"
language: "en"
alternates:
  - fr: "https://eventuallycoding.com/2023/02/measuring-everything"
---
> You can't improve what you don't measure  
[Peter Drucker](https://en.wikipedia.org/wiki/Peter_Drucker)

Imagine this scene, an individual enters an optician:

> * Hello, I think I am myopic, I want glasses to treat my myopia
> * Of course, sit down, I'm thinking of offering you glasses with a correction of 3 left and 2 right

It's absurd and you've probably never witnessed it.

And yet, in software development, how many times have you seen the following situations:

* a major refactoring without any impact measurement
* massive work on the elasticity of an infrastructure without capacity planning
* micro performance optimizations without having measured the performance beforehand


By the way, if you have examples to share, feel free to respond on this Twitter feed:

https://twitter.com/hugolassiege/status/1626880872363204609

(the first question is in french but don't hesitate to contribute in english)

## Intuition and experience versus measures

This subject requires a lot of care, so I will try to bring as much nuance as possible.

Far be it from me to say that you shouldn't constantly improve code. You don't want to have to fill out multipage files to justify them. And you don't want to fall into [analysis paralysis](https://en.wikipedia.org/wiki/Analysis_paralysis).

For all the small refactorings around testability or readability, Peer review validation is a sufficient validation mechanism in many cases.

I will also exclude the case of startups in seed. I went through this stage. Intuition plays a huge role. The code base is small, the product is still simple enough to understand it as a whole. At this stage, it either works or it doesn't, and in any case, speed of execution is essential and, as we will see later, to have sufficient maturity on the data, there is a significative investment to be made.

But, as soon as :
- the impacts on the code base start to be significant, often when the product team exceeds a certain size (>20?)
- modifications require more than one person to be processed
- modifications will greatly delay the rest of the work in progress

Measuring things will remove any ambiguity.

My point is to say that you have to deal with finite resources, including one : **time** (and money which is a result of your investment choices).

When you consume it, you have to do it with knowledge and preferably with a goal in mind. You need to know what you are sacrificing, and to make these choices, either the amount of time spent is negligible, or I advise you to rationalize your approach. And no, working evenings or weekends is not a viable option. You should focus on being efficient.

By the way, I excluded above the small refactorings. Well, nevertheless, it's an interesting topic. Let's do a little theoretical exercise.   
Regardless of the size of a company, imagine that you have a finite number of keystrokes available per week. Let's set this number arbitrarily at 10,000.
If a minor refactoring causes you to consume 10 keystrokes, we can say that's okay.
But if your code base is very large, you may need to replicate this change and it may cost 1000 keystrokes, you just consumed 10% of your keystroke capital over the week. It might be at the expense of another refactoring that had more negative impacts, or a shift on a development in progress.

So at some point, you have to make a choice. "I have a limited number of keystrokes, where should I use this energy?"

You think it will improve readability. Is this true? Is it measurable? By a measurement on your CI maybe? Is it a piece of code that is regularly modified or something else that is very stable? Is there a gain in resource consumption? Is it measurable?

## No measures, no alignment

Most importantly, if you don't have measurements, even success is not demonstrable.
Without before-and-after measurements, there is no way to tell if an action was beneficial, and if so, by how much.

Your job involves a lot of discussion with many people, all of whom have the goal of making sure that the company uses its resources to the best advantage of its customers, and ultimately its own.

Your role as a Senior Software Engineer is to be present in these discussions, because Engineering has a major role to play in the success of the company. Part of your job is to know how to popularize, defend investments (in time, in money etc...). Yes, even when you are not a manager...

Without measurements, you can't set objectives.  
Without goals, you can't set success criteria.  
Without goals, you can't create alignment.  
Without alignment there is no impact.

A product team that doesn't make constant impact is listened to less, and ends up being in danger of underinvestment. And in truth, everyone ends up losing in the process.

## Our job is a scientific job

Our job is a scientific job and one of the main pillars of scientific culture is measurement.

This measurement is part of a scientific approach.

We often hear about 10x developers and I have personally worked with people who are indeed terribly more productive than others.
It's not their typing speed on the keyboard that makes them so productive, **it's their ability to apply a systematic approach to solve a problem**.  
And that can be learned.

The approach can be summarized as follows:
* listen, observe, measure
* formulate hypotheses
* setting goals and aligning the team around those goals
* test
* start over from the first step

Example :

* Listen: Users complain that a payment page is slow to load
* Measure: Measurement tools show that indeed.
    * a significant part of users exceed 10 seconds of display, while others display the page in less than a second
    * these users end up abandoning their purchase, which translates into a loss of xk€ potential
* Hypothesis: a resource is undersized. The performance would be ok under a certain load but would collapse from a certain threshold
* Objective: Aim for a P95 (95% of users) below one second of display and regain yk€ of turnover
* Action:
    * Measure the entire chain via flame graphs with bots to simulate increasing traffic to identify various blockages
    * Carry out the corrective actions necessary to correct the biggest blockages that cause 95% of the slowdowns
* test, validate in real situation

Every time we approach a subject, especially when it is an unknown case, a section of the application we do not know, a technology we do not know etc.. If you apply a methodical approach, you will eventually get there.

Of course, the speed of resolution will depend on your initial knowledge and know-how. The fact that you master certain diagnostic tools or that you need assistance will slow you down or speed you up, but it is the method that must guide you and this method is based on these three pillars:
* observations/measurements
* hypotheses
* validation/invalidation

## Data, a criterion of engineering team maturity

I invite you to read this twitter thread from Mary, SRE at Microsoft (sorry, in french):

https://twitter.com/PykPyky/status/1605205574957907968

Data is clearly used here in a **systematic** way to work. It's not just anecdotal, it's a maturity criterion for the engineering team, and for the company without doubt.

And it can't be improvised. Having the right data at hand at the right time requires preparation. Being able to cross-reference it with other data to establish correlations requires a data collection and visualization infrastructure.

At Malt, we have put a lot of effort into making data available, correlatable and easily accessible.

For example:

* our internal documentation uses an analytics tool to understand which pages are the most read, the least read
* we use datadog to aggregate all monitoring, performance and alerting data
* we store all business events in BigQuery to rebuild analytical views and judge the success of our product


And if I'm talking to you about all this, it's because it's your role as a tech lead to increase your company's maturity on the subject.

It's your responsibility to have a clear vision of the cost of your product and its ROI. It is your ability to understand the financial stakes that will also allow you to make recommendations and investment choices on a Buy or Build basis.

## Data maturity model

Once we said that we had to systematize access to and use of data, that's fine, but I'd like to present your a maturity assessment model to better understand where you are and where you could go.

There are several models, IBM, Gartner or Snowplow for example. Here I propose you to see the one of [Gartner](https://www.ovaledge.com/blog/data-governance-maturity-model), but we will adapt here for engineering and product.

### Level 0 : Unaware.

This is the worst situation. No data is used. On the engineering side, there is no collection mechanism (monitoring, APM), and obviously no aggregation and consolidation mechanism (observability). No specific tools are used for performance testing. No metrics to measure the performance of the engineering are followed, DORA/accelerate etc...

On the product side, the product is not instrumented (tracking analytics). The objectives are all qualitative, we aim at releasing functionalities but without having any measurement elements on their use. No key KPI is tracked (conversion funnel, churn, activation etc...)

The actions here are quite obvious, we need to train the whole team on the importance of data and put in place the tools to collect measurements.

### Level 1: Aware.

At this stage, some collection tools exist but without people whose responsibility is to monitor them. The quality of the data is therefore questionable.
For example, you have a distributed systems and your logs are not aggregated, or you don't have a clear policy of log levels and therefore have a lot of non-exploitable data.
There can be several sources of data, sometimes contradictory.

Sporadically some data is used anyway.
On the product side it's the same, tracking can be in place but not followed, no tracking plan, no funnel really monitored.

The action here is to start appointing people in charge (it can be teams) to improve the quality of the data. A global strategy must start to be thought out.
Example:
* what are the levels of application logs, for what type of actions, what details
* how to process logs in a distributed system, how to correlate web requests with application logs and DB or system logs
* how to follow a funnel with a user path, how to correlate web analytics and business data

### Level 2 : Reactive

Data is used here on a more regular basis but mostly in reaction.
Strategies have been put in place but adoption remains low.
Alerting is still not in place or effective.
* it raises false positives (e.g. poorly configured sonar)
* or too many alerts, which end up being masked so as not to disturb

On the product side, we monitor the main KPIs and we know where to look for the information. Nevertheless, we do not follow the information regularly, we often change the definition. The quality remains perfectible.
However, there are some teams that are starting to use this data more and share it.

### Level 3 : Proactive

At this stage, there are clear and active managers on the collection tools and data sources.
Strategies are in place (log levels, alert levels, SLA/SLO/SLI)
If we start refactoring, performance improvement or scalability projects, data is central in the decision making process.

On the product side, every new project thinks about setting up success metrics from the start; this is part of the kick-off conditions.
However, this remains internal to the engineering and product teams; this data is not yet used on a large scale in the company. Or even other metrics are used in other departments to represent the same thing. This will be the next step.

### Level 4: Managed

This time, the importance of data and its quality is recognized throughout the company, but above all it is considered critical.

Engineering metrics are communicated and known at the highest level (executive committee). Post mortems are shared outside the engineering team during incidents.
We know how to link product operating costs with the business (nominal cost of a user in terms of machine resources, for example, nominal cost of a user over its lifetime, etc.) and this is used in budgeting exercises to calculate growth projections.
We use metrics recognized as best practices in the market: DORA, cycle time, etc.

At the product level, in the same way, the data is communicated to the whole company. The objectives of the product team are materialized by quantified objectives (increase in conversion, decrease in churn, etc.).

### Niveau 5 : Effective

Data is used globally, within the company, quality is controlled, governance is formalized.
Data is used externally. It can give a competitive advantage in certain cases.

At the engineering level, we publish service level agreements (public SLAs), we can provide detailed status pages with the level of stability of the product by software brick, for example: failure in progress on the payment by credit card, status ok on the search engine etc... We can specify recovery times or publish mortem posts.

From a product point of view, it is linked to the company's business. For example, publishing data in open data can provide an advantage to the brand.

## A large-scale refactoring at Malt

Let's take a concrete example to illustrate how to use measurement and a scientific approach on a classic subject: functional architecture.

**Context** : Malt in 2022
Scale-up, 600 people, 100 in engineering

Main actor : Nicolas Grisey Demengel.

**Observation**:

Nicolas was working on a subject that had been brought up to him, the slowness of CI (continuous integration).
The opportunity is important, it concerns the entire chain of building our applications. This slows down feedback times and more globally the entire development cycle.
Moreover, we pay for CI by the resources consumed. In short, the subject is critical.

To give a little context, at Malt there are several teams (squads) that are theoretically responsible for one or several applications. Team A is in charge of application A, team B of application B etc...

Nicolas observes several things:
* if the IC is long, it's not a question of slow build, it's a question of the number of builds in parallel
* When a team A delivers its application, it also very often delivers other applications, B, C, D etc...
* If team A delivers other applications, it is because the applications often share common libraries that must be modified and that are used in other applications. These modifications lead to the rebuild of the other applications, and sometimes they must also be modified according to the changes in the common library.
* The teams are not at ease, because they are re-releasing applications for which they are not responsible and are afraid of regressions

**Hypothesis**:
There are coupling issues. Common libraries should be limited. The functional architecture is a concern.

Except that, it is not enough to start the subject. There are 2.3M lines of code, starting anywhere would probably be inefficient. And how can we consider that the subject is solved? To completely solve the architecture issues, it would be a multi-year project.

**Measures**:

To determine the best way to start, and to prove the hypothesis, Nicolas set up a set of measures. To summarize, he observed :
* the number of applications deployed by a change on a given library
* the frequency of modification of a given library

From there, he was able to determine the "hotspots": the libraries that cause the most rebuilds, and with the highest modification frequencies without a strong ownership (% of commits made by other team > x%).

These hotspots are the places to start.

The exact details of the work done, the graphs etc. [are available on the Malt Engineering blog](https://blog.malt.engineering/your-version-control-system-contains-invaluable-insights-for-your-engineering-teams-part-i-c90b237fe7b4)


**Conclusion

Having done these measurements has allowed :
* prioritize the work to be done
* to set goals
* to align several teams on the approach

This approach is based on a simple methodology: observation, measurements, hypotheses, re-measurements, objectives, follow-up.

The setting of objectives in this case is crucial. Without quantified objectives, at what point do we stop in a "decoupling" project? Here Nicolas was able to set thresholds (maximum number of builds, ownership rate per application, etc.) at which action was needed, but below which there was no longer any urgency.

And this is a mature engineering team approach.

## Questions for you

And you, on your projects, do you use quantitative objectives? If not, could you add some?

What would be your maturity level on the above model?

Do you know the cost of a user and the evolution of this cost over the last 2 years?

Are your engineering metrics known outside your team?

## Resources

[What is data maturity and how to climb the data maturity scale](https://www.softkraft.co/what-is-data-maturity-and-how-to-climb-the-data-maturity-scale/#the-gartner-data-maturity-model)

[Data Governance maturity model](https://www.ovaledge.com/blog/data-governance-maturity-model)

[Your version control system contains invaluable insights for your engineering teams III](https://blog.malt.engineering/your-version-control-system-contains-invaluable-insights-for-your-engineering-teams-part-iii-238a7296aa36)

[Your version control system contains invaluable insights for your engineering teams I]I(https://blog.malt.engineering/your-version-control-system-contains-invaluable-insights-for-your-engineering-teams-part-ii-258a72b6eb65)

[Your version control system contains invaluable insights for your engineering teams I](https://blog.malt.engineering/your-version-control-system-contains-invaluable-insights-for-your-engineering-teams-part-i-c90b237fe7b4) 
