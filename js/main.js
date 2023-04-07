let photos = document.getElementById('photos');

let images = [
  "./img/uno-waves.jpg",
  "./img/dos-sunset.jpg",
  "./img/tres-beach-heat.jpg",
  "./img/cuatro-boat.jpg",
  "./img/cinco-bike.jpg",
  "./img/seis-bridge.jpg",
];

window.onload = function showImages() {
  for (let i = 0; i < images.length; i++) {
    let img = new Image();
    img.src = images[i];
    img.alt = "App Images";
    const mq = window.matchMedia("(max-width: 768px)" );

    if(mq.matches) {
      img.width = 400;
      img.height = 400;
    }
    else {
      img.width = 250;
      img.height = 250;
    }

    photos.appendChild(img);
  }

}