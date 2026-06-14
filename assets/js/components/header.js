export const navItems = [
  { path: "/", label: "首頁" },
  { path: "/story", label: "品牌故事" },
  { path: "/series", label: "商品系列" },
  { path: "/verification", label: "安心驗證" },
  { path: "/journal", label: "健康專欄" },
  { path: "/contact", label: "聯絡我們" }
];

export function renderHeader(currentPath = "/", cartCount = 0) {
  const links = navItems
    .map((item) => {
      const active = currentPath === item.path ? "is-active" : "";
      return `<a class="${active}" href="#${item.path}">${item.label}</a>`;
    })
    .join("");

  return `
    <header class="site-header" data-site-header>
      <a class="header-brand-link" href="#/" aria-label="回到首頁">
        <img class="header-logo" src="assets/images/logo-qih-final-transparent.png?v=20260614-hero-slides-2" alt="心有戚戚焉正式Logo">
        <strong>心有戚戚焉</strong>
      </a>
      <button class="menu-toggle" type="button" aria-label="開啟選單" data-menu-toggle>
        <span></span><span></span><span></span>
      </button>
      <nav class="site-nav" data-site-nav>${links}</nav>
      <div class="commerce-nav" aria-label="購物功能">
        <a href="#/login">會員登入</a>
        <a href="#/favorites">收藏商品</a>
        <a href="#/orders">訂單查詢</a>
        <a class="cart-link" href="#/cart">購物車<span>${cartCount}</span></a>
      </div>
    </header>
  `;
}

export function bindHeader() {
  const toggle = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-site-nav]");

  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    nav.classList.toggle("is-open");
    toggle.classList.toggle("is-open");
  });
}
