"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nextJobCard = async (jobCards, index) => {
    try {
        await jobCards[index].click();
    }
    catch (error) {
        console.log(error);
    }
};
exports.default = nextJobCard;
