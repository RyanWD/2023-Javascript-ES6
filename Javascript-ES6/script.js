// selectors
const select = document.querySelector("select");
const ternarySelect = document.querySelector(".ternarySelect");
const monthSelect = document.querySelector(".monthSelect");
const month = document.querySelector("span");
const list = document.querySelector("ul");
const paragraph = document.querySelector("p");
const switchParagraph = document.querySelector("p:nth-of-type(2)");
const body = document.querySelector("body");
const catsContainer = document.querySelector(".cats");
const catsButton = document.querySelector(".catsButton");
const mathsContainer = document.querySelector(".maths");
const mathsButton = document.querySelector(".mathsButton");

// listeners
select.addEventListener("change", setWeather);
select.addEventListener("change", switchSetWeather);

// if..else
function setWeather() {
  const choice = select.value;

  if (choice === "sunny") {
    paragraph.textContent = "it's sunny";
  } else if (choice === "rainy") {
    paragraph.textContent = "it's rainy";
  } else if (choice === "snowing") {
    paragraph.textContent = "it's snowing";
  } else if (choice === "overcast") {
    paragraph.textContent = "it's overcast";
  } else {
    paragraph.textContent = "";
  }
}

// switch
function switchSetWeather() {
  const choice = select.value;
  switch (choice) {
    case "sunny":
      switchParagraph.textContent = "switch sunny";
      break;
    case "snowing":
      switchParagraph.textContent = "switch snowing";
      break;
    case "rainy":
      switchParagraph.textContent = "switch rainy";
      break;
    case "overcast":
      switchParagraph.textContent = "switch overcast";
      break;
    default:
      switchParagraph.textContent = "";
  }
}

// ternary
ternarySelect.addEventListener("change", () =>
  ternarySelect.value === "black"
    ? updateTheme("black", "white")
    : updateTheme("white", "black")
);

function updateTheme(bgColor, textColor) {
  body.style.backgroundColor = bgColor;
  body.style.color = textColor;
}

// month select challenge
monthSelect.addEventListener("change", () => {
  const choice = monthSelect.value;
  let days = 0;
  switch (choice) {
    case "feb":
      days = 28;
      break;
    case "jan":
    case "mar":
    case "may":
    case "jul":
    case "aug":
    case "oct":
    case "dec":
      days = 31;
      break;
    case "apr":
    case "jun":
    case "sep":
    case "nov":
      days = 30;
      break;
  }

  createMonth(days, choice);
});

function createMonth(days, monthChoice) {
  list.innerHTML = "";
  month.textContent = monthChoice;
  for (let index = 1; index <= days; index++) {
    const listItem = document.createElement("li");
    listItem.textContent = index;
    list.appendChild(listItem);
  }
}

// loops / filter / map

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

catsContainer.style.display = "none";

catsButton.addEventListener("click", () => {
  catsContainer.innerHTML = "";

  if (catsContainer.style.display === "none") {
    catsContainer.style.display = "block";
  } else {
    catsContainer.style.display = "none";
  }

  for (const cat of cats) {
    const catName = document.createElement("p");
    catName.textContent = cat;
    catsContainer.appendChild(catName);
  }

  const mapCats = cats.map(toUpper);
  for (const catUp of mapCats) {
    const catNameUpper = document.createElement("p");
    const breaker = document.createElement("br");
    catNameUpper.textContent = catUp;
    catsContainer.appendChild(breaker);
    catsContainer.appendChild(catNameUpper);
  }

  const catsFiltered = cats.filter(filterMyCats);
  console.log(catsFiltered);
  const catFilterL = document.createElement("p");
  catFilterL.textContent = catsFiltered;
  catsContainer.appendChild(catFilterL);

  const catString = document.createElement("p");
  for (let i = 0; i < cats.length; i++) {
    if (i === cats.length - 1) {
      catString.textContent += ` and ${cats[i]}`;
    } else {
      catString.textContent += ` ${cats[i]},`;
    }
  }
  catsContainer.appendChild(catString);
});

function toUpper(eachCatName) {
  return eachCatName.toUpperCase();
}

function filterMyCats(cat) {
  return cat.startsWith("L");
}

mathsButton.addEventListener("click", () => {
  // insertAdjacentHTML parses the specified text as HTML at a specified position. Just inside the element at the end
  for (let i = 1; i < 10; i++) {
    const newResult = `${i} x ${i} = ${i * i}`;
    mathsContainer.insertAdjacentHTML("beforeend", `${newResult}<br>`);
  }
  mathsContainer.insertAdjacentHTML("beforeend", "Finished!");
});

const nums = [1, 2, 3, 4, 5];

const numsSqrd = nums.map((num) => num * num);
console.log(numsSqrd);

const names = ["alice", "bob", "charlie", "danielle"];
const namesCapitalized = names.map((name) => {
  let newName = "";
  let split = name.split("");
  let first = split[0].toUpperCase();
  for (let index = 1; index < split.length; index++) {
    const element = split[index];
    newName += element;
  }
  return (first += newName);
});

const namesCapitalizedImproved = names.map(name => name[0].toUpperCase() + name.slice(1));
console.log(namesCapitalized);

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];

const pokemonPara = pokemon.map(poke => `<p>${poke}</p>`);
console.log(pokemonPara);
// functions

const filterCatsAsAfunction = cats.filter((cat) => cat.startsWith("L"));
console.log(filterCatsAsAfunction);

let myThing = [
  {item: 'bannana', price: 55},
  {item: 'orange', price: 5},
  {item: 'pear', price: 33},
  {item: 'strawberry', price: 5}
]
function explode(s) {
  return s.split('').reduce((result, char) => {
    console.log("each iteration", result)
    return result + char
      
  }, '')
}


const reducingPrice = myThing.reduce((total, current) => total + current.price, 0)
const reducingItems = myThing.reduce((fullSentence, current) => fullSentence + current.item + ' ')
const reducingObjects = myThing.reduce((groupedObjects, current) => {
  const price = current.price
  console.log(groupedObjects[price])
  if (groupedObjects[price] == null) groupedObjects[price] = []
  groupedObjects[price].push(current)
  return groupedObjects
}, {})
console.log(reducingPrice)
console.log(reducingItems)
console.log(reducingObjects)


