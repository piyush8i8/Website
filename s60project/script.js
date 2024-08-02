
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

gsap.from(".section3-2",{
  x:800,
  duration:2,
  delay:0.2,
  scrollTrigger:{
    trigger:".section3-2",
    scroller:"body",
    start:"top 90%",
    end:"top 20%",
    // markers:"true"
  }
}
)
// gsap.from(".section3-3",{
//   x:800,
//   duration:3,
//   delay:0.2,
//   scrollTrigger:{
//     trigger:".section3-3",
//     scroller:"body",
//     start:"top 90%",
//     end:"top 20%",
//     // markers:"true"
//   }
// })

gsap.from(".course",{
  y:200,
  duration:0.8,
  delay:0.1,
  scale:0,
  stagger:1,
  scrollTrigger:{
    trigger:".course",
    scroller:"body",
    start:"top 100%",
    end:"top 20%",
    // markers:"true"
  }
})
gsap.from(".course21",{
  x:-200,
  duration:1,
  delay:0.2,
  scale:0,
  stagger:1,
  scrollTrigger:{
    trigger:".course21",
    scroller:"body",
    start:"top 100%",
    end:"top 20%",
    // markers:"true"
  }
})
gsap.from(".course22",{
  y:200,
  duration:1,
  delay:0.2,
  scale:0,
  stagger:1,
  scrollTrigger:{
    trigger:".course22",
    scroller:"body",
    start:"top 100%",
    end:"top 20%",
    // markers:"true"
  }
})
gsap.from(".course23",{
  x:200,
  duration:1,
  delay:0.2,
  scale:0,
  stagger:1,
  scrollTrigger:{
    trigger:".course23",
    scroller:"body",
    start:"top 100%",
    end:"top 20%",
    // markers:"true"
  }
})