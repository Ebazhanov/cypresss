Feature: Go to Cypress

  Scenario: Open website Cypress
    Given I go to the website "https://staging.comatch.com"
    Then I see SMAVA - Deutschlands Vergleichsportal für Online-Kredite | SMAVA in the title
    And the logo name should be cypress.io