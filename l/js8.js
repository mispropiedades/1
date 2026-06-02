// 1. Create a Layer Group for your high-zoom elements
const highZoomGroup = L.layerGroup().addTo(map);

// 2. Add your second text marker directly to this group
L.marker(targetCoords, {
    icon: L.divIcon({
        className: 'yellow-map-text-sub',
        html: '<br>2100 M2 (30x70)',
        iconSize: [100, 20],
        iconAnchor: [50, 2]
    })
}).addTo(highZoomGroup);

// 3. Set the minimum zoom for this entire group natively
// Leaflet will automatically hide/show it based on this rule
map.on('zoomend', function() {
    if (map.getZoom() >= 15) {
        if (!map.hasLayer(highZoomGroup)) map.addLayer(highZoomGroup);
    } else {
        if (map.hasLayer(highZoomGroup)) map.removeLayer(highZoomGroup);
    }
});
