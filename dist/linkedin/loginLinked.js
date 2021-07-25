"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config({ path: '.env' });
const jobSearch_1 = require("./jobSearch");
const login = async (page, email = "hello", password = "world") => {
    try {
        await page.goto(url);
        await page.waitForSelector('#username');
        await page.type("#username", email);
        await page.waitForSelector("#password");
        await page.type("#password", password);
        await page.waitForSelector('.btn__primary--large.from__button--floating');
        await page.click('.btn__primary--large.from__button--floating');
        await page.goto(url2);
        await jobSearch_1.default(page, searchJob, searchLocation);
    }
    catch (error) {
        console.log(error);
    }
};
const searchJob = 'react';
const searchLocation = 'Remote';
const url = "https://www.linkedin.com/login/";
const url2 = "https://www.linkedin.com/jobs/";
exports.default = login;
