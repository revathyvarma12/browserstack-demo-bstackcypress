describe('Browser Stack Demo Cypress', () => {
  it('Add Product', () => {
   
    cy.visit('https://bstackdemo.com/')
    cy.contains('Sign In').click()
    cy.url().should('include', '/signin')
    cy.contains('Select Username')
      .type('demouser{enter}')
     
      cy.contains('demouser').click({force: true})
      cy.contains('Select Password').type('testingisfun{enter}')
      cy.contains('Log In').click()
      //cy.Log("Logged into the demo site")
      
      //cy.get('//div[@id="1"]/div[contains(text(),"Add to cart")]').click()
      cy.contains('Add to cart').click()
   cy.url().should('include', '/?signin')
      cy.contains('Checkout').click();
      //cy.Log("Product aaded to cart")
     
      
      //cy.get('#firstNameInput').type('Revathy')
      cy.get('#firstNameInput',{ timeout: 1000 }).type('Revathy')
      cy.get('#lastNameInput',{ timeout: 1000 }).type('Varma')
      cy.get('#addressLine1Input').type('Address 1')
      cy.get('#postCodeInput').type('682301')
      cy.get('#provinceInput').type('Kerala')
      cy.contains('Submit').click()
       cy.url().should('include', '/confirmation')
       //cy.Log("Product checked out")

      
    

  })
})
// sample_browserstack.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
