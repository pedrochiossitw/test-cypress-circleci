

describe('Hello world e2e', () => {
  it('should load home page', () => {
    cy.visit('/');
    cy.get('.App-link').contains('Learn React');
  });
  it('should go to hello world', () => {
    cy.visit('/');
    cy.get('.hello-world-link').contains('Go to hello world!').click();
    cy.url().should('include', '/hello-world');
    cy.get('.hello-world').contains('Hello World');
  })
});