import { expect, it } from 'vitest'
import { convertToRomanNumeral } from './roman-numeral'

it('should return roman I when passed 1', () => {
  expect(convertToRomanNumeral(1)).toEqual('I')
})

it('should return roman II when passed 2', () => {
  expect(convertToRomanNumeral(2)).toEqual('II')
})

it('should return roman III when passed 3', () => {
  expect(convertToRomanNumeral(3)).toEqual('III')
})

it('should throw error when unimplmented number is passed', () => {
  expect(() => convertToRomanNumeral(99999999)).toThrowError()
})
