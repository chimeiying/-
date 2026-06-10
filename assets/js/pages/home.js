import { productCard } from "../components/productCard.js";

const categories = [
  ["米食系列", "長秈10號白米、胚芽米、糙米與紫米"],
  ["豆類系列", "宜蘭契作有機黑豆"],
  ["豆飲系列", "溫潤濃香的有機黑豆漿"],
  ["養生系列", "米糠穀香茶與水果醋"],
  ["米製點心系列", "以米穀延伸的日常點心"]
];

export function homePage({ products }) {
  const bestSellers = products.slice(0, 4).map(productCard).join("");

  return `
    <section class="brand-identity-section">
      <img class="brand-identity-logo" src="assets/images/logo-qih.png?v=20260609-logo" alt="心有戚戚焉正式Logo">
      <h1>心有戚戚焉</h1>
      <p class="brand-tagline">為健康把關</p>
      <p class="brand-belief">善待土地．善待作物．善待健康</p>
    </section>

    <section class="hero-section brand-hero">
      <div class="hero-image">
        <img src="assets/images/hero-yilan-morning-ricefield.png?v=20260610-1" alt="宜蘭三星晨霧稻田、遠方山脈與成熟稻穗">
      </div>
      <div class="hero-copy">
        <h2>從宜蘭三星出發，</h2>
        <p class="hero-statement">以有機耕作守護土地，<br>以誠實農產守護家人的餐桌。</p>
        <div class="hero-actions">
          <a class="button primary" href="#/series">探索長秈10號系列</a>
          <a class="button secondary" href="#/story">品牌故事</a>
        </div>
      </div>
      <a class="hero-scroll-cue" href="#home-brand-story" aria-label="往下滑">
        <span>↓</span>
        <span>往下滑</span>
      </a>
    </section>

    <section id="home-brand-story" class="section brand-story-section">
      <div class="section-heading">
        <div>
          <p class="eyebrow">品牌故事</p>
          <h2>從宜蘭三星的健康土壤開始，建立每一口安心。</h2>
        </div>
      </div>
      <div class="story-columns">
        <p>心有戚戚焉以宜蘭三星有機農業為基礎，選擇適合土地與風土的作物，從稻米、黑豆到日常養生飲品，讓健康不只是口號，而是能被每天實踐的生活選擇。</p>
        <p>我們相信好的農產來自對土地的尊重，也來自可被檢驗、可被追溯的製程。品牌將產地、驗證與商品資訊清楚呈現，讓選購回到安心與信任。</p>
      </div>
    </section>

    <section class="section trust-section">
      <div>
        <p class="eyebrow">安心驗證</p>
        <h2>讓信任有憑據，也讓健康看得見。</h2>
        <p>以有機驗證、SGS檢驗與清楚標示建立基礎信任，讓每一份商品都能被理解、被選擇。</p>
      </div>
      <div class="trust-visuals">
        <article><img src="assets/images/certificate-organic.svg" alt="有機驗證示意"><strong>有機驗證</strong></article>
        <article><img src="assets/images/certificate-sgs.svg" alt="SGS檢驗示意"><strong>SGS 檢驗</strong></article>
      </div>
    </section>

    <section class="section category-section">
      <div class="section-heading">
        <div>
          <p class="eyebrow">商品系列</p>
          <h2>以土地滋養日常，從主食到養生點心。</h2>
        </div>
        <a class="text-link" href="#/series">查看全系列</a>
      </div>
      <div class="category-grid">
        ${categories.map(([title, text]) => `<a href="#/series" class="category-card"><span></span><h3>${title}</h3><p>${text}</p></a>`).join("")}
      </div>
    </section>

    <section class="section">
      <div class="section-heading">
        <div>
          <p class="eyebrow">熱銷商品</p>
          <h2>日常裡最常被選擇的安心風味。</h2>
        </div>
      </div>
      <div class="product-grid four">${bestSellers}</div>
    </section>

    <section class="section journal-preview">
      <div>
        <p class="eyebrow">健康專欄</p>
        <h2>從飲食、產地與作物，理解健康生活的細節。</h2>
        <p>整理稻米知識、黑豆營養、米糠茶與水果醋的日常搭配，讓選品不只停留在購買，而能延伸成長期生活習慣。</p>
      </div>
      <a class="button secondary" href="#/journal">閱讀專欄</a>
    </section>
  `;
}
