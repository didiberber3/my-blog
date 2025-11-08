# 配置文件使用说明

本项目使用集中式配置文件来管理所有显示的文本内容。通过修改 `src/lib/config.ts` 文件，您可以轻松自定义博客的各个部分。

## 📁 配置文件位置

```
src/lib/config.ts
```

## 🎯 可配置内容

### 1. 博客基本信息
```typescript
blog: {
  name: "My Tech Blog",        // 博客名称（显示在导航栏）
  title: "Tech Insights",      // 网站标题（浏览器标签页）
  description: "Sharing technology insights and experiences", // 网站描述
  footerText: "Happy coding!", // 页脚文本
  homeTitle: "Welcome to My Blog", // 首页标题
}
```

### 2. 导航菜单
```typescript
navigation: {
  home: "首页",      // 首页导航文字
  series: "系列",    // 系列页面导航文字
  category: "分类",  // 分类页面导航文字
}
```

### 3. 文章相关
```typescript
posts: {
  noPostsMessage: "还没有文章，请在 posts/ 目录中添加 Markdown 文件。", // 无文章时的提示
  dateFormat: "yyyy-MM-dd", // 日期格式
}
```

### 4. 系列和分类页面
```typescript
pages: {
  series: {
    title: "文章系列",      // 系列页面标题
    description: "按系列浏览文章", // 系列页面描述
  },
  category: {
    title: "文章分类",    // 分类页面标题
    description: "按分类浏览文章", // 分类页面描述
  },
}
```

## 🚀 快速修改示例

### 修改博客名称
```typescript
// 修改前
name: "My Tech Blog"

// 修改后
name: "我的技术博客"
```

### 修改导航菜单为英文
```typescript
// 修改前
navigation: {
  home: "首页",
  series: "系列",
  category: "分类",
}

// 修改后
navigation: {
  home: "Home",
  series: "Series",
  category: "Category",
}
```

### 修改页脚文本
```typescript
// 修改前
footerText: "Happy coding!"

// 修改后
footerText: "感谢您的访问！"
```

## ⚠️ 注意事项

1. **实时生效**：修改配置文件后，开发服务器会自动重新加载，立即看到效果
2. **类型安全**：配置文件使用 TypeScript，修改时会有类型提示
3. **备份建议**：建议定期备份配置文件，避免误操作
4. **字符编码**：支持中文、英文等多种语言

## 🔄 更新日志

- 2025-01-08: 初始版本，支持基本配置功能
- 2025-01-08: 添加系列和分类页面配置

## 📞 支持

如果您在使用过程中遇到问题，请查看项目文档或提交 Issue。
