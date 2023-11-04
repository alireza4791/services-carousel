//carousel
let carouselServiceCards = document.querySelectorAll('.carousel-img-card');
let serviceCardTitle = document.querySelector('.service-card-title');
let serviceCardText = document.querySelector('.service-card-text');


const cardTitles = ['london persian Restaurant project1', 'london persian Restaurant project2', 'london persian Restaurant project3', 'london persian Restaurant project4', 'london persian Restaurant project5', 'london persian Restaurant project6', 'london persian Restaurant project7', 'london persian Restaurant project8', 'london persian Restaurant project9', 'london persian Restaurant project10'];
const cardText = ['Offices today are not what they once used to be. The A-select is a next-generation office building, designed to inspire, connect and accelerate tomorrow’s working world. Our three-dimensional.1', 'Offices today are not what they once used to be. The A-select is a next-generation office building, designed to inspire, connect and accelerate tomorrow’s working world. Our three-dimensional.2', 'Offices today are not what they once used to be. The A-select is a next-generation office building, designed to inspire, connect and accelerate tomorrow’s working world. Our three-dimensional.3', 'Offices today are not what they once used to be. The A-select is a next-generation office building, designed to inspire, connect and accelerate tomorrow’s working world. Our three-dimensional.4', 'Offices today are not what they once used to be. The A-select is a next-generation office building, designed to inspire, connect and accelerate tomorrow’s working world. Our three-dimensional.5', 'Offices today are not what they once used to be. The A-select is a next-generation office building, designed to inspire, connect and accelerate tomorrow’s working world. Our three-dimensional.6', 'Offices today are not what they once used to be. The A-select is a next-generation office building, designed to inspire, connect and accelerate tomorrow’s working world. Our three-dimensional.7', 'Offices today are not what they once used to be. The A-select is a next-generation office building, designed to inspire, connect and accelerate tomorrow’s working world. Our three-dimensional.8', 'Offices today are not what they once used to be. The A-select is a next-generation office building, designed to inspire, connect and accelerate tomorrow’s working world. Our three-dimensional.9', 'Offices today are not what they once used to be. The A-select is a next-generation office building, designed to inspire, connect and accelerate tomorrow’s working world. Our three-dimensional.10'];


carouselServiceCards.forEach((card, index) => {
    card.addEventListener('click', () => {
        serviceCardTitle.innerText = cardTitles[index];
        serviceCardText.innerText = cardText[index];
    })
})