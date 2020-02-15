
<script>
  export default {
    name: 'BaseText',

    functional: true,

    render: (h, { slots, listeners, props, data }) => h('h3', {
      staticClass: `body-1 font-weight-light mb-6 ${data.staticClass || ''}`.trim(),
      props,
      on: listeners,
    }, slots().default),
  }
</script>
