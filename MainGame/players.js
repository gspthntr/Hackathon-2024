import {platforms} from "./platforms.js";
import {canvasWidth, canvasHeight, jumpHeight, gravity} from "./config.js";
import {opps} from "./opps.js";
let playerImage;
export function preload(){
    playerImage = loadImage("./CharacterModels/angryBuoy.PNG")
}
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
    orientation: "left",
    hp: 3,
    hit: false
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

        let collision = false;
        opps.forEach(opp => {
            if(
                player.x < opp.x + opp.width &&
                player.x + player.width > opp.x &&
                player.y < opp.y + opp.height &&
                player.y + player.height > opp.y
            ){
                collision = true;
                if(!player.hit){
                    player.hp -= 1;
                    console.log(player.hp)
                    player.hit = true;
                }
                
            }
        if(player.hp === 0){
            fill(255, 255, 255);
            textSize(70);
            text("YOU'RE DEAD", 200, canvasHeight / 2)
        }
        });
        if(!collision){
            player.hit = false;
        }
        if(
            player.x + player.width >= canvasWidth &&
            player.y <= 130 + player.height
        ){
            console.log("DEPRESSION CURED!")
            fill(255, 255, 255);
            textSize(70);
            text("DEPRESSION CURED", 200, canvasHeight / 2)
        }
    })       
}

export function drawPlayers(){
    players.forEach(player => {
        // noStroke();
        fill(255, 0, 0, 0);
        rect(player.x, player.y, player.width, player.height)
        image(playerImage, player.x - 25, player.y -70, player.width * 3.5, player.height * 3.5)
        fill(255, 255, 255)
        textSize(16);
        text(`HP: ${player.hp}`, player.x - 10, player.y - 35);
    }
)
}


