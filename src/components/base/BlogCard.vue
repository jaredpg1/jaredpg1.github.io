<template>
  <v-hover>
    <template v-slot="{ hover }">
      <v-card
        :aria-label="`Link to ${item.title}`"
        :href="item.href"
        class="d-flex flex-column"
        rel="noopener noreferrer"
        target="_blank"
      >
        <v-img
          :src="item.src"
          height="100%"
          max-height="250"
        />

        <div
          class="px-5 pb-4 pt-8"
          style="position: relative;"
        >
          <v-btn
            :class="hover ? 'mt-n8' : ''"
            absolute
            aria-label="Link to Article"
            class="transition-swing"
            color="accent"
            fab
            large
            right
            top
          >
            <v-icon v-text="mdiLink" />
          </v-btn>

          <div
            class="title font-weight-bold mb-3"
            v-text="item.title"
          />

          <div v-text="item.text" />
        </div>

        <v-card-actions class="mt-auto flex-wrap justify-center justify-md-start">
          <v-btn
            aria-label="Author"
            class="mr-0 mr-md-3 text-capitalize font-weight-light"
            color="grey"
            text
          >
            <v-icon
              left
              v-text="mdiAccount"
            />

            By {{ item.user }}
          </v-btn>

          <v-btn
            aria-label="Publish Date"
            class="text-capitalize font-weight-light ml-0 ml-md-3"
            color="grey"
            text
          >
            <v-icon
              left
              v-text="mdiCalendar"
            />

            {{ item.date }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-hover>
</template>

<script>
  // Icons
  import {
    mdiAccount,
    mdiCalendar,
    mdiLink,
  } from '@mdi/js'

  export default {
    name: 'BaseBlogCard',

    props: {
      item: {
        type: Object,
        default: () => ({
          title: '',
          text: '',
          user: '',
          date: '',
          src: '',
          to: {},
        }),
      },
    },

    data: () => ({
      mdiAccount,
      mdiCalendar,
      mdiLink,
    }),
  }
</script>
