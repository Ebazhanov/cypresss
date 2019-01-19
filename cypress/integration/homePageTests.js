import Page from '../page-objects/Page';
const page = new Page();

describe('My First Cypress test', () => {

    beforeEach(() => {
        page.navigateToHomePage()
    });


    it('Register a new consultant', () => {
/*        homePage
            .registerNewRandomConsultant()
            .checkTitleOfThePage('COMATCH: Consultant registration');
        const files = {
            fileToUpload: new File(['.ConsultantProfilePictureUploader__input > div > div > button'], 'arun.jpg', {
                type: 'image/png'
            })
        };
        cy.wait(3000);
        //cy.get('.ConsultantProfilePictureUploader__input > div > div > button').should("be.visible").click();
        cy.get('.ConsultantProfilePictureUploader__input > div > div > button').should("be.visible").then(attachFiles(files));
        cy.wait(5000)*/

    });

});