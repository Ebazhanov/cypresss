import AcademicEducation from "./AcademicEducation";

export default class ApplicationStep1 {

    fillInProfessionalExperience() {
        this.enterCompany('Smava GmbH');
        this.enterPosition('QA Automation Engineer');
        this.selectCurrentEmployerCheckBox();
        this.selectStartMonth('1');
        this.selectStartYear('2017');
        return new AcademicEducation();
    }

    enterCompany(companyName) {
        cy.get('[name="basicProfile.companies[0].name"]').type(companyName);
        return this;
    }

    enterPosition(position) {
        cy.get('[name="basicProfile.companies[0].position"]').type(position);
        return this;
    }

    selectStartMonth(startMonth) {
        cy.get('[name="basicProfile.companies[0].startDateMonth"]').select(startMonth);
        return this;
    }

    selectStartYear(startYear) {
        cy.get('[name="basicProfile.companies[0].startDateYear"]').select(startYear);
        return this;
    }

    selectCurrentEmployerCheckBox() {
        cy.get('[class*="ConsultantProfessionalExperienceFields-current-employer-col"] .CheckboxInput__input').click();
        return this;
    }
}