# 02.57 Content Projection with ng-content

Components that do not belong to any specific feature area of the application.


Card component is a reusable component, that can be used anywhere in the application. 

It will be used as a wrapper (with its css, coming originally from the User component) for different content elements.


**Important:**

When you use an Angular component somewhere in your application, like here as a wrapper around some other markup, 
it will by default not keep that markup around which you wrap it.

Instead, it will replace this wrapped markup with its own template markup.


Example: 
```
card.html:
<div>
...
</div>

user.html:
<app-card>
  <!-- Adding an event listener, ex: (click)=... -->
  <button [class.active]="selected"
          (click)="onSelectingUser()" >
    <!-- Property Binding Syntax -->
    <img [src]="imagePath"
         [alt]="user.name" />

    <!-- String Interpolation -->
    <span>{{ user?.name }}</span>
  </button>
</app-card>

Render: 
...
```

You can merge the both contents by using "Content Projection" (using ng-content):
```
user.html: 
<app-card>
  <!-- Adding an event listener, ex: (click)=... -->
  <button [class.active]="selected"
          (click)="onSelectingUser()" >
    <!-- Property Binding Syntax -->
    <img [src]="imagePath"
         [alt]="user.name" />

    <!-- String Interpolation -->
    <span>{{ user?.name }}</span>
  </button>
</app-card>

card.html:
<div>
  <ng-content />
</div>
```

