import '../scss/_import.scss';
import 'waypoints/lib/jquery.waypoints.js';
import 'slick-carousel';

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
