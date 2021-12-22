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
   
it('TC003 - validate default zip code value', function() {

    homePage.getZipCode().should('have.value', this.data.zipcode);
})
    
it('TC004 - if SIGN-IN enabled for Snacks.com', function() {

    homePage.getLoginButton().click();
})
  
it('TC005 - SIGN-IN to Snacks.com with valid credentials', function() {

    homePage.getEmail().type(this.data.email);
    homePage.getPassword().type(this.data.password);
    homePage.getSignIn().click();
    cy.wait(6000);
})
   
it('TC006 - login landing page confirmation', function() {   

    homePage.getUserName().should('have.text', this.data.userName);
    cy.wait(3000);
})

it('TC007 - shop by category', function() {    

    homePage.getShopByCategory().click();
    cy.wait(6000);

    shopByCategory.getSnackType().should('be.visible').click();
    
    cy.wait(3000);
    shopByCategory.getMakeASelection().click();
    cy.wait(3000);
    
    shopByCategory.getSnackingItemSelect().click();
    cy.wait(6000);

    shopByCategory.getMakeASelection().click();
})

it('TC008 - add any product other than VP', function() { 

    viewAllSnacks.getProductSelect().eq(2).click({ force: true });
    cy.wait(3000);
    viewAllSnacks.getProductIncrement().click({ force: true });
    cy.wait(3000);
})

it('TC009 - order Variety Pack', function() { 

    viewAllSnacks.getSelectVP().click();
    cy.wait(3000);

    viewAllSnacks.getMyMixtab().click();
    cy.wait(3000);

    viewAllSnacks.getSignInbtn().click();
})

it('TC010 - order VP from saved MyMix', function() {

    homePage.getEmail().type(this.data.email);
    homePage.getPassword().type(this.data.password);
    homePage.getSignIn().click();
    cy.wait(6000);

    viewAllSnacks.getOrderMyMix().click();
    cy.wait(3000); 

    viewAllSnacks.getOrderMyMixBtn().click();
    cy.wait(3000);
})

it('TC011 - Apply promo code in upperCase', function() {    
    
    cy.wait(3000);
    viewAllSnacks.getEnterPromoCode().type(this.data.PROMO)
    viewAllSnacks.getApplyDiscountBtn().click();   
    cy.wait(3000);
})

it('TC012 - REMOVE promo code', function() {   

    viewAllSnacks.getRemovePromo().click();
    cy.wait(3000);
})

it('TC013 - Apply promo code in lowerCase', function() {   

    viewAllSnacks.getEnterPromoCode().type(this.data.promo)
    viewAllSnacks.getApplyDiscountBtn().click();   
    cy.wait(3000);
})


})
