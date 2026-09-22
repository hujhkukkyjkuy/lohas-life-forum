# 静态 GH Pages · SEO 备注

本站用 Vite + HashRouter，部署喺 GitHub Pages。

已做：
- `index.html` title／description／Open Graph／Twitter card／canonical
- 帖子详情「复制链接」（hash URL，方便转出封闭群）

限制：
- Hash 路由（`#/…`）对搜寻引擎不友善；真正可索引主要系入口页
- 动态 sitemap 喺纯静态托管较难自动生成

可选后续：
- 喺 `public/sitemap.xml` 手写核心路径提示（首页、#/rates、#/why-us、#/merchants）
- 或日后改 HistoryRouter + 404.html SPA fallback

优先：人手分享公开链接 + meta 标签，配合 `#/why-us` 说服商户。
