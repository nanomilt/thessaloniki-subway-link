describe("Homepage", () => {
    beforeEach(() => {
        cy.visit("http://localhost:8080/docs")
    });
    it("Check Swagger UI", () => {
        it('Check if the page is displayed correctly', () => {
            // check that some expected texts exist
             cy.get('head title').should('have.text','Swagger UI');
             cy.get('h2.title').should('have.text','TSL - Thessaloniki Subway Link 1.0.0 OAS3');
             cy.contains('Explore');
             cy.contains('Schemas');
            it('Check if it has the correct resourses', () => {
                // check that all 4 resources exist
                cy.get('[id^=operations-tag-]').should('have.length',4)
                .should('contain','user')
                .should('contain','station')
                .should('contain','line')
                .should('contain','cart')
                .should('contain','product')
                .should('contain','favorites')
                .should('contain','journeys')
                .should('contain','announcement');
            })
            it('Check if each resource has the correct number of routes', () => {
                cy.get('.opblock-tag-section > h4[id$=user] + div').children().should('have.length',4);
                cy.get('.opblock-tag-section > h4[id$=station] + div').children().should('have.length',6);
                cy.get('.opblock-tag-section > h4[id$=line] + div').children().should('have.length',8);
                cy.get('.opblock-tag-section > h4[id$=announcement] + div').children().should('have.length',4);
                cy.get('.opblock-tag-section > h4[id$=product] + div').children().should('have.length',4); 
                cy.get('.opblock-tag-section > h4[id$=cart] + div').children().should('have.length',6);
                cy.get('.opblock-tag-section > h4[id$=favorites] + div').children().should('have.length',1);
                cy.get('.opblock-tag-section > h4[id$=journey] + div').children().should('have.length',1);
            })
            it('Check if all the Schemas exist', () => {
                cy.get('.models h4').should('have.text','Schemas'); // check that Schemas exist
                cy.get('.models > div').children().should('have.length',7); // check that it displays 10 schemas
                const expected = ['User','Station','Line','Announcement','Product','Cart',
                    'Favorites'];
            
                expected.forEach((text) => {
                    cy.get(`.models >> [id^=model-${text}]`)
                    .should('exist')            // check that the element for the schema exists
                    .should('contain.text',text);  // check that it displays the correct name in the page
                })
            })
            it('Check if the \'User\' schema button opens correctly', () => {
                 cy.get('@User').find('[style="cursor: pointer;"]').first().click();

        // check that the right changes have been made
        cy.get('@User').find('.model-box').children().should('match','div');
        cy.get('@User').should('contain','user-id')
                          .should('contain','is-guest')
                          .should('contain','email')
                          .should('contain','username')
                          .should('contain','password');

    })
    it('Check if the \'User\' schema button closes correctly', () => {
        // open the "User" schema
        cy.get('@User').find('[style="cursor: pointer;"]').first().click();

        // close the "User" schema
        cy.get('@User').find('[style="cursor: pointer;"]').first().click();

        // check that the right changes have been made
        cy.get('@User').find('.model-box').first().children()
        .should('not.match','div')
        .should('have.length',2);

        cy.get('@User').should('not.contain','is-guest');
    })
        
  })
    })
})