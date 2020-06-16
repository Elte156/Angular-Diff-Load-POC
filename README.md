# Angular Differential Loading POC

Testing out diff loading with Chrome (target es2015) and IE 11 (target es5)

Sample Website: <https://elte156.github.io/Angular-Diff-Load-POC/>

## Solution

In order to support IE11 with Angular 8+ and diff loading, you need to enable poly filling manually in the [src/polyfills.ts](src/polyfills.ts) file. You can either load them individually or include them all.

Information:

* <https://angular.io/guide/browser-support>
* <https://github.com/zloirock/core-js>

## Notes

Built POC dist with:

```bash
npm run build:ghpages
```

<https://v8.angular.io/guide/deployment#differential-loading>

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
