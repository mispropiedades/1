L.marker([-33.0019, -71.2657])
    .addTo(map)
    .bindPopup(`
        <div class="popup-content">
            <h3>Propiedad 1</h3>

            <img src="../f/pic2.jpg"
                 alt="Propiedad 1"
                 class="popup-image">

            <ul>
                <li><span class="emoji">🏠</span> 75 m2</li>
                 <li><span class="emoji">🟫</span> 140 m2</li>
                <li><span class="emoji">🛏️</span> x3</li>
                <li><span class="emoji">🚿</span> x2</li>
                <li><span class="emoji">🚝</span> a 20 min</li>
                <li><span class="emoji">🚌</span> a 5 min</li>
                <li><span class="emoji">🛒</span> a 5 min</li>
            </ul>
        </div>
        `)
       // .on("popupopen",function(){heroImage.src = "../f/pic2.jpg";});
    .on("popupopen", function () {

        currentGallery = galleries.pic2;
        currentImageIndex = 0;

        updateHeroImage();
    });

