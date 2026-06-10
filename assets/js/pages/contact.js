export function contactPage() {
  return `
    <section class="page-hero">
      <p class="eyebrow">Contact</p>
      <h1>聯絡我們</h1>
      <p>需要企業禮盒、批次檢驗資訊、通路合作或健康生活品牌合作，都可以留下訊息。</p>
    </section>
    <section class="section contact-layout">
      <form class="contact-form">
        <label>姓名<input type="text" placeholder="請輸入姓名"></label>
        <label>Email<input type="email" placeholder="hello@example.com"></label>
        <label>洽詢項目<select><option>商品購買</option><option>企業禮贈</option><option>安心驗證</option><option>合作洽談</option></select></label>
        <label>訊息<textarea rows="5" placeholder="請寫下想了解的內容"></textarea></label>
        <button class="button primary" type="button">送出訊息</button>
      </form>
      <aside class="contact-card">
        <h2>品牌客服</h2>
        <p>hello@hsy-rice.example</p>
        <p>週一至週五 09:00 - 18:00</p>
        <p>宜蘭三星有機農業｜健康生活品牌</p>
      </aside>
    </section>
  `;
}
