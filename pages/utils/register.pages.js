const logger = require("../../utils/logger");

class RegisterPages {
    constructor() {
        // XPath locators
        this.firstNameInput = 'input[name="firstName"]';
        this.lastNameInput = 'input[name="lastName"]';
        this.phoneInput = 'input[name="phone"]';
        this.emailInput = '#userName';
        this.addressInput = 'input[name="address1"]';
        this.cityInput = 'input[name="city"]';
        this.stateInput = 'input[name="state"]';
        this.postalCodeInput = 'input[name="postalCode"]';
        this.countryDropdown = "//select[@name='country']";
        this.usernameInput = '#email';
        this.passwordInput = 'input[name="password"]';
        this.confirmPasswordInput = 'input[name="confirmPassword"]';
        this.submitButton = '//button[contains(text(), "Submit")]';
        this.usernameConfirmationText = '//b[contains(text(), "Note: Your user name is ")]';
    }

    async contactInformation(firstname,lastname,phone,email)
    {
        const page = browserManager.getPage(); // Get the page object
        logger.info(`Filling contact information: ${firstname}, ${lastname}, ${phone}, ${email}`);
        await page.locator(RegisterPages.firstNameInput).fill(firstname);
        await page.locator(RegisterPages.lastNameInput).fill(lastname);
        await page.locator(RegisterPages.phoneInput).fill(phone);
        await page.locator(RegisterPages.emailInput).fill(email);
        logger.info("Contact information filled successfully.");
    }
}

module.exports = new RegisterPages();