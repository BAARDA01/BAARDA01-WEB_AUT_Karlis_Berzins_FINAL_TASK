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
   static get userNumber() {
    return cy.get("[id=userNumber]")
   }
   static get selectYear(){
    return cy.get('.react-datepicker__year-dropdown-container select');
}
static get selectMonth(){
    return cy.get('.react-datepicker__month-dropdown-container select');
}
static get selectDay(){
    return cy.get('[aria-label="Choose Friday, February 28th, 1930"]');
}
static get clickdateOfBirthInput(){
    return cy.get("#dateOfBirthInput");
}
static get selectSubject() {
    return cy.get('#subjectsInput');
}
static selectMusicCheckbox(value){
    return cy.get(`input[type="checkbox"][id="${value}"]`);
}
static get uploadImage(){
    return cy.get('input[type=file][id="uploadPicture"]').selectFile('picture.jpg') 
}
static get writeAdress(){
    return cy.get("#currentAddress");
}
static get selectState(){
   return cy.get('#state');
}
static get selectCity(){
    return cy.get('#city');
 }
 
}
