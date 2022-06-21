"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCssVariables = void 0;
function setCssVariables(cssVars, styleObj) {
    Object.keys(cssVars).forEach((key) => {
        if (cssVars[key]) {
            styleObj[`--${key}`] = cssVars[key];
        }
    });
}
exports.setCssVariables = setCssVariables;
