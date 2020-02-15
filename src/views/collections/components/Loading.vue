<template>
  <base-section
    id="loading"
    class="pt-0"
  >
    <v-container>
      <v-row>
        <v-col
          v-for="n in 4"
          :key="n"
          cols="12"
          md="3"
        >
          <v-skeleton-loader type="card" />
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'CollectionsLoading',
  }
</script>
