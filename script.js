const photosLand = [
  "img/1.jpg",
  "img/2.jpg",
  "img/3.jpg",
  "img/4.jpg",
  "img/5.jpg",
  "img/6.jpg",
  "img/7.jpg",
  "img/8.jpg",
  "img/9.jpg",
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
const photosPort = [
  "img/100.jpg",
  "img/101.jpg",
  "img/102.jpg",
  "img/103.jpg",
  "img/104.jpg",
  "img/105.jpg",
  "img/106.jpg",
  "img/107.jpg",
  "img/108.jpg",
  "img/109.jpg",
  "img/110.jpg",
  "img/111.jpg",
  "img/112.jpg",
  "img/113.jpg",
  "img/114.jpg",
  "img/115.jpg",
  "img/116.jpg",
  "img/117.jpg",
  "img/118.jpg",
  "img/119.jpg",
  "img/120.jpg",
  "img/121.jpg",
  "img/122.jpg",
  "img/123.jpg",
  "img/124.jpg",
  "img/125.jpg",
  "img/126.jpg",
  "img/127.jpg",
  "img/128.jpg",
  "img/129.jpg",
  "img/130.jpg",
  "img/131.jpg",
  "img/132.jpg",
  "img/133.jpg",
];

let curIndex = 0;
const qtySide = 5;
const slider = document.querySelector(".slider");
let photos = photosLand;
let btnRight;
let btnLeft;
let btnClose;
let autoSlide;
let backToStartBtn;
let switchBtn;
let interval;

document
  .querySelector(".nav__btns--slide")
  .addEventListener("click", function () {
    slider.style.visibility = "visible";
    slider.style.transform = "scale(1)";
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
  slider.innerHTML = ``;
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
      .join("")}
      <div class="autoslide">
          <span class="autoslide__name">Auto slide</span>
          <div class="autoslide__btn">
            <span class="autoslide__btn__name">on</span>
            <span class="autoslide__btn__name">off</span>
            <div class="autoslide__btn__move"></div>
          </div>
        </div>
      <svg class="slider__icon slider__icon--close">
    <use xlink:href="img/symbol.svg#icon-cross"></use>
  </svg>
    <svg class="slider__icon slider__icon--left slider__icon-inactive">
    <use xlink:href="img/symbol.svg#icon-chevron-left"></use>
  </svg>
  <svg class="slider__icon slider__icon--right">
    <use xlink:href="img/symbol.svg#icon-chevron-right"></use>
  </svg>
  <button class="slider__btn slider__btn--reload nav__btns">Back to start</button>
  <button class="slider__btn slider__btn--switch nav__btns">Switch to portret photos</button>
  <img src="${photos[curIndex]}" alt="photo" class="photo photo-curent" id="0"/>
  <div class="slider__bottom">${photos
    .map((el, i) => {
      return `<img src="${el}" alt="photo" data-id="${i}" class="slider__bottom__img" />`;
    })
    .join("")}</div>`
  );
  sliderBottomActive();
  btnRight = document.querySelector(".slider__icon--right");
  btnLeft = document.querySelector(".slider__icon--left");
  btnClose = document.querySelector(".slider__icon--close");
  backToStartBtn = document.querySelector(".slider__btn--reload");
  switchBtn = document.querySelector(".slider__btn--switch");
  autoSlide = document.querySelector(".autoslide__btn");
};
generateSlider();

// const btnRight = document.querySelector(".slider__icon--right");
// const btnLeft = document.querySelector(".slider__icon--left");
// const backToStartBtn = document.querySelector(".slider__btn--reload");
// const switchBtn = document.querySelector(".slider__btn--switch");

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
      switchBtn.style.visibility = "visible";
      btnRight.classList.add("slider__icon-inactive");
      if (interval) {
        interval = clearInterval(interval);
        interval = null;
        document
          .querySelector(".autoslide__btn__move")
          .classList.toggle("autoslide__btn__move--left");
      }
    }
    if (curIndex == 1) btnLeft.classList.remove("slider__icon-inactive");
  }
};
const moveLeft = function () {
  if (curIndex != 0) {
    if (curIndex == photos.length) {
      backToStartBtn.style.visibility = "hidden";
      switchBtn.style.visibility = "hidden";
    }
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
const hideSlider = function () {
  slider.style.visibility = "hidden";
  slider.style.transform = "scale(0.0)";
};
//AUTOSLIDE

document.querySelector(".slider").addEventListener("click", function (e) {
  if (!e.target.closest(".autoslide__btn")) return;
  if (interval) {
    interval = clearInterval(interval);
    interval = null;
  } else {
    interval = setInterval(moveRight, 3000);
  }
  document
    .querySelector(".autoslide__btn__move")
    .classList.toggle("autoslide__btn__move--left");
});
//slider arrow icons click
document.querySelector(".slider").addEventListener("click", function (e) {
  if (!e.target.closest(".slider__icon")) return;
  if (
    e.target.closest(".slider__icon--left") ||
    e.target.classList.contains("slider__icon--left")
  )
    moveLeft();
  if (
    e.target.closest(".slider__icon--right") ||
    e.target.classList.contains("slider__icon--right")
  )
    moveRight();
  if (
    e.target.closest(".slider__icon--close") ||
    e.target.classList.contains("slider__icon--close")
  )
    hideSlider();
});
//keyboard arrows
document.addEventListener("keydown", function (e) {
  e.key == "ArrowRight" && moveRight();
  e.key == "ArrowLeft" && moveLeft();
  e.key == "Escape" && hideSlider();
});
//slider side-img's click
document.querySelector(".slider").addEventListener("click", function (e) {
  if (
    !e.target.classList.contains("photo-next-1") &&
    !e.target.classList.contains("photo-prev-1")
  )
    return;
  if (e.target.classList.contains("photo-next-1")) moveRight();
  if (e.target.classList.contains("photo-prev-1")) moveLeft();
});
//end of slider buttons
document.querySelector(".slider").addEventListener("click", function (e) {
  if (!e.target.classList.contains("slider__btn")) return;
  if (e.target.classList.contains("slider__btn--reload")) {
    while (curIndex != 0) {
      moveLeft();
    }
  }
  if (e.target.classList.contains("slider__btn--switch")) {
    curIndex = 0;
    if (photos.length == photosLand.length) {
      photos = photosPort;
      switchBtn.innerText = `Switch to landscape photos`;
    } else {
      photos = photosLand;
      switchBtn.innerText = `Switch to portret photos`;
    }

    generateSlider();
  }
});

//Slider bottom img click
document.querySelector(".slider").addEventListener("click", function (e) {
  if (!e.target.classList.contains("slider__bottom__img")) return;
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

//slider img enlargement
document.querySelector(".slider").addEventListener("click", function (e) {
  if (!e.target.classList.contains("photo-curent")) return;
  if (e.target.classList.contains("photo-curent-large")) {
    document
      .querySelector(".photo-curent")
      .classList.remove("photo-curent-large");
  } else {
    document.querySelector(".photo-curent").classList.add("photo-curent-large");
  }
});
