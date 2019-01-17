/*import {page} from "cypress-page-object";

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
            .visit()
            .clickOnLoginHere
            .fillUsername('ebazhanov@yahoo.com')
            .fillPassword('beHappy1')
            .clickOnLoginButton()
        ;

        //cy.contains('Login here').should("be.visible").click();
        cy.get('').type();
        cy.get().should("be.visible").type();


        cy.title().should('eq', 'COMATCH: Login to manage your profile and projects');
        //cy.viewport(768, 1024);
        cy.screenshot('Screenshot.jpg');
    });

});*/


import {page, visitable, fillable, clickable} from "cypress-page-object";

const loginPage = page({
    fillUsername: fillable('[type="email"]'),
    fillPassword: fillable('[type="password"]'),
    submit: clickable('[type="submit"]'),

    clickOnLoginButton() {
        cy.get("[class*='submit']").should("be.visible").click();
    }
});

const homePage = page({
    clickOnLoginHere() {
        return cy.contains('Login here').should("be.visible").click();
    }
});

context('My Awesome WebSite', () => {
    it('logs into the website', () => {
        cy.visit('https://staging.comatch.com/en/registry/consultant', {
            auth: {
                username: 'comatch',
                password: 'Do$enb1er'
            }
        });
        homePage
            .clickOnLoginHere();

        loginPage
            //.clickOnLoginHere
            .fillUsername('ebazhanov@yahoo.com')
            .fillPassword('beHappy1')
            .clickOnLoginButton()
        ;
    });
});
