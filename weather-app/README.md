# WeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.12.

> ### Tech Stack
- [x] MongoDB Atlas
- [x] Express
- [x] Angular
- [x] Node

> ### Blueprint
- [ ] Frontend
   - [x] Installing Angular
     - [x] installing angular cli
   - [x] Creating angular app
     - [x] create new application with ng
     - [x] jquery,popper.js & bootstrap install
     - [x] configure angular.json with above dependancies path
     - [x] check everything is setup correctly ng serve --o
   - [ ] Creating Weather Component Search & Display
  - [x] ng generate component weather
  - [x] set up custom route in route.ts & config app.module.ts,app.component.html  to access the weather component.
  - [x] basic Styling with bootstrap for UI of App
  - [x] Setting Up form via @angular/forms
  - [x] Creating Separate 'ng g service apiow' Angular service for making the HTTP request to the openweather API via @angular/common/http HttpClientModule
  - [x] fetching data from openAPI and displaying the weather.
  - [ ] Maintain Search history

> ## Some Intresting things I discovered during Development
- [x] Set "strictPropertyInitialization": false in tsconfig.json to prevent the constructor initialization error during compilation in angular.
- [x] Set "strict": true,
"noImplicitAny":false to avoid the Parameter implicitely has an any type error.
- [x] In Angular, if you want to use a service that you have created, you need to specify that service as a provider within your module.ts file, The decorating of the service as @Injectable allows you to inject this service within the constructor.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
