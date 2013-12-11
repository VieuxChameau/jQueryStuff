// ajax : Asynchronous JavaScript and XML
$(document).ready(function() { // 21.1
    $("#tour").on("click", "button", function() {
        $.ajax('/photos.html', {
            success: function(response) {
                $('.photos').html(response).fadeIn();
            },
            data: {'location': $('#tour').data('location')},
        });
    });

    $.get('/photos.html', function(response) {
        $('.photos').html(response).fadeIn();
    });

});


$(document).ready(function() { // 21.2
    var tourElement = $("#tour");
    tourElement.on("click", "button", function() {
        $.ajax('/photos.html', {
            success: function(response) {
                $('.photos').html(response).fadeIn();
            },
            data: {'location': $('#tour').data('location')},
            error: function() {
                $('.photos').html('<li>Fail</li>');
            },
            timeout: 3000, //in ms
            beforeSend: function() {
                tourElement.addClass('is-fetching');
            },
            complete: function() {
                tourElement.removeClass('is-fetching');
            }
        });
    });

    function showPhotos() {
        $(this).find('span').slideToggle();
    }

    /* the followind doesnt work cause the browser dont know the .photos li on load its ajax result
     $('.photos li').on('mouseenter', showPhotos)
     .on('mouseleave', showPhotos);
     */
    $('.photos').on('mouseenter', 'li', showPhotos)
            .on('mouseleave', 'li', showPhotos);
});