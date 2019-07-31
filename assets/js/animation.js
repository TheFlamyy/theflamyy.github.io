const offset = 10;

$(window).on("load",function() {
    $(window).scroll(function() {
      let windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".animated").not(".finished").each(function() {

        let objectBottom = $(this).offset().top + offset + $(this).outerHeight();
        if (objectBottom < windowBottom) {
          $(this).addClass("finished");
        }
      });
    }).scroll(); 

});