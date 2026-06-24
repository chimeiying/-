export function productCard(product, options = {}) {
  const features = product.features.map((feature) => `<span>${feature}</span>`).join("");
  const badge = product.badge ? `<p class="badge">${product.badge}</p>` : "";
  const subtitle = product.subtitle || product.shortDescription || product.description || "";
  const cardMeta = options.featured && product.weight ? `${product.weight}｜${subtitle}` : subtitle;
  const featuredClass = options.featured ? " product-card-featured" : "";
  const featureRow = options.featured ? "" : `<div class="feature-row">${features}</div>`;
  return `
    <article class="product-card${featuredClass} product-card-${product.id}">
      <a href="#/product/${product.id}" aria-label="查看 ${product.name}">
        <img src="${product.image}" alt="${product.name}">
      </a>
      <div class="product-card-body">
        ${options.featured ? "" : badge}
        <h3>${product.name}</h3>
        ${cardMeta ? `<p>${cardMeta}</p>` : ""}
        ${featureRow}
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
