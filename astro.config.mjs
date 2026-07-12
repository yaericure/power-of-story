// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://yaericure.github.io',
  base: '/power-of-story',
  integrations: [
    starlight({
      title: '故事的力量',
      description: '你的故事就是你的人生——檢視舊故事、改寫新故事,讓敘事帶動行為改變。',
      defaultLocale: 'root',
      locales: { root: { label: '正體中文', lang: 'zh-TW' } },
      customCss: ['./src/styles/theme.css'],
      lastUpdated: false,
      pagination: true,
      sidebar: [
        { label: '前言:故事的力量'.replace(':',':'), slug: 'unit00' },
        {
          label: '第一部 舊故事 Old Stories',
          items: [
            { label: '第1章 這就是你的故事?', slug: 'unit01' },
            { label: '第2章 故事的前提,人生的目的', slug: 'unit02' },
            { label: '第3章 你是多誠實的敘事者?', slug: 'unit03' },
            { label: '第4章 你活的真是自己的故事嗎?', slug: 'unit04' },
            { label: '第5章 內在的聲音', slug: 'unit05' },
          ],
        },
        {
          label: '第二部 新故事 New Stories',
          items: [
            { label: '第6章 說故事的三大法則', slug: 'unit06' },
            { label: '第7章 關鍵不在時間', slug: 'unit07' },
            { label: '第8章 你有活出最佳故事的資源嗎?', slug: 'unit08' },
            { label: '第9章 向自己灌輸新故事', slug: 'unit09' },
            { label: '第10章 把故事化為行動:訓練任務與儀式', slug: 'unit10' },
            { label: '第11章 不只是文字:完成故事、完成使命', slug: 'unit11' },
            { label: '第12章 八步驟打造轉變的故事板', slug: 'unit12' },
          ],
        },
      ],
    }),
    react(),
  ],
  vite: { plugins: [tailwindcss()] },
});
