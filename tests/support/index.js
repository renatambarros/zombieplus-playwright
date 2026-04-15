const { test: base, expect } = require('@playwright/test') //Apelido base

const { LandingPage } = require('../pages/LandingPage')
const { LoginPage } = require('../pages/LoginPage')
const { Toast } = require('../pages/Components')
const { MoviesPage } = require('../pages/MoviesPage')

const test = base.extend({
    page: async ({ page }, use) => { // Criando um contexto
        await use({
            ...page, // Novo contexto terá todos os recursos do contexto original do Playwright
            landing: new LandingPage(page),
            login: new LoginPage(page),
            movies: new MoviesPage(page),
            toast: new Toast(page)

        }) // Page é o contexto padrão que vem do Playwright
    }
})

export { test, expect }