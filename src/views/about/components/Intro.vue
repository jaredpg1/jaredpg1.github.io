<template>
  <base-section id="intro">
    <v-container>
      <v-row
        justify="center"
      >
        <v-col
          style="text-align: center"
          cols="12"
          md="6"
        >
          <v-card style="min-height: 300px;">
            <base-heading>
              <em>
                Shop the G2S
              </em>
            </base-heading>

            <!-- <base-subheading>
            Kickstart your next great application and support OSS all in the same process.
          </base-subheading> -->

            <base-text>
              Goody 2 Shoes offers a unique & exciting shopping experience for women of all ages! <br>
              You'll find brands you love, along with one of a kind pieces for those that are born to stand out! <br>
              We also have a fun collection of accessories including shoes, handbags, jewelry, and more!
            </base-text>

          <!-- <base-btn
            :block="$vuetify.breakpoint.smAndDown"
            class="mb-12"
            href="https://vuetifyjs.com"
            min-width="175"
            rel="noopener"
            target="_blank"
            x-large
          >
            Go to Vuetify
          </base-btn> -->
          </v-card>
        </v-col>

        <v-col
          style="text-align: center"
          cols="12"
          md="6"
        >
          <v-card style="min-height: 300px;">
            <base-heading>
              <em>
                Our Hours
              </em>
            </base-heading>

            <table style="font-weight: 300 !important; width: 100%;">
              <tr>
                <td style="text-align: right;">
                  Monday
                </td>
                <td style="padding-left: 2em;">
                  10:00 AM - 5:30 PM
                </td>
              </tr>
              <tr>
                <td style="text-align: right">
                  Tuesday
                </td>
                <td style="padding-left: 2em;">
                  10:00 AM - 5:30 PM
                </td>
              </tr>
              <tr>
                <td style="text-align: right">
                  Wednesday
                </td>
                <td style="padding-left: 2em;">
                  10:00 AM - 5:30 PM
                </td>
              </tr>
              <tr>
                <td style="text-align: right">
                  Thursday
                </td>
                <td style="padding-left: 2em;">
                  10:00 AM - 5:30 PM
                </td>
              </tr>
              <tr>
                <td style="text-align: right">
                  Friday
                </td>
                <td style="padding-left: 2em;">
                  10:00 AM - 5:30 PM
                </td>
              </tr>
              <tr>
                <td style="text-align: right">
                  Saturday
                </td>
                <td style="padding-left: 2em;">
                  10:00 AM - 5:30 PM
                </td>
              </tr>
              <tr>
                <td style="text-align: right">
                  Sunday
                </td>
                <td style="padding-left: 2em;">
                  CLOSED
                </td>
              </tr>
            </table>
          <!-- <v-img
            class="mx-auto"
            max-width="400"
            src="https://cdn.vuetifyjs.com/images/logos/v-alt.svg"
          /> -->
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'AboutIntro',
  }
</script>
