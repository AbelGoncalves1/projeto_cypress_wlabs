![Desafio cypress ](https://user-images.githubusercontent.com/107372782/212780853-8f82e6f0-cc72-4627-8845-c601c6989a74.png)



[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)
# Projeto Cypress WLabs
Projeto Cypress | Para pesquisa de CEP

### Versões de plugins e framework

Para esse projeto foram usadas as versões dos seguintes plugins e framework:
- Cypress 12.3.0 (atual quando o projeto foi desenvolvido)
- Node 18.13.0 (LTS atual quando o projeto foi desenvolvido)
- Cypress Mochawesome Reporter 3.2.3 (atual quando o projeto foi desenvolvido)
- Prettier 2.8.2 (atual quando o projeto foi desenvolvido)

### IDEs sugeridas [Cypress documentation](https://docs.cypress.io/guides/tooling/IDE-integration.html#Extensions-amp-Plugins):
- VsCode
- Intellij 

### Oficial framework links:

- [Cypress website](https://www.cypress.io/).

<br>

## Dependências

você irá precisar instalar o Node.js para executar o projeto.
Faça download da última versão estável do Node [here](https://nodejs.org/en/).

Depois de completar a instalação do node, você irá precisar clonar o repositório

## instalando as dependências

Abra a pasta do reósitório e instale todas as depêndencias.
Execute:

> ```bash
> npm install
> ```

---
<br>

## Como executar os testes com a Interface do Cypress

Cypress nos dá a possibilidade de rodar os testes com a interface de execução, isso nos permite debugar e desenvolver testes muito mais rápido
To do this, just run the following command:

> ```bash
> npm run cy:open
> ```

Com esse comando, o Cypress irá abrir a interface e você poderá selecionar o browser do teste que você deseja executar. E também você poderá executar todos os testes clicando em "Run All Specs".

---

## Como executar o Cypress com CLI

Nós podemos criar várias maneiras de executar o Cypress. Para fazer isso, nós precisamos criar comandos no package.json, localizado na raiz do repositório. Temos alguns comandos para facilitar o uso do projeto, que são:

> ```bash
> # Executa os testes via CLI e gera o arquivo de report dos testes na pasta reports:
> npm run cy:run
> 
> # Executa o prettier e formata todo o projeto com os padrões definidos no arquivo .prettierrc 
> npm run prettier:write
> ```

