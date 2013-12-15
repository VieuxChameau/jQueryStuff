$(document).ready(function() { // 25.1
    $(document).ready(function() {
        // Get Weather
        // showWeather is a custom event
        $('button').on('showWeather', function() {
            var results = $(this).closest('li').find('.results');
            results.append('<p>Weather: 74&deg;</p>');
            $(this).off('showWeather'); // disable event handle
        });

        // Show Photos
        // photos is a namespace
        $('button').on('click.photos', function() {
            var tour = $(this).closest('li');
            var results = tour.find('.results');
            results.append('<p><img src="/assets/photos/' + tour.data('loc') + '.jpg" /></p>');
            $(this).off('click.photos');
            $(this).trigger('showWeather');
        });
    });

    $('button').trigger('click'); // emulate user action so trigger a click event on all the buttons
});


$.fn.photofy = function(options) { // 25.1
    this.each(function() { // iterate over each tour
        var show = function(e) {
            e.preventDefault();
            settings.tour
                    .addClass('is-showing-photofy')
                    .find('.photos')
                    .find('li:gt(' + (settings.count - 1) + ')')
                    .hide();
        };
        var settings = $.extend({ // if no options is pass will use the default settings
            count: 3,
            tour: $(this)
        }, options);
        settings.tour.on('click.photofy', '.see-photos', show);
        settings.tour.on('show.photofy', show);
        settings.tour.on('click.photofy', '.hide-tour', function(event) {
            event.preventDefault();
            settings.tour.fadeOut();
            settings.tour.off('.photofy'); // disable all event handler on the namespace photofy
        });
    });
};

$(document).ready(function() {
    $('.tour').photofy({count: 1});

    $('.show-photos').on('click', function(e) {
        e.preventDefault();
        $('.tour').trigger('show.photofy');
    });
});