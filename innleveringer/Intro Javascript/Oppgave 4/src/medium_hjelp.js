// TODO: Bruk getElementById til å hente HTML med #id
const desc = document.getElementById("desc");
// TODO: Bruk querySelector til å hente knappen
const numbersUl = document.getElementById("numbers");
const guessUl = document.getElementById("guess");
const button = document.querySelector("button");
// TODO: Lag en liste med tallene som skal sorteres
const numbers = [32, 24, 51, 52, 44, 15, 23];
let guessList = [];

const getGuess = () => {
  // TODO: Bruk querySelectorAll på guessUl for å hente ut alle input feltene
  let guesses = document.querySelectorAll("input");
  // TODO: Bruk Array.from() for å gjøre om verdiene du får til "ekte" liste
  guessList = [];
  guesses.forEach((guess) => guessList.push(Number(guess.value)));
  // TODO: Bruk .map for å hente ut verdiene i input feltene og returner denne
};

const checkNumberSeq = () => {
  // TODO: Lag logikken som sjekker om du har sortert riktig
  // Tips: Bruk getGuess() for å få "det som er gjettet"
  getGuess();
  // Tips: Bruk .sort() .join()
  console.log(numbers.sort().join());
  console.log(guessList.join());
  if (numbers.sort().join() === guessList.join()) {
    alert("Du har sortert riktig");
  } else {
    alert("Du har sortert feil");
  }
};

const addInputUI = () => {
  // TODO: Bruk for-of (eller vanlig for-løkke) og guessUl til å lage li-elementer med input elementer for å kunne skrive inn hva som skal sorteres
  // FOR metode
  //   for (i = 0; i < numbers.length; i++) {
  //     guessUl.innerHTML += `<li><input type=text></li>`;
  //   }
  // FOR OF metode
  //   for (const num of numbers) {
  //     guessUl.innerHTML += `<li><input type=text></li>`;
  //   }
  // FOREACH metode
  numbers.forEach((number) => {
    guessUl.innerHTML += `<li><input type=text></li>`;
  });
};

const addNumbersUI = () => {
  // TODO: Bruk for-of (eller vanlig for-løkke) og numbersUl til å lage li-elementer med tallene som skal sorteres
  numbers.forEach((number) => {
    numbersUl.innerHTML += `<li>${number}</li>`;
  });
};

const createUI = () => {
  addNumbersUI();
  addInputUI();
};

createUI();

button.addEventListener("click", checkNumberSeq);
