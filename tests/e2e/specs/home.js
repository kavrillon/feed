describe("Header", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("Load", () => {
    it("should be the app name in the h1", () => {
      cy.contains("h1", "#feed");
    });

    it("should be on light mode by default", () => {
      cy.get("html[data-dark]")
        .invoke("attr", "data-dark")
        .should("eq", "false");
    });
  });

  describe("Click on Dark mode CTA", () => {
    it("should switch the dark mode", () => {
      cy.get("#HeaderDarkModeCTA").trigger("click");
      cy.get("html[data-dark]")
        .invoke("attr", "data-dark")
        .should("eq", "true");
    });
  });
});
