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

## 06.112 Understanding & Configuring View Encapsulation
As it is, the current CSS page is broken, specially in the `control.component` (input fields & textarea).


To fix that, we add a *control* class to the paragraph in the `control.component.html`, based on its `.scss` declaration.

```
control.component.html: 

<p class="control">
  <label>{{  label() }}</label>
  <!-- Only inputs or textareas will be selected -->
  <ng-content select="input, textarea"/>
</p>

```
By doing so, the behaviour is fixed to some extent.

> The label looks better now, which is a start, but the input and text area isn't looking the way it should look.
>
> It doesn't look horrible, but it doesn't have the look it should have.
>
> And why is that the case?
> 
> After all, we have this rule here, right?

```
control.component.scss: 

.control input,
.control textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font: inherit;
  font-size: 0.9rem;
  color: #4f4b53;
}

```
> Well yes, but with this CSS rule, we are trying to style inputs and text areas that are inside of an element with the class control on it.
>
> [...]
>
> So these styles here should become active on them, right?
>
> Yeah, almost.
>
> The problem is Angular does not care about which content might eventually end up in your components template.
> 
> It only cares about what it sees in your component template, and there it just sees a placeholder, not the actual inputs or text areas that will end up here in the future.
> 
> And that's why these styles won't affect the inputs and text areas that will be projected into this paragraph and into this component.
>
>
> So what can we do about that?
>
>
> Well you can disable the scoping of these styles here for example, because by default, as I explained, component styles are scoped to the component to which they belong.
>
> They can't affect anything else anywhere in any other component.
>
> But here I actually wanna have these styles affect inputs and text areas that are somewhere else in the application. And therefore what we should do here or what we could do to fix this problem is go to the component selector of the control component, and add a new setting here.
>
> And the new setting you want to add is the **encapsulation** setting.
>
> And encapsulation takes a value of type **ViewEncapsulation**.  And that is actually a so-called enum, which is essentially a collection of possible values.
>
> [...]
>
> Now (ViewEncapsulation.)*Emulated* would be the default and you don't need to set it.
>
> *Emulated* means that Angular emulates the ShadowDom behavior, which is a browser thing, which in the end means that styles that belong to a component or to an element should be scoped to that element.

```
SHADOW DOM: 

A BROWSER FEATURE that allows you to attach hidden DOM structures to DOM elements.

Example: 
The built-in <video> element hides a more complex DOM tree that's used internally.

For CSS styling, the Shadow DOM can be used to scope CSS styles to that hidden tree - instead of applying styles globally to the entire page.

Angular can EMULATE this Shadow DOM browser feature for its own components.

```
> Alternatively, you could choose (ViewEncapsulation.)*ShadowDom* so that Angular under the hood uses the real browser ShadowDom feature, which is not supported by all browsers though, which is why emulated is the default.
>
> But here we need (ViewEncapsulation.)*None*, which simply disables that style scoping. That style encapsulation as Angular calls it.

```
control.component.ts: 

import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.scss',
  encapsulation: ViewEncapsulation.None,
})
export class Control {
  label = input.required<string>();
}

```

> With that setting added here to this control component, the styles set up here will again become global styles and therefore now they will affect the input and text area that is eventually rendered into this component.
>
> And that's therefore another important feature to know.
>
> You will typically not need to disable encapsulation that often, but if you do need to, like here in this example, this is how you can do it.

## 06.113 Making Sense of Component Host Elements

**Component Host Elements**: 


Every Angular component has a **Host Element**.

```
Example: 

A component with a selector of "app-header" targets an <app-header> element which is rendered into the real DOM.
```

**Important**: 

The elements targeted by your components selectors **do NOT** act as placeholders and **are NOT** replaced when the page is rendered!


Instead, the selected elements are *preserved* and simply *"enhanced" / taken over* by your component logic & markup!


The component Host Element is **NOT** considered a part of the component template, but will be affected by the (scoped) component styles via `:host`.


