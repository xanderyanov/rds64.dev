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
});
