import { productCard } from "../components/productCard.js";

const order = ["米食系列", "豆類系列", "豆飲系列", "養生系列", "米製點心"];

export function seriesPage({ products }) {
  return `
    <section class="page-hero">
      <p class="eyebrow">Collections</p>
      <h1>商品系列</h1>
      <p>從長秈10號米食、有機黑豆到穀香茶與米製點心，以健康生活的角度整理日常所需。</p>
    </section>
    ${order.map((category) => {
      const items = products.filter((product) => product.category === category);
      if (!items.length) return "";
      return `
        <section class="section series-block">
          <div class="section-heading">
            <div><p class="eyebrow">Product Line</p><h2>${category}</h2></div>
          </div>
          <div class="product-grid">${items.map(productCard).join("")}</div>
        </section>
      `;
    }).join("")}
  `;
}
