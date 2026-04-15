const { expect } = require('@playwright/test')

class MoviesPage {

    constructor(page) {
        this.page = page
    }

    async isloggedIn() {
        //Até que o tráfego de rede seja finalizado
        await this.page.waitForLoadState('networkidle')
        await expect(this.page).toHaveURL(/.*admin/)
    }
    async create(movie) {
        await this.page.locator('a[href$="register"]').click()

        //await this.page.locator('#title').fill(title)
        await this.page.getByLabel('Titulo do filme').fill(movie.title)
        await this.page.getByLabel('Sinopse').fill(movie.overview)

        await this.page.locator('#select_company_id .react-select__control')
            .click()

        //Para identificar a lista do elemento "Distribuido por" no html
        /*const html = await this.page.content()
        console.log(html)*/

        await this.page.locator('.react-select__option')
            .filter({ hasText: movie.company })
            .click()

        await this.page.locator('#select_year .react-select__indicator')
            .click()

        await this.page.locator('.react-select__option')
            .filter({ hasText: movie.release_year })
            .click()

        await this.page.getByRole('button', {name: 'Cadastrar'}).click()

    }
}

module.exports = { MoviesPage }
