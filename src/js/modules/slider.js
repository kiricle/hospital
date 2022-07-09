export function activateSlider() {
  if(!document.getElementsByClassName('slide__container')) return;
  const slides = document.getElementsByClassName('slide__container');
  const dots = document.getElementsByClassName('slider__dot');
  let interval;
  const INTERVAL_TIMER = 7000;

  for (let i = 0; i < dots.length; i++) {
    dots[i].dataset.id = i;
  }

  const showSlide = n => {
    clearInterval(interval);

    if (n >= slides.length) n = 0;
    if (n < 0) n = slides.length;

    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove('slide__container_active');
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove('slider__dot_active');
    }

    slides[n].classList.add('slide__container_active');
    dots[n].classList.add('slider__dot_active');
    interval = setInterval(() => {
      showSlide(n + 1);
    }, INTERVAL_TIMER);
  }


  const handleMove = e => {
    if (e.target.classList.contains('slider__dot_active')) return;
    if (!e.target.classList.contains('slider__dot')) return;
    showSlide(Number(e.target.dataset.id));
  }

  const dotsContainer = document.querySelector('.dots-container');
  dotsContainer.addEventListener('click', handleMove)

  showSlide(0);
}