$(window).load(function(){  
	$('input, textarea').placeholder();
}); 


$(document).ready(function() {

	$('.mobile-nav').click(function() {
		$('#header-burger').fadeToggle();
	});	
	
	var $scrollingDiv = $("#faq-nav ul");

	$(window).scroll(function(){
		$scrollingAmount = $(window).scrollTop() - 180;
		
		if ($scrollingAmount < 0) {
			$scrollingAmount = 0;
		}
		$scrollingDiv.stop().animate({"marginTop": $scrollingAmount + "px"}, 'slow' );
	});

	$("#features-click, #features-click2").click(function() {
	    $('html, body').stop().animate({
	        scrollTop: $("#howitworks").offset().top
	    }, 600);
	});

	$('.close-button').on('click', function(){
		$('#blog-banner').addClass('animated fadeOutUp');
	});
	
	$('a').smoothScroll({offset: -100});

});
