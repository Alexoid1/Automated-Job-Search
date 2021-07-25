"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const questionPage = async (page) => {
    try {
        await page.waitForSelector('[type="text"]');
        const questions = await page.$$('[type="text"]');
        for (let i = 0; i < questions.length; i++) {
            await questions[i].click();
            await page.keyboard.press('Backspace');
            await questions[i].type('1');
        }
        await page.waitForSelector('footer [data-control-name="review_unify"]').click();
        //await page.click('[aria-label="Review your application"]');
    }
    catch (error) {
        console.log(error);
    }
};
exports.default = questionPage;
