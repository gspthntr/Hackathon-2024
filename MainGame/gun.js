import { players } from "./players.js";
import {drawOpps, opps} from "./opps.js";

let bullets = [];
let bulletCreated = false;
const bulletSpeed = 10;
const bulletWidth = 20;
const bulletHeight = 5;

export function shoot() {
    players.forEach(player => {
        if (keyIsDown(76) && !bulletCreated) {
            bulletCreated = true;
            if (player.orientation === "left") {
                bullets.push({
                    x: player.x - bulletWidth,
                    y: player.y + player.height / 2,
                    width: bulletWidth,
                    height: bulletHeight,
                    orientation: "left"
                });
            } else if (player.orientation === "right") {
                bullets.push({
                    x: player.x + player.width,
                    y: player.y + player.height / 2,
                    width: bulletWidth,
                    height: bulletHeight,
                    orientation: "right"
                });
            }
        }
        bullets.forEach((bullet, bulletIndex) => {
            bullet.x += (bullet.orientation === "left" ? -bulletSpeed : bulletSpeed);
            fill(175, 178, 179);
            rect(bullet.x, bullet.y, bullet.width, bullet.height);
            opps.forEach((opp, oppIndex) => {
                if (
                    bullet.x < opp.x + opp.width &&
                    bullet.x + bullet.width > opp.x &&
                    bullet.y + bullet.height > opp.y &&
                    bullet.y < opp.y + opp.height
                ) {
                    opp.hp -= 1; 
                    bullets.splice(bulletIndex, 1);

                    if (opp.hp <= 0) {
                        textSize(16);
                        text("THE OPPS ARE DEAD", opp.x, opp.y - 7);
                        opps.splice(oppIndex, 1);
                    }
                }
            });
        });
        bullets = bullets.filter(bullet => bullet.x + bullet.width > 0 && bullet.x < width);
    });
    if (!keyIsDown(76)) {
        bulletCreated = false;
    }
}
