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

// ---copytext-----
  $(".copytext").on("click", function () {
    let temp =  $(this).find(".card__info")
    let mmm = $(this).find(" .copy-text ")

       copytext(
        temp
        );  
         
       copytext(
        mmm
        );   

    $("span.baje").addClass('active');

    setTimeout(function () {
      $("span.baje").removeClass("active")
    }, 1000)

  });
// -------/copytext------------

});  
