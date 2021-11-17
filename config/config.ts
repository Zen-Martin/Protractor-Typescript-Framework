import { browser, Config } from "protractor";

export const config: Config = {
    directConnect: true,
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    capabilities: {
        browserName: "chrome",
    },

    specs: [
        "../../features/*.feature",
    ],

    cucumberOpts: {
        require: ["../steps/*.js"]
    },

    onPrepare: () => {
        browser.manage().window().maximize();
    },

};
