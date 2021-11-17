
import { by, element, ElementFinder } from "protractor";
import { protractor } from "protractor/built/ptor";
import { PageBase } from "./page";

const testData = require("../../config/data.json");

export class GooglePageObject extends PageBase {
    
    private textBox: ElementFinder = element(by.css("[name='q']"));

    async goToGooglePage(){
        await this.getOnPage(testData.url);
    }

    async tiktokResearch(){
        await this.fillField(this.textBox, "tiktok");
    }

    async clickOnSubmit(){
        await this.textBox.sendKeys(protractor.Key.ENTER);
    }

}
