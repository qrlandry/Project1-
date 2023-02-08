// bring in elements from HTML
const tube = document.querySelector('#tube');
const hole = document.querySelector('#hole');
const score = document.querySelector('.js-score');
const player = document.querySelector('#player');
const gameBoard = document.querySelector('#flappy-game');
const endGame = document.querySelector('#end-game');
let count = 0;

// every time the animation runs this function that will place
// holes in the tubes
hole.addEventListener('animationiteration', () => {
    let rdm = -((Math.random()* 300)+150)
    hole.style.top = rdm + "px";
    score.innerHTML = count += 10;
})

// apply gravity to the character and apply game ending conditions
setInterval(() => {
    // grabbing top values of the player, tubes and hole
    let playerValue = parseInt(window.getComputedStyle(player).getPropertyValue('top'));
    player.style.top = (playerValue+3)+"px";
    let tubeLeft = parseInt(window.getComputedStyle(tube).getPropertyValue('left'));
    let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue('top'));
    let pValue = -(690-playerValue);
    console.log(holeTop)
    console.log(pValue)
    console.log(tubeLeft)
        // conditions for collision detection
        if((playerValue>680)||((tubeLeft<30)&&(tubeLeft>-50)&&((pValue<holeTop)
        ||(pValue>holeTop+130)))){
        // document.querySelector("#end-game").style.opacity = 1;
        alert('game over');
        player.style.top = 100+"px";
        count = 0;
        score.innerHTML = count;
        // return endGame;
    }
}, 8)

// onclick jump function
function jump() {
    let jumpCount = 0;
    let jumpInt = setInterval(() => {
        let playerValue =
        parseInt(window.getComputedStyle(player).getPropertyValue('top'));
        if((playerValue>9) && (jumpCount<15)) {
        player.style.top = (playerValue-8)+"px";
        }
        if(jumpCount>20) {
            clearInterval(jumpInt);
            jumpCount=0;
        }
        jumpCount++
    },10)
}
document.addEventListener('keyup', jump);