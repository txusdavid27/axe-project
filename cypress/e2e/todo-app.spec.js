/// <reference types="cypress"/>

describe('Todo Application', () => {
    it('should log any accessibility failures',() => {
        cy.visit('https://todomvc.com/examples/react/dist/')
        cy.injectAxe();
    })

    it('should log any accessibility failures',() => {
        cy.checkA11y();
    })

    it('should exclude specific elements on the page',() => {
        cy.checkA11y({ exclude: ['.learn']});
    })

    it('should only test specific elements on the page',() => {
        cy.checkA11y('.learn');
    })
    it('should include specific elements on the page',() => {
        cy.checkA11y(null, { includedImpacts: ['critical','serious']});
    })

    it('should exclude specific rule',() => {
        cy.checkA11y(null, { rules: {
            'color-contrast':{enabled:false}
        }})
    })
    
})