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

it('TC009 - guest checkout Information', function() {

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

    checkOut.getPaymentBtn().click();
    cy.wait(3000)
    checkOut.getPaymentBtn().click();
    cy.wait(5000)
})

it(' TC010 - enable Billing Checkbox ', function() {

    checkOut.getBillingCheckbox().check().should('be.checked');
    cy.wait(3000)
})

it('TC011 - enter Credit Card details ', function() {  
    cy.wait(10000)
    checkOut.getIframeCreditCard().then(function($iframe){
        const iframeContent = $iframe.contents().find('[name="number"]')

        cy.wrap(iframeContent)
        .type('4111 1111 1111 1111')
    })
})

it('TC012 - enter security code details ', function() {
    
    checkOut.getIframeSecurityCode().then(function($iframe){
        const iframeContent = $iframe.contents().find('[name="securityCode"]')

        cy.wrap(iframeContent)
        .type(this.data.cvv)
    })    
})

it('TC013 - month selection ', function() {

    checkOut.getIframeMonth().then(function($flexform){
        const flexformContent = $flexform.contents().find('#expMonth')

        cy.wrap(flexformContent).select(this.data.month)
    })
})

it('TC014 - year selection ', function() {

    checkOut.getIframeMonth().then(function($flexform){
        const flexformContent = $flexform.contents().find('#expYear')

        cy.wrap(flexformContent).select(this.data.year)
    })
})

it('TC015 - enable SignUp notifications and SignUp text Validation ', function() {

    checkOut.getIframeSignUp().then(function($flexform){
        const flexformContent = $flexform.contents().find('label.form-check-label.icn-check')

        cy.wrap(flexformContent)
        .click({force: true})

    checkOut.getSignUpCheckbox().should('have.text',this.data.signup);
    })
})

it('TC016 - order Submission ', function() {

    checkOut.getSubmitOrder().click();    
})

it('TC017 - capture Order number ', function() {

cy.wait(10000) 
   
checkOut.getOrderNumber().each(($e1, index, $list) => {
    const disText=$e1.text()
    cy.log(disText)
    var res= disText.slice(22,35)
    cy.log(res)
   })
})


})