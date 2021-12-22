class HomePage
{
getZipCode()
{
    return  cy.get('input#zipcode')
}
getLoginButton()
{
    return cy.get('.menu-link.no-active')
}
getEmail()
{
    return  cy.get('#email')
}
getPassword()
{
    return  cy.get('#password')
}
getSignIn()
{
    return  cy.get('#SignIn')
}
getUserName()
{
    return  cy.get('.user-name')
}
getMenuBar()
{
    return  cy.get('#simple-menu')
}
getMyProfile()
{
    return  cy.get('li[tabindex="0"]')
}
getLogoutButton()
{
    return  cy.get('li[tabindex="-1"]')
}
getPreviousOrders()
{
    return  cy.get('.home-remove-decor[aria-label="CHECK IT OUT previous-orders"]')
}
getShopByCategory()
{
    return  cy.get('.home-remove-decor[aria-label="GET STARTED all-products"]')
}
getViewAllSnacks()
{
    return  cy.get('#view-all-snacks-1')
}
getAuthenticationErrorMessage()
{
    return  cy.get('.MuiDialogContent-root-330 > :nth-child(1) > .MuiPaper-root-20')
}


}

export default HomePage;
