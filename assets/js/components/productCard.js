export function productCard(product) {
  const subtitle = product.subtitle || product.shortDescription || product.description || "";
  return `
    <article class="product-card product-card-${product.id}">
      <a href="#/product/${product.id}" aria-label="查看 ${product.name}">
        <img src="${product.image}" alt="${product.name}">
      </a>
      <div class="product-card-body">
        <h3>${product.name}</h3>
        ${subtitle ? `<p>${subtitle}</p>` : ""}
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
