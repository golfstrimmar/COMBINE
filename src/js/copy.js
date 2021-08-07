import $ from "jquery";

// копирование текста в буфер
$(document).ready(function (e) {
  function copytext(el) {
    var $tmp = $("<textarea>");
    $("body").append($tmp);
    $tmp.val($(el).text()).select();
    document.execCommand("copy");
    $tmp.remove();
  }
  $(".copytext").on("click", function () {
    copytext($(this));
    $("span.baje").addClass('active');
    setTimeout(function () {
      $("span.baje").removeClass("active")
    }, 1000)

  });
});