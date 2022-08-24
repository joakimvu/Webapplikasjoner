// TODO: Sett startverdien for de ulike tellerene
let wordCounter = 0;
let positionCounter = 0;
let wrongCounter = 0;

// TODO: Lag en liste med ulike ord
const words = [
  "Liam",
  "Olivia",
  "Noah",
  "Emma",
  "Oliver",
  "Charlotte",
  "Elijah",
  "Amelia",
  "James",
  "Ava",
  "William",
  "Sophia",
  "Benjamin",
  "Isabella",
  "Lucas",
  "Mia",
  "Henry",
  "Evelyn",
  "Theodore",
];

// TODO: Hent ut HTML #id og knappen
const word = document.getElementById("word");
const wrongs = document.getElementById("wrongs");
const letter = document.getElementById("letter");
const button = document.querySelector("button");
const setWord = () => {
  // TODO: Skriv ut ordet som brukeren skal skrive eller en medling om at det ikke er flere ord igjen
  if (wordCounter < words.length - 1) {
    word.innerHTML = words[wordCounter];
  } else {
    letter.innerHTML = "Det er ikke flere ord igjen";
  }
};

const changeWord = () => {
  // TODO: Nullstill posisjonstelleren
  positionCounter = 0;
  // TODO: Oppdater telleren vi bruker for å velge ut ord
  wordCounter += 1;
  setWord();
};

// TODO: Sjekk vi har skrevet riktig bokstav. Må ta hensyn til plassen i ordet vi skal skrive
const checkPosition = (word, position, letter) => {
  //   console.log(word, position, letter);
  //   console.log(words[wordCounter].charAt(position).toLowerCase());
  console.log(word.charAt(position).toLowerCase());
  console.log(letter);
  if (word.charAt(position).toLowerCase() === letter) {
    return true;
  }
};

// TODO: Sjekk om posisjonen vi er på er lik lengden på ordet vi skal skrive. Det betyr at vi er ferdig med ordet og kan bytte ord
const wordIsCorrect = (word, position) => {
  if (position === word.length) {
    return true;
  }
};

const handleKeyUp = ({ key }) => {
  // TODO: Hent ut ordet vi skal skrive
  const word = words[wordCounter];
  if (checkPosition(word, positionCounter, key)) {
    // TODO: Øk posisjonstelleren
    positionCounter += 1;
    if (wordIsCorrect(word, positionCounter)) {
      // TODO: Trigg funksjonen som bytter ord
      changeWord();
    }
  } else {
    // TODO: Oppdater telleren for "feil"
    wrongCounter += 1;
    wrongs.innerHTML = wrongCounter;
  }
  updateUI(key);
};

const updateUI = (key) => {
  if (words[wordCounter]) {
    wrongs.innerHTML = wrongCounter;
    letter.innerHTML = key;
    word.innerHTML = `<span class="green">${words[wordCounter].slice(
      0,
      positionCounter
    )}</span>${words[wordCounter].slice(positionCounter)}`;
  }
};

window.addEventListener("keyup", handleKeyUp);
button.addEventListener("click", () => {
  button.disabled = true;
  setWord();
});
