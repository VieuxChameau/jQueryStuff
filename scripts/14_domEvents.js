$(document).ready(function() {
    function showPhotos() {
        $(this).find("span").slideToggle();
    }
    $("#tour").on("click", "button", function() {
        $(".photos").slideToggle();
    });
    $(".photos").on("mouseenter", "li", showPhotos).on("mouseleave", "li", showPhotos);
    $("#nights").on("keyup", function() {
// the + convert the string to a number
        var nights = +$(this).val();
        var dailyPrice = +$(this).closest(".tour").data("daily-price");
        $("#total").text(nights * dailyPrice);
        $("#nights-count").text($(this).val());
    }).on("focus", function() {
        $(this).val(7);
    });
});