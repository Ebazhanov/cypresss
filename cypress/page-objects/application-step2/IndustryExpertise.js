export default class ApplicationStep2 {

    checkUrlFromAddressBar(url) {
        cy.url().should('include', url);
        return this;
    }

    selectBankingCheckBox() {
        cy.get('[class*="ConsultantIndustryExpertiseFields"] div:nth-child(4) > label > span').click();
        return this;
    }

    assertCheckStatusOfSelectedBox(textMessage) {
        cy.get('[class*="ConsultantIndustryExpertiseFields"] .CheckboxGroupInputCounter').should('contain', textMessage);
        return this;
    }

}
