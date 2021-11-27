"use strict";

var player = document.querySelector("lottie-player");
var play = document.querySelector(".congratulations");
$(".click").click(function () {
  $(".congratulations").show();
  player.play();
});
$(".hambur").click(function () {
  $(".PIRST").show(1000);
  $(".letter").hide();
});
$(".set").click(function () {
  $(".settings").fadeIn();
  $(".set").click(function () {
    $(".settings").fadeOut();
  });
});
$(document).ready(function () {
  $('.slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000
  });
});
$("#mes").click(function () {
  $('.d').fadeIn();
  $('.x').click(function () {
    $('.d').fadeOut();
  });
});
$(document).ready(function () {
  $(".market").click(function () {
    //   $("body").css("backdrop-filter", "blur(5px)");
    $(".convert").fadeIn();
  });
});
$(".tor").click(function () {
  $('.con1').fadeIn();
  $('.convert').css("display", "none");
});
$(".click").click(function () {
  $('.show-box').fadeIn();
});