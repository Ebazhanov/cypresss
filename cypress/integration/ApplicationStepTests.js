import Page from '../page-objects/Page';

describe('Application page', () => {
    beforeEach(() => {
        new Page()
            .navigateToHomePage()
            .registerNewRandomConsultant()
            .checkTitleOfThePage('COMATCH: Consultant registration');
    });

    it('Personal information block', () => {

        cy.get('[name="basicProfile.title"]').should("be.visible").select('Prof. Dr.');
        cy.get('[name="basicProfile.birthDay"]').should("be.visible").select('30');
        cy.get('[name="basicProfile.firstName"]').should("be.visible").type(' ');

        //Save and Continue
        cy.get('.ConsultantRegistrationStep1__Step1Form-footer').click();

        //Personal information
        cy.get('[name="basicProfile.firstName"]+span').should('have.text', 'First name is required');


        //cy.get('.Alert_message').should('have.text', 'An error occurred')

    });

});