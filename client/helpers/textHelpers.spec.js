import { capitalizeFirstLetter } from './textHelpers'

describe('textHelpers', () => {
  describe('capitalizeFirstLetter', () => {
    const testString = 'the quick brown fox jumps over the lazy dog'
    const outputString = 'The quick brown fox jumps over the lazy dog'

    it('should capitalize the first letter in a string', () => {
      expect(capitalizeFirstLetter(testString)).toEqual(outputString)
    })

    it('should return the same string if the first letter is already capitalized', () => {
      expect(capitalizeFirstLetter(outputString)).toEqual(outputString)
    })
  })
})
