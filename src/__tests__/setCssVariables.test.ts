import { setCssVariables } from '../helpers/setCssVariables'

describe('check setCssVariables', () => {
  test('should match a valid UUID', () => {
    const cssVars = {
      color: 'red',
      background: 'green',
      innerBackground: '' // should not include this key/value into object as it is empty
    }
    const styles = setCssVariables(cssVars)
    expect(styles).toStrictEqual({ '--color': 'red', '--background': 'green' })
  })
})
