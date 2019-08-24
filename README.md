# AngularHelloCli

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Production server

When you build bundles with the `--prod` option, Angular CLI performs code optimization and AOT compilation.

`ng serve --prod`

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

Available Commands:

- `add` Adds support for an external library to your project.
- `analytics` Configures the gathering of Angular CLI usage metrics. See <https://v8.angular.io/cli/usage-analytics-gathering>.
- `build` (`b`) Compiles an Angular app into an output directory named dist/ at the given output path. Must be executed from within a workspace directory.
- `config` Retrieves or sets Angular configuration values in the angular.json file for the workspace.
- `doc` (`d`) Opens the official Angular documentation (angular.io) in a browser, and searches for a given keyword.
- `e2e` (`e`) Builds and serves an Angular app, then runs end-to-end tests using Protractor.
- `generate` (g) Generates and/or modifies files based on a schematic.
- `help` Lists available commands and their short descriptions.
- `lint` (`l`) Runs linting tools on Angular app code in a given project folder.
- `new` (`n`) Creates a new workspace and an initial Angular app.
- `run` Runs an Architect target with an optional custom builder configuration defined in your project.
- `serve` (s) Builds and serves your app, rebuilding on file changes.
- `test` (`t`) Runs unit tests in a project.
- `update` Updates your application and its dependencies. See <https://update.angular.io/>
- `version` (`v`) Outputs Angular CLI version.
- `xi18n` Extracts i18n messages from source code.

For more detailed help run "`ng [command name] --help`"

## The ng generate command of Angular CLI

You can keep using Angular CLI for generating artifacts by using the `ng generate` command or its alias `ng g`.

- `ng g c` — Generates a new component.
- `ng g s` — Generates a new service.
- `ng g d` — Generates a new directive.
- `ng g m` — Generates a new module.
- `ng g application` — Generates a new app within the same project.
- `ng g library` - Generate a library project.

Run the `ng generate [option] --help` command or refer to the Angular CLI documentation.

This command will create the src/app/product directory with the product.component.ts file with inline style and inline template, without test spec.
  `ng g c product -s -t --skip-tests true`

Generating a service in a shared folder:
  `ng g s shared/<name-service> --project=<project-name>`
