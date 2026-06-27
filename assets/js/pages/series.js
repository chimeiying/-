import { productCard } from "../components/productCard.js";

const productCategories = Object.freeze([
  { id: "organic-rice", title: "有機米系列" },
  { id: "beans-grains", title: "豆穀系列" },
  { id: "lifestyle-goods", title: "生活良品" },
  { id: "healthy-living", title: "健康生活" }
]);

export function seriesPage({ products }) {
  return `
    <section class="page-hero series-hero">
      <p class="eyebrow">Collections</p>
      <h1>商品系列</h1>
      <p>從長秈10號米食、有機黑豆到穀香茶與米製點心，以健康生活的角度整理日常所需。</p>
    </section>
    ${productCategories.map((category) => {
      const items = products.filter((product) => product.categoryId === category.id);
      if (!items.length) return "";
      return `
        <section class="section series-block">
          <div class="section-heading">
            <div><p class="eyebrow">Product Line</p><h2>${category.title}</h2></div>
          </div>
          <div class="product-grid">${items.map(productCard).join("")}</div>
        </section>
      `;
    }).join("")}
  `;
}
