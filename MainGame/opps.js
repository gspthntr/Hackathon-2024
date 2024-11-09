import {canvasWidth, canvasHeight} from "./config.js";
export let opps = [
    {x: 0,
    y: 660,
    width: 20,
    height: 40,
    r: 2,
    g: 198, 
    b: 247,
    speed: 15,
    velY: 0,
    isJumping: false,
    orientation: "left",
    hp: 10
    }
]


export function drawOpps(){
    opps.forEach(opp => {
        fill(opp.r, opp.g, opp.b);
        rect(opp.x, opp.y, opp.width, opp.height);
        fill(255, 255, 255);
        textSize(16);
        text(`Opps HP: ${opp.hp}`, opp.x, opp.y - 7);
    }
)
}

export function oppsMovement(){
    opps.forEach(opp => {
        opp.x += opp.speed;
        if(opp.x > canvasWidth){
        opp.x = 0;
        }else if(opp.x < 0){
        opp.x = canvasWidth - opp.width;
        }
    });
}

