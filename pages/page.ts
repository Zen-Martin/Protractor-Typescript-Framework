import { browser, ElementFinder, ProtractorExpectedConditions } from "protractor";

export class PageBase {

    private ec: ProtractorExpectedConditions = browser.ExpectedConditions;
    private timeOut = 5000;

    public async click(element: ElementFinder) {
        await browser.wait(this.ec.elementToBeClickable(element), this.timeOut,
            "Failed to click the element");
        await element.click();
    }

    public async getOnPage(data: string){
        browser.ignoreSynchronization = true;
        await browser.get(data);
    }

    public async fillField(element: ElementFinder, testData: string) {
        await this.visibilityOf(element);
        await element.sendKeys(testData);
    }

    private async visibilityOf(element: ElementFinder) {
        await browser.wait(this.ec.visibilityOf(element), this.timeOut,
            "Element is not visible");
    }

    public async switchToFrame(frameNumber: number) {
        await browser.switchTo().frame(frameNumber);
    }

    public async mouseHoverAndClick(element: ElementFinder) {
        await browser.actions()
            .mouseMove(await element.getWebElement())
            .click()
            .perform();

    }

    public async moveToElement(element: ElementFinder) {
        await browser.actions()
            .mouseMove(await element.getWebElement())
            .perform();
    }



}