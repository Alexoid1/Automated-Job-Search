"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const login = async (page, email = "hello", password = "world") => {
    try {
        await page.goto(url);
        await page.waitForSelector('#username');
        await page.type("#username", email);
        await page.waitForSelector("#password");
        await page.type("#password", password);
        await page.waitForSelector('.btn__primary--large.from__button--floating');
        await page.click('.btn__primary--large.from__button--floating');
    }
    catch (error) {
        console.log(error);
    }
};
const url = "https://www.linkedin.com/login/";
exports.default = login;
