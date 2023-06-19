(function ($) {

    // Spinner

    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
      if ($(this).scrollTop() > 90) {
        $('.nav-bar').addClass('sticky-top shadow');
      } else {
        $('.nav-bar').removeClass('sticky-top shadow');
      }
    });



  })(jQuery);