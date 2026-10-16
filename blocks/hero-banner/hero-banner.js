export default function decorate(block) {
  const rows = [...block.children];

  const picture = rows[0]?.querySelector('picture');
  const title = rows[1]?.textContent.trim();
  const description = rows[2]?.textContent.trim();
  const buttonText = rows[3]?.textContent.trim();
  const buttonLink = rows[4]?.textContent.trim();

  block.innerHTML = `
    <div class="hero-banner-bg">
      ${picture ? picture.outerHTML : ''}
    </div>

    <div class="hero-banner-content">
      <h1>${title}</h1>
      <p>${description}</p>
      <a href="${buttonLink}" class="ext}
      </a>
    </div>
  `;
}