import '../scss/_import.scss';
import 'waypoints/lib/jquery.waypoints.js';
import 'slick-carousel/slick/slick.min.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

var gumshoe = require('gumshoe/dist/js/gumshoe.js');

/**
 * Get active slide on scroll using Waypoints
 * @param directions
 */

function getActiveSlide(direction) {
    $('.section').removeClass('active');

    if (direction === 'down') {
        $(this.element).addClass('active');
    }

    else if (direction === 'up') {
        $(this.element).removeClass('active').prev('.section').addClass('active');
    }
}

/**
 * Apply color to navigation for each section
 */
function applyColorNav() {
    if ($('#demo').hasClass('active')) {
        $('.nav').addClass('nav-dark');
    } else {
        $('.nav').removeClass('nav-dark');
    }
}

$('.section').waypoint(getActiveSlide, {offset: '60%'});

$('.js-infos-block').waypoint(getActiveSlide, {offset: '80%'});

$('.demo-carousel').slick({
    dots: true
});

gumshoe.init();

$(window).scroll(applyColorNav);

$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});