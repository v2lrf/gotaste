import { simpleFormat } from './currencyHelpers'

describe('currencyHelpers', () => {
  describe('simpleFormat', () => {
    it('should add proper formatting when given a whole number', () => {
      expect(simpleFormat(150)).toEqual('150,00 kr.')
    })

    it('should add proper formatting when given a float', () => {
      expect(simpleFormat(199.95)).toEqual('199,95 kr.')
    })
  })
})
