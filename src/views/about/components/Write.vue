<template>
  <base-section
    id="write"
    class="white mb-n3 mb-md-n12"
  >
    <write-to-us />
  </base-section>
</template>

<script>
  export default {
    name: 'AboutWrite',

    components: {
      WriteToUs: () => import('@/components/WriteToUs'),
    },
  }
</script>
