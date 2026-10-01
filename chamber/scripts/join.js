let d = new Date();
document.getElementById("currentYear").innerHTML = `&copy;${d.getFullYear()} Bruna Beck`;
document.getElementById("lastModified").textContent = `lastModified: ${document.lastModified}`;

const hamButton = document.querySelector("#ham-btn");
const navigation = document.querySelector("#navigation");

hamButton.addEventListener("click", () =>{
    navigation.classList.toggle("show");
    hamButton.classList.toggle("show");
})

const timestamp = document.querySelector("#timestamp");
if(timestamp){
  timestamp.value = new Date().toISOString();
}

const linksView = document.querySelectorAll(".membership-card a");
linksView.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const dialogId = link.getAttribute("href");
    const dialog = document.querySelector(dialogId);

    if (dialog){
      dialog.showModal();
    }  
  });
});

const closeButtons = document.querySelectorAll(".modal");
closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const dialog = button.closest("dialog");
    if (dialog){
      dialog.close();
    }
  });
});

const url = new URLSearchParams(window.location.search);

document.querySelector("#applicationInfo").innerHTML = `
    <h2>Application Information</h2>
    <p>Name: ${url.get("fname")} ${url.get("lname")}</p>
    <p>Phone: ${url.get("phone")}</p>
    <p>Email: ${url.get("email")}</p>
    <p>Organization Title: ${url.get("organizationTitle")}</p>
    <p>Organization Name: ${url.get("organization")}</p>
    <p>Organization Description: ${url.get("organizationDescription")}</p>
    <p>Membership: ${url.get("membership")}</p>
`;