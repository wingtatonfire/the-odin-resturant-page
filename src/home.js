import homeImageFile1 from './images/homeimage1.png';
import homeImageFile2 from './images/homeimage2.png';
import homeImageFile3 from './images/homeimage3.png';


function toTitleCase(str) {
    return str
        .toLowerCase() // make everything lowercase first
        .split(' ')     // split into words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // capitalize first letter
        .join(' ');     // join words back together
}

export function loadHome() {
    const content = document.querySelector("#content");
    const card = document.createElement('div');
    const homeTitle = document.createElement('p');
    const descriDiv1 = document.createElement('div');
    const descriDiv2 = document.createElement('div');
    const descriDiv3 = document.createElement('div');
    const homeImage1 = document.createElement('img');
    const homeImage2 = document.createElement('img');
    const homeImage3 = document.createElement('img');
    const homeWordDiv1 = document.createElement('div');
    const homeWordDiv2 = document.createElement('div');
    const homeWordDiv3 = document.createElement('div');
    const homeSubtitle1 = document.createElement('h2');
    const homeSubtitle2 = document.createElement('h2');
    const homeSubtitle3 = document.createElement('h2');
    const homeText1 = document.createElement('p');
    const homeText2 = document.createElement('p');
    const homeText3 = document.createElement('p');

    
    content.appendChild(card);
    card.classList.add('card');
    homeTitle.textContent = toTitleCase("A DELICIOUS FAMILY OWN PIZZERIA IN SCARBOROUGH");

    card.appendChild(homeTitle);

    descriDiv1.classList.add('descriDiv');
    descriDiv2.classList.add('descriDiv');
    descriDiv3.classList.add('descriDiv');

    card.appendChild(descriDiv1);
    card.appendChild(descriDiv2);
    card.appendChild(descriDiv3);

    homeImage1.classList.add('homeImage');
    homeImage2.classList.add('homeImage');
    homeImage3.classList.add('homeImage');

    homeWordDiv1.classList.add('homeWordDiv');
    homeWordDiv2.classList.add('homeWordDiv');
    homeWordDiv3.classList.add('homeWordDiv');

    homeSubtitle1.classList.add('homeSubtitle');
    homeSubtitle2.classList.add('homeSubtitle');
    homeSubtitle3.classList.add('homeSubtitle');
    homeText1.classList.add('homeText');
    homeText2.classList.add('homeText');
    homeText3.classList.add('homeText');

    homeImage1.src = homeImageFile1;
    homeImage2.src = homeImageFile2;
    homeImage3.src = homeImageFile3;

    descriDiv1.appendChild(homeImage1);
    descriDiv1.appendChild(homeWordDiv1);
    homeWordDiv1.appendChild(homeSubtitle1);
    homeWordDiv1.appendChild(homeText1);
    homeSubtitle1.textContent = toTitleCase("Our Story");
    homeText1.textContent = "PizzaOnFire is a family-owned pizzeria located in Scarborough, Ontario. We take pride in using only the freshest ingredients to create our delicious pizzas.";


    descriDiv2.appendChild(homeWordDiv2);
    descriDiv2.appendChild(homeImage2);

    homeWordDiv2.appendChild(homeSubtitle2);
    homeWordDiv2.appendChild(homeText2);
    homeSubtitle2.textContent = "The Way We Make It";
    homeText2.textContent = 'At PizzaOnFire, we believe that pizza should be made with love and care. That\'s why we take the time to make our dough from scratch every day';

    descriDiv3.appendChild(homeImage3);
    descriDiv3.appendChild(homeWordDiv3);
    homeWordDiv3.appendChild(homeSubtitle3);
    homeWordDiv3.appendChild(homeText3);
    homeSubtitle3.textContent = "Our People";
    homeText3.textContent = 'At PizzaOnFire, we are proud to be a family-owned business. Our team is made up of passionate individuals who are dedicated to providing the best possible experience for our customers. We believe that great pizza starts with great people.';

}