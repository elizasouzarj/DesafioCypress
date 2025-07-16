/// <reference  types="cypress"/>


describe('Testes Funcional de Login', () => {
    it('Deve Realizar o login com sucesso', () => {
        cy.visit("https://www.saucedemo.com/v1/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('#login-button').click()
        cy.get('.product_label').should('contain','Products')
        
    });
});