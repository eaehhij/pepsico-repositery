class CheckOut
{
getpopUpCheckoutBtn()
{
    return  cy.xpath('//div/a[@id="proceedCheckout"]')
}
getCartCheckoutBtn()
{
    return  cy.get('#Checkout-footer')
}
getpopUpGuestBtn()
{
    return  cy.get('#GuestCheckout')
}
getContactFirstName()
{
    return  cy.xpath('//input[@aria-label="contactInformationFirstname"]')
}
getContactLastName()
{
    return  cy.xpath('//input[@aria-label="contactInformationLastname"]')
}
getContactEmail()
{
    return  cy.xpath('//input[@id="email"]')
}
getShipFirstName()
{
    return  cy.xpath('//input[@aria-label="shippingInformationFirstname"]')
}
getShipLastName()
{
    return  cy.xpath('//input[@aria-label="shippingInformationLastname"]')
}
getShipAdrL1()
{
    return  cy.get('div[aria-autocomplete="list"]')
}
getGoogleAutoAddr()
{
    return  cy.get('.autocomplete-dropdown-container > :nth-child(1)')
}
getShipAdrL2()
{
    return  cy.xpath('//input[@name="shippingAddressLine2"]')
}
getShipCity()
{
    return  cy.xpath('//input[@id="shippingCity"]')
}
getShipZip()
{
    return  cy.xpath('//input[@id="shippingZipCode"]')
}
getShipState()
{
    return  cy.xpath('//input[@id="shippingState"]')
}
getStateDropDownSelect()
{
    return  cy.get('#shippingState-option-0')
}
getCartCheckoutBtn()
{
    return  cy.xpath('//*[@id="Checkout-footer"]')
}
getCheckoutPayBtn()
{
    return  cy.get('#ContinueToPayment')
}
getSavedPayMethod()
{
    return  cy.get('.radio-checkmark')
}
getPaymentBtn()
{
    return  cy.xpath('//button[@id="ContinueToPayment"]')
}
getBillingCheckbox()
{
    return  cy.get('#isBilling')
}
getSignUpCheckbox()
{
    return  cy.xpath('//label[@class="form-check-label icn-check"]')
}
getIframeCreditCard()
{
    return  cy.xpath('//*[@id="number-container"]/iframe')
}
getIframeSecurityCode()
{
    return  cy.xpath('//*[@id="securityCode-container"]/iframe')
}
getIframeMonth()
{
    return  cy.get('#flexform')
}
getIframeSignUp()
{
    return  cy.get('div.form-group')
}
getSubmitOrder()
{
    return  cy.get('#pay-button')
}
getOrderNumber()
{
    return  cy.get('.thankyou-header > .MuiTypography-root-132')
}
getCartItemsPrice()
{
    return  cy.get('div.normal-price:nth-child(1)')
}
getCartTotal()
{
    return  cy.get('.amount')
}
getAlertMessage()
{
    return  cy.get('.undefined > div:nth-child(1)')
}
getOrdHisOrdDetail()
{
    return  cy.get('#OrderDetails-1')
}
getOrdHisReordBtn()
{
    return  cy.get('.re-ord-btn')
}
getBillFirstName()
{
    return  cy.get('#billingFirstname')
}
getBillLastName()
{
    return  cy.get('input[name="billingLastname"]')
}
getBillPhone()
{
    return  cy.get('#billingPhone')
}
getBillAdrL1()
{
    return  cy.get('#shippingAddressLine1')
}
getBillAdrL2()
{
    return  cy.get('#billingAddressLine2')
}





}

export default CheckOut;