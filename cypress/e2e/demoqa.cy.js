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
      
      cy.get("#userNumber").invoke('val').then(_userNumber => {
        SelectablePage.userNumber.type('29857485');
      });
      SelectablePage.clickdateOfBirthInput.click();
      SelectablePage.selectMonth.select(1);
      SelectablePage.selectYear.select('1930');
      SelectablePage.selectDay.click(); 
      SelectablePage.selectSubject.type("Economics{enter}");
      SelectablePage.selectMusicCheckbox("hobbies-checkbox-3").check({force: true});
      SelectablePage.uploadImage;
      SelectablePage.writeAdress.type("Random Adress 12-3");
      SelectablePage.selectState.type("NCR{enter}");
      SelectablePage.selectCity.type("Delhi{enter}{enter}");
      SelectablePage.rowValidation;
      //SelectablePage.clickClose();
   });
  })
})
