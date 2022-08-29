const prompt = require("prompt-sync")();

const rates = {
  dkk: 1.34,
  eur: 10,
  usd: 8,
};

const translations = {
  no: {
    welcomeMessage: "Norsk (no)",
    valueMessage: "Hvilken verdi skal du skal konvertere? ",
    currencies: {
      usd: "Amerikanske dollar",
      eur: "Euro",
      dkk: "Danske kroner",
    },
  },
  en: {
    welcomeMessage: "English (en)",
    valueMessage: "What value to convert? ",
    currencies: {
      usd: "American dollar",
      eur: "Euro",
      dkk: "Danish krone",
    },
  },
};

function inValidObject(object) {
  return (
    object === null ||
    object === undefined ||
    typeof object !== "object" ||
    Object.keys(object).length === 0
  );
}

function hasMatchingKeys(objectOne, objectTwo) {
  const objOneKeysAsString = Object.keys(objectOne).sort().join("");
  const objTwoKeysAsString = Object.keys(objectTwo).sort().join("");
  return objOneKeysAsString === objTwoKeysAsString;
}

function createWelcomeMessage(translations) {
  if (inValidObject(translations)) return null;

  let message = "";
  for (const language of Object.values(translations)) {
    message += `${language["label"]}${language["shortLabel"]} `;
  }
  return message;
}

function getWelcomeMessage(translations, key) {
  if (inValidObject(translations) || !key) return null;

  let message = "";
  for (const language of Object.values(translations)) {
    if (!language[key]) {
      return null
    }
    message += `${language[key]} `;
  }
  return message;
}

function isValidLanguage(translations, language) {
  return language && Object.keys(translations).includes(language);
}

function getValueMessage(translation) {
  if (inValidObject(translation) || !translation["valueMessage"]) return null;

  return translation["valueMessage"];
}

function getKeyValue(translation, key) {
  if (inValidObject(translation) || !key || !translation[key]) return null;

  return translation[key];
}

function handleConvertion(rate, value, decimals = 2) {
  return Number(Number(value) / Number(rate)).toFixed(decimals);
}

function getCurrencyMessage(currencies) {
  if (inValidObject(currencies)) return null;

  let message = "";

  for (const entry of Object.entries(currencies)) {
    const [short, long] = entry;
    message += `${long}(${short}) `;
  }

  return message;
}

function start(translations, rates) {
  if (inValidObject(translations) || inValidObject(rates)) {
    console.log("Provided arguments is not an object");
    return null;
  }

  // const welcomeMessage = createWelcomeMessage(translations);
  const welcomeMessage = getWelcomeMessage(translations, "welcomeMessage");
 
  if (!welcomeMessage) {
    console.log("Welcomemessage not formatted correctly");
    return null;
  }

  const language = prompt(welcomeMessage);

  if (!isValidLanguage(translations, language)) {
    console.log("Language not valid");
    return null;
  }

  const translation = translations[language];
  const currencies = translation["currencies"];

  if (!currencies || !hasMatchingKeys(currencies, rates)) {
    console.log("Currencies and rates does not match");
    return null;
  }

   // const valueMessage = getValueMessage(translation);
  const valueMessage = getKeyValue(translation, 'valueMessage');

  if (!valueMessage) {
    console.log("Valuemessage not formatted correctly");
    return null;
  }

  const value = prompt(valueMessage);
  const currencyMessage = getCurrencyMessage(currencies);
  
  if (!currencyMessage) {
    console.log("CurrencyMessage not formatted correctly");
    return null;
  }

  const currency = prompt(currencyMessage);

  return handleConvertion(rates[currency], value);
}

const result = start(translations, rates);
console.log(result);
// const currencies = {
//   dkk: {
//     label: {
//       no: "Danske kroner",
//       en: "Danish krone"
//     },
//     factor: 1.34
//   },
//   eur: {
//     label: {
//       no: "Euro",
//       en: "Euro"
//     },
//     factor: 10
//   },
//   usd: {
//     label: {
//       no: "Amerikanske dollar",
//       en: "American dollar"
//     },
//     factor: 8
//   }
// }


// function convertToEuro(value) {
//   return Number(value) / 10;
// }

// function convertToDollar(value) {
//   return Number(value) / 8;
// }

// function convertToDanish(value) {
//   return Number(value) / 1.34;
// }

// const language = prompt('Norwegian(no) or English(en)?: ')

// let currency;
// let value;
// let message= '';
// let result;

// if(language.toLowerCase() === "no") {
//   value = prompt("Hvilken verdi skal du konvertere: ");
//   for (const currency of Object.entries(currencies)) {
//     const key = currency[0];
//     const values = currency[1];
//     message += `${values.label["no"]}(${key}) | `;
//   }
// } else if (language.toLowerCase() === "en") {
//   value = prompt("What value to convert: ")
//   for (const currency of Object.entries(currencies)) {
//     const key = currency[0];
//     const values = currency[1];
//     message += `${values.label["en"]}(${key}) | `;
//   }
// }

// if (currency === "eur") {
//   result = convertToEuro(value)
// } else if (currency === "dkk") {
//   result = convertToDanish(value)
// } else if (currency === "usd") {
//   result = convertToDollar(value)
// } else {
//   console.log("Language not valid")
// }

// console.log(result)