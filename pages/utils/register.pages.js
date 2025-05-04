const browserManager = require("./browserManager");
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

    async navigateToLoginPage() {
        const page = browserManager.getPage(); // Get the page object
        logger.info("Navigating to the login page...");
        await page.goto("https://demo.guru99.com/test/newtours/register.php");
        logger.info("Navigated to the login page.");
    }

    async enterContactInformation(firstname, lastname, phone, email) {
        const page = browserManager.getPage(); // Get the page object
        logger.info(`Filling contact information: ${firstname}, ${lastname}, ${phone}, ${email}`);
        await page.locator(this.firstNameInput).fill(firstname);
        await page.locator(this.lastNameInput).fill(lastname);
        await page.locator(this.phoneInput).fill(phone);
        await page.locator(this.emailInput).fill(email);
        logger.info("Contact information filled successfully.");
    }

    async enterEmailInformation(address, city, state, postalcode, country) {
        const page = browserManager.getPage(); // Get the page object
        logger.info(`Filling email information: ${address}, ${city}, ${state}, ${postalcode}, ${country}`);
        await page.locator(this.addressInput).fill(address);
        await page.locator(this.cityInput).fill(city);
        await page.locator(this.stateInput).fill(state);
        await page.locator(this.postalCodeInput).fill(postalcode);
        await page.locator(this.countryDropdown).selectOption(country);
        logger.info("Email information filled successfully.");
    }

    async enterUserInformation(username, password) {
        const page = browserManager.getPage(); // Get the page object
        logger.info(`Filling user information: ${username}, ${password}`);
        await page.locator(this.usernameInput).fill(username);
        await page.locator(this.passwordInput).fill(password);
        await page.locator(this.confirmPasswordInput).fill(password);
        await page.locator(this.submitButton).click();
        logger.info("Clicked the submit button.");
    }

    async verifyUsername(username) {
        const page = browserManager.getPage(); // Get the page object
        const usernamedata = await page.locator(`${this.usernameConfirmationText}[contains(text(), "${username}")]`).textContent();
        logger.info(`Fetched username data: ${usernamedata}`);
        if (!usernamedata.includes(`Note: Your user name is ${username}`)) {
            throw new Error(`Expected username confirmation text not found. Actual: ${usernamedata}`);
        }
        logger.info("Username verification successful.");
    }
}

module.exports = new RegisterPages();