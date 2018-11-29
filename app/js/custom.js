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

    /*scrollto*/
    $('.header-nav__link').click(function () {
        var off = -80;
        if($(window).width()<=980){
            off = -48;
        }
        $.scrollTo($('#scroll_' + $(this).attr('id')), 1000, {axis:'y', offset:off});
    });
    /*end scrollto*/
});

/*animation*/
$(window).load(function(){
    var wow = new WOW(
        {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       10,          // distance to the element when triggering the animation (default is 0)
            mobile:       true,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
            callback:     function(box) {
                // the callback is fired every time an animation is started
                // the argument that is passed in is the DOM node being animated
            }
        }
    );
    wow.init();

    window.addEventListener('touchstart', function onFirstTouch() {
        // we could use a class
        document.body.classList.add('user-is-touching');

        // we only need to know once that a human touched the screen, so we can stop listening now
        window.removeEventListener('touchstart', onFirstTouch, false);
    }, false);
});
/*end animation*/