Therefore, in the `button.component`, because our template is as follow (no trace of a `<button>`): 
```
button.component.ts:

@Component({
  selector: 'button[appButton]', // <= This is the component Host Selector here: a <button appButton>
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})

```
```
button.component.html: 

<span>
  <ng-content />
</span>
<span class="icon">
  <ng-content select="icon" >
    →
  </ng-content>
</span>

```
We can fix the problem by replacing our current css with the following, where `:host` was originally `button`:
```
button.component.scss: 

:host {
  display: inline-block;
  padding: 0.65rem 1.35rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  text-align: center;
  cursor: pointer;
  background-color: #691ebe;
  color: white;
  border: none;
}

:host:hover {
  background-color: #551b98;
}

.icon {
  display: inline-block;
  margin-left: 0.5rem;
  transition: transform 0.2s ease-in-out;
}

:host:hover .icon {
  transform: translateX(4px);
}
```

## 06.115 Interacting with Host Elements from Inside Components

Instead of having to add the `.control` class to each `<app-button>` elements (which not only is bothersome but also hard to maintain), 

> [...]
> 
> Angular gives you another way of adding attributes and properties to your host elements.
>
> [...]
>
> Go to our ControlComponent, and there we can add another setting to the Component Decorator, another configuration property, and that's the `host` property.
>
> Now, host wants an object as a value, and that object then takes any key value pairs of your choice.
>
> But what this object will do is it will add the key value pairs you add here as properties on your host element.

```
control.component.ts: 

import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
  }
})
export class Control {
  label = input.required<string>();
}

```

> So here I could add a key named class and set the value to control and that will add this class attribute, you could say, this class property to app-control wherever it's being used.
>
> So I only need to define it once here, but it will be added to all app-controls anywhere in the application.
>
> [...]
>
> And you can use this host property, not just when encapsulation is set to none, instead, you can always add this if you have certain properties that should be added to the host element, and that can be another useful feature.

## 06.117 Interacting with Host Elements via @HostListener & @HostBinding

> Now when it comes to working with that host element of an Angular component, there are two other things you should know about.
>
> And the first thing is that when it comes to adding properties to the host element, you can use this host setting on the Component decorator object, and that is the preferred way of doing it.

```
control.component.ts: 

import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
  }
})
export class Control {
  label = input.required<string>();
}

```

> But alternatively, you can also add a property to your component class and name it "className", for example, and set the value you wanna bind on your host element, so "control" in my case. And then decorate this with the HostBinding decorator, which must be imported from @angular/core. 
>
> Now what HostBinding will do is it will take a look at this property name ("className"), and it will then add it as a property to the host element and set this ("control") as a value for that property.
>
> Therefore, I can comment out host here and instead use HostBinding. 

```
import { Component, HostBinding, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.scss',
  encapsulation: ViewEncapsulation.None,
  // host: {
  //   class: 'control',
  // }
})
export class Control {
  @HostBinding() className = "control";
  
  label = input.required<string>();
}

```
>
> Now, I technically don't wanna use "className" here, but "class", and I could use it here.
>
> But to avoid any confusion with the built-in `class` keyword, we might wanna use a slightly different property name here. And that's why HostBinding, this decorator, also takes an optional input, an optional argument, which allows you to define the actual property that should be bound as a string.
> 
> So now the value here ("control") will be set as a value for this "class" property with help of HostBinding, even though the property name here ("className") is different.

```
import { Component, HostBinding, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.scss',
  encapsulation: ViewEncapsulation.None,
  // host: {
  //   class: 'control',
  // }
})
export class Control {
  @HostBinding('class') className = "control";
  
  label = input.required<string>();
}

```
> You only need this argument here ("class") though if you have a different property name ("className"), then you wanna bind.
>
> [...]
>
> That being said, using HostBinding is discouraged though. You should instead use the host property. This feature just exists for backward compatibility reasons, because in the past it was a common way of setting those host properties.
>
> Nowadays, you should prefer this "host" property on the Component decorator object.
>
> There also is a HostListener decorator, which you can import and use, which allows you to bind a method to an event to which you wanna listen here.
>
> Alternatively, you could add event binding here (@Component) as well.
>
> And for example, listen to a click event, and then here (class ControlComponent) define the method of the class that should be executed when that event occurs.
> 
> So here, for example, we could add a onClick method and simply, console.log('Clicked').
> 
> And if you wanna trigger this whenever the host element is clicked, we can either do that by adding this value to our host object here in the Component decorator.
>
> So I'm using that event binding syntax here ("'(click)'"), as you can tell.
> 
> And then also as a string, I define the code that should execute when that click on the host element occurs.

