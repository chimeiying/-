# 心有戚戚焉 Design System

本文件記錄目前本機官網原型使用的品牌識別、色票與首頁視覺規範。正式上線前，所有頁面應優先沿用本文件與 `assets/css/styles.css` 的 CSS Variables。

## Logo 規範

- 正式 Logo：繁體中文「戚」字＋稻穗外框版本。
- 網站使用路徑：`assets/images/logo-qih-final-transparent.png`
- Header、Hero 與獨立商品/購物頁 Logo 均使用同一檔案。
- 禁止使用舊版 Logo、AI 重繪 Logo、簡化版 Logo。
- 舊檔 `logo-qih.png`、`logo-qih-final.png` 保留備份，不刪除。

## 品牌色票

```css
:root {
  --brand-green: #0B6B3A;
  --brand-green-dark: #0B6B3A;
  --gold-primary: #E5C66A;
  --gold-dark: #E5C66A;
  --gold-light: #E5C66A;
  --gold-deep: #E5C66A;
  --neutral-white: #F7F3E9;
}
```

主要使用：

- 土地綠 `#0B6B3A`：Header、主要背景、區塊基底。
- 米白 `#F7F3E9`：文字、留白、輕量背景。
- 稻穗金 `#E5C66A`：Logo 搭配、品牌標題、按鈕與重點資訊。

禁止使用：

- 深墨綠
- 黑綠色
- 藍綠色
- 灰綠色

## Header

- Header 固定於頁面頂部。
- 左側顯示正式 Logo 與品牌名稱「心有戚戚焉」。
- 導覽與購物連結沿用稻穗金。
- Header Logo 使用 `assets/images/logo-qih-final-transparent.png`。

## Hero

Hero 以品牌識別與信任感為主，不過度強調單一米種。

主文案：

```text
心有戚戚焉
為健康把關

從健康土壤開始，
守護每一口安心。

381項 SGS 檢驗合格
一年一期自然熟成
```

CTA：

- 主要按鈕：立即選購
- 次要按鈕：認識品牌

Hero Logo：

- 使用正式透明 PNG。
- 尺寸需小於品牌名稱，品牌名稱為第一視覺主角。

## 首頁區塊順序

1. Hero
2. 品牌核心價值
3. 人氣商品
4. 安心驗證
5. 購物流程
6. 品牌故事導引
7. Footer
