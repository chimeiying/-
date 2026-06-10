import { productCard } from "../components/productCard.js";

export function productDetailPage({ products, productId }) {
  const product = products.find((item) => item.id === productId) || products[0];
  if (!product) return "";
  const related = products
    .filter((item) => item.id !== product.id && item.category === product.category)
    .slice(0, 3);
  const recommendations = related.length ? related : products.filter((item) => item.id !== product.id).slice(0, 3);

  return `
    <section class="product-detail-hero">
      <div class="detail-media">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="detail-copy">
        <p class="badge">${product.category}</p>
        <h1>${product.name}</h1>
        <p>${product.description}</p>
        <div class="price-line"><strong>NT$ ${product.price}</strong><span>${product.weight}</span></div>
        <div class="detail-actions">
          <button class="button primary" type="button" data-buy-now="${product.id}">立即購買</button>
          <button class="button secondary" type="button" data-add-cart="${product.id}">加入購物車</button>
          <button class="icon-button large" type="button" aria-label="收藏 ${product.name}" data-favorite="${product.id}">♡</button>
        </div>
        <div class="shipping-note">
          <span>信用卡</span><span>LINE Pay</span><span>ATM轉帳</span><span>黑貓宅急便</span><span>超商取貨</span>
        </div>
      </div>
    </section>

    <section class="section product-feature-section">
      <div class="section-heading centered">
        <p class="eyebrow">Features</p>
        <h2>商品特色</h2>
      </div>
      <div class="feature-cards">
        ${product.features.map((feature) => `<article><span></span><h3>${feature}</h3></article>`).join("")}
      </div>
    </section>

    <section class="section origin-story">
      <div>
        <p class="eyebrow">Origin Story</p>
        <h2>產地故事</h2>
        <p>${product.story}</p>
      </div>
      <img src="assets/images/sanxing-season.svg" alt="宜蘭三星產地環境">
    </section>

    <section class="section product-verification">
      <div>
        <p class="eyebrow">Safety</p>
        <h2>安心驗證</h2>
      </div>
      <div class="verification-chips">
        ${product.verification.map((item) => `<span>${item}</span>`).join("")}
      </div>
    </section>

    <section class="section faq-section">
      <div class="section-heading">
        <div><p class="eyebrow">FAQ</p><h2>常見問題</h2></div>
      </div>
      <details open><summary>如何保存？</summary><p>建議置於陰涼乾燥處，米食與豆類開封後可密封冷藏，維持新鮮風味。</p></details>
      <details><summary>是否可以查詢檢驗報告？</summary><p>正式站可依商品批號提供有機驗證、SGS檢驗或批次資訊查詢。</p></details>
      <details><summary>有哪些付款與配送方式？</summary><p>付款支援信用卡、LINE Pay、ATM轉帳；配送支援黑貓宅急便與超商取貨。</p></details>
    </section>

    <section class="section">
      <div class="section-heading">
        <div><p class="eyebrow">Recommended</p><h2>推薦商品</h2></div>
      </div>
      <div class="product-grid">${recommendations.map(productCard).join("")}</div>
    </section>

    <section class="section purchase-cta">
      <h2>把安心帶回日常餐桌。</h2>
      <button class="button primary" type="button" data-buy-now="${product.id}">立即購買</button>
    </section>
  `;
}
