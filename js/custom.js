jQuery(document).ready(function( $ ) {
  $(window).on('load', function() {
    $('#preloader').delay(100).fadeOut('slow',function(){$(this).remove();});
  });
    // Hero rotating texts
    $("#js-rotating").Morphext({
      animation: "bounceIn",
      complete: function () {
      }
  });
   
  //WOW Js
  new WOW().init();

  });