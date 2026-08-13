document.querySelectorAll(".langs").forEach((langs) => {
  const langsList = langs.querySelector(".langs__list");
  if (!langsList) return;

  const items = Array.from(langsList.querySelectorAll(".langs__item"));
  if (!items.length) return;

  let highlight = langs.querySelector(".langs__highlight");
  if (!highlight) {
    highlight = document.createElement("div");
    highlight.classList.add("langs__highlight");
    langs.appendChild(highlight);
  }

  let activeItem = langsList.querySelector(".langs__item--active") || items[0];

  const setActive = (target) => {
    items.forEach((item) => item.classList.remove("langs__item--active"));
    target.classList.add("langs__item--active");
  };

  const moveHighlight = (target) => {
    const rect = target.getBoundingClientRect();
    const parentRect = langsList.getBoundingClientRect();
    const left = rect.left - parentRect.left;
    highlight.style.transform = `translate(${left}px, -50%)`;
  };

  setActive(activeItem);
  moveHighlight(activeItem);

  items.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      setActive(item);
      moveHighlight(item);
    });

    item.addEventListener("click", () => {
      activeItem = item;
    });
  });

  langsList.addEventListener("mouseleave", () => {
    setActive(activeItem);
    moveHighlight(activeItem);
  });

  window.addEventListener("resize", () => {
    moveHighlight(activeItem);
  });
});

jQuery(document).ready(function () {
  (function () {
    // your page initialization code here
    // the DOM will be available here
    AOS.init({
      duration: 750,
      offset: 0, // offset (in px) from the original trigger point
      anchorPlacement: "top-bottom", // define where the AOS animations will be triggered
    });
  })();
});

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("scroll", window.scrollY > 0);
});

$(function () {
  $(".header__burger").on("click", function (event) {
    $("body").toggleClass("body--active");
  });
});

$(document).ready(function () {
  var $popup = $(".popup");
  var $popups = {
    contact: $(".popup--contact"),
  };

  // Функция для показа попапа
  function showPopup($popupToShow) {
    $popupToShow.addClass("popup--active").fadeIn(250, function () {
      $(this).animate({ opacity: 1 }, 250);
    });
    $("body").addClass("body--popup");
  }

  // Функция для скрытия попапа
  function hidePopup($popupToHide) {
    $popupToHide.removeClass("popup--active").fadeOut(250, function () {
      $(this).animate({ opacity: 1 }, 250);
    });
    $("body").removeClass("body--popup");
  }

  $(".heading__link").click(function (event) {
    event.stopPropagation();
    event.preventDefault();
    showPopup($popups.contact);
  });

  // Обработчик кликов для скрытия попапов
  $(".cls").click(function (event) {
    event.stopPropagation();
    event.preventDefault();
    hidePopup($popup);
  });

  // Скрываем попап при клике вне его области
  $(document).click(function (event) {
    $.each($popups, function (key, $popupToCheck) {
      if ($popupToCheck.hasClass("popup--active")) {
        var $popupInner = $popupToCheck.find(".popup__inner");
        if (
          !$popupInner.is(event.target) &&
          $popupInner.has(event.target).length === 0
        ) {
          hidePopup($popupToCheck);
        }
      }
    });
  });
});

new Swiper(".services__slider", {
  slidesPerView: 3,
  loop: true,
  speed: 750,
  spaceBetween: 30,
  navigation: {
    prevEl: ".arrow--services-prev",
    nextEl: ".arrow--services-next",
  },
  pagination: {
    el: ".pagination--services",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    301: {
      slidesPerView: 1,
      loop: true,
      speed: 750,
      spaceBetween: 15,
    },
    577: {
      slidesPerView: 1,
      loop: true,
      speed: 750,
      spaceBetween: 30,
    },
    769: {
      slidesPerView: 2,
      loop: true,
      speed: 750,
      spaceBetween: 30,
    },
    1201: {
      slidesPerView: 3,
      loop: true,
      speed: 750,
      spaceBetween: 30,
    },
  },
});

new Swiper(".partners__slider", {
  slidesPerView: 7,
  loop: true,
  speed: 750,
  spaceBetween: 10,
  navigation: {
    prevEl: ".arrow--partners-prev",
    nextEl: ".arrow--partners-next",
  },
  pagination: {
    el: ".pagination--partners",
    type: "bullets",
    clickable: true,
  },

  //     delay: 5000, // задержка между слайдами в миллисекундах
  //     disableOnInteraction: false, // если true, автопрокрутка остановится при взаимодействии пользователя с swiper
  // },
  breakpoints: {
    301: {
      slidesPerView: 1,
      loop: true,
      speed: 750,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 2,
      loop: true,
      speed: 750,
      spaceBetween: 10,
    },
    769: {
      slidesPerView: 4,
      loop: true,
      speed: 750,
      spaceBetween: 10,
    },
    1201: {
      slidesPerView: 7,
      loop: true,
      speed: 750,
      spaceBetween: 10,
    },
  },
});

new Swiper(".certificates__slider", {
  slidesPerView: 5,
  loop: true,
  speed: 750,
  spaceBetween: 25,

  breakpoints: {
    301: {
      slidesPerView: 1.5,
      loop: true,
      speed: 750,
      spaceBetween: 15,
    },
    576: {
      slidesPerView: 2,
      loop: true,
      speed: 750,
      spaceBetween: 20,
    },
    769: {
      slidesPerView: 2.5,
      loop: true,
      speed: 750,
      spaceBetween: 25,
    },
    993: {
      slidesPerView: 3.5,
      loop: true,
      speed: 750,
      spaceBetween: 25,
    },
    1201: {
      slidesPerView: 5,
      loop: true,
      speed: 750,
      spaceBetween: 25,
    },
  },
});

new Swiper(".gallery__slider", {
  slidesPerView: 1,
  loop: true,
  speed: 750,
  spaceBetween: 30,
  navigation: {
    prevEl: ".arrow--gallery-prev",
    nextEl: ".arrow--gallery-next",
  },
  pagination: {
    el: ".pagination--gallery",
    type: "bullets",
    clickable: true,
  },
});
