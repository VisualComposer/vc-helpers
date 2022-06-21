import { setCssVariables } from '../helpers/setCssVariables'

describe('check setCssVariables', () => {
  test('should match a valid UUID', () => {
    const styles = {}
    const cssVars = {
      color: 'red',
      background: 'green'
    }
    setCssVariables(cssVars, styles)
    expect(styles).toStrictEqual({ '--color': 'red', '--background': 'green' })
  })
})
