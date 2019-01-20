import PersonalInformation from "./application-step1/PersonalInformation";

export default class HomePage {

    registerNewRandomConsultant() {
        let randomNumbers = Math.random().toString(36).substring(2, 10) + 'ebazhanov@yahoo.com';
        cy.get('[type="email"]').should("be.visible").type(randomNumbers);
        cy.get('[type="password"]').should("be.visible").type('beHappy1');
        cy.contains('Register now').should("be.visible").click();
        return new PersonalInformation();
    }

}