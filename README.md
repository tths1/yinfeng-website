# 音逢｜中日谐音文化小志

在声音里遇见另一种语言：收集中日之间有趣的谐音、音读与文化回声。

## 功能

- **谐音词集**：分门别类收录中日谐音词条（巧合、音读、音译、个人联想）
- **空耳制造器**：输入中文，自动生成日语假名拟音与罗马音
- **今日谐音**：每日轮换的精选词条，支持发音试听
- **深色模式**：一键切换明暗主题
- **后台管理**：`/admin/` 提供编辑器，支持登录与内容管理

## 技术

纯原生 HTML / CSS / JavaScript 静态网站，无需构建，无后端依赖。

```
index.html      主页面
style.css       样式
app.js          应用逻辑与词集数据
pinyin-data.js  拼音注音数据
admin/          后台编辑器（admin-auth.js 为 Netlify Identity 客户端）
```

## 本地运行

直接用浏览器打开 `index.html`，或启动任意静态服务器：

```bash
python3 -m http.server 8000
```

访问 http://localhost:8000

## 在线演示

GitHub Pages：https://github.com/ 用户名 / 仓库名 /pages 形式的地址（见仓库 Settings → Pages）
