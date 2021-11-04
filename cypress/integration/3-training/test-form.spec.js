
import cypress from "cypress";
import { Given } from "cypress-cucumber-preprocessor/steps";


Given('I visit the {string}', (url) => {
    cy.visit(url)
});


