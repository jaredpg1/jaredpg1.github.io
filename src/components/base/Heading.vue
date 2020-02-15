<template>
  <component
    :is="tag"
    :class="{
      'display-2': $vuetify.breakpoint.mdAndUp,
      'display-1': $vuetify.breakpoint.smAndDown
    }"
    class="font-weight-bold mb-6 accent--text"
  >
    <slot />
  </component>
</template>

<script>
  export default {
    name: 'BaseHeading',

    props: {
      tag: {
        type: String,
        default: 'h2',
      },
    },
  }
</script>
