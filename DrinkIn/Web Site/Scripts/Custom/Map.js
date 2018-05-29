//HTML Map element
var mapElem;
//Marker element
var marker;
//Orange radar circle on map
var RadarCircle;
//Current radius, set on slider
var currentRadius = 1;
//Current location of the marker
var markerLocation;


var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; 


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
        if ($('#filters').position().left == -300) {
            $(function () {

                $('#filters').animate({
                    left: 0,
                }, 400, function () {
                    $('#visibility-filter-div').css('display', 'inline');
                    });

                $('#btn-filters').animate({
                    left: 250
                }, 400);

            });
        } else {
            $('#visibility-filter-div').css('display', 'none');
            $(function () {
                $("#filters").animate({
                    left: -300,
                }, 400);

                $('#btn-filters').animate({
                    left: 0
                }, 400);
            });
        }
    });
};

//Map initializer
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

    //Onload event
    google.maps.event.addListenerOnce(mapElem, 'idle', function () {
        document.getElementById("LoadingIndicator").innerHTML = "";
    });

}

//Map click event handler
function placeMarker(location) {

    markerLocation = location;

    if (!marker) {
        marker = new google.maps.Marker({
            position: markerLocation,
            draggable: true,
            animation: google.maps.Animation.DROP,
            map: mapElem
        });

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
            radius: currentRadius * 1000
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
            radius: currentRadius * 1000
        });
        marker.setPosition(location);
    }
}

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    currentRadius = this.value;
    output.innerHTML = "Radius: " + currentRadius + "km";
    RadarCircle.setRadius(currentRadius * 1000);
} 


function RunMapScan() {

    for (var i = 0; i < 1000; i++) {

        var Loc = {
            lat: 50.619229 + i/5,
            lng: 26.252085 + i/5
        };

        var PMarker = new google.maps.Marker({
            position: Loc, 
            draggable: false,
            animation: google.maps.Animation.DROP,
            map: mapElem
        });

        PMarker.setPosition(Loc);
    }
}