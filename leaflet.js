var map = L.map('map').setView([4.19303, 101.99707], 8);

var marker = L.marker([4.19303, 101.99707]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openOn(map);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);