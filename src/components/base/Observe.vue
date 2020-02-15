<template>
  <div
    v-observe="options"
    v-bind="$attrs"
    class="v-observe"
    :style="styles"
    v-on="$listeners"
  >
    <v-fade-transition appear>
      <slot v-if="isActive" />
    </v-fade-transition>
  </div>
</template>

<script>
  import { convertToUnit } from 'vuetify/lib/util/helpers'

  export default {
    name: 'BaseObserve',

    props: {
      minHeight: {
        type: [Number, String],
        default: undefined,
      },
    },

    data: () => ({
      isActive: false,
    }),

    computed: {
      options () {
        return {
          options: {
            offset: -400,
          },
          value: this.onObserve,
        }
      },
      styles () {
        return {
          minHeight: parseInt(this.minHeight) ? convertToUnit(this.minHeight) : this.minHeight,
        }
      },
    },

    methods: {
      onObserve (entries) {
        if (this.isActive) return

        this.isActive = Boolean(
          entries.find(entry => entry.isIntersecting)
        )
      },
    },
  }
</script>

<style lang="sass">
  .v-observe
    > *
      border-radius: inherit
</style>
