const slider = document.querySelector('.slider');
const cardbg = document.querySelector('.card-background');
const enlaces = document.querySelector('.enlaces');

const tl = new TimelineMax();

tl.fromTo(slider, 1, { left: '0%' }, { left: '-100%', display: 'none' })
.fromTo(cardbg,1.2,{left: '-1035px'},{left: '50%', transform: 'translateX(-50%)'}, '-=0.85')
.fromTo(enlaces,0.2,{opacity: 0},{opacity: 1, ease: Power2.easeInOut},'-=0.5')