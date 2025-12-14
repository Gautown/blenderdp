# 斑斓设绘研究猿 - GauTown Studio
![GauTown Studio Preview](/public/images/preview.webp)

一个基于 Astro 构建的现代化内容管理系统，专为设计师、开发者和技术爱好者打造的知识分享平台。 
- *代码托管在GitHub*
- *部署在Cloudflare Pages*
[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/Gautown/blenderdp)
## 🌟 项目特色

- ✅ **多内容分类管理** - 支持模型、工具、资产库、学习资料等多种内容类型
- ✅ **响应式设计** - 适配各种设备屏幕尺寸
- ✅ **高性能优化** - 100/100 Lighthouse 性能评分
- ✅ **SEO 友好** - 支持 Canonical URLs 和 OpenGraph 数据
- ✅ **站点地图支持** - 自动生成 sitemap.xml
- ✅ **RSS 订阅支持** - 便于用户订阅更新
- ✅ **Markdown & MDX 支持** - 灵活的内容创作方式
- ✅ **评论系统集成** - 使用 Giscus 实现基于 GitHub Discussions 的评论功能
- ✅ **内容管理系统** - 集成 Decap CMS (原 Netlify CMS) 便于内容管理

## 🚀 项目结构

```
.
├── public/                 # 静态资源文件
│   ├── admin/             # CMS 配置文件
│   ├── fonts/             # 字体文件
│   └── styles/            # 全局样式文件
├── src/
│   ├── components/        # 可复用组件
│   ├── content/           # 内容集合
│   │   ├── about/         # 关于页面内容
│   │   ├── asset-library/ # 资产库内容
│   │   ├── models/        # 模型相关内容
│   │   ├── site-config/   # 站点配置
│   │   ├── study-materials/ # 学习资料
│   │   └── tools/         # 工具相关内容
│   ├── layouts/           # 页面布局组件
│   └── pages/             # 页面路由
└── package.json           # 项目依赖和脚本
```

## 🧰 技术栈

- **框架**: [Astro](https://astro.build/)
- **部署**: [Cloudflare Workers](https://workers.cloudflare.com/)
- **内容管理**: [Decap CMS](https://decapcms.org/)
- **评论系统**: [Giscus](https://giscus.app/)
- **类型检查**: [TypeScript](https://www.typescriptlang.org/)
- **样式**: 原生 CSS + Bootstrap Icons

## 📦 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

启动本地开发服务器，通常在 `http://localhost:4321` 访问。

### 内容管理

```bash
npm run cms
```

启动 Decap CMS 本地代理服务器，通常在 `http://localhost:8081/admin/` 访问。

### 构建生产版本

```bash
npm run build
```

构建生产优化的静态站点到 `./dist/` 目录。

### 预览构建结果

```bash
npm run preview
```

在本地预览构建后的站点。

### 部署到 Cloudflare

```bash
npm run deploy
```

将站点部署到 Cloudflare Workers。

## 📁 内容管理

本项目使用 Astro 的内容集合功能管理不同类型的内容：

1. **模型 (Models)** - 3D 模型资源
2. **工具 (Tools)** - 软件和插件
3. **资产库 (Asset Library)** - 贴图、HDRIs 等资源
4. **学习资料 (Study Materials)** - 教程和文档
5. **关于 (About)** - 站点介绍信息

每种内容类型都有对应的 Markdown 文件，位于 `src/content/` 相应目录下。

## 🛠️ CMS 配置

项目集成了 Decap CMS，可通过 `/admin` 路径访问内容管理系统：  
浏览器地址栏输入：
~~~
- 生产环境: https://Your domain name/admin
- 本地开发: http://localhost:8081/admin
~~~
CMS 配置文件位于 `public/admin/` 目录：
- `config.yml` - 生产环境配置
- `config.local.yml` - 本地开发配置

## 💬 评论系统

项目使用 Giscus 作为评论系统，基于 GitHub Discussions 实现：

- 用户需要登录 GitHub 才能发表评论
- 评论数据存储在 GitHub Discussions 中
- 支持表情反应和邮件通知

## 🌐 在线访问

项目部署在 Cloudflare Pages 上，可通过以下地址访问：

[https://gautown.top](https://gautown.top)

## 👥 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目。

## 📄 许可证

本项目基于 Apache License 2.0 开源。

有关许可证的详细信息，请参阅 [LICENSE](LICENSE) 文件。

## 🙏 致谢

- [Astro](https://astro.build/) - 下一代网站构建工具
- [Cloudflare](https://www.cloudflare.com/) - 全球 CDN 和安全服务
- [Giscus](https://giscus.app/) - 基于 GitHub Discussions 的评论系统
- [Decap CMS](https://decapcms.org/) - 开源内容管理系统
