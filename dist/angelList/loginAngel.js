"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const applyWWR_1 = require("./applyWWR");
const loginAngel = async (page) => {
    try {
        await page.goto(urll);
        await page.waitForSelector("article ul .feature");
        const ar = await page.evaluate(() => {
            const elements = document.querySelectorAll('article ul .feature a');
            const arr = [];
            const regx = /remote-jobs/;
            for (let element of elements) {
                const wor = element.toString();
                if (regx.test(wor)) {
                    arr.push(wor);
                }
            }
            return arr;
        });
        for (let j = 0; j < ar.length; j++) {
            await page.goto(ar[j]);
            await page.waitForSelector('.company-card a[target="_blank"]');
            const getwebSite = await page.evaluate(() => {
                const jobWebsite = Array.from(document.querySelectorAll('.company-card a'));
                const jobLink = jobWebsite[3].toString();
                return jobLink;
            });
            console.log(getwebSite);
            await applyWWR_1.default(getwebSite, page);
        }
    }
    catch (error) {
        console.log(error);
    }
};
const urll = "https://weworkremotely.com/";
exports.default = loginAngel;
