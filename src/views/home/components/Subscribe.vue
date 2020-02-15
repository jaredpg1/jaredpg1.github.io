<template>
  <v-sheet
    id="subscribe"
    class="d-flex align-center mx-n3"
    color="grey darken-4"
    dark
    tag="section"
    tile
  >
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <h2 class="display-1 font-weight-bold mb-3">
            Subscribe to our Newsletter
          </h2>

          <div>Stay up to date with our latest news and products</div>
        </v-col>

        <v-col
          class="ml-auto"
          cols="12"
          md="3"
        >
          <v-form
            action="https://www.getrevue.co/profile/vuetify/add_subscriber"
            method="post"
            name="revue-form"
            target="_blank"
            @submit="email = ''"
          >
            <v-text-field
              id="member_email"
              v-model="email"
              dark
              type="email"
              name="member[email]"
              label="Your Email Address"
            >
              <template v-slot:append-outer>
                <v-btn
                  aria-label="Subscribe to Newsletter"
                  class="mt-n1"
                  dark
                  icon
                  type="submit"
                >
                  <v-icon large>
                    $vuetify.next
                  </v-icon>
                </v-btn>
              </template>
            </v-text-field>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
  // Icons
  import {
    mdiSend,
  } from '@mdi/js'

  export default {
    name: 'HomeSubscribe',

    data: () => ({
      email: '',
      mdiSend,
    }),
  }
</script>
