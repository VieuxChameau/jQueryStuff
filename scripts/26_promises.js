var Vacation = {
    getPrice: function(location) {
        var promise = $.Deferred();
        $.ajax('/vacation/prices', {
            data: {q: location},
            success: function(result) {
                promise.resolve(result.price); // call the done callback of the promise with the param
            },
            error: function() {
                var error = 'invalid location';
                promise.reject(error); // call the fail callback of the promise with the param
            }
        });
        return promise;
    }
};

var Photo = {
    getPhoto: function(location) {
        var promise = $.Deferred();
        $.ajax('/vacation/photos', {
            data: {q: location},
            success: function(result) {
                promise.resolve(result.url);
            }
        });
        return promise;
    }
};

$(document).ready(function() {
    $('button').on('click', function() {
        var location = $('.location').text();
        var promise = Vacation.getPrice(location);
        promise.done(function(result) {
            $('.price').text(result);
        }
        ).fail(function(errorMsg) {
            console.log(errorMsg);
        });
    });


    $('button').on('click', function() {
        var tour = $(this).parent();
        var location = tour.data('location');
        var resultDiv = tour.find('.results').empty();
        Vacation.getPrice(location).done(function(priceResult) {
            $('<p>$' + priceResult + '</p>').appendTo(resultDiv);
        });

        Photo.getPhoto(location).done(function(photoResult) {
            $('<img />').attr('src', photoResult).appendTo(resultDiv);
        });

// To display both promise at the same time , 
        $.when(Vacation.getPrice(location), Photo.getPhoto(location))
                .then(function(priceResult, photoResult) {
                    $('<p>$' + priceResult + '</p>').appendTo(resultDiv);
                    $('<img />').attr('src', photoResult).appendTo(resultDiv);
                });
    });
});

