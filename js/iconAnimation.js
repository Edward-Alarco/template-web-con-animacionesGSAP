const buttonIcon = document.querySelector('#navOpenInterruptor');
const navOpen = document.querySelector('.barra-open');

const tl2 = new TimelineLite( {paused:true} );

tl2.to('.card-background', 1, {
    width: '55%',
    left: '75%',
    ease: Power2.easeOut
})
.to('.titlecard',1, {
    fontSize: '1.5rem',
    ease: Power2.easeOut
}, '-=1')
.to('.subtitlecard',1, {
    fontSize: '0.9rem',
    ease: Power2.easeOut
}, '-=2')
.to(navOpen,1, {
    top: '0',
    pointerEvents: 'auto',
    ease: Power2.easeOut
}, '-=1.65');

buttonIcon.addEventListener('click', ()=>{
    tl2.play();
    tl2.to(buttonIcon,1,{
        transform: 'translateX(300px)',
        ease: Power2.easeOut
    }, '-=3')
});