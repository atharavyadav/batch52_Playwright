const { Given, When, Then, BeforeAll, AfterAll } = require("@cucumber/cucumber");
const browserManager = require("../pages/utils/browserManager");
const logger = require("../utils/logger");
const { expect } = require("assert");
const registerPages = require("../pages/utils/register.pages"); // Import RegisterPages

BeforeAll(async function () {
    await browserManager.launchBrowser(); // Launch the browser
});

AfterAll(async function () {
    await browserManager.closeBrowser(); // Close the browser
});

Given("the user is on the login page", async function () {
    const page = browserManager.getPage(); // Get the page object
    logger.info("Navigating to the login page...");
    await page.goto("https://demo.guru99.com/test/newtours/register.php");
    logger.info("Navigated to the login page.");
});

When("the user enters contact information {string} {string} {string} {string}", async function (firstname, lastname, phone, email) {
   
    registerPages.contactInformation(firstname, lastname, phone, email)
});

When("the user enters email information {string} {string} {string} {string} {string}", async function (address, city, state, postalcode, country) {
    const page = browserManager.getPage(); // Get the page object
    logger.info(`Filling email information: ${address}, ${city}, ${state}, ${postalcode}, ${country}`);
    await page.locator(registerPages.addressInput).fill(address);
    await page.locator(registerPages.cityInput).fill(city);
    await page.locator(registerPages.stateInput).fill(state);
    await page.locator(registerPages.postalCodeInput).fill(postalcode);
    await page.locator(registerPages.countryDropdown).selectOption(country);
    logger.info("Email information filled successfully.");
});

When("the user enters user information {string} {string}", async function (username, password) {
    const page = browserManager.getPage(); // Get the page object
    logger.info(`Filling user information: ${username}, ${password}`);
    await page.locator(registerPages.usernameInput).fill(username);
    await page.locator(registerPages.passwordInput).fill(password);
    await page.locator(registerPages.confirmPasswordInput).fill(password);
    await page.locator(registerPages.submitButton).click();
    logger.info("Clicked the submit button.");

    const usernamedata = await page.locator(`${registerPages.usernameConfirmationText}[contains(text(), "${username}")]`).textContent();
    logger.info(`Fetched username data: ${usernamedata}`);
    expect(usernamedata).toContain(`Note: Your user name is ${username}`);
});