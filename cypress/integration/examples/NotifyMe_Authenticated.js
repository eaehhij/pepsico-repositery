/// <reference types='Cypress' />

import "cypress-xpath"

import HomePage from '../pageObjects/HomePage'
import ViewAllSnacks from '../pageObjects/ViewAllSnacks'

const homePage=new HomePage()
const viewAllSnacks=new ViewAllSnacks()

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
    
it('TC003 - if SIGN-IN enabled for Snacks.com', function() {

    homePage.getLoginButton().should('be.visible').click();
})
  
it('TC004 - SIGN-IN to Snacks.com with valid credentials', function() {

    homePage.getEmail().type(this.data.email);
    homePage.getPassword().type(this.data.password)
    homePage.getSignIn().click({force: true});
    cy.wait(6000);
})
  
it('TC005 - login landing page confirmation', function() {    

    cy.wait(3000);
    homePage.getUserName().should('have.text', this.data.userName);
    cy.wait(3000);
})

it('TC006 - Navigate PLP page', function() {

    cy.wait(3000);
    viewAllSnacks.getplp().click({force: true});
    cy.wait(3000);
})
   
it('TC007 - SIGN-IN to Snacks.com with valid credentials', function() {

    homePage.getEmail().type(this.data.email);
    homePage.getPassword().type(this.data.password)
    homePage.getSignIn().click({force: true});

    cy.wait(3000);
    viewAllSnacks.getplp().click({force: true});
    cy.wait(2000);
})
   
it('TC008 - Verify 1st plp load has 36 product displayed', function() {

    cy.contains(this.data.scrollIntoView).scrollIntoView();
    viewAllSnacks.getProductContent().should('have.length', 36)
    cy.wait(3000);
})
  
it('TC009 - Verify 2d plp load has 72 product displayed', function() {

    cy.contains(this.data.scrollIntoView).scrollIntoView();
    viewAllSnacks.getProductContent().should('have.length', 72)
    cy.wait(3000);
})
  
it('TC010 - Verify 3rd plp load has 108 product displayed', function() {

    cy.contains(this.data.scrollIntoView).scrollIntoView();
    viewAllSnacks.getProductContent().should('have.length', 108)
    cy.wait(3000);
})
   
it('TC011 - Verify 4th plp load has 144 product displayed', function() {

    cy.contains(this.data.scrollIntoView).scrollIntoView();
    viewAllSnacks.getProductContent().should('have.length', 144)
    cy.wait(3000);
})
   
it('TC012 - Verify 5th plp load has 180 product displayed', function() {

    cy.contains(this.data.scrollIntoView).scrollIntoView();
    viewAllSnacks.getProductContent().should('have.length', 180)
    cy.wait(3000);
})

it('TC013 - Identify Notify Me product', function() {

    viewAllSnacks.getProductNotifyMe().eq(0).click({ force: true });
    cy.wait(3000);   
})

it('TC014 - enter details for Notify Me Sign Up', function() {

   viewAllSnacks.getNotifyMeEmail().should('have.value', this.data.email);
   
   viewAllSnacks.getNotifyMeEmailOptin().click();
   viewAllSnacks.getNotifyMePrivacyPolicy().click();
   viewAllSnacks.getNotifyMeButton().click();
   cy.wait(3000);

   viewAllSnacks.getNotifyMeThankyouButton().click()
})


})