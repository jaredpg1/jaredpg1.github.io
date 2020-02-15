<template>
  <base-section
    id="highlights"
    class="grey lighten-3"
  >
    <v-container>
      <v-row align="center">
        <v-col
          cols="12"
          md="6"
        >
          <v-img
            :src="require('@/assets/theme.png')"
            class="mx-auto"
            max-width="90%"
          />
        </v-col>

        <v-col
          class="px-3 px-md-12"
          cols="12"
          md="6"
        >
          <base-heading>Custom Themes</base-heading>

          <base-subheading>
            Take your Vue/Vuetify experience to the next level with hand crafted themes.
          </base-subheading>

          <base-text>
            <v-responsive max-width="450">
              Each theme is custom built by the author of Vuetify, John Leider. Every purchase comes with chat support, free updates for life and active bug fixes. Looking for an Admin Dashboard? Vuetify has partnered with the popular theme site Creative Tim to bring high quality <a href="#!">backend themes</a> built using Vue and Vuetify.
            </v-responsive>
          </base-text>
        </v-col>

        <v-col
          class="my-3"
          cols="12"
        />

        <v-col
          class="px-3 px-md-12"
          cols="12"
          md="6"
        >
          <base-heading>Branded Clothing</base-heading>

          <base-subheading>
            Represent and support Vuetify by wearing official apparel
          </base-subheading>

          <base-text>
            <v-responsive max-width="450">
              All of Vuetify's products are built with high quality materials and are available in a variety of colors and variants. Have a question about Vuetify products? <a
                href="mailto:shop@vuetifyjs.com"
                target="_blank"
                rel="noopener noreferrer"
              >Send us an email</a>.
            </v-responsive>
          </base-text>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <v-img
            alt="Jacket Highlight"
            :src="require('@/assets/jacket.png')"
            class="mx-auto"
            max-width="90%"
          />
        </v-col>

        <v-col
          class="my-3"
          cols="12"
        />

        <v-col
          cols="12"
          md="6"
        >
          <v-img
            :src="require('@/assets/github.png')"
            class="mx-auto"
            max-width="60%"
          />
        </v-col>

        <v-col
          class="px-3 px-md-12"
          cols="12"
          md="6"
        >
          <base-heading>Supports OSS</base-heading>

          <base-subheading>
            All purchases go to the continued maintenance and development of the Vuetify framework.
          </base-subheading>

          <base-text>
            <v-responsive max-width="450">
              The Vuetify store is built and maintained by the author, John Leider. All sales directly support the continued maintenance and development of the

              <a
                href="https://vuetifyjs.com"
                target="_blank"
                rel="noopener"
              >Vuetify framework</a>.
              Like this theme? <a href="#!">Buy it here</a>.
            </v-responsive>
          </base-text>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'AboutHighlights',
  }
</script>
