import {players} from "./players.js"
let bullets = [] 
const bulletCreated = false;
const bulletSpeed = 10;
const bulletWidth = 20;
const bulletHeight = 5;

export function shoot(){
    
    players.forEach(player => {
        if(keyIsDown(76) && !bulletCreated){
            // bulletCreated = true;
            if(player.orientation === "left"){
                bullets.push({x: player.x - bulletWidth, y: (player.y + player.height / 2), width: bulletWidth, height: bulletHeight, orientation: "left"})
            }else if(player.orientation === "right"){
                bullets.push({x: player.x + bulletWidth, y: (player.y + player.height / 2), width: bulletWidth, height: bulletHeight, orientation: "left"})
            }
            console.log(bullets);
            bullets.forEach(bullet => {
                if(bullet.orientation === "left"){
                    bullet.x -= bulletSpeed;
                }else if(bullet.orientation === "right"){
                    bullet.x += bulletSpeed;
                }
                fill(175, 178, 179);
                rect(bullet.x, bullet.y, bullet.width, bullet.height);
            })
        }
    })
    
    
}