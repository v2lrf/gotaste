import { getParameterByName } from '.'

describe('Helpers', () => {
  describe('getParameterByName', () => {
    const url = 'https://example.com?foo=bar&boo&lat=1.234'
    it('should find a value when searching for "foo"', () => {
      expect(getParameterByName('foo', url)).toBe('bar')
    })
    it('should find a value when searching for "lat"', () => {
      expect(getParameterByName('lat', url)).toBe('1.234')
    })
    it('should not find a value when searching for "boo" and return empty string', () => {
      expect(getParameterByName('boo', url)).toBe('')
    })
    it('should not find a value when searching for "baz" and return null', () => {
      expect(getParameterByName('baz', url)).toBe(null)
    })
  })
})
