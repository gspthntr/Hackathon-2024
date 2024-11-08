const canvasWidth = 1000;
const canvasHeight = 800; 
const jumpHeight = 10;
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
        
        // keyIsDown(87) && !player.isJumping ? (player.velY = -jumpHeight, player.isJumping = true): null;
        // keyIsDown(65) ? nextX -= player.speed: null;
        // keyIsDown(68) ? nextX += player.speed: null;
        // keyIsDown(83) ? nextY += player.speed: null;
        if(keyIsDown(87) && !player.isJumping){
            player.velY = jumpHeight;
            player.isJumping = true;
        }
        nextY += player.velY;
        player.velocityY += gravity;
        
        
        keyIsDown(83) && (nextY += player.speed);
        keyIsDown(65) && ((nextX -= player.speed), (player.orientation = "left"));
        keyIsDown(68) && ((nextX += player.speed), (player.orientation = "right"));
        (player.y + player.height < 700) ? player.velY += gravity :
        (player.velY = 0,
        player.isJumping = false,
        nextY = 700 - player.height);
        
        nextY += player.velY;
        nextX = constrain(nextX, 0, canvasWidth - player.width);
        nextY = constrain(nextY, -100, canvasHeight - 100 - player.height);
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
    createCanvas(canvasWidth, canvasHeight);
}

function draw(){
    background(backgroundColour.r, backgroundColour.g, backgroundColour.b);
    drawPlayers();
    playerMovements();
}
