export default function decorate(block) {
  const rows = [...block.children];

  const title = rows[0]?.textContent.trim();
  const description = rows[1]?.textContent.trim();
  const imageUrl = rows[2]?.textContent.trim();

  block.innerHTML = `
    <div class="product-card-wrapper">
      <div class="product-card-image">
        ${imageUrl}
      </div>

      <div class="product-card-content">
        <h3>${title}</h3>
        <p>${description}</p>
      </div>
    </div>
  `;
}