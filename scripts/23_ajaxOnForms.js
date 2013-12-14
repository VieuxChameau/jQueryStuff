$(document).ready(function() { // 23.1
    $('form').on('submit', function(event) {
        event.preventDefault(); // Prevent the default behavior -> browser sumbit the form
        $.ajax('/book', {
            type: 'POST',
            data: $('form').serialize(),
//            data : {'nights-count': $('#nights-count').val(),
//                'nights': $('#nights').val()},
            success: function(response) {
                $('.tour').html(response);
            }
        });
    });
});


$(document).ready(function() { // 23.2
    $('form').on('submit', function(event) {
        event.preventDefault();
        $.ajax($(this).attr('action'), {
            type: $(this).attr('method'),
            data: $('form').serialize(),
            dataType: 'json',
            contentType: 'application/json',
            success: function(response) {
                $('.tour').html('<p></p>')
                        .find('p')
                        .append('Trip to ' + response.description)
                        .append(' at $' + response.price)
                        .append(' for ' + response.nights + ' nights')
                        .append('. Confirmation: ' + response.confirmation);
            }
        });
    });
});
