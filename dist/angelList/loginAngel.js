"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loginAngel = async (page, email = 'tyrt') => {
    try {
        await page.goto(urll);
        await page.waitForSelector('#user_email');
        await page.type("#user_email", email);
    }
    catch (error) {
        console.log(error);
    }
};
const urll = "https://angel.co/login";
exports.default = loginAngel;
