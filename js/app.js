var locations = [
  ["Saturday, November 4<br />" +
  "Pybus Market<br />" +
  "3 N. Worthen St., Wenatchee WA<br />" +
  "10 AM - 2 PM",
    47.424641,
    -120.30738],
  ["Monday, November 6<br />" +
  "Hal Holmes Community Center<br />" +
  "Teanaway Room<br />" +
  "209 N. Ruby St., Ellensburg WA<br />" +
  "10 AM - 2 PM",
    46.993557,
    -120.544576],
  ["Tuesday, November 7<br />" +
    "Cle Alum Senior Center<br />" +
  "719 E. 3rd St. Cle Elum WA<br />" +
  "<10 AM - 2 PM",
    47.194825,
    -120.920775],
  ["Wednesday, November 8<br />" +
  "Hinman Building" +
  "<br />610 E. Yakima St., Yakima WA<br />" +
  "10 AM - Noon",
    46.547576,
    -120.476597]
];


var journeyMap = L.map('map').setView([46.993557,	-120.544576], 7);

function loadGeo(district) {
  var Stamen_Watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.{ext}', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: 'abcd',
    minZoom: 5,
    maxZoom: 14,
    ext: 'png'
  }).addTo(journeyMap)}

$(document).ready(function() {
  // showInfo(data);
  loadGeo();
});

for (var i = 0; i < locations.length; i++) {
  marker = new L.marker([locations[i][1],locations[i][2]])
    .bindPopup(locations[i][0])
    .addTo(journeyMap).on('mouseover', function (e) {
      this.openPopup()
    }).on('mouseout', function (e) {
      this.closePopup();
})};

// var nov4Wenatchee = L.marker([47.424641	-120.30738]).addTo(journeyMap).bindPopup("November 4<br />Pybus Market<br />3 N. Worthen St., Wenatchee WA<br />10 AM - 2 PM");
//

//
// var nov6Ellensburg = L.marker([46.993557,	-120.544576], {
//   color: 'dark blue',
//   fillColor: 'blue',
//   fillOpacity: 0.8,
//   radius: 2000
// }).addTo(journeyMap).bindPopup("November 6<br />Hal Holmes Community Center<br />Teanaway Room<br />209 N. Ruby St., Ellensburg WA<br />10 AM - 2 PM");


// nov6Ellensburg.on('mouseover', function (e) {
//   this.openPopup();
// });
// nov6Ellensburg.on('mouseout', function (e) {
//   this.closePopup();
// });

// var littleton = L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.'),
//   denver    = L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.'),
//   aurora    = L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.'),
//   golden    = L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.');
//
// var cities = L.layerGroup([littleton, denver, aurora, golden]);
// var map = L.map('map', {
//   center: [39.73, -104.99],
//   zoom: 10,
//   layers: [grayscale, cities]
// });