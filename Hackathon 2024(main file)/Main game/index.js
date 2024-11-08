import {players, playerMovements, drawPlayers} from "./players.js";
import {canvasWidth, canvasHeight, jumpHeight, gravity } from "./config.js";
import {platforms, drawPlatforms} from "./platforms.js"
import {shoot} from "./gun.js";
let backgroundColour = {
    r: 250,
    g: 0,
    b: 0
}

let opps = [
    {x: 0,
    y: 660,
    width: 20,
    height: 40,
    r: 2,
    g: 198, 
    b: 247,
    speed: 5,
    velY: 0,
    isJumping: false,
    orientation: "left",
    hp: 10
    }
]
function drawOpps(){
    opps.forEach(opp => {
        fill(opp.r, opp.g, opp.b);
        rect(opp.x, opp.y, opp.width, opp.height)
    }
)
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
}

window.draw = draw;
window.setup = setup;