```
import { Component, HostBinding, HostListener, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class Control {
  // @HostBinding() className = "control";
  // @HostListener()

  label = input.required<string>();

  onClick() {
    console.log('Clicked!');
  }
}

```
> So here I'm telling Angular that it should execute the onClick method of this component.
>
> And if you do that and you comment out HostListener for the moment, if you open your console here on the page, whenever I click into one of my controls, you see click gets logged here.
>
> So you can also listen to events on the host element by using this syntax, or as I mentioned, alternatively with HostListener.
> 
> Then you would directly assign the method that should be triggered as a value here. Though, you then also must pass an argument to HostListener and specify the event to which it should listen.
```
import { Component, HostBinding, HostListener, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    // '(click)': 'onClick()'
  },
})
export class Control {
  // @HostBinding() className = 'control';
  @HostListener('click') onClick() {
    console.log('Clicked!');
  }

  label = input.required<string>();
}

```
> So now you would be telling Angular that it should listen to click events on the host element and trigger that method whenever such a click occurs.
>
> With that, if I save this and reload, we also see that clicked output in the console as I click on those controls.
> 
> So that again, is an alternative to using this syntax.
> 
> Now, I personally actually prefer this alternative (@HostListener).
>
> I think it looks a bit cleaner than defining this here ("host: { 'click': 'onClick()' }), but the Angular team recommends this approach, which is why I'm showing it and recommending it to you here in this course.
>
> So that's how you could listen to events on your host elements.
>
> Of course, we now also have to make sure that this onClick method exists though, otherwise this will fail.

## 06.118 Accessing Host Elements Programmatically

> So knowing how to listen to events on the host element and knowing about HostBinding and HostListener is important as an Angular developer.
> 
> There is one other last host element-related feature you should know about though because sometimes in certain situations, you might need programmatic access to the host element.
> 
> So you might need to interact with it from inside your TypeScript code.
> 
> For example, let's say here, when we click on the host element, I wanna output some information about it, which obviously is not a real use case. But here in this app I don't have a real use case because it is a feature you won't need that often, but you should still know about it.
> 
> So for this demo, let's say we wanna log some host element information whenever it is clicked.
> 
> Now, what you can do to achieve this is you can inject a special value into your component, a value that will be provided by Angular, and you can inject either with the constructor as you learned it for services or with help of that 'inject' function about which you also learned.
> And I'll use the latter here, but both would work.
> 
> So for that, I'll add a private property here, which therefore won't be exposed to the template of this component since I don't need access to it there.
> 
> And I'll name it el, but the name is up to you.
> 
> And the value of that property should then be the result of calling inject, which must be imported from @angular/core, of course.
> And to inject, we now have to pass a special class name, the ElementRef class name, which also must be imported from @angular/core.
> 
> ElementRef is a class defined by Angular.
> So it's part of the Angular framework, which defines a reference to some element that's rendered to the page.
> 
> So it's pretty generic because it can refer to any element on the page.
> 
> But by injecting it into a component like this, Angular will give you access to the host element of that component.
> 
> So therefore here, we can console.log(this.el).
```
import { Component, ElementRef, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  },
})
export class Control {
  // @HostBinding() className = 'control';
  // @HostListener('click') onClick() {
  //   console.log('Clicked!');
  // }

  label = input.required<string>();
  private el = inject(ElementRef);

  onClick() {
    console.log('Clicked!');
    console.log(this.el);
  }
}

``` 
> And with that, if you save it and you reload, if you click on that app-control element, you get clicked, of course, but you also get that injected ElementRef object, and that is then an object that has a nativeElement property.
> 
> And that property then actually holds your host element. So if I expand that, you see that this is in the end what Angular knows about the host element that's rendered to the DOM.
> And it's essentially a collection of properties that exist for all DOM elements.
> And you could now extract information from those properties.
> 
> You could also change them, though you should be careful about that because you typically don't wanna start changing what's visible on the page programmatically by using the ElementRef.
> 
> Instead, you should change what's visible on the page by changing data and using template features as we always did it throughout this course. But if you need programmatic access to the host element, this is how you can get it: by injecting ElementRef.

