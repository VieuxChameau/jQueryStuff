$(document).ready(function() {
    $(".tour").on("mouseenter", function() {
        $(this).css({"background-color": "#252b30", "font-weight": "bold"});
        $(this).find(".photos").show();
        $(this).addClass('highlight');
        $(this).find(".per-night").animate({"top": "-14px", "opacity": "1"}, "fast");
    }).on('mouseleave', function() {
        $(this).removeClass('highlight');
        $(this).find(".per-night").animate({top: "0", opacity: 0}, "fast");
    });
});