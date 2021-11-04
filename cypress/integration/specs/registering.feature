
Feature: Registering 

    Scenario: Registering a pupil
        Given I visit the page "https://wcaquino.me/cypress/componentes.html"
        And that I fill in all the mandatory fields
        When I click on Cadastrar
        Then a message informing success must be displayed