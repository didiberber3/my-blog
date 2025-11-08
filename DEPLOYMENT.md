# 部署指南

## 前置要求

- Node.js ≥ 18
- npm
- GitHub 账户
- Vercel 账户

## 部署步骤

### 1. 创建 GitHub 仓库

```bash
# 如果还没有初始化 Git 仓库
git init
git add .
git commit -m "feat: init nextjs static blog"

# 创建 GitHub 仓库并推送
gh repo create my-blog --private --clone
git remote add origin <your-repo-url>
git push -u origin main
```

### 2. 在 Vercel 创建项目

1. 登录 [Vercel](https://vercel.com)
2. 点击 "New Project"
3. 导入 GitHub 仓库
4. 配置项目设置：
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build:static`
   - **Output Directory**: `out`
   - **Install Command**: `npm ci`

### 3. 获取 Vercel 凭证

1. **VERCEL_TOKEN**:
   - 前往 Vercel Settings → Tokens
   - 创建新 token
   - 复制 token 值

2. **ORG_ID** 和 **PROJECT_ID**:
   - 前往项目 Settings → General
   - 复制 "Organization ID" 和 "Project ID"

### 4. 配置 GitHub Secrets

1. 前往 GitHub 仓库
2. Settings → Secrets and variables → Actions
3. 添加以下 Secrets:
   - `VERCEL_TOKEN`: Vercel token
   - `ORG_ID`: Vercel Organization ID
   - `PROJECT_ID`: Vercel Project ID
   - `SITE_URL`: (可选) 你的网站 URL，用于站点地图

### 5. 自定义域名（可选）

1. 在 Vercel 项目设置中添加自定义域名
2. 在 DNS 提供商添加 CNAME 记录：
   - 类型: CNAME
   - 名称: @ 或 www
   - 值: cname.vercel-dns.com

### 6. 自动部署

完成以上配置后，每次推送到 `main` 分支，GitHub Actions 会自动：
1. 构建静态站点
2. 生成站点地图
3. 部署到 Vercel

## 本地测试

```bash
# 开发模式
npm run dev

# 构建静态站点
npm run build:static

# 预览构建结果（需要静态服务器）
npx serve out
```

## 添加新文章

1. 在 `posts/` 目录创建 Markdown 文件
2. 添加 frontmatter:
   ```markdown
   ---
   title: 文章标题
   date: 2025-01-08
   series: 系列名称（可选）
   category: 分类名称（可选）
   ---
   ```
3. 提交并推送:
   ```bash
   git add posts/your-post.md
   git commit -m "post: add new post"
   git push
   ```

## 故障排除

### 构建失败

- 检查 Node.js 版本（需要 ≥ 18）
- 检查依赖是否正确安装
- 查看 GitHub Actions 日志

### 站点地图不生成

- 检查 `next-sitemap.config.js` 配置
- 确保 `SITE_URL` 环境变量已设置
- 检查 `out/` 目录权限

### 主题切换不工作

- 检查 `next-themes` 是否正确安装
- 确认 `Providers` 组件已添加到 layout
- 检查浏览器控制台是否有错误

## 环境变量

可以在 `.env.local` 文件中设置（仅用于本地开发）：

```env
SITE_URL=https://yourdomain.com
NEXT_PUBLIC_DEPLOY_TIME=2025-01-08T00:00:00.000Z
```

在 Vercel 中，可以通过项目设置添加环境变量。

