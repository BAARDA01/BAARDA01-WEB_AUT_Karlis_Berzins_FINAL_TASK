export class SelectablePage {
    static visit() {
        return cy.visit("https://demoqa.com/automation-practice-form");
    }

   static get firstName() {
    return cy.get("[id=firstName]")
   }
   static get lastName() {
    return cy.get("[id=lastName]")
   }
   static get userEmail() {
    return cy.get("[id=userEmail]")
   }
static checkRadioButton(value) {
    return cy.get(`input[type="radio"][value="${value}"]`);
}
static get radioButton() {
    return cy.get("[id=gender-radio-1]")
   }


}
