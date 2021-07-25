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
        const form = await page.evaluate(() => {
            if (document.querySelector('[data-control-name="continue_unify"]')) {
                return true;
            }
            else {
                return false;
            }
            ;
        });
        if (form) {
            await page.click('[aria-label="Dismiss"]');
        }
    }
    catch (error) {
        console.log(error);
    }
};
exports.default = questionPage;
