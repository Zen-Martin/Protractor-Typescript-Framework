const { AfterAll } = require("cucumber");
import { browser } from "protractor";

AfterAll(async () => {
    await browser.quit();
});
