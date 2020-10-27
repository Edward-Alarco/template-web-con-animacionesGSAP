function splitScroll(){
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '200%',
        triggerElement: '.descripcion-de-modelos',
        triggerHook: 0
    })
    .addIndicators()
    .addTo(controller);
}

splitScroll();