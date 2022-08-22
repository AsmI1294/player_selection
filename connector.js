const neymer = {
  name: "Neymer Jr.",
  image: "./images/neymer.jfif",
  goals: 36,
  assist: 200,
  price: 1000,
};
const zidane = {
  name: "Zinedine Zidane",
  image: "./images/zidane.jfif",
  goals: 36,
  assist: 200,
  price: 1000,
};
const messi = {
  name: "Leonel Messi",
  image: "./images/messi.jfif",
  goals: 36,
  assist: 200,
  price: 1000,
};
const ronaldo = {
  name: "Cristiano Ronaldo",
  image: "./images/ronaldo.jfif",
  goals: 36,
  assist: 200,
  price: 1000,
};
const ozil = {
  name: "Mesut Özil",
  image: "./images/ozil.jfif",
  goals: 36,
  assist: 200,
  price: 1000,
};
const kodu = {
  name: "Jodu Kodu",
  image: "./images/kodu.jpg",
  goals: 36,
  assist: 200,
  price: 1000,
};

createCard(zidane);
createCard(ozil);
createCard(neymer);
createCard(messi);
createCard(ronaldo);
createCard(kodu);
let nameArray = [];

function namePicker(element) {
  if (nameArray.length >= 5) {
    document.getElementById("alert").classList.remove("d-none");
    return;
  } else {
    let name = element.parentNode.children[0].innerText;
    element.parentNode.children[2].setAttribute("disabled", "");
    element.parentNode.children[2].innerText = "SELECTED";
    nameArray.push(name);
    console.log(nameArray);
    addToTable(nameArray);
  }
}
function addToTable(array) {
  let target = document.getElementById("table");
  let child = document.createElement("tr");

  for (let name of array)
    child.innerHTML = `
    <th scope="row">${array.length}.</th>
                <td>${name}</td>
    `;
  target.appendChild(child);
}
