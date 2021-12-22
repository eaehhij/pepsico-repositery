class ViewAllSnacks
{
getplp()
{
    return  cy.xpath('(//a[@aria-label="View All Snacks"])[1]')
}
getProductContent()
{
    return  cy.get('div.product-content-wrapper') 
}
getProductNotifyMe()
{
    return  cy.get('.notifyme-btn')
}
getNotifyMeEmail()
{
    return  cy.get('#email[type="text"]')
}
getNotifyMeEmailOptin()
{
    return  cy.get('div.notify-checkbox:nth-child(1) > label:nth-child(1) > span:nth-child(1)')
}
getNotifyMePrivacyPolicy()
{
    return  cy.get('div.notify-checkbox:nth-child(2) > label:nth-child(1) > span:nth-child(1)')
}
getNotifyMeButton()
{
    return  cy.get('div.button-group.password-div')
}
getNotifyMeThankyouButton()
{
    return  cy.get('.button-group.password-div')
}
getProductSelect()
{
    return  cy.get('div.product-action')
}
getProductIncrement()
{
    return  cy.get('.increment-btn')
}
getSnackingItemSelectNext()
{
    return  cy.get('button[aria-label="Next"]')
}
getSelectVP()
{
    return  cy.get('button[aria-label="Get Started Variety Pack"]')
}
getMyMixtab()
{
    return  cy.get('#variety-pack-tab-2')
}
getSignInbtn()
{
    return  cy.get('.signin-btn')
}
getOrderMyMix()
{
    return  cy.xpath('//div[5]/div/div/div/div[3]/div/button')
}
getOrderMyMixBtn()
{
    return  cy.get('button[aria-label="ORDER THIS MIX"]')
}
getEnterPromoCode()
{
    return  cy.get('input#outlined-basic')
}
getApplyDiscountBtn()
{
    return  cy.get('button#applyDiscount')
}
getPromoCodeAmount()
{
    return  cy.get('span.discount-price')
}
getRemovePromo()
{
    return  cy.get('#removeDiscount')
}
getVPproductIncBtn()
{
    return  cy.get(':nth-child(1) > .MuiPaper-root-20 > .product-content-wrapper > .product-information > .product-action > .quantity-count-contain > .quantity-count-wrapper > .increment-btn > .MuiButton-label-263 > .MuiSvgIcon-root-71')
}



}

export default ViewAllSnacks;