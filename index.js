

// locomotive js - smooth scrolling
// first css & last js links use in your index.html 
// https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/

// this is link : https://github.com/locomotivemtl/locomotive-scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),      //  el means main parent div
    smooth: true
});



// gsap to animate
// gsap link: https://cdnjs.com/libraries/gsap      copy the first script tag
// sometimes a tags don't allow animation so we have to make them display: inline-block; to show animation but here in my case it already shows animation
gsap.from('.nlink',{
    stagger: 0.2,     // it means keep 0.1 sec gap to animate
    y:  10, // y-axis may downword 10 points say animate krna chata hu
    duration: 1,
    ease: Power2,
    opacity: 0
})

Shery.textAnimate("#headings h1" , {
    style: 2,
    y: 10,
    delay: 0.3,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });   

  gsap.from('.anim2',{
    y: 50,
    stagger: 0.3,
    opacity: 0,
    ease: Expo,     // we can either use Expo or Power4
    duration: 1
})





// shery js to animate images accordingly

// Shery.imageEffect("#imgntext img", {
//   style: 1 /*OR 5 for different variant */,
//   debug: true,
// });

// bottom animation part
  
    const button = document.querySelector("#ftext button");
    const video = document.querySelector("#future video");
  
    button.addEventListener("mouseover", function () {
      gsap.to(video, {
        opacity: 1,
        duration: 1,
        ease: "power4.inOut"
      });
    });
  
    button.addEventListener("mouseleave", function () {
      gsap.to(video, {
        opacity: 0,
        duration: 1,
        ease: "power4.inOut"
      });
    });
  