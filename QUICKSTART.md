# 快速开始

## 1. 安装依赖

```bash
npm install
```

## 2. 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000

## 3. 添加文章

在 `posts/` 目录创建 Markdown 文件：

```markdown
---
title: 我的第一篇文章
date: 2025-01-08
series: 教程
category: 技术
---

## 引言

这是文章内容...

## 正文

支持 **加粗**、*斜体*、`代码` 等 Markdown 语法。

### 子标题

子标题会自动添加到目录中。
```

## 4. 构建静态站点

```bash
npm run build:static
```

构建后的文件在 `out/` 目录。

## 5. 部署

参考 [DEPLOYMENT.md](./DEPLOYMENT.md) 了解详细部署步骤。

## 功能说明

- **首页**: 显示所有文章列表
- **文章页**: 显示文章内容和目录
- **系列页**: 按系列分组显示文章
- **分类页**: 按分类分组显示文章
- **主题切换**: 点击右上角按钮切换明暗主题
- **404 页面**: 访问不存在的页面时显示

## 文章 Frontmatter

- `title` (必需): 文章标题
- `date` (必需): 发布日期 (YYYY-MM-DD)
- `series` (可选): 系列名称
- `category` (可选): 分类名称

## 支持的 Markdown 语法

- 标题 (H1-H6)
- 段落
- 列表 (有序/无序)
- 链接
- 图片
- 代码块
- 引用
- 表格 (GFM)
- 删除线
- 任务列表

## 技术栈

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- MDX Bundler
- gray-matter
- next-themes
- next-sitemap

