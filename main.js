// gsap.from('.art-image', { duration: 1, y: '100%', ease: 'bounce'})
//gsap.from('.art', { duration: 0, opacity: 0, delay: 0, stagger: .5 })
//gsap.from('.art2', { duration: 0, opacity: 0, delay: 0, stagger: .5 })
//gsap.from('.right', { duration: 2, x: '-100vw ', delay: 1,
//ease: 'power2.in' })
//gsap.from('.left',{duration: 1, delay: 1.5, x: '-100%'})
//gsap.to('.footer', { duration: 1, y: 0, ease: 'elastic', delay: 2.5 })
//gsap.fromTo('.button', { opacity: 0, scale: 0, rotation: 720 }, {duration: 1, delay: 3.5, opacity: 1, scale: 1, rotation: 0 })

const timeline = gsap.timeline({ defaults: { duration: 1 }})
timeline
.from('.art-image', { x: '100%', ease: 'stagger'})
.from('.art2', { x: '100%', ease: 'stagger',rotation: 720})
.from('.art', { y: '100%', ease: 'stagger', rotation: 720})
.from('.flex 2', { opacity: 0, stagger })
.from('.right', { x:'-100vw', ease: 'power2.in'}, 1)
.from('.left',{x: '-100%'}, '<.5')
.to('.footer', { y:0, ease: 'elastic' })
.fromTo('.button', { opacity: 0, scale: 0, rotation: 720 }, { opacity: 1, scale: 1, rotation: 0 })


const button = document.querySelector('.button')


  const prevButton = document.getElementById('prevbtn');
  const nextButton = document.getElementById('nextbtn');
  const images = document.querySelectorAll('.Flex img');
  let currentIndex = 0;

  prevButton.addEventListener('click', () => {
    const previousIndex = currentIndex;
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    animateImage(previousIndex, currentIndex);
  });

  nextButton.addEventListener('click', () => {
    const previousIndex = currentIndex;
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    animateImage(previousIndex, currentIndex);
  });

  function animateImage(previousIndex, currentIndex) {
    const tl = gsap.timeline();
    tl.fromTo(images[previousIndex], {opacity: 1}, {opacity: 0, duration: 0.5})
      .fromTo(images[currentIndex], {opacity: 0}, {opacity: 1, duration: 0.5});
  }

gsap.from(".artwork", {
    opacity: 0,
    y: 100,
    stagger: 0.2,
    duration: 1,
    ease: "power2.out"
  });
  


