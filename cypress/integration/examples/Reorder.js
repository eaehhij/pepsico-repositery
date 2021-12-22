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

it('TC007 - select previous orders and re-order', function() {

    homePage.getMenuBar().click();
    cy.wait(3000);

    homePage.getMyProfile().click();

    homePage.getEmail().type(this.data.email);
    homePage.getPassword().type(this.data.password);
    homePage.getSignIn().click();
    cy.wait(6000);

    homePage.getPreviousOrders().click()

    checkOut.getOrdHisOrdDetail().click()
    cy.wait(1000)

    checkOut.getOrdHisReordBtn().click()
    cy.wait(3000)   
})
  
it('TC008 - proceed for Checkout', function() { 

    cy.get('#Checkout-footer').click({force: true});    
    cy.wait(3000);

    homePage.getEmail().type(this.data.email);
    homePage.getPassword().type(this.data.password);
    homePage.getSignIn().click();
    cy.wait(6000);
})

it('TC009 - Contine to Payment', function(){

    cy.get('#ContinueToPayment').click();
})

it('TC010 - Shipping Information', function(){

    checkOut.getShipFirstName().type(this.data.first);
    checkOut.getShipLastName().type(this.data.last);

    checkOut.getShipAdrL1().type(this.data.addrln1);
    cy.wait(3000)
    checkOut.getGoogleAutoAddr().trigger('mouseover').wait(3000).click({ force: true });
    
    checkOut.getShipAdrL2().click();
    cy.wait(3000)

    checkOut.getPaymentBtn().click();
    cy.wait(3000)
    checkOut.getPaymentBtn().click();
    cy.wait(5000)
})

it('TC011 - proceed for payment', function() {

    checkOut.getSavedPayMethod().click();
    checkOut.getSubmitOrder().click();
})

it('TC012 - capture Order number ', function() {

cy.wait(10000)    
checkOut.getOrderNumber().each(($e1, index, $list) => {
    const disText=$e1.text()
    cy.log(disText)
    var res= disText.slice(22,35)
    cy.log(res)
   })
})


})