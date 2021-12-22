class ShopByCategory
{
getBrand()
{
    return  cy.get('.main-image[src="/www/images/category/brand.jpg"]', { timeout: 10000 })
}
getFlavour()
{
    return  cy.get('.main-image[src="/www/images/category/flavor.jpg"]', { timeout: 10000 })
}
getSnackType()
{
    return  cy.get('.main-image[src="/www/images/category/snackType.jpg"]', { timeout: 10000 })
}
getOccasion()
{
    return  cy.get('.main-image[src="/www/images/category/occasion.jpg"]', { timeout: 10000 })
}
getMakeASelection()
{
    return  cy.get('div.shop-by-category-next')
}
getSnackingImage()
{
    return  cy.get('.sub-main-image')
}
getSnackingHeading()
{
    return  cy.get('div.sub-heading')
}
getSnackingNextBtn()
{
    return  cy.get('.btn-primary > span:nth-child(1)')
}
getSnackingItemSelect()
{
    return  cy.get(':nth-child(9) > button:nth-child(1)')
}

}

export default ShopByCategory;
