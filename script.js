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
const btnRight = document.querySelector(".slider__icon--right");
const btnLeft = document.querySelector(".slider__icon--left");
const backToStartBtn = document.querySelector(".reload");

const generateSlider = function () {
  slider.innerHTML = `
  `;
  slider.insertAdjacentHTML(
    "afterbegin",
    `<img src="${photos[curIndex]}" alt="photo" class="photo photo-curent" id="0"/>`
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
};
generateSlider();

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
  prevPhotosMove("R");
  curPhotoMove("R");
  nextPhotosMove("R");

  if (curIndex < photos.length) curIndex += 1;

  if (curIndex == photos.length) {
    backToStartBtn.style.visibility = "visible";
    btnRight.classList.add("slider__icon-inactive");
  }
  if (curIndex == 1) btnLeft.classList.remove("slider__icon-inactive");
};
const moveLeft = function () {
  if (curIndex == photos.length) backToStartBtn.style.visibility = "hidden";
  prevPhotosMove("L");
  curPhotoMove("L");
  nextPhotosMove("L");

  if (curIndex > 0) curIndex -= 1;

  if (curIndex == 0) {
    btnLeft.classList.add("slider__icon-inactive");
  }
  if (curIndex == photos.length - 1) {
    btnRight.classList.remove("slider__icon-inactive");
  }
};
btnLeft.addEventListener("click", function () {
  if (curIndex != 0) moveLeft();
});
btnRight.addEventListener("click", function () {
  if (curIndex != photos.length) moveRight();
});
backToStartBtn.addEventListener("click", function () {
  while (curIndex != 0) {
    moveLeft();
  }
});
