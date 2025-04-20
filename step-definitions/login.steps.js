const { Given, When, Then, Before, After, BeforeAll, AfterAll } = require("@cucumber/cucumber");
const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");
const logger = require("../utils/logger"); // Import the logger

let browser, context, page;



// Before Hook: Launch the browser before each scenario
BeforeAll(async function () {
    logger.info("Launching the browser...");
    browser = await chromium.launch({ headless: false }); // Launch browser
    context = await browser.newContext();
    page = await context.newPage();
    logger.info("Browser launched successfully.");
});

// After Hook: Take a screenshot on failure and close the browser
AfterAll(async function (scenario) {
    if (browser) {
        logger.info("Closing the browser...");
        await browser.close();
        logger.info("Browser closed successfully.");
    }
});

Given("the user is on the login page", async function () {
    logger.info("Navigating to the login page...");
    await page.goto("https://demo.guru99.com/test/newtours/register.php");
    logger.info("Navigated to the login page.");
});

When("the user enters contact information {string} {string} {string} {string}", async function (firstname, lastname, phone, email) {
    logger.info(`Filling contact information: ${firstname}, ${lastname}, ${phone}, ${email}`);
    await page.locator('input[name="firstName"]').fill(firstname);
    await page.locator('input[name="lastName"]').fill(lastname);
    await page.locator('input[name="phone"]').fill(phone);
    await page.locator('#userName').fill(email);
    logger.info("Contact information filled successfully.");
});

When("the user enters email information {string} {string} {string} {string} {string}", async function (address, city, state, postalcode, country) {
    logger.info(`Filling email information: ${address}, ${city}, ${state}, ${postalcode}, ${country}`);
    await page.locator('input[name="address1"]').fill(address);
    await page.locator('input[name="city"]').fill(city);
    await page.locator('input[name="state"]').fill(state);
    await page.locator('input[name="postalCode"]').fill(postalcode);
    await page.locator("//select[@name='country']").selectOption(country);
    logger.info("Email information filled successfully.");
});


When("the user enters user information {string} {string}", async function (username, password) {
    logger.info(`Filling user information: ${username}, ${password}`);
    await page.locator('#email').fill('neelam123');
    await page.locator('input[name="password"]').fill('test123')
    await page.locator('input[name="confirmPassword"]').fill('test123');
    await page.getByRole('button', { name: 'Submit' }).click();
});