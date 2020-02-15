<template>
  <v-container
    id="write-to-us"
    class="mt-n8"
  >
    <v-row>
      <v-col
        cols="12"
        class="d-flex child-flex"
      >
        <v-sheet
          class="d-flex align-center"
          color="transparent"
          tile
        >
          <v-responsive
            class="mx-auto py-2"
            max-width="600"
          >
            <base-heading class="text-center">
              Write to Us
            </base-heading>

            <v-text-field
              v-model="email"
              label="Email Address"
            />

            <v-text-field
              v-model="subject"
              label="Subject"
            />

            <v-textarea
              v-model="message"
              label="Leave a Message"
            />
            <base-btn
              x-large
              @click="sendMessage"
            >
              Send Message
            </base-btn>
          </v-responsive>
        </v-sheet>
      </v-col>
    </v-row>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="375px"
    >
      <v-card>
        <v-card-title class="headline">
          {{ dialogHeaderText }}
        </v-card-title>
        <v-card-text>
          {{ dialogCardText }}
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            :loading="btnLoading"
            color="accent"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
  // import Pageclip from 'pageclip'
  export default {
    name: 'WriteToUs',

    metaInfo: {
      meta: [
        { name: 'twitter:site', content: '@vuetifyjs' },
      ],
    },

    data: () => ({
      btnLoading: false,
      dialog: false,
      dialogHeaderText: '',
      dialogCardText: '',
      email: '',
      message: '',
      rules: {
        required: v => (v || '') || 'This field is required',
      },
      subject: '',
    }),

    methods: {
      async sendMessage () {
        this.btnLoading = true
        // const pageClip = new Pageclip(process.env.VUE_APP_PAGECLIP_API)
        // const data = [
        //   {
        //     email: this.email,
        //   },
        //   {
        //     subject: this.subject,
        //   },
        //   {
        //     body: this.message,
        //   }]
        var xhr = new XMLHttpRequest()
        xhr.open('POST', 'https://send.pageclip.co/5CabPqA5gCzUd3qJueQiFzIFglNxskYb', true)

        // Send the proper header information along with the request
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.setRequestHeader('X-HASFETCH', true)
        xhr.setRequestHeader('X-REQMETHOD', 'form-v1')
        xhr.setRequestHeader('X-REQTRANSPORT', 'xhr')

        xhr.onload = () => { // Call a function when the state changes.
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              this.dialogHeaderText = 'Success!'
              this.dialogCardText = 'We have received your message and will get back to you as soon as possible! Thank you for shopping with us!'
              this.dialog = true
              this.btnLoading = false
              this.email = ''
              this.subject = ''
              this.message = ''
            } else {
              this.dialogHeaderText = 'Error!'
              this.dialogCardText = 'There was an error sending your message. Please try again later, or give us a call at (256) 341-0190.'
              this.dialog = true
              this.btnLoading = false
            }
          }
        }
        xhr.send(`email=${this.email}&subject=${this.subject}&body=${this.message}`)

        // const response = await fetch('https://send.pageclip.co/xoj09hSRZRhT7PptQkoXz1eQoakRe364', {
        //   method: 'POST', // *GET, POST, PUT, DELETE, etc.
        //   mode: 'no-cors', // no-cors, *cors, same-origin
        //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //   credentials: 'same-origin', // include, *same-origin, omit
        //   headers: {
        //     'Content-Type': 'application/json',
        //     'X-HASFETCH': true,
        //     'X-REQMETHOD': 'form-v1',
        //     'X-REQTRANSPORT': 'xhr',
        //   },
        //   body: JSON.stringify(data), // body data type must match "Content-Type" header
        // })
        // if (response.status === 0) {
        //   this.btnLoading = false
        //   this.dialog = true
        //   this.email = ''
        //   this.subject = ''
        //   this.message = ''
        // }
      },
    },
  }
</script>
