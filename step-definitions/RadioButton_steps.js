const { Given, When, Then, BeforeAll, AfterAll } = require("@cucumber/cucumber");
const browserManager = require("../pages/utils/browserManager");
const logger = require("../utils/logger");

BeforeAll(async function () {
    await browserManager.launchBrowser(); // Launch the browser
});

Given("Navigate to the Radio Button", async function () {
    const page = browserManager.getPage(); // Get the page object
    logger.info("Navigating to the login page...");
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    logger.info("User is on the login page.");
});

When("Radio button is selected {string}", async function (RadioButton) {
    const page = browserManager.getPage();
    let count = await page.locator("//input[@name='radioButton']").count();
    logger.info("Count of radio buttons is " + count);
});

When("Validate if Radio button was selected {string}", async function (assertion) {
    const page = browserManager.getPage();
    const isSelected = await page.locator("//input[@name='radioButton']:checked").count() > 0;
    logger.info("Radio button selected: " + isSelected);
    if (assertion === "True" && !isSelected) {
        throw new Error("Expected a radio button to be selected, but none were.");
    }
    if (assertion === "False" && isSelected) {
        throw new Error("Expected no radio button to be selected, but one was.");
    }
});

AfterAll(async function () {
    logger.info("Closing the browser...");
    await browserManager.closeBrowser();
    logger.info("Browser closed successfully.");
});