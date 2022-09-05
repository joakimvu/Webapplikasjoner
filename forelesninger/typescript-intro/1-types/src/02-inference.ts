/**
 * Siden vi bruker `const` holder det at vi lar typescript infere(detektere/gjette) på typen.
 * Og her vil den infere at `stringConstant` har typen `string` nærmere bestemt literal typen `"Hey"`
 */
export const stringConstant = 'Hey'

/**
 * Her får vil Typescript bare infere typen `string` ikke at den er literal typen `"Hey"`.
 * Det er på grunn av at om vi bruker en `let` vil vi som oftest endre innholdet,
 * og om typen hadde vært `"Hey"` ville Typescript klaget om vi prøver og sende inn noe annet.
 */
export let stringLet = 'Hey'

/**
 * Her får vi feil siden vi ikke ikke gir Typescript noe info til å finne ut hvilken type som vi forventer her.
 * Og siden vi har konfigurert Typescript til å klage på implicit `any`, får vi en feil her.
 */
export let uninitializedLet: string

uninitializedLet = 5

/**
 * Dersom man deklarerer en variable som ikke blir eksportert fra filen,
 * vil Typescript tillate implicit any.
 *
 * Det er uansett good practise og ikke bruke `any` så langt det lar seg gjøre.
 * Om man ønsker kan man bruke eslint til å passe på at man ikke bruker `any`
 */
let uninitializedLocalLet
