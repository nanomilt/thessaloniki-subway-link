describe("Announcement Swagger Documentation", () => {
    beforeEach(() => {
        cy.visit("http://localhost:8080/docs")
        timeout: 10000
    });

    it('Announcement endpoint exists', () => {
        cy.get('.opblock-tag-section')
          .contains('announcement')
    });

    it('can try out POST announcement endpoint', () => {
        cy.get('.opblock-tag-section')
          .contains('announcement')
    
        cy.contains('POST​/announcement').should('be.visible')
          .click()
    
        cy.contains('Try it out').click()
    
       cy.contains('Execute')
          .click()
    
        cy.contains('Request body').should('be.visible')
        cy.contains('200').should('be.visible')
      });

      it('can modify POST announcement example value endpoint', () => {
        cy.get('.opblock-tag-section')
          .contains('announcement')
    
        cy.contains('POST​/announcement').should('be.visible')
          .click()
    
        cy.contains('Try it out').click()
    
        cy.get('textarea').clear()
          .type(`{
            "announcement-id": 154,
            "upload-date": "2000-01-23T04:56:07.000Z",
            "title": "Venizelou station",
            "body": "Venizelou station will remain closed due to maintenance"
            }`), { parseSpecialCharSequences: false }
    
        cy.contains('Execute')
          .click()
    
        cy.contains('Request body').should('be.visible')
        cy.contains('400').should('be.visible')
      });

    // it("Check Swagger UI", () => {
    //     cy.contains('announcement').should('exist');
        
    //     // Check POST endpoint
    //     cy.contains("POST​/announcement").should('exist').click();
    //     cy.contains('Try it out').should('exist').click();
    //     cy.contains('Execute').should('exist').click();
    //     cy.contains('Resource created').should('exist')

    //     // Check GET endpoint
    //     cy.contains("GET​/announcement​/{announcement-id}").should('exist').click();
    //     cy.contains('Try it out').should('exist').click();
    //     cy.get('input[type="text"][placeholder="announcement-id - The ID ot the announcement"]').type('154');
    //     cy.contains('Execute').should('exist').click();
    //     cy.contains('Successful operation').should('exist')

    //     // Check PUT endpoint
    //     cy.contains("PUT​/announcement​/{announcement-id}").should('exist').click();
    //     cy.contains('Try it out').should('exist').click();
    //     cy.get('input[type="text"][placeholder="announcement-id - The ID of the announcement to be modified"]').type('154');
    //     cy.contains('Execute').should('exist').click();

    //     // Check DELETE endpoint
    //     cy.contains("DELETE​/announcement​/{announcement-id}").should('exist').click();
    //     cy.contains('Try it out').should('exist').click();
    //     cy.contains('Execute').should('exist').click();

    // });
});
