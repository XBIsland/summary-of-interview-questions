export default {
  base: '/summary-of-interview-questions/',
  themeConfig: {
    siteTitle: '面试题总结',
    nav: [
      { text: '首页', link: '/' },
      { text: '基础', link: '/base/', activeMatch: '/base/' }
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/XBIsland/summary-of-interview-questions'
      }
    ],
    sidebar: {
      '/base/': [
        {
          text: 'JS',
          items: [
            { text: '数据类型', link: '/base/js_data_type' },
            { text: 'Two', link: '/base/two' }
          ]
        },
        {
          text: 'BrowserDom',
          items: [{ text: '事件', link: '/base/event' }]
        }
      ]
    }
    // sidebar:
    // [
    //   {
    //     text: 'Guide',
    //     collapsible: true,
    //     items: [
    //       { text: 'Introduction', link: '/introduction' },
    //       { text: 'Getting Started', link: '/getting-started', prev: 'Get Started | Markdown' }
    //     ]
    //   }
    // ]
  }
}
