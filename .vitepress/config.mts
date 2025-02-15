import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-

export default defineConfig({
  title: "Jianer Docs",
  description: "开源 · 模块化 · 易于配置",
  lastUpdated: true,
  base: '/jianer/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-
    nav: [
      { text: 'Home', link: '/' },
    ],
    editLink: {
      pattern: 'https://github.com/SRInternet-Studio/Jianer_QQ_bot/wiki/:path/_edit'
    },
    sidebar: [
      {
        text: 'Home',
        items: [
          { text: '快速开始', link: '/faststart' },
          { text: '用户组', link: '/Configure-User-Group' },
          { text: '使用AI功能', link: '/Configuring-AI-Functions' },
          { text: '插件开发(更新中)', link: '/Create-a-New-Plugin' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SRInternet-Studio/Jianer_QQ_bot/' }
    ]      
  }
})
