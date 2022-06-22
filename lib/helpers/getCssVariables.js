"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCssVariables = void 0;
function getCssVariables(cssVars) {
    const newObj = {};
    Object.keys(cssVars).forEach((key) => {
        if (cssVars[key]) {
            newObj[`--${key}`] = cssVars[key];
        }
    });
    return newObj;
}
exports.getCssVariables = getCssVariables;
