const { Given, When, Then, BeforeAll, AfterAll } = require("@cucumber/cucumber");
const browserManager = require("../pages/utils/browserManager");
const logger = require("../utils/logger");

BeforeAll(async function () {
    logger.initialize(); // Initialize the logger
    logger.log("Launching the browser...");
    await browserManager.launchBrowser();
    logger.log("Browser launched successfully.");
});

Given("Navigate to the Radio Button",async function() {
  const page = browserManager.getPage();
    logger.log("Navigating to the login page...");
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    logger.log("User is on the login page.");

})

When("Radio button is selected {string}",async function(RadioButton) {
 const page = browserManager.getPage();
 let count = await page.locator("//input[@name='radioButton']").count();
 logger.log("count of radio button is"+ count)

})

When("Validate if Radio button was selected {string}",async function(assertion) {


})


AfterAll(async function () {
    logger.log("Closing the browser...");
    await browserManager.closeBrowser();
    logger.log("Browser closed successfully.");
});