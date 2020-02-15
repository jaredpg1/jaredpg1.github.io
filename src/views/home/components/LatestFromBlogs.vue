<template>
  <base-section
    id="latest-from-blogs"
    :fluid="false"
  >
    <v-container class="px-0">
      <base-heading class="text-center mb-12">
        Latest From Blogs
      </base-heading>

      <v-row justify="center">
        <v-col
          v-for="(article, i) in articles"
          :key="i"
          class="d-flex"
          cols="12"
          md="6"
          lg="4"
        >
          <base-blog-card :item="article" />
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  // Utilities
  import {
    call,
    sync,
  } from 'vuex-pathify'

  export default {
    name: 'HomeLatestFromBlogs',

    computed: {
      articles: sync('blog/articles'),
    },

    created () {
      this.getArticles()
    },

    methods: {
      getArticles: call('blog/getArticles'),
    },
  }
</script>
