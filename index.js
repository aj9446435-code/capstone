// Use the four property images already in the `image/` folder
const assets = [
  'image/property1.jpg',
  'image/property2.jpg',
  'image/property3.jpg',
  'image/property4.jpg'
];

const slideshow = document.getElementById('carousel');
let currentIndex = 0;
let autoPlayInterval = null;
const INTERVAL_MS = 8000;

function initSlideshow(){
  if(!slideshow) return;
  const caption = slideshow.querySelector('.carousel-caption');
  assets.forEach((src,i)=>{
  const s = document.createElement('div');
  s.className = 'carousel-image';
  s.style.backgroundImage = `url(${src})`;
  if(i===0) s.classList.add('active');
  // insert slides behind caption but above bg
  if(caption) slideshow.insertBefore(s, caption);
  else slideshow.appendChild(s);
  });
  // ensure dots reflect asset count (if dots are static, they'll still work if count matches)
  if(assets.length>1) startAutoPlay();
}

function changeImage(n) {
  showImage(currentIndex + n);
}

function currentImage(n) {
  showImage(n - 1);
}

function showImage(n) {
  const images = document.querySelectorAll('.carousel-image');
  const dots = document.querySelectorAll('.dot');
  if (!images.length) return;
  if (n >= images.length) n = 0;
  if (n < 0) n = images.length - 1;
  currentIndex = n;
  images.forEach((img, i) => img.classList.toggle('active', i === currentIndex));
  dots.forEach((d, i) => d.classList.toggle('active', i === currentIndex));
}

function startAutoPlay() {
  stopAutoPlay();
  autoPlayInterval = setInterval(() => changeImage(1), INTERVAL_MS);
}

function stopAutoPlay() {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval);
    autoPlayInterval = null;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initSlideshow();
  showImage(0);
  const carousel = document.getElementById('carousel');
  if (carousel) {
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);
    carousel.addEventListener('touchstart', startAutoPlay);
    carousel.addEventListener('touchend', startAutoPlay);
  }
});