# angular-complete-guide-2026
"https://www.udemy.com/course/the-complete-guide-to-angular-2/" by Maximilian Schwarzmüller


## Requirements
### NodeJS
https://nodejs.org/en/download

### AngularCLI
https://angular.dev/tools/cli/setup-local


Check where AngularCLI is installed: 
```
npm root -g
```


Note: 

In order to install Angular in a specific folder, 
- **Create a folder for global tools**:
Example:
```
C:\Dev\npm-global
```

- **Configure NPM to use that folder**:
```
Powershell:
npm config set prefix "C:\Dev\npm-global"

aka "install my global packages here"
```

- **Add the folder to PATH Windows**


**Result**

Before Install:
```
C:\Dev\npm-global
(Empty Folder)
```


After Install: 
```
C:\Dev\npm-global
   ├── ng.cmd   ← Angular command
   ├── node_modules\
   └── ...
```
 

## Create a new project
```
ng new first-angular-app --no-zoneless
```

## Starting your project
```
npm start
```

## Install dependencies: 
```
npm install
```

## Running server: 
```
npm start
```


## Enable Absolute Paths (Aliases)

To enable custom absolute paths (often called path aliases) in Angular, you need to configure the compilerOptions in your project's `tsconfig.json` file. 

This tells the TypeScript compiler how to resolve imports starting with specific prefixes.


Here is how you can configure an alias like `@app` to point to your `src/app` directory.


**1. Update tsconfig.json**

You need to define `baseUrl` and paths inside the `compilerOptions` object.


File: *tsconfig.json*
```
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@app/*": ["src/app/*"]
    }
    // ... other options
  }
}
```

**Explanation**:
- baseUrl": "./": This sets the root directory for module resolution. It is usually the folder containing tsconfig.json.
- paths: This object maps import patterns to file paths relative to the baseUrl.
   - "@app/\*": This is the alias you want to use in your import statements.
   - ["src/app/\*"]: This is the physical location on the disk where TypeScript should look for those files.


**2. Usage Example**

Once configured (and after restarting your TypeScript server or IDE), you can import files using the new alias.


If you have a file at src/app/features/user-profile/user.component.ts, you can import it anywhere in your application like this:
```
import { UserComponent } from '@app/features/user-profile/user.component';
```

Instead of a relative path that might look like:
```
import { UserComponent } from '../../features/user-profile/user.component';
```