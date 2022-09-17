export default {
  base: '/interview/',
  themeConfig: {
    siteTitle: '面试题总结',
    nav: [
      { text: '首页', link: '/' },
      { text: '基础', link: '/base/', activeMatch: '/base/' },
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
            { text: '数据类型', link: '/base/js_data_type' }, // /guide/one.md
            { text: 'Two', link: '/base/two' } // /guide/two.md
          ]
        }
      ],
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
