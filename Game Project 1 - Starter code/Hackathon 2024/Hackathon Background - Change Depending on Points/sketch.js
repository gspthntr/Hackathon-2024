let points = 0;         // Variable to keep track of points
let maxPoints = 100;    // Define a max points value for transparency transition

function setup() {
    createCanvas(400, 400);
}

function draw() {
    // Map points to an alpha (transparency) range
    let alphaValue = map(points, 0, maxPoints, 0, 255);

    // Set background color with variable alpha based on points
    background(100, 150, 255, alphaValue);

    // Display points on the canvas
    fill(255);
    textSize(20);
    text(`Points: ${points}`, 20, 30);
}

// Increase points when mouse is pressed
function mousePressed() {
    points += 5;

    // Cap points at maxPoints to avoid exceeding the transparency range
    if (points > maxPoints) {
        points = maxPoints;
    }
}