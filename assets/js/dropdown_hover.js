$(window).on("load",function() {
    $(".dropdown-hover").each(function(){
        let toggle = $(this).find(".dropdown-toggle:first");
        $(this).mouseover(function() {
            $(this).addClass("show");
            toggle.attr("aria-extended", "true");
            $(this).find(".dropdown-menu:first").addClass("show");
        });
        $(this).mouseleave(function() {
            $(this).removeClass("show");
             toggle.attr("aria-extended", "false");
            $(this).find(".dropdown-menu:first").removeClass("show");
        });
    });
});