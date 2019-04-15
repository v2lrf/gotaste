import {
  displayPhoneNumber,
  displayURL,
  capitalizeFirstLetter
} from './textHelpers'

describe('textHelpers', () => {
  describe('displayPhoneNumber', () => {
    const nonFormattedPhoneNumber = '88888888'
    const preFormattedPhoneNumber = '88 88 88 88'
    const funkyFormattedPhoneNumber = '88 888 888'
    const expectedPhoneNumber = '88 88 88 88'

    it('formats a non formatted phone number correctly', () => {
      expect(displayPhoneNumber(nonFormattedPhoneNumber)).toEqual(
        expectedPhoneNumber
      )
    })

    it('formats a pre formatted phone number correctly', () => {
      expect(displayPhoneNumber(preFormattedPhoneNumber)).toEqual(
        expectedPhoneNumber
      )
    })

    it('formats a funky formatted phone number correctly', () => {
      expect(displayPhoneNumber(funkyFormattedPhoneNumber)).toEqual(
        expectedPhoneNumber
      )
    })
  })

  describe('displayURL', () => {
    const secureURL = 'https://govinu.com'
    const nonSecureURL = 'http://govinu.com'
    const trailingSpaceUrl = 'https://govinu.com/'
    const expectedURL = 'govinu.com'

    it('formats a secure url correctly to display', () => {
      expect(displayURL(secureURL)).toEqual(expectedURL)
    })

    it('formats a non secure url correctly to display', () => {
      expect(displayURL(nonSecureURL)).toEqual(expectedURL)
    })

    it('formats a URL with a trailing space correctly to display', () => {
      expect(displayURL(trailingSpaceUrl)).toEqual(expectedURL)
    })
  })

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
