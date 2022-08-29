const wordList = [
  "Huske",
  "Trene",
  "Danse",
  "Hoppe",
  "Sykle",
  "Gå",
  "Rulle",
  "Trille",
  "Kjøre",
  "Løpe",
  "Springe",
  "Hinke",
  "Sparke",
  "Sprinte",
  "Forflytte",
  "Trimme",
  "Løfte",
  "Snurre",
  "Svinge",
  "Svømme",
  "Flyte",
  "Fly",
  "Sveve",
  "Ake",
  "Dra",
];

// TODO Hente ut alle elementer
const spans = document.querySelectorAll("span")
const inputs = document.querySelectorAll("input")
const testButtonId = document.querySelector("#test")


const random = () => {
  return Math.floor(Math.random()*wordList.length)
}

const addWord = () => {
  [...spans].forEach((span) => (span.innerHTML = wordList[random()]))
  // Array.from(spans).forEach((span) => (span.innerHTML = wordList[random()]))
}

addWord()