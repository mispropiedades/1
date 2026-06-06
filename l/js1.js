const map = L.map('map').setView([-32.8000, -71.2367], 10);
const galleries = {
    pic2: [
        //"../f/pic2.jpg",
        //"../f/pic9.jpg",
        "../f/pic10.jpg",
        "../f/pic11.jpg",
        "../f/pic12.jpg",

        "../f/pic13.jpg",
        "../f/pic14.jpg",
        "../f/pic15.jpg",
        "../f/pic16.jpg",
        
        "../f/pic17.jpg",
        "../f/pic18.jpg",
        "../f/pic19.jpg",
        "../f/pic20.jpg",
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



const targetCoords = [-33.08177615826319, -70.9300088851204];
const targetCoords2 = [-33.084670466027134, -70.9293670336881];
// 1. Create the Layer Group WITHOUT adding it to the map initially
const highZoomGroup = L.layerGroup(); // Removed .addTo(map)

let currentGallery = [];
let currentImageIndex = 0;
