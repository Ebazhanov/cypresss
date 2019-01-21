export default class AcademicEducation {

    fillInAcademicEducation() {
        this.enterUniversity('Freie Universität Berlin');
        this.enterDegree('Master\'s degree');
        this.enterMajor('Computer since');
        this.selectStartMonth('8');
        this.selectStartYear('2006');
        this.selectCurrentlyStudyingCheckBox();
        this.clickOnSaveAndContinueButton()
    }

    enterUniversity(university) {
        cy.get('[name="basicProfile.schools[0].name"]').type(university);
        return this;
    }

    enterDegree(degree) {
        cy.get('[name="basicProfile.schools[0].degree"]').type(degree);
        return this;
    }

    enterMajor(subject) {
        cy.get('[name="basicProfile.schools[0].subject"]').type(subject);
        return this;
    }

    selectStartMonth(startMonth) {
        cy.get('[name="basicProfile.schools[0].startDateMonth"]').select(startMonth);
        return this;
    }

    selectStartYear(startYear) {
        cy.get('[name="basicProfile.schools[0].startDateYear"]').select(startYear);
        return this;
    }

    selectCurrentlyStudyingCheckBox() {
        cy.get('[class*="ConsultantAcademicEducationFields-currently-studying-col"] .CheckboxInput__input').click();
        return this;
    }


    clickOnSaveAndContinueButton() {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        });
        cy.get('.ConsultantRegistrationStep1__Step1Form-footer button').click();
        return this;
    }

}