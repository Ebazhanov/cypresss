export default class ApplicationStep2 {
    checkUrlFromAddressBar(url) {
        cy.url().should('include', url);
        return this;
    }
}