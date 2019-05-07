import {
  displayPhoneNumber,
  displayURL,
  capitalizeFirstLetter,
  formatOpeningHours,
  translateWeekDay
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
    const secureURL = 'https://gotaste.dk'
    const nonSecureURL = 'http://gotaste.dk'
    const trailingSpaceUrl = 'https://gotaste.dk/'
    const expectedURL = 'gotaste.dk'

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

  describe('translateWeekDay', () => {
    const correctWeekDay = 'Monday'
    const fakeWeekday = 'Foo'

    it('should translate a correct weekday', () => {
      expect(translateWeekDay(correctWeekDay)).toEqual('Mandag')
    })

    it('should not translate a fake weekday', () => {
      expect(translateWeekDay(fakeWeekday)).toEqual(null)
    })
  })

  describe('formatOpeningHours', () => {
    const opens = '2019-04-24 08:00:00 UTC'
    const closes = '2019-04-24 20:00:00 UTC'

    xit('should format opening hours correct', () => {
      expect(formatOpeningHours(opens, closes)).toEqual('09:00 - 21:00')
    })

    xit('should return closed if no opening or closing hours is given', () => {
      expect(formatOpeningHours(null, null)).toEqual('Lukket')
    })
  })
})
