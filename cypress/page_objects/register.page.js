

const xp_last_name = '//*[@data-cy="dataSobrenome"]'
const xp_register_success = '//span[contains(.,"Cadastrado!")]'
const xp_sex = '//*[@id="formSexo"]//input[1]'
const xp_food = '//label[@for="formComidaVegetariana"][contains(.,"Vegetariano")]'
const xp_click_button = '(//input[@value="Clique aqui"])[2]'

export default class RegisterPage {


  static mainPage = () => {

    cy.get('[id="buttonSimple"]').click().should('have.value', 'Obrigado!')

    for (let n = 0; n < 4; n++) {
      const somaClick = '[id="buttonCount"]'
      cy.get(somaClick).click()
    }

    cy.get('[id="buttonCount"]').should('have.value', '11111')

    cy.get('#formNome').type('Giovanna').should('have.value', 'Giovanna')
    cy.xpath(xp_last_name).should('be.visible').type('Rodrigues').should('have.value', 'Rodrigues')
    cy.get('#formSexo input').eq(1).click().should('be.checked')
    cy.xpath(xp_sex).check()
    cy.xpath(xp_food).should('contain', 'Vegetariano').click()
    cy.get('[id="formEscolaridade"]').select('Superior').should('have.value', 'superior')
    cy.get('[id="formEsportes"]')
      .select('Natacao', 'Karate', { ctrlKey: true, multiple: true })
      .invoke('val')
      .should('include', 'natacao')
    const textType = 'Testando input de infos'
    cy.get('[id="elementosForm:sugestoes"]').type(`${textType}`).should('have.value', 'Testando input de infos')
    cy.window().should('have.property', 'alert').should('be.a', 'function')
    const stub = cy.stub()
    cy.on('window:alert', stub)
    cy
      .xpath(xp_click_button).click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('Maria')
      })

    cy.get('table#tabelaUsuarios tbody tr input[type=text]').eq(1)
      .click().type('hello')

    cy.get('table#tabelaUsuarios tbody tr input[type=checkbox]').eq(4)
      .check().should('be.checked')
      .uncheck().should('not.checked')
  }

  static registerButton = () => {
    cy.get('[id="formCadastrar"]').click().should('have.value', 'Cadastrar')
  }

  static registerCompleted = () => {
    cy.xpath(xp_register_success).should('have.text', 'Cadastrado!')
  }
}

