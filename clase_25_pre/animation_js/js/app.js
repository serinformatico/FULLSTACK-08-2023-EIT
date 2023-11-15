const car = document.querySelector(".car");
const buttonPlay = document.getElementById("id-play");
const buttonPause = document.querySelector("#id-pause");

function play() {
    car.style.animationPlayState = "running";
}

function pause() {
    car.style.animationPlayState = "paused";
}

buttonPlay.onclick = play;
buttonPause.onclick = pause;
