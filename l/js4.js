L.marker([-32.68410, -71.22076])
    .addTo(map)
    .bindPopup(`
        <div class="popup-content">
            <h3>Propiedad 2</h3>

            <img src="../f/pic3.jpg"
                 alt="Propiedad 3"
                 class="popup-image">

            <ul>
                <li><span class="emoji">🟫</span> 5750 m2</li>
                <li><span class="emoji">🚌</span> a 20 min</li>
            </ul>
        </div>
    `);
marker.on("popupopen",function(){heroImage.src = "../f/pic3.jpg";});
