export function setCssVariables = (cssVars, styleObj) => {
  for (const [key, value] of Object.entries(cssVars)) {
    if (value) {
      styleObj[`--${key}`] = value
    }
  }
};
