let totalTime = 60;
let gameEndTime;
let paused = false;  // Tracks if the game is paused
let inProgress = false;
let showIntro = true;

function setup() {
    createCanvas(400, 400);
    textAlign(CENTER, CENTER);
    textSize(20);
}

function draw() {
    background(220);

    if (showIntro) {
        introScreen();
    } else if (inProgress) {
        if (!paused) {
            let timeLeft = floor((gameEndTime - millis()) / 1000);
            timeLeft = max(0, timeLeft);

            fill(0);
            textAlign(CENTER, TOP);
            text("Time Left: " + timeLeft + "s", width / 2, 10);

            if (timeLeft === 0) {
                noLoop();
            }
        } else {
            pauseScreen();
        }
    }
}

function keyPressed() {
    if (key === 'S' || key === 's') {
        startCountdown();
    } else if (key === 'P' || key === 'p') {
        if (inProgress) {
            paused = !paused;  // Toggle the pause state
        }
    }
}

function introScreen() {
    background(100, 150, 200);
    fill(255);
    textSize(30);
    text("Game Intro", width / 2, height / 2 - 20);
    textSize(20);
    text("Press 'S' to Start", width / 2, height / 2 + 20);
}

function startCountdown() {
    showIntro = false;
    inProgress = true;
    paused = false;
    gameEndTime = millis() + totalTime * 1000;
    loop();
}

function pauseScreen() {
    fill(0, 150);
    rect(0, 0, width, height);

    fill(255);
    textSize(30);
    text("Paused", width / 2, height / 2 - 60);
    textSize(20);
    text("Press 'P' to Continue", width / 2, height / 2 + 20);
}