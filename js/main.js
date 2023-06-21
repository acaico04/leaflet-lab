//initialize map and set it's view to out chose geo coordinates
var map = L.map('map').setView([51.505, -0.09],13);
//add tile layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom:19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
console.log('map');
