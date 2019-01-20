export default class ApplicationStep1 {

    fillInProfessionalExperience(){
        this.enterCompany('Smava GmbH');
    }

    enterCompany(companyName) {
        cy.get('[name="basicProfile.companies[0].name"]').type(companyName);
        return this;
    }
}