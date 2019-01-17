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