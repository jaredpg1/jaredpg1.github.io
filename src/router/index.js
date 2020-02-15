import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Credit https://gist.github.com/thevangelist/8ff91bac947018c9f3bfaad6487fa149#gistcomment-2063326
function toKebab (string) {
  return string.replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase()
}

function route (path, name) {
  return {
    path,
    name,
    component: () => import(`@/views/${toKebab(name)}/Index`),
  }
}

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => window.scrollTo(0, 0),
  routes: [
    route('', 'Home'),
    route('/about-us', 'About'),
    route('/collections/:collection?', 'Collections'),
    route('/cart', 'Cart'),
    route('/contact-us', 'Contact'),
    route('/product/:handle', 'Product'),
    route('/terms-of-service', 'Terms'),
    route('/privacy-policy', 'Privacy'),
    route('/refund-policy', 'Refund'),
    route('/licenses', 'Licenses'),
    route('/thank-you', 'ThankYou'),
    route('*', '404'),
  ],
})

// Bootstrap Analytics
// Set in .env
// https://github.com/MatteoGabriele/vue-analytics
if (process.env.VUE_APP_GOOGLE_ANALYTICS) {
  Vue.use(require('vue-analytics').default, {
    id: process.env.VUE_APP_GOOGLE_ANALYTICS,
    router,
    autoTracking: {
      page: process.env.NODE_ENV !== 'development',
    },
  })
}

export default router
