export function productCard(product) {
  const cardName = product.cardName || product.name;
  const specification = product.cardSpecification || product.weight || "";
  const feature = product.cardFeature || product.subtitle || product.shortDescription || product.description || "";
  const cardMeta = [specification, feature].filter(Boolean).join("｜");
  const cardPrice = product.cardPrice ?? product.price;
  const priceLabel = `NT$${cardPrice}${product.priceFrom ? " 起" : ""}`;
  return `
    <article class="product-card product-card-${product.id}">
      <a href="#/product/${product.id}" aria-label="查看 ${cardName}">
        <img src="${product.image}" alt="${cardName}">
      </a>
      <div class="product-card-body">
        <h3>${cardName}</h3>
        ${cardMeta ? `<p>${cardMeta}</p>` : ""}
        <div class="product-card-footer">
          <strong>${priceLabel}</strong>
          <div class="card-actions">
            <button class="icon-button" type="button" aria-label="收藏 ${cardName}" data-favorite="${product.id}">♡</button>
            <a class="text-link" href="#/product/${product.id}">查看詳情</a>
          </div>
        </div>
      </div>
    </article>
  `;
}
