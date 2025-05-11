// const { Given, When, Then, BeforeAll, AfterAll } = require("@cucumber/cucumber");
// const browserManager = require("../pages/utils/browserManager"); // Corrected path
// const logger = require("../utils/logger");
// const { expect } = require("assert");

// BeforeAll(async function () {
//     await browserManager.launchBrowser(); // Launch the browser
// });

// AfterAll(async function () {
//     await browserManager.closeBrowser(); // Close the browser
// });

// Given("user navigte to the datable reference", async function () {
//     const page = browserManager.getPage(); // Get the page object
//     logger.info("Navigating to the login page...");
//     await page.goto("https://demo.guru99.com/test/web-table-element.php");
//     logger.info("Navigated to the login page.");
// });
// When("user fetches the total row and columns values", async function () {
//     const page = browserManager.getPage(); 
//     let length =  await page.locator("//table[@class='dataTable']//tr").count();
//     for(let i=1;i<=length;i++)
//     {
//         let columncount = await page.locator("//table[@class='dataTable']//tr["+i+"]//td").count()
//         console.log("count of each column for the row is" + columncount)
//         for(let j=1;j<columncount;j++)
//         {
//             let rowdata = await page.locator("//table[@class='dataTable']//tr["+i+"]//td["+j+"]").allInnerTexts()
//             console.log("all the data is" + rowdata)
//         }
      
       
//     }
// });

