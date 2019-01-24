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
    });

    $('body').click(function () {
        $('.filter').removeClass('filter_act');
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
        $(this).parents('.filter').find('input').prop('checked', false).change();
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
    to: 10000,
    grid: false,
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



/*home slider*/
var bar = new ProgressBar.Circle(circ, {
    color: '#aaa',
    strokeWidth: 2,
    trailWidth: 1,
    easing: 'linear',
    duration: 5000,
    from: { color: '#aaa', width: 2 },
    to: { color: '#aaa', width: 2 },
    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);
    }
});
owl = $('.home-slider').on('initialized.owl.carousel', function(e) {

    bar.animate(1.0);

    var carousel = e.relatedTarget;
    $('.home-slider__counter').html(carousel.relative(carousel.current()) + 1 + '<span>&nbsp;/&nbsp;' + carousel.items().length + '</span>');
}).owlCarousel({
    center: true,
    items: 1,
    loop: true,
    margin: 0,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    dots: false,
    autoplayTimeout: 5000,
    mouseDrag: false,
    autoplay: true
});

$('#circ, .home-slider__preview').click(function() {
    owl.trigger('next.owl.carousel');
});

$('.home-slider').on('changed.owl.carousel', function(e) {
    $('.home-slider__preview #circ').empty();
    $('.home-slider__preview #circ').detach();
    $('.home-slider__item').removeClass('home-slider__item_init');

    var current = e.item.index;
    var src = $(e.target).find(".owl-item").eq(current).find(".home-slider__preview").append('<div id="circ"></div>');

    owl.trigger('stop.owl.autoplay');
    owl.trigger('play.owl.autoplay');

    var bar = new ProgressBar.Circle(circ, {
        color: '#aaa',
        strokeWidth: 2,
        trailWidth: 1,
        easing: 'linear',
        duration: 5000,
        from: { color: '#aaa', width: 2 },
        to: { color: '#aaa', width: 2 },
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);
        }
    });

    bar.animate(1.0);

    var carousel = e.relatedTarget;
    $('.home-slider__counter').html(carousel.relative(carousel.current()) + 1 + '<span>&nbsp;/&nbsp;' + carousel.items().length + '</span>');
});
/*end home slider*/


























