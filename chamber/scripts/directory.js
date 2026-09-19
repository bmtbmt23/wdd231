let d = new Date();
document.getElementById("currentYear").innerHTML = `&copy;${d.getFullYear()} Bruna Beck`;
document.getElementById("lastModified").textContent = `lastModified: ${document.lastModified}`;

const hamButton = document.querySelector("#ham-btn");
const navigation = document.querySelector("#navigation");

hamButton.addEventListener("click", () =>{
    navigation.classList.toggle("show");
    hamButton.classList.toggle("show");
})

  const membersContainer = document.querySelector("#m-container");
  
  function displayMembers(members) {
  membersContainer.innerHTML = "";
  members.forEach((member) => {

  const card = document.createElement("article");
  const image = document.createElement("img");
  const details = document.createElement("div");
  const name = document.createElement("h3");
  const description = document.createElement("p");
  const address = document.createElement("p");
  const phone = document.createElement("p");
  const website = document.createElement("a");

  name.textContent = member.name;

  description.textContent = member.description || "";
  address.textContent = `📍 ${member.address}`;
  phone.textContent = `📞 ${member.phone}`;

  website.textContent = "Visit Website";
  website.href = member.website;
  website.target = "_blank";
  website.rel = "noopener";

  image.src = `images/${member.image}`;
  image.alt = `Photo of ${member.name}`;
  image.loading = "lazy";

  card.classList.add("restaurant-card");
  image.classList.add("restaurant-img");
  details.classList.add("restaurant-details");
  description.classList.add("description");
  address.classList.add("address");
  phone.classList.add("phone");
  website.classList.add("web-link");

  details.appendChild(name);
  details.appendChild(description);
  details.appendChild(address);
  details.appendChild(phone);
  details.appendChild(website);
  card.appendChild(image);
  card.appendChild(details);

    membersContainer.appendChild(card); 
  });
}
 
async function getMembers(){
  const jsonUrl = "data/members.json";
  try {
    const response = await fetch(jsonUrl);

    if (!response.ok) {
      throw new Error(`Chamber data failed ${response.status}`);
    }
    const data = await response.json();
    console.log("Members loaded:", data);
    console.log("Number of members:", data.length);

    displayMembers(data);
  }
  catch (error){
    console.error("Chamber directory error:", error);
    membersContainer.innerHTML = `<p class="error-msg">Sorry, browser cannot load the requested right now.</p>`;
  }
}
getMembers();

const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

gridButton.addEventListener("click", () => {
  membersContainer.classList.add("m-grid");
  membersContainer.classList.remove("m-list");
  gridButton.classList.add("current");
  listButton.classList.remove("current");
});

listButton.addEventListener("click", () => {
  membersContainer.classList.add("m-list");
  membersContainer.classList.remove("m-grid");
  listButton.classList.add("current");
  gridButton.classList.remove("current");
});
