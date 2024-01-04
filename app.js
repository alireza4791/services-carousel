	//carousel
	let carouselServiceCards = document.querySelectorAll('.gallery-slide-wrap');
	let serviceCardTitle = document.querySelectorAll('.gallery-info__title');
	let serviceCardText = document.querySelectorAll('.gallery-info__subtitle');
	let serviceDisplayImg = document.querySelector('.display-image');
	let displayImgPart = document.querySelectorAll('.display-img-part');
	let tabContainer = document.querySelector('.w-tab-pane');
	let tabOptions = document.querySelectorAll('.tab-option-container');

	let placeHolderCard;
	let zIndexCounter = 0;
	let serviceCarouselCardTimeout;
	let currentDisplayImg;
	let currentDisplayImgIndex = 0;

	tabOptions.forEach((tab, index) => {
		tab.addEventListener('click', () => {
			if (index != 0) {
				let tabLoopCounter = 0;
				for (let i = 0; i < index; i++) {
					tabLoopCounter += parseInt(tabOptions[i].dataset.tabSize);
				}
				tabLoopCounter++;

				serviceCardTitle.forEach((card, cardIndex) => {
					if (cardIndex === tabLoopCounter) {
						card.classList.add('active');
					} else {
						card.classList.remove('active');
					}
				})

				serviceCardText.forEach((card, cardIndex) => {
					if (cardIndex === tabLoopCounter) {
						card.classList.add('active');
					} else {
						card.classList.remove('active');
					}
				});
			}
			else {
				serviceCardTitle.forEach((card, cardIndex) => {
					if (cardIndex === index) {
						card.classList.add('active');
					} else {
						card.classList.remove('active');
					}
				})

				serviceCardText.forEach((card, cardIndex) => {
					if (cardIndex === index) {
						card.classList.add('active');
					} else {
						card.classList.remove('active');
					}
				});
			}
			currentDisplayImgIndex = index;
		})

		tab.addEventListener('touchstart', () => {
			if (index != 0) {
				let tabLoopCounter = 0;
				for (let i = 0; i < index; i++) {
					tabLoopCounter += parseInt(tabOptions[i].dataset.tabSize);
				}
				tabLoopCounter++;

				serviceCardTitle.forEach((card, cardIndex) => {
					if (cardIndex === tabLoopCounter) {
						card.classList.add('active');
					} else {
						card.classList.remove('active');
					}
				})

				serviceCardText.forEach((card, cardIndex) => {
					if (cardIndex === tabLoopCounter) {
						card.classList.add('active');
					} else {
						card.classList.remove('active');
					}
				});
			}
			else {
				serviceCardTitle.forEach((card, cardIndex) => {
					if (cardIndex === index) {
						card.classList.add('active');
					} else {
						card.classList.remove('active');
					}
				})

				serviceCardText.forEach((card, cardIndex) => {
					if (cardIndex === index) {
						card.classList.add('active');
					} else {
						card.classList.remove('active');
					}
				});
			}
			currentDisplayImgIndex = index;
		})

	})

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

			// serviceCardTitle.innerText = cardTitles[index];

			serviceCardTitle.forEach((card, cardIndex) => {
				if (cardIndex === index) {
					card.classList.add('active');
				} else {
					card.classList.remove('active');
				}
			})
			// serviceCardText.innerText = cardText[index];

			serviceCardText.forEach((card, cardIndex) => {
				if (cardIndex === index) {
					card.classList.add('active');
				} else {
					card.classList.remove('active');
				}
			});

			currentDisplayImg = displayImgPart[currentDisplayImgIndex]
			currentDisplayImg.appendChild(placeHolderCard);

			// displayImgPart.querySelector('.carousel-img-container').style.height = '0%';
			// displayImgPart.querySelector('.carousel-img-container').style.height = '100%';

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

			// serviceCardTitle.innerText = cardTitles[index];

			serviceCardTitle.forEach((card, cardIndex) => {
				if (cardIndex === index) {
					card.classList.add('active');
				} else {
					card.classList.remove('active');
				}
			})
			// serviceCardText.innerText = cardText[index];

			serviceCardText.forEach((card, cardIndex) => {
				if (cardIndex === index) {
					card.classList.add('active');
				} else {
					card.classList.remove('active');
				}
			});

			currentDisplayImg = displayImgPart[currentDisplayImgIndex]
			currentDisplayImg.appendChild(placeHolderCard);

			// displayImgPart.querySelector('.carousel-img-container').style.height = '0%';
			// displayImgPart.querySelector('.carousel-img-container').style.height = '100%';

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
