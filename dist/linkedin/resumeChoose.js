"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resumeChoose = async (page) => {
    try {
        await page.waitForSelector('[aria-label="Continue to next step"]');
        await page.click('[aria-label="Continue to next step"]');
    }
    catch (error) {
        console.log(error);
    }
};
exports.default = resumeChoose;
