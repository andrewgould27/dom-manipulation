let pointer = 0;

let images = [
    "img/porsche-917.jpg",
    "img/porsche-919-lmp1.jpg",
    "img/porsche-935.jpg",
    "img/porsche-gt3-rsr.jpg",
    "img/porsche-rs-spyder.jpg",
];

let slideshow = document.getElementById("slideshow");
let leftBtn = document.getElementById("left-btn");
let rightBtn = document.getElementById("right-btn");

leftBtn.onclick = function() {
    console.log("Go left");

    pointer = pointer - 1;
    if (pointer == -1) pointer = 4;

    slideshow.src = images[pointer];
}

rightBtn.onclick = function() {
    console.log("Go right");

    pointer = pointer + 1;
    if (pointer == 5) pointer = 0;

    slideshow.src = images[pointer];
}