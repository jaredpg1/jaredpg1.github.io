<template>
  <v-container class="pt-12">
    <v-row>
      <v-col
        style="text-align: center;"
        cols="12"
        md="5"
      >
        <base-heading>Contact Info</base-heading>

        <v-responsive
          class="title grey--text text--darken-1 font-weight-light font-italic mb-12"
        >
          Please feel free to reach out to us with your questions and comments.
        </v-responsive>
      </v-col>

      <v-col
        cols="12"
        md="7"
      >
        <write-to-us />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'ContactInfo',

    components: {
      WriteToUs: () => import('@/components/WriteToUs'),
    },
  }
</script>
