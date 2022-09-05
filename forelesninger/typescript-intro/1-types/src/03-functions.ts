/**
 * Typescript greier og infere typen som returneres av en funksjon
 */
export const returnsNumber = () => 1000101

/**
 * Her greier ikke Typescript infere typen til argumentet i funksjonen,
 * Typescript har rett og slett ingen verdier og gjøre sine antagelser basert på.
 */
export const acceptsString = (input: string) => {
  console.log(
    `Received string with length of ${input.length} and value of "${input}"`,
  )
}
