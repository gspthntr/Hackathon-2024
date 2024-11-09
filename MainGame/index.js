import {players, playerMovements, drawPlayers} from "./players.js";
import {canvasWidth, canvasHeight, jumpHeight, gravity } from "./config.js";
import {platforms, drawPlatforms} from "./platforms.js"
import {shoot} from "./gun.js";
import {drawOpps, oppsMovement} from "./opps.js";
import { preload } from "./players.js";
window.preload = preload;

let backgroundColour = {
    r: 250,
    g: 0,
    b: 0
}

function showCoordinates(x, y) {
    fill(0);
    textSize(16);
    text(`(${x}, ${y})`, x + 10, y - 10);
}


function setup(){
    createCanvas(canvasWidth, canvasHeight);
}


function draw(){
    background(backgroundColour.r, backgroundColour.g, backgroundColour.b);
    drawPlayers();
    drawOpps();
    drawPlatforms();
    playerMovements();
    shoot();
    oppsMovement();
    showCoordinates(mouseX, mouseY);
}


window.draw = draw;
window.setup = setup;
