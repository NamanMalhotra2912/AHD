$(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 64) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});

$(window).scroll(function(){
    var sticky = $('.scrollUp'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 300) sticky.addClass('scrollToTop');
    else sticky.removeClass('fixed');
});

