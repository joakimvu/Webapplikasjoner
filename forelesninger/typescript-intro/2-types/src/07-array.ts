export const stringArray = ['a', 'b', 'c']

/**
 * Når man typer en array har man to måter, typen som arrayen (Grunntype) innholder etterfulgt av []: `Grunntype[]`,
 * eller som en Generic likt Java/C# el. `Array<Grunntype>`
 */
export const acceptNumberArray = (input: number[]) => {
  let sumOfArray = 0
  input.forEach((number) => {
    sumOfArray += number
  })
  return sumOfArray
}

// export const acceptNumberArray = (input: Array<number>) => {}

export const acceptArrayWithAnyContent = (input: any[]) => {
  console.log(`Recevied array: ${input}`)
}

const processIfIsArray = (input: unknown) => {
  // Dersom `input` er en array vil typeof resultere i "object"
  if (typeof input === 'array') {
    acceptArrayWithAnyContent(input)
  }
  if (Array.isArray(input)) {
    acceptArrayWithAnyContent(input)
  }
}

processIfIsArray([])
