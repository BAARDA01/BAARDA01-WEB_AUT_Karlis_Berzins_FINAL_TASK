import { SelectablePage } from "../pageObjects/selectable.page";

describe("Automation Practice Form", () => {
  context("Grid", () => {
    beforeEach(() => {
      SelectablePage.visit();
    });

    it("should fill out the form and submit", () => {

       // Fill in personal information
       cy.get("#firstName").invoke('val').then(_firstName => {
        SelectablePage.firstName.type('Karlis');
      });
      cy.get("#lastName").invoke('val').then(_lastName => {
        SelectablePage.lastName.type('Berzins');
      });
      cy.get("#userEmail").invoke('val').then(_userEmail => {
        SelectablePage.userEmail.type('karlis@venta.365.lv');
      });
      SelectablePage.checkRadioButton("Male").check({force: true});
     
   
    });
  })
})
