$(window).scroll(function() {
    if ($(this).scrollTop() > 65) {
        $('.navbar').addClass('fixed');
        // $('.bannerlogo').addClass('opacitylogo');
    } else {
        $('.navbar').removeClass('fixed');
        // $('.bannerlogo').removeClass('opacitylogo');
    }
});

$('.dropdown').on('show.bs.dropdown', function(e) {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
});

$('.dropdown').on('hide.bs.dropdown', function(e) {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp(150);
});



// Get all the elements to be parallaxed
const parallaxElements = document.querySelectorAll('.parallaxupdown')

// The parallax function
const parallax = elements => {
    if ('undefined' !== elements && elements.length > 0) {
        elements.forEach(element => {
            let y = window.innerHeight - element.getBoundingClientRect().top
            if (y > 0) {
                element.style.transform = 'translate3d(0, -' + (0.15 * y) + 'px ,0)'
            }
        })
    }
}

//If element is in viewport, set its position
parallax(parallaxElements)

//Call the function on scroll
window.onscroll = () => {
    parallax(parallaxElements)
}


$('.add').click(function() {
    var th = $(this).closest('.sellingwrap').find('.count');
    th.val(+th.val() + 1);
});
$('.sub').click(function() {
    var th = $(this).closest('.sellingwrap').find('.count');
    if (th.val() > 1) th.val(+th.val() - 1);
});

$(document).ready(function() {
    var $grid = $(".grid").isotope({
        itemSelector: ".all",
        percentPosition: false,
        masonry: {
            columnWidth: ".all"
        }
    });


    if ($('.filters-content').length) {
        var $elements = $(".filters-content"),
            $filters = $('.filters ul li');
        $elements.isotope();

        $filters.on('click', function() {
            $filters.removeClass('active');
            $(this).addClass('active');
            var selector = $(this).data('filter');
            $(".filters-content").isotope({
                filter: selector,
                transitionDuration: '.5s',
            });
        });
    };

    $grid.imagesLoaded().progress(function() {
        $grid.isotope('layout');
    });
});


$('#expert').owlCarousel({
    items: 1,
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    autoplay: false,
    autoplaySpeed: 1000,
    smartSpeed: 1000,
    navText: [
        "<img src='images/parrow-left.svg'>",
        "<img src='images/parrow-right.svg'>",
    ],
});




$('#product').owlCarousel({
    items: 1,
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    autoplay: false,
    autoplaySpeed: 1000,
    smartSpeed: 1000,
    navText: [
        "<img src='images/parrow-left.svg'>",
        "<img src='images/parrow-right.svg'>",
    ],
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1024: {
            items: 3,
        },
    }
});


$('#selling').owlCarousel({
    items: 1,
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    autoplay: false,
    autoplaySpeed: 1000,
    smartSpeed: 1000,
    navText: [
        "<img src='images/parrow-left.svg'>",
        "<img src='images/parrow-right.svg'>",
    ],
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
    }
});


$('#related').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    autoplay: false,
    autoplaySpeed: 1000,
    smartSpeed: 1000,
    navText: [
        "<img src='images/parrow-left.svg'>",
        "<img src='images/parrow-right.svg'>",
    ],
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        768: {
            items: 2,
        },
        1024: {
            items: 3,
        },
        1366: {
            items: 4,
        }
    }
});




$(document).ready(function() {
    $('.magnifier').zoom({
        touch: true,
        magnify: 1.5,
        callback: true,
        onZoomIn: true,
        onZoomOut: true,
        duration: 200,
    });
});



/* Toggle start here */

$('.faqhead').on('click', function(e) {
    var element = $(this).parent('.faqdiv');
    if (element.hasClass('open')) {
        element.removeClass('open');
        element.find('.faqbody').removeClass('open');
        element.find('.faqbody').slideUp(300, "swing");
    } else {
        element.addClass('open');
        element.children('.faqbody').slideDown(300, "swing");
        element.siblings('.faqdiv').children('.faqbody').slideUp(300, "swing");
        element.siblings('.faqdiv').removeClass('open');
    }
});

/* Toggle end here */