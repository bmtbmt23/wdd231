const recipeContainer = document.querySelector("#recipe-list");
const recipeDialog = document.querySelector("#recipe-dialog");

let recipes = [];
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

async function getRecipes() {
  try {
    const response = await fetch("data/recipes.json");

    if (!response.ok) {
      throw new Error("Recipes could not load");
    }

    recipes = await response.json();

    displayRecipes(recipes);

  } catch (error) {
    console.error(error);
    recipeContainer.textContent = "Sorry, recipes could not load.";
  }
}

function displayRecipes(recipes) {
  recipeContainer.innerHTML = "";

  recipes.forEach((recipe) => {
    const card = document.createElement("article");
    const image = document.createElement("img");
    const title = document.createElement("h2");
    const category = document.createElement("p");
    const time = document.createElement("p");
    const difficulty = document.createElement("p");
    const description = document.createElement("p");
    const button = document.createElement("button");
    const favoriteButton = document.createElement("button");

    image.src = recipe.image;
    image.alt = recipe.alt || recipe.name;
    image.loading = "lazy";
    image.width = 600;
    image.height = 400;

    title.textContent = recipe.name;
    category.textContent = `Category: ${recipe.category}`;
    time.textContent = `Preparation: ${recipe.prepTime}`;
    difficulty.textContent = `Difficulty: ${recipe.difficulty}`;
    description.textContent = recipe.description;

    button.textContent = "View Recipe";
    button.type = "button";

    const isFavorite = favorites.includes(recipe.id);

    favoriteButton.type = "button";
    favoriteButton.textContent = isFavorite
      ? "♥ Saved"
      : "☆ Add to Favorites";

    favoriteButton.setAttribute("aria-pressed", String(isFavorite));
    
    button.addEventListener("click", () => {
      document.querySelector("#dialog-image").src = recipe.image;
      document.querySelector("#dialog-image").alt = recipe.alt || recipe.name;

      document.querySelector("#dialog-title").textContent = recipe.name;
      document.querySelector("#dialog-category").textContent = recipe.category;
      document.querySelector("#dialog-time").textContent = recipe.prepTime;
      document.querySelector("#dialog-ingredients").textContent = recipe.ingredients;

      recipeDialog.showModal();
    });
    
      favoriteButton.addEventListener("click", () => {
      if (favorites.includes(recipe.id)) {
        favorites = favorites.filter((id) => id !== recipe.id);
      } else {
        favorites.push(recipe.id);
      }

      localStorage.setItem("favorites", JSON.stringify(favorites));

      displayRecipes(recipes);
    });

    card.classList.add("recipe-card");

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(category);
    card.appendChild(time);
    card.appendChild(difficulty);
    card.appendChild(description);
    card.appendChild(button);
    card.appendChild(favoriteButton);

    recipeContainer.appendChild(card);
});
}
document.querySelector("#close-dialog").addEventListener("click", () => {
  recipeDialog.close();
});

getRecipes();