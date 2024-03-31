//carousel
let carouselServiceCards = document.querySelectorAll('.gallery-slide-wrap');
let serviceCardTitle = document.querySelectorAll('.gallery-info__title');
let serviceCardText = document.querySelectorAll('.gallery-info__subtitle');
let serviceDisplayImg = document.querySelector('.display-image');
let displayImgPart = document.querySelectorAll('.display-img-part');



let placeHolderCard;
let zIndexCounter = 0;
let serviceCarouselCardTimeout;
let currentDisplayImg;
let currentDisplayImgIndex = 0;

placeHolderCard = carouselServiceCards[0].querySelector('.gallery-img').cloneNode(true);
currentDisplayImg = displayImgPart[currentDisplayImgIndex];
currentDisplayImg.appendChild(placeHolderCard);
serviceCarouselCardTimeout = setTimeout(() => {
    currentDisplayImg.querySelectorAll('.carousel-img-container')[currentDisplayImg.querySelectorAll('.carousel-img-container').length - 1].style.height = '100%';
}, 100);

serviceCarouselCardTimeout = setTimeout(() => {
    if (currentDisplayImg.children[1]) {
        currentDisplayImg.removeChild(currentDisplayImg.children[0]);
    }
}, 800);

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

        serviceCardTitle.forEach((card, cardIndex) => {
            if (cardIndex === index) {
                card.classList.add('is--active');
            } else {
                card.classList.remove('is--active');
            }
        })

        serviceCardText.forEach((card, cardIndex) => {
            if (cardIndex === index) {
                card.classList.add('is--active');
            } else {
                card.classList.remove('is--active');
            }
        });

        currentDisplayImg = displayImgPart[currentDisplayImgIndex]
        currentDisplayImg.appendChild(placeHolderCard);

        serviceCarouselCardTimeout = setTimeout(() => {
            currentDisplayImg.querySelectorAll('.carousel-img-container')[currentDisplayImg.querySelectorAll('.carousel-img-container').length - 1].style.height = '100%';
        }, 100);

        serviceCarouselCardTimeout = setTimeout(() => {
            if (currentDisplayImg.children[1]) {
                currentDisplayImg.removeChild(currentDisplayImg.children[0]);
            }
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

        serviceCardTitle.forEach((card, cardIndex) => {
            if (cardIndex === index) {
                card.classList.add('is--active');
            } else {
                card.classList.remove('is--active');
            }
        })

        serviceCardText.forEach((card, cardIndex) => {
            if (cardIndex === index) {
                card.classList.add('is--active');
            } else {
                card.classList.remove('is--active');
            }
        });

        currentDisplayImg = displayImgPart[currentDisplayImgIndex]
        currentDisplayImg.appendChild(placeHolderCard);

        serviceCarouselCardTimeout = setTimeout(() => {
            currentDisplayImg.querySelectorAll('.carousel-img-container')[currentDisplayImg.querySelectorAll('.carousel-img-container').length - 1].style.height = '100%';
        }, 100);

        serviceCarouselCardTimeout = setTimeout(() => {
            if (currentDisplayImg.children[1]) {
                currentDisplayImg.removeChild(currentDisplayImg.children[0]);
            }
        }, 800);
    });
})



//gallery slider
// const slider = document.querySelector(".is--items");
// const firstCardWidth = slider.querySelector(".is--item").offsetWidth;
const sliders = document.querySelectorAll(".is--items");
const firstCardWidth = sliders[0].querySelector(".is--item").offsetWidth;
let isDown = false;
let startX;
let scrollLeft;
let timeoutId;
let touchStartX; // Variable to store the initial touch position
let touchScrollLeft; // Variable to store the initial scroll position

sliders.forEach((slider, index) => {
    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("touchstart", handleTouchStart);
    slider.addEventListener("mouseleave", handleMouseLeave);
    slider.addEventListener("mouseup", handleMouseUp);
    slider.addEventListener("touchend", handleTouchEnd);
    slider.addEventListener("mousemove", handleMouseMove);
    slider.addEventListener("touchmove", handleTouchMove);
    slider.addEventListener("wheel", handleWheel);
});

var velX = 0;
var momentumID;
let currentSliderIndex = 0;

function beginMomentumTracking(index) {
    currentSliderIndex = index;
    cancelMomentumTracking();
    momentumID = requestAnimationFrame(momentumLoop);
}

function cancelMomentumTracking() {
    cancelAnimationFrame(momentumID);
}

function momentumLoop() {
    sliders[currentSliderIndex].scrollLeft += velX;
    velX *= 0.955;
    if (Math.abs(velX) > 0.5) {
        momentumID = requestAnimationFrame(momentumLoop);
    }
}

function handleMouseDown(e) {
    isDown = true;
    const slider = e.currentTarget;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    cancelMomentumTracking();
}

function handleTouchStart(e) {
    isDown = true;
    const slider = e.currentTarget;
    slider.classList.add("active");
    const touch = e.touches[0];
    touchStartX = touch.pageX - slider.offsetLeft;
    touchScrollLeft = slider.scrollLeft;
    cancelMomentumTracking();
}

function handleMouseLeave() {
    isDown = false;
    this.classList.remove("active");
}

function handleMouseUp() {
    isDown = false;
    this.classList.remove("active");
    beginMomentumTracking(Array.from(sliders).indexOf(this));
}

function handleTouchEnd() {
    isDown = false;
    this.classList.remove("active");
    beginMomentumTracking(Array.from(sliders).indexOf(this));
}

function handleMouseMove(e) {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - this.offsetLeft;
    const walk = (x - startX) * 3;
    const prevScrollLeft = this.scrollLeft;
    this.scrollLeft = scrollLeft - walk;
    velX = this.scrollLeft - prevScrollLeft;
}

function handleTouchMove(e) {
    if (!isDown) return;
    e.preventDefault();
    const slider = e.currentTarget;
    const touch = e.touches[0];
    const x = touch.pageX - slider.offsetLeft;
    const walk = (x - touchStartX) * 3;
    const prevScrollLeft = slider.scrollLeft;
    slider.scrollLeft = touchScrollLeft - walk;
    velX = slider.scrollLeft - prevScrollLeft;
}

function handleWheel(e) {
    cancelMomentumTracking();
}


window.addEventListener('load', () => {
    serviceCardTitle[0].classList.add("is--active");
    serviceCardText[0].classList.add("is--active");
})
