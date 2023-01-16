import ConsultaPage from '../support/pages/consultaPage'
const consultaPage = new ConsultaPage()
describe('Testes de validação de CEP', () => {
	it('Verificar CEP valido', () => {
		consultaPage.acessarUrl()
		consultaPage.pesquisarCepValido()
	})
	it('Verificar CEP invalido', () => {
		consultaPage.acessarUrl()
		consultaPage.pesquisarCepInvalido()
	})
})
