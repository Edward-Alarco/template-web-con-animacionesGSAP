const buttonIcon = document.querySelector('#navOpenInterruptor');
const navOpen = document.querySelector('.barra-open');
const contenidoUno = document.querySelector('.buscador');
const contenidoDos = document.querySelector('.algunos-productos');

const tl2 = new TimelineLite( {paused:true, reversed: true} );

tl2.to('.card-background', 1, {
    width: '55%',
    left: '65%',
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
    left: '0',
    pointerEvents: 'auto',
    ease: Power2.easeOut
}, '-=1.65')
.to(contenidoUno,1, {
    opacity: '1',
    ease: Power2.easeOut
}, '-=2.65')
.to(contenidoDos,1, {
    opacity: '1',
    ease: Power2.easeOut
}, '-=3.65');

buttonIcon.addEventListener('click', ()=>{
    toogleTween(tl2);
    tl2.to(buttonIcon,1,{
        transform: 'translateX(300px)',
        ease: Power2.easeOut
    }, '-=3');
});

function toogleTween(tween){
    tween.reversed() ? tween.play() : tween.reverse();
}