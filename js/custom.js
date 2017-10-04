(function ($) {
  $(document).ready(function(){
    
	// hide .navbar first
	$(".navbar").hide();
	
	// fade in .navbar
	$(function () {
		$(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
			if ($(this).scrollTop() > 100) {
				$('.navbar').fadeIn();
             
			} else {
				$('.navbar').fadeOut();
                
			}
		});

	
	});
    //Hide the Enigma logo and then show it with a fade in effect
    $("#hero-enigma-logo").hide();
    $("#hero-enigma-logo").fadeIn(3500);

    //Set the text of the about-us-text-1 container equal to the one in about-us-image-1
    $(".about-us-text-1").height($(".about-us-image-1").height());
    
    //Hide the rooms overlays
    $(".rooms-overlay-1").hide();
    $(".rooms-overlay-2").hide();
    
    //Show the overlay when the user hovers over the first wrapper
    $(".rooms-wrapper-1").hover(
      function () {
        $(".rooms-overlay-1").fadeIn();
        $(".rooms-text-1").fadeOut();
      }, 
				
      function () {
        $(".rooms-overlay-1").fadeOut();
        $(".rooms-text-1").fadeIn();
      }
    );
    
    //Show the overlay when the user hovers over the second wrapper 
    $(".rooms-wrapper-2").hover(
      function () {
        $(".rooms-overlay-2").fadeIn();
        $(".rooms-text-2").fadeOut();
      }, 
				
      function () {
        $(".rooms-overlay-2").fadeOut();
        $(".rooms-text-2").fadeIn();
      }
    );
      
});
  }(jQuery));



