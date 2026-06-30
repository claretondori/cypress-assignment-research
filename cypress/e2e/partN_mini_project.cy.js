describe("Part N: Mini Project - practice.expandtesting.com walkthrough", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  afterEach(function () {
    // Automatically takes a screenshot named after the test, after every test runs
    cy.screenshot(this.currentTest.fullTitle());
  });

  it("visits the homepage successfully", () => {
    cy.url().should("eq", "https://practice.expandtesting.com/");
    cy.get("h1").should("be.visible");
  });

it("registers a new account (form fill)", () => {
  cy.visit("/register");
  const uniqueUser = `clareuser${Date.now()}`;
  cy.get("#username").type(uniqueUser);
  cy.get("#password").type("StrongPass123!");
  cy.get("#confirmPassword").type("StrongPass123!");
  cy.get("button[type='submit']").click();

  cy.url({ timeout: 10000 }).should("include", "/login");
  cy.contains("Successfully registered").should("be.visible");
});



  it("selects a dropdown value", () => {
    cy.visit("/dropdown");
    cy.get("#dropdown").select("Option 2");
    cy.get("#dropdown").should("have.value", "2");
  });

  it("checks and unchecks checkboxes", () => {
    cy.visit("/checkboxes");
    cy.get("#checkbox1").check().should("be.checked");
    cy.get("#checkbox1").uncheck().should("not.be.checked");
  });

  it("selects radio buttons", () => {
    cy.visit("/radio-buttons");
    cy.get("#blue").check().should("be.checked");
  });

 it("uploads a file", () => {
  cy.on("uncaught:exception", () => false);

  cy.visit("/upload");
  cy.get("#fileInput").selectFile("cypress/fixtures/sample.txt");
  cy.get("button[type='submit']").click();
  cy.get("#uploaded-files").should("contain.text", "sample.txt");
});




  it("scrolls to a hidden/lower element and verifies visibility", () => {
    cy.visit("/tables");
    cy.get("#table2").should("exist");
    cy.get("#table2").scrollIntoView().should("be.visible");
  });

  it("performs a full login flow and verifies the success message", () => {
    cy.visit("/login");
    cy.get("#username").type("practice");
    cy.get("#password").type("SuperSecretPassword!");
    cy.get("button[type='submit']").click();

    cy.url().should("include", "/secure");
    cy.contains("You logged into a secure area!").should("be.visible");
    cy.get(".btn.btn-danger").should("contain.text", "Logout");
  });
});

