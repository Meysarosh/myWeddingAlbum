const photos = [
  "img/01.jpg",
  "img/02.jpg",
  "img/03.jpg",
  "img/04.jpg",
  "img/05.jpg",
  "img/06.jpg",
  "img/07.jpg",
  "img/08.jpg",
  "img/09.jpg",
  "img/10.jpg",
  "img/11.jpg",
  "img/12.jpg",
  "img/13.jpg",
  "img/14.jpg",
  "img/15.jpg",
  "img/16.jpg",
  "img/17.jpg",
  "img/18.jpg",
  "img/19.jpg",
  "img/20.jpg",
  "img/21.jpg",
  "img/22.jpg",
  "img/23.jpg",
  "img/24.jpg",
  "img/25.jpg",
  "img/26.jpg",
  "img/27.jpg",
  "img/28.jpg",
  "img/29.jpg",
  "img/30.jpg",
  "img/31.jpg",
  "img/32.jpg",
  "img/33.jpg",
  "img/34.jpg",
  "img/35.jpg",
  "img/36.jpg",
  "img/37.jpg",
  "img/38.jpg",
  "img/39.jpg",
  "img/40.jpg",
  "img/41.jpg",
  "img/42.jpg",
  "img/43.jpg",
  "img/44.jpg",
  "img/45.jpg",
  "img/46.jpg",
  "img/47.jpg",
  "img/48.jpg",
  "img/49.jpg",
  "img/50.jpg",
  "img/51.jpg",
  "img/52.jpg",
  "img/53.jpg",
  "img/54.jpg",
  "img/55.jpg",
  "img/56.jpg",
  "img/57.jpg",
  "img/58.jpg",
  "img/59.jpg",
  "img/60.jpg",
  "img/61.jpg",
  "img/62.jpg",
  "img/63.jpg",
  "img/64.jpg",
  "img/65.jpg",
  "img/66.jpg",
  "img/67.jpg",
  "img/68.jpg",
  "img/69.jpg",
  "img/70.jpg",
  "img/71.jpg",
  "img/72.jpg",
  "img/73.jpg",
  "img/74.jpg",
  "img/75.jpg",
  "img/76.jpg",
  "img/77.jpg",
  "img/78.jpg",
  "img/79.jpg",
  "img/80.jpg",
  "img/81.jpg",
  "img/82.jpg",
  "img/83.jpg",
  "img/84.jpg",
  "img/85.jpg",
  "img/86.jpg",
  "img/87.jpg",
  "img/88.jpg",
  "img/89.jpg",
  "img/90.jpg",
  "img/91.jpg",
  "img/92.jpg",
  "img/93.jpg",
  "img/94.jpg",
  "img/95.jpg",
  "img/96.jpg",
  "img/97.jpg",
  "img/98.jpg",
  "img/99.jpg",
];
const photosPort = ["img/100.jpg"];

let curIndex = 0;
let qtySide = 5;
const slider = document.querySelector(".slider");

document.querySelector(".toslide").addEventListener("click", function () {
  slider.scrollIntoView({ behavior: "smooth" });
});

const sliderBottomActive = function () {
  const slides = document.querySelectorAll(".slider__bottom__img");
  slides.forEach(function (slide, i) {
    slide.style.transform = `translateX(${(i - curIndex) * 100}%)`;
    if (i - curIndex == 0) {
      slide.style.opacity = "1";
    } else if (Math.abs(i - curIndex) == 1) {
      slide.style.opacity = "0.65";
    } else {
      slide.style.opacity = "0.35";
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
    photoCurent.classList.remove("photo-curent-large");
    photoCurent.classList.add("photo-prev");
    photoCurent.classList.add("photo-prev-1");
  }
  if (comand == "L" && curIndex > 0 && curIndex != photos.length) {
    photoCurent.classList.remove("photo-curent");
    photoCurent.classList.remove("photo-curent-large");
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
document.querySelector(".slider").addEventListener("click", function (e) {
  if (!e.target.classList.contains("photo-curent")) return;
  document.querySelector(".photo-curent").classList.add("photo-curent-large");
});
