$(".toggle-nav").click(function () {
    $('.nav-menu').css("left", "0px");
});
$(".mobile-back").click(function () {
    $('.nav-menu').css("left", "-410px");
});

$(".page-wrapper").attr("class", "page-wrapper "+localStorage.getItem('page-wrapper'));
$(".page-body-wrapper").attr("class", "page-body-wrapper "+localStorage.getItem('page-body-wrapper'));

if (localStorage.getItem("page-wrapper") === null && localStorage.getItem('page-body-wrapper') === null) {
    $(".page-wrapper").addClass("compact-wrapper");
    $(".page-body-wrapper").addClass("sidebar-icon");
}

// left sidebar and vertical menu
if($('#pageWrapper').hasClass('compact-wrapper')){

    jQuery('.menu-title').append('<div class="according-menu"><i class="fa fa-angle-double-right"></i></div>');
      jQuery('.menu-title').click(function () {
          jQuery('.menu-title').removeClass('active').find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-double-right"></i></div>');
          jQuery('.menu-content').slideUp('normal');
          if (jQuery(this).next().is(':hidden') == true) {
              jQuery(this).addClass('active');
              jQuery(this).find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-double-down"></i></div>');
              jQuery(this).next().slideDown('normal');
          } else {
              jQuery(this).find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-double-right"></i></div>');
          }
      });
      jQuery('.menu-content').hide();

      
      jQuery('.submenu-title').append('<div class="according-menu"><i class="fa fa-angle-double-right"></i></div>');
      jQuery('.submenu-title').click(function () {
          jQuery('.submenu-title').removeClass('active').find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-double-right"></i></div>');
          jQuery('.submenu-content').slideUp('normal');
          if (jQuery(this).next().is(':hidden') == true) {
              jQuery(this).addClass('active');
              jQuery(this).find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-double-down"></i></div>');
              jQuery(this).next().slideDown('normal');
          } else {
              jQuery(this).find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-double-right"></i></div>');
          }
      });
      jQuery('.submenu-content').hide();

} else if ($('#pageWrapper').hasClass('horizontal-wrapper')) {
    var contentwidth = jQuery(window).width();
    if ((contentwidth) < '992') {
        
        $('#pageWrapper').removeClass('horizontal-wrapper').addClass('compact-wrapper');
        $('.page-body-wrapper').removeClass('horizontal-menu').addClass('sidebar-icon');
        localStorage.setItem('page-wrapper', 'compact-wrapper');
        localStorage.setItem('page-body-wrapper', 'sidebar-icon');
        jQuery('.submenu-title').append('<div class="according-menu"><i class="fa fa-angle-double-right"></i></div>');
        jQuery('.submenu-title').click(function () {
            jQuery('.submenu-title').removeClass('active');
            jQuery('.submenu-title').find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-double-right"></i></div>');
            jQuery('.submenu-content').slideUp('normal');
            if (jQuery(this).next().is(':hidden') == true) {
                jQuery(this).addClass('active');
                jQuery(this).find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-double-down"></i></div>');
                jQuery(this).next().slideDown('normal');
            } else {
                jQuery(this).find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-double-right"></i></div>');
            }
        });
      jQuery('.submenu-content').hide();

      jQuery('.menu-title').append('<div class="according-menu"><i class="fa fa-angle-double-right"></i></div>');
      jQuery('.menu-title').click(function () {
          jQuery('.menu-title').removeClass('active');
          jQuery('.menu-title').find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-double-right"></i></div>');
          jQuery('.menu-content').slideUp('normal');
          if (jQuery(this).next().is(':hidden') == true) {
              jQuery(this).addClass('active');
              jQuery(this).find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-double-down"></i></div>');
              jQuery(this).next().slideDown('normal');
          } else {
              jQuery(this).find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-double-right"></i></div>');
          }
      });
      jQuery('.menu-content').hide();
    }

}

// toggle sidebar
$nav = $('.main-nav');
$header = $('.page-main-header');
$toggle_nav_top = $('#sidebar-toggle');
$toggle_nav_top.click(function() {
$this = $(this);
$nav = $('.main-nav');
$nav.toggleClass('close_icon');
$header.toggleClass('close_icon');
});

$( window ).resize(function() {
$nav = $('.main-nav');
$header = $('.page-main-header');
$toggle_nav_top = $('#sidebar-toggle');
$toggle_nav_top.click(function() {
$this = $(this);
$nav = $('.main-nav');
$nav.toggleClass('close_icon');
$header.toggleClass('close_icon');
});
});

$body_part_side = $('.body-part');
$body_part_side.click(function(){
$toggle_nav_top.attr('checked', false);
$nav.addClass('close_icon');
$header.addClass('close_icon');
});

//    responsive sidebar
var $window = $(window);
var widthwindow = $window.width();
$( window ).resize(function() {
var widthwindaw = $window.width();
if(widthwindaw+17 <= 991){
$toggle_nav_top.attr('checked', false);
$nav.addClass("close_icon");
$header.addClass("close_icon");
}else{
$toggle_nav_top.attr('checked', true);
$nav.removeClass("close_icon");
$header.removeClass("close_icon");
}
});

// horizontal arrows
var view = $("#mainnav");
var move = "500px";
var leftsideLimit = -500

var Windowwidth = jQuery(window).width();
if ((Windowwidth) > '1460') {
var sliderLimit = -500
} else if ((Windowwidth) >= '992') {
var sliderLimit = -1000
} else {
var sliderLimit = 0
}

$("#left-arrow").addClass("disabled");

$("#right-arrow").click(function(){
var currentPosition = parseInt(view.css("left"));
if (currentPosition >= sliderLimit) {
    $("#left-arrow").removeClass("disabled");
    view.stop(false,true).animate({left:"-="+move},{ duration: 400})
    if (currentPosition == sliderLimit) {
        $(this).addClass("disabled");
    }
}
});

$("#left-arrow").click(function(){
var currentPosition = parseInt(view.css("left"));
if (currentPosition < 0) {
    view.stop(false,true).animate({left:"+="+move},{ duration: 400})
    $("#right-arrow").removeClass("disabled");
    $("#left-arrow").removeClass("disabled");
    if (currentPosition >= leftsideLimit) {
        $(this).addClass("disabled");
    }
}

});

// page active
$( ".main-navbar" ).find( "a" ).removeClass("active");
$( ".main-navbar" ).find( "li" ).removeClass("active");

var current = window.location.pathname
$(".main-navbar ul>li a").filter(function() {

    var link = $(this).attr("href");
    if(link){
        if (current.indexOf(link) != -1) {
            $(this).parents().children('a').addClass('active');
            $(this).parents().parents().children('ul').css('display', 'block');
            $(this).addClass('active');
            $(this).parent().parent().parent().children('a').find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-double-down"></i></div>');
            $(this).parent().parent().parent().parent().parent().children('a').find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-double-down"></i></div>');
            return false;
        }
    }
});
