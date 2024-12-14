describe('Product Swagger Documentation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/docs')  
    timeout: 10000
  });

  it('can see product endpoint', () => {
    cy.get('.opblock-tag-section')
      .contains('product')
  });


  it('can try out POST product endpoint', () => {
    cy.get('.opblock-tag-section')
      .contains('product')

    cy.contains('POST​/product').should('be.visible')
      .click()

    cy.contains('Try it out').click()

   cy.contains('Execute')
      .click()

    cy.contains('Response body').should('be.visible')
    cy.contains('200').should('be.visible')
  });

  it('can modify POST product example value endpoint', () => {
    cy.get('.opblock-tag-section')
      .contains('product')

    cy.contains('POST​/product').should('be.visible')
      .click()

    cy.contains('Try it out').click()

    cy.get('textarea').clear()
      .type(`{
        "productId": 15,
        "name": "2-day ticket",
        "price": 9.99,
        "quantity": 4
      }`), { parseSpecialCharSequences: false }

    cy.contains('Execute')
      .click()

    cy.contains('Response body').should('be.visible')
    cy.contains('400').should('be.visible')
  });


  it('can try out GET product endpoint', () => {
    cy.get('.opblock-tag-section')
      .contains('product')
      .click()
      .click()
    
    cy.contains('GET​/product​/{productID}').should('be.visible')
      .click()

    cy.contains('Try it out').click()
    
    cy.get('input[type="text"][placeholder="productID - The ID of the product"]')
      .type('14')
    
    cy.contains('Execute')
      .click()

    cy.contains('Response body').should('be.visible')
    cy.contains('200').should('be.visible')

  });

  it('can try out PUT product endpoint', () => {
    cy.get('.opblock-tag-section')
      .contains('product')

    cy.contains('PUT​/product​/{productID}').should('be.visible')
      .click()

    cy.contains('Try it out').click()

    cy.get('input[type="text"][placeholder="productID - The ID of the product to be modified"]')
      .type('14')

    cy.contains('Execute')
      .click()

    cy.contains('Response body').should('be.visible')
    cy.contains('200').should('be.visible')
  });

  it('can modify PUT product example value endpoint', () => {
    cy.get('.opblock-tag-section')
      .contains('product')

      cy.contains('PUT​/product​/{productID}').should('be.visible')
      .click()

    cy.contains('Try it out').click()

    cy.get('input[type="text"][placeholder="productID - The ID of the product to be modified"]')
      .type('14')

    cy.get('textarea').clear()
      .type(`{
        "productId": 16,
        "name": "4-day ticket",
        "price": 10.99,
        "quantity": 5
      }`), { parseSpecialCharSequences: false }

    cy.contains('Execute')
      .click()

    cy.contains('Response body').should('be.visible')
    cy.contains('400').should('be.visible')

  })

  it("can try out DELETE product endpoint", () => {
    cy.get('.opblock-tag-section')
      .contains('product')

    cy.contains('DELETE​/product​/{productID}').should('be.visible')
      .click()

    cy.contains('Try it out').click()

    cy.get('input[type="text"][placeholder="productID - The ID of the product to be deleted"]')
      .type('14')

    cy.contains('Execute')
      .click()

    cy.contains('Response body').should('be.visible')
    cy.contains('200').should('be.visible')
  });

});

