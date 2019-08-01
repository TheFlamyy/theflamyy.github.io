$(window).on("load",function() {
    $(window).scroll(function() {
      let windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".animated").not(".finished").each(function() {

        let objectTop = $(this).offset().top + $(this).outerHeight() / 3.0;
        if (objectTop < windowBottom) {
          $(this).addClass("finished");
        }
      });
    }).scroll(); 

});