const photos = [
  "img/img-0.jpg",
  "img/img-1.jpg",
  "img/img-2.jpg",
  "img/img-3.jpg",
  "img/img-4.jpg",
  "img/img-5.jpg",
  "img/img-6.jpg",
  "img/img-7.jpg",
  "img/img-8.jpg",
  "img/img-9.jpg",
  "img/img-10.jpg",
  "img/img-11.jpg",
  "img/img-12.jpg",
  "img/img-13.jpg",
  "img/img-14.jpg",
];
let curIndex = 0;
let qtySide = 5;
const slider = document.querySelector(".slider");

const sliderBottomActive = function () {
  const slides = document.querySelectorAll(".slider__bottom__img");
  slides.forEach(function (slide, i) {
    slide.style.transform = `translateX(${(i - curIndex) * 100}%)`;
    if (i - curIndex == 0) {
      slide.style.opacity = "1";
    } else if (Math.abs(i - curIndex) == 1) {
      slide.style.opacity = "0.5";
    } else if (Math.abs(i - curIndex) == 2) {
      slide.style.opacity = "0.35";
    } else if (Math.abs(i - curIndex) == 3) {
      slide.style.opacity = "0.2";
    } else {
      slide.style.opacity = "0.1";
    }
  });
};

const generateSlider = function () {
  slider.innerHTML = `
  `;
  slider.insertAdjacentHTML(
    "afterbegin",
    `<svg class="slider__icon slider__icon--left slider__icon-inactive">
    <use xlink:href="img/symbol.svg#icon-chevron-left"></use>
  </svg>
  <svg class="slider__icon slider__icon--right">
    <use xlink:href="img/symbol.svg#icon-chevron-right"></use>
  </svg>
  <button class="reload">Back to start</button>
  <img src="${photos[curIndex]}" alt="photo" class="photo photo-curent" id="0"/>`
  );
  slider.insertAdjacentHTML(
    "afterbegin",
    `${photos
      .map((el, i) => {
        if (i > 0 && i <= qtySide) {
          return `<img src="${el}" alt="photo" id="${i}" class="photo photo-next photo-next-${i}" />`;
        }
        if (i > qtySide) {
          return `<img src="${el}" alt="photo" id="${i}" class="photo photo-next photo-next-${
            qtySide + 1
          }" />`;
        }
      })
      .join("")}`
  );
  slider.insertAdjacentHTML(
    "beforeend",
    `<div class="slider__bottom">${photos
      .map((el, i) => {
        return `<img src="${el}" alt="photo" data-id="${i}" class="slider__bottom__img" />`;
      })
      .join("")}</div>`
  );
  sliderBottomActive();
};
generateSlider();

const btnRight = document.querySelector(".slider__icon--right");
const btnLeft = document.querySelector(".slider__icon--left");
const backToStartBtn = document.querySelector(".reload");

const nextPhotosMove = function (comand) {
  if (comand == "R") {
    if (curIndex < photos.length - 1) {
      for (let i = 1; i <= qtySide + 1 && i < photos.length - curIndex; i++) {
        let photoNext = document.getElementById(curIndex + i);
        if (i == 1) {
          photoNext.classList.remove("photo-next");
          photoNext.classList.remove("photo-next-1");
          photoNext.classList.add("photo-curent");
        } else {
          photoNext.classList.remove(`photo-next-${i}`);
          photoNext.classList.add(`photo-next-${i - 1}`);
        }
      }
    }
  }
  if (comand == "L") {
    if (curIndex < photos.length - 1) {
      for (let i = 1; i <= qtySide && i < photos.length - curIndex; i++) {
        let photoNext = document.getElementById(curIndex + i);
        photoNext.classList.remove(`photo-next-${i}`);
        photoNext.classList.add(`photo-next-${i + 1}`);
      }
    }
  }
};
const curPhotoMove = function (comand) {
  let photoCurent = document.getElementById(curIndex);

  if (comand == "R" && curIndex < photos.length) {
    photoCurent.classList.remove("photo-curent");
    photoCurent.classList.add("photo-prev");
    photoCurent.classList.add("photo-prev-1");
  }
  if (comand == "L" && curIndex > 0 && curIndex != photos.length) {
    photoCurent.classList.remove("photo-curent");
    photoCurent.classList.add("photo-next");
    photoCurent.classList.add("photo-next-1");
  }
};
const prevPhotosMove = function (comand) {
  if (comand == "R") {
    if (curIndex > 0) {
      for (let i = 1; i <= curIndex && i <= qtySide; i++) {
        let photoLeft = document.getElementById(curIndex - i);
        photoLeft.classList.remove(`photo-prev-${i}`);
        photoLeft.classList.add(`photo-prev-${i + 1}`);
      }
    }
  }
  if (comand == "L") {
    if (curIndex > 0) {
      for (let i = 1; i <= curIndex && i <= qtySide + 1; i++) {
        let photoLeft = document.getElementById(curIndex - i);
        if (i == 1) {
          photoLeft.classList.remove(`photo-prev-${i}`);
          photoLeft.classList.remove(`photo-prev`);
          photoLeft.classList.add("photo-curent");
        } else {
          photoLeft.classList.remove(`photo-prev-${i}`);
          photoLeft.classList.add(`photo-prev-${i - 1}`);
        }
      }
    }
  }
};

const moveRight = function () {
  if (curIndex != photos.length) {
    prevPhotosMove("R");
    curPhotoMove("R");
    nextPhotosMove("R");

    if (curIndex < photos.length) curIndex += 1;
    sliderBottomActive();
    if (curIndex == photos.length) {
      backToStartBtn.style.visibility = "visible";
      btnRight.classList.add("slider__icon-inactive");
    }
    if (curIndex == 1) btnLeft.classList.remove("slider__icon-inactive");
  }
};
const moveLeft = function () {
  if (curIndex != 0) {
    if (curIndex == photos.length) backToStartBtn.style.visibility = "hidden";
    prevPhotosMove("L");
    curPhotoMove("L");
    nextPhotosMove("L");

    if (curIndex > 0) curIndex -= 1;
    sliderBottomActive();
    if (curIndex == 0) {
      btnLeft.classList.add("slider__icon-inactive");
    }
    if (curIndex == photos.length - 1) {
      btnRight.classList.remove("slider__icon-inactive");
    }
  }
};

btnLeft.addEventListener("click", function () {
  moveLeft();
});
btnRight.addEventListener("click", function () {
  moveRight();
});
backToStartBtn.addEventListener("click", function () {
  while (curIndex != 0) {
    moveLeft();
  }
});
document
  .querySelector(".slider__bottom")
  .addEventListener("click", function (e) {
    let id = e.target.dataset.id;
    if (curIndex < id) {
      while (curIndex != id) {
        moveRight();
      }
    } else if (curIndex > id) {
      while (curIndex != id) {
        moveLeft();
      }
    }
    sliderBottomActive();
  });
document.addEventListener("keydown", function (e) {
  e.key == "ArrowRight" && moveRight();
  e.key == "ArrowLeft" && moveLeft();
});
