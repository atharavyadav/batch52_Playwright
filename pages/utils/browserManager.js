const { chromium } = require("playwright");
const logger = require("../../utils/logger"); // Corrected path

class BrowserManager {
    constructor() {
        this.browser = null;
        this.context = null;
        this.page = null;
    }

    async launchBrowser() {
        logger.info("Launching the browser...");
        this.browser = await chromium.launch({ headless: false }); // Launch browser
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
        logger.info("Browser launched successfully.");
    }

    async closeBrowser() {
        try {
            if (this.browser) {
                logger.info("Closing the browser...");
                await this.browser.close();
                logger.info("Browser closed successfully.");
            }
        } catch (error) {
            logger.error("Error occurred while closing the browser:", error);
            throw error;
        }
    }

    getPage() {
        if (!this.page) {
            throw new Error("Browser is not launched. Call launchBrowser() first.");
        }
        return this.page;
    }
}

module.exports = new BrowserManager();