<template>
  <base-section
    id="loading"
    class="pt-0"
  >
    <v-container>
      <v-row>
        <v-col
          class="d-flex justify-center mb"
          cols="12"
          md="6"
        >
          <div class="mr-6">
            <v-skeleton-loader
              v-for="n in 3"
              :key="n"
              class="mb-6"
              type="image"
              height="50"
              width="50"
            />
          </div>

          <v-skeleton-loader
            type="image"
            height="500"
            width="531"
          />
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <v-skeleton-loader type="title" />

          <v-skeleton-loader type="paragraph@4" />

          <v-skeleton-loader type="button" />
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>
