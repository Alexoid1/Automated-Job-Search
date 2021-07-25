"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const applyWWR_1 = require("./applyWWR");
const loginAngel = async (page) => {
    try {
        await page.goto(urll);
        await page.waitForSelector("article ul .feature");
        const features = await page.$$('.feature');
        for (let i = 0; i < features.length; i++) {
            applyWWR_1.default(features[i]);
        }
    }
    catch (error) {
        console.log(error);
    }
};
const urll = "https://weworkremotely.com/";
exports.default = loginAngel;
