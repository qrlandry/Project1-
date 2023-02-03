// bring in elements from HTML
const tube = document.querySelector('#tube');
const hole = document.querySelector('#hole');
const score = document.querySelector('#score');
const player = document.querySelector('#player');
const cscore = 0;
score.innerHTML = cscore;
const jumps = 0;
// every time the animation runs this function that will cut
// holes in the tubes will run
hole.addEventListener('animationiteration', () => {
    let rdm = -((Math.random()* 400)+100)
    hole.style.top = rdm + "px";
    cscore++;
})


