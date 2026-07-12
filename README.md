# 故事的力量・教學導讀網站

《The Power of Story》(吉姆・洛爾 Jim Loehr 著,Free Press 出版)的教學導讀網站,以 Astro + Starlight 建置。
內容為重點整理、白話解說與思考題,**並非原書全文**;原文引用僅限每章至多兩句短金句。

## 開發

```bash
npm ci
npm run dev      # http://localhost:4321/power-of-story/
npm run build    # 產出 dist/
npm run preview
```

## 結構

- 內容:`src/content/docs/unit*.md`(共 13 篇)+ `index.mdx`(首頁)
- 側欄:`astro.config.mjs` 的 `sidebar`(新增章節要同步)
- 主題:teal,樣式在 `src/styles/theme.css`
- Callout:`:::tip[標題]`、`:::note[標題]`、`:::caution[標題]`
- 排版慣例:中文與英數之間加半形空格

線上網址:https://yaericure.github.io/power-of-story/(push main 自動部署)
