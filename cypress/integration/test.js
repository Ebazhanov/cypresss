import {page} from "cypress-page-object";

const loginPage = page({});

context('My Awesome WebSite', () => {
    it('logs into the website', () => {


        cy.visit('https://staging.comatch.com/en/registry/consultant', {
            auth: {
                username: 'comatch',
                password: 'Do$enb1er'
            }
        });

        loginPage
            .clickOnLoginHere
            .fillUsername('ebazhanov@yahoo.com')
            .fillPassword('beHappy1')
            .clickOnLoginButton()
        ;

/*        //cy.contains('Login here').should("be.visible").click();
        cy.get('').type();
        cy.get().should("be.visible").type();


        cy.title().should('eq', 'COMATCH: Login to manage your profile and projects');
        //cy.viewport(768, 1024);
        cy.screenshot('Screenshot.jpg');*/
    });

});