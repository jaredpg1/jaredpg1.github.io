// Vuetify Documentation https://vuetifyjs.com

import Vue from 'vue'
import Vuetify, {
  VDivider,
  VFadeTransition,
  VRow,
  VSlideXTransition,
} from 'vuetify/lib'
// import colors from 'vuetify/lib/util/colors'

// Icons
import {
  mdiChevronLeftCircle,
  mdiChevronRightCircle,
} from '@mdi/js'

Vue.use(Vuetify, {
  components: {
    VDivider,
    VFadeTransition,
    VRow,
    VSlideXTransition,
  },
})

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg',
    values: {
      prev: mdiChevronLeftCircle,
      next: mdiChevronRightCircle,
    },
  },
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#9c756f',
        secondary: '#d5b9b2',
        green: '#567568',
        accent: '#582c4d',
      },
      dark: {},
    },
  },
})
