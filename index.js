
const jumpHeight = 10
const gravity = 0.4;
let players = [
    {x: 250,
    y: 250,
    width: 20,
    height: 40,
    r: 255,
    g: 247, 
    b: 0,
    speed: 5,
    velY: 0,
    isJumping: false,
    orientation: "left"
    }
]

let backgroundColour = {
    r: 250,
    g: 0,
    b: 0
}

function playerMovements(){
    players.forEach(player => {
        let nextX = player.x;
        let nextY = player.y;
        
        keyIsDown(87) ? nextY -= player.speed:
        keyIsDown(65) ? nextX -= player.speed:
        keyIsDown(68) ? nextX += player.speed:
        null;
        player.y = nextY;
        player.x = nextX;
    })
        
        
}
function drawPlayers(){
    players.forEach(player => {
        rect(player.x, player.y, player.width, player.height)
    }
)
}
function setup(){
    createCanvas(1000, 800);
}

function draw(){
    background(backgroundColour.r, backgroundColour.g, backgroundColour.b);
    drawPlayers();
    playerMovements();
}
