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
        cy.get('[name="basicProfile.birthDay"]').select(birthDay).should('have.text', birthDay);
        return this;
    }

    enterFirstName(firstName){
        cy.get('[name="basicProfile.firstName"]').select(firstName).should('have.text', firstName);
        return this;
    }

    enterLastName(lastName){
        cy.get('[name="basicProfile.lastName"]').type(' ').should('have.text', lastName);
        return this;
    }

    selectBirthYear(birthYear){
        cy.get('[name="basicProfile.birthYear"]').type(' ').should('have.text', birthYear);
        return this;
    }

    clickOnSaveAndContinue(){

    }

}