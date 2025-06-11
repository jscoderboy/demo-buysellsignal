// Navbar on scroll
window.addEventListener('scroll', function(){
    const navbar = document.querySelector('.banner');
    if(this.window.scrollY > 0){
        navbar.classList.add('navbar-scroll');
    }else{
        navbar.classList.remove('navbar-scroll');
    }
})
// Card animation
const cards = document.querySelectorAll('.card');
window.addEventListener('scroll', checkCards);
checkCards()
function checkCards(){
  const triggerBottom = window.innerHeight / 5 * 4
  cards.forEach(card =>{
    const cardTop = card.getBoundingClientRect().top
    if(cardTop < triggerBottom){
      card.classList.add('show');
    }else{
      card.classList.remove('show');
    }
  }) 
}


// Carousel
const slide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

let counter = 0;
const size = images[0].clientWidth;

function updateSlide() {
  slide.style.transform = `translateX(${-counter * size}px)`;
}

// Auto-slide every 3 seconds
setInterval(() => {
  counter = (counter + 1) % images.length;
  updateSlide();
}, 3000);

let timeLeft = 3600; // 1 hour in seconds

    function updateCountdown() {
      const hrs = String(Math.floor(timeLeft / 3600)).padStart(2, '0');
      const mins = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, '0');
      const secs = String(timeLeft % 60).padStart(2, '0');

      document.getElementById("hours").textContent = hrs;
      document.getElementById("minutes").textContent = mins;
      document.getElementById("seconds").textContent = secs;

      if (timeLeft <= 0) {
        clearInterval(timer);
      } else {
        timeLeft--;
      }
    }

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown(); // initial call