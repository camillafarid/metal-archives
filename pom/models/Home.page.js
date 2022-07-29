const BasePage = require('./Base.page');
const { chromium } = require('playwright');

class HomePage extends BasePage {
    constructor(page){
        // calling the parent class BasePage constructor - inheritance
        super(page);
        //selectors
        this.loggedUser = '.member_name';
        this.bandNameInput = '#bandName';
        this.btnSubmit = '.btn_submit';
        this.btnAdvancedSearch = '.defaultButton';
        this.btnAdvanced = 'text=Advanced search';
        this.title = '#message';
    }
    /**
    * Method to retrieve the username 
    * @returns {string} username logged
    */
    async getUserName(){
        return this.loggedUser;
    }
        /**
    * Method to navigate to Advanced Search 
    */
    async advancedSearch(){
        this.btnAdvanced.click()
    }

    /**
    * Method to retrieve band result
    * @param {string} bandName : 'Mayhem', 'Burzum', 'Limbonic Art'
    */
    async searchBand(band){
        await this.bandNameInput.type(band.bandName)
        await this.btnAdvancedSearch.click();
    }
    /**
    * Method to navigate to home page using parent's method
    */
    async navigate(){
        await super.navigate(''); 
    }
}
module.exports = HomePage;