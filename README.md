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

Note: In order to install Angular in a specific folder, 
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
