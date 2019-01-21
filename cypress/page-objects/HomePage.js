import PersonalInformation from "./application-step1/PersonalInformation";

export default class HomePage {

    registerNewRandomConsultant() {
        this.enterEmailWithRandomName();
        this.enterPassword();
        this.clickOnRegisterNowButton();
        this.checkUrlFromAddressBar('/application/step1');
        return new PersonalInformation();
    }

    enterEmailWithRandomName() {
        const randomNumbers = Math.random().toString(36).substring(2, 10) + 'testingtask@yahoo.com';
        cy.get('[type="email"]').should("be.visible").type(randomNumbers);
        return this;
    }

    enterPassword() {
        cy.get('[type="password"]').should("be.visible").type('beHappy1');
        return this;
    }

    clickOnRegisterNowButton() {
        cy.contains('Register now').should("be.visible").click();
        return this;
    }

    checkUrlFromAddressBar(url) {
        cy.url().should('include', url);
        return this;
    }

}