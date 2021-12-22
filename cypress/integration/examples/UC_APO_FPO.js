/// <reference types='Cypress' />

///<reference types="cypress-iframe" />

import "cypress-xpath"
import "cypress-iframe"

import HomePage from '../pageObjects/HomePage'
import ViewAllSnacks from '../pageObjects/ViewAllSnacks'
import ShopByCategory from "../pageObjects/ShopByCategory"
import CheckOut from "../pageObjects/CheckOut"

const homePage=new HomePage()
const viewAllSnacks=new ViewAllSnacks()
const shopByCategory=new ShopByCategory()
const checkOut=new CheckOut()

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

    cy.url().should('include', this.data.UrlContent);    
    cy.wait(1000);    
})

it('TC002 - confirm redirected to Snacks.com', function() {

    cy.url().should('include', this.data.UrlContent);
})

it('TC003 - navigate to PLP page', function() {

    homePage.getViewAllSnacks().click()  
})

it('TC004 - select VP from plp', function() {

    viewAllSnacks.getSelectVP().click();
    for(let n = 0; n < 30; n ++) 
    {
        viewAllSnacks.getVPproductIncBtn().click({ multiple: true, force: true })
    }    
})

it('TC005 - order selected VP', function() {

    viewAllSnacks.getOrderMyMixBtn().click();
    cy.wait(3000);    
})

it('TC006 - proceed for checkout', function() {

    checkOut.getpopUpCheckoutBtn().click();
    cy.wait(3000)
})

it('TC007 - Apply promo code & Checkout', function() {

    viewAllSnacks.getEnterPromoCode().type(this.data.PROMO)
    viewAllSnacks.getApplyDiscountBtn().click();   
    cy.wait(3000);
    
    checkOut.getCartCheckoutBtn().click();
})

it('TC008 - continue as guest User', function() {

    cy.wait(3000)
    checkOut.getpopUpGuestBtn().click();
})

it('TC009 - Verify error message with city APO', function() {

    cy.wait(3000)
    checkOut.getContactFirstName().type(this.data.first);
    checkOut.getContactLastName().type(this.data.last);
    checkOut.getContactEmail().type(this.data.email);

    checkOut.getShipFirstName().type(this.data.first);
    checkOut.getShipLastName().type(this.data.last);

    checkOut.getShipAdrL1().type(this.data.addrln1);
    cy.wait(3000)
    checkOut.getGoogleAutoAddr().trigger('mouseover').wait(3000).click({ force: true });
    
    checkOut.getShipAdrL2().click();
    cy.wait(3000)
    
    checkOut.getShipCity().clear();
    checkOut.getShipCity().type('APO')
    
    checkOut.getShipAdrL2().click();
    cy.wait(3000)
})

it('TC010 - alert message validation', function() {

    checkOut.getAlertMessage().should('include.text', this.data.alert)
})

it('TC011 - Payment button State check', function() {

    checkOut.getPaymentBtn().should('be.enabled')
    cy.wait(3000)    
})
it('TC012 - Verify error message with city FPO', function() {

    checkOut.getShipCity().clear();

    cy.wait(3000)
    checkOut.getShipCity().type('FPO')
    cy.wait(3000)

    checkOut.getShipAdrL2().click();
    cy.wait(3000)
})

it('TC013 - alert message validation', function() {

    checkOut.getAlertMessage().should('include.text', this.data.alert)
})

it('TC014 - Payment button State check', function() {

    checkOut.getPaymentBtn().should('be.enabled')
    cy.wait(3000)
})    


})