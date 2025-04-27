const { Given, When, Then, BeforeAll, AfterAll } = require("@cucumber/cucumber");
const browserManager = require("../pages/utils/browserManager"); // Corrected path
const logger = require("../utils/logger");
const { expect } = require("assert");

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
    const page = browserManager.getPage(); // Get the page object
    logger.info(`Filling contact information: ${firstname}, ${lastname}, ${phone}, ${email}`);
    await page.locator('input[name="firstName"]').fill(firstname);
    await page.locator('input[name="lastName"]').fill(lastname);
    await page.locator('input[name="phone"]').fill(phone);
    await page.locator('#userName').fill(email);
    logger.info("Contact information filled successfully.");
});

When("the user enters email information {string} {string} {string} {string} {string}", async function (address, city, state, postalcode, country) {
    const page = browserManager.getPage(); // Get the page object
    logger.info(`Filling email information: ${address}, ${city}, ${state}, ${postalcode}, ${country}`);
    await page.locator('input[name="address1"]').fill(address);
    await page.locator('input[name="city"]').fill(city);
    await page.locator('input[name="state"]').fill(state);
    await page.locator('input[name="postalCode"]').fill(postalcode);
    await page.locator("//select[@name='country']").selectOption(country);
    logger.info("Email information filled successfully.");
});

When("the user enters user information {string} {string}", async function (username, password) {
    const page = browserManager.getPage(); // Get the page object
    logger.info(`Filling user information: ${username}, ${password}`);
    await page.locator('#email').fill(username);
    await page.locator('input[name="password"]').fill(password);
    await page.locator('input[name="confirmPassword"]').fill(password);
    await page.getByRole('button', { name: 'Submit' }).click();
    logger.info(`clicked the submit button`);

    const usernamedata = await page.locator(`//b[contains(text(), "Note: Your user name is ${username}")]`).textContent();
    logger.info(`Fetched username data: ${usernamedata}`);
    expect(usernamedata).toContain(`Note: Your user name is ${username}`);
});