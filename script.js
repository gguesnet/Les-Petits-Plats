// On sélectionne la partie du DOM où sont rendues les recettes
const DOM = document.querySelector(".card-group");

// Fonction de rendu des recettes
async function render(filter) {
  DOM.innerHTML = "";
  let data;
  if (filter === undefined) {
    data = await filterRecipe();
  } else {
    data = filter;
  }

  if (data.length === 0) {
    const error = `<h1>Aucune recette ne correspond à votre recherche</h1>`;
    DOM.insertAdjacentHTML("beforeend", error);
  }

  data.forEach((element) => {
    const ul = document.createElement("ul");

    element.ingredients.forEach((element) => {
      const li = `
      <li class="card-ingredient-title">
        ${element.ingredient[0].toUpperCase() + element.ingredient.slice(1)}:
        <span class="card-ingredient-quantity">
          ${element.quantity ? element.quantity : ""} ${
        element.unit ? element.unit : ""
      }
        </span>
      </li>
      `;

      ul.innerHTML += li;
    });

    const card = `
    <article class="card">
      <div class="card-thumb"></div>
      <div class="card-body">
        <div class="card-info">
          <h2 class="card-title">${element.name}</h2>
            <span class="card-timer">${element.time}m</span>
        </div>
        <div class="card-main">
          <div class="card-ingredient">
            <ul class="card-list">
            ${ul.innerHTML}
            </ul>
          </div>
          <div class="card-recipe">
            <p>${
              element.description.length > 370
                ? element.description.substring(0, 370) + "..."
                : element.description
            }</p>
          </div>
        </div>
      </div>
    </article>`;

    DOM.insertAdjacentHTML("beforeend", card);
  });
}

// Tableau des filtres
const ingredientArray = [];
const appareilArray = [];
const ustensileArray = [];

const taglist = document.querySelector(".tag-list");
const tag = document.querySelectorAll(".input-autocompletion");

const ingredient = document.getElementById("ingredient");
const tagDiv = document.querySelectorAll(".input-control");

tag.forEach((tag) => tag.addEventListener("mousedown", buildTag));

tagDiv.forEach((input) => input.addEventListener("click", renderTag));

const tagInput = document.querySelectorAll(".tag-input");
tagInput.forEach((input) => input.addEventListener("blur", looseFocus));

