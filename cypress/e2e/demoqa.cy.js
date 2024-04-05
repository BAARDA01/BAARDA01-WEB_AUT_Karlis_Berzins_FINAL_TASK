import { SelectablePage } from "../pageObjects/selectable.page";

describe("Automation Practice Form", () => {
  context("Grid", () => {
    beforeEach(() => {
      SelectablePage.visit();
    });

    it("should fill out the form and submit", () => {

       // Fill in personal information
    type('#firstName', firstName);
    type('#lastName', lastName);
    type('#userEmail', email);
    type('#userNumber', mobileNumber);
    type('#currentAddress', address);

    // Set Date of Birth
    select('#dateOfBirthInput', '28 Feb 1930');

    // Set Subjects
    type('#subjectsInput', subjects);
    click('.subjects-auto-complete__menu-list > div');

    // Set Hobbies
    click('#hobbiesWrapper input[value="Music"]');

    // Upload an image
    uploadFile('#uploadPicture', imagePath);

    // Set State and City
    select('#state', state);
    select('#city', city);

    // Submit the form
    click('#submit');

    // Validate labeled rows
    cy.get('.table-responsive').should('contain', firstName);
    cy.get('.table-responsive').should('contain', lastName);
    cy.get('.table-responsive').should('contain', email);
    cy.get('.table-responsive').should('contain', mobileNumber);
    cy.get('.table-responsive').should('contain', address);
    cy.get('.table-responsive').should('contain', subjects);
    cy.get('.table-responsive').should('contain', hobbies);
    cy.get('.table-responsive').should('contain', state);
    cy.get('.table-responsive').should('contain', city);

     
   
    });
  })
})