import '../scss/_import.scss';
import 'waypoints/lib/jquery.waypoints.js';
import 'slick-carousel/slick/slick.min.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/**
 * Get active slide on scroll using Waypoints
 * @param directions
 */
function getActiveSlide(direction) {
    var prev = this.previous();

    if (prev) {
        $(prev).removeClass('active');
    }

    $(this.element).toggleClass('active', direction === 'down').trigger('waypoint:' + direction);
}

// Carousel active slide stuff
$('.section').waypoint(getActiveSlide, {offset: '60%'});


$('.demo-carousel').slick({
    dots: true
});

$(window).scroll(function() {
    if($('.demo-container').hasClass('active')){
        $('.nav').removeClass('nav-header');
    } else {
        $('.nav').addClass('nav-header');
    }
});