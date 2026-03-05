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

### 03.66 A First Introduction to Angular Modules (NgModule)
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