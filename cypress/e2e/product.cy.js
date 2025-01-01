// Frontend tests for products swagger documentation page.
describe('Product Swagger Documentation', () => {
  // Before each test case, visit the documentation and set a timeout   
  beforeEach(() => {
    cy.visit('http://localhost:8080/docs')  
    timeout: 10000
  });

  // Test case for product endpoint visibility
  it('can see product endpoint', () => {
    cy.get('.opblock-tag-section') // Selects all HTML elements from swagger webpage
      .contains('product')
  });

  // Test case for POST product endpoint response
  it('can try out POST product endpoint', () => {
    cy.get('.opblock-tag-section') // 
      .contains('product')

    cy.contains('POST​/product').should('be.visible') // /product copied and pasted from swagger website
      .click()

    cy.contains('Try it out').click()

   cy.contains('Execute')
      .click()

    cy.contains('Response body').should('be.visible')
    cy.contains('200').should('be.visible') // Status code 200, only one swagger API response
  });

  // Test case for POST product example value creation endpoint
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
      }`), { parseSpecialCharSequences: false } // Example value not inserted correctly but still works

    cy.contains('Execute')
      .click()

    cy.contains('Response body').should('be.visible')
    cy.contains('400').should('be.visible')
  });

  // Test case for GET product endpoint response
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

  // Test case for GET product example response endpoint
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

  // Test case for PUT product example value update endpoint
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

  // Test case for DELETE product response endpoint
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

