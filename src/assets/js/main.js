// $(window).on("load", function () {

// });

$(function () {
  $(".go_to1").on("click", function () {
    var scroll_el = $(".go_adr1");
    headerHeight = $(".header__area").height();
    if ($(scroll_el).length != 0) {
      $("html, body").animate({ scrollTop: $(scroll_el).offset().top - headerHeight }, 1000);
    }
    return false;
  });

  if ($(".carousel__container").length) {
    var carousel = new Swiper(".carousel__container", {
      slidesPerView: 1,
      spaceBetween: 15,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      autoplay: {
        delay: 5500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".carousel__btnNext",
        prevEl: ".carousel__btnPrev",
      },
      breakpoints: {
        1024: {
          slidesPerView: 6,
          spaceBetween: 15,
        },
        920: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        600: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 1,
        },
      },
    });
  }
});
