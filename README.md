# 音逢｜中日谐音文化小志

> 在声音里，遇见另一种语言。

“音逢”是一个面向中日语言爱好者的互动网页项目。它不把中文翻译成日文，而是根据汉字拼音与日语假名的相近读音，逐字生成可朗读的日语“空耳”表达，让使用者从声音角度重新观察汉字、假名与文化传播。作品采用 AI 辅助开发，运行时使用可解释、可复现的本地规则，不上传用户输入。

- 在线体验（参赛演示）：<https://otowai-sound-encounters.netlify.app/>
- 备用镜像（GitHub Pages）：<https://tths1.github.io/yinfeng-website/>

## 项目亮点

- **空耳制造器**：输入中文、日文或混合词句，按逐字音感规则生成假名与罗马音。
- **非意译设计**：生成过程只处理读音相近性，不把“我”翻译成“わたし”等语义对应。
- **同音字复用**：相同拼音的汉字自动归入同一规则（如“他、她、它”共用 /ta/），多音字（如“行”xing/hang）单独建行，输出稳定且便于持续校对。
- **朗读时长匹配**：首次朗读会通过 Web Speech API 静音测量中文原句和生成假名的基准时长，按 `假名时长 / 中文时长` 自动换算朗读语速，使两者节奏接近；用户仍可用滑条微调。
- **可检索词集与历史**：词集支持按中文、假名、出处搜索及类别筛选；生成历史保存在本机。
- **可维护的规则库**：内置 694 条拼音—假名映射规则，由 `scripts/generate-phonetic-rounds.mjs` 生成并经人工校对；管理者可通过管理端继续维护，公共页面不显示编辑区。
- **响应式与深色模式**：适配电脑、手机浏览，尊重系统“减少动效”偏好。

## 技术方案

| 模块 | 实现方式 |
| --- | --- |
| 前端页面 | HTML5、CSS3、原生 JavaScript，无需构建框架 |
| 音感生成 | 拼音映射表 + 同音字复用 + 未命中字的音节簇回退 |
| 浏览器朗读 | Web Speech API（`SpeechSynthesisUtterance`） |
| 时长匹配 | 静音实测中文和假名基准时长，自动换算朗读语速 |
| 本地状态 | `localStorage` 保存主题、历史和本地草稿 |
| 规则服务 | Netlify Functions（`/api/mappings`）+ Netlify Blobs，写入接口需管理员身份 |
| 部署 | Netlify（主站）、GitHub Pages（静态镜像） |

## 目录结构

```text
index.html               页面结构
style.css                页面样式与响应式规则
app.js                   词库、转换、朗读和交互逻辑
pinyin-data.js           汉字拼音数据
admin/                   管理端入口（admin-auth.js 为 Netlify Identity 客户端）
public/og.png            社交分享卡片图
netlify/functions/       映射规则读取与受保护写入接口（mappings.ts）
netlify.toml             Netlify 构建配置
scripts/                 规则生成与静态发布脚本
docs/                    参赛技术说明、录屏脚本与提交清单
```

## 本地运行

直接用浏览器打开 `index.html`，或启动任意静态服务器：

```bash
python3 -m http.server 8000
```

访问 <http://localhost:8000>。如需打包发布文件或调试 Netlify Functions：

```bash
node scripts/build-static.mjs          # 生成 dist/client
npx netlify dev                         # 本地运行 Functions（需 Netlify CLI）
```

> 说明：GitHub Pages 镜像环境下，“分享发现”提交与后台规则同步依赖的 Netlify Functions 自动降级为本地保存；词集展示、空耳制造器、今日谐音等核心功能均可正常体验。

## 参赛材料

- [技术说明](docs/技术说明.md)
- [AI 辅助开发记录](docs/AI辅助开发记录.md)
- [演示录屏脚本](docs/演示录屏脚本.md)
- [提交前检查清单](docs/参赛提交清单.md)

## AI 使用说明

本作品将 AI 用于需求分析、方案设计、代码审查和测试用例设计；访客实际使用时不调用在线大模型，也不会上传输入内容。空耳生成由本项目的可校对拼音—假名规则引擎完成。完整过程见 [AI 辅助开发记录](docs/AI辅助开发记录.md)。

## 使用边界

本项目的“空耳”属于语言游戏和声音联想，不用于证明中文、日文读音存在严格的一一历史对应关系。词库会持续校对和扩充。

## 许可

[MIT](LICENSE)
