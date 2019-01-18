Feature: Go to Cypress

  Scenario: Open website Cypress
    Given I go to the website "https://staging.comatch.com"
    Then I see COMATCH: Login to manage your profile and projects in the title
    And the logo name should be cypress.io