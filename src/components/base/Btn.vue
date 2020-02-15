<script>
  import { VBtn } from 'vuetify/lib'

  export default {
    name: 'BaseBtn',

    extends: VBtn,

    props: {
      color: {
        type: String,
        default: 'accent',
      },
    },

    computed: {
      classes () {
        return {
          ...VBtn.options.computed.classes.call(this),
          'text-none': true,
        }
      },
    },
  }
</script>
