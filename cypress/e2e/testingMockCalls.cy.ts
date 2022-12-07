import { mockData } from "../mocks/movieMocks";

describe("movieApp - MOCK calls to API", () => {
  it("should get and display mockData in html", () => {
    cy.visit("http://localhost:1234/"); //ladda om sidan, för att nollställa den.
    cy.intercept("GET", "http://omdbapi.com/*", mockData).as("mockMovieList");

    cy.get("input").type("Gone with the Wind");
    cy.get("input").should("have.value", "Gone with the Wind");
    cy.get("button").click();

    cy.wait("@mockMovieList").its("request.url").should("contain", "Wind");

    cy.get("#movie-container:has(h3)").should(
      "contain",
      "Gone with the Wind (Mock)"
    );
    cy.get("#movie-container:has(h3)").should(
      "contain",
      "Guardians of the Galaxy (Mock)"
    );
  });

  it("should get two results", () => {
    cy.get("#movie-container>div").should("have.length", 2);
    cy.get("h3").should("have.length", 2);
    cy.get("img").should("have.length", 2);
  });

  it("should ", () => {});
  it("should ", () => {});
});
