function splitScroll(){
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '200%',
        triggerElement: '.descripcion-de-modelos',
        triggerHook: 0
    })
    .setPin('.descripcion-de-modelos')
    .addTo(controller);
}

splitScroll();