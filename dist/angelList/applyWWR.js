"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const applyWWR = async (page) => {
    try {
        await page.click();
        await page.keyboard.press("Enter");
    }
    catch (error) {
        console.log(error);
    }
};
exports.default = applyWWR;
