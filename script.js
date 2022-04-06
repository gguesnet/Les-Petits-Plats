const DOM = document.querySelector(".card-group");

async function render(filter) {
  DOM.innerHTML = "";
  let data;
  if (filter === undefined) {
    data = await getData();
  } else {
    data = filter;
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

const filterArray = [];
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

function removeTag(e) {
  if (e.target.parentNode.classList.contains("tag-blue")) {
    const index = ingredientArray.findIndex(
      (element) => element === e.target.parentNode.childNodes[0].textContent
    );
    ingredientArray.splice(index, 1);
  } else if (e.target.parentNode.classList.contains("tag-green")) {
    const index = appareilArray.findIndex(
      (element) => element === e.target.parentNode.childNodes[0].textContent
    );
    appareilArray.splice(index, 1);
  } else if (e.target.parentNode.classList.contains("tag-salmon")) {
    const index = ustensileArray.findIndex(
      (element) => element === e.target.parentNode.childNodes[0].textContent
    );
    ustensileArray.splice(index, 1);
  }

  e.target.parentNode.remove();
  searchInput.value = "";
  filterRecipe();
}

function renderTag() {
  const input = this.childNodes[1].childNodes[3];
  input.focus();
  input.placeholder = `Rechercher un ${input.name.toLowerCase()}`;
  input.style.setProperty("--opacity", "0.5");
  this.style.width = "700px";
  this.style.maxHeight = "none";
  input.parentNode.parentNode.childNodes[3].childNodes[1].style.setProperty(
    "display",
    "grid"
  );
  filterAutocompletion(input);
}

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
  return;
}

function searchBar(e) {
  filterRecipe(e.target.value);
}

function searchTag(e) {
  filterAutocompletion(e.target);
}

async function filterRecipe(filter) {
  const data = await getData();
  let result = data;
  if (filter) {
    result = data.filter((recipe) => {
      return recipe.name.toLowerCase().includes(filter.toLowerCase());
    });
  }

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

  return render(result);
}

async function getData() {
  const data = await fetch("recipes.json");
  return await data.json();
}

async function filterAutocompletion(filter) {
  const data = await getData();
  const tableau = [];

  if (filter.id === "ingredient-input") {
    tag[0].innerHTML = "";
    data.forEach((element) =>
      element.ingredients.forEach((ingredient) =>
        tableau.push(ingredient.ingredient.toLowerCase())
      )
    );
  } else if (filter.id === "appareil-input") {
    tag[1].innerHTML = "";
    data.forEach((element) => tableau.push(element.appliance.toLowerCase()));
  } else if (filter.id === "ustensile-input") {
    tag[2].innerHTML = "";
    data.forEach((element) =>
      element.ustensils.forEach((ustensil) =>
        tableau.push(ustensil.toLowerCase())
      )
    );
  }

  let uniqueArray = Array.from(new Set(tableau));

  if (filter.value !== undefined) {
    uniqueArray = uniqueArray.filter((tag) =>
      tag.toLowerCase().includes(filter.value.toLowerCase())
    );
  }

  uniqueArray.forEach((element) => {
    const li = document.createElement("li");
    li.textContent = element[0].toUpperCase() + element.slice(1);
    if (filter.id === "ingredient-input") {
      tag[0].appendChild(li);
    } else if (filter.id === "appareil-input") {
      tag[1].appendChild(li);
    } else if (filter.id === "ustensile-input") {
      tag[2].appendChild(li);
    }
  });

  return uniqueArray;
}

render();
