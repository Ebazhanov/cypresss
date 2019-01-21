import ProfessionalExperience from "./ProfessionalExperience";

export default class ContactInformation {

    fillInContactInfo() {
        this.enterStreetName('Potsdamer');
        this.enterHouseNumber(45);
        this.enterPostCode(10117);
        this.enterCity('Berlin');
        this.selectCountry('Germany');
        this.enterMobilePhoneNumber('0123123123123');
        return new ProfessionalExperience();
    }

    clickOnSaveAndContinueButton() {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        });
        cy.get('.ConsultantRegistrationStep1__Step1Form-footer button').click();
        return this;
    }

    enterStreetName(streetName) {
        cy.get('[name="basicProfile.street"]').type(streetName);
        return this;
    }

    assertStreetNameErrorMessage(textMessage) {
        cy.get('[name="basicProfile.street"]+span').should('contain', textMessage);
        return this;
    }

    enterHouseNumber(houseNumber) {
        cy.get('[name="basicProfile.houseNr"]').type(houseNumber);
        return this;
    }

    assertHouseNumberErrorMessage(textMessage) {
        cy.get('[name="basicProfile.houseNr"]+span').should('contain', textMessage);
        return this;
    }

    enterMobilePhoneNumber(mobilePhoneNumber) {
        cy.get('[name="basicProfile.mobilePhone"]').type(mobilePhoneNumber);
        return this;
    }

    assertMobilePhoneNumberErrorMessage(textMessage) {
        cy.get('[name="basicProfile.mobilePhone"]+span').should('contain', textMessage);
        return this;
    }

    enterPostCode(number) {
        cy.get('[name="basicProfile.zip"]').type(number);
        return this;
    }

    enterCity(city) {
        cy.get('[name="basicProfile.city"]').type(city);
        return this;
    }

    selectCountry(country) {
        cy.get('[name="basicProfile.country"]').select(country);
        return this;
    }

}