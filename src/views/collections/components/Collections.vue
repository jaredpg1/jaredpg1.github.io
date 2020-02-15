<template>
  <base-section id="collections-collections">
    <div
      v-if="collection"
      class="headline text-center mb-6"
    >
      Check out more Collections
    </div>

    <v-container>
      <v-row
        :key="collectionKey"
        justify="center"
      >
        <v-col
          v-for="(c, i) in collections"
          :key="i"
          cols="auto"
          class="primary--text"
        >
          <router-link
            :to="{
              name: 'Collections',
              params: { collection: c.handle }
            }"
          >
            <v-hover>
              <template v-slot="{ hover }">
                <v-avatar :size="collection ? 96 : 168">
                  <v-img :src="(c.image || {}).src">
                    <v-overlay
                      :class="collection ? 'body-2' : 'body-2'"
                      :color="hover ? 'primary' : 'black'"
                      absolute
                      class="align-center justify-center"
                      opacity=".8"
                    >
                      <div v-text="c.title" />
                    </v-overlay>
                  </v-img>
                </v-avatar>
              </template>
            </v-hover>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  // Utilities
  import {
    sync,
  } from 'vuex-pathify'

  export default {
    name: 'CollectionsCollections',

    computed: {
      collection: sync('route/params@collection'),
      defaultSrc: sync('app/defaultSrc'),
      collections () {
        const collections = sync('collections/collections').get.call(this)

        return collections.filter(collection => {
          return ![
            this.collection,
            process.env.VUE_APP_SHOPIFY_DEFAULT_COLLECTION,
            process.env.VUE_APP_SHOPIFY_FEATURED_COLLECTION,
          ]
            .includes(collection.handle)
        }).sort((a, b) => {
          if (a.title > b.title) return 1
          if (a.title < b.title) return -1
          return 0
        })
      },
      collectionKey () {
        return this.collections.reduce((acc, cur) => (acc += cur.handle), '')
      },
    },
  }
</script>

<style>
  .v-avatar {
    height: 96px !important;
    width: 96px !important;
    min-width: 96px !important;
    font-size: 0.875rem !important;
  }
</style>
