describe("My First Test", () => {
  it("visits the app root url", () => {
    cy.visit("/");
    cy.contains("h2", "Recent Posts");
  });
});
