export default function decorate(block) {
  const items = [...block.children]
    .map((row) => row.textContent.trim())
    .filter(Boolean);

  block.innerHTML = '';

  const slider = document.createElement('div');
  slider.className = 'text-slider-track';

  items.forEach((item) => {
    const slide = document.createElement('div');
    slide.className = 'text-slide';
    slide.textContent = item;
    slider.appendChild(slide);
  });

  block.appendChild(slider);

  let current = 0;
  const slides = slider.children;

  if (slides.length > 0) {
    slides[0].classList.add('active');

    setInterval(() => {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }, 3000);
  }
}