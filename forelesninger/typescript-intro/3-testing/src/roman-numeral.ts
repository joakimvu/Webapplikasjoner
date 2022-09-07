export const convertToRomanNumeral = (number: number): string => {
  switch (number) {
    case 1:
      return 'I'
    case 2:
      return 'II'
    case 3:
      return 'IIV'
    default:
      throw new Error('Unimplemented number')
  }
}
