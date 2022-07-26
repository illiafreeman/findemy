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

    var arr = [];

/*    for ( var i = 0, len = sessionStorage.length; i < len; i++ ) {
        arr.push(sessionStorage.key(i));
    }*/


    if (sessionStorage.getItem("selected") !== null) {
        var arr = (JSON.parse(sessionStorage.getItem("selected")));
    }

    console.log(arr);

    var compare = function (){
        $('.filter__cat input[type="checkbox"]').each(function(){
            var check_id = $(this).attr('id');

            if((arr.indexOf(check_id)) >= 0){
                $(this).parent('label').addClass('filter__cat_act');
                $(this).attr('checked','checked');
            }else{
                $(this).attr('checked',false);
            }
        });
    };
    var re = function (){
        var arr = (JSON.parse(sessionStorage.getItem("selected")));
    };
    compare();

    $('.filter__cat input[type="checkbox"]').change(function(e){
        if (this.checked) {
            $(this).parents('.filter__cat').addClass('filter__cat_act');
        }else{
            $(this).parents('.filter__cat').removeClass('filter__cat_act');
        }
        var id = $(this).parents('.filter').attr('id');
        var len = $('#' + id + ' .filter__cat input[type="checkbox"]:checked').length;
        if(len>0){
            $('#' + id + ' .filter__title span').text('('+len+')');
            $('#' + id + '.filter').addClass('filter_sel');
            $('#' + id + '.filter').find('.filter__action-button_ok').removeClass('filter__action-button_dis');

        }else{
            $('#' + id + ' .filter__title span').text(' ');
            $('#' + id + '.filter').removeClass('filter_sel');
            $('#' + id + '.filter').find('.filter__action-button_ok').addClass('filter__action-button_dis');

        }

            var id = $(this).attr('id');
            if($(this).prop('checked')){
                //sessionStorage.setItem(id, 'true');
                arr.push(id);
            }else{
                //sessionStorage.removeItem(id);
                var removeItem = id;
                arr.splice( $.inArray(id, arr) ,1 );
            }
        console.log(arr);
        compare();
    });
    $('.filter').find('.filter__action-button_ok').click(function(e){
        sessionStorage.clear();
        sessionStorage.setItem("selected", JSON.stringify(arr));
    });
    $('.filter').find('.filter__action-button_cancel').click(function(e){
        e.stopPropagation();
        $(this).parents('.filter').find('.filter__cat input[type="checkbox"]').each(function(){
            $(this).parent('label').removeClass('filter__cat_act');
            $(this).attr('checked',false);
        });
    });


















    $('body').click(function () {
        $('.filter').removeClass('filter_act');
        arr = (JSON.parse(sessionStorage.getItem("selected")));
        $('.filter__cat input[type="checkbox"]').each(function(){
            var check_id = $(this).attr('id');
            console.log(check_id);
            if((arr.indexOf(check_id)) < 0){
                $(this).parent('label').removeClass('filter__cat_act');
                $(this).attr('checked',false);
            }else{
                $(this).attr('checked',false);
            }
        });
    });

    $('.filter').click(function (e) {
        e.stopPropagation();
    });

    $('.filter__title').click(function (e) {
        $('.filter').not($(this).parents('.filter')).removeClass('filter_act');
        $(this).parents('.filter').toggleClass('filter_act');
    });

    $('.filter__dropdown').click(function (e) {
        e.stopPropagation();
        $('.filter').not($(this).parents('.filter')).removeClass('filter_act');
        $(this).parents('.filter').toggleClass('filter_act');
    });

    $('.filter__action-button_ok').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).parents('.filter').removeClass('filter_act');
    });

    $(document).on('click','.filter__action-button_ok',function(){
        alert('dgf');
        e.preventDefault();
        e.stopPropagation();
            $(this).parents('.filter').removeClass('filter_act');
    });

    $('.filter__action-button_cancel').click(function (e) {
        e.stopPropagation();
        //$(this).parents('.filter').find('input').prop('checked', false).change();
    });
    /*end check filter*/



    /*check sort*/
    $('.filter__cat input[type="radio"]').change(function(){
        if (this.checked) {
            $('.filter__cat').removeClass('filter__cat_act');
            $(this).parents('.filter__cat').addClass('filter__cat_act');
            $(this).parents('.filter').removeClass('filter_act');
        }
    });

    $('.filter__cat input[type="radio"]:checked').parents('.filter__cat').addClass('filter__cat_act');

    if ($(window).width() < 700) {
        $('.filter_sort .filter__title').html('сортировка');
    }
    $(window).resize(function() {
        if ($(window).width() < 700) {
            $('.filter_sort .filter__title').html('сортировка');
        }else{
            $('.filter_sort .filter__title').html('Сортировать:');
        }
    });
    /*check sort*/



    /*slim scroll filter*/
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
    /*end slim scroll filter*/

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
/*на мобиле пока что убираем фиксирование сортировки        if($(window).scrollTop() > filter_sort.top) {
            $('.filter-sort').addClass('filter-block_fixed');
            var h = $('.filter-sort').outerHeight();
            $('.catalog-container').css('padding-top', h);
        } else{
            $('.filter-sort').removeClass('filter-block_fixed');
            $('.catalog-container').css('padding-top', 0);
        }*/
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

