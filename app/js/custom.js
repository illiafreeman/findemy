$(document).ready(function() {

    /*top menu toggle*/
    $('.header-nav__item_button-menu').click(function(){
        $('.nav-mobile').addClass('nav-mobile_act');
        $('body').addClass('oh');
    });

    $('.nav-mobile__close').click(function(){
        $('.nav-mobile').removeClass('nav-mobile_act');
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
        if (topPos > 700) {
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
        $('.footer-menu__list').not($(this).parents('.footer-menu__list')).removeClass('act');
        $(this).parents('.footer-menu__list').toggleClass('act');
    });
    /*end footer menu*/



    /*mobile menu slider*/
    $('.nav-mobile__wrap').owlCarousel({
        center: true,
        items:2,
        loop:false,
        margin:0
    });
    /*end mobile menu slider*/



    /*product like*/
    $('.product__like').click(function (event) {
        event.stopPropagation();
        event.preventDefault();
        $(this).toggleClass('product__like_act');
    });
    /*end product like*/



    /*check filter*/
    $('.filter__cat input').change(function(){
        //console.log($(this).prop('checked'));
        if (this.checked) {
            $(this).parents('.filter__cat').addClass('filter__cat_act');
        }else{
            $(this).parents('.filter__cat').removeClass('filter__cat_act');
        }
        updateCounter();
    });
    function updateCounter() {
        var len = $('.filter__cat input:checked').length;
        if(len>0){$('.filter__title span').text('('+len+')');}else{$('.filter__title span').text(' ');}
    }
    $('.filter__title').click(function () {
        $('.filter').not($(this).parents('.filter')).removeClass('filter_act');
        $(this).parents('.filter').toggleClass('filter_act');
    });
    $('.filter__action-button_cancel').click(function () {
        $(this).parents('.filter').find('input').prop('checked', false).change();
    });
    /*end check filter*/



    /*slim scroll*/
    $('.filter__list').slimScroll({
        height: '',
        color: '#969696',
        size: '3px',
        alwaysVisible: true,
        borderRadius: '2px',
        railBorderRadius: '0',
        distance: '5px',
        wheelStep: '50px'
    });
    /*end slim scroll*/



});

/*fixed filter block*/
var filter = $('.filter-block').offset();
var scroll = $(window).scrollTop();

$(window).scroll(function() {
    if ($(window).width() > 700) {
        if($(window).scrollTop() > filter.top) {
            $('.filter-block').addClass('filter-block_fixed');
            var h = $('.filter-block_fixed').outerHeight();
            $('.sort').css('padding-top', h);
        } else{
            $('.filter-block').removeClass('filter-block_fixed');
            $('.sort').css('padding-top', 0);
        }
    }
});
/*end fixed filter block*/








