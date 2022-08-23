// Oppgave 1
const removeText = document.getElementById("remove");
const removeTextBtn = document.getElementById("remove-btn");

const remove = () => {
  removeText.innerHTML = null;
};

removeTextBtn.addEventListener("click", remove);

// Oppgave 2
const changeText = document.getElementById("change");
const changeTextBtn = document.getElementById("change-btn");

const change = () => {
  changeText.innerHTML = "Teksten er endret";
};

changeTextBtn.addEventListener("click", change);

// Oppgave 3
const inputText = document.getElementById("input-text");

const removeDefaultText = () => {
  inputText.innerHTML = null;
};

const newText = (e) => {
  removeDefaultText();
  const input = document.getElementById("input").value;
  console.log(input);
  inputText.innerHTML = input;
};

input.addEventListener("keyup", newText);

// Oppgave 4
const myList = ["item one", "item two", "item three"];

const ul = document.getElementById("ul");
const writeListBtn = document.getElementById("write-list");

const writeList = () => {
  myList.forEach((item) => (ul.innerHTML += `<li>${item}</li>`));
};

writeListBtn.addEventListener("click", writeList);

// Oppgave 5
const placeholder = document.getElementById("placeholder");
const select = document.getElementById("select");
const text = document.getElementById("text");
const createBtn = document.getElementById("create");

const createElement = () => {
  const htmlElement = select.value;
  const elementText = text.value;
  placeholder.innerHTML += `<${htmlElement}>${elementText}</${htmlElement}>`;
};

createBtn.addEventListener("click", createElement);

Oppgave 6