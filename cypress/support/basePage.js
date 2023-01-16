class BasePage {
	acessarUrl() {
		cy.fixture('data').then(data => {
			cy.visit(data.baseUrl)
		})
	}
}
export default BasePage
