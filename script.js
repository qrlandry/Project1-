// bring in elements from HTML
const tube = document.querySelector('#tube');
const hole = document.querySelector('#hole');
const score = document.querySelector('.js-score');
const player = document.querySelector('#player');
const gameBoard = document.querySelector('#flappy-game');
const endGame = document.querySelector('.end-game');
const h2End = document.querySelector('#scores');
const btn = document.querySelector("#restart");
let count = 0;

// every time the animation runs this function that will place
// holes in the tubes
hole.addEventListener('animationiteration', () => {
    let rdm = -((Math.random()* 300)+150)
    hole.style.top = rdm + "px";
    score.innerHTML = count++;
})

// upon losing display end game screen
function endGamer() {
    document.querySelector(".end-game").style.display = "block";
        gameBoard.style.display="none";
        h2End.innerHTML= `Game over, your score is ${count}`
}

// reset the animation and game when restart is clicked
function resetAnimation() {
    // pause the animation
    let tubesR = document.querySelector('#tube');
    let holesR = document.querySelector('#hole');
    holesR.style.animation = 'none';
    holesR.offsetHeight;
    holesR.style.animation = null; 
    tubesR.style.animation = 'none';
    tubesR.offsetHeight;
    tubesR.style.animation = null; 
    // display and reset
    document.querySelector(".end-game").style.display = "none";
    gameBoard.style.display="block";
    player.style.top = 200+"px";
    count = 0;
    score.innerHTML = count;
  }

// apply gravity to the character and apply game ending conditions
setInterval(() => {
    // grabbing top values of the player, tubes and hole
    let playerValue = parseInt(window.getComputedStyle(player).getPropertyValue('top'));
    player.style.top = (playerValue+3)+"px";
    let tubeLeft = parseInt(window.getComputedStyle(tube).getPropertyValue('left'));
    let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue('top'));
    // set the pValue to a negative playerValue
    // used bounds of screen play area to set
    // and make easier to determine the game ending
    // conditions
    let pValue = -(690-playerValue);
        // conditions for collision detection
        if((playerValue>680)||((tubeLeft<30)&&(tubeLeft>-50)&&((pValue<holeTop)
        ||(pValue>holeTop+130)))){
        endGamer();
        //alert('game over');
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