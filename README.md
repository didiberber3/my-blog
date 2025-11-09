# Moonshake++ Blog 🌙

一个基于现代技术栈构建的高性能静态博客系统，采用 Next.js App Router、Tailwind CSS 和 MDX 技术，支持主题切换、文章分类、系列管理等功能。

## 🌟 功能特性

### 核心功能
- ✅ **静态站点生成 (SSG)** - 使用 Next.js 静态导出，性能卓越
- ✅ **Markdown/MDX 支持** - 支持标准 Markdown 和 MDX 组件
- ✅ **响应式设计** - 完美适配桌面端和移动端
- ✅ **明暗主题切换** - 支持系统主题自动检测和手动切换
- ✅ **文章分类管理** - 支持系列(Series)和分类(Category)双重分类
- ✅ **文章目录(TOC)** - 自动生成文章目录，支持锚点导航
- ✅ **无限滚动** - 首页展示所有文章，无需分页
- ✅ **SEO 优化** - 自动生成站点地图和 robots.txt
- ✅ **404 页面** - 自定义 404 错误页面
- ✅ **部署时间显示** - 页脚显示最后部署时间

### 技术亮点
- **TypeScript** - 全类型安全支持
- **App Router** - 使用 Next.js 最新 App Router 架构
- **CSS 变量** - 动态主题切换，支持自定义颜色
- **MDX 处理** - 安全的 MDX 表达式处理，防止 XSS
- **GitHub Actions** - 自动化 CI/CD 流程
- **Vercel 集成** - 一键部署到 Vercel

## 🏗️ 项目结构

```
didiberber3-github.io/
├── posts/                    # Markdown 文章目录
│   ├── hello-world.md       # 示例文章
│   ├── Java汇总.md          # Java 系列文章
│   └── ...
├── src/                     # 源代码目录
│   ├── app/                # Next.js App Router
│   │   ├── page.tsx        # 首页 - 文章列表
│   │   ├── layout.tsx      # 根布局 - 导航和页脚
│   │   ├── globals.css     # 全局样式
│   │   ├── posts/          # 文章详情页
│   │   │   └── [slug]/     # 动态路由 - 文章详情
│   │   ├── series/         # 系列页面
│   │   └── category/       # 分类页面
│   ├── components/         # React 组件
│   │   ├── ThemeToggle.tsx # 主题切换按钮
│   │   └── TOC.tsx        # 文章目录组件
│   ├── lib/               # 工具函数
│   │   ├── posts.ts       # 文章数据获取
│   │   ├── mdx.ts         # MDX 处理工具
│   │   └── getPosts.ts    # 文章列表获取
│   ├── providers/         # 上下文提供者
│   │   └── ThemeProvider.tsx # 主题提供者
│   └── hooks/            # 自定义 Hooks
│       └── useTheme.ts   # 主题切换 Hook
├── public/               # 静态资源
├── scripts/              # 构建脚本
│   └── verify.js        # 构建验证脚本
├── .github/             # GitHub 配置
│   └── workflows/       # GitHub Actions
└── out/                 # 构建输出目录（静态站点）
```

## 🛠️ 技术栈构成

