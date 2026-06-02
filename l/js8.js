// 1. Create the Layer Group WITHOUT adding it to the map initially
const highZoomGroup = L.layerGroup(); // Removed .addTo(map)

// 2. Add your second text marker directly to this group
L.marker(targetCoords, {
    icon: L.divIcon({
        className: 'yellow-map-text-sub',
        html: '<br>2100 M2 (30x70)',
        iconSize: [100, 20],
        iconAnchor: [50, 2]
    })
}).addTo(highZoomGroup);

// 3. Leaflet will now correctly handle showing/hiding it based on the zoom
map.on('zoomend', function() {
    if (map.getZoom() >= 15) {
        if (!map.hasLayer(highZoomGroup)) map.addLayer(highZoomGroup);
    } else {
        if (map.hasLayer(highZoomGroup)) map.removeLayer(highZoomGroup);
    }
});
