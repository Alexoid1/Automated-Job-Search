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
        try {
            await page.waitForSelector('[data-control-name="jobdetails_topcard_inapply"]');
            await page.click('[data-control-name="jobdetails_topcard_inapply"]');
        }
        catch {
            await page.waitForSelector('[data-control-name="shareProfileThenExternalApplyControl"]');
            await page.click('[data-control-name="shareProfileThenExternalApplyControl"]');
        }
        await page.waitForSelector('.fb-dropdown__select');
        await page.click('.fb-dropdown__select');
        await page.keyboard.press("ArrowDown");
        await page.keyboard.press("Enter");
        try {
            await page.waitForSelector('[aria-label="Continue to next step"]');
            await page.click('[aria-label="Continue to next step"]');
            await page.click('[data-control-name="continue_unify"]');
        }
        catch {
            await page.click('[aria-label="Dismiss"]');
            await page.click('[data-control-name="discard_application_confirm_btn"]');
        }
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
