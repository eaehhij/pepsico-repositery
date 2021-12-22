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
    cy.wait(6000);
})

it('TC013 - Identify COD product on plp', function() {

    cy.get('div.mix-match-circle').eq(0).should('have.text', 'Call of Duty').click({ force: true }) 
    cy.wait(6000);   
    cy.get('.cod-rules-link').should('have.text', 'Learn More - Official Call of Duty® Rules').click({ force: true })
    cy.wait(3000);   

    cy.get('#LoginClose').click()
})
   
it('TC014 - COD Content validation', function() {

    cy.get('.cod-title').should('have.text', 'DORITOS® CALL OF DUTY®: VANGUARD/CALL OF DUTY®: WARZONE IN-GAME ITEM SNACKS.COM OFFER')

    cy.get('div.rule-single:nth-child(1)').should('have.text', 'Buy any specially marked 2.75 – 9.25 oz Doritos product between 10/5/2021 – 10/24/2021')
    cy.get('div.rule-single:nth-child(2)').should('have.text', 'Receive a separate email with your unique Call of Duty® bonus in-game content code within 24-48 hours of purchase. One code per order.')  

    cy.get('.rules-description-heading').should('have.text', 'OFFICIAL RULES')

    cy.get('.rules-description').should('include.text', 'OFFER PERIOD')
    cy.get('.rules-description').should('include.text', 'ELIGIBILITY')
    cy.get('.rules-description').should('include.text', 'HOW TO PARTICIPATE IN THE OFFER') 
    cy.get('.rules-description').should('include.text', 'HOW TO REDEEM OFFER ITEM') 
    cy.get('.rules-description').should('include.text', 'Codes')
    cy.get('.rules-description').should('include.text', 'LIMITATION OF LIABILITY')
    cy.get('.rules-description').should('include.text', 'DISPUTES')
    cy.get('.rules-description').should('include.text', 'PRIVACY POLICY')
    cy.get('.rules-description').should('include.text', 'GENERAL')
    cy.get('.rules-description').should('include.text', 'PUBLICITY RIGHTS')
    cy.get('.rules-description').should('include.text', 'Customer Service inquiries may be made at Contact Us or call 844-935-4570.')
    cy.get('.rules-description').should('include.text', '©2021 Frito-Lay North America, Inc. All rights reserved.')
    cy.get('.rules-description').should('include.text', '©2021 Activision Publishing, Inc. ACTIVISION, CALL OF DUTY, CALL OF DUTY: VANGUARD, AND CALL OF DUTY: WARZONE are trademarks of Activision Publishing, Inc.')
    cy.wait(6000);
})

it('TC015 - COD Back Button', function() {

    cy.get('.cod-back-btn').click()
    cy.wait(3000);  
})

it('TC016 - place order with COD defination on plp', function() {

    cy.get('div.mix-match-circle').eq(0).should('have.text', 'Call of Duty').click({ force: true }) 
    cy.wait(3000); 
    for(let n = 0; n < 10; n ++) 
    {
        cy.get(':nth-child(1) > .quantity-count-wrapper > .increment-btn > .MuiButton-label-175 > .MuiSvgIcon-root-165').click({ multiple: true, force: true })
    }    
})

it('TC017 - Checkout', function() {

    cy.get('.mini-cart-checkout').click()
    cy.wait(3000);  
})

it('TC018 - Apply promo code & Checkout', function() {

    viewAllSnacks.getEnterPromoCode().type(this.data.PROMO)
    viewAllSnacks.getApplyDiscountBtn().click();   
    cy.wait(3000);
    
    checkOut.getCartCheckoutBtn().click();
})

it('TC019 - continue as guest User', function() {

    cy.wait(3000)
    checkOut.getpopUpGuestBtn().click();
})

it('TC020 - guest checkout Information', function() {

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

it(' TC021 - enable Billing Checkbox ', function() {

    checkOut.getBillingCheckbox().check().should('be.checked');
    cy.wait(3000)
})

it('TC022 - proceed for payment', function() {

    checkOut.getSavedPayMethod().click();
    checkOut.getSubmitOrder().click();
})

it('TC023 - capture Order number ', function() {

cy.wait(10000)    
checkOut.getOrderNumber().each(($e1, index, $list) => {
    const disText=$e1.text()
    cy.log(disText)
    var res= disText.slice(22,35)
    cy.log(res)
   })
})






})