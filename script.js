// bring in elements from HTML
const tube = document.querySelector('#tube');
const hole = document.querySelector('#hole');

// every time the animation runs this function that will cut
// holes in the tubes will run
hole.addEventListener('animationiteration', () => {
    let rdm = ((Math.random()* 400)+100)
    tube.style.top = rdm + "px";
})