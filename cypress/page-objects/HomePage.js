export default class HomePage {
    clickOnLoginHere() {
        cy.contains('Login here').should("be.visible").click();
    }
}

