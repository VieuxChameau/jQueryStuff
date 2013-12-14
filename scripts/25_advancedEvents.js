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