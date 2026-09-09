const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() { // function allows to use await.
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets); //table temporary testing of data response.
}

getProphetData();

async function getProphetData(){
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets); // Prophets array of JSON data object.
}
getProphetData();

//prophets function is to handle a single parameter. the => is a statement 
// that will process the parameter value and build a card for each prophet.

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => { //forEach loop with the array parameter to process each prophet.
     
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        let birthDate = document.createElement('p');
        let birthPlace = document.createElement('p');

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birthDate.textContent = `Date of Birthday: ${prophet.birthdate}`;
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(fullName);
        card.appendChild(portrait);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);

        cards.appendChild(card);

    });
}