const searchInput = document.querySelector("#search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("keyup", searchBar);
tagInput.forEach((input) => input.addEventListener("keyup", searchTag));

function buildTag(e) {
  addTag(e.target);
}

// Fonction d'ajout de filtre
function addTag(data) {
  let color;
  const ID = data.parentNode.parentNode.parentNode.id;

  if (ID === "ingredient") {
    color = "blue";
    ingredientArray.push(data.textContent.toLowerCase());
  } else if (ID === "appareil") {
    color = "green";
    appareilArray.push(data.textContent.toLowerCase());
  } else if (ID === "ustensile") {
    color = "salmon";
    ustensileArray.push(data.textContent.toLowerCase());
  }

  const img = document.createElement("img");
  img.setAttribute("src", "images/cross.svg");
  img.setAttribute("height", 20);
  img.setAttribute("width", 20);
  img.classList.add("pointer");

  img.addEventListener("click", removeTag);

  const span = document.createElement("span");
  span.textContent = data.textContent;

  const div = document.createElement("div");
  div.classList.add("tag-toast");
  div.classList.add(`tag-${color}`);

  div.appendChild(span);
  div.appendChild(img);

  filterRecipe();

  return taglist.appendChild(div);
}

// Fonction de suppression de filtre
function removeTag(e) {
  if (e.target.parentNode.classList.contains("tag-blue")) {
    const index = ingredientArray.findIndex(
      (element) =>
        element === e.target.parentNode.childNodes[0].textContent.toLowerCase()
    );
    ingredientArray.splice(index, 1);
  } else if (e.target.parentNode.classList.contains("tag-green")) {
    const index = appareilArray.findIndex(
      (element) =>
        element === e.target.parentNode.childNodes[0].textContent.toLowerCase()
    );
    appareilArray.splice(index, 1);
  } else if (e.target.parentNode.classList.contains("tag-salmon")) {
    const index = ustensileArray.findIndex(
      (element) =>
        element === e.target.parentNode.childNodes[0].textContent.toLowerCase()
    );
    ustensileArray.splice(index, 1);
  }

  e.target.parentNode.remove();
  searchInput.value = "";
  filterRecipe();
}

// Fonction de rendu de filtre
function renderTag(e) {
  const input = this.childNodes[1].childNodes[3];
  input.placeholder = `Rechercher un ${input.name.toLowerCase()}`;
  input.style.setProperty("--opacity", "0.5");
  this.style.width = "700px";
  this.style.maxHeight = "none";
  input.parentNode.parentNode.childNodes[3].childNodes[1].style.setProperty(
    "display",
    "grid"
  );
  input.focus();
  filterAutocompletion(input);
}

// Fonction de gestion du focus des
function looseFocus() {
  const input = this;
  const ingredient = this.parentNode.parentNode;
  input.placeholder = input.name;
  input.style.setProperty("--opacity", "1");
  ingredient.style.width = "170px";
  ingredient.style.maxHeight = "70px";

  input.parentNode.parentNode.childNodes[3].childNodes[1].style.setProperty(
    "display",
    "none"
  );
}

// Fonction de la barre de recherche utilisée par un écouteur d'événement
function searchBar(e) {
  filterRecipe(e.target.value);
}

// Fonction d'autocomplétion utilisée par un écouteur d'événement
function searchTag(e) {
  filterAutocompletion(e.target);
}

// Fonction de l'algorithme de triage
async function filterRecipe(inputSearchValue) {
  const data = await getData();
  let result = data;

  if (ingredientArray.length > 0) {
    result = result.filter((recipe) => {
      const matching = recipe.ingredients.filter((ingredient) => {
        let found = false;
        ingredientArray.forEach((item) => {
          found = ingredient.ingredient === item;
        });
        return found;
      });
      return matching.length;
    });
  }

  if (appareilArray.length > 0) {
    result = result.filter((recipe) =>
      recipe.appliance.includes(appareilArray)
    );
  }

  if (ustensileArray.length > 0) {
    result = result.filter((recipe) =>
      ustensileArray.every((elem) => {
        return recipe.ustensils.indexOf(elem) >= 0;
      })
    );
  }

  if (inputSearchValue !== undefined && inputSearchValue.length < 3) {
    return render(result);
  }

  if (inputSearchValue) {
    result = result.filter((recipe) => {
      return recipe.name.toLowerCase().includes(inputSearchValue.toLowerCase());
    });
  }

  render(result);
  return result;
}

// Fonction de récupération des données
async function getData() {
  const data = await fetch("recipes.json");
  return await data.json();
}

// Fonction de gestion de l'autocomplétion
async function filterAutocompletion(inputTag) {
  const data = await filterRecipe();
  const tableau = [];

  if (inputTag.id === "ingredient-input") {
    tag[0].innerHTML = "";
    data.forEach((element) =>
      element.ingredients.forEach((ingredient) =>
        tableau.push(ingredient.ingredient.toLowerCase())
      )
    );
  } else if (inputTag.id === "appareil-input") {
    tag[1].innerHTML = "";
    data.forEach((element) => tableau.push(element.appliance.toLowerCase()));
  } else if (inputTag.id === "ustensile-input") {
    tag[2].innerHTML = "";
    data.forEach((element) =>
      element.ustensils.forEach((ustensil) =>
        tableau.push(ustensil.toLowerCase())
      )
    );
  }

  let uniqueArray = Array.from(new Set(tableau));
  if (ingredientArray.length > 0) {
    uniqueArray = uniqueArray.filter(
      (ingredient) => !ingredientArray.includes(ingredient)
    );
  }
  if (ustensileArray.length > 0) {
    uniqueArray = uniqueArray.filter(
      (ustensil) => !ustensileArray.includes(ustensil)
    );
  }
  if (appareilArray.length > 0) {
    uniqueArray = uniqueArray.filter((appareil) => {
      return !appareilArray.includes(appareil);
    });
  }
  if (inputTag.value !== undefined) {
    uniqueArray = uniqueArray.filter((tag) =>
      tag.toLowerCase().includes(inputTag.value.toLowerCase())
    );
  }

  uniqueArray.forEach((element) => {
    const li = document.createElement("li");
    li.textContent = element[0].toUpperCase() + element.slice(1);
    if (inputTag.id === "ingredient-input") {
      tag[0].appendChild(li);
    } else if (inputTag.id === "appareil-input") {
      tag[1].appendChild(li);
    } else if (inputTag.id === "ustensile-input") {
      tag[2].appendChild(li);
    }
  });

  return uniqueArray;
}

// Initialisation du rendu
render();
