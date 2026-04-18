# SBKJ Website — Claude Design Brief

**用法**: 打开 claude.ai → Claude Design(左侧菜单) → 新建 project → 把下面内容贴进去当 context。

---

## 1. 公司 & 产品

- **公司**: SBKJ (江苏江阴)— HVAC 风管生产设备制造商,30 年历史
- **客户**: 全球 B2B 工业买家 — 沙特、澳大利亚、东南亚、欧洲承包商、数据中心/医院/洁净厂房总包
- **产品**: 66 款机器 — 自动风管生产线、螺旋风管成型机、TDF 法兰机、剪板/折弯/焊接设备
- **语言**: 网站覆盖 10 种语言(en/zh/es/ru/ar/tr/fr/pt/hi/id)
- **核心优势**: ISO 9001:2015、CE、5,000+ 台海外装机、12 小时工程师回复

---

## 2. 现有 Design System(来自 `assets/css/styles.css`)

**定位**: "Avant-garde B2B"(前卫工业)

### 色彩

```css
--bg: #030408;              /* 近黑深蓝背景 */
--bg-elevated: #080c14;
--bg-card: rgba(8, 14, 24, 0.85);
--accent: #00e5ff;          /* 主色: 青蓝(cyan)霓虹 */
--accent-dim: rgba(0, 229, 255, 0.15);
--accent-glow: rgba(0, 229, 255, 0.4);
--accent-warm: #f59e0b;     /* 次色: 琥珀金(amber) */
--text: #f1f5f9;            /* 近白主文字 */
--text-muted: #94a3b8;      /* 柔和灰 */
--text-dim: #64748b;
--border: rgba(148, 163, 184, 0.18);
```

### 字体

```css
--font-head: "Playfair Display", Georgia, serif;   /* 标题: 衬线,有权威感 */
--font-body: "Inter", system-ui;                    /* 正文: 无衬线,现代 */
```

### 圆角 / 阴影

```css
--radius: 12px;
--radius-lg: 20px;
--shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
--transition: 0.25s cubic-bezier(0.4, 0, 0.2, 1);
```

**目前给人的感觉**: 像高端 SaaS(Stripe/Linear)加工业制造(Siemens)—— 暗色+青蓝霓虹是反传统 HVAC 行业的(同行多是蓝红白工业风)。

---

## 3. 页面资产(114 个 HTML 文件)

| 板块 | 数量 | 说明 |
|------|------|------|
| `product/` | 66 | 每款机器一个详情页(规格表 + 应用场景 + FAQ) |
| `insights/` | 15 | 技术文章(选型指南、对比、SMACNA 标准等) |
| `root/` | 11 | 首页、about、contact、factory、quality、faq、404、why-choose、pricing、videos |
| `categories/` | 7 | 6 大产品类别 + 索引页 |
| `industries/` | 5 | 洁净室、医院、数据中心、食品加工 + 索引 |
| `case-studies/` | 4 | 沙特/越南/澳洲实地案例 |
| `regions/` | 4 | 澳洲/中东/东南亚 + 索引 |

---

## 4. Iteration 目标(优先级从高到低)

### P0 — 急需诊断
1. **Design Critique**: 首页(`index.html`)、主产品页(`product/sbal-v.html`)、主类别页(`categories/auto-duct-lines.html`)—— 一致性、层级感、CTA 转化路径
2. **Accessibility Audit**: 首页 + 一个 insights 长文章 + 一个产品页 —— WCAG 2.1 AA(暗色高对比度、语义 HTML、RTL 支持:阿语)
3. **UX Writing**: 产品页规格表的 label(Dimension/Voltage/Power 等)、CTA 按钮、404 页文案、询盘表单错误提示

### P1 — 视觉升级
4. **产品详情页模板重做**: 66 个产品页用同一个模板,现在稍显平铺,能不能加规格对比、"买家看了还看什么"、ROI 计算器
5. **行业页(`industries/`)重新设计**: 数据中心、洁净室、医院、食品加工 —— 每个行业做一个沉浸式 hero + case 回放
6. **案例研究页**: 现在 4 个案例 —— 增加数据可视化(产能、工期、ROI),做成可复制模板

### P2 — 新增模块
7. **设备选型器**(quiz):按厂房面积/产量/预算推荐机器组合
8. **互动式工厂布局图**:让买家自己摆机器试空间
9. **live demo 视频墙**:现有 `videos.html` 比较静态

---

## 5. 给 Claude Design 的 prompt 模板

### 做一次 Critique(先做这个)
```
I'm iterating on sbkjduct.com, a B2B HVAC duct machinery
manufacturer's website. Here's the current design system:
[paste section 2 above]

Please audit my homepage for:
1. Visual hierarchy (does CTA flow work?)
2. B2B industrial credibility (would a Saudi contractor
   trust this?)
3. Mobile responsiveness
4. Consistency with design system

I'll paste HTML + screenshot next.
```
接着把 `index.html` 截图或代码贴进去。

### 做 Accessibility Audit
```
Audit the attached page for WCAG 2.1 AA compliance, with
specific attention to:
- Dark mode contrast ratios (bg: #030408, text: #f1f5f9)
- Arabic RTL rendering (we support ar)
- Keyboard navigation
- Screen reader semantics
Page: [paste HTML]
```

### 做 UX Writing
```
Rewrite these spec-table labels for B2B industrial buyers
(concise, precise, no marketing fluff). Must work in
10 languages (en/zh/es/ru/ar/tr/fr/pt/hi/id):

Diameter
Weight
Voltage
Power
Dimension
Frequency
...
```

### 重设计一个产品页
```
Here's my current product detail page for SBAL-V auto duct
line. Redesign it to feel like a premium industrial
manufacturer (think Siemens / ABB product pages), while
keeping my existing dark+cyan design system. Output:
standalone HTML I can hand back to Claude Code.
[paste product/sbal-v.html]
```

### Handoff 回 Claude Code
Claude Design 生成的方案 → 点 "Handoff to Claude Code" → 它会生成一份给我(Claude Code)的指令,我这边直接实现到 114 个页面上。

---

## 6. 关键限制(请 Claude Design 注意)

- **不要改变 `data-i18n="..."` / `data-i18n-html="..."` 属性** —— 这是我这边翻译系统的接口(2874 keys × 10 langs 已上线)
- **保留 CSS 变量名** `--bg`, `--accent` 等 —— 不要引入新的 token 系统
- **保持 `<main>` 标签结构** —— 脚本扫描以这个为边界
- **产品页/文章页不要打散 DOM** —— 后端 sitemap 生成器靠 H1/H2 定位

---

## 7. 配合 Claude Code 的工作流

```
你在 Claude Design 做 critique / redesign
        ↓
     handoff
        ↓
回到 Claude Code(当前 session)
        ↓
我把方案实现到代码:
  - 单页 redesign → 一个产品页模板 → 自动应用到 66 个产品页
  - 组件重设 → 改 styles.css 变量 → 全站生效
  - 文案改写 → 更新 i18n.js T dict + 触发所有 10 种语言翻译
```

---

## 下一步

1. 登录 https://claude.ai(Pro/Max/Team/Enterprise 账户)
2. 找到 **Design**(可能在 Plugins 里)
3. 新建 project,项目名: **SBKJ Website Iteration**
4. 把**第 1、2、3 节**贴进 context
5. 从**第 4 节 P0**里挑一个目标开始(推荐先做首页 Critique)
6. 做完之后回来告诉我结果,我同步改代码
