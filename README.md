# 故事的力量・教學導讀網站

《The Power of Story: Rewrite Your Destiny in Business and in Life》
(吉姆・洛爾 Jim Loehr 著,Free Press 出版)的台灣正體中文教學導讀網站。
內容為各章重點整理、白話解說與思考題,**並非原書翻譯或全文**;
原文引用僅限每章至多兩句英文短金句(附中文翻譯)。

## 技術棧

- Vite 7 + React 19(HashRouter,可靜態部署)
- Tailwind CSS v4(class 策略深色模式)
- Lucide React 圖標
- react-markdown + remark-gfm + rehype-highlight(Markdown 內容渲染)

## 開發

```bash
npm install
npm run dev      # 開發伺服器
npm run build    # 產出 dist/
npm run preview  # 預覽 build 結果
```

## 內容編輯

章節內容在 `src/content/00.md`(前言)~ `12.md`(第12章),共 13 頁,
按「第一部 舊故事/第二部 新故事」分組;frontmatter 需含
`title / label / part / order` 四欄(part 為「前言」時側欄平鋪)。
支援四種 callout:`> [!TIP]`、`> [!WARNING]`、`> [!NOTE]`、`> [!ADVANCED]`。
新增章節只要新增 `NN.md` 檔,側欄、路由、上下章導覽會自動生成。

## 佈局與主題

三欄 docs 佈局(頂欄/側欄/右側 TOC scrollspy);主題色 teal,
用於側欄與 TOC 高亮、H2 分隔線、H3 側標、標題漸層條。
GitHub 連結位址在 `src/components/Navbar.jsx` 的 `GITHUB_URL`。
