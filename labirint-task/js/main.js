document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".content-left__swiper-container", {
    slidesPerView: "auto",
    spaceBetween: 8,
    navigation: {
      nextEl: ".content-left__swiper-button-next",
      prevEl: ".content-left__swiper-button-prev",
    },
    breakpoints: {
      765: {
        slidesPerView: 2,
        spaceBetween: 14,
      },
    },
  });

  let popUp = document.querySelector("#popup");
  let openPopup = document.querySelector("#openPopup");
  let closePopup = document.querySelector("#closePopup");

  openPopup.addEventListener("click", function () {
    popUp.classList.add("is-active");
    document.querySelectorAll(".section").style.overflow = "hidden";
  });

  closePopup.addEventListener("click", function () {
    popUp.classList.toggle("is-active");
    document.querySelectorAll(".section").style.overflow = "unset";
  });
});
