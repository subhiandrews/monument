describe('template spec', () => {
  before('login', ()=> {
    cy.visit('/login')

    cy.get('#outlined-adornment-email-login').type(Cypress.env('USERNAME'))
    cy.get('#outlined-adornment-password-login').type(Cypress.env('PASSWORD'))
    cy.get('.MuiBox-root .MuiButtonBase-root').click()
   
  });

  it('Navigation to Units', () => {
    cy.get('[data-testid="menu-wrapper"] [data-testid="StorageUnitRegularIcon"]').click()
    cy.wait(2000)
    //cy.pause()
    cy.get('.css-1bi5hhk .css-1r5dd06').then($btn => {
      const text = $btn.text()
      expect(text).to.contain('Individual Units') && expect(text).to.contain('Unit Groups')
    });

    cy.get('tbody tr').first().find('td').then( tableColumns => {
      cy.wrap(tableColumns).eq(3).should('contain', 'Austin Facility')
    })
    // add api check for the data
    //cy.intercept('GET', '/api/data').as('getData');
    //cy.wait('@getData');
    //data and count of records


  });

  it('Facility Dropdown', ()=>{
    cy.get('.css-ay0wdw #facility-button').click()
    cy.get('form div li').contains('Austin Facility 1').click()
    cy.get('form div button p').contains('Apply').click()
    cy.wait(1000)

    //cy.get('iframe').its('O.contentDocument.body').should('be.visible')
      //.get('#data-table-container-units tbody tr')
      //.each(cy.wrap(tableRow).find('td').eq(3).should('contain', 'Austin Facility 1'))
    cy.get('body #main-pane') 
    /*   .its('0.contentDocument.body').should('be.visible')
      .then(cy.wrap)
      .find('#data-table-container-units')
      .find('tbody') 
      .find('tr').each($row => {
        const cellText = $row.find('td').eq(3).text().trim();
    
        // Check that the cell text is 'Austin Facility 1'
        expect(cellText).to.equal('Austin Facility 1');
      });
     */
  })
})