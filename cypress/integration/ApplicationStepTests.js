import Page from '../page-objects/Page';
import HomePage from '../page-objects/RegistryConsultantHomePage';

const page = new Page();
const homePage = new HomePage();

describe('Application page', () => {
    beforeEach(() => {
        page
            .navigateToHomePage();
        homePage
            .enterEmail()
            .enterPassword()
            .clickOnRegisterNowButton()
            .checkTitleOfThePage('COMATCH: Consultant registration');
    });

    it('Step 1', () => {
        //Personal information
        cy.get('[name="basicProfile.title"]').should("be.visible").select('Prof. Dr.');
        cy.get('[name="basicProfile.birthDay"]').should("be.visible").select('30');
        cy.get('[name="basicProfile.firstName"]').should("be.visible").type(' ');

        //Profile picture

        //Contact information

        //Save and Continue
        cy.get('Save and continue').click();

        //Personal information
        cy.get('[name="basicProfile.firstName"]+span').should('have.value', 'foo bar baz')

    });

});