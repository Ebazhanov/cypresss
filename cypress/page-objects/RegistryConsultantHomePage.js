import ApplicationStep1 from "./ApplicationStep1Page";

export default class RegistryConsultantHomePage {
    clickOnLoginHere() {
        cy.contains('Login here').should("be.visible").click();
        return this;
    }

    clickOnRegisterNowButton() {
        cy.contains('Register now').should("be.visible").click();
        return new ApplicationStep1();
    }

    enterEmail() {
        let randomNumbers = Math.random().toString(36).substring(2, 10) + 'ebazhanov@yahoo.com';
        cy.get('[type="email"]').should("be.visible").type(randomNumbers);
        return this;
    }

    enterPassword() {
        cy.get('[type="password"]').should("be.visible").type('beHappy1');
        return this;
    }

    clickOnLoginButton() {
        cy.contains('Login').should("be.visible").click();
        return new ApplicationStep1();
    }

}