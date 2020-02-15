<template>
  <v-container
    :fluid="fluid"
    tag="section"
  >
    <slot />
  </v-container>
</template>

<script>
  export default {
    name: 'BaseSection',

    props: {
      fluid: {
        type: Boolean,
        default: true,
      },
    },
  }
</script>
