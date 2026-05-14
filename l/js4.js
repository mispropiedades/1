L.marker([-32.68410, -71.22076])
    .addTo(map)
    .bindPopup(`
        <div class="popup-content">
            <h3>Propiedad 3</h3>

            <img src="../f/pic3.jpg"
                 alt="Propiedad 3"
                 class="popup-image">

            <ul>
                <li><span class="emoji">🟫</span> 5750 m2</li>
                <li><span class="emoji">🚌</span> a 20 min</li>
            </ul>
        </div>
            `)

       // .on("popupopen",function(){heroImage.src = "../f/pic3.jpg";});

    .on("popupopen", function () {

        currentGallery = galleries.pic3;
        currentImageIndex = 0;

        updateHeroImage();
    });
