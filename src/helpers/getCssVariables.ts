interface StringMap {
  [key: string]: string;
}

export function getCssVariables (cssVars: StringMap) {
  const newObj: StringMap = {}
  Object.keys(cssVars).forEach((key) => {
    if (cssVars[key]) {
      newObj[`--${key}`] = cssVars[key]
    }
  })
  return newObj
}
