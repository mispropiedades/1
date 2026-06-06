/*
// 1. Add the White Circle
L.circleMarker(targetCoords, {
    radius: 12,          // Size of the circle radius
    fillColor: "#ffffff", // Inside color (White)
    fillOpacity: 1,      // Completely opaque circle
    color: "#000000",     // Outline color (Optional: black border so it stands out)
    weight: 1            // Border width
}).addTo(map);

// 2. Add Yellow Text on the exact same spot
L.marker(targetCoords, {
    icon: L.divIcon({
        className: 'yellow-map-text',
        html: '$600.000', // Change this to whatever you want written
        iconSize: [100, 20],   // Sets dimensions for the element bounds
        iconAnchor: [50, 7]    // Centers the text horizontally [X-axis, Y-axis]
    })
}).addTo(map);
*/
