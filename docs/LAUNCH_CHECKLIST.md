# 康城生活圈 · 上线清单（zh-HK）

> 畀站长建峰用。做完先算「对外可收商户询价」；支付同账号可后做。

## P0 · 今日可做（唔使后端）

- [ ] **设定真实 WhatsApp**  
  改 `src/config/site.ts` 内 `CONTACT_WHATSAPP`（例如 `85291234567`，唔好加 `+`）。  
  留空时网站会显示「请先设定联络 WhatsApp」，商户仍可用「复制询价文案」。

- [ ] **隐私／查询电邮**  
  填 `PRIVACY_EMAIL`（或 README／页脚），例如 `privacy@你的域名.com`。

- [ ] **用价目页收首单**  
  打开 `/#/rates` 同「商户」Tab，确认 CTA「WhatsApp 询价试投」「留下电话，我哋联络你」正常。  
  Lead 暂存浏览器 `localStorage`（key: `lohas-life-merchant-leads`）——站长要喺同一装置查看，或叫商户贴文案去 WhatsApp。

- [ ] **GitHub Pages 已部署**  
  Live：https://hujhkukkyjkuy.github.io/lohas-life-forum/  
  分支：`gh-pages`（由 `dist` force-push）。

## P1 · 品牌与流量

- [ ] **自订域名**（可选）  
  例如 `lohas.你的域名.com` → GitHub Pages Custom domain + HTTPS。  
  记得改 Vite `base`（若改用根路径则设为 `'/'`）并更新分享连结。

- [ ] **Analytics**  
  加 Plausible / Umami / GA4（注意 HK 隐私披露）。最少追踪：首页、商户、`/rates`、CTA 点击。

- [ ] **OG 分享图**  
  一张 1200×630 康城海旁／品牌图，方便 WhatsApp／IG 转发。

## P2 · 产品下一代

- [ ] **Supabase（下一步）**  
  - 商户 lead 表（取代 localStorage）  
  - 简易帖子／留言（可选登录）  
  - Row Level Security；勿把 service key 放前端  

- [ ] **内容审核**  
  医疗帖必须保留「非医疗建议」；广告标「推广／合作」。

- [ ] **短视频稳定产出**  
  跟 `docs/VIDEO_PLAYBOOK.md` 每周至少 1 条商户口播 Demo。

## P3 · 收款（稍后）

- [ ] **付款方式**  
  初期：FPS／PayMe 发票即可；网页只做询价。  
  稍后：Stripe／PayMe Business 连结（勿急上自动扣款）。

- [ ] **简单合约／确认书**  
  一页 PDF：档期、位置（信息流／置顶／月费）、金额、示范内容审核权。

## 明确勿做

- [ ] **勿动「易租」**／`yizu.grok.me`（租赁暂停，本论坛独立）。

## 验收（Revenue-ready 最低标准）

1. 陌生人打开 Live URL，睇到点样付钱／询价（价目 + CTA）。  
2. `/#/rates` 存在，标示「示范价 · 可议」。  
3. Lead 表单本机可提交并 toast 成功。  
4. 本清单同 MONETIZATION／OPS 文件齐备。

---

最后更新：随仓库 main 分支；部署后请用手机 WhatsApp 内置浏览器实测一遍。
