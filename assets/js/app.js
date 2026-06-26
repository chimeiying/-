import { renderHeader, bindHeader } from "./components/header.js?v=20260614-hero-mask";
import { renderFooter } from "./components/footer.js?v=20260614-hero-mask";
import { homePage, bindHomeCarousel } from "./pages/home.js?v=20260614-hero-mask";
import { storyPage } from "./pages/story.js?v=20260626-brand-story-component";
import { seriesPage } from "./pages/series.js?v=20260614-hero-mask";
import { verificationPage } from "./pages/verification.js?v=20260614-hero-mask";
import { journalPage } from "./pages/journal.js?v=20260614-hero-mask";
import { productDetailPage } from "./pages/productDetail.js?v=20260614-hero-mask";
import { contactPage } from "./pages/contact.js?v=20260614-hero-mask";

const app = document.querySelector("#app");
let products = [];
let cart = JSON.parse(localStorage.getItem("hsy-cart") || "[]");
let favorites = JSON.parse(localStorage.getItem("hsy-favorites") || "[]");

const routes = {
  "/": homePage,
  "/story": storyPage,
  "/series": seriesPage,
  "/verification": verificationPage,
  "/journal": journalPage,
  "/contact": contactPage,
  "/cart": commercePage("購物車", "已加入的商品會出現在這裡。原型已保留購物流程、付款與配送資訊。"),
  "/login": commercePage("會員登入", "正式站可串接會員系統，用於收藏商品、訂單查詢與快速結帳。"),
  "/favorites": commercePage("收藏商品", "按下商品卡上的愛心，可作為收藏互動原型。"),
  "/orders": commercePage("訂單查詢", "正式站可輸入訂單編號或會員登入後查看配送狀態。")
};

function getPath() {
  const hash = window.location.hash.replace("#", "") || "/";
  return hash.startsWith("/") ? hash : `/${hash}`;
}

function render() {
  const path = getPath();
  const page = path.startsWith("/product/")
    ? productDetailPage({ products, productId: path.split("/").pop() })
    : (routes[path] || homePage)({ products });

  app.innerHTML = `
    ${renderHeader(path, cart.length)}
    <main>${page}</main>
    ${renderFooter()}
  `;
  updateMeta(path);
  bindHeader();
  bindHomeCarousel();
  bindCommerce();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

async function init() {
  const response = await fetch("assets/data/products.json");
  products = await response.json();
  render();
}

window.addEventListener("hashchange", render);
init();

function bindCommerce() {
  document.querySelectorAll("[data-add-cart]").forEach((button) => {
    button.addEventListener("click", () => {
      cart.push(button.dataset.addCart);
      localStorage.setItem("hsy-cart", JSON.stringify(cart));
      render();
    });
  });

  document.querySelectorAll("[data-buy-now]").forEach((button) => {
    button.addEventListener("click", () => {
      cart.push(button.dataset.buyNow);
      localStorage.setItem("hsy-cart", JSON.stringify(cart));
      window.location.hash = "#/cart";
    });
  });

  document.querySelectorAll("[data-favorite]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.favorite;
      favorites = favorites.includes(id) ? favorites.filter((item) => item !== id) : [...favorites, id];
      localStorage.setItem("hsy-favorites", JSON.stringify(favorites));
      button.classList.toggle("is-active", favorites.includes(id));
    });
    button.classList.toggle("is-active", favorites.includes(button.dataset.favorite));
  });
}

function commercePage(title, description) {
  return () => `
    <section class="page-hero commerce-hero">
      <p class="eyebrow">Commerce</p>
      <h1>${title}</h1>
      <p>${description}</p>
    </section>
    <section class="section commerce-panel">
      <div>
        <h2>購物系統原型</h2>
        <p>支援立即購買、加入購物車、會員登入、收藏商品與訂單查詢入口。</p>
      </div>
      <div class="payment-grid">
        <article><strong>信用卡</strong><span>線上刷卡付款</span></article>
        <article><strong>LINE Pay</strong><span>行動支付</span></article>
        <article><strong>ATM轉帳</strong><span>轉帳後安排出貨</span></article>
        <article><strong>黑貓宅急便</strong><span>常溫配送</span></article>
        <article><strong>超商取貨</strong><span>便利取件</span></article>
      </div>
    </section>
  `;
}

function updateMeta(path) {
  const productId = path.startsWith("/product/") ? path.split("/").pop() : "";
  const product = products.find((item) => item.id === productId);
  const title = product?.seoTitle || "心有戚戚焉｜為健康把關";
  const description = product?.seoDescription || "以宜蘭三星有機農業為基礎，從健康土壤開始，守護每一口安心。";
  document.title = title;
  setMeta("description", description);
  setMeta("og:title", title, "property");
  setMeta("og:description", description, "property");
  setMeta("og:type", product ? "product" : "website", "property");
  setMeta("og:image", product ? product.image : "assets/images/hero-sanxing-field.svg", "property");
  document.querySelectorAll("script[data-schema]").forEach((node) => node.remove());
  if (product) {
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.dataset.schema = "product";
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.name,
      description: product.seoDescription,
      image: product.image,
      brand: { "@type": "Brand", name: "心有戚戚焉" },
      offers: {
        "@type": "Offer",
        priceCurrency: "TWD",
        price: product.price,
        availability: "https://schema.org/InStock"
      }
    });
    document.head.append(schema);
  }
}

function setMeta(name, content, attr = "name") {
  let meta = document.querySelector(`meta[${attr}="${name}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attr, name);
    document.head.append(meta);
  }
  meta.setAttribute("content", content);
}
