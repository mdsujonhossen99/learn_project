const tl = gsap.timeline();

tl.to("nav", {
  height: "80px",
  backgroundColor: "#000",
  duration: 0.5,
  scrollTrigger: {
    trigger: "nav",
    scroller: "body",
    // markers: true,
    start: "top -3%",
    end: "top -4%",
    scrub: 1,
  },
});
tl.from("nav>a", {
  x: "-100px",
  duration: 0.5,
  opacity: 0,
  stagger: 0.5,
});
tl.from("nav li a", {
  x: "100px",
  duration: 0.5,
  opacity: 0,
  // stagger: 0.5,
});
tl.from(".banner h1", {
  y: "-100px",
  duration: 0.5,
  opacity: 0,
});
tl.from(".banner p", {
  y: "-50px",
  duration: 0.5,
  opacity: 0,
});
tl.from(".visit-btn", {
  y: "-25px",
  scale: 0.5,
  duration: 0.5,
  opacity: 0,
  stagger: 0.5,
});
tl.from(".course-offer h2,.course-offer>p", {
  y: "-50px",
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".course-offer h2,.course-offer>p",
    scroller: "body",
    // markers: true,
    start: "top 90%",
    end: "top 70%",
    scrub: 3,
  },
});
tl.from(".offer-box-c", {
  scale: 0.5,
  duration: 0.5,
  opacity: 0,
  // stagger: 2,
  scrollTrigger: {
    trigger: ".offer-box-c",
    scroller: "body",
    // markers: true,
    start: "top 100%",
    end: "top 70%",
    scrub: 2,
  },
});
tl.from(".campus-area .anim-image", {
  scale: 0.5,
  duration: 0.5,
  opacity: 0,
  // stagger: 2,
  scrollTrigger: {
    trigger: ".campus-area .anim-image",
    scroller: "body",
    // markers: true,
    start: "top 100%",
    end: "top 70%",
    scrub: 2,
  },
});
tl.from(".facilities-box .anim-image", {
  scale: 0.5,
  duration: 0.5,
  opacity: 0,
  scrollTrigger: {
    trigger: ".facilities-box .anim-image",
    scroller: "body",
    // markers: true,
    start: "top 90%",
    end: "top 70%",
    scrub: 2,
  },
});
tl.from(".review-box", {
  x: "100px",
  duration: 0.5,
  // delay: -0.5,
  opacity: 0,
  stagger: 1,
  scrollTrigger: {
    trigger: ".review-box",
    scroller: "body",
    // markers: true,
    start: "top 100%",
    end: "top 90%",
    scrub: 4,
  },
});
