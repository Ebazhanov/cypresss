import Page from '../../Cypress/cypresss/page-object/Page'

export default class HomePage extends Page {
  constructor (location = '/') {
    super(location)
  }

  addToDoItem (title) {
    cy.get('.new-todo').type(`${title}{enter}`)
  }

}
