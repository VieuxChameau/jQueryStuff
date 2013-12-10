jQuery(document).ready(function() { //13.1
    var price = $('<p>300$</p>');
    $("button").on('click', function() {
        $(".defaultCity").before(price);
        price.insertBefore($(".defaultCity"));
        $(".defaultCity").after(price);
        price.insertAfter($(".defaultCity"));
        // Add as first Child node
        $(".defaultCity").prepend(price);
        price.prependTo($(".defaultCity"));
        // Add as last Child node
        $(".defaultCity").append(price);
        price.appendTo($(".defaultCity"));
        // delte all the button
        $("button").remove();
    });
});

jQuery(document).ready(function() { //13.2
    $("button").on('click', function() {
// This refer to the element that trigger the handler
// Close look up for the first ancestor
        $(this).closest('.defaultCity').append(price);
        $(this).find("button").remove();
        $(this).remove();
    });

});


jQuery(document).ready(function() { //13.4
    // delegation
    $(".tour").on("click", "button", function() {
        var tour = $(this).closest(".tour");
        var discount = tour.data("discount");
        var message = $("<span>Call 1-555-jquery-air for a $" + discount + "</span>");
        tour.append(message);
        $(this).remove();
    });
    $("#filters").on("click", ".on-sale", function() {
        $(".highlight").removeClass("highlight");
        $(".tour").filter(".on-sale").addClass("highlight");
    });
    $("#filters").on("click", ".featured", function() {
        $(".highlight").removeClass("highlight");
        $(".tour").filter(".featured").addClass("highlight");
    });
});