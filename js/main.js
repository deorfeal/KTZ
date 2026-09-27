// Aos - the right initialisation
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
// //

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

$(function () {
  $(".header__burger").on("click", function (event) {
    $("body").toggleClass("body--active");
  });
});

// Получаем все элементы с классом tub
if (document.querySelector("#tubs")) {
  const tabs = document.querySelectorAll("#tubs .tub");
  const tubElement = document.querySelectorAll("#tub-items .tub-element");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", function () {
      tabs.forEach((t) => t.classList.remove("tub--active"));

      this.classList.add("tub--active");

      tubElement.forEach((tub) => tub.classList.remove("tub-element--active"));

      if (tubElement[index]) {
        tubElement[index].classList.add("tub-element--active");
      }
    });
  });
}
//

$(function () {
  const $popup = $(".popup--application");

  if (!$popup.length) {
    return;
  }

  const showPopup = () => {
    $popup
      .addClass("popup--active")
      .attr("aria-hidden", "false")
      .stop(true, true)
      .fadeIn(250);
    $("body").addClass("body--popup");
  };

  const hidePopup = () => {
    $popup
      .removeClass("popup--active")
      .attr("aria-hidden", "true")
      .stop(true, true)
      .fadeOut(250);
    $("body").removeClass("body--popup");
  };

  $(".header__link, .heading__link.btn--orange, .contacts__link").on(
    "click",
    function (event) {
      event.preventDefault();
      showPopup();
    },
  );

  $popup.on("click", ".popup__close", hidePopup);

  $popup.on("click", function (event) {
    if (!$(event.target).closest(".popup__inner").length) {
      hidePopup();
    }
  });

  $(document).on("keydown", function (event) {
    if (event.key === "Escape" && $popup.hasClass("popup--active")) {
      hidePopup();
    }
  });
});

//

if (document.querySelector(".aside")) {
  const aside = document.querySelector(".aside");
  const offerInner = document.querySelector(".offer__inner");
  let animationFrame;

  const updateAsidePosition = () => {
    if (window.innerWidth <= 1200 || !offerInner) {
      aside.style.transform = "";
      return;
    }

    const scrollTop = window.pageYOffset;
    const asideTop = parseFloat(window.getComputedStyle(aside).top) || 0;
    const offerInnerRect = offerInner.getBoundingClientRect();
    const offerInnerTop = scrollTop + offerInnerRect.top;
    const offerInnerBottom = scrollTop + offerInnerRect.bottom;
    const maxTranslate = offerInnerBottom - offerInnerTop - aside.offsetHeight;
    const translate = Math.max(
      0,
      Math.min(scrollTop + asideTop - offerInnerTop, maxTranslate),
    );

    aside.style.transform = `translateY(${translate}px)`;
  };

  const requestAsidePositionUpdate = () => {
    if (animationFrame) {
      return;
    }

    animationFrame = window.requestAnimationFrame(() => {
      updateAsidePosition();
      animationFrame = null;
    });
  };

  window.addEventListener("scroll", requestAsidePositionUpdate, { passive: true });
  window.addEventListener("resize", requestAsidePositionUpdate);
  updateAsidePosition();
}

//

$(function () {
  $(".burger").on("click", function (event) {
    $("body").toggleClass("body--active");
  });

  $(".menu__link").on("click", function (event) {
    $("body").toggleClass("body--active");
  });
});

new Swiper(".products__swiper", {
  slidesPerView: 6,
  loop: true,
  speed: 750,
  spaceBetween: 30,
  breakpoints: {
    301: {
      slidesPerView: 1.5,
      loop: true,
      speed: 750,
      spaceBetween: 15,
      centeredSlides: true,
      initialSlide: 1,
    },
    769: {
      slidesPerView: 2.5,
      loop: true,
      speed: 750,
      spaceBetween: 20,
      centeredSlides: true,
      initialSlide: 1,
    },
    993: {
      slidesPerView: 3.5,
      loop: true,
      speed: 750,
      spaceBetween: 30,
      centeredSlides: true,
      initialSlide: 1,
    },
    1201: {
      slidesPerView: 6,
      loop: true,
      speed: 750,
      spaceBetween: 30,
      centeredSlides: false,
      initialSlide: 0,
    },
  },
});

new Swiper(".clients__swiper", {
  slidesPerView: 12,
  loop: true,
  speed: 750,
  spaceBetween: 30,
  breakpoints: {
    301: {
      slidesPerView: 3,
      loop: true,
      speed: 750,
      spaceBetween: 15,
      centeredSlides: true,
      initialSlide: 1,
    },
    769: {
      slidesPerView: 4,
      loop: true,
      speed: 750,
      spaceBetween: 20,
      centeredSlides: true,
      initialSlide: 1,
    },
    993: {
      slidesPerView: 6,
      loop: true,
      speed: 750,
      spaceBetween: 30,
      centeredSlides: true,
      initialSlide: 1,
    },
    1201: {
      slidesPerView: 12,
      loop: true,
      speed: 750,
      spaceBetween: 30,
      centeredSlides: false,
      initialSlide: 0,
    },
  },
});

new Swiper(".certificates__swiper", {
  slidesPerView: 5,
  loop: true,
  speed: 750,
  spaceBetween: 30,
  navigation: {
    prevEl: ".arrow-certificates--prev",
    nextEl: ".arrow-certificates--next",
  },
  pagination: {
    el: ".pagination--certificates",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    301: {
      slidesPerView: 1.5,
      loop: true,
      speed: 750,
      spaceBetween: 15,
      centeredSlides: true,
      initialSlide: 1,
    },
    769: {
      slidesPerView: 2,
      loop: true,
      speed: 750,
      spaceBetween: 20,
      centeredSlides: true,
      initialSlide: 1,
    },
    993: {
      slidesPerView: 3,
      loop: true,
      speed: 750,
      spaceBetween: 20,
      centeredSlides: true,
      initialSlide: 1,
    },
    1201: {
      slidesPerView: 5,
      loop: true,
      speed: 750,
      spaceBetween: 30,
      centeredSlides: false,
      initialSlide: 0,
    },
  },
});
