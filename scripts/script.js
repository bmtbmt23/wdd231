const navButton = document.querySelector('#ham-btn');
const nav = document.querySelector('nav');

navButton.addEventListener('click', () =>{
  navButtom.classList.toggle('show');
  nav.classList.toggle('show');
});

const navBar = document.querySelector('#nav-home');

navButtom.addEventListener('click', () => {
  navButtom.classList.toggle('show');
  navBar.classList.toggle('show');
})

let d = new Date();
document.getElementById("currentYear").innerHTML = `&copy;${d.getFullYear()} Bruna Beck`;
document.getElementById("lastModified").textContent = `lastModified:${document.lastModified}`;