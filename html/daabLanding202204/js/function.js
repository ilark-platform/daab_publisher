$(function() {

	$(window).on('scroll', function () {
        if ($(this).scrollTop() > 0) {
			$('#header').addClass('fixed');
		} else {
			$('#header').removeClass('fixed');
		}
	});

	$(document).ready(function(){
		$('#main_visual').addClass('active');
		$('#main_visual .bg_box').delay(600).animate({'z-index':'0'}, function(){
			$(this).hide();
		})
	});

	$(window).on('load', function () {
		AOS.init({
			once: true
		});
	});

	function appHeight() {
		var doc = document.documentElement;
		doc.style.setProperty('--app-height', $(window).innerHeight() + 'px');
	}
	window.addEventListener('resize', appHeight);
	appHeight();
	
});