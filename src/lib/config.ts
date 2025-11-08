// 博客配置文件
// 在这里统一修改博客名称、导航菜单等显示文本

export const blogConfig = {
  // 博客基本信息
  blog: {
    name: "艹's Blog",        // 博客名称
    title: "Moon",      // 网站标题
    description: "Walking on the Moon", // 网站描述
    footerText: "Hope see you on the moon", // 页脚文本
    homeTitle: "Fly Me to the Moon", // 首页标题
  },

  // 导航菜单
  navigation: {
    home: "首页",      // 首页
    archive: "归档",    // 归档
  },

  // 文章相关
  posts: {
    noPostsMessage: "还没有文章，请在 posts/ 目录中添加 Markdown 文件。", // 无文章时的提示
    dateFormat: "yyyy-MM-dd", // 日期格式
  },

  // 主题切换
  theme: {
    light: "Light",    // 亮色主题
    dark: "Dark",      // 暗色主题
  },

  // 部署信息
  deployment: {
    lastDeployText: "LastUpdate:", // 最后部署时间文本
    notAvailable: "暂不可用",  // 不可用时的文本
  },

  // 系列和分类页面
  pages: {
    archive: {
      title: "",      // 归档页面标题
      description: "按归档浏览文章", // 归档页面描述
    },
    category: {
      title: "",    // 分类页面标题
      description: "按分类浏览文章", // 分类页面描述
    },
  },

  // 导航文本
  navigationText: {
    backToHome: "← Way Back Moon",
    backToArchive: "← Way back Category",
  },

  // SEO 和元数据
  seo: {
    siteName: "Moonshake++ Blog", // 站点名称
    defaultImage: "/favicon.ico", // 默认图片
  },
};

// 类型定义
export type BlogConfig = typeof blogConfig;
