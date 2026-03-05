# Section 3: Angular Essentials - Working with Modules

## Angular Modules (NgModule) Exist for Historic Reasons
When Angular 2 was released in 2016, there were no *Standalone Components*.



Today, Standalone Components are the recommended way of building components.


But you can also still use the "Module-based Components" with Angular Modules.



The goal of this section is to learn the following:
- Understanding Angular Modules (NgModule)
- Use Modules instead of Standalone Components. 
- Declaring & Exporting Components in Modules (and why you would want to do that)
- Shared Modules (combining multiples modules, how to share module functionalities)

## 03.66 A First Introduction to Angular Modules (NgModule)
The idea behind Angular Modules in the end, is that you don't specify on a *per component level* (as you do it with Standalone Components),
which Components the current component uses in its template.


So for example, with Standalone Components, if my `app` component in its template, uses my custom header component, 
the user component, and the tasks component, 
I have to specify these Components in the *imports* array of the `app` component
```
app.ts:

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, TasksComponent, UserComponent], // <=
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
```
Instead of doing that on a per component level, with Modules, you instead create a module, that simply combines all the Components that need to work with each other.


Therefore, the component decorators and the configuration you pass to your Components gets leaner, because you don't need the `imports` array (for example) when working with Angular Modules, but you instead have those extra modules.


The downside of this approach is that whilst the component decorators get a bit leaner, it's not immediately obvious which component uses which other components. 

(You also have to create those extra modules obviously, which not necessarily an advantage.)


Note that *Standalone Components* and *Modules* can be mixed together is necessary.


## 03.67 Angular 19, Standalone Components & Modules
With the release of Angular 19, standalone components became the default for new Angular components.


That means that if you DON'T set `standalone: false` (e.g., if you don't set `standalone` at all) inside of `@Component()`, you'll get a standalone component (which won't work in the Modules-based approach covered by this section)!


In older Angular versions (< 19), it was exactly the other way around: Module-based components were the default - i.e., you had to explicitly set `standalone: true` to get a standalone component. Not setting `standalone` at all would give you a Module-based component.


Therefore, you should check your `package.json` file to see whether you're using Angular 19+ or not.


If you are, make sure to always add `standalone: false` in this course section here to use Module-based components.


For the majority of the course this won't matter since we use standalone components as a default anyways. But for this section here, it does matter since it's explicitly NOT about standalone components. 


## 03.68 Creating a First Empty Module
What you typically do in every Angular app that uses Angular Modules, is that you create a root `AppModule`, generally next to your `AppComponent` (in the `app/` folder).


Following the naming convention, the file name contains a description of what's inside that file (e.g., `app.module.ts`, a module).


The module itself is a `class`, that you generally `export`. Its name by convention is `AppModule`.

It should also be decorated with the `NgModule@angular/core` decorator.


Like most decorators, this decorator takes a configuration object, where you now configure this module.

One essential configuration that must be done with help of that module is that you add a `declarations` array to its configuration, because it's that array where you will declare and register all the components, directives, and else that need to work together.

```
import { NgModule } from '@angular/core';

@NgModule({
  declarations: []
})
export class AppModule {

}
```

For more complex applications, you could create multiple modules that work together.


## 03.69 Bootstrapping Apps with Angular Modules

Components that are configured as `standalone` can't be declared in an NgModule, because Modules and Standalone Components are rivaling concepts.


By switching the `AppComponent` to `standalone: false`, the `imports` configuration cannot be used anymore (as it's only available for Standalone Components), but also, in the `main.ts` file, we originally started the application as follow:

```
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';

bootstrapApplication(AppComponent).catch((err) => console.error(err));
``` 

As we're now working with a root Angular Module instead of a Standalone Component, you don't start your Angular application like this.

The `main.ts` should be modified as follow: 
```
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

```

You also need to change the `app.module.ts` file by adding a new configuration to the existing one: `bootstrap: []`.

This will tell Angular which Components of this module are considered the root components you want to set up for your application.

```
import { NgModule } from '@angular/core';

import { AppComponent } from './app';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent], // <= We setup the AppComponent as the root component with which the application will start
})
export class AppModule {}

``` 