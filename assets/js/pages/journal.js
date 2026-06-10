export function journalPage() {
  const posts = [
    ["一年一期是什麼？三星稻作的自然節奏", "理解140天自然熟成，為什麼等待也是品質的一部分。"],
    ["長秈10號怎麼煮才好吃？", "從米水比、浸泡到保存，讓米飯更清爽粒粒分明。"],
    ["黑豆、黑豆漿與日常蛋白補充", "用簡單豆飲建立穩定飲食節奏。"],
    ["水果醋怎麼喝？", "氣泡水、溫水與料理調味的日常搭配。"]
  ];
  return `
    <section class="page-hero">
      <p class="eyebrow">Journal</p>
      <h1>健康專欄</h1>
      <p>這裡不是廣告文章，而是把土地、食材與健康生活慢慢說清楚的地方。</p>
    </section>
    <section class="section journal-grid">
      ${posts.map(([title, text]) => `<article><p class="eyebrow">Health Note</p><h2>${title}</h2><p>${text}</p><a class="text-link" href="#/journal">閱讀文章</a></article>`).join("")}
    </section>
  `;
}
