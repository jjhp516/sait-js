console.log(navigator.userAgent);
console.log(navigator.vendor);
console.log(navigator.platform);

function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var altitude = position.coords.altitude;
    var speed = position.coords.speed;

    alert("coordinates: " + latitude + ", " + longitude);
    console.log("coordinates: " + latitude + ", " + longitude);
}

function geoError(errorObj) {
    alert("NO!");
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, geoError);
} else {
    alert("Get a better browser!");
}

console.log("screen height:" + screen.height);
console.log("screen width: " + screen.width);
console.log("color depth: " + screen.colorDepth);
console.log("orientation: " + screen.orientation);

document.bgColor = "papayawhip";



