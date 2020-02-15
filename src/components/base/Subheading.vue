<script>
  export default {
    name: 'BaseSubheading',

    functional: true,

    render: (h, { slots, listeners, props, data }) => h('h3', {
      ...data,
      staticClass: `headline font-weight-medium mb-4 ${data.staticClass}`.trim(),
      props,
      on: listeners,
    }, slots().default),
  }
</script>
