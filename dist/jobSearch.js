"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jobSearch = async (page, job, location) => {
    try {
        await page.waitForSelector('.jobs-search-box__text-input.jobs-search-box__keyboard-text-input');
        await page.type('.jobs-search-box__text-input.jobs-search-box__keyboard-text-input', job);
        await page.waitForSelector('[aria-label="City, state, or zip code"]');
        await page.type('[aria-label="City, state, or zip code"]', location);
        await page.keyboard.press("Enter");
        await page.waitForSelector('.jobs-search-results-list__header');
        await page.waitForSelector('[data-control-name="jobdetails_topcard_inapply"]');
        await page.click('[data-control-name="jobdetails_topcard_inapply"]');
        const jobs = await page.evaluate(() => {
            const elements = document.querySelectorAll('[itemtype="http://schema.org/ItemList"] li div a');
            const arr = [];
            for (let elem of elements) {
                arr.push(elem.textContent);
            }
            return arr;
        });
        console.log(jobs);
    }
    catch (error) {
        console.log(error);
    }
};
exports.default = jobSearch;
