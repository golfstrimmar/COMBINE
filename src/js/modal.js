import $ from "jquery";



$(document).ready(function () {
    let Popups = $(".popups");
    Popups.fadeOut(200);
    $(".popups-init-js").on("click", function () {
      let rel = $(this).attr("rel");
      let pop = $("div#" + rel);
      pop.fadeIn(200);
      $("body").css("overflow", "hidden");
    });
  
    $(".close-js").on("click", function () {
      Popups.fadeOut(200);
      $("body").css("overflow", "visible");
    });
  
    $(document).on("mouseup", function (e) {
      if ($(".popups__overlay").is(e.target)) {
        Popups.fadeOut(200);
        $("body").removeClass("lock");
        $("body").css("overflow", "visible");
      }
    });
  });