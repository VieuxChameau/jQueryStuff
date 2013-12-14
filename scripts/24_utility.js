$('button').on('click', function() {
    $.ajax('/cities/deals', {
        contentType: 'application/json',
        dataType: 'json',
        success: function(result) {
            $.each(result, function(index, dealItem) {
                var dealElement = $('.deal-' + index);
                dealElement.find('.name').html(dealItem.name);
                dealElement.find('.price').html(dealItem.price);
            });
        }
    });

    $.getJSON('/cities/deals', function(result) {
        $.each(result, function(index, dealItem) {
            var dealElement = $('.deal-' + index);
            dealElement.find('.name').html(dealItem.name);
            dealElement.find('.price').html(dealItem.price);
        });
    });
});


$('.update-available-flights').on('click', function() {
    $.getJSON('/flights/late', function(result) {
        var flightElements = $.map(result, function(flightItem, index) {
            var flightEl = $('<li>' + flightItem.flightNumber + '-' + flightItem.time + '</li>');
            return flightEl;
        });
        $('.flight-times').detach().html(flightElements).appendTo('.flights');
    });
});
