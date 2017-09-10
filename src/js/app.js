import '../scss/_import.scss';
import 'waypoints/lib/jquery.waypoints.js';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick.min.js';

/**
 * Get active slide on scroll using Waypoints
 * @param direction
 */
function getActiveSlide(direction) {
    var prev = this.previous();
    if (prev) {
        $(prev).removeClass('active');
    }
    $(this.element).toggleClass('active', direction === 'down').trigger('waypoint:' + direction);
}

// Carousel active slide stuff
$('.section').waypoint(getActiveSlide, {offset: '70%'});


$(".single-item").slick({
    dots: true
});