$('.filter').each(function() {
    $(this).on('click', function(){
        //console.log('sdf');
        var off = $(this).position().top;
        console.log(off);
        //console.log($(this).offset().top - $(window).scrollTop());
        //$('.filter-block').scrollTop($(this).offset().top - $(window).scrollTop() + 100);
        //$('.filter-block').scrollTop();
        //$('.filter-block').scrollTop(off - 50);
        $('.filter-block').animate({
            scrollTop: (off - 50)
        }, 800);
    });
});
/*end fixed filter block*/



/*range slider*/
$(".js-range-slider").ionRangeSlider({
    skin: "round",
    type: "double",
    min: 0,
    max: 10000,
    from: 0,
    to: 5000,
    grid: false,
    force_edges: true,
    postfix: ' p.',
    onFinish: function(data){
        if((data.from) > (data.min) || (data.to) < (data.max)){
            $('#f5').addClass('filter_sel');
            $('#f5').find('.filter__action-button_ok').removeClass('filter__action-button_dis');
        }else{
            $('#f5').removeClass('filter_sel');
            $('#f5').find('.filter__action-button_ok').addClass('filter__action-button_dis');
        }
    }
});

let my_range = $(".js-range-slider").data("ionRangeSlider");

$('#f5 .filter__action-button_cancel').click(function(data){
    my_range.reset();
    if((data.from) > (data.min) || (data.to) < (data.max)){
        $('#f5').addClass('filter_sel');
        $('#f5').find('.filter__action-button_ok').removeClass('filter__action-button_dis');
    }else{
        $('#f5').removeClass('filter_sel');
        $('#f5').find('.filter__action-button_ok').addClass('filter__action-button_dis');
    }
});
$('.range').click(function(e){
    e.stopPropagation();
});
/*end range slider*/



/*cart slider*/
var $count = $('.cart-slider__counter');
var $slickElement = $('.cart-slider');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $count.html(i + '<span>&nbsp;/&nbsp;0' + slick.slideCount + '</span>');
});

$slickElement.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $('.slick-current .cart-slider__pic img').css('transform', 'scale(1.2)');
    $('.slick-slide .cart-slider__pic img').not($('.slick-current .cart-slider__pic img')).css('transform', 'scale(1)');
});

$(window).on('resize orientationchange', function() {
    $slickElement.slick('slickNext');
    //$slickElement.slick('slickPrev');
});

$slickElement.slick({
    autoplay: false,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    mobileFirst: true,
    responsive: true,
    prevArrow: '<div class="slick-prev slick-arrow"></div>',
    nextArrow: '<div class="slick-next slick-arrow"></div>'
});
/*end cart slider*/



/*cart show more*/
$('.cart-info__desc-more').click(function () {
    $('.cart-info__desc-text').toggleClass('cart-info__desc-text_open');

    if($('.cart-info__desc-text').hasClass('cart-info__desc-text_open')){
        $(this).html('Свернуть');
    }else{
        $(this).html('Развернуть');
    }
});
/*end cart show more*/



/*favourite*/
$('.header-nav__item_button-like').click(function () {
    $('.over').addClass('over_act');
    $('.favourite').addClass('favourite_act');
    $('body').addClass('oh');
    var h = $('.favourite__inner').outerHeight();
    if ($(window).width() < 440) {
        $('.favourite__scroll').css('max-height', h - 50);
    }else{
        $('.favourite__scroll').css('max-height', h - 80);
    }
});
$('.favourite__close').click(function () {
    $('.over').removeClass('over_act');
    $('.favourite').removeClass('favourite_act');
    $('body').removeClass('oh');
});
$('.favourite-item__del').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).parents('.favourite-item').addClass('favourite-item_removed').delay(300).fadeOut(1);
});
$('.favourite__scroll').slimScroll({
    height: '',
    color: '#969696',
    size: '3px',
    alwaysVisible: true,
    borderRadius: '2px',
    railBorderRadius: '0',
    distance: '0px',
    wheelStep: '20px'
});
/*end favourite*/



/*banner text link*/
function banner_text() {
    if ($(window).width() < 800) {
        $('.catalog-banner__back').html('к подборкам');
    }else{
        $('.catalog-banner__back').html('назад к подборкам');
    }
}
$(window).resize(function() {
    banner_text();
});
$(document).ready(function() {
    banner_text();
});
/*end banner text link*/



/*blog categories toggle*/
if ($(window).width() > 600) {
    $('.blog-nav__link').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $('.container_aside').addClass('ov');
        $('.blog-nav__link').removeClass('blog-nav__link_act');
        $(this).addClass('blog-nav__link_act');
        setTimeout(function () {
            $('.container_aside').removeClass('ov');
        }, 1000);
    });
}
/*end blog categories toggle*/



