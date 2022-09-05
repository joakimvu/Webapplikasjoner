export let stringOrNumber: string | number = 1

const toggleBetweenTypes = () => {
  if (typeof stringOrNumber === 'string') {
    stringOrNumber = parseInt(stringOrNumber)
  } else {
    stringOrNumber = stringOrNumber.toString()
  }
}

export const acceptNullableString = (input: string | null) => {
  if (input !== null) {
    console.log(input)
  } else {
    console.log('Input is null', input)
  }
}

export const acceptPossibleString = (input: string | undefined | null) => {
  if (typeof input === 'string') {
    console.log(input)
  } else if (input === null) {
    console.log('Input is null', input)
  } else {
    console.log('Input is undefined', input)
  }
}

export const asNumber = (input: string | number) => {
  if (typeof input === 'number') {
    return input
  } else {
    return parseFloat(input)
  }
}
