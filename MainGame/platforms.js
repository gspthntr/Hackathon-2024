import {opps} from "./opps.js";
import {players} from "./players.js";
// xgap = 312, ygap = 90
export let platforms = [
    {x: 638 , y: 220, width: 50, height: 10, r: 60, g: 247, b: 2},
    {x: 950 , y: 130, width: 50, height: 10, r: 60, g: 247, b: 2},
    {x: 100 , y: 610, width: 50, height: 10, r: 60, g: 247, b: 2},
    {x: 280 , y: 510, width: 50, height: 10, r: 60, g: 247, b: 2},
    {x: -5 , y: 400, width: 50, height: 10, r: 60, g: 247, b: 2},
    {x: 260 , y: 350, width: 300, height: 10, r: 60, g: 247, b: 2}
]
export function drawPlatforms(){
    platforms.forEach(platform => {
        fill(platform.r, platform.g, platform.b);
        rect(platform.x, platform.y, platform.width, platform.height)

        players.forEach(player => {
            if(
                player.x < platform.x + platform.width &&
                player.x + player.width > platform.x &&
                player.y + player.height >= platform.y &&
                player.y + player.height <= platform.y + player.height
            ){
                player.velY = 0;
                player.isJumping = false;
                player.y = platform.y - player.height;
            }
        });
    })
}