$("#mainNav ul li a[href^='#']").on('click', function(e) {
   e.preventDefault();
   var hash = this.hash;
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 1000, function(){
       window.location.hash = hash;
     });
});

// on scroll
let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll(".highlight-on-scroll");

let lastId;
let cur = [];

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;
  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// bottom to top
$(window).on('scroll', function() {
    if ($(this).scrollTop() > 600) {
        $('.tap-top').fadeIn();
    } else {
        $('.tap-top').fadeOut();
    }
});
$('.tap-top').click( function() {
    $("html, body").animate({
        scrollTop: 0
    }, 600);
    return false;
});

// navbar
$(document).ready(function(){
  $(".custom_nav , .js-scroll ,navabr_btn-set").click(function(){
    $(".hidenav").toggle();
  });
});

// navbar active class
var header = document.getElementById("scroll-spy");
var btns = header.getElementsByClassName("js-scroll");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}