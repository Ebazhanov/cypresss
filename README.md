
## Run tests

Open the terminal in your project directory. A script is added to the package.json for running with npm. 

First open Cypress with this command:

```
npm run cypress:open
```
In the open Cypress app you can select one of the testruns to run. There are 2 runs. The one with a feature file and the one without Cucumber.

Testing Cypress Test Runner against different example repos

Build status | Description | YML
:--- | :--- | :---
[![CircleCI](https://circleci.com/gh/cypress-io/cypress-test-example-repos.svg?style=svg)](https://circleci.com/gh/cypress-io/cypress-test-example-repos) | Linux (CircleCI) | [circle.yml](circle.yml)

# cypress-yarn-circle-example [![CircleCI](https://circleci.com/gh/bahmutov/cypress-yarn-circle-example.svg?style=svg)](https://circleci.com/gh/bahmutov/cypress-yarn-circle-example) [![renovate-app badge][renovate-badge]][renovate-app]
> Example running Cypress E2E tests on CircleICI using Yarn and Orb

This project uses Yarn to install NPM dependencies, it runs Cypress E2E tests on CircleCI and uses [Cypress CircleCI Orb](https://github.com/cypress-io/circleci-orb) to do its magic. See how simple [circle.yml](circle.yml) file is.

[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/