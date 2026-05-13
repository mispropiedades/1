L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);
const heroImage = document.getElementById("heroImage");
function updateHeroImage() {
    heroImage.src = currentGallery[currentImageIndex];
}


//
nextBtn.addEventListener("click", function () {

    if (currentGallery.length === 0) return;

    currentImageIndex++;

    if (currentImageIndex >= currentGallery.length) {
        currentImageIndex = 0;
    }

    updateHeroImage();
});

prevBtn.addEventListener("click", function () {

    if (currentGallery.length === 0) return;

    currentImageIndex--;

    if (currentImageIndex < 0) {
        currentImageIndex = currentGallery.length - 1;
    }

    updateHeroImage();
});
