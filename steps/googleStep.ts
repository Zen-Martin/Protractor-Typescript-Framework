import { GooglePageObject } from "../pages/googlePage";

const { Given, Then } = require("cucumber");

const search: GooglePageObject = new GooglePageObject();

Given("I am on google search page", async () => {
    await search.goToGooglePage();
});

Then("I make research", async () => {
    await search.tiktokResearch();
    await search.clickOnSubmit();
});