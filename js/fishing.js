
// // Select header and back-to-top button
// const header = document.getElementById('header');
// const backToTop = document.getElementById('btd');
// // Create an Intersection Observer
// const observer = new IntersectionObserver(
//   ([entry]) => {
//     if (!entry.isIntersecting) {
//       // Header is out of view, show the button
//       backToTop.classList.add('show');
//     } else {
//       // Header is in view, hide the button
//       backToTop.classList.remove('show');
//     }
//   },
//   {
//     root: null, // Observe changes relative to the viewport
//     threshold: 0, // Trigger when any part of the header is visible
//   }
// );
// observer.observe(header);
// locomotive
// const scroll = new LocomotiveScroll({
//   el: document.querySelector('#loco'),
//   smooth: true,
//   lerp:0.03
// });
// document.querySelector("#back #btd").addEventListener("click", () =>{
//   scroll.scrollTo(0)
//   })




// Locomotive Scroll
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Locomotive Scroll
  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    lerp: 0.03,
  });
  // Back-to-top button
  const backToTop = document.getElementById("back-to-top");
  // Debugging: Ensure Locomotive Scroll is initialized
  // console.log("Locomotive Scroll Initialized");
  // Show/hide button based on scroll position
  scroll.on("scroll", (obj) => {
    // Debugging: Log scroll position
    // console.log("Scroll Position:", obj.scroll.y);
    if (obj.scroll.y > 200) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });
  // Scroll to top on button click
  backToTop.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default action
    scroll.scrollTo(0, {
      duration: 1000, // animation duration in milliseconds
      easing: [0.25, 0.1, 0.25, 1], // cubic-bezier easing
    });
  });
});






// swipper
const swiper = new Swiper('.swiper', {
  speed:800,
autoplay:{delay: 4000},
autoHeight: true,
loop: true,
// If we need pagination
pagination: {
el: '.swiper-pagination',
},
// Navigation arrows
navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},
});
// cursur follow
var $circle = $('.circle');
function moveCircle(e) {
  TweenLite.to($circle, 3, {
    x: e.pageX,
    y: e.pageY,
    ease: Elastic.easeOut.config(1, 0.3)
  });
}
function stickCircle(e) {
  TweenLite.set($circle, {
    x: e.pageX,
    y: e.pageY
  });
}
$(window).on( 'mousemove', moveCircle);