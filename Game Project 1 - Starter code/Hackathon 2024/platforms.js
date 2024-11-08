import { players} from "./players.js";
export let platforms = [
    {x:300 , y: 620, width: 50, height: 10, r: 60, g: 247, b: 2},
    {x:606 , y: 530, width: 50, height: 10, r: 60, g: 247, b: 2},

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