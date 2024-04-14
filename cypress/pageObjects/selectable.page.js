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
 static get clickClose() {
    return cy.get('input[type=button][id="closeLargeModal"]').click();
   }
 static get rowValidation(){
    cy.get('tbody').within(() => {

        cy.contains('tr', 'Student Name').should('contain', 'Karlis Berzins');
        cy.contains('tr', 'Student Email').should('contain', 'karlis@venta.365.lv');
        cy.contains('tr', 'Gender').should('contain', 'Male');
        cy.contains('tr', 'Mobile').should('contain', '29857485');
        cy.contains('tr', 'Date of Birth').should('contain', '28 February,1930');
        cy.contains('tr', 'Subjects').should('contain', 'Economics');
        cy.contains('tr', 'Hobbies').should('contain', 'Music');
        cy.contains('tr', 'Picture').should('contain', 'picture.jpg');
        cy.contains('tr', 'Address').should('contain', 'Random Adress 12-3'); 
        cy.contains('tr', 'State and City').should('contain', 'NCR Delhi');
    
    });
 }
}
