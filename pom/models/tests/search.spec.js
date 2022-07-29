// https://jestjs.io/docs/expect
const { default: test } = require('@playwright/test');
const LoginPage = require('../Login.page');
const HomePage = require('../Login.page');

describe('Applitools demo page', () => {
    jest.setTimeout(30000);
    let browser = null;
    let context = null;
    let page = null;
    let homePage  = null;
    let loginPage  = null;
    
    beforeAll( async ()=>{
        // we launch browser and navigate to the loginpage
        browser = await chromium.launch({ headless: false });
        context = await browser.newContext();
        page = await context.newPage();
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);
        await loginPage.navigate();
    });
    
    afterAll( async ()=>{
        // closing browser
        await context.close();
        await browser.close();
    });
    
    test('Should be able to login', async() => {
        loginPage = new LoginPage(this.page);
        await loginPage.login('Eddie Munson','hellfireclub');
        homePage = new HomePage
        expect(await this.title).not.toBeNull();
        await expect(this.loggedUser).toBeVisible();
    })
    
    test('search for metal band', async() => {
        homePage = new HomePage(this.page);
        await homePage.advancedSearch();
        await expect(page).toHaveURL('https://www.metal-archives.com/search/advanced/?searchString=&type=');
        await homePage.advancedSearch('Metallica');
    });
    
    test('should return results', async() => {
        expect(this.page.locator('#band_stats')).toBeVisible()
        expect(this.page.locator('#band_tabs')).toBeVisible()
        expect(this.page.locator('.band_comment')).toBeVisible()
        expect(this.page.locator('#photo')).toBeVisible()
    })
    test('search for samba band', async() => {
        await homePage.advancedSearch();
        await homePage.advancedSearch('Molejo');
    }); 
    
    test('should not return results', async() => {
        await page.locator('text=No matches found. Please try with different search terms.').toBeVisible()
        await page.locator('text=You may set up/combine as many filters as you need.').click();
    })
})