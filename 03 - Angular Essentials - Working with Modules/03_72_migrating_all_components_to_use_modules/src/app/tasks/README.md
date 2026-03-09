# Tasks Component & Service

## 02-38 Exercise: Create a Configurable Component

Create and use a "Tasks" component (app-tasks).

Receive & output the name of the selected user.

## Hint

You can find a user with the specific id in the DUMMY_USERS array like this:
```
DUMMY_USERS.find(user => user.id === selectedUserId)!
```


Note: 

You can create the component using: 
```
ng g(enerate) c(omponent) tasks --skip-tests

--skip-tests: avoid generating the tasks.spec.ts (test file)
```

## 02.60 Getting Started with Dependency Injection
### TasksComponent
In order to inject the TasksService into the TasksComponent, we can write in different ways:

- We could write as follow:
```
private tasksService: TasksService = new TasksService();
```
then we'll have one instance of this service in this component.


But if we then want to use the service in another component as well, we would create a separate independent instance of that service there.


We would not be sharing that one object that we create here.


And the implication of that is that if we then change the data that's managed by that service in another component,
those changes wouldn't be reflected here because we would be operating on different instances of that tasksService.


- We can use Dependency Injection, by adding the `constructor` function to the class.
```
private tasksService: TasksService;

constructor(tasksService: TasksService) {
  this.tasksService = tasksService;
}
```
The idea behind Dependency Injection is that you don't create this instance on your own,
but that you instead tell Angular that you need such an instance, and you let Angular create it.


And therefore Angular can create this instance once, and you can then use this one instance in different components,
and therefore you would then be operating on the same data.


`constructor` is a special method which will automatically be executed when the class is instantiated,
which will happen automatically by Angular whenever this component is used in some template.


So this constructor will be executed automatically and it will be Angular that executes it in the end, 
because it will be Angular that instantiates this component.


Therefore, you tell Angular about the dependency you need by simply adding it here as a parameter to this constructor.
So here we could add this tasksService parameter, and by then giving it a type of TasksService, we let Angular know
that we need this service instance here in this component.

- Using a shortcut offered by TypeScript, we can get rid of the property and the constructor body.
  - `private`: The property is only accessible from inside the class
  - `public`: The property is also accessible from outside the class (e.g., from inside the template)
```
constructor(private tasksService: TasksService) {}
```
or
```
constructor(public tasksService: TasksService) {}
```
This will automatically create a property of the same name.

- Lastly, we can use the `inject` method (from `@angular/core`):


Instead of receiving it in the constructor and so on, you can initialize it to a value that is created
with help of the inject function, which must be imported from @Angular core.


So this function must be imported from Angular, and this inject function does what the name implies:

it injects a dependency and provides it as a value for this property.

```
import { inject } from @angular/core;
import { TasksService } from './tasks.service';

class TasksComponent {
  private tasksService = inject(TasksService);
}

```
And then you don't instantiate it here, but instead you use just the task service class name as a so-called injection token that's passed to inject.


And again, Angular will then do the heavy lifting under the hood.

### TasksService

TasksService needs to be registered as something injectable with Angular,
so that Angular knows it can be injected, and that it should look for this thing
when encountering a dependency.

`@Injectable`:

By adding this decorator, Angular is now aware of this service, and can create such instance when you need it.

Most importantly, it will only create and reuse one instance, so that different components operate
on the same object in memory, and therefore on the same data.

## 03.74 Creating More Complex Module-based App Structures

- **TasksModule**:

As a rule, every Modules needs to be able to work on his own, so if a Module needs something, it must declare or import it itself.


Note that in this case, this module needs access to the DatePipe. We could import it as a Standalone in the `import` array.

But we can also import it through another module provided by Angular:

- IMPORTANT: It is NOT `BrowserModule`, as it's a special module that's only meant to be imported in the root module, with which you bootstrap the application

- For all other Modules that need access to such common features as the DatePipe, you can import the `CommonModule@angular/common` module.
```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TasksComponent } from './tasks';
import { TaskComponent } from './task/task';
import { NewTaskComponent } from './new-task/new-task';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TasksComponent, TaskComponent, NewTaskComponent], // <= Those Components are working with each other
  exports: [TasksComponent], // <= Only the TasksComponent is being called in the app.html
  imports: [CommonModule, FormsModule, SharedModule],
})
export class TasksModule {}

```

- `FormsModule` is also added to this module, and therefore removed from the `app.module.ts` as none of its declared Components uses it.

```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app';
import { HeaderComponent } from './header/header';
import { UserComponent } from './user/user';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, HeaderComponent, UserComponent],
  imports: [
    BrowserModule,
    SharedModule,
    TasksModule,
  ],
})
export class AppModule {}

```
