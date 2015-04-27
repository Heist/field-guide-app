$(window).load(function(){  
	$('input, textarea').placeholder();
}); 


$(document).ready(function() {
	
	var waypoint = new Waypoint({
		element: $('#howitworks'),
		handler: function(direction) {
			//console.log(direction);
			if (direction == 'up') {
				$('#header').fadeIn();
				$('#header-light').fadeOut();
			} else if (direction == 'down') {
				$('#header').fadeOut();
				$('#header-light').fadeIn();
			}
		}
	});
	
	$("#features-click, #features-click2").click(function() {
	    $('html, body').stop().animate({
	        scrollTop: $("#howitworks").offset().top
	    }, 600);
	});
	
	$('.mobile-nav').click(function() {
		$('#header-burger').fadeToggle();
	});	

});