/*blog categories dropdown*/
$(document).ready(function() {
    $('.blog-nav__header').click(function (e) {
        $(this).parents('.blog-nav__wrap').toggleClass('blog-nav__wrap_act');
    });
    $('body').click(function () {
        $('.blog-nav__wrap').removeClass('blog-nav__wrap_act');
    });
    $('.blog-nav__header').click(function (e) {
        e.stopPropagation();
    });
    $('.blog-nav__link').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $('.blog-nav__link').removeClass('blog-nav__link_act');
        $(this).addClass('blog-nav__link_act');
        var t = $(this).html();
        $('.blog-nav__header').html(t);
        $('.blog-nav__wrap').removeClass('blog-nav__wrap_act');
    });
});
/*end blog categories dropdown*/



/*search autotype*/
var instance = new TypeIt('.search_autotype', {
    strings: ["вечернее платье", "туфли", "женские сумки", "пуловер мужской"],
    speed: 150,
    deleteSpeed: 50,
    breakLines: false,
    waitUntilVisible: false,
    loop: true,
    nextStringDelay: [2000, 1000]
});

$('.header-nav__item_button-search').click(function (e) {

    var qw = scrollbar();
    var er;

    if ($(window).width() > 1040) {
        if(qw > 0){
            er = 74;
        }else{
            er = 48;
        }
    }else{
        er = 21;
    }


    $('.search__close').css({
        'right': er
    });



    $('body').css('padding-right', scrollbar).addClass('oh');
    $('.search').addClass('search_act');
    instance.go();
});
$('.search-input').val('');
$('.search-wrap').on('click', function() {
    //alert('dfg');
    //instance.freeze();
    setTimeout(function () {
        $('.search_autotype').addClass('search_autotype-act');
        $('.search-input').focus();
    }, 100);

});
$('.search-input').on('keyup', function() {
    if((this.value.length) > 4){
        $('.search').addClass('search_res');
        $('.search-result').addClass('search-result_act');
    }else{
        $('.search').removeClass('search_res');
        $('.search-result').removeClass('search-result_act');
    }
});
$('.search-input').on('blur', function() {
    //$('.search-field').click();
});
$('.search__close').click(function () {
    $('.search-input').val('');
    $('.search').removeClass('search_act');

    $('.search-result').removeClass('search-result_act');
    setTimeout(function () {
        $('body').css('padding-right', scrollbar).removeClass('oh');

        $('.search_autotype').removeClass('search_autotype-act');
        $('.search').removeClass('search_res');
    }, 500);
});
function scrollbar () {
    return window.innerWidth - document.documentElement.clientWidth;
};
/*end search autotype*/




/*alphabet*/
$(document).ready(function() {
    $("body").scrollspy({target: "#navigation", offset:0});
    $('.alphabet-link').click(function () {
        if($(window).width() < 700){
            $.scrollTo($('#scroll_' + $(this).attr('id')), 1000, {axis:'y', offset:0});
        }else if ($(window).width() < 1170) {
            $.scrollTo($('#scroll_' + $(this).attr('id')), 1000, {axis:'y', offset:-175});
        }else {
            $.scrollTo($('#scroll_' + $(this).attr('id')), 1000, {axis:'y', offset:-125});
        }

    });
});
var alphabet = $(".alphabet");
$(window).scroll(function() {
    var topPos = $(this).scrollTop();
    if (topPos > 130) {
        $(alphabet).addClass('vis');
    } else {
        $(alphabet).removeClass('vis');
    }
});
var footerMenu = $('.footer-menu').offset();
var windowHeight = $(window).height();
$(window).scroll(function() {
    if ($(window).width() < 700) {
        if($(window).scrollTop() > footerMenu.top - (windowHeight + 50)) {
            $(alphabet).addClass('bot');
        } else{
            $(alphabet).removeClass('bot');
        }
    }
});

var alphabet_top = $('.alphabet').offset();
$(window).scroll(function() {
    if ($(window).width() > 700) {
        if($(window).scrollTop() > alphabet_top.top - 80) {
            alphabet.addClass('alphabet_fixed');
            var h = $('.alphabet_fixed').outerHeight();
            $('.letter-wrap').css('padding-top', h);
        } else{
            alphabet.removeClass('alphabet_fixed');
            $('.letter-wrap').css('padding-top', 0);
        }
    }
});
/*end alphabet*/



/*info slider*/
var $countInfo = $('.info-slider__counter');
var $slickInfo = $('.info-slider');

$slickInfo.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $countInfo.html(i + '<span>&nbsp;/&nbsp;0' + slick.slideCount + '</span>');
});

$(window).on('resize orientationchange', function() {
    $slickInfo.slick('slickNext');
    //$slickElement.slick('slickPrev');
});

$slickInfo.slick({
    autoplay: false,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    mobileFirst: true,
    responsive: true,
    prevArrow: '<div class="slick-prev slick-arrow"></div>',
    nextArrow: '<div class="slick-next slick-arrow"></div>'
});























/*end info slider*/

/*info like*/
$('.info-footer__like').click(function (event) {
    event.stopPropagation();
    event.preventDefault();
    $(this).toggleClass('info-footer__like_act');
    if($(this).hasClass('info-footer__like_act')){
        $(this).html('13');
    }else{
        $(this).html('12');
    }
});
/*end info like*/







