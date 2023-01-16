import BasePage from '../basePage'

const selectors = {
	inputCep: 'input[id=cep]',
	inputEstado: 'input#estado',
	inputBairro: 'input#bairro',
	inputEndereco: 'input#endereco'
}
class ConsultaPage extends BasePage {
	pesquisarCep(cep) {
		cy.get(selectors.inputCep).type(cep)
	}
	pesquisarCepValido() {
		cy.fixture('data').then(data => {
			this.pesquisarCep(data.cepValido)
			cy.get(selectors.inputCep).type('{enter}')
			cy.on('window:alert', alertText => {
				expect(alertText).eq('Enviando consulta do CEP ' + data.cepValido)
			})
			cy.get(selectors.inputEstado).should('have.value', data.endValido.estado)
			cy.get(selectors.inputBairro).should('have.value', data.endValido.bairro)
			cy.get(selectors.inputEndereco).should('have.value', data.endValido.endereco)
		})
	}
	pesquisarCepInvalido() {
		cy.fixture('data').then(data => {
			this.pesquisarCep(data.cepInvalido)
			cy.get(selectors.inputCep).type('{enter}')
			cy.on('window:alert', alertText => {
				expect(alertText).eq('CEP inválido: ' + data.cepInvalido)
			})
		})
	}
}
export default ConsultaPage
