const { Given, When, Then, BeforeAll, AfterAll } = require("@cucumber/cucumber");
const browserManager = require("../pages/utils/browserManager");
const logger = require("../utils/logger");
const Rsgisterpage = require("../pages/utils/register.pages")

BeforeAll(async function () {
    await browserManager.launchBrowser(); // Launch the browser
});

AfterAll(async function () {
    await browserManager.closeBrowser(); // Close the browser
});

Given("the user is on the login page", async function () {
    await Rsgisterpage.navigateToLoginPage(); // Call the method from LoginPages
});

When("the user enters contact information {string} {string} {string} {string}", async function (firstname, lastname, phone, email) {
    await Rsgisterpage.enterContactInformation(firstname, lastname, phone, email); // Call the method from LoginPages
});

When("the user enters email information {string} {string} {string} {string} {string}", async function (address, city, state, postalcode, country) {
    await Rsgisterpage.enterEmailInformation(address, city, state, postalcode, country); // Call the method from LoginPages
});

When("the user Rsgisterpage user information {string} {string}", async function (username, password) {
    await loginPages.enterUserInformation(username, password); 
    await Rsgisterpage.verifyUsername(username); // Call the method from LoginPages// Call the method from LoginPages
});
