    describe('Product Swagger Documentation', () => {
    beforeEach(() => {
      cy.visit('http://localhost:8080/docs')  // or whatever your Swagger UI path is
      timeout: 10000
    });
  
    it('can try out POST cart endpoint', () => {
      cy.get('.opblock-tag-section')
        .contains('cart')
  
      cy.contains('POST​/user​/{user-id}​/cart').should('be.visible')
        .click()
  
      cy.contains('Try it out').click()
  
     cy.contains('Execute')
        .click()
  
      cy.contains('Request body').should('be.visible')
      cy.contains('200').should('be.visible')
    });
  
    it('can modify POST cart example value endpoint', () => {
      cy.get('.opblock-tag-section')
        .contains('cart')
  
      cy.contains('POST​/user​/{user-id}​/cart').should('be.visible')
        .click()
  
      cy.contains('Try it out').click()
  
      cy.get('textarea').clear()
        .type(`{
          "user-id": 0,
  "total-price": 32.5,
  "products": [
    {
      "quantity": 3,
      "product-id": 14,
      "price": 8.99,
      "name": "3-day ticket"
    }
  ]
        }`), { parseSpecialCharSequences: false }
  
      cy.contains('Execute')
        .click()
  
      cy.contains('Request body').should('be.visible')
      cy.contains('Response').should('be.visible')
      cy.contains('201').should('be.visible')
    });
  
  
    it('can try out GET cart endpoint', () => {
      cy.get('.opblock-tag-section')
        .contains('cart')
        .click()
        .click()
      
      cy.contains('GET​/user​/{user-id}​/cart').should('be.visible')
        .click()
  
      
        cy.contains('Try it out').click();


        // Target the input field for "user-id" and type the ID
        cy.get('input[type="text"][placeholder="user-id - The ID of a user"]', { timeout: 10000 })
          .should('be.visible') // Ensure the input is visible
          .type('0'); // Replace with the desired user ID
      
          
      
      cy.contains('Execute')
        .click()
  
      cy.contains('Responses').should('be.visible')
      cy.contains('200').should('be.visible')
  
    });
    
  
    it('can try out PUT cart endpoint', () => {
      cy.get('.opblock-tag-section')
        .contains('product')
  
        cy.contains('PUT​/user​/{user-id}​/cart').should('be.visible')
        .click()
  
        cy.contains('Try it out').click();

        // Target the input field for "user-id" and type the ID
        cy.get('input[type="text"][placeholder="user-id - The ID of the user"]', { timeout: 10000 })
          .should('be.visible') // Ensure the input is visible
          .type('0'); // Replace with the desired user ID
      
      cy.get('textarea').clear()
        .type(`{
  "user-id": 0,
  "total-price": 32.5,
  "products": [
    {
      "quantity": 3,
      "product-id": 14,
      "price": 8.99,
      "name": "3-day ticket"
    }
  ]
      }`), { parseSpecialCharSequences: false }
  
      cy.contains('Execute')
        .click()
  
      cy.contains('Responses').should('be.visible')
      cy.contains('200').should('be.visible')
  
    })
})