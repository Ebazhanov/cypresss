import Step1ConsultantHomePage from "./RegistryConsultantHomePage";

export default class Page {
    navigateToHomePage() {
        cy.visit('https://staging.comatch.com/en/registry/consultant', {
                auth: {
                    username: 'comatch',
                    password: 'Do$enb1er'
                }
            }
        );
        return new Step1ConsultantHomePage()
    }
}