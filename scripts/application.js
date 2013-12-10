// Basic selector
jQuery(document).ready(function() {
    jQuery("h1");
    console.log("Text = " + $("h1").text());
    $("h1").text("Replace Text");

    $("#countries").text("Canada");

    $(".defaultCity").text("Indianna");
});

// searching into the dom
jQuery(document).ready(function() {
    $("#cheese li").text(); // Descendant selector include frenchCheese li
    $("#cheese").find("li"); // Descendant selector include frenchCheese li

    $("#cheese > li").text(); // Descendant selector only li first child
    $("#cheese").children("li");

    $("#countries,  #cheese").text(); // Select counties and cheese

    $("#countries li:first").text(); // Select first li under countries
    $("#countries li").first(); // Descendant selector include frenchCheese li

    $("#countries li:last").text(); // Select last li under countries

    $("#countries li:odd").text(); // Select all odd li under countries

    $("#countries li:even").text(); // Select all even li under countries

    // iterate over li
    $("#cheese").find("li").next();
    // avant dernier
    $("#cheese").find("li").last().prev();

    $("#cheese").find("li").parent().text();

    console.log($("#cheese").find("li").parent().text());
});

// Manipulate the dom
jQuery(document).ready(function() {
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

    $("button").on('click', function() {
        // This refer to the element that trigger the handler
        // Close look up for the first ancestor
        $(this).closest('.defaultCity').append(price);
        $(this).find("button").remove();
        $(this).remove();
    });

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

// Css manipulations
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