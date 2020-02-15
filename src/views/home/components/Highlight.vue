<template>
  <div class="d-flex align-center px-6 py-6">
    <v-img
      :src="item.src"
      contain
      height="50"
      max-width="50"
    />

    <div class="ml-8">
      <div
        class="body-2 text-uppercase mb-2"
        v-text="item.heading"
      />

      <div
        class="body-1 font-weight-bold mb-3"
        v-text="item.subheading"
      />

      <div class="caption grey--text">
        *{{ item.caption }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeHighlight',

    props: {
      item: {
        type: Object,
        default: () => ({
          heading: '',
          subheading: '',
          caption: '',
          src: '',
        }),
      },
    },
  }
</script>
