let totalTime = 60;  // Countdown duration in seconds
let gameEndTime;
let inProgress = false;  // Tracks if the game is active
let showIntro = true;  // Tracks if splash screen is visible

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
        let timeLeft = floor((gameEndTime - millis()) / 1000);
        timeLeft = max(0, timeLeft);

        fill(0);
        textAlign(CENTER, TOP);
        text("Time Left: " + timeLeft + "s", width / 2, 10);

        if (timeLeft === 0) {
            noLoop();  // Stop updating when time runs out
        }
    }
}

function keyPressed() {
    if (key === 'S' || key === 's') {
        startCountdown();
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
    gameEndTime = millis() + totalTime * 1000;
    loop();
}