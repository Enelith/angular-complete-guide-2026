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

```bash
ng g c header --skip-tests
ng g c dashboard/server-status --skip-tests
ng g c dashboard/traffic --skip-tests
ng g c dashboard/tickets --skip-tests

```

## 06.103 Using Content Projection & ng-content
The concept of using ng-content as a "placeholder" for the wrapped content is also called **Content Projection** (cf. `dashboard-item.html`)

## 06.106 Extending Built-in Elements with Custom Components via Attribute Selectors
When creating the new `ButtonComponent`, normally, we would have the `app-button` selector by default in its `@Component` directive.

In the DOM, we would then have something as follow when starting our server:
```
<app-button>
  <button>...</button>
</app-button>
```

In order to make our render more lean or if we want to extend a built-in element, we can use **Component Selectors**.


Guide to [Component Selectors](https://angular.dev/guide/components/selectors)


One kind of selector we could use is an attribute selector, instead of an element selector.

In the `@Component` directive of our `button.component`:
- An element selector is always defined by just putting the element name in the `selector` attribute
```
Example:

@Component({
  selector: 'app-button', 
  ...  
})
```
- An attribute selector is usually defined by using square brackets, which has NOTHING to do with `Property Binding` or anything like that in this place. Instead, this is just how in CSS, you would set up an attribute selector, and the component selector from `@Component` works like a CSS selector. You can then set up any attribute of your choice, like `appButton`.
```
Example:

@Component({
  selector: '[appButton]',
  ...
})

or

@Component({
  selector: 'button[appButton]',
  ...
})

or

@Component({
  selector: 'button.buttonClass',
  ...
})
```
Now, whenever you would add that attribute to an element, this, component would become active, and would effectively replace it or take control of it.


However, by doing so, and changing its call in the `header.component` html, you must make sure that you added `ButtonComponent` to the `imports[]` array in the `header.component.ts` file! 

It will fail silently otherwise.


>To summarize, typically, this pattern of selecting an element by attribute, is used if you wanna extend a built-in element.
>
>Whenever you're building a brand new component, that just wraps a bunch of built-in elements but doesn't really replace one, you should use the element selector as we did it before.

## 06.108 Exploring Advanced Content Projection

> Now, ng-content has even more features to offer.
> 
> For example, let's say that we don't want to have this icon class on a span (cf. header.component.html) outside of this buttons template here (cf. button.component.html).
```
header.component.html:

<button appButton>
  Logout
  <span class="icon">→</span>
</button>

button.component.html:

<span>
  <ng-content />
</span>
<ng-content select=".icon" />
```

> So we might prefer to have this span with this icon class in our button components template.
> 
> And we might wanna wrap that around ng-content.
```
button.component.html:

<span>
  <ng-content />
</span>
<span class="icon">
  <ng-content select=".icon" />
</span>
```

> Now of course we could do that and still use it in the places where we use the button to make this icon here selectable (cf. header.component.html).
> 
> But if we do that, we of course end up with some duplication.
> 
> If I now inspect the Logout button, you see that in there we have that icon span which includes another span with the class icon inside of it, which is an unnecessary duplication.
> 
> For situations like this, you can offer another feature provided by Angular.
> 
> Instead of adding that class here in the place where you use the button component, you can use the special ngProjectAs attribute, which is supported by Angular, as you can tell by the prefix.
```
header.component.html:

<button appButton>
  Logout
  <span ngProjectAs="">→</span>
</button>
```

> And you can add it on any element that's used anywhere where you're using content projection.
> 
> And it allows you to define a selector that can then be matched from inside the component where you're trying to project this content into.
> 
> So here I'm trying to project this icon (→) into my button component, and I can, for example, project this through the "icon" selector.
```
header.component.html:

<button appButton>
  Logout
  <span ngProjectAs="icon">→</span>
</button>
```
> So not the class "icon" with a dot,
```
  ngProjectAs=".icon"
```
> but the element selector, so to say.
>
> Now I'm not using "icon" as a HTML element, I'm just setting it for the ngProjectAs property here.
> 
> Now, the effect of that is that in the button component where I'm selecting content, I can now select content that has the element "icon", even though I'm never using that element because I'm using this ngProjectAs attribute.
```
header.component.html:

<button appButton>
  Logout
  <span ngProjectAs="icon">→</span>
</button>

button.component.html:

<span>
  <ng-content />
</span>
<span class="icon">
  <ng-content select="icon" /> // <====
</span>
```
> So that simply works together with ng-content, which therefore allows me to now use any selector of my choice.
>
> And I can of course now also go to the new-ticket.component. 
```
new-ticket.component.html:

<button appButton>
  Submit
  <span class="icon">⌲</span>
</button> 
```
> And there on this span, instead of using this class here, we can also use ngProjectAs and use icon like this.
```
new-ticket.component.html:

<button appButton>
  Submit
  <span ngProjectAs="icon">⌲</span>
</button> 
```
> And that will then be picked up by the select property on ng-content in the button component.
>
> And if we save everything, it'll still work as before, but now we don't have that unnecessary wrapping.
>
> We still have a span in a span, but we only have one span with the class icon. 
> 
> And before that we had two spans with that, which was unnecessary.
> 
> And that's therefore another feature you should be aware of.

## 06.109 Defining Content Projection Fallbacks

> Now yet another ng-content feature you should be aware of is that you can use it to define some fallback content.
> 
> For example, if you had some fallback icon that should be used if no specific icon is defined, you can wrap ng-content around that fallback content.

```
button.component.html:

<span>
  <ng-content />
</span>
<span class="icon">
  <ng-content select="icon" >
    @ // <= What should be displayed if the "icon" part wasn't defined when calling the `button.component`
  </ng-content>
</span>
```

> [...]
>
> And it's now this content that would be output if ng-content would fail to select content, which would happen if I remove this span here in the place where the button component is used.
```
header.component.html:

<button appButton>
  Logout
  <! -- <span ngProjectAs="icon">→</span> --> // <= REMOVING THIS PART
</button> 
```
> If I remove it, there of course is nothing to select for ng-content, and it would then output this fallback content instead.
> 
> So if I save this, you see I still have this icon here (IN MY EXAMPLE, IT WOULD DISPLAY "@" INSTEAD OF "→") in the Logout button, but that's now coming from my fallback that's defined here.

