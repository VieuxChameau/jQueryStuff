jQuery(document).ready(function() { // 12.1 searching into the dom
    $("#cheese li").text(); // Descendant selector include frenchCheese li

    $("#cheese > li").text(); // Descendant selector only li first child

    $("#countries,  #cheese").text(); // Select counties and cheese

    $("#countries li:first").text(); // Select first li under countries

    $("#countries li:last").text(); // Select last li under countries

    $("#countries li:odd").text(); // Select all odd li under countries

    $("#countries li:even").text(); // Select all even li under countries
});

jQuery(document).ready(function() { // 12.2 traversing the dom
    $("#cheese").find("li"); // Descendant selector include frenchCheese li

    $("#cheese").children("li"); // Descendant selector only li first child

    $("#countries li").first(); // Descendant selector include frenchCheese li

    // iterate over li
    $("#cheese").find("li").next();
    // avant dernier
    $("#cheese").find("li").last().prev();

    $("#cheese").find("li").parent().text();

    console.log($("#cheese").find("li").parent().text());
});
