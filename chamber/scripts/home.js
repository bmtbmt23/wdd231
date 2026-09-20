let d = new Date();
document.getElementById("currentYear").innerHTML = `&copy;${d.getFullYear()} Bruna Beck`;
document.getElementById("lastModified").textContent = `lastModified: ${document.lastModified}`;

const hamButton = document.querySelector("#ham-btn");
const navigation = document.querySelector("#navigation");

hamButton.addEventListener("click", () =>{
    navigation.classList.toggle("show");
    hamButton.classList.toggle("show");
})

const threeMembers = "data/members.json";
const spotlightContainer = document.querySelector("#spotlight-container");
async function getMembersSpotlight(){
    const response = await fetch(threeMembers);
    const data = await response.json();
    const members = data.members.filter(
        member => member.membership === 2 || member.membership === 3
    );

    members.sort(() => Math.random() -0.5);
    const chooseMembers = members.slice(0, 3);
    
    chooseMembers.forEach(member =>{
        const card = document.createElement("article");
        card.classList.add("spotlight-card");

        card.innerHTML = ` 
        <h3>${member.name}</h3>
        <img src="${member.image}" alt="${member.name}">
        <p>${member.phone}</p>
        <p>${member.membership === 3 ? "Gold" : "Silver"}</p>
        <a href="${member.website}" target="_blank">Website</a>
        `;

        spotlightContainer.appendChild(card);
    });
}
getMembersSpotlight();