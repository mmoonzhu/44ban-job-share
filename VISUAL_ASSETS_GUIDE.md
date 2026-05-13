# 视觉资源与实现建议

本项目不需要外部图片素材。建议使用 Emoji、CSS 图形、简单 SVG 和动画实现。

---

# 一、整体视觉方向

关键词：

- 卡通太空
- 深空蓝紫渐变
- 明亮按钮
- 圆角卡片
- 半透明玻璃感
- 大图标
- 大字号
- 适合投屏

建议背景：

```css
body {
  background:
    radial-gradient(circle at 20% 20%, rgba(255,255,255,0.18), transparent 25%),
    radial-gradient(circle at 80% 10%, rgba(116,185,255,0.18), transparent 30%),
    linear-gradient(135deg, #111342 0%, #26185f 45%, #0b102f 100%);
  color: #fff;
}
```

---

# 二、建议配色

```css
:root {
  --space-deep: #0b102f;
  --space-purple: #26185f;
  --card-bg: rgba(255, 255, 255, 0.12);
  --card-border: rgba(255, 255, 255, 0.22);
  --text-main: #ffffff;
  --text-soft: #d8dcff;
  --primary: #5ecbff;
  --secondary: #f6c343;
  --danger: #ff6b6b;
  --success: #69db7c;
  --china-red: #e53935;
  --china-gold: #f6c343;
  --blue: #42a5f5;
  --silver: #cfd8dc;
  --white: #ffffff;
}
```

---

# 三、图标资源

## 全局

| 含义 | Emoji |
|---|---|
| 飞船 | 🚀 |
| 地球 | 🌍 |
| 火星 | 🔴 |
| 终点 | 🏁 |
| 小行星 | 🌑 |
| 产品岗 | 🚀 |
| 设计岗 | 🎨 |
| 开发岗 | 💻 |
| 维护岗 | 🛠️ |
| 完成 | ✅ |
| 提示 | 💬 |

## 产品岗

| 含义 | Emoji |
|---|---|
| 防护罩 | 🛡️ |
| 科学仪器 | 🔬 |
| 速度 | ⚡ |
| 任务单 | 📋 |

## 设计岗

| 含义 | Emoji |
|---|---|
| 调色板 | 🎨 |
| 国旗 | 🇨🇳 |
| 闪光 | ✨ |

## 开发岗

| 含义 | Emoji |
|---|---|
| 前进 | ⬆️ |
| 左转 | ↩️ |
| 右转 | ↪️ |
| 执行 | ▶️ |
| 清空 | 🧹 |
| 重置 | 🔄 |

## 维护岗

| 含义 | Emoji |
|---|---|
| 加温 | 🔥 |
| 降温 | ❄️ |
| 充电 | ☀️ |
| 维修 | 🧑‍🚀 |
| 低温 | ❄️ |
| 高温 | 🔥 |
| 电量不足 | 🌫️ |
| 撞击 | 💥 |

---

# 四、飞船图形建议

## 方案 A：Emoji 飞船

优点：简单稳定。  
适合开发岗迷宫、维护岗飞行场景。

```html
<div class="ship-emoji">🚀</div>
```

通过 CSS `transform: rotate(...)` 表示方向。

## 方案 B：CSS 飞船

优点：可以做涂色、变形、国旗放置。  
建议用于产品岗和设计岗。

可用结构示例：

```html
<div class="rocket-design">
  <div class="rocket-part rocket-body" data-part="body"></div>
  <div class="rocket-part rocket-shield" data-part="shieldStripe"></div>
  <div class="rocket-part rocket-arm" data-part="arm"></div>
  <div class="rocket-part rocket-tail" data-part="tail"></div>
  <div class="flag-marker">🇨🇳</div>
</div>
```

CSS 中用 `border-radius`、`clip-path`、`box-shadow` 等实现卡通飞船。

---

# 五、动画建议

## 1. 卡片悬停

```css
.card:hover {
  transform: translateY(-4px) scale(1.02);
}
```

## 2. 愿望泡泡漂浮

```css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
```

## 3. 飞船抖动

```css
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-6px); }
  50% { transform: translateX(6px); }
  75% { transform: translateX(-4px); }
}
```

## 4. 成功庆祝

可以使用简单星星粒子：

```html
<div class="confetti">✨ 🎉 ✨</div>
```

## 5. 设计岗飞船展示旋转

```css
@keyframes showcaseSpin {
  from { transform: rotate(0deg) scale(1); }
  to { transform: rotate(360deg) scale(1.05); }
}
```

---

# 六、维护岗视觉状态类

建议实现这些 CSS class：

```css
.ship-cold {
  filter: hue-rotate(160deg) brightness(1.2);
  box-shadow: 0 0 24px rgba(120, 220, 255, 0.85);
}

.ship-hot {
  filter: hue-rotate(-30deg) saturate(1.8);
  box-shadow: 0 0 28px rgba(255, 90, 60, 0.9);
}

.ship-dark {
  filter: brightness(0.45);
  animation: blink 0.6s infinite alternate;
}

.ship-damaged {
  box-shadow: 0 0 26px rgba(255, 80, 40, 0.95);
}
```

可以叠加文字/Emoji：

- 低温：❄️❄️
- 高温：🔥🔥
- 没电：🌫️
- 损伤：💥

---

# 七、投屏设计建议

- 页面主容器最大宽度：1100px-1200px。
- 标题字号建议：32px-44px。
- 正文字号建议：20px-26px。
- 按钮字号建议：20px-24px。
- 按钮高度建议：48px 以上。
- 开发岗代码框字号建议：20px-22px。
- 迷宫格子尺寸建议：60px-80px，根据屏幕自适应。

---

# 八、声音建议

本项目可以不做声音。如果要做，使用 Web Audio API 简单生成提示音，避免音频文件依赖。

建议：

- 点击按钮：短促提示音。
- 成功：上扬音。
- 错误：低沉短音。

如果实现时间有限，直接省略声音，不影响验收。
