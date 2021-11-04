import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import register from "../../page_objects/register.page"

Given('I visit the page {string}', (page) => {
    cy.visit(page).then(() => {
        cy.get('[id="elementosForm"]').should('contain', 'Campo de Treinamento')
    })
})

And('that I fill in all the mandatory fields', () => {
    register.mainPage()
})

When('I click on Cadastrar', () => {
    register.registerButton()
})

Then('a message informing success must be displayed', () => {
    register.registerCompleted()
})