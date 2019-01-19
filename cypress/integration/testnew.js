import HomePage from '../../cypress/page-objects/HomePage';

const homePage = new HomePage();


describe('My First Cypress test', () => {

    beforeEach(() => {
        cy.visit('https://staging.comatch.com/en/registry/consultant', {
            auth: {
                username: 'comatch',
                password: 'Do$enb1er'
            }
        });
    });

    it('Visits Cypress website and checks the title', () => {
        homePage.clickOnLoginHere();
        cy.contains('Login here').should("be.visible").click();
        cy.get('[type="email"]').should("be.visible").type('ebazhanov@yahoo.com');
        cy.get('[type="password"]').should("be.visible").type('beHappy1');
        cy.contains('Login').should("be.visible").click();

        cy.title().should('eq', 'COMATCH: Login to manage your profile and projects');
        //cy.viewport(768, 1024);
        //cy.screenshot('Screenshot.jpg');
    });

    it('Visits Cypress', () => {
        cy.contains('Login here').should("be.visible").click();
        cy.get('[type="email"]').should("be.visible").type('ebazhanov@yahoo.com');
        cy.get('[type="password"]').should("be.visible").type('beHappy1');
        cy.contains('Login').should("be.visible").click();

        cy.title().should('eq', 'COMATCH: Login to manage your profile and projects');
        //cy.viewport(768, 1024);
        //cy.screenshot('Screenshot.jpg');
    })
});