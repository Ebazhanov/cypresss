import Page from '../page-objects/Page';

describe('Application page Step#2 - validation of individual fields', () => {
    beforeEach(() => {
        new Page()
            .navigateToHomePage()
            .registerNewRandomConsultant()
            .fillInPersonalInfo()
            .fillInContactInfo()
            .fillInProfessionalExperience();
    });

    it('new', () => {

    });


});