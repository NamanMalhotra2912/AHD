$(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 64) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});
$(window).scroll(function(){
    var sticky = $('.stickyLogo'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 64) sticky.addClass('fixedLogo');
    else sticky.removeClass('fixedLogo');
});
$(window).scroll(function(){
    var sticky = $('.aboutSticky'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 24) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});

$(window).scroll(function(){
    var sticky = $('.scrollUp'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 300) sticky.addClass('scrollToTop');
    else sticky.removeClass('fixed');
});

