export default function decorate(block) {
  const rows = [...block.children];

  const cardsContainer = document.createElement('div');
  cardsContainer.className = 'mycards-container';

  rows.forEach((row) => {
    const cols = [...row.children];

    // Skip empty rows
    if (cols.length < 3 || !cols[1].textContent.trim()) {
      return;
    }

    const card = document.createElement('div');
    card.className = 'mycard';

    card.innerHTML = `
      <div class="mycard-image">
        ${cols[0].innerHTML}
      </div>
      <div class="mycard-content">
        <h3>${cols[1].textContent.trim()}</h3>
        <p>${cols[2].innerHTML}</p>
      </div>
    `;

    cardsContainer.append(card);
  });

  block.textContent = '';
  block.append(cardsContainer);
}