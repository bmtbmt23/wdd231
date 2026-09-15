let d = new Date();
document.getElementById("currentYear").innerHTML = `&copy;${d.getFullYear()} Bruna Beck`;
document.getElementById("lastModified").textContent = `lastModified:${document.lastModified}`;

const hamButton = document.querySelector("#ham-btn");
const navigation = document.querySelector("#navigation");

hamButton.addEventListener("click", () =>{
    navigation.classList.toggle("show");
    hamButton.classList.toggle("show");
})

  const membersContainer = document.querySelector("#m-container");
function displayRestaurants(restaurants){
  membersContainer.innerHTML = "";
  const cardsHTML = restaurants.map(restaurant => `
    <article class="restaurant-card">
      <img src="images/${restaurant.image}" alt="Photo of ${restaurant.name}" class="restaurant-img" loading="lazy">
      <div class="restaurant-details">
        <h3>${restaurant.name}</h3>
        <p class="description">${restaurant.description}</p>
        <p class="address">📍 ${restaurant.address}</p>
        <p class="phone">📞 ${restaurant.phone}</p>
        <a href="${restaurant.website}" target="_blank" rel="noopener" class="web-link">Visit Website</a>
      </div>
    </article>
  `).join('');
    membersContainer.innerHTML = cardsHTML;
}
displayRestaurants(restaurants);


const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

gridButton.addEventListener("click", () => {
  membersContainer.classList.add("m-grid");
  membersContainer.classList.remove("m-list");
});

listButton.addEventListener("click", () => {
  membersContainer.classList.add("m-list");
  membersContainer.classList.remove("m-grid");
});


async function getMembers(){
  const jsonUrl = `file/members.jason`;
  try {
    const response = await fetch(jsonUrl);

    if (!response.ok) {
      throw new Error(`Chamber data failed ${response.status}`);
    }
    const file = await response.json();
    displayRestaurants(file);
  }
  catch (error){
    console.error("Chamber directory error:", error);
    memebersContainer.innerHTML = `<p class="error-msg">Sorry, browser cannot load the requested right now.</p>`;
  }
}
getMembers();