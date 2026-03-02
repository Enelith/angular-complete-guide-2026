# 02 - Angular Essentials - Components, Templates, Services & More

Reminder, to create a project: 

```
ng new my-project --no-zoneless
```

To install dependencies: 
```
npm install
```

Running server: 
```
npm start
```


Creating a new project comes with a `public` folder which contains a favicon file.


The files you find in the root level, so in the top level of your project, are essentially all configuration files.

- **Config files for TypeScript** (shouldn't be changed unless you know what you're doing)
```
tsconfig.app.json
tsconfig.json
tsconfig.spec.json
```

These files simply control how exactly the TypeScript code will be compiled to JavaScript code under the hood.


The compilation will be triggered automatically by the Angular CLI, so you don't have to do that manually, but these files control how that works and also how struct TypeScript is, how quickly it complains about potential errors, and so on.

- **Package files**: Manage the dependencies of your application
```
package-lock.json
package.json
```

In here, we will mostly find all those Angular packages, which of course are dependencies because we will use features from these packages in our code.

- **Extra configuration settings for Angular CLI and Angular-provided tools in general**:
```
angular.json
```

Just as with the TypeScript configuration, you typically don't need to change anything here in this angular.json file unless you know what you're doing.

- **Additional configuration files**: 
```
.editorconfig
```
Rules for the code editor: How the code should be formattted and so on.

```
.gitignore
```
Only relevant if you're using Git for version control.

- **SRC folder**:
The important folder of the project, because it's in this folder, or specifically actually in the app folder in the SRC folder, where you will spend most of your time, because it's here where you will build your Angular components and write your Angular code.


(The names of files can be different depending on your Angular version, but the following is based on releases from Angular 20)

```
src/		
├── app/    				<-- Folder to build and combine all components       		
│   ├── app.component.css  	<-- Style specific to this folder/component     		
│   ├── app.component.html 	<-- HTML file related to this folder/component    		
│   └── app.component.ts   	<-- TypeScript code related to this folder/component
├── assets/           		<-- Folder storing images, ...
│   └── ...		
├── index.html          	<-- Main HTML
├── main.server.ts          
├── main.ts          		<-- First code file to be loaded
├── server.ts          	
└── styles.css 				<-- CSS file
``` 

*styles.css* will set up some global styles that will apply to the entire web application across all components.


*index.html* is the main HTML file that will be loaded when visitors visit your website.


*main.ts* contains TypeScript code. It will be the first code file, so to say, to be executed when your Angular application loads up in the browsers of the visitors.

