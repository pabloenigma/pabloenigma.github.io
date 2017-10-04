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

$('body').scrollspy({target: ".navbar", offset: 50});

// Add smooth scrolling on all links inside the navbar
$("#bs-example-navbar-collapse-1 a").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });

  } // End if

});

// Add smooth scrolling on all links inside the navbar
$("#hero a").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });

  } // End if

});



