// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('h1', 'Welcome to Your Vue.js App');
    cy.visit('/cards');
    cy.get(':nth-child(1)> :nth-child(2)> a').click()
    cy.get('.btn').click()
    cy.get('[style="position: absolute; z-index: 1041;"] > #modalPopover > .modal-dialog > #modalPopover___BV_modal_content_ > #modalPopover___BV_modal_footer_ > .btn').click()
    cy.get('#modalPopover___BV_modal_footer_ > .btn')
  });
});
