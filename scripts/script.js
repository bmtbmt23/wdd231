let d = new Date();
document.getElementById("currentYear").innerHTML = `&copy;${d.getFullYear()} Bruna Beck`;
document.getElementById("lastModified").textContent = `lastModified:${document.lastModified}`;

const hamButton = document.querySelector("#ham-btn");
const navigation = document.querySelector("#navigation");

hamButton.addEventListener("click", () =>{
    navigation.classList.toggle("show");
    hamButton.classList.toggle("show");
})