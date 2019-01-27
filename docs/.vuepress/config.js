module.exports = {
  title: "springleo",
  head: [
    ['meta', { 'http-equiv': 'cache-control', content: 'no-cache, no-store, must-revalidate' }],
    ['meta', { 'http-equiv': 'pragma', content: 'no-cache' }],
    ['meta', { 'http-equiv': 'expires', content: '0' }],
  ],
  base: "/site/",
  dest: "site",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'blogs', link: 'https://lq782655835.github.io/blogs/' },
      {
        text: 'ui',
        items: [
            {
                text: 'yi-ui',
                link: 'https://github.com/lq782655835/yi-ui'
            },
            { text: 'node-vue-ui-website', link: 'https://github.com/lq782655835/node-vue-ui-website' }
        ]
      },
      {
          text: 'tools',
          items: [
              { text: 'yiai-cli', link: 'https://github.com/lq782655835/yiai-cli' },
              {
                  text: 'node-vuepress-auto-read',
                  link: 'https://github.com/lq782655835/node-vuepress-auto-read'
              },
              { text: 'json2ts', link: 'https://github.com/lq782655835/json2ts' },
              { text: 'svg-icon-webpack-plugin', link: 'https://github.com/lq782655835/svg-icon-webpack-plugin' }
          ]
      },
      {
          text: 'templates',
          items: [
              { text: 'vue', link: 'https://github.com/lq782655835/standard-vue-project' },
              {
                  text: 'typescript',
                  link: 'https://github.com/lq782655835/standard-vue-typescript-project'
              },
              {
                  text: 'official-website',
                  link: 'https://github.com/lq782655835/official-website-template'
              },
              {
                  text: 'electron',
                  link: 'https://github.com/lq782655835/electron-vue-template'
              },
              { text: 'mpvue', link: 'https://github.com/lq782655835/mpvue-project' }
          ]
      }
    ],
    sidebar: [
      '/',
      {
        title: "规范",
        collapsable: false
      },
      {
        title: "推荐",
        collapsable: false
      },
      {
        title: "总结",
        collapsable: false
      },
      {
        title: "解决方案",
        collapsable: false
      }
    ],
    lastUpdated: '最后更新时间', // string | boolean
  }
}