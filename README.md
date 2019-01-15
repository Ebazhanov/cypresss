# Cypress template with Cucumber support for Visual Studio Code

This template uses the default setup from https://www.cypress.io/ + Cucumber preprocessor and Cucumber Full Support. 

You only need to install the Cucumber Full Support extension to make this work and npm installed. 

## Cucumber preprocessor
This is an npm install. See https://github.com/TheBrainFamily/cypress-cucumber-preprocessor
. Now you can use Feature files and step definitions. This is in the package. 

``` gherkin
Feature: The Facebook

  I want to open a social network page

  Scenario: Opening a social network page
    Given I open Facebook page
    Then I see "Facebook" in the title
```
```javascript
const url = 'https://google.com'

given('I open Google page', () => {
  cy.visit(url)
})
```

## Cucumber Full Support

You have to install the Extension 'Cucumber (Gherkin) Full Support' from Alexander Krechik to make this work. See https://github.com/alexkrechik/VSCucumberAutoComplete.

The settings file is already implemented with the minimum set of parameters for it to work.

```json
{
    "cucumberautocomplete.steps": [
        "cypress/support/step_definitions/*.js"
    ],
    "cucumberautocomplete.syncfeatures": "cypress/integration/*.feature",
    "editor.quickSuggestions": {
        "strings": true,
    }
}
```

## Run tests

Open the terminal in your project directory. A script is added to the package.json for running with npm. 

First open Cypress with this command:

```
npm run cypress:open
```
In the open Cypress app you can select one of the testruns to run. There are 2 runs. The one with a feature file and the one without Cucumber.

## Webstorm and Cypress-Cucumber

https://github.com/TheBrainFamily/cypress-cucumber-preprocessor

WebStorm Support
If you want WebStorm to resolve your steps, use the capitalized Given/When/Then function names (instead of the initial given/when/then). Unfortunately, at this point WebStorm only understands regexp syntax:

```javascript 
Given(/^user navigated to the Start page?/, () => { });
```
Or a backtick syntax but without Cucumber Expressions :-(. In other words, this works:

```javascript
Given(`user navigated to the start page`, () => { });
Then(/(.*?) is chosen/, choice => {})
```
But this doesn't:
```javascript
Then(`{word} is chosen`, choice => {})
```
(See #56)
