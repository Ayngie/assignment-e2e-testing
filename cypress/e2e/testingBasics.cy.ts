describe("basic functions of application", () => {
  it("should find input and button", () => {
    cy.visit("http://localhost:1234/"); //ladda sidan
    cy.get("input").should("have.id", "searchText");
    cy.get("button").contains("Sök");
  });

  it("should type text", () => {
    cy.get("input").type("Star Wars");
    cy.get("input").should("have.value", "Star Wars");
  });

  it("should get error message if no userInput", () => {
    cy.get("input").clear(); //rensa input
    cy.get("button").click();
    cy.get("input").should("have.value", "");
    cy.get("p").should("contain", "Inga sökresultat att visa");
  });

  it("should get error message if input is >3 characters", () => {
    cy.get("input").clear(); //rensa input
    cy.get("input").type("St");
    cy.get("button").click();
    cy.get("input").should("have.value", "St");
    cy.get("p").should("contain", "Inga sökresultat att visa");
  });
});
