// const path = require('path')
// const PrerenderSPAPlugin = require('prerender-spa-plugin')

const plugins = []

// if (process.env.NODE_ENV === 'production') {
//   plugins.push(
//     new PrerenderSPAPlugin({
//       staticDir: path.join(__dirname, 'dist'),
//       routes: require('./data/rendered-routes.json'),
//       postProcess: route => {
//         // Defer scripts and tell Vue it's been server rendered to trigger hydration
//         route.html = route.html
//           .replace(/<script (.*?)>/g, '<script $1 defer>')
//           .replace(/display=swap"(.*?)>/g, `display=swap" $1 as="style" onload="this.onload=null;this.rel='stylesheet'">`)
//         return route
//       },
//     })
//   )
// }

module.exports = {
  publicPath: '/',

  devServer: {
    disableHostCheck: true,
  },

  transpileDependencies: [
    'vuetify',
  ],

  configureWebpack: {
    plugins,
  },

  css: {
    extract: true,
    loaderOptions: {
      sass: {
        data: '@import "~@/sass/main.scss"',
      },
      scss: {
        data: '@import "~@/sass/main.scss";',
      },
    },
  },

  pluginOptions: {
    webpackBundleAnalyzer: {
      analyzerMode: process.env.NODE_ENV === 'production' ? 'static' : 'server',
      openAnalyzer: false,
    },
  },
}
