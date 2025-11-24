const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

// Inicializar el navegador antes de cada escenario
Given('I am on the DemoQA login page', async function () {
  await this.page.goto("https://demoqa.com/login");
});

//Coloca usuario y contraseña
When('I enter username {string} and password {string}', async function (username, password) {
  await this.page.fill('#userName', username);
  await this.page.fill('#password', password);
});

//Click en el boton login
When('I click the login button', async function () {
  await this.page.click('#login');
});

//Verifica que se haya logueado correctamente - NameTag del usuario
Then('I should see the user profile page', async function () {
  const usrTag = await this.page.textContent('#userName-value');
  expect(usrTag.length).toBeGreaterThan(0);
});

//Verifica que aparezca un mensaje de error al ingresar mal los datos
Then('I should see an error message', async function () {
  const errorMsg = await this.page.textContent('#name');
  expect(errorMsg.length).toBeGreaterThan(0);
});