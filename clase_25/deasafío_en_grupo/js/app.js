const car = document.querySelector(".animation__car");
const buttonPlay = document.querySelector("#id-play");
const buttonPause = document.querySelector("#id-pause");

function play() {
    car.style.animationPlayState = "running";
}

function pause() {
    car.style.animationPlayState = "paused";
}

buttonPlay.onclick = play;
buttonPause.onclick = pause;