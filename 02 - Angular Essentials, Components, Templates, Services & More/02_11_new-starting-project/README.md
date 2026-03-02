# 02-11_new-starting-project

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## 02-14 [Optional] JavaScript Refresher: Classes, Properties & More

Angular makes heavy use of classes - a feature that's supported by vanilla JavaScript and TypeScript (though TypeScript "extends" it and adds some extra features as you'll see).



A class is essentially a blueprint for objects. Any properties and methods defined in the class will exist on all objects that are created based on the class.


For example, if you had this class (in vanilla JavaScript):
```
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
 
  greet() {
    console.log('Hi, I am ' + this.name);
  }
}
```

You could instantiate it (and create objects) like this:
```
const person1 = new Person('Max', 35);
const person2 = new Person('Anna', 32);
```

And you could then access the properties and methods defined by the class:
```
console.log(person1.age);
person2.greet();
```

When using Angular, you'll often define classes which are NEVER instantiated by you!


For example, components are created as classes - i.e., you create blueprints for custom HTML elements. But it's Angular that actually instantiates the classes in the end. You never call `new SomeComponent()` anywhere in your code.


In addition, Angular uses TypeScript - therefore, you often use TS-supported "enhancements" to classes.


For example decorators:
```
@Component({})
class SomeComponent {}
```

Decorators like `@Component` are used by Angular to add metadata & configuration to classes (and other things, as you'll see throughout the course).


In addition, TypeScript gives you more control over how properties are defined in classes.


You can, for example, mark properties (and methods) as `private`, `public` (the default) and `protected` to control which parts of your code can access which property (or method). You can learn more about these keywords [here](https://www.typescriptlang.org/docs/handbook/2/classes.html#member-visibility).


And, in general, you can learn more about TypeScript's support for classes [here](https://www.typescriptlang.org/docs/handbook/2/classes.html).


That being said, you don't have to study classes in-depth right now. You'll see most of those important features in action throughout this course.


For the moment, it's just important to understand that this classes feature exists, what it does (= create blueprints for objects) and how to work with classes.
