<template>
  <v-row justify="center">
    <h2
      class="my-2 accent--text"
      :class="{
        'font-weight-medium': item.alt,
        'font-italic font-weight-black': !item.alt,
        [$vuetify.breakpoint.mdAndUp ? 'display-2' : 'display-1']: item.alt,
        [$vuetify.breakpoint.mdAndUp ? 'display-4' : 'display-1']: !item.alt,
      }"
      v-text="item.heading"
    />

    <div
      class="mb-2"
      :class="{
        'text-uppercase headline': !item.alt,
        'font-weight-medium': item.alt,
        [$vuetify.breakpoint.mdAndUp ? 'display-4' : 'title']: item.alt,
      }"
      v-text="item.subheading"
    />

    <div
      :class="{
        'font-weight-bold': !item.alt,
        'text-uppercase': item.alt,
        [$vuetify.breakpoint.mdAndUp ? 'display-2' : 'display-1']: item.alt,
        [$vuetify.breakpoint.mdAndUp ? 'display-4' : 'display-1']: !item.alt,
      }"
      v-text="item.tag"
    />
  </v-row>
  <!-- <v-card
    v-if="item"
    :aria-label="`Link to ${item.title}`"
    :to="item.to"
    class="mt-2 mx-auto"
    color="accent"
    elevation="2"
    width="50%"
    flat
    tile
  >
    <h2
      style="color: white; text-align:center"
      class="mb-3"
      :class="{
        'font-weight-medium': item.alt,
        'font-italic font-weight-black': !item.alt,
        [$vuetify.breakpoint.mdAndUp ? 'display-2' : 'display-1']: item.alt,
        [$vuetify.breakpoint.mdAndUp ? 'display-4' : 'display-1']: !item.alt,
      }"
      v-text="item.heading"
    />

    <div
      class="mb-2"
      :class="{
        'text-uppercase headline': !item.alt,
        'font-weight-medium': item.alt,
        [$vuetify.breakpoint.mdAndUp ? 'display-4' : 'title']: item.alt,
      }"
      v-text="item.subheading"
    />

    <div
      :class="{
        'font-weight-bold': !item.alt,
        'text-uppercase': item.alt,
        [$vuetify.breakpoint.mdAndUp ? 'display-2' : 'display-1']: item.alt,
        [$vuetify.breakpoint.mdAndUp ? 'display-4' : 'display-1']: !item.alt,
      }"
      v-text="item.tag"
    />

    <slot />
  </v-card> -->
</template>

<script>
  export default {
    name: 'BaseHero',

    props: {
      contain: {
        type: Boolean,
        default: false,
      },
      gradient: {
        type: String,
        default: '',
      },
      item: {
        type: Object,
        default: () => ({
          alt: false,
          contain: false,
          heading: '',
          overlay: '',
          src: '',
          subheading: '',
          tag: '',
          to: '',
        }),
      },
      maxHeight: {
        type: [Number, String],
        default: undefined,
      },
      minHeight: {
        type: [Number, String],
        default: undefined,
      },
    },

    computed: {
      imgAttrs () {
        return {
          aspectRatio: 16 / 9,
          contain: this.item.contain,
          gradient: this.gradient,
          minHeight: this.minHeight || '15vh',
          maxHeight: this.maxHeight || (this.$vuetify.breakpoint.smAndDown ? '60vh' : undefined),
          src: (this.item || {}).src || undefined,
        }
      },
    },
  }
</script>
