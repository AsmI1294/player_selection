let nameArray = [];
// Player Name List
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
// Player Name List
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
// Card creation
function createCard(object) {
  let parent = document.getElementById("playerCard");

  let child = document.createElement("div");
  child.classList.add(
    "col-lg-4",
    "col-md-6",
    "col-12",
    "border-secondary",
    "px-1"
  );

  child.innerHTML = `
    
    <div class="card w-100 text-bg-dark">
                  <img src="${object.image}" class="card-img-top cardImg" alt="Not found" />
                  <div class="card-body d-flex flex-column align-items-center">
                    <h3 class="card-title">${object.name}</h3>
                    <p class="card-text text-muted">
                      <small>${object.goals}</small> Goals . <small>${object.assist}</small> Assist
                    </p>
                    <button
                      class="btn text-white btn-outline-primary btn-lg border-white w-100"
                      onclick='namePicker(this)'
                    >
                      SELECT
                    </button>
                  </div>
                </div>
               
    `;
  parent.appendChild(child);
}
