// bring in elements from HTML
const tube = document.querySelector('#tube');
const hole = document.querySelector('#hole');
const score = document.querySelector('#score');
const player = document.querySelector('#player');
const gameBoard = document.querySelector('#flappy-game');
const endGame = document.querySelector('#end-game');
const cscore = 0;
score.innerHTML = cscore;

// every time the animation runs this function that will cut
// holes in the tubes
hole.addEventListener('animationiteration', () => {
    let rdm = -((Math.random()* 400)+100)
    hole.style.top = rdm + "px";
})

// apply gravity to the character 
setInterval(() => {
    let playerValue = parseInt(window.getComputedStyle(player).getPropertyValue('top'));
    player.style.top = (playerValue+3)+"px";
    if(playerValue>680) {
        // document.querySelector("#end-game").style.opacity = 1;
        alert('game over');
        counter =
        player.style.top = 100+"px";
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


