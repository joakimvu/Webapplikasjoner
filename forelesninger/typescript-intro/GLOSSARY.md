# Glossary

Forstår du ikke typescript feilmeldingen lim meldingen inn her [Typescript Error Translator](https://ts-error-translator.vercel.app/), eller om du bruker VSCode kan du installere den som en [extension](https://marketplace.visualstudio.com/items?itemName=mattpocock.ts-error-translator). 

## Infer / inference

Norsk-ish oversettelse: Detektere / gjette

Typescript finner ut hva typen til noe er basert på en verdi eller bruken av en verdi.

### Eksempel 1

```ts
const stringConstant = 'Hello'
```

Fordi en `const` ikke kan bli endret på vet Typescript at `stringConstant` alltid vil ha verdien `"Hello"`, da *Infer*-er Typescript at typen til `stringConstant` vil være [Literal typen](#literal-type) `"Hello"`.

### Eksempel 2

```ts
const getFirstValue = (arrayOfStrings: string[]) => {
  const firstValue = arrayOfStrings[0]
}
```

Fordi man henter ut en verdi fra en variabel som er en array med bare strings vet Typescript at verdien du da får også er en string. Men siden Typescript ikke vet lengden på array-en vil den kunne si at du får `string` eller `undefined`, siden det kan være at man prøver og hente ut en verdi på en index som ikke finnes.

## Literal type

Norsk-ish oversettelse: Bokstavelig type

En literal type er en form for presisering av en type, verdien er `false` ikke bare `boolean` som er den mer generelle typen. 

### Eksempel

For eksempel når man lager konstanter som får typen sin [infered](#infer--inference) vil en konstant få typen til verdien. Så en konstant initialisert med `"Hello"` vil ha typen `"Hello"`, og da vil man kunne bruke den i funksjoner som eksplisitt ber om variabler med typen `"Hello"`, men siden `"Hello"` er en string-verdi vil man også kunne bruke den steder hvor man forventer noen med typen `string`.

```ts
const helloValue = "Hello"

const stringValue: string = "Hello or something else?!"

const acceptHello = (helloString: "Hello") => console.log(helloString)
const acceptString = (anyString: string) => console.log(anyString)

acceptHello(helloValue)
acceptHello(stringValue) // her får man en error

acceptString(helloValue) // her får man ikke error
acceptString(stringValue)
```

## Implicit / explicit

Implicit betyr a noe er [infered](#infer--inference) til å være en type.

Explicit vil si at vi spesifiserer selv hvilken type en variabel/argument/retur-type er.

```ts
const implicitReturnType = () => Math.random() >= 0.5

const explicitReturnType = (): boolean => Math.random() >= 0.5
```