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
            .enterLastName(' ')
            .clickOnSaveAndContinueButton()
            .assertFirstNameErrorMessage('First name is required')
            .assertLastNameErrorMessage('Last name is required')
            .assertBirthYearErrorMessage('Year of birth is required');
        //cy.get('.Alert_message').should('have.text', 'An error occurred')
    });

});