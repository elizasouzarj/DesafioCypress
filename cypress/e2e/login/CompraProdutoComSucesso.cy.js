/// <reference  types="cypress"/>

describe('Teste E2E - Realizando a compra de produtos com sucesso ', () => {
    it('Fluxo da Compra', () => {
        cy.visit("https://www.saucedemo.com/v1/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('#login-button').click()
        cy.get('.product_label').should
       ('contain','Products')
        
        //ordenação de produtos de menor para maior valor:
        cy.get('.product_sort_container').select('lohi')
        //Validação da Ordem dos produtos:
        cy.get(':nth-child(1) > .inventory_item_label').should('contain','Sauce Labs Onesie')
        cy.get(':nth-child(2) > .inventory_item_label').should('contain','Sauce Labs Bike Light')
        cy.get(':nth-child(3) > .inventory_item_label').should('contain','Sauce Labs Bolt T-Shirt')
''
       //Adicionando um item no carrinho:
        cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
        cy.get(':nth-child(2) > .inventory_item_label').click
        //Validar os produto incluídos no carrinho:
        cy.get('.fa-layers-counter').click()
        cy.get('.item_pricebar > .btn_secondary').should('contain','REMOVE')
        


        
        
    });
});