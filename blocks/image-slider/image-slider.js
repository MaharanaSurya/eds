export default function decorate(block) {
  const slides = [...block.children];

  slides.forEach((slide) => {
    slide.classList.add('slide');
  });

  const track = document.createElement('div');
  track.className = 'slider-track';

  track.append(...slides);

  block.innerHTML = '';

  const prev = document.createElement('button');
  prev.className = 'prev';
  prev.textContent = '←';

  const next = document.createElement('button');
  next.className = 'next';
  next.textContent = '→';

  block.append(track, prev, next);

  let current = 0;

  function update() {
    track.style.transform = `translateX(-${current * 100}%)`;
  }

  next.addEventListener('click', () => {
    current = (current + 1) % slides.length;
    update();
  });

  prev.addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    update();
  });
}