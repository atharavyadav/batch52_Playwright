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

// When("Radio button is selected {string}", async function (RadioButton) {
//     const page = await browserManager.getPage();
//     let countofEle = await page.locator("//input[@name='radioButton']").count();
//     console.log("Count of radio buttons is " + await countofEle)

//        for(let i=1;i<=await countofEle;i++)
//        {
//           let gettext = await page.locator("(//input[@name='radioButton'])["+i+"]").getAttribute("value");
//           console.log("all 3 radio valuea re " +await  gettext)
//           if(await gettext==RadioButton)
//           {
//             await page.locator("(//input[@name='radioButton'])["+i+"]").click()
//             break;
//           }
//        }
// });

// When("Validate if Radio button was selected {string}", async function (assertion) {
//    const page = await browserManager.getPage();
//     await page.locator("//input[@id='autocomplete']").fill(assertion)
// });


When("dropdown value is selected {string}", async function (dropdown) {
   const page = await browserManager.getPage();
 await page.locator("//select[@id='dropdown-class-example']").click()

  let countofvalues = await page.locator("//select[@id='dropdown-class-example']//option").count()
  for(let i=2;i<=await countofvalues;i++){

    let allvalues = await page.locator("//select[@id='dropdown-class-example']//option["+i+"]").textContent()
    console.log("values are " + await allvalues)
    if(allvalues==dropdown)
    {
        await page.locator("//select[@id='dropdown-class-example']//option["+i+"]").click()
    }
  }
});

AfterAll(async function () {
    logger.info("Closing the browser...");
    await browserManager.closeBrowser();
    logger.info("Browser closed successfully.");
});