function createCard(object) {
  let parent = document.getElementById("playerCard");

  let child = document.createElement("div");
  child.classList.add("col-4", "border-secondary", "px-1");

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
