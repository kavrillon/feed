// https://docs.cypress.io/api/introduction/api.html

describe("Home", () => {
  it("should be the app name in the h1", () => {
    cy.visit("/");
    cy.contains("h1", "#feed");
  });
});
