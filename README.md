# Angular General Setup

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
 Entry :- Two type of entry file we provided here
 1. main.ts : For running the application, it import the module.
 2. vendor.ts : imports the application's third-party modules

 Output :-
 A
