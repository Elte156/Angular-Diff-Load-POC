# Angular Differential Loading POC

Testing out diff loading with Chrome (target es2015) and IE 11 (target es5)

Sample Website: <https://elte156.github.io/Angular-Diff-Load-POC/>

## Testbed

I added the `includes` method in a simple JS function that would execute at page load. Chrome has no issues running it and rendering the app. IE11 will throw JS console errors and load a white page.

## Solution

In order to support IE11 with Angular 8+ and diff loading, you need to enable poly filling manually in the [src/polyfills.ts](src/polyfills.ts) file. You can either load them individually or include them all.

Information:

* <https://angular.io/guide/browser-support>
* <https://github.com/zloirock/core-js>
* <https://v8.angular.io/guide/deployment#differential-loading>

## Notes

Built POC dist with:

```bash
npm run build:ghpages
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

### IE 11 Console Error

What appeared when the polyfill was not added.

```text
HTML1300: Navigation occurred.
Angular-Diff-Load-POC
Ran check list
ERROR TypeError: Object doesn't support property or method 'includes'
   "ERROR"
   {
      [functions]: ,
      __proto__: { },
      description: "Object doesn't support property or method 'includes'",
      message: "Object doesn't support property or method 'includes'",
      name: "TypeError",
      number: -2146827850,
      stack: "TypeError: Object doesn't support property or method 'includes'
   at value (https://elte156.github.io/Angular-Diff-Load-POC/main-es5.2ba5e00e0845b700383a.js:1:131059)
   at e (https://elte156.github.io/Angular-Diff-Load-POC/main-es5.2ba5e00e0845b700383a.js:1:130985)
   at Dr (https://elte156.github.io/Angular-Diff-Load-POC/main-es5.2ba5e00e0845b700383a.js:1:74464)
   at Nr (https://elte156.github.io/Angular-Diff-Load-POC/main-es5.2ba5e00e0845b700383a.js:1:73397)
   at bi (https://elte156.github.io/Angular-Diff-Load-POC/main-es5.2ba5e00e0845b700383a.js:1:110303)
   at _i (https://elte156.github.io/Angular-Diff-Load-POC/main-es5.2ba5e00e0845b700383a.js:1:109091)
   at Li (https://elte156.github.io/Angular-Diff-Load-POC/main-es5.2ba5e00e0845b700383a.js:1:118438)
   at value (https://elte156.github.io/Angular-Diff-Load-POC/main-es5.2ba5e00e0845b700383a.js:1:62688)
   at value (https://elte156.github.io/Angular-Diff-Load-POC/main-es5.2ba5e00e0845b700383a.js:1:41055)
   at value (https://elte156.github.io/Angular-",
      Symbol()_8.r2u4agiqc2a: undefined,
      Symbol(rxSubscriber)_i.r2u4agiqc2a: undefined
   }

TypeError: Object doesn't support property or method 'includes'
   {
      [functions]: ,
      __proto__: { },
      description: "Object doesn't support property or method 'includes'",
      message: "Object doesn't support property or method 'includes'",
      name: "TypeError",
      number: -2146827850,
      stack: "TypeError: Object doesn't support property or method 'includes'
   at value (https://elte156.github.io/Angular-Diff-Load-POC/main-es5.2ba5e00e0845b700383a.js:1:131059)
   at e (https://elte156.github.io/Angular-Diff-Load-POC/main-es5.2ba5e00e0845b700383a.js:1:130985)
   at Dr (https://elte156.github.io/Angular-Diff-Load-POC/main-es5.2ba5e00e0845b700383a.js:1:74464)
   at Nr (https://elte156.github.io/Angular-Diff-Load-POC/main-es5.2ba5e00e0845b700383a.js:1:73397)
   at bi (https://elte156.github.io/Angular-Diff-Load-POC/main-es5.2ba5e00e0845b700383a.js:1:110303)
   at _i (https://elte156.github.io/Angular-Diff-Load-POC/main-es5.2ba5e00e0845b700383a.js:1:109091)
   at Li (https://elte156.github.io/Angular-Diff-Load-POC/main-es5.2ba5e00e0845b700383a.js:1:118438)
   at value (https://elte156.github.io/Angular-Diff-Load-POC/main-es5.2ba5e00e0845b700383a.js:1:62688)
   at value (https://elte156.github.io/Angular-Diff-Load-POC/main-es5.2ba5e00e0845b700383a.js:1:41055)
   at value (https://elte156.github.io/Angular-",
      Symbol()_8.r2u4agiqc2a: undefined,
      Symbol(rxSubscriber)_i.r2u4agiqc2a: undefined
   }
```

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
