var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeUp = new Image();
var pipeBottom = new Image();

bird.src = "game/textures/flappy_bird_bird.png";
bg.src = "game/textures/flappy_bird_bg.png";
fg.src = "game/textures/flappy_bird_fg.png";
pipeUp.src = "game/textures/flappy_bird_pipeUp.png";
pipeBottom.src = "game/textures/flappy_bird_pipeBottom.png";

// Звуковые файлы
var main_audio = new Audio();
var score_audio = new Audio();
var fail_audio = new Audio();

score_audio.src = "game/sounds/score.mp3";
main_audio.src = "game/sounds/main.mp3";
fail_audio.src = "game/sounds/fail.mp3"

function play_main () {
    main_audio.play();
}

var gap = 90;

// При нажатии на какую-либо кнопку
document.addEventListener("keydown", moveUp);
document.addEventListener('click',moveUp);


function moveUp() {
    yPos -= 25;
    play_main();
}

// Создание блоков
var pipe = [];

pipe[0] = {
    x : cvs.width,
    y : 0
};

var score = 0;
// Позиция птички
var xPos = 10;
var yPos = 150;
var grav = 2;

function draw() {
    ctx.drawImage(bg, 0, 0);

    for(var i = 0; i < pipe.length; i++) {
        ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);

        pipe[i].x--;

        if(pipe[i].x == 125) {
            pipe.push({
                x : cvs.width,
                y : Math.floor(Math.random() * pipeUp.height) - pipeUp.height
            });
        }

        // Отслеживание прикосновений
        if(xPos + bird.width >= pipe[i].x
            && xPos <= pipe[i].x + pipeUp.width
            && (yPos <= pipe[i].y + pipeUp.height
                || yPos + bird.height >= pipe[i].y + pipeUp.height + gap)) {
            // location.reload(); // Перезагрузка страницы
            score = 0;
            main_audio.pause();
            setTimeout(play_main,2000);
            fail_audio.play();
        }
        if ( yPos + bird.height >= cvs.height - fg.height) {
            location.reload();
        }

        if(pipe[i].x == 5) {
            score++;
            console.log(grav);
            score_audio.play();
        }
    }

    ctx.drawImage(fg, 0, cvs.height - fg.height);
    ctx.drawImage(bird, xPos, yPos);

    yPos += grav + score/5;

    ctx.fillStyle = "#000";
    ctx.font = "24px Verdana";
    ctx.fillText("Score: " + score, 10, cvs.height - 20);

    requestAnimationFrame(draw);
}

pipeBottom.onload = draw;