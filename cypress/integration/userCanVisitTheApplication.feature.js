context("user visits the application"),
  () => {
    it("its expected to display a header"),
      () => {
        cy.visit("/");
        cy.get("h1").should("contain.text", addressBook);
      };
  };
