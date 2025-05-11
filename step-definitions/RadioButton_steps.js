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
    const page = await browserManager.getPage();
    let countofEle = await page.locator("//input[@name='radioButton']").count();
    console.log("Count of radio buttons is " + await countofEle)

       for(let i=1;i<=await countofEle;i++)
       {
          let gettext = await page.locator("(//input[@name='radioButton'])["+i+"]").getAttribute("value");
          console.log("all 3 radio valuea re " +await  gettext)
          if(await gettext=="radio2")
          {
            await page.locator("(//input[@name='radioButton'])["+i+"]").click()
          }
       }

    // for(let i=1;i<=await countofEle;i++)
    // {
    //     if(i==2)
    //     {
    //          await page.locator("(//input[@name='radioButton'])["+i+"]").click()
    //     }
       
    // }
});

When("Validate if Radio button was selected {string}", async function (assertion) {
   
});

AfterAll(async function () {
    logger.info("Closing the browser...");
    await browserManager.closeBrowser();
    logger.info("Browser closed successfully.");
});