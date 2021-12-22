/// <reference types='Cypress' />

import HomePage from '../pageObjects/HomePage'

const homePage=new HomePage()

describe('Snacks.com Test Suite', function() 
{    
    beforeEach(() => {
        cy.viewport(1920, 1080)

})

    beforeEach(function() {

        cy.fixture('example').then(function(data)
        {
this.data=data        
        })
    })
  
it('TC001 - navigate to Snacks.com', function() {

    cy.reload(true)
    cy.visit(Cypress.env('url'));
    cy.wait(1000);    
})
 
it('TC002 - confirm redirected to Snacks.com', function() {

    cy.url().should('include', this.data.UrlContent); 
})
   
it('TC003 - validate default zip code value', function() {

    homePage.getZipCode().should('have.value', this.data.zipcode);
})
    
it('TC004 - if SIGN-IN enabled for Snacks.com', function() {

    homePage.getLoginButton().click();
})
   
it('TC005 - SIGN-IN to Snacks.com with In-valid email address', function() {

    homePage.getEmail().type(this.data.wrongemail);
    homePage.getPassword().type(this.data.password);
    homePage.getSignIn().click();
})
  
it('TC006 - Error message validation', function() {   

    homePage.getAuthenticationErrorMessage().should('have.text', 'Authentication failed');
    cy.wait(3000);
})



})