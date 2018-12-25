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

    /*menu hover*/
    $('.header-submenu').hover(function () {
        $(this).toggleClass('hover');
    });
    $('.footer-menu__link').hover(function () {
        $(this).parents('.footer-menu__cat').toggleClass('hover');
    });
    /*end menu hover*/

    /*scroll to top*/
    var scrollTop = $(".scroll-top");
    $(window).scroll(function() {
        var topPos = $(this).scrollTop();
        if (topPos > 300) {
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

    /*footer menu*/
    $('.footer-menu__cat-name').click(function () {
        $(this).parents('.footer-menu__list').toggleClass('act');
    });
    /*end footer menu*/

});

