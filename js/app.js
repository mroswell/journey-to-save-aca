var journeyMap = L.map('map').setView([46.993557,	-120.544576], 7);

function loadGeo(district) {
  L.tileLayer('https://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {
    minZoom:5,
    maxZoom: 14,
    attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(journeyMap)}

$(document).ready(function() {
  // showInfo(data);
  loadGeo();
});

var nov6Ellensburg = L.marker([46.993557,	-120.544576], {
  color: 'dark blue',
  fillColor: 'blue',
  fillOpacity: 0.8,
  radius: 2000
}).addTo(journeyMap).bindPopup("November 6<br />Hal Holmes Community Center<br />Teanaway Room<br />209 N. Ruby St., Ellensburg WA<br />10 AM - 2 PM");

