# 《火星探索·中国号》Codex 开发交付包

用途：把本文件夹交给 Codex，让它基于 PRD 开发一个单页 HTML 互动网页游戏，用于给小学四年级学生讲解软件开发中的四个岗位：产品岗、设计岗、开发岗、维护岗。

## 建议使用方式

1. 新建一个空项目文件夹。
2. 把本交付包中的所有文件放进项目根目录。
3. 打开 `CODEX_TASK_PROMPT.md`，把里面的内容完整复制给 Codex。
4. 要求 Codex 先阅读以下文件，再开始开发：
   - `PRD_v2.0.md`
   - `CONTENT_COPY.md`
   - `GAME_CONFIG_REFERENCE.js`
   - `VISUAL_ASSETS_GUIDE.md`
   - `ACCEPTANCE_CHECKLIST.md`
5. 目标交付物是一个可直接打开的 `index.html`。
6. 开发完成后，用 `ACCEPTANCE_CHECKLIST.md` 逐项验收。

## 目标产物

最终应得到：

```txt
index.html
```

要求：

- 单 HTML 文件
- 内联 CSS
- 内联 JavaScript
- 不依赖后端
- 尽量不依赖外部资源
- 可直接双击在浏览器打开
- 适合投屏演示

## 文件说明

| 文件 | 用途 |
|---|---|
| `CODEX_TASK_PROMPT.md` | 直接复制给 Codex 的开发任务提示词 |
| `PRD_v2.0.md` | 完整产品需求文档 |
| `CONTENT_COPY.md` | 全部页面文案、总结卡片、主持人讲解词 |
| `GAME_CONFIG_REFERENCE.js` | 游戏配置、关卡数据、迷宫预设、危机数据参考 |
| `VISUAL_ASSETS_GUIDE.md` | 视觉资源、Emoji、配色、CSS 动画建议 |
| `ACCEPTANCE_CHECKLIST.md` | 验收清单 |
| `RUNBOOK_FOR_PARENT.md` | 家长/主持人现场演示流程 |

## 开发优先级

优先级从高到低：

1. 四个关卡都能正常玩。
2. 顶部关卡导航和完成状态正确。
3. 每关都有岗位总结卡片。
4. 每关都有“讲解提示”弹窗。
5. 开发岗代码框逐行高亮执行。
6. 维护岗支持危机次数和速度设置。
7. 视觉风格儿童友好，适合投屏。

## 重要提醒

这是一个课堂演示游戏，不是正式航天模拟器。所有内容以儿童理解、现场演示稳定为第一目标。
