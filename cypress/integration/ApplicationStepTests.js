import Page from '../page-objects/Page';
import ApplicationStep1 from "../page-objects/ApplicationStep1Page";

describe('Application page Step#1', () => {
    beforeEach(() => {
        new Page()
            .navigateToHomePage()
            .registerNewRandomConsultant()
            .checkTitleOfThePage('COMATCH: Consultant registration');
    });

    it('Personal information block', () => {

        new ApplicationStep1()
            .selectPersonalTitle('Prof. Dr.')
            .selectBirthDay('30')
            .enterFirstName(' ')
            .enterLastName(' ');




        //Save and Continue
        cy.get('.ConsultantRegistrationStep1__Step1Form-footer').click();

        //Error message for first name
        cy.get('[name="basicProfile.firstName"]+span').should('have.text', 'First name is required');
        cy.get('[name="basicProfile.lastName"]+span').should('have.text', 'Last name is required');
        cy.get('[name="basicProfile.birthYear"]+span').should('have.text', 'Year of birth is required');


        //cy.get('.Alert_message').should('have.text', 'An error occurred')

    });

});