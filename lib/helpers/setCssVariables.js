"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCssVariables = void 0;
function setCssVariables(cssVars) {
    const newObj = {};
    Object.keys(cssVars).forEach((key) => {
        if (cssVars[key]) {
            newObj[`--${key}`] = cssVars[key];
        }
    });
    return newObj;
}
exports.setCssVariables = setCssVariables;
