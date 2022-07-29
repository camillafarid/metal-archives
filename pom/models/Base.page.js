const playwright = require('playwright');

class BasePage{
    constructor(page){
        this.page = page;
    }
    /**
     * Method to navigate to path passed
     * @param {string} path 
     */
    async navigate(path) {
        const browser = await playwright.chromium.launch({
          headless: false,
        });
        const context = await browser.newContext();
        this.page = await context.newPage();
        await this.page.goto(`https://www.metal-archives.com/${path}`)
      }
}
module.exports = BasePage;