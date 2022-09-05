const multiplyBy2 = (number: number) => number * 2

export const processIfIsNumber = (input: unknown) => {
  if (typeof input === 'number') {
    const processed = multiplyBy2(input)
    console.log(`The input was a number, result is: ${processed}`)
  } else {
    console.log(
      'The input was not a number, therefore calling multiplyBy2 gives an error',
    )
    multiplyBy2(input)
  }
}

const typeOfFn = (input: unknown) => typeof input

export const asNumber = (input: unknown): number => {
  if (typeof input === 'number') {
    return input
  } else if (typeof input === 'string') {
    return Number(input)
  } else {
    throw new Error(
      'Not able to convert to number, must be number type or string',
    )
  }
}
