///////////////
// Slider
function Slider() {
  const slideItem = document.querySelectorAll('.slider__item');
  const btnPrev = document.querySelector('.slide-prev');
  const btnNext = document.querySelector('.slide-next');
  let currentSlide = 1;

  const changeSlide = function (slides) {
      slideItem.forEach((slide, index) => (slide.style.transform = `translateX(${100 * (index - slides)}%)`));
  };
  changeSlide(currentSlide);

  btnNext.addEventListener('click', function () {
      currentSlide++; 
      if (slideItem.length - 1 < currentSlide) {
          currentSlide = 0;
      };
      changeSlide(currentSlide);
});
  btnPrev.addEventListener('click', function () {
      currentSlide--;
      if (0 >= currentSlide) {
          currentSlide = slideItem.length - 1;
      }; 
      changeSlide(currentSlide);
  });

};
Slider();

///////////////
// GALLERY MODAL

const images = document.querySelectorAll(".gallery__items img");
let imgIndex
let imgSrc;
images.forEach((img, i) => {
  img.addEventListener("click", (e) => {
    imgSrc = e.target.src;
    imgModal(imgSrc);
    imgIndex = i;
  });
});

let imgModal = (src) => {
  const modal = document.createElement("div");
  modal.setAttribute("class", "modal");
  document.querySelector("body").append(modal);
  const newImage = document.createElement("img");
  newImage.setAttribute("src", src);
  const closeBtn = document.createElement("span");
  closeBtn.setAttribute("class", "closeBtn");
  const overlay = document.createElement("div");
  overlay.setAttribute("class", "modal__overlay");
  closeBtn.onclick = () => {
      modal.remove();
  };
  overlay.onclick = () => {
    modal.remove();
};
document.addEventListener('keydown', function (e) {

  if (e.key === 'Escape') {
    modal.remove();
  }
});

const nextBtn = document.createElement("div");
nextBtn.setAttribute("class", "modal__next");
nextBtn.onclick = () => {
    newImage.setAttribute("src", nextImg())
};
const prevBtn = document.createElement("div");
prevBtn.setAttribute("class", "modal__prev");
prevBtn.onclick = () => {
    newImage.setAttribute("src", prevImg())
}
modal.append(overlay,  prevBtn, newImage, closeBtn, nextBtn);
};

let nextImg = () => {
    imgIndex++;
    if (imgIndex >= images.length) {
        imgIndex = 0
    }
    return images[imgIndex].src;
};
let prevImg = () => {
    imgIndex--;
    if (imgIndex < 0) {
        imgIndex = images.length - 1
    }
    return images[imgIndex].src
}



///////////////
// form modal
document.getElementById('form').addEventListener('submit', function(e){
  e.preventDefault();
  console.log('jes');
  let formModal = () => {
    const modal = document.createElement("div");
    modal.setAttribute("class", "modal modal__form");

    document.querySelector("body").append(modal);
    const content = document.createElement("p");
    content.innerHTML="You are subscribed";
    const close = document.createElement("span");
    close.innerHTML="Ok";
    close.setAttribute("class", "btn");

    modal.append(content, close);
    close.onclick = () => {
        modal.remove();
    };
}
  formModal();
  });






