import {clickable, fillable, page, visitable} from "cypress-page-object";

const loginPage = page({
    visit: visitable('/login'),
    fillUsername: fillable('[type="email"]').should("be.visible"),
    fillPassword: fillable('[type="password"]').should("be.visible"),
    submit: clickable('[type="submit"]').should("be.visible"),
    click: clickable('[type="submit"]').should("be.visible"),

    clickOnLoginHere: cy.contains('Login here').should("be.visible").click(),

    clickOnLoginButton: cy.contains('Login').should("be.visible").click()
});


