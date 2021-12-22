/// <reference types='Cypress' />

import "cypress-xpath"

import HomePage from '../pageObjects/HomePage'
import ViewAllSnacks from '../pageObjects/ViewAllSnacks'
import ShopByCategory from "../pageObjects/ShopByCategory"

const homePage=new HomePage()
const viewAllSnacks=new ViewAllSnacks()
const shopByCategory=new ShopByCategory()

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

it('TC006 - shop by category', function() {    
    
    cy.wait(3000);
    homePage.getShopByCategory().click();
    cy.wait(3000);

    shopByCategory.getFlavour().should('be.visible').click();

    cy.wait(3000);
    shopByCategory.getMakeASelection().click();
    cy.wait(3000);
})
 
it('TC007 - verify no missing image under FLAVOUR section', function() {

    shopByCategory.getSnackingHeading().should('have.length', 0)
    cy.wait(3000);
})


})