"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import nextJobCard  from './nextJobCard';
const emailChose_1 = require("./emailChose");
const resumeChoose_1 = require("./resumeChoose");
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
        //finally{
        //const jobCards=await page.$$('.jobs-search-results.display-flex.flex-column button')
        //console.log(jobCards)
        //nextJobCard(jobCards, 1);
        //}
        try {
            emailChose_1.default(page);
        }
        catch {
            resumeChoose_1.default(page);
        }
        emailChose_1.default(page);
        try {
            resumeChoose_1.default(page);
            await page.click('[data-control-name="continue_unify"]');
            await page.waitForSelector('[type="text"]');
            const questions = await page.$$('[type="text"]');
            for (let i = 0; i < questions.length; i++) {
                await questions[i].click();
                await page.keyboard.press('Backspace');
                await questions[i].type('1');
            }
        }
        catch (error) {
            //await page.click('[aria-label="Dismiss"]');
            //await page.click('[data-control-name="discard_application_confirm_btn"]')
            console.log(error);
        }
    }
    catch (error) {
        console.log(error);
    }
};
exports.default = jobSearch;
