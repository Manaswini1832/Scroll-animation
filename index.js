const flightPath = {
  curviness: 1.25,
  autoRotate: true,
  values: [
    { x: 100, y: -20 },
    { x: 300, y: 10 },
    { x: 500, y: 100 },
    { x: 750, y: -100 },
    { x: 350, y: -50 },
    { x: 600, y: 100 },
    { x: 800, y: 0 },
    { x: window.innerWidth, y: -250 },
  ],
};

const tween = new TimelineLite();

tween.add(
  TweenLite.to(".paper-plane", 1, {
    bezier: flightPath,
    ease: Power1.easeInOut,
  })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: ".animation", //section that should trigger the animation
  duration: 3000,
  triggerHook: 0,
})
  .setTween(tween)
  .setPin(".animation") //to let that section stick till the animation ends
  .addIndicators() //adds the start and trigger indicators for us to see during development.
  //if in case we don't want to show those, comment this line out.
  //for now I'll keep it uncommented for clarity*******************************
  .addTo(controller); //add the above indicators to the controller
