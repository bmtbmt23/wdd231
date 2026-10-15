const exerciseContainer = document.querySelector("#exercise-list");
const exerciseDialog = document.querySelector("#exercise-dialog");

let exercise = [];
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

async function getExercise() {
  try {
    const response = await fetch("data/exercises.json");

    if (!response.ok) {
      throw new Error("Exercises could not load...");
    }

    exercise = await response.json();
    displayExercise(exercise);
  } catch (error) {
    console.error(error);
    exerciseContainer.textContent =
      "Sorry, exercises could not load...";
  }
}

function displayExercise(exercises) {
  exerciseContainer.innerHTML = "";

  exercises.forEach((item) => {
    const card = document.createElement("article");
    const image = document.createElement("img");
    const title = document.createElement("h2");
    const level = document.createElement("p");
    const duration = document.createElement("p");
    const equipment = document.createElement("p");
    const focus = document.createElement("p");
    const description = document.createElement("p");
    const button = document.createElement("button");
    const favoriteButton = document.createElement("button");

    image.src = item.image;
    image.alt = item.alt || item.name;
    image.loading = "lazy";
    image.width = 600;
    image.height = 400;

    title.textContent = item.name;
    level.textContent = `Level: ${item.level}`;
    duration.textContent = `Duration: ${item.duration}`;
    equipment.textContent = `Equipment: ${item.equipment}`;
    focus.textContent = `Focus: ${item.focus}`;
    description.textContent = item.description;

    button.textContent = "View Exercise";
    button.type = "button";

    const isFavorite = favorites.includes(item.id);

    favoriteButton.type = "button";
    favoriteButton.textContent = isFavorite
      ? "♥ Saved"
      : "☆ Add to Favorites";

    favoriteButton.setAttribute(
      "aria-pressed",
      String(isFavorite)
    );

    button.addEventListener("click", () => {
      document.querySelector("#dialog-image").src = item.image;
      document.querySelector("#dialog-image").alt =
        item.alt || item.name;

      document.querySelector("#dialog-title").textContent = item.name;
      document.querySelector("#dialog-level").textContent = item.level;
      document.querySelector("#dialog-duration").textContent =
        item.duration;
      document.querySelector("#dialog-equipment").textContent =
        item.equipment;
      document.querySelector("#dialog-focus").textContent = item.focus;
      document.querySelector("#dialog-description").textContent =
        item.description;

      exerciseDialog.showModal();
    });

    favoriteButton.addEventListener("click", () => {
      if (favorites.includes(item.id)) {
        favorites = favorites.filter((id) => id !== item.id);
      } else {
        favorites.push(item.id);
      }

      localStorage.setItem("favorites", JSON.stringify(favorites));
      displayExercise(exercise);
    });

    card.classList.add("exercise-card");
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(level);
    card.appendChild(duration);
    card.appendChild(equipment);
    card.appendChild(focus);
    card.appendChild(description);
    card.appendChild(button);
    card.appendChild(favoriteButton);

    exerciseContainer.appendChild(card);
  });
}

const closeDialogButton = document.querySelector("#close-dialog");

if (closeDialogButton && exerciseDialog) {
  closeDialogButton.addEventListener("click", () => {
    exerciseDialog.close();
    });
}


getExercise();