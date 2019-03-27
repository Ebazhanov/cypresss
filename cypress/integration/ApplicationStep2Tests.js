import Page from '../page-objects/Page';
import IndustryExpertise from "../page-objects/application-step2/IndustryExpertise";

describe('Application page Step#2 - validation of individual fields', () => {
    beforeEach(() => {
        new Page()
            .navigateToHomePage()
            .registerNewRandomConsultant()
            .fillInPersonalInfo()
            .fillInContactInfo()
            .fillInProfessionalExperience()
            .fillInAcademicEducation();
    });

    it('Several checks on step#2', () => {
        new IndustryExpertise()
            .checkUrlFromAddressBar('/application/step2')
            .selectBankingCheckBox()
            .assertCheckStatusOfSelectedBox('You already picked 1/5')
    });

});
