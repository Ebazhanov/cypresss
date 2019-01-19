import Page from '../page-objects/Page';
import HomePage from '../page-objects/RegistryConsultantHomePage';

const page = new Page();
const homePage = new HomePage();
const attachFiles = require('cypress-form-data-with-file-upload');

describe('My First Cypress test', () => {

    beforeEach(() => {
        page.navigateToHomePage()
    });

/*    it('Go to Application page with registered user', () => {
        homePage
            .clickOnLoginHere()
            .enterEmail()
            .enterPassword()
            .clickOnLoginButton()
            .checkTitleOfThePage('COMATCH: Login to manage your profile and projects')
    });*/

    it('Register a new consultant', () => {
        homePage
            .enterEmail()
            .enterPassword()
            .clickOnRegisterNowButton()
            .checkTitleOfThePage('COMATCH: Consultant registration');
        const files = {
            fileToUpload: new File(['.ConsultantProfilePictureUploader__input > div > div > button'], 'arun.jpg', {
                type: 'image/png'
            })
        };
        cy.wait(3000);
        //cy.get('.ConsultantProfilePictureUploader__input > div > div > button').should("be.visible").click();
        cy.get('.ConsultantProfilePictureUploader__input > div > div > button').should("be.visible").then(attachFiles(files));
        cy.wait(5000)

    });

});