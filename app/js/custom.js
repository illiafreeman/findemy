$(document).ready(function() {

    /*top menu toggle*/
    $('.menu-btn').click(function () {
        $('.header-nav').addClass('vis');
        $('body').addClass('oh');
    });
    $('.header-nav__close, .header-nav__link').click(function () {
        $('.header-nav').removeClass('vis');
        $('body').removeClass('oh');
    });
    /*end top menu toggle*/

    /*scroll to top*/
    var scrollTop = $(".scrollTop");
    $(window).scroll(function() {
        var topPos = $(this).scrollTop();
        if (topPos > 500) {
            $(scrollTop).addClass('vis');
        } else {
            $(scrollTop).removeClass('vis');
        }
    });
    $(scrollTop).click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    /*end scroll to top*/

});

