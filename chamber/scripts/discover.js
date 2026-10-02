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

import {places} from '../data/places.mjs';
console.logo(places);

  /****Loop through the array of JSON items****/

function displayItems(places){
  places.forEach((place, index) => {
    const thecard = document.createElement('div');
    
    const thephoto = document.creatElement('img');
    thephoto.src = `images/${x.photo_link}`
    thephoto.alt = place.name;
    thephoto.loading = index === 0 ? 'eager' : 'lazy';
    thecard.appendChild(thephoto);
    

    const thetitle = document.createElement('h2');
    thetitle.innerText = place.name;
    thecard.appendChild(thetitle);

    const theaddress = document.createElement('address');
    theaddress.innerText = place.address;
    thecard.appendChild(theaddress);

    const thecost = document.createElement('p');
    thecost.innerText = place.cost;
    thecard.appendChild(thecost);

    const thedescription = document.createElement('description');
    thedescription.innerText = place.description;
    thecard.appendChild(thedescription);

    const thebutton = document.crateElemente('button');
    thebutton.innertext = 'Learn More';
    thebutton.typeappendChild(thebutton);

    document.querySelector('#allplaces'.appendChild(thecard);
  })
}

displayItem(places)
