describe("Login page", () => {
    beforeEach(() => {
        cy.visit("http://localhost:8080")
    });

//     it("Correct login", () => {
//         cy.get("#username").type("karanikio");
//         cy.get("#password").type("12345678");
//         cy.get("#submit").click();
//         cy.url().should("include", "/dashboard");
//     });

//     it("Wrong credentials", () => {
//         cy.get("#username").type("karanikio");
//         cy.get("#password").type("12345678");
//         cy.get("#submit").click();
//         cy.url().should("not.include", "/dashboard");
//         cy.contains("Authentication Error");
//     });
// });

// describe("Home page", () => {
//     beforeEach(() => {
//         cy.visit("http://localhost:3002")
//         cy.get("#username").type("karanikio");
//         cy.get("#password").type("12345678");
//         cy.get("#submit").click();
//     });

//     it("Check dashboard page", () => {
//         cy.url().should("include", "/dashboard");
//         cy.contains("Dashboard");
//     });
});