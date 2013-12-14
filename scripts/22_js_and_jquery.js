$(document).ready(function() { // 22.1 refactoring of 21 using object style
    var tour = {
        init: function() {
            $("#tour").on("click", "button", this.fetchPhotos);
        },
        fetchPhotos: function() {
            $.ajax('/photos.html', {
                data: {location: $("#tour").data('location')},
                success: function(response) {
                    $('.photos').html(response).fadeIn();
                },
                error: function() {
                    $('.photos').html('<li>There was a problem fetching the latest photos. Please try again.</li>');
                },
                timeout: 3000,
                beforeSend: function() {
                    $('#tour').addClass('is-fetching');
                },
                complete: function() {
                    $('#tour').removeClass('is-fetching');
                }
            });
        }
    };
    $(document).ready(function() {
        tour.init();
    });
});

// 22.2

function Tour(price) {
    console.log("A new Tour was created");
    this.cost = function(nigth) {
        console.log(nigth * price);
    };
}
$(document).ready(function() {
    var tour = new Tour(100);
    tour.cost(4);
});


function Tour(el) {
    var tour = this;
    this.el = el;
    this.fetchPhotos = function() {
        $.ajax('/photos.html', {
            data: {location: tour.el.data('location')},
            context: tour,
            success: function(response) {
                this.el.find('.photos').html(response).fadeIn();
            },
            error: function() {
                this.el.find('.photos').html('<li>There was a problem fetching the latest photos. Please try again.</li>');
            },
            timeout: 3000,
            beforeSend: function() {
                this.el.addClass('is-fetching');
            },
            complete: function() {
                this.el.removeClass('is-fetching');
            }
        });
    }
    this.el.on('click', 'button', this.fetchPhotos);
}
$(document).ready(function() {
    var paris = new Tour($('#paris'));
    var london = new Tour($('#london'));
});
