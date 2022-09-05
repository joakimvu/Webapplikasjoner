import { asNumber } from './08-union-types'

const acceptArray = (input: Array<unknown>) => {
  console.log(input)
}
const acceptNumberArray = (input: number[]) => {
  console.log(input)
}
const acceptStringArray = (input: string[]) => {
  console.log(input)
}

export const acceptArrayOf = <T>(input: Array<T>) => {
  console.log(input)
}

const numberArray = [1, 2, 3, '4']

acceptArrayOf<number>(numberArray)

export const transformToNumberArray = <T extends string | number>(
  input: T[],
): number[] => {
  return input.map((value) => asNumber(value))
}
