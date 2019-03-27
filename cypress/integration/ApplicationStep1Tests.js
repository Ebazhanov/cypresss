import Page from '../page-objects/Page';
import PersonalInformation from "../page-objects/application-step1/PersonalInformation";
import ContactInformation from "../page-objects/application-step1/ContactInformation";
import {errMessContactInfo, errMessPersonalInfo, titleEnum} from "../page-objects/enums/enums-collection";

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
            .assertFirstNameErrorMessage(errMessPersonalInfo.FIRST_NAME)
            .assertLastNameErrorMessage(errMessPersonalInfo.LAST_NAME)
            .assertBirthYearErrorMessage(errMessPersonalInfo.BIRTH_YEAR);
    });

    it('Contact information block', () => {
        new ContactInformation()
            .enterStreetName(' ')
            .enterHouseNumber(' ')
            .enterMobilePhoneNumber('blablabphone')
            .clickOnSaveAndContinueButton()
            .assertStreetNameErrorMessage(errMessContactInfo.STREET_NAME)
            .assertHouseNumberErrorMessage(errMessContactInfo.HOUSE_NUMBER)
            .assertMobilePhoneNumberErrorMessage(errMessContactInfo.MOBILE_NUMBER);
    });

});
