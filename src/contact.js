import contactPhoto1 from "./images/shop.png";
export function loadContact() {
    const content = document.querySelector('#content');
    const card = document.createElement('div');
    const contactPhoto = document.createElement('img');
    const addressTitleDiv = document.createElement('div');
    const addressDiv = document.createElement('div');
    const phoneTitleDiv = document.createElement('div');
    const phoneDiv = document.createElement('div');

    const addressTitle = document.createElement('p');
    const address = document.createElement('p');
    const phoneTitle = document.createElement('p');
    const phone = document.createElement('p');
    addressTitleDiv.classList.add('addressTitleDiv');
    addressDiv.classList.add('addressDiv');
    phoneTitleDiv.classList.add('phoneTitleDiv');
    phoneDiv.classList.add('phoneDiv');

    card.classList.add('contactCard');
    contactPhoto.classList.add('contactPhoto');
    contactPhoto.src = contactPhoto1;
    addressTitle.classList.add('contactTitle');
    address.classList.add('contactWord')
    phoneTitle.classList.add('contactTitle');
    phone.classList.add('contactWord')
    content.classList.add('contactContent');

    addressTitle.textContent = 'Address:';
    address.textContent = '1234 Pizza Lane, Food City, Yummyland';
    phoneTitle.textContent = 'Phone:';
    phone.textContent = '(123) 456-7890';

    content.appendChild(contactPhoto)
    content.appendChild(card);
    card.appendChild(addressTitleDiv);
    card.appendChild(addressDiv);
    card.appendChild(phoneTitleDiv);
    card.appendChild(phoneDiv);
    addressTitleDiv.appendChild(addressTitle);
    addressDiv.appendChild(address);
    phoneTitleDiv.appendChild(phoneTitle);
    phoneDiv.appendChild(phone);
    

}