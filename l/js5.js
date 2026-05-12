L.marker([-32.93939, -71.27859])
    .addTo(map)
    .bindPopup(`
        <div class="popup-content">
            <h3>Propiedad 2</h3>

            <img src="../f/pic4.jpg"
                 alt="Propiedad 2"
                 class="popup-image">

            <ul>
                <li><span class="emoji">🟫</span> 8750 m2</li>
                <li><span class="emoji">🚌</span> a 20 min</li>
            </ul>
        </div>
        .on("popupopen",function(){heroImage.src = "../f/pic4.jpg";});
    `);
