# Section 6: Components & Templates - Deep Dive

## 06.96 Module Introduction

> In this section, we'll work on yet another demo project, and it will be a demo project
that will allow us to dive a bit deeper into components, their templates, managing data and components,
and all those other related concepts.
>
> Because in this section, we'll build up on the foundation we got over the previous sections, and we'll dive into
more advanced component features and concepts.
>
> Therefore, by the way, we will not focus on building this demo application as quickly as possible.
>
> Instead, we'll just use it as a dummy application to dive into all those advanced concepts and to explore some advanced concepts in an actual project.
>
> Specifically, we'll, for example, have a look at how we can work with a Components host element, what that actually is,
and why it can sometimes be interesting to work with that.
>
> We'll revisit the idea of inputs and outputs and two-way binding, and we'll explore advanced configuration options
and also how you can set up custom two-way binding on your own Components, 
so that certain properties on your own Components can be two-way bound if needed.
>
> We'll explore how you can interact with a Components view and content
and why you might want to do that, 
and what exactly I mean with interaction here.
> 
> We'll explore the lifecycle of a Component
and how you can hook into certain lifecycle stages
and much more.
>
> And therefore, let's dive right in,
and let's get started with these more advanced concepts now.
> 
> — Maximilian Schwarzmüller

## 06.98 When & How to Split Up Components

One of the main ideas behind this component concept in Angular, but also in other libraries and frameworks like React, is that you can **separate concerns**:
- `Separation of Concerns` principle: Every component should only do **one thing**.


It's a trade-off though:
- You might want to create very granular small components (and work with many components) ~ `Separation of Concerns`
- But at the same times, you might end up with a simplier application and more simplicity if you co-locate your code ~ `Simplicity & Code Colocation`

```

Ultimately, there is no clear right or wrong, and it will always depend on preferences (your own, the team's guidelines, ...) and on the complexity of the application you're working on.


**Suggestion**:

- Try to identify the main thing the component does, or the main things that are currently happening in one of your components
- Split those main things into separate components


Therefore, in our current project, we're going to separate the header and the different dashboards of the `app.component` into separate components.