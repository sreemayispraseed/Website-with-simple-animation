//tl =timeline
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
// its for the intro text animation 
tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });

tl.to(".slider", { y: "-100%", duration: 1, delay: 0.5 });
//-=1 means start 1s faster ,.text class animation and .slider animation happens at the same time
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });

tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
//this 2 for the text animation