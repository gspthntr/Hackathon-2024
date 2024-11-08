import { canvasWidth, canvasHeight, jumpHeight, gravity } from "./config.js";
export let players = [
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

export function playerMovements(){
    players.forEach(player => {
        let nextX = player.x;
        let nextY = player.y;
    
        keyIsDown(87) && !player.isJumping && (player.velY = -jumpHeight, player.isJumping = true);

        player.velY += gravity;

        nextY += player.velY;
        
        
        keyIsDown(83) && (nextY += player.speed);
      
        keyIsDown(65) && ((nextX -= player.speed), (player.orientation = "left"));
        keyIsDown(68) && ((nextX += player.speed), (player.orientation = "right"));
        if (nextY + player.height >= 700) {
            player.isJumping = false;    
            player.velY = 0;             
            nextY = 700 - player.height;
        }
        nextX = constrain(nextX, 0, canvasWidth - player.width);
        nextY = constrain(nextY, -100, canvasHeight - 100 - player.height);
        player.y = nextY;
        player.x = nextX;
    })       
}

export function drawPlayers(){
    players.forEach(player => {
        fill(0);
        rect(player.x, player.y, player.width, player.height)
    }
)
}