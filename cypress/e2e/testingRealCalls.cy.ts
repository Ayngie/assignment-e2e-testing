describe("movieApp - real calls to API", () => {
  it("should get and display desired movie in html (real call to API)", () => {
    cy.visit("http://localhost:1234/"); //ladda om sidan, för att nollställa den.
    cy.get("input").type("Star Wars");
    cy.get("button").click();
    cy.get("#movie-container:has(h3)").should("contain", "Star Wars");
  });

  it("should get first 10 search results", () => {
    cy.get("#movie-container>div").should("have.length", 10);
    cy.get("h3").should("have.length", 10);
    cy.get("img").should("have.length", 10);
  });

  it("should get image for movie", () => {
    cy.get("#movie-container>div")
      .find("img")
      .should("have.attr", "alt")
      .should("include", "Star Wars");
    cy.get("#movie-container>div")
      .find("img")
      .should(
        "have.attr",
        "src",
        "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg"
      );
  });

  it("should get error message if no result from search (real call to API)", () => {
    cy.get("input").clear(); //rensa input
    cy.get("input").type("kdossd");
    cy.get("button").click();
    cy.get("input").should("have.value", "kdossd");
    cy.get("p").should("contain", "Inga sökresultat att visa");
  });
});
