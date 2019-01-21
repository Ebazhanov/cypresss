import HomePage from "./HomePage";

export default class Page {
    navigateToHomePage() {
        cy.visit('/registry/consultant', {
                auth: {
                    username: 'comatch',
                    password: 'Do$enb1er'
                }
            }
        );
        return new HomePage()
    }
}