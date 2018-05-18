var mapElem;
var marker;

var RadarCircle;
var currentRadius = 1000;
var markerLocation;

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

    markerLocation = location;

    if (!marker) {
        marker = new google.maps.Marker({
            position: markerLocation,
            draggable: true,
            animation: google.maps.Animation.DROP,
            map: mapElem
        });
    } else {
        if (RadarCircle != null) {
            RadarCircle.setMap(null);
        }

        RadarCircle = new google.maps.Circle({
            strokeColor: '#ED6D1A',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#ED6D1A',
            fillOpacity: 0.35,
            map: mapElem,
            center: markerLocation,
            radius: currentRadius
        });
        marker.setPosition(location);
    }
}


var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    currentRadius = this.value;
    output.innerHTML = "Radius: " + currentRadius + "km";
    RadarCircle.setRadius(currentRadius * 1000);
    //RadarCircle.center = markerLocation;

    //RadarCircle.setMap(mapElem);

    //if (RadarCircle != null) {
    //    RadarCircle.setMap(null);
    //}

    //RadarCircle = new google.maps.Circle({
    //    strokeColor: '#ED6D1A',
    //    strokeOpacity: 0.8,
    //    strokeWeight: 2,
    //    fillColor: '#ED6D1A',
    //    fillOpacity: 0.35,
    //    map: mapElem,
    //    center: markerLocation,
    //    radius: RadarCircle.radius  
    //});




    console.log(RadarCircle.radius);
} 