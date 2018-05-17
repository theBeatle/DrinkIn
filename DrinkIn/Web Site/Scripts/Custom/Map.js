var mapElem;
var marker;
window.onload = function () {
    if (document.querySelectorAll('#myMap').length > 0) {
        if (document.querySelector('html').lang)
            lang = document.querySelector('html').lang;
        else
            lang = 'en';

        var js_file = document.createElement('script');
        js_file.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCN0X3csDslgOaMtIR6GNB9z7oY1GxZp2c&callback=initMap';
        document.getElementsByTagName('body')[0].appendChild(js_file);
    }
    $('#btn-filters').click(function () {
        if ($('#filters').width() == 0) {
            $(function () {
                $('#filters').animate({
                    width: 200,
                }, 500, function () {
                    $('#visibility-filter-div').css('display', 'inline');
                });
            });
        } else {
            $('#visibility-filter-div').css('display', 'none');
            $(function () {
                $("#filters").animate({
                    width: 0,
                }, 500);
            });
        }
    });
};


function initMap() {
    var uluru = {
        lat: 50.619229,
        lng: 26.252085
    };
    mapElem = new google.maps.Map(document.getElementById('myMap'), {
        zoom: 12,
        center: uluru
    });
    google.maps.event.addListener(mapElem, 'click', function (event) {
        placeMarker(event.latLng);
    });
}

function placeMarker(location) {
    if (!marker) {
        marker = new google.maps.Marker({
            position: location,
            draggable: true,
            animation: google.maps.Animation.DROP,
            map: mapElem
        });
    } else {
        marker.setPosition(location);
    }
}
