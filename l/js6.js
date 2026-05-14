L.marker([-33.09022, -70.91893])
    .addTo(map)
    .bindPopup(`
        <div class="popup-content">
            <h3>Propiedad 4</h3>

            <img src="../f/pic5.jpg"
                 alt="Propiedad 4"
                 class="popup-image">

            <ul>
                <li><span class="emoji">🟫</span> 3750 m2</li>
                <li><span class="emoji">🚌</span> a 5 min</li>
            </ul>
        </div>
            `)
      //  .on("popupopen",function(){heroImage.src = "../f/pic5.jpg";});
    .on("popupopen", function () {

        currentGallery = galleries.pic5;
        currentImageIndex = 0;

        updateHeroImage();
    });
