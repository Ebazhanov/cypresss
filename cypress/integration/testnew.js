describe('My First Cypress test', function () {
    it('Visits Cypress website and checks the title', function () {
        cy.visit('https://staging.comatch.com/en/registry/consultant', {
            auth: {
                username: 'comatch',
                password: 'Do$enb1er'
            }
        });

        cy.contains('Login here').click();
        cy.get('[type="email"]').type('ebazhanov@yahoo.com');
        cy.get('[type="password"]').type('beHappy1');
        cy.contains('Login').click();

        cy.title().should('eq', 'COMATCH: Login to manage your profile and projects');
        //cy.viewport(768, 1024);
        //cy.screenshot('Screenshot.jpg');
    })
});