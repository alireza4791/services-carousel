//carousel
let carouselServiceCards = document.querySelectorAll('.gallery-slide-wrap');
let serviceCardTitle = document.querySelector('.gallery-info__title');
let serviceCardText = document.querySelector('.gallery-info__subtitle');
let serviceDisplayImg = document.querySelector('.display-image');
let displayImgPart = document.querySelector('.display-img-part');


const cardTitles = ['london persian Restaurant project1', 'london persian Restaurant project2', 'london persian Restaurant project3', 'london persian Restaurant project4', 'london persian Restaurant project5', 'london persian Restaurant project6', 'london persian Restaurant project7', 'london persian Restaurant project8', 'london persian Restaurant project9', 'london persian Restaurant project10'];
const cardText = ['Offices today are not what they once used to be. The A-select is a next-generation office building, designed to inspire, connect and accelerate tomorrow’s working world. Our three-dimensional.1', 'Offices today are not what they once used to be. The A-select is a next-generation office building, designed to inspire, connect and accelerate tomorrow’s working world. Our three-dimensional.2', 'Offices today are not what they once used to be. The A-select is a next-generation office building, designed to inspire, connect and accelerate tomorrow’s working world. Our three-dimensional.3', 'Offices today are not what they once used to be. The A-select is a next-generation office building, designed to inspire, connect and accelerate tomorrow’s working world. Our three-dimensional.4', 'Offices today are not what they once used to be. The A-select is a next-generation office building, designed to inspire, connect and accelerate tomorrow’s working world. Our three-dimensional.5', 'Offices today are not what they once used to be. The A-select is a next-generation office building, designed to inspire, connect and accelerate tomorrow’s working world. Our three-dimensional.6', 'Offices today are not what they once used to be. The A-select is a next-generation office building, designed to inspire, connect and accelerate tomorrow’s working world. Our three-dimensional.7', 'Offices today are not what they once used to be. The A-select is a next-generation office building, designed to inspire, connect and accelerate tomorrow’s working world. Our three-dimensional.8', 'Offices today are not what they once used to be. The A-select is a next-generation office building, designed to inspire, connect and accelerate tomorrow’s working world. Our three-dimensional.9', 'Offices today are not what they once used to be. The A-select is a next-generation office building, designed to inspire, connect and accelerate tomorrow’s working world. Our three-dimensional.10'];

let placeHolderCard;
let zIndexCounter = 0;
let serviceCarouselCardTimeout;

carouselServiceCards.forEach((card, index) => {
    card.addEventListener('mouseover', () => {
        placeHolderCard = card.querySelector('.gallery-img').cloneNode(true);
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

        serviceCarouselCardTimeout = setTimeout(() => {
            displayImgPart.querySelectorAll('.carousel-img-container')[displayImgPart.querySelectorAll('.carousel-img-container').length - 1].style.height = '100%';
        }, 100);

        serviceCarouselCardTimeout = setTimeout(() => {
            displayImgPart.removeChild(displayImgPart.children[0]);
        }, 800);
    });

    card.addEventListener('touchstart', () => {
        placeHolderCard = card.querySelector('.gallery-img').cloneNode(true);

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

        serviceCarouselCardTimeout = setTimeout(() => {
            displayImgPart.querySelectorAll('.carousel-img-container')[displayImgPart.querySelectorAll('.carousel-img-container').length - 1].style.height = '100%';
        }, 100);

        serviceCarouselCardTimeout = setTimeout(() => {
            displayImgPart.removeChild(displayImgPart.children[0]);
        }, 800);
    });
})





  //gallery slider
  const slider = document.querySelector(".is--items");
  let wrapper = document.querySelector(".is--grid-container");
  const firstCardWidth = slider.querySelector(".is--item").offsetWidth;
  let isDown = false;
  let startX;
  let scrollLeft;
  let timeoutId;
  let isAutoPlay = false;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    cancelMomentumTracking();
  });

  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
  });

  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
    beginMomentumTracking();
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    var prevScrollLeft = slider.scrollLeft;
    slider.scrollLeft = scrollLeft - walk;
    velX = slider.scrollLeft - prevScrollLeft;
  });

  const autoPlay = () => {
    if (window.innerWidth < 800 || !isAutoPlay) return;
    timeoutId = setTimeout(() => (slider.scrollLeft += firstCardWidth), 2500);
  };
  autoPlay();

  var velX = 0;
  var momentumID;

  slider.addEventListener("wheel", (e) => {
    cancelMomentumTracking();
  });

  function beginMomentumTracking() {
    cancelMomentumTracking();
    momentumID = requestAnimationFrame(momentumLoop);
  }
  function cancelMomentumTracking() {
    cancelAnimationFrame(momentumID);
  }
  function momentumLoop() {
    slider.scrollLeft += velX;
    velX *= 0.955;
    if (Math.abs(velX) > 0.5) {
      momentumID = requestAnimationFrame(momentumLoop);
    }
  }
