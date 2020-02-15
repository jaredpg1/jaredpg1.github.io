<template>
  <!-- <v-app-bar
    id="core-app-bar"
    ref="drawer"
    :elevate-on-scroll="!isSearching"
    :hide-on-scroll="!hasItems"
    :height="$vuetify.breakpoint.mdAndUp ? 112 : 64"
    :role="undefined"
    :style="`height: ${$vuetify.breakpoint.mdAndUp ? 176 : 128}px;`"
    app
    color="primary"
    dark
    extension-height="64"
  > -->
  <v-app-bar
    id="core-app-bar"
    ref="drawer"
    :elevate-on-scroll="false"
    :hide-on-scroll="false"
    :role="undefined"
    :height="75"
    :elevation="5"
    app
    color="primary"
    dark
  >
    <v-app-bar-nav-icon
      v-if="$vuetify.breakpoint.smAndDown"
      aria-label="Open Navigation Drawer"
      class="mr-3 align-self-center"
      @click="drawer = !drawer"
    />
    <v-container class="pa-1 fill-height">
      <v-row>
        <router-link
          :to="{ name: 'Home' }"
          aria-label="Link to Home"
          class="d-flex white--text text-decoration-none"
        >
          <v-img
            max-height="175"
            max-width="175"
            style="margin-left: 1em;"
            src="@/assets/logo-transparent2.png"
          />
          <!-- <v-avatar
            :size="$vuetify.breakpoint.mdAndUp ? 56 : 40"
            class="mr-3 hidden-sm-and-down"
            color="rgba(255, 255, 255, .15)"
          >
            <v-icon
              :size="$vuetify.breakpoint.mdAndUp ? 40 : 24"
              v-text="mdiShoeHeel"
            />
          </v-avatar> -->

          <v-toolbar-title
            class="display-1 font-weight-medium pb-0 align-self-center"
            :class="`${$vuetify.breakpoint.mdAndUp ? 'display-1' : 'headline'}`"
          >
            <!-- <span class="header-text">Goody 2 Shoes</span> -->
          </v-toolbar-title>
        </router-link>

        <v-spacer />

        <v-tab
          v-for="(item, i) in items"
          v-show="!$vuetify.breakpoint.smAndDown"
          :key="i"
          :exact="item.to.name === 'Home'"
          :to="item.to"
          active-class="font-weight-medium"
          class="mr-1 subtitle-1 white--text"
        >
          {{ item.text }}
        </v-tab>

        <cart-popout />

        <!-- Coming soon -->
        <!-- <base-btn
          aria-label="Search"
          class="ml-3"
          fab
          small
          @click="isSearching = !isSearching"
        >
          <v-icon v-text="mdiMagnify" />
        </base-btn> -->
      </v-row>
    </v-container>

    <!-- <template v-slot:extension>
      <v-tabs
        background-color="secondary"
        centered
        hide-slider
      >
        <v-container
          v-if="isSearching"
          class="pa-0 pr-4 white"
        >
          <v-autocomplete
            ref="search"
            append-icon=""
            append-outer-icon="$vuetify.close"
            background-color="white"
            flat
            height="64"
            hide-details
            hide-no-data
            label="Search for a product"
            light
            solo
            text-color="primary"
          >
            <template v-slot:append-outer>
              <v-icon
                class="mt-2"
                @click="isSearching = false"
              >
                $vuetify.close
              </v-icon>
            </template>
          </v-autocomplete>
        </v-container>

        <v-app-bar-nav-icon
          v-else-if="$vuetify.breakpoint.smAndDown"
          aria-label="Open Navigation Drawer"
          class="mr-auto ml-3 align-self-center"
          @click="drawer = !drawer"
        />

        <template v-else>
          <v-tab
            v-for="(item, i) in items"
            :key="i"
            :exact="item.to.name === 'Home'"
            :to="item.to"
            active-class="font-weight-medium"
            class="subtitle-1 white--text"
          >
            {{ item.text }}
            <v-icon
              v-if="i + 1 === items.length"
              right
              v-text="item.icon"
            />
          </v-tab>
        </template>
      </v-tabs>
    </template> -->
  </v-app-bar>
</template>

<script>
  // Utilities
  import {
    get,
    sync,
  } from 'vuex-pathify'

  import {
    mdiCart,
    mdiHeart,
    mdiMagnify,
    mdiBasket,
    mdiVuetify,
    mdiShoeHeel,
  } from '@mdi/js'

  export default {
    name: 'CoreAppBar',

    components: {
      CartPopout: () => import('@/components/CartPopout'),
    },

    data: () => ({
      appBar: null,
      isSearching: false,
      mdiCart,
      mdiHeart,
      mdiBasket,
      mdiVuetify,
      mdiMagnify,
      mdiShoeHeel,
    }),

    computed: {
      drawer: sync('app/drawer'),
      items: sync('app/items'),
      hasItems: get('cart/hasItems'),
    },

    watch: {
      hasItems (val) {
        if (!val) return

        this.$refs.drawer.isActive = true
      },
      async isSearching (val) {
        if (!val) return

        await this.$nextTick()

        this.$refs.search.focus()
      },
    },
  }
</script>

<style lang="sass">
  @import url('https://fonts.googleapis.com/css?family=Euphoria+Script&display=swap')
  #core-app-bar
    .v-toolbar__content
      z-index: 14 !important
    .header-text
      font-family: 'Euphoria Script', cursive
    .v-tab
      align-items: center
      display: flex
      flex: 0 1 auto
      justify-content: center
      min-width: 90px
      max-width: 360px
      outline: none
      padding: 0 16px
      position: relative
      text-align: center
      text-decoration: none
      text-transform: uppercase
      transition: none
      user-select: none
</style>
