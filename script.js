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

const nextPhotosMove = function () {
  if (curIndex < photos.length - 1) {
    let photoNext = document.getElementById(curIndex + 1);
    photoNext.classList.remove("photo-next");
    photoNext.classList.remove("photo-next-1");
    photoNext.classList.add("photo-curent");
  }
  //outher next
  if (curIndex + qtySide < photos.length - 1) {
    for (let i = 2; i <= qtySide + 1; i++) {
      let photoRight = document.getElementById(curIndex + i); //+2 +3 +4 +5 +6
      photoRight.classList.remove(`photo-next-${i}`);
      photoRight.classList.add(`photo-next-${i - 1}`);
    }
  } else if (curIndex < photos.length - 2) {
    for (let i = 2; i < photos.length - curIndex; i++) {
      let photoRight = document.getElementById(curIndex + i); //+2 +3 +4 +5 +6
      photoRight.classList.remove(`photo-next-${i}`);
      photoRight.classList.add(`photo-next-${i - 1}`);
    }
  }
};
const curPhotoMove = function () {
  if (curIndex < photos.length) {
    let photoCurent = document.getElementById(curIndex);
    photoCurent.classList.remove("photo-curent");
    photoCurent.classList.add("photo-prev");
    photoCurent.classList.add("photo-prev-1");
  }
};
const prevPhotosMove = function () {
  if (curIndex > 0) {
    if (curIndex <= qtySide) {
      for (let i = 1; i <= curIndex; i++) {
        let photoLeft = document.getElementById(curIndex - i);
        photoLeft.classList.remove(`photo-prev-${i}`);
        photoLeft.classList.add(`photo-prev-${i + 1}`);
      }
    } else {
      for (let i = 1; i <= qtySide; i++) {
        let photoLeft = document.getElementById(curIndex - i);
        photoLeft.classList.remove(`photo-prev-${i}`);
        photoLeft.classList.add(`photo-prev-${i + 1}`);
      }
    }
  }
};

document.querySelector(".slider").addEventListener("click", function (e) {
  if (curIndex == photos.length) {
    curIndex = 0;
    generateSlider();
    return;
  }
  curPhotoMove();
  nextPhotosMove();
  prevPhotosMove();

  if (curIndex < photos.length) curIndex += 1;
  if (curIndex == photos.length) {
    slider.insertAdjacentHTML("beforeend", `<div class="reload">RELOAD</div>`);
  }
});
