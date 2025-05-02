import menuPhoto1 from "./images/TCPizza.jpg";
import menuPhoto2 from "./images/HawaiianPizza.jpg";

export function loadMenu() {
    const content = document.querySelector('#content');
    const card = document.createElement('div');
    const menuTitle = document.createElement('p');
    const menuContainer= document.createElement('div');
    const menuDiv1 = document.createElement('div');
    const menuDiv2 = document.createElement('div');
    const menuImage1 = document.createElement('img');
    const menuImage2 = document.createElement('img');
    const menuWord1 = document.createElement('p');
    const menuWord2 = document.createElement('p');
    card.classList.add('card');
    card.classList.add('menuCard');
    content.appendChild(card);
    menuTitle.textContent = 'Menu';
    card.appendChild(menuTitle);
    menuContainer.classList.add('menuContainer');
    menuDiv1.classList.add('menuDiv');
    menuDiv2.classList.add('menuDiv');
    card.appendChild(menuContainer);
    menuContainer.appendChild(menuDiv1);
    menuContainer.appendChild(menuDiv2);
    menuImage1.classList.add('menuImage');
    menuImage2.classList.add('menuImage');
    menuDiv1.appendChild(menuImage1);
    menuDiv2.appendChild(menuImage2);
    menuWord1.classList.add('menuWord');
    menuWord2.classList.add('menuWord');
    menuDiv1.appendChild(menuWord1)
    menuDiv2.appendChild(menuWord2)
    menuImage1.src = menuPhoto1;
    menuImage2.src = menuPhoto2;
    menuWord1.textContent = 'Tandoori Chicken Pizza';
    menuWord2.textContent = 'Hawaiian Pizza';
}
