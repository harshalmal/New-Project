# Angular General Setup : App Name : Initial

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.7.
The 4 different task is added in this application.
a.Standard Webpack application
b.Environment setup
c.Javascript Libraries installation 
d.Exclude / include specific files in package

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
1) ng build --configuration=production
2) ng build --configuration=development

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
1) ng serve --configuration=production
2) ng serve --configuration=development

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Webpack Configuration (Multiple File)

In this application, we create webpack configuration with angular. For this we exporting the module.
the module consist of entry, resolve extension, rules for loader (loading the different type of file in js and ts file.), plugins.

 ## Entry :- 
 Two type of entry file we provided here, this process load all the dependencies in sequence.
 1. app.ts : For running the application, it import the module.
 2. vendor.ts : imports the application's third-party modules

 ## Output :- 
 All type of file is bundled in main.ts file, which is showing in dist folder.

 ## Loader :- 
 Webpack can bundle any kind of file : JS,TS,CSS,SASS,images, HTML, fonts. Webpack itself only understand JS files into their jS equivalents with loaders.
 We use style-loader, css-loader, html-loader in this application.

 ## Plugin :- 
 While loaders are used to transform certain types of modules, plugins can be leveraged to perform a wider range of tasks like bundle optimization, asset management and injection of environment variables
 In this application, the "html-webpack-plugin" generates an HTML file for your application and automatically injects all your generated bundles into this file

 ## Dependency Version 
 We are installing the third party libraries and internal library with the following command 
 1> "npm install --save (library name)" 
 2> "npm install --save -dev (library name)"

Carat ^ used for automatically updating the minor updates along with patch updates. 
 Tilde ~ notation freezes the major version and minor version. 

 So, we can update the library according to our project requirement.
 
 ## Exclude / include specific files in package
 The new file can be include in SRC folder with predefined extension and self created extension.
 All existed file can be exclude in the gitignore command like......
 *.har
/test.ts
/user.ts
/student.ts
/src.ts
specific