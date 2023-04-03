
let global = {
    IMAGE_COUNT:5,
    IMAGE_SIZE:48,
    IMAGE_PATH_PREFIX: "images/",
    IMAGE_PATH_SUFFIX: ".png",

    MOVE_DELAY: 300,

    score: 0,
    timeoutId: 0
}

const setup = () => {
    let img0 = document.getElementById("img0");
    img0.addEventListener("click", moveImg);
    img0.addEventListener("click", addAlert);
    img0.addEventListener("click", changeImg);
    let taskId = setInterval(changeImg, 1000)
};

const cLog = () => {
    console.log("dit bericht sturen we elke seconde!!!");
}

const addAlert = () => {
    let image = document.getElementById("img0");
    console.log(image.src);
    console.log(global.IMAGE_PATH_PREFIX + 0 + global.IMAGE_PATH_SUFFIX);
    let source = image.src
    let s2 = source.substring(source.length-12,source.length);
    if(s2 === global.IMAGE_PATH_PREFIX + 0 + global.IMAGE_PATH_SUFFIX) {
        alert("boom bomm bombom, uw score was: " + global.score);
        global.score = 0;

    }
}

const moveImg = () => {

    global.score++;
    document.getElementById("score").innerHTML = global.score;


    let img0 = document.getElementById("img0");
    let rTop = Math.random() * 400;
    let rBot = Math.random() * 600;
    console.log(rTop + rBot);
    img0.style.top = rTop + "px";
    img0.style.left = rBot + "px";

}

const changeImg = () => {
    let teVeranderen = document.getElementById("img0");
    let getal = Math.round( Math.random() * 4);

    console.log("getal: " + getal);
    teVeranderen.src= global.IMAGE_PATH_PREFIX + getal + global.IMAGE_PATH_SUFFIX;
}





