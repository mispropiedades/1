const map = L.map('map').setView([-32.8000, -71.2367], 10);
const galleries = {
    pic2: [
        "../f/pic2.jpg",
        "../f/pic9.jpg",
    ],

    pic3: [
        "../f/pic3.jpg",
        "../f/pic7.jpg",
    ],

    pic4: [
        "../f/pic4.jpg",
        "../f/pic8.jpg",
    ],
    pic5: [
      "../f/pic5.jpg",
      "../f/pic6.jpg",
    ]
};
let currentGallery = [];
let currentImageIndex = 0;
