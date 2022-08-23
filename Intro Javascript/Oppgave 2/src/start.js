const names = [
  "Trude",
  "Simen",
  "Lars",
  "Ali",
  "Finn",
  "Kåre",
  "Hanne",
  "Åse",
  "Anne",
  "Amanda",
  "Morgan",
];
const users = [];

const createRandomAge = () => {
  return Math.floor(Math.random() * 100 + 1);
};

const createUsers = (userCount) => {
  for (let i = 0; i < userCount; i++) {
    const user = {
      id: i,
      name: names[i],
      age: createRandomAge(),
    };
    users.push(user);
  }
};
createUsers(10);

// TODO: Hent HTML #id med getElementById
const userList = document.getElementById("users");
// TODO: Lag en funksjon som kan brukes til å skrive ut HTMLen for å se brukerene. Du kan bruke users importert over for å hente en liste med 10 brukere
userList.innerHTML += `<li><h4>Id</h4><h4>Name</h4><h4>Age</h4></li>`;
users.forEach(
  (user) =>
    (userList.innerHTML += `<li><span>${user.id}</span><span>${user.name}</span><span>${user.age}</span></li>`)
);
// TODO: Lag en funksjon som håndterer søket og oppdaterer grensesnittet med resultatet fra søket
const inputName = document.getElementById("name");

const searchName = (e) => {
  userList.innerHTML = null;
  userList.innerHTML += `<li><h4>Id</h4><h4>Name</h4><h4>Age</h4></li>`;

  // Skriver ut ny liste basert på søk etter navn
  users.forEach((user) => {
    if (user.name.toLowerCase().includes(inputName.value.toLowerCase())) {
      userList.innerHTML += `<li><span>${user.id}</span><span>${user.name}</span><span>${user.age}</span></li>`;
    }
  });
  console.log(filteredUsers);
};
// TODO: Lag en funksjon som håndterer filteret og oppdaterer grensesnittet med resultatet fra filteret
// TODO: Lytt til tastatur klikk på søkefeltet, den skal trigge søkefunksjonen (handleSearch)
inputName.addEventListener("keyup", searchName);
// TODO: Lytt til klikk på filter-knappen, den skal trigge filterfunksjonen (handleFilter)
