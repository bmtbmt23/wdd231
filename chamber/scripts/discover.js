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

/******PLACES.MJS*******/

import {places} from '../data/places.mjs';
console.log(places);

  /****Loop through the array of JSON items****/

function displayItems(places){
  places.forEach((place, index) => {

    const thecard = document.createElement('div');
    const thephoto = document.createElement('img');
    const thefigure = document.createElement('figure');

    thephoto.src = `images/${place.photo_link}`;
    thephoto.alt = place.name;
    thephoto.loading = index === 0 ? 'eager' : 'lazy';

    thephoto.width = 600;
    thephoto.height = 400;

    thefigure.appendChild(thephoto);
    thecard.appendChild(thefigure);
    

    const thetitle = document.createElement('h2');
    thetitle.innerText = place.name;
    thecard.appendChild(thetitle);

    const theaddress = document.createElement('address');
    theaddress.innerText = place.address;
    thecard.appendChild(theaddress);

    const thecost = document.createElement('p');
    thecost.innerText = place.cost;
    thecard.appendChild(thecost);

    const thedescription = document.createElement('p');
    thedescription.innerText = place.description;
    thecard.appendChild(thedescription);

    const thebutton = document.createElement('button');
    thebutton.innerText = 'learn More';
    thebutton.classList.add("learn-more");
    thebutton.type = "button";
    thecard.appendChild(thebutton);

    document.querySelector('#allplaces').appendChild(thecard);
});
}

displayItems(places);

const visitMessage = document.querySelector("#visit-message");
const lastVisit = localStorage.getItem("lastVisit");
const currentVisit = Date.now();

if (lastVisit === null) {
    visitMessage.textContent = "Welcome to Olinda! Enjoy and Discover Olinda Beautiful City.";
} else {

    const timePassed = currentVisit - Number(lastVisit);
    const daysPassed = Math.floor(
      timePassed / (1000 * 60 * 60 * 24)
    );

    if (daysPassed < 1){
      visitMessage.textContent = "Welcome back to Olinda! Your last visit was less than one day ago."
    }

    else{
      const dayBack = daysPassed === 1 ? "day" : "days";
      visitMessage.textContent = `Welcome back! Your last visit was ${dayPassed} ${dayBack} ago.`;
    }
}

localStorage.setItem("lastVisit", currentVisit.toString());