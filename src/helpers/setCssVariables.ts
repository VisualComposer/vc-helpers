interface StringMap {
  [key: string]: string;
}

export function setCssVariables(cssVars: StringMap, styleObj: StringMap) {
  Object.keys(cssVars).forEach((key) => {
    if (cssVars[key]) {
      styleObj[`--${key}`] = cssVars[key]
    }
  })
}
