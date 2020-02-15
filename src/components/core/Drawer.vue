<template>
  <v-navigation-drawer
    v-model="drawer"
    bottom
    color="primary"
    dark
    fixed
    temporary
    width="280"
  >
    <v-list nav>
      <v-list-item>
        <v-spacer />

        <v-list-item-action class="mr-n2">
          <v-btn
            aria-label="Close Navigation Drawer"
            color="accent"
            depressed
            light
            min-width="0"
            width="40"
            @click="drawer = false"
          >
            <v-icon>$vuetify.close</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        exact
      >
        <v-list-item-icon>
          <v-icon v-text="item.icon" />
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title
            class="text-capitalize"
            v-text="item.text"
          />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  // Utilities
  import {
    sync,
  } from 'vuex-pathify'

  export default {
    name: 'CoreDrawer',

    computed: {
      drawer: sync('app/drawer'),
      items: sync('app/items'),
    },
  }
</script>
