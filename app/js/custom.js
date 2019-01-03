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

    $('.nav-mobile__wrap .owl-item').click(function (event) {
        if(!$(this).hasClass('center')) {
            //alert('dfg');
            event.stopPropagation();
            event.preventDefault();
            $(this).find('a').each(function(event) {
                event.stopPropagation();
                event.preventDefault();
            });
        }
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
    $('.filter__cat input[type="checkbox"]').change(function(){
        //console.log($(this).prop('checked'));
        if (this.checked) {
            $(this).parents('.filter__cat').addClass('filter__cat_act');
        }else{
            $(this).parents('.filter__cat').removeClass('filter__cat_act');
        }
        var id = $(this).parents('.filter').attr('id');
        console.log(id);
        //updateCounter();
        var len = $('#' + id + ' .filter__cat input[type="checkbox"]:checked').length;
        if(len>0){
            $('#' + id + ' .filter__title span').text('('+len+')');
            $('#' + id + '.filter').addClass('filter_sel');
        }else{
            $('#' + id + ' .filter__title span').text(' ');
            $('#' + id + '.filter').removeClass('filter_sel');
        }
    });
/*    function updateCounter() {
        var len = $('' + id + '.filter__cat input[type="checkbox"]:checked').length;
        if(len>0){$('' + id + '.filter__title span').text('('+len+')');}else{$('.filter__title span').text(' ');}
    }*/
    $('.filter__title').click(function () {
        $('.filter').not($(this).parents('.filter')).removeClass('filter_act');
        $(this).parents('.filter').toggleClass('filter_act');
    });
    $('.filter__action-button_cancel').click(function () {
        $(this).parents('.filter').find('input').prop('checked', false).change();
    });
    /*end check filter*/



    /*check sort*/
    $('.filter__cat input[type="radio"]').change(function(){
        if (this.checked) {
            $('.filter__cat').removeClass('filter__cat_act');
            $(this).parents('.filter__cat').addClass('filter__cat_act');
        }
    });

    $('.filter__cat input[type="radio"]:checked').parents('.filter__cat').addClass('filter__cat_act');
    /*check sort*/



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


    $(".filter_sort .filter__list").slimScroll({destroy: true});


    /*end slim scroll*/



});

/*fixed filter block*/
var filter = $('.filter-block').offset();
var filter_sort = $('.filter-sort').offset();


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
        if ($(window).width() < 700) {
            if($(window).scrollTop() > filter_sort.top) {
                $('.filter-sort').addClass('filter-block_fixed');
                var h = $('.filter-sort').outerHeight();
                $('.catalog-container').css('padding-top', h);
            } else{
                $('.filter-sort').removeClass('filter-block_fixed');
                $('.catalog-container').css('padding-top', 0);
            }
        }
    });

    $(window).resize(function() {
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
        if ($(window).width() < 700) {
            if($(window).scrollTop() > filter_sort.top) {
                $('.filter-sort').addClass('filter-block_fixed');
                var h = $('.filter-sort').outerHeight();
                $('.catalog-container').css('padding-top', h);
            } else{
                $('.filter-sort').removeClass('filter-block_fixed');
                $('.catalog-container').css('padding-top', 0);
            }
        }
    });

    $('.filter-btn').click(function(){
        $('.filter-block').addClass('filter-block_act');
        $('body').addClass('oh');
    });

    $('.filter-block__close').click(function(){
        $('.filter-block').removeClass('filter-block_act');
        $('body').removeClass('oh');
    });

/*end fixed filter block*/



$(".js-range-slider").ionRangeSlider({
    skin: "round",
    type: "double",
    min: 0,
    max: 10000,
    from: 1000,
    to: 7000,
    grid: false,
    postfix: ' p.'
});





