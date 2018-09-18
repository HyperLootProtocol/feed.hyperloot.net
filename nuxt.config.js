module.exports = {
  head: {
    title: 'feed',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-touch-icon.png' },
      { rel: 'manifest',  href: '/site.webmanifest' },
      { rel: 'mask-icon',  href: '/safari-pinned-tab.svg', color: '#f53743' },
    ]
  },

  css: [
    'normalize.css',
    '@/assets/base.css'
  ],

  loading: { color: '#F53743' },

  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
  },

  modules: [
    '@nuxtjs/axios',
  ],

  plugins: [
    { src: '~plugins/social.js' }
  ],

  generate: {
    routes: [
      '/',
      // '/about',
      // '/test2'
    ]
  },

  serverMiddleware: [
    '~/api/index.js'
  ]
}

