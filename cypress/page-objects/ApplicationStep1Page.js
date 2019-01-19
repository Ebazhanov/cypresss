export default class ApplicationStep1 {
    checkTitleOfThePage(title) {
        cy.title().should('eq', title);
        return this;
    }

    selectPersonalTitle(type) {
        cy.get('[name="basicProfile.title"]').select(type);
        return this;
    }

    selectBirthDay(birthDay){
        cy.get('[name="basicProfile.birthDay"]').select(birthDay);
        return this;
    }

    enterFirstName(firstName){
        cy.get('[name="basicProfile.firstName"]').type(firstName).should('have.text', '');
        return this;
    }

    enterLastName(lastName){
        cy.get('[name="basicProfile.lastName"]').type(lastName).should('have.text', '');
        return this;
    }

    selectBirthYear(birthYear){
        cy.get('[name="basicProfile.birthYear"]').select(birthYear);
        return this;
    }

    clickOnSaveAndContinueButton(){
        cy.get('.ConsultantRegistrationStep1__Step1Form-footer button').click();
        return this;
    }

    assertFirstNameErrorMessage(textMessage){
        cy.get('[name="basicProfile.firstName"]+span').should('contain', textMessage);
        return this;
    }

    assertLastNameErrorMessage(message){
        cy.get('[name="basicProfile.lastName"]+span').should('have.text', message);
        return this;
    }

    assertBirthYearErrorMessage(message){
        cy.get('[name="basicProfile.birthYear"]+span').should('have.text', message);
        return this;
    }

}