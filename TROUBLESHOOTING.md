# 故障排除指南

## 常见问题

### 1. 开发模式下文章页面返回 404

**问题**: 访问 `http://localhost:3000/posts/hello-world` 时出现 404 错误。

**原因**: Next.js 配置了 `output: 'export'` 静态导出模式，这会导致开发模式下动态路由无法正常工作。

**解决方案**:
1. 确保 `next.config.ts` 配置正确（已在最新版本中修复）
2. 重启开发服务器：
   ```bash
   # 停止当前服务器 (Ctrl+C)
   npm run dev
   ```
3. 确认 `posts/` 目录下存在对应的 Markdown 文件
4. 检查文件名是否正确（例如：`hello-world.md`）

### 2. 构建错误

**问题**: 运行 `npm run build:static` 时出错。

**解决方案**:
- 确保所有依赖已安装：`npm install`
- 检查 Node.js 版本（需要 ≥ 18）
- 查看错误日志，通常会有具体错误信息

### 3. MDX 编译错误

**问题**: 文章内容无法正确渲染。

**解决方案**:
- 检查 Markdown 文件的 frontmatter 格式是否正确
- 确保 frontmatter 使用 `---` 包裹
- 检查 Markdown 语法是否正确

### 4. 主题切换不工作

**问题**: 点击主题切换按钮没有反应。

**解决方案**:
- 检查浏览器控制台是否有错误
- 确保 `next-themes` 已正确安装
- 确认 `Providers` 组件已添加到 `layout.tsx`

### 5. 目录（TOC）不显示

**问题**: 文章页面右侧不显示目录。

**解决方案**:
- 确保文章中有 `h2` 或 `h3` 标题
- 检查浏览器控制台是否有 JavaScript 错误
- 等待页面完全加载（目录在内容渲染后生成）

## 开发模式 vs 生产模式

### 开发模式 (`npm run dev`)
- 使用正常的 Next.js 路由，支持动态路由
- 热重载，实时更新
- 不生成静态文件

### 生产模式 (`npm run build:static`)
- 生成静态 HTML 文件
- 所有路由在构建时预渲染
- 输出到 `out/` 目录

## 调试技巧

1. **查看控制台错误**:
   - 打开浏览器开发者工具
   - 查看 Console 和 Network 标签

2. **检查文件路径**:
   - 确保 `posts/` 目录在项目根目录
   - 检查文件扩展名（应为 `.md`）

3. **验证配置**:
   - 检查 `next.config.ts` 配置
   - 验证 `package.json` 中的脚本

4. **清理缓存**:
   ```bash
   # 删除 .next 目录
   rm -rf .next
   # 或 Windows
   rmdir /s .next
   
   # 重新安装依赖
   rm -rf node_modules
   npm install
   ```

## 获取帮助

如果问题仍然存在：
1. 检查 GitHub Issues
2. 查看 Next.js 文档
3. 检查相关包的文档（mdx-bundler, next-themes 等）

