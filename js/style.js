let player = document.querySelector("lottie-player")
let play = document.querySelector(".congratulations");

$(".click").click(function () {
    $(".congratulations").show();
    player.play();
});

$(".hambur").click(function(){
    $(".PIRST").show(1000);
    $(".letter").hide();
});

$(".set").click(function(){
    $(".settings").fadeIn();
    $(".set").click(function(){
        $(".settings").fadeOut()
    })
})

$(document).ready(function(){
    $('.slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000
});
});

$("#mes").click(function(){
    $('.d').fadeIn()
    $('.x').click(function(){
        $('.d').fadeOut()
    })
});

$('.x0').click(function(){
    $('.con1').fadeOut()
});

$('.x9').click(function(){
    $('.convert').fadeOut()
})

$(document).ready(function(){
  $(".market").click(function(){
      $(".convert").fadeIn()
  });
});

$(".tor").click(function(){
    $('.con1').fadeIn();
    $('.convert').css("display", "none")
});

$(".click").click(function(){
    $('.show-box').fadeIn()
})



// let a = 1;
        
//         function unClICK(){
//             let plus=document.getElementById('optiono')
//             a++
//             plus.textContent = a.toString();
//         }
//         function clickME(){
//             let minus=document.getElementById('optiono')
//             if(a>0){
//                 a--
//                 minus.textContent = a.toString();
//             }
//         }