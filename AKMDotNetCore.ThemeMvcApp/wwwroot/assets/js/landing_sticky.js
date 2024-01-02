$(window).scroll(function() {
    if ($(this).scrollTop() > 350){  
        $('header').addClass("sticky");
    }
    else{
        $('header').removeClass("sticky");
    }
});