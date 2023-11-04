//carousel
let carouselServiceCards = document.querySelectorAll('.carousel-img-card');
let serviceCardTitle = document.querySelector('.service-card-title');
let serviceCardText = document.querySelector('.service-card-text');
let serviceDisplayImg = document.querySelector('.display-image');
let displayImgPart = document.querySelector('.display-img-part');


const cardTitles = ['london persian Restaurant project1', 'london persian Restaurant project2', 'london persian Restaurant project3', 'london persian Restaurant project4', 'london persian Restaurant project5', 'london persian Restaurant project6', 'london persian Restaurant project7', 'london persian Restaurant project8', 'london persian Restaurant project9', 'london persian Restaurant project10'];
const cardText = ['Offices today are not what they once used to be. The A-select is a next-generation office building, designed to inspire, connect and accelerate tomorrow’s working world. Our three-dimensional.1', 'Offices today are not what they once used to be. The A-select is a next-generation office building, designed to inspire, connect and accelerate tomorrow’s working world. Our three-dimensional.2', 'Offices today are not what they once used to be. The A-select is a next-generation office building, designed to inspire, connect and accelerate tomorrow’s working world. Our three-dimensional.3', 'Offices today are not what they once used to be. The A-select is a next-generation office building, designed to inspire, connect and accelerate tomorrow’s working world. Our three-dimensional.4', 'Offices today are not what they once used to be. The A-select is a next-generation office building, designed to inspire, connect and accelerate tomorrow’s working world. Our three-dimensional.5', 'Offices today are not what they once used to be. The A-select is a next-generation office building, designed to inspire, connect and accelerate tomorrow’s working world. Our three-dimensional.6', 'Offices today are not what they once used to be. The A-select is a next-generation office building, designed to inspire, connect and accelerate tomorrow’s working world. Our three-dimensional.7', 'Offices today are not what they once used to be. The A-select is a next-generation office building, designed to inspire, connect and accelerate tomorrow’s working world. Our three-dimensional.8', 'Offices today are not what they once used to be. The A-select is a next-generation office building, designed to inspire, connect and accelerate tomorrow’s working world. Our three-dimensional.9', 'Offices today are not what they once used to be. The A-select is a next-generation office building, designed to inspire, connect and accelerate tomorrow’s working world. Our three-dimensional.10'];

let placeHolderCard;
let zIndexCounter = 0;
let serviceCarouselCardTimeout;

carouselServiceCards.forEach((card, index) => {
    card.addEventListener('mouseover', () => {
        placeHolderCard = card.querySelector('.carousel-img-wrapper').cloneNode(true);
        // placeHolderCard = card.querySelector('.carousel-img-wrapper');
        zIndexCounter++;
        placeHolderCard.style.zIndex = `${zIndexCounter}`;
        placeHolderCard.style.left = '10px'
        placeHolderCard.style.top = '10px'
        placeHolderCard.style.width = 'calc(100% - 20px)'
        placeHolderCard.style.height = 'calc(100% - 20px)'
        placeHolderCard.querySelector('.carousel-img-container').style.height = '0%';
        placeHolderCard.querySelector('.carousel-img-container').style.top = '0';
        placeHolderCard.querySelector('.carousel-img-container').style.bottom = 'auto';

        serviceCardTitle.innerText = cardTitles[index];
        serviceCardText.innerText = cardText[index];

        displayImgPart.appendChild(placeHolderCard);

        // displayImgPart.querySelector('.carousel-img-container').style.height = '0%';
        // displayImgPart.querySelector('.carousel-img-container').style.height = '100%';

        serviceCarouselCardTimeout = setTimeout(() => {
            displayImgPart.querySelectorAll('.carousel-img-container')[displayImgPart.querySelectorAll('.carousel-img-container').length - 1].style.height = '100%';
        }, 100);

        serviceCarouselCardTimeout = setTimeout(() => {
            displayImgPart.removeChild(displayImgPart.children[0]);
        }, 800);
    });

    card.addEventListener('touchstart', () => {
        placeHolderCard = card.querySelector('.carousel-img-wrapper').cloneNode(true);
        // placeHolderCard = card.querySelector('.carousel-img-wrapper');
        zIndexCounter++;
        placeHolderCard.style.zIndex = `${zIndexCounter}`;
        placeHolderCard.style.left = '10px'
        placeHolderCard.style.top = '10px'
        placeHolderCard.style.width = 'calc(100% - 20px)'
        placeHolderCard.style.height = 'calc(100% - 20px)'
        placeHolderCard.querySelector('.carousel-img-container').style.height = '0%';
        placeHolderCard.querySelector('.carousel-img-container').style.top = '0';
        placeHolderCard.querySelector('.carousel-img-container').style.bottom = 'auto';

        serviceCardTitle.innerText = cardTitles[index];
        serviceCardText.innerText = cardText[index];

        displayImgPart.appendChild(placeHolderCard);

        // displayImgPart.querySelector('.carousel-img-container').style.height = '0%';
        // displayImgPart.querySelector('.carousel-img-container').style.height = '100%';

        serviceCarouselCardTimeout = setTimeout(() => {
            displayImgPart.querySelectorAll('.carousel-img-container')[displayImgPart.querySelectorAll('.carousel-img-container').length - 1].style.height = '100%';
        }, 100);

        serviceCarouselCardTimeout = setTimeout(() => {
            displayImgPart.removeChild(displayImgPart.children[0]);
        }, 800);
    });
})