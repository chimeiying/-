import { productCard } from "../components/productCard.js?v=20260627-card-price-spec";

const heroSlides = [
  {
    image: "assets/images/hero-yilan-morning-ricefield.png",
    alt: "宜蘭三星晨霧稻田、遠方山脈與成熟稻穗",
    type: "brand",
    title: "心有戚戚焉",
    subtitle: "為健康把關",
    text: "從健康土壤開始，<br>守護每一口安心。",
    proofs: ["381項 SGS 檢驗合格", "一年一期自然熟成"],
    actions: [
      ["立即選購", "#/series", "primary"],
      ["認識品牌", "#/story", "secondary"]
    ]
  },
  {
    image: "assets/images/hero-slide-02.png",
    alt: "從產地到餐桌的安心米食情境",
    type: "compact",
    title: "從產地到餐桌，<br>看得見的安心",
    text: "一年一期自然熟成，<br>保留最純粹的稻穀香氣。",
    actions: [["立即選購", "#/series", "primary"]]
  },
  {
    image: "assets/images/hero-slide-03.png",
    alt: "有機黑豆漿與純淨原料情境",
    type: "compact",
    title: "自然的力量，<br>來自純淨原料",
    text: "從有機黑豆開始，<br>讓健康成為日常。",
    actions: [["立即選購", "#/series", "primary"]]
  }
];

const coreValues = [
  ["善待土地", "從土壤管理開始，讓作物在乾淨環境中自然生長。"],
  ["善待作物", "尊重一期一作的節奏，保留穀物與豆類的自然香氣。"],
  ["善待健康", "把日常入口的安心，交給可追溯、可檢驗的農產。"]
];

const shoppingSteps = [
  ["STEP 1", "選購商品"],
  ["STEP 2", "加入購物車"],
  ["STEP 3", "完成付款"],
  ["STEP 4", "快速出貨"],
  ["STEP 5", "安心享用"]
];

let heroCarouselTimer = null;

export function homePage({ products }) {
  const bestSellers = products.slice(0, 4).map(productCard).join("");

  return `
    <section class="hero-section brand-hero hero-carousel" data-hero-carousel>
      ${heroSlides.map((slide, index) => `
        <article class="hero-slide hero-slide-${slide.type} ${index === 0 ? "is-active" : ""}" data-hero-slide>
          <div class="hero-image">
            <img src="${slide.image}?v=20260614-hero-mask" alt="${slide.alt}">
          </div>
          <div class="hero-copy">
            <h1>${slide.title}</h1>
            ${slide.subtitle ? `<p class="hero-subtitle">${slide.subtitle}</p>` : ""}
            <p class="hero-statement">${slide.text}</p>
            ${slide.proofs ? `
              <div class="hero-proof">
                ${slide.proofs.map((proof) => `<span>${proof}</span>`).join("")}
              </div>
            ` : ""}
            <div class="hero-actions">
              ${slide.actions.map(([label, href, style]) => `<a class="button ${style}" href="${href}">${label}</a>`).join("")}
            </div>
          </div>
        </article>
      `).join("")}
      <button class="hero-carousel-arrow hero-carousel-prev" type="button" aria-label="上一張" data-hero-prev>‹</button>
      <button class="hero-carousel-arrow hero-carousel-next" type="button" aria-label="下一張" data-hero-next>›</button>
      <div class="hero-carousel-dots" aria-label="輪播導覽">
        ${heroSlides.map((slide, index) => `
          <button class="hero-carousel-dot ${index === 0 ? "is-active" : ""}" type="button" aria-label="第 ${index + 1} 張" data-hero-dot="${index}"></button>
        `).join("")}
      </div>
      <a class="hero-scroll-cue" href="#home-core-values" aria-label="往下滑">
        <span>↓</span>
        <span>往下滑</span>
      </a>
    </section>

    <section id="home-core-values" class="section core-value-section">
      <div class="section-heading centered">
        <p class="eyebrow">品牌核心價值</p>
        <h2>善待土地．善待作物．善待健康</h2>
      </div>
      <div class="values-grid">
        ${coreValues.map(([title, text]) => `
          <article>
            <span>${title}</span>
            <h3>${title}</h3>
            <p>${text}</p>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="section">
      <div class="section-heading">
        <div>
          <p class="eyebrow">人氣商品</p>
          <h2>日常餐桌上的安心選擇</h2>
        </div>
        <a class="text-link" href="#/series">查看全部商品</a>
      </div>
      <div class="product-grid four">${bestSellers}</div>
    </section>

    <section class="section trust-section">
      <div>
        <p class="eyebrow">安心驗證</p>
        <h2>用檢驗與產地透明，為每一口把關。</h2>
        <p>以有機驗證、SGS 檢驗與清楚的產地資訊，建立從農田到餐桌的信任。</p>
      </div>
      <div class="trust-visuals">
        <article><img src="assets/images/certificate-organic.svg" alt="有機驗證證書"><strong>有機驗證</strong></article>
        <article><img src="assets/images/certificate-sgs.svg" alt="SGS檢驗證明"><strong>SGS 檢驗</strong></article>
      </div>
    </section>

    <section class="section shopping-steps">
      <div class="section-heading centered">
        <p class="eyebrow">購物流程</p>
        <h2>從選購到上桌，每一步都清楚安心。</h2>
      </div>
      <div class="steps-grid">
        ${shoppingSteps.map(([step, text]) => `
          <article>
            <span>${step}</span>
            <h3>${text}</h3>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="section journal-preview brand-story-guide">
      <div>
        <p class="eyebrow">品牌故事</p>
        <h2>從宜蘭三星開始，把土地的純淨帶回日常。</h2>
        <p>認識我們如何從健康土壤、友善耕作與安心檢驗出發，建立值得信任的有機農產品牌。</p>
      </div>
      <a class="button secondary" href="#/story">認識品牌</a>
    </section>
  `;
}

export function bindHomeCarousel() {
  window.clearInterval(heroCarouselTimer);

  const carousel = document.querySelector("[data-hero-carousel]");
  if (!carousel) return;

  const slides = [...carousel.querySelectorAll("[data-hero-slide]")];
  const dots = [...carousel.querySelectorAll("[data-hero-dot]")];
  const prev = carousel.querySelector("[data-hero-prev]");
  const next = carousel.querySelector("[data-hero-next]");
  let activeIndex = 0;

  const showSlide = (index) => {
    activeIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slideIndex === activeIndex);
    });
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === activeIndex);
    });
  };

  const start = () => {
    const interval = window.matchMedia("(max-width: 560px)").matches ? 8000 : 6000;
    heroCarouselTimer = window.setInterval(() => showSlide(activeIndex + 1), interval);
  };

  const restart = () => {
    window.clearInterval(heroCarouselTimer);
    start();
  };

  prev?.addEventListener("click", () => {
    showSlide(activeIndex - 1);
    restart();
  });

  next?.addEventListener("click", () => {
    showSlide(activeIndex + 1);
    restart();
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      showSlide(Number(dot.dataset.heroDot));
      restart();
    });
  });

  start();
}
