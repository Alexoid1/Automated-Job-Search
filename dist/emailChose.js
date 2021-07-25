"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const emailChose = async (page) => {
    try {
        await page.waitForSelector('.fb-dropdown__select');
        await page.click('.fb-dropdown__select');
        await page.keyboard.press("ArrowDown");
        await page.keyboard.press("Enter");
    }
    catch (error) {
        console.log(error);
    }
};
exports.default = emailChose;