### 核心框架
- **[Next.js 16.0.1](https://nextjs.org/)** - React 全栈框架，支持 App Router
- **[React 19.2.0](https://react.dev/)** - 用户界面库
- **[TypeScript](https://www.typescriptlang.org/)** - 类型安全的 JavaScript

### 样式与 UI
- **[Tailwind CSS 3.4.18](https://tailwindcss.com/)** - 实用优先的 CSS 框架
- **[@tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography)** - Tailwind 排版插件

### 内容处理
- **[MDX Bundler 10.1.1](https://github.com/kentcdodds/mdx-bundler)** - MDX 编译和打包
- **[gray-matter 4.0.3](https://github.com/jonschlinkert/gray-matter)** - Front matter 解析
- **[remark-gfm 4.0.1](https://github.com/remarkjs/remark-gfm)** - GitHub Flavored Markdown 支持
- **[rehype-slug 6.0.0](https://github.com/rehypejs/rehype-slug)** - 标题锚点生成
- **[rehype-autolink-headings 7.1.0](https://github.com/rehypejs/rehype-autolink-headings)** - 标题自动链接

### 主题与功能
- **[next-themes 0.4.6](https://github.com/pacocoursey/next-themes)** - 主题切换管理
- **[next-sitemap 4.2.3](https://github.com/iamvishnusankar/next-sitemap)** - 站点地图生成
- **[date-fns 4.1.0](https://date-fns.org/)** - 日期格式化

### 开发工具
- **[ESLint](https://eslint.org/)** - 代码质量检查
- **[PostCSS](https://postcss.org/)** - CSS 处理
- **[Autoprefixer](https://github.com/postcss/autoprefixer)** - CSS 前缀自动添加

## 🚀 快速开始

### 环境要求
- Node.js ≥ 18.0.0
- npm ≥ 8.0.0

### 本地开发

1. **克隆项目**
```bash
git clone <your-repo-url>
cd didiberber3-github.io
```

2. **安装依赖**
```bash
npm install
```

3. **启动开发服务器**
```bash
npm run dev
```

4. **访问博客**
打开浏览器访问 [http://localhost:3000](http://localhost:3000)

### 添加新文章

1. **创建 Markdown 文件**
在 `posts/` 目录下创建新的 Markdown 文件：

```markdown
---
title: 文章标题
date: 2025-01-08
series: 系列名称（可选）
category: 分类名称（可选）
---

## 文章内容

支持标准 Markdown 语法和 MDX 组件。

- 列表项
- **粗体文本**
- `代码片段`

### 代码块

```javascript
console.log('Hello, World!');
```
```

2. **文件命名规范**
- 使用英文或中文文件名
- 避免特殊字符
- 建议使用连字符或下划线分隔

3. **Front Matter 字段**
- `title` (必填): 文章标题
- `date` (必填): 发布日期，格式 YYYY-MM-DD
- `series` (可选): 系列名称，用于系列文章归类
- `category` (可选): 分类名称，用于文章分类

## 📦 构建与部署

### 本地构建

```bash
# 构建静态站点
npm run build:static

# 预览构建结果
npx serve out
```

### 部署到 Vercel

#### 方法一：使用 GitHub Actions（推荐）

1. **创建 GitHub 仓库**
```bash
git init
git add .
git commit -m "feat: init nextjs static blog"
gh repo create didiberber3-github.io --private --clone
git push -u origin main
```

2. **在 Vercel 创建项目**
- 登录 [Vercel](https://vercel.com)
- 点击 "New Project"
- 导入 GitHub 仓库
- 配置构建设置：
  - **Framework Preset**: Next.js
  - **Build Command**: `npm run build:static`
  - **Output Directory**: `out`
  - **Install Command**: `npm ci`

3. **获取 Vercel 凭证**
- **VERCEL_TOKEN**: Vercel Settings → Tokens → Create Token
- **ORG_ID**: 项目 Settings → General → Organization ID
- **PROJECT_ID**: 项目 Settings → General → Project ID

4. **配置 GitHub Secrets**
在 GitHub 仓库设置中添加以下 Secrets：
- `VERCEL_TOKEN`: Vercel 访问令牌
- `ORG_ID`: Vercel 组织 ID
- `PROJECT_ID`: Vercel 项目 ID
- `SITE_URL`: (可选) 网站 URL，用于站点地图

5. **自动部署**
推送代码到 `main` 分支，GitHub Actions 会自动构建并部署到 Vercel。

#### 方法二：手动部署

```bash
# 构建静态站点
npm run build:static

# 部署到 Vercel
vercel --prod
```

### 自定义域名

1. **在 Vercel 添加域名**
   - 进入项目 Settings → Domains
   - 添加自定义域名

2. **配置 DNS**
   - 类型: CNAME
   - 名称: @ 或 www
   - 值: `cname.vercel-dns.com`

## ⚙️ 配置说明

### 环境变量

#### 本地开发 (.env.local)
```env
SITE_URL=https://yourdomain.com
NEXT_PUBLIC_DEPLOY_TIME=2025-01-08T00:00:00.000Z
```

#### 生产环境 (Vercel)
在 Vercel 项目设置中添加环境变量。

### 主题配置

主题颜色通过 CSS 变量定义，可在 `src/app/layout.tsx` 中修改：

```typescript
style={{
  '--bg-light': 'oklch(0.99 0 0)',
  '--text-light': 'oklch(0.21 0 0)',
  '--line-light': 'oklch(0.92 0 0)',
  '--bg-dark': 'oklch(0.15 0 0)',
  '--text-dark': 'oklch(0.95 0 0)',
  '--line-dark': 'oklch(0.27 0 0)',
} as React.CSSProperties}
```

### 站点地图配置

`next-sitemap.config.js` 中配置站点地图生成：

```javascript
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://yourdomain.com',
  generateRobotsTxt: true,
  outDir: 'out',
};
```

## 🔧 可用脚本

```bash
# 开发模式
npm run dev

# 构建生产版本
npm run build

# 构建静态站点（包含站点地图）
npm run build:static

# 启动生产服务器
npm run start

# 代码检查
npm run lint

# 验证构建
npm run verify
```

## 🐛 常见问题

### 构建失败
- 检查 Node.js 版本（需要 ≥ 18）
- 确认依赖是否正确安装
- 查看 GitHub Actions 构建日志

### 主题切换不工作
- 检查 `next-themes` 是否正确安装
- 确认 `ThemeProvider` 已添加到布局
- 检查浏览器控制台错误信息

### 站点地图不生成
- 检查 `SITE_URL` 环境变量是否设置
- 确认 `next-sitemap.config.js` 配置正确
- 检查构建输出目录权限

### MDX 渲染问题
- 确认 Markdown 语法正确
- 检查 front matter 格式
- 查看浏览器控制台错误信息

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 联系方式

- 项目地址: [GitHub Repository](https://github.com/your-username/didiberber3-github.io)
- 在线演示: [Live Demo](https://yourdomain.com)

---

**Made with ❤️ using Next.js, Tailwind CSS, and MDX**
