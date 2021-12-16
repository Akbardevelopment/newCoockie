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
$('.x0').click(function () {
  $('.con1').fadeOut();
});
$('.x9').click(function () {
  $('.convert').fadeOut();
});
$('.endbut').click(function () {
  $('.endco').fadeIn();
  $('.con1').fadeOut();
});
$('.x10').click(function () {
  $('.endco').fadeOut();
});
$(document).ready(function () {
  $(".market").click(function () {
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
var a = 1;

function unClICK() {
  var plus = document.getElementById('optiono');
  a++;
  plus.textContent = a.toString();
  var b = a * 250000 + " so'm";
  var d = document.getElementById('kol2').innerHTML = b;
  document.getElementById('kol2').innerHTML = d;
  document.getElementById("endbut").style.backgroundColor = "yellow";
  document.getElementById("endbut").style.cursor = "pointer";
}

function clickME() {
  if (a > 0) {
    var plus = document.getElementById('optiono');
    a--;
    plus.textContent = a.toString();
    var b = a * 250000 + " so'm";
    var d = document.getElementById('kol2').innerHTML = b;
    document.getElementById('kol2').innerHTML = d;
  }

  if (a == 0) {
    var endbut = document.getElementById("endbut");
    endbut.style.backgroundColor = "rgb(221, 221, 221)";
    endbut.style.cursor = "auto";
    endbut.style.transition = "all 0.5s ease-in-out";
  }
}

var email = document.getElementById('email');

function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "akbardaminov8@gmail.com",
    Password: "akbardaminov07",
    To: email,
    From: "akbardaminov51@gmail.com",
    Subject: "Test mail Subject",
    Body: "Test Mail Body"
  }).then(function (message) {
    alert("mail sent successfully");
  });
}

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

$(window).on('load', function () {
  $('.filter').hide();
  $('body').show();
});