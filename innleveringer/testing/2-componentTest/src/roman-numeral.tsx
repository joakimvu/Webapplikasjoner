
export const convertToRomanNumera = (number: number): string => {
    const romanNumber = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
      };

    let result = ""

    // Got algorytm from this page
    // https://javascript.plainenglish.io/leetcode-12-integer-to-roman-javascript-21459e45a0ee

    Object.keys(romanNumber).map((key) => {
        result += key.repeat(Math.floor(number / romanNumber[key]));
        number %= romanNumber[key]
    })


    return result
}
