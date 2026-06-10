export function productCard(product) {
  const features = product.features.map((feature) => `<span>${feature}</span>`).join("");
  return `
    <article class="product-card">
      <a href="#/product/${product.id}" aria-label="查看 ${product.name}">
        <img src="${product.image}" alt="${product.name}">
      </a>
      <div class="product-card-body">
        <p class="badge">${product.badge}</p>
        <h3>${product.name}</h3>
        <p>${product.subtitle}</p>
        <div class="feature-row">${features}</div>
        <div class="product-card-footer">
          <strong>NT$ ${product.price}</strong>
          <div class="card-actions">
            <button class="icon-button" type="button" aria-label="收藏 ${product.name}" data-favorite="${product.id}">♡</button>
            <a class="text-link" href="#/product/${product.id}">查看詳情</a>
          </div>
        </div>
      </div>
    </article>
  `;
}
