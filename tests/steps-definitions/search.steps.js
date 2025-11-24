const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

//Navega a la pagina de libros
Given('I am on the DemoQA books page', async function () {
  await this.page.goto('https://demoqa.com/books');
  await this.page.waitForSelector('#searchBox', { timeout: 10000 }); // Espera hasta que el buscador esté visible
});

//Inicia busqueda por titulo de libro
When('I search for the book {string}', async function (bookTitle) {
  await this.page.fill('#searchBox', bookTitle);
});

//Verifica resultados de busqueda
Then('I should see {string} in the results', async function (bookTitle) {
  const result = await this.page.locator('.rt-tbody .rt-tr-group').first().locator('.rt-td').nth(1).textContent();
  expect(result).toContain(bookTitle);
});

//Verifica que no hay resultados en la busqueda
Then('I should see no books in the results', async function () {
  const rows = await this.page.locator('div.rt-noData').textContent();
  expect(rows).toContain("No rows found");
});