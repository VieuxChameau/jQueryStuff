// Basic selector
jQuery(document).ready(function() {
    jQuery("h1");
    console.log("Text = " + $("h1").text());
    $("h1").text("Replace Text");

    $("#countries").text("Canada");

    $(".defaultCity").text("Indianna");
});