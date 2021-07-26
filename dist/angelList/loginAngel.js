"use strict";
//import applyWWR from './applyWWR';
Object.defineProperty(exports, "__esModule", { value: true });
const loginAngel = async (page) => {
    try {
        await page.goto(urll);
        await page.waitForSelector("article ul .feature");
        const ar = await page.evaluate(() => {
            const elements = document.querySelectorAll('article ul .feature a');
            const arr = [];
            let regx = /remote-jobs/;
            for (let element of elements) {
                const wor = element.toString();
                if (regx.test(wor)) {
                    arr.push(wor);
                }
            }
            return arr;
        });
        console.log(ar);
    }
    catch (error) {
        console.log(error);
    }
};
const urll = "https://weworkremotely.com/";
exports.default = loginAngel;
