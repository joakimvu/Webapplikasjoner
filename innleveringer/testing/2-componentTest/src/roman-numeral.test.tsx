import {expect, it} from "vitest"
import { convertToRomanNumera } from "./roman-numeral"

it.skip("should return roman M when passed 1000", () => {
    expect(convertToRomanNumera(1000)).toEqual("M")
})

