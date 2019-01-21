import Page from '../page-objects/Page';
import PersonalInformation from "../page-objects/application-step1/PersonalInformation";
import ContactInformation from "../page-objects/application-step1/ContactInformation";
import {titleEnum} from "../page-objects/enums/enums-collection";

describe('Application page Step#1 - validation of individual fields', () => {
    beforeEach(() => {
        new Page()
            .navigateToHomePage()
            .registerNewRandomConsultant()
            .checkTitleOfThePage('COMATCH: Consultant registration');
    });

    it('Personal information block', () => {
        new PersonalInformation()
            .selectPersonalTitle(titleEnum.PROF)
            .selectBirthDay('30')
            .enterFirstName(' ')
            .enterLastName(' ')
            .clickOnSaveAndContinueButton()
            .assertFirstNameErrorMessage('First name is required')
            .assertLastNameErrorMessage('Last name is required')
            .assertBirthYearErrorMessage('Year of birth is required');
    });

    it('Contact information block', () => {
        new ContactInformation()
            .enterStreetName(' ')
            .enterHouseNumber(' ')
            .enterMobilePhoneNumber('blablabphone')
            .clickOnSaveAndContinueButton()
            .assertStreetNameErrorMessage('Street is required')
            .assertHouseNumberErrorMessage('House number is required')
            .assertMobilePhoneNumberErrorMessage('Mobile phone must be a valid phone number');
    });

});