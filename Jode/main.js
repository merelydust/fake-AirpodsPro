const layer1 = document.querySelector('.layer1');
const title = layer1.querySelector('.title');
const video = layer1.querySelector('video');

// end section
const layer2 = document.querySelector('.layer2');
const end = layer2.querySelector('.rero');

// scroll magic
const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
  duration: 9000, // 你视频的长度
  triggerElement: layer1,
  triggerHook: 0,
})
.setPin(layer1)
.addTo(controller);

//text animation
const textAnim = TweenMax.fromTo(title, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: layer1,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);

//video animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  console.log(scrollpos, delay);

  video.currentTime = delay;
}, 33.3);
