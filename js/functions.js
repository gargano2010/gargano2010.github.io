(function($) { 
	"use strict";
	$(document).ready(function() {
		// Slider
		$('#slides').superslides({
			hashchange: false,
			animation: 'slide',
			pagination: false,
			play: 11000,
			animation_speed: 900
		});
		// Homepage 'Framed Pictures' Carousel
		var owl = $("#framed-pictures-carousel");
		owl.owlCarousel({
			itemsCustom: [
				[0, 1],
				[500, 2],
				[900, 2],
				[1200, 3],
				[1600, 4]
				],
			navigation: true,
			baseClass: "carousel",
			theme: "carousel-theme"
		});
		// Contact Form
		$('#submit').click(function() {
			$.post("send.php", $("#contactform").serialize(), function(response) {
				$('#success').html(response);
			});
			return false;
		});
		// Portfolio Filter
		$('#portfolio').mixitup({
			targetSelector: '.work-item',
			filterSelector: '.filter-ul li',
			sortSelector: '#sort',
			gridClass: 'grid',
			listClass: 'list',
		});
		$("#toGrid").on("click", function(e) {
			e.preventDefault();
			$('#portfolio').mixitup('toGrid');
			$("#sort > li").removeClass("active");
			$(this).addClass("active");
		});
		$("#toList").on("click", function(e) {
			e.preventDefault();
			$('#portfolio').mixitup('toList');
			$("#sort > li").removeClass("active");
			$(this).addClass("active");
		});
		// Accordion
		$(".accordion .accord-header").click(function() {
			if ($(this).prev("div").is(":visible")) {
				$(this).prev("div").slideUp("slow");
			} else {
				$(".accordion .accord-content").slideUp("slow");
				$(this).prev("div").slideToggle("slow");
			}
		});
		// Tooltip
		$('.tip').tipr({
			'speed': 300,
			'mode': 'top'
		});
		// Open Subscribe Section
		$(".subscribe").click(function() {
			$('.subscribe-wrapper').addClass("subscribe-open");
		});
		// Close Subscribe Section
		$('.subscribe-container').on('click', function(e) {
			if (e.target !== this) return;
			$('.subscribe-wrapper').removeClass("subscribe-open");
		});
		// Open Share Section
		$(".share").click(function() {
			$('.share-wrapper').addClass("share-open");
		});
		// Close Share Section
		$('.share-container').on('click', function(e) {
			if (e.target !== this) return;
			$('.share-wrapper').removeClass("share-open");
		});
		// Navigation
		$(".toggle-menu").click(function() {
			var headerHeight = $('.top-header').outerHeight(false),
				viewportHeight = $(window).height(),
				toggleButtonHeight,
				bottomBorderHeight,
				theHeight;
				headerHeight = $('.top-header').outerHeight(false),
				toggleButtonHeight = $('.toggle-menu').outerHeight(false),
				bottomBorderHeight = $('#bottom').outerHeight(false),
				theHeight = viewportHeight - headerHeight - toggleButtonHeight - bottomBorderHeight;
			
			$('.toggle-menu').toggleClass("close-menu");
			$('.nav-wrapper').toggleClass("menu-open");
			$('.nav-bottom-shaddow').toggleClass("open");
			if ($('.menu-open').length > 0) {
				$('.nav-container, .toggle-menu, .top-header, .nav-bottom-shaddow').bind('mousewheel DOMMouseScroll', function(e) {
					var e0 = e.originalEvent,
						delta = e0.wheelDelta || -e0.detail;
					this.scrollTop += (delta < 0 ? 1 : -1) * 30;
					e.preventDefault();
				});
				$('.top-header').css({
					'opacity': '1',
					'margin-top': '0'
				});
				$(".nav-container, .nav-wrapper").css("height", theHeight);
			} else {
				$('.nav-container, .toggle-menu, .top-header, .nav-bottom-shaddow').unbind('mousewheel DOMMouseScroll');
				if ($(document).scrollTop() > 200) {
					$('.top-header').css('margin-top', -headerHeight);
				}
				$(".nav-container, .nav-wrapper").css("height", 0);
			}
		});
		// Header fade
		$(window).scroll(function() {
			var scrollTop = $(window).scrollTop();
			var headerHeight = "-" + $('.top-header').outerHeight(false) + "px";
			if (scrollTop > 200) {
				$('.top-header').css({
					'opacity': '0.4',
					'margin-top': headerHeight
				});
			} else {
				$('.top-header').css({
					'opacity': '1',
					'margin-top': '0'
				});
			}
		});
		// Slider fade
		var target = $('#slides');
		var targetHeight = target.outerHeight();
		$(window).on('scroll', function(e) {
			var scrollPercent = 0;
			scrollPercent = (targetHeight - $(window).scrollTop()) / targetHeight;
			if (scrollPercent >= 0) {
				target.css('opacity', scrollPercent);
			}
		});
		// Smooth Scroll
		$(".start").click(function() {
			$('html, body').animate({
				scrollTop: $("#content-anchor").offset().top
			}, 1000);
		});
		// Call to action parallax
		if ($('.parallax-bg1').length > 0) {
			$(window).scroll(function(e) {
				parallax();
			});
		}
	
		function parallax() {
			var scrolled = $(window).scrollTop();
			var paralax = $('.parallax-bg1'),
				oTop = paralax.offset().top - document.documentElement.clientHeight,
				bTop = paralax.offset().top,
				pHeight = paralax.outerHeight();
			var tDistance = bTop + pHeight,
				distance = (oTop - scrolled) * 0.3;
			distance = distance + "px";
			if (scrolled >= oTop && scrolled <= tDistance) {
				$('.parallax-bg1').css({
					"background-position": "center " + distance
				});
			}
		}
		// Sub-pages page title padding top
			var titlePadding = $('header').outerHeight(false) + 60 + "px";
			$('.page-title').css({
				'padding-top': titlePadding
			});
		// Masonry Blog
		var $container = $('.masonry-blog');
		// initialize Masonry after all images have loaded  
		$container.imagesLoaded(function() {
			$container.masonry();
		});
	});
})(jQuery);