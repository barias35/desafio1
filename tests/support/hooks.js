const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

// Configura el navegador antes de cada escenario y ciérralo después
Before(async function () {
    const headless = process.env.HEADLESS === 'false';
    this.browser = await chromium.launch({ headless });   
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
});

After(async function () {
    await this.page.close();
    await this.context.close();
    await this.browser.close();
});