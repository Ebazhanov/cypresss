export default class ApplicationStep1 {
    checkTitleOfThePage(title) {
        cy.title().should('eq', title);
        return this;
    }
}