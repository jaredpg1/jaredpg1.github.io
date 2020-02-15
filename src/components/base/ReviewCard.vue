<template>
  <div>
    <v-card
      min-height="220"
      class="pa-3 cust-review-card"
    >
      <v-row justify="center">
        <v-card-text
          class="font-italic subtitle-1"
          v-text="item.review"
        />
      </v-row>
      <v-row
        align="end"
        justify="end"
      >
        -&nbsp;
        <div
          class="mr-4 body-1 font-weight-medium"
          v-text="item.name"
        />
      </v-row>
    </v-card>
    <!-- <base-card
      min-height="220"
      class="pa-3"
    >
      <v-row justify="center">
        <v-card-text
          class="font-italic subtitle-1"
          v-text="item.review"
        />
      </v-row>
      <v-row
        align="end"
        justify="end"
      >
        -&nbsp;
        <div
          class="mr-4 body-1 font-weight-medium"
          v-text="item.name"
        />
      </v-row>

      <v-avatar
        class="mb-n12 ml-3 elevation-6"
        color="grey lighten-3"
        size="88"
      >
        <v-img :src="item.src" />
      </v-avatar>

      <div />
    </base-card> -->

    <!-- <v-container>
      <v-row>
        <v-col
          cols="8"
          offset="5"
        >
          <div
            class="subheading-1 font-weight-medium"
            v-text="item.name"
          />

          <div
            class="caption grey--text"
            v-text="item.title"
          />
        </v-col>
      </v-row>
    </v-container> -->
  </div>
</template>

<script>
  export default {
    name: 'BaseReviewCard',

    props: {
      item: {
        type: Object,
        default: () => ({
          review: '',
          src: '',
          name: '',
          title: '',
        }),
      },
    },
  }
</script>

<style>
  .cust-review-card {
    display: flex !important;
    flex-direction: column !important;
  }
</style>
