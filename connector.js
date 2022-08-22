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
const salah = {
  name: "Mohamed Salah",
  image: "./images/salah.jfif",
  goals: 36,
  assist: 200,
  price: 1000,
};
const ruben = {
  name: "Rúben Dias",
  image: "./images/ruben.jpg",
  goals: 36,
  assist: 200,
  price: 1000,
};
const jamal = {
  name: "Jamal Bhuyan",
  image: "./images/jamal.jpg",
  goals: 36,
  assist: 200,
  price: 1000,
};
// any number of cards can be created here
createCard(zidane);
createCard(ozil);
createCard(neymer);
createCard(messi);
createCard(ronaldo);
createCard(kodu);
createCard(jamal);
createCard(ruben);
createCard(salah);
// Event listner with validation for budget part
document.getElementById("calcP").addEventListener("click", function () {
  if (
    nameArray.length == 0 ||
    document.getElementById("perPlayer").value == "" ||
    isNaN(parseInt(document.getElementById("perPlayer").value)) == true
  ) {
    document.getElementById("alertBudget").classList.remove("d-none");
  } else {
    if (
      document.getElementById("alertBudget").classList.contains("d-none") ==
      false
    ) {
      document.getElementById("alertBudget").classList.add("d-none");
    }
    document.getElementById("playerExpenses").innerText =
      parseInt(document.getElementById("perPlayer").value) * nameArray.length;
    document.getElementById("perPlayer").value = "";
  }
});
document.getElementById("calcT").addEventListener("click", function () {
  let playerExpenses = document.getElementById("playerExpenses");
  let managerExp = document.getElementById("managerExp");
  let coachExp = document.getElementById("coachExp");
  let total = document.getElementById("total");
  if (
    playerExpenses.innerText == "" ||
    managerExp.value == "" ||
    coachExp.value == "" ||
    isNaN(parseInt(managerExp.value)) == true ||
    isNaN(parseInt(coachExp.value)) == true
  ) {
    document.getElementById("alertBudget").classList.remove("d-none");
  } else {
    if (
      document.getElementById("alertBudget").classList.contains("d-none") ==
      false
    ) {
      document.getElementById("alertBudget").classList.add("d-none");
    }
    total.innerText =
      parseInt(playerExpenses.innerText) +
      parseInt(managerExp.value) +
      parseInt(coachExp.value);
    managerExp.value = "";
    coachExp.value = "";
  }
});
