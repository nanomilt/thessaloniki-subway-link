describe("Home page", () => {
    beforeEach(() => {
        cy.visit("http://localhost:8080/docs")
    });

    it("Check Swagger UI", () => {
        cy.contains('announcement').should('exist');
        
        // Check POST endpoint
        cy.contains("POST​/announcement").should('exist').click();
        cy.contains('Try it out').should('exist').click();
        cy.contains('Execute').should('exist').click();
        cy.contains('Resource created').should('exist')

        // Check GET endpoint
        cy.contains("GET​/announcement​/{announcement-id}").should('exist').click();
        cy.contains('Try it out').should('exist').click();
        cy.get('#announcement-id').type('154');
        cy.contains('Execute').should('exist').click();
        cy.contains('Successful operation').should('exist')

        // Check PUT endpoint
        cy.contains("PUT​/announcement​/{announcement-id}").should('exist').click();
        cy.contains('Try it out').should('exist').click();
        cy.get('#announcement-id').type('154');
        cy.contains('Execute').should('exist').click();

        // Check DELETE endpoint
        cy.contains("DELETE​/announcement​/{announcement-id}").should('exist').click();
        cy.contains('Try it out').should('exist').click();
        cy.contains('Execute').should('exist').click();

    });
});
