"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint @typescript-eslint/no-var-requires: "off" */
require('dotenv').config({ path: '.env' });
const startCloseBrowser_1 = require("./startCloseBrowser");
//import loginLinked from './linkedin/loginLinked';
const loginAngel_1 = require("./angelList/loginAngel");
const applyToJobs_1 = require("./applyToJobs");
const rizeTop_1 = require("./rizeTop");
const gotToAndDo = async (rizeTop) => {
    //const email = process.env.EMAIL;
    //const password = process.env.PASSWORD;
    let { page } = await startCloseBrowser_1.startBrowser();
    page.setViewport({ width: 1000, height: 700 });
    //await loginLinked(page, email, password);
    await loginAngel_1.default(page);
    if (rizeTop) {
        await rizeTop_1.default(page);
    }
    //await page.goto(url + search);
    await page.setViewport({ width: 500, height: 1000 });
    await page.addStyleTag({ content: "* {scroll-behavior: auto !important;}" });
    await applyToJobs_1.default(page);
};
const rizeTop = true;
(async () => {
    await gotToAndDo(rizeTop);
})();
