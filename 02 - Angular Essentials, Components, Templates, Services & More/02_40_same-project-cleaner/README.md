# 02-40-SameProjectCleaner

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

## 02.41 TypeScript: Type Aliases & Interfaces

[Interfaces vs Types in TypeScript](https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript/52682220#52682220)

**Content:**
[Official documentation](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

### 1. Objects / Functions
Both can be used to describe the shape of an object or a function signature. But the syntax differs.


**Interface**
```
// Source - https://stackoverflow.com/a/52682220
// Posted by jabacchetta, modified by community. See post 'Timeline' for change history
// Retrieved 2026-03-03, License - CC BY-SA 4.0

interface Point {
  x: number;
  y: number;
}

interface SetPoint {
  (x: number, y: number): void;
}
```

**Type alias**
```
// Source - https://stackoverflow.com/a/52682220
// Posted by jabacchetta, modified by community. See post 'Timeline' for change history
// Retrieved 2026-03-03, License - CC BY-SA 4.0

type Point = {
  x: number;
  y: number;
};

type SetPoint = (x: number, y: number) => void;
```

### 2. Other Types
Unlike an interface, the type alias can also be used for other types such as primitives, unions, and tuples.
```
// Source - https://stackoverflow.com/a/52682220
// Posted by jabacchetta, modified by community. See post 'Timeline' for change history
// Retrieved 2026-03-03, License - CC BY-SA 4.0

// primitive
type Name = string;

// object
type PartialPointX = { x: number; };
type PartialPointY = { y: number; };

// union
type PartialPoint = PartialPointX | PartialPointY;

// tuple
type Data = [number, string];
```

### 3. Extend
Both can be extended, but again, the syntax differs. Additionally, note that an interface and type alias are not mutually exclusive. 
An interface can extend a type alias, and vice versa.


**Interface extends interface**
```
// Source - https://stackoverflow.com/a/52682220
// Posted by jabacchetta, modified by community. See post 'Timeline' for change history
// Retrieved 2026-03-03, License - CC BY-SA 4.0

interface PartialPointX { x: number; }
interface Point extends PartialPointX { y: number; }
```

**Type alias extends type alias**
```
// Source - https://stackoverflow.com/a/52682220
// Posted by jabacchetta, modified by community. See post 'Timeline' for change history
// Retrieved 2026-03-03, License - CC BY-SA 4.0

type PartialPointX = { x: number; };
type Point = PartialPointX & { y: number; };
```

**Interface extends type alias**
```
// Source - https://stackoverflow.com/a/52682220
// Posted by jabacchetta, modified by community. See post 'Timeline' for change history
// Retrieved 2026-03-03, License - CC BY-SA 4.0

type PartialPointX = { x: number; };
interface Point extends PartialPointX { y: number; }
```

**Type alias extends interface**
```
// Source - https://stackoverflow.com/a/52682220
// Posted by jabacchetta, modified by community. See post 'Timeline' for change history
// Retrieved 2026-03-03, License - CC BY-SA 4.0

interface PartialPointX { x: number; }
type Point = PartialPointX & { y: number; };
```

### 4. Implements
A class can implement an interface or type alias, both in the same exact way. 
Note however that a class and interface are considered static blueprints. 
Therefore, they can not implement / extend a type alias that names a union type.

```
// Source - https://stackoverflow.com/a/52682220
// Posted by jabacchetta, modified by community. See post 'Timeline' for change history
// Retrieved 2026-03-03, License - CC BY-SA 4.0

interface Point {
  x: number;
  y: number;
}

class SomePoint implements Point {
  x = 1;
  y = 2;
}

type Point2 = {
  x: number;
  y: number;
};

class SomePoint2 implements Point2 {
  x = 1;
  y = 2;
}

type PartialPoint = { x: number; } | { y: number; };

// FIXME: can not implement a union type
class SomePartialPoint implements PartialPoint {
  x = 1;
  y = 2;
}
```

### 5. Declaration merging
Unlike a type alias, an interface can be defined multiple times, 
and will be treated as a single interface (with members of all declarations being merged).
```
// Source - https://stackoverflow.com/a/52682220
// Posted by jabacchetta, modified by community. See post 'Timeline' for change history
// Retrieved 2026-03-03, License - CC BY-SA 4.0

// These two declarations become:
// interface Point { x: number; y: number; }
interface Point { x: number; }
interface Point { y: number; }

const point: Point = { x: 1, y: 2 };
```

## 02.53 Using Directives & Two-Way-Binding

### Directives
With Angular, you can **"enhance" elements** by adding so-called **Directives** to them.

```
<input ngModel>
```

Example: ngModel Directive.

An "element enhancement" that helps with extracting (or changing) user input values.

Directives, unlike components, **don't have a template!**.


Components are considered directives! Directives with templates.
