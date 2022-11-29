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
const searchInput = document.getElementById("name");
const filterInput = document.getElementById("age");
const filterButton = document.getElementById("filter");

const userUl = document.getElementById("users");

const createTableUI = (users) => {
  userUl.innerHTML = null;
  userUl.innerHTML += `<li><span>Id</span><span>Navn</span><span>Alder</span></li>`;
  for (const user of users) {
    userUl.innerHTML += `<li><span>${user.id}</span><span>${user.name}</span><span>${user.age}</span></li>`;
  }
};

const handleSearch = () => {
  // TODO: Hent ut verdien fra søke input feltet
  const searchName = searchInput.value;
  if (searchName) {
    // Bruk .find for å finne navnet til den brukeren som matcher søkeordet
    const searchResult = users.find((user) =>
      user.name.toLowerCase().includes(searchName.toLowerCase())
    );
    if (searchResult) {
      // TODO: Oppdatere grensesnittet med createTableUI og resultatet av søket
      createTableUI([searchResult]);
    } else {
      // TODO: Oppdatere grensesnittet med userUl.innerHTML og en passende tekst når vi ikke finner noe
      userUl.innerHTML = `Fant ingen med navn ${searchName}`;
    }
  } else {
    // TODO: Hvis ingen søkeord vis default liste med brukere via createTableUI
    createTableUI(users);
  }
};

const handleFilter = () => {
  // Henter ut verdien vi har skrevet i filterboksen
  const filterValue = filterInput.value;
  // Sjekker om filterverdien finnes og er et tall (hvis ikke så viser vi den standard listen)
  if (filterValue && Number(filterValue)) {
    const filterResult = users.filter((user) => user.age > filterValue);
    if (filterResult && filterResult.length > 0) {
      createTableUI(filterResult);
    } else {
      userUl.innerHTML = `Fant ingen over ${filterValue} år`;
    }
  } else {
    // Skriv ut default liste om filterverdien er tom
    createTableUI(users);
  }
};

const main = () => {
  createTableUI(users);
};

main();

searchInput.addEventListener("keyup", handleSearch);
filterButton.addEventListener("click", handleFilter);
