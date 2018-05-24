function main() {

    (function () {
        'use strict';

        $('a.page-scroll').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 40
                    }, 900);
                    return false;
                }
            }
        });

        // affix the navbar after scroll below header
        $('#nav').affix({
            offset: {
                top: $('header').height()
            }
        });


        // Portfolio isotope filter
        $(window).load(function () {
            var $container = $('.portfolio-items');
            $container.isotope({
                filter: '*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            $('.cat a').click(function (e) {
                e.preventDefault();
                $('.cat .active').removeClass('active');
                $(this).addClass('active');
                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });

        });


        // Nivo Lightbox 
        $('.portfolio-item a').nivoLightbox({
            effect: 'slideDown',
            keyboardNav: true,
        });


    }());


    //==================================== height header============================
    var wHeight = $(window).height();
    $('.header').height(wHeight);

   

   
}

function barScroll() {
    setTimeout(function () {

        $('.progress-bar').each(function () {
            var me = $(this);
            var pe = $(this).children('.precent-value');
            var perc = me.attr("aria-valuenow");

            var current_perc = 0;

            var progress = setInterval(function () {
                if (current_perc >= perc) {
                    clearInterval(progress);
                } else {
                    current_perc += 1;
                    me.css('width', (current_perc) + '%');
                }

                pe.text((current_perc) + '%');

            }, 90);
        });
    }, 300);

    
}

 //fancybox
 $(".youtube-media").on("click", function(e) {
    console.log("hi amy pan")
    var jWindow = $(window).width();
    if (jWindow <= 410) {
        return;
    }
    $.fancybox({
        href: this.href,
        padding: 4,
        type: "iframe",
        'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
    });
    return false;
});

var handleWorkPopup = function() {
    
    var overlay = $('.work-popup-overlay'),
        close = $('.work-popup-close'),
        trigger = $('.work-popup-trigger');

    trigger.on('click', function() {
        $(this).find('.work-popup-overlay').removeClass('work-popup-overlay-show');
        $(this).find('.work-popup-overlay').addClass('work-popup-overlay-show');
    });

    close.on('click', function(e) {
        e.stopPropagation();
        overlay.removeClass('work-popup-overlay-show');
    });

    console.log("hihi");
}



handleWorkPopup();
main();
barScroll();

