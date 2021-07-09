/**
 * Template Name: EstateAgency - v2.2.1
 * Template URL: https://bootstrapmade.com/real-estate-agency-bootstrap-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
(function ($) {
	'use strict';

	// Preloader
	$(window).on('load', function () {
		if ($('#preloader').length) {
			$('#preloader')
				.delay(100)
				.fadeOut('slow', function () {
					$(this).remove();
				});
		}
	});

	// Back to top button
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.back-to-top').fadeIn('slow');
		} else {
			$('.back-to-top').fadeOut('slow');
		}
	});
	$('.back-to-top').click(function () {
		$('html, body').animate(
			{
				scrollTop: 0,
			},
			1500,
			'easeInOutExpo'
		);
		return false;
	});

	var nav = $('nav');
	var navHeight = nav.outerHeight();

	/*--/ ScrollReveal /Easy scroll animations for web and mobile browsers /--*/
	window.sr = ScrollReveal();
	sr.reveal('.foo', {
		duration: 1000,
		delay: 15,
	});
	// Owl Carousel Section

	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 10,
		nav: false,
		autoPlay: true,
		autoplayHoverPause: true,
		autoplaySpeed: 1000,
		lazyLoad: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 3,
			},
			1000: {
				items: 3,
			},
		},
	});
})(jQuery);